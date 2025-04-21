
import { Navigate } from 'react-router-dom';

export const AuthRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Example logic
  return !isAuthenticated ? children : <Navigate to="/home" />;
};
