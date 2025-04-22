import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';

const NotificationPopup = () => {
  const { 
    notifications, 
    showNotificationPopup, 
    closeNotificationPopup, 
    markAsRead,
    isReadByUser 
  } = useNotifications();
  
  const [currentNotification, setCurrentNotification] = useState(null);
  
  useEffect(() => {
    if (notifications.length > 0 && showNotificationPopup) {
      // Get newest unread notification for the current user
      const newestUnread = [...notifications]
        .filter(n => !isReadByUser(n))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
          
      if (newestUnread) {
        setCurrentNotification(newestUnread);
      }
    }
  }, [notifications, showNotificationPopup, isReadByUser]);
  
  if (!showNotificationPopup || !currentNotification) return null;
  
  const handleClose = () => closeNotificationPopup();
  
  const handleMarkAsRead = () => {
    if (currentNotification) {
      markAsRead(currentNotification._id);
      closeNotificationPopup();
    }
  };
  
  const getBgColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-100';
      case 'warning': return 'bg-yellow-100';
      case 'error': return 'bg-red-100';
      default: return 'bg-blue-100';
    }
  };
  
  const getTextColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-800';
      case 'warning': return 'text-yellow-800';
      case 'error': return 'text-red-800';
      default: return 'text-blue-800';
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`w-full max-w-2xl mx-auto rounded-xl shadow-2xl overflow-hidden ${getBgColor(currentNotification.type)}`}>
        <div className="px-8 py-5 flex justify-between items-center">
          <h3 className={`text-2xl font-bold ${getTextColor(currentNotification.type)}`}>
            {currentNotification.title}
          </h3>
          <button 
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="bg-white px-8 py-6">
          <p className="text-gray-800 text-xl mb-6">{currentNotification.message}</p>
          <div className="flex justify-end">
            <button
              onClick={handleMarkAsRead}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-base font-medium"
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;