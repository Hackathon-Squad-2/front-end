import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

type User = {
  name: string;
  email: string;
  createdAt: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User | null;
  signIn: (data: SignInProps) => Promise<unknown>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async ({ email, password }: SignInProps) => {
    return new Promise(async (resolve) => {
      const response = await api.post('/users/auth/login', {
        email,
        password,
      });

      const { user, token } = response.data;
      localStorage.setItem('@hackathon:user', JSON.stringify(user));
      localStorage.setItem('@hackathon:token', token);

      setUser(user);
      resolve('');
    });
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('@hackathon:token');
    localStorage.removeItem('@hackathon:user');
  };

  useEffect(() => {
    const token = localStorage.getItem('@hackathon:token');
    const localUser = JSON.parse(localStorage.getItem('@hackathon:user')!);

    if (!user) {
      setUser(localUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
