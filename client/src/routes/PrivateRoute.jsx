
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Example logic
  return isAuthenticated ? children : <Navigate to="/signin" />;
};
