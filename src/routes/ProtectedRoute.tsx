import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const user = { logged: false };
  return user && user.logged;
};

export const ProtectedRoute = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
