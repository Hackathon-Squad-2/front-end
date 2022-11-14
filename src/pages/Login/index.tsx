import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AiOutlineMail } from 'react-icons/ai';
import { FiKey } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    signIn({ email, password });

    navigate('/profile');
  };

  return (
    <>
      <img src="https://via.placeholder.com/150" alt="Logo" />
      <div>
        <h2>Login</h2>
        <label htmlFor="">
          <div>
            <AiOutlineMail />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </label>
        <label htmlFor="">
          <div>
            <FiKey />
            <input
              type="password"
              value={password}
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </label>
        <button onClick={handleLogin}>Entrar</button>
        <div>
          <span>
            <Link to="/register">Criar conta</Link>
          </span>
          <span>Esqueceu sua senha?</span>
        </div>
      </div>
    </>
  );
};
