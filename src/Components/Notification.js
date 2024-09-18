import { useState, useEffect } from "react";

const Notification = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Remove notification after it disappears
    }, 3000); // 3 seconds before disappearing

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return <div className={`notification ${type}`}>{message}</div>;
};

export default Notification;
