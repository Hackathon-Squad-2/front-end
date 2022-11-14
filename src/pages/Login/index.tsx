import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AiOutlineMail } from 'react-icons/ai';
import { FiKey } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

export const Login = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (email.length === 0) return setError('O e-mail é obrigatorio');
    if (password.length === 0) return setError('O a senha é obrigatoria');

    signIn({ email, password });

    console.log(localStorage.getItem('@hackathon:token'));

    navigate('/profile');
  };

  return (
    <>
      <img src="https://via.placeholder.com/150" alt="Logo" />
      <div>
        <h2>Login</h2>
        <label>
          <div>
            <AiOutlineMail />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </label>
        <label>
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
        {error.length > 0 && <span>{error}</span>}
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
