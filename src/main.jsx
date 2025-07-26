import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import CartProvider from './context/CartProvider.jsx'
import NotificationProvider from './context/NotificationContext/NotificationProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </NotificationProvider>
  </StrictMode>,
)
