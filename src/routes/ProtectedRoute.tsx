import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem('@hackathon:user')!);

  return user ? <Outlet /> : <Navigate to="/login" />;
};
