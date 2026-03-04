import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};