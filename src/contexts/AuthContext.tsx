import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

type User = {
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User | null;
  signIn: (data: SignInProps) => void;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async ({ email, password }: SignInProps) => {
    const response = await api.post('/users/auth/login', {
      email,
      password,
    });

    const { user, token } = response.data;
    localStorage.setItem('@hackathon:token', token);

    setUser(user);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('@hackathon:token');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
