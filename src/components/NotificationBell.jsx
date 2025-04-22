import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';
import NotificationList from './NotificationList';

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { unreadCount, notifications, markAsRead } = useNotifications();

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  const handleNotificationClick = (id) => {
    markAsRead(id);
  };

  return (
    <div className="relative">
      <button 
        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
        onClick={toggleNotifications}
      >
        <Bell className="h-6 w-6 text-gray-800" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
          </div>
          
          <NotificationList 
            notifications={notifications} 
            onClick={handleNotificationClick} 
            maxHeight="max-h-96"
          />
          
          {notifications.length === 0 && (
            <div className="px-4 py-6 text-center text-gray-500">
              No notifications to display
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;