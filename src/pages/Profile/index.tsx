import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

export const Profile = () => {
  useEffect(() => {
    const getUserInfo = async () => {
      const response = await api.get('/users/me');

      console.log(response);
    };

    getUserInfo();
  }, []);

  return <h1>@</h1>;
};
