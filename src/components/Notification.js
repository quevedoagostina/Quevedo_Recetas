import React, { useState, useEffect } from 'react';

function Notification({ message, type, duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
}

export default Notification;