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

  const handleCourseSign = async () => {
    const token = localStorage.getItem('@hackathon:token');
    const user = localStorage.getItem('@hackathon:user');
    const trail = localStorage.getItem('@hackathon:trail');

    const isAdmin = JSON.parse(user!).isAdmin;

    if (token && user && trail && !isAdmin) {
      const response = await api.post('/users/courses/sign', {
        trailsIdList: [`${trail}`],
      });

      localStorage.removeItem('@hackathon:trail');

      navigate('/profile');
    }

    navigate('/dashboard');
  };

  const handleLogin = async () => {
    if (email.length === 0) return setError('O e-mail é obrigatorio');
    if (password.length === 0) return setError('O a senha é obrigatoria');

    await signIn({ email, password });

    const trail = localStorage.getItem('@hackathon:trail');

    if (trail) handleCourseSign();
    else navigate('/profile');
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
        {error.length > 0 && <span className={style.error}>{error}</span>}
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
