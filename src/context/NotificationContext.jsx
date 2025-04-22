import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/apiConfig';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Current user's ID for tracking personal read status
  const userId = localStorage.getItem('userId');

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      
      const response = await axios.get(API_ENDPOINTS.notifications.getAll, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'x-user-id': userId
        }
      });
      
      setNotifications(response.data);
      countUnread(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  // Count unread notifications for current user
  const countUnread = (notifs) => {
    // Filter notifications that current user hasn't read
    const count = notifs.filter(notification => 
      !notification.readBy || !notification.readBy.includes(userId)
    ).length;
    setUnreadCount(count);
  };

  // Mark notification as read for current user only
  const markAsRead = async (notificationId) => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      
      // Update to include user ID in readBy array instead of a global isRead flag
      await axios.patch(`${API_ENDPOINTS.notifications.update(notificationId)}`, 
        { 
          action: 'markAsRead',
          userId: userId 
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      // Update local state
      setNotifications(prev => 
        prev.map(notif => {
          if (notif._id === notificationId) {
            // Create or update readBy array
            const readBy = notif.readBy || [];
            if (!readBy.includes(userId)) {
              return { 
                ...notif, 
                readBy: [...readBy, userId] 
              };
            }
          }
          return notif;
        })
      );
      
      // Update unread count
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Delete notification (admin only)
  const deleteNotification = async (notificationId) => {
    try {
      const token = localStorage.getItem('token');
      
      await axios.delete(API_ENDPOINTS.notifications.delete(notificationId), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      // Update local state
      setNotifications(prev => prev.filter(notif => notif._id !== notificationId));
      fetchNotifications(); // Refresh the list
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  // Create notification (admin only)
  const createNotification = async (notificationData) => {
    try {
      const token = localStorage.getItem('token');
      
      // Initialize empty readBy array for new notifications
      const notificationWithReadBy = {
        ...notificationData,
        readBy: []
      };
      
      await axios.post(API_ENDPOINTS.notifications.create, notificationWithReadBy, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      // Refresh notifications
      fetchNotifications();
      return { success: true };
    } catch (error) {
      console.error('Error creating notification:', error);
      return { success: false, error };
    }
  };

  // Check if a notification is read by current user
  const isReadByUser = (notification) => {
    return notification.readBy && notification.readBy.includes(userId);
  };

  // Initial fetch when the app loads
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchNotifications();
    }
  }, []);

  // Show newest notification popup when we have unread notifications for this user
  useEffect(() => {
    if (notifications.length > 0 && notifications.some(n => !isReadByUser(n))) {
      setShowNotificationPopup(true);
    }
  }, [notifications]);

  const closeNotificationPopup = () => {
    setShowNotificationPopup(false);
  };

  const value = {
    notifications,
    unreadCount,
    loading,
    showNotificationPopup,
    fetchNotifications,
    markAsRead,
    deleteNotification,
    createNotification,
    closeNotificationPopup,
    isReadByUser
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};