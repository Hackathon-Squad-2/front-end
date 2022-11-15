import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import style from './style.module.css';

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

    await signIn({ email, password });

    navigate('/profile');
  };

  return (
    <>
      <img
        className={style.logo}
        src={logo}
        alt="Logo da Orange Juice Evolution"
      />
      <div className={style.card}>
        <h2 className={style.titulo}>Login</h2>
        <label className={style.label}>E-mail</label>
        <div className={style.divInput}>
          <AiOutlineMail className={style.icon} />
          <input
            className={style.input}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label className={style.label}>Senha</label>
        <div className={style.divInput}>
          <FiKey className={style.icon} />
          <input
            className={style.input}
            type="password"
            value={password}
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error.length > 0 && <span>{error}</span>}
        <button className={style.button} onClick={handleLogin}>
          Entrar
        </button>
        <div className={style.rodape}>
          <span>
            <Link className={style.link} to="/register">
              Criar conta
            </Link>
          </span>
          <span className={style.senha}>Esqueceu sua senha?</span>
        </div>
      </div>
    </>
  );
};
