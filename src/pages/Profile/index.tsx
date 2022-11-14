import { useAuth } from '../../hooks/useAuth';

export const Profile = () => {
  const { user } = useAuth();

  return <h1>@{user?.name}</h1>;
};
