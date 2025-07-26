import { NotificationContext } from './NotificationContext';
import { useState, useCallback } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const NotificationProvider = ({ children }) => {
  const [toastData, setToastData] = useState({
    show: false,
    message: '',
    variant: 'info',
  });

  const showToast = useCallback((message, variant = 'info') => {
    setToastData({ show: true, message, variant });
  }, []);

  return (
    <NotificationContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg={toastData.variant}
          onClose={() => setToastData((prev) => ({ ...prev, show: false }))}
          show={toastData.show}
          delay={3000}
          autohide
        >
          <Toast.Body className="text-white">{toastData.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
