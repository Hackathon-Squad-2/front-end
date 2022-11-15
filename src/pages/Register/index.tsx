import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiKey } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';

import logo from '../../assets/images/registerlogo.png';
import style from './style.module.css';

import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';

export const Register = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleCourseSign = async () => {
    const token = localStorage.getItem('@hackathon:token');
    const user = localStorage.getItem('@hackathon:user');
    const trail = localStorage.getItem('@hackathon:trail');

    console.log(token, user, trail);

    if (token && user && trail) {
      const response = await api.post('/users/courses/sign', {
        trailsIdList: [`${trail}`],
      });

      localStorage.removeItem('@hackathon:trail');
      navigate('/profile');
    }
  };

  const handleRegister = async () => {
    if (name.length == 0) return setError('O nome é obrigatorio');
    if (email.length == 0) return setError('O e-mail é obrigatorio');
    if (password.length == 0) return setError('A senha é obrigatoria');

    const response = await api.post('/users/auth/register', {
      name,
      email,
      password,
    });

    if (response.status !== 201) return;

    await signIn({ email, password });

    handleCourseSign();
  };

  return (
    <div className={style.card}>
      <img className={style.logo} src={logo} alt="Logo" />
      <div className={style.divInput}>
        <AiOutlineUser />
        <input
          className={style.input}
          type="text"
          value={name}
          placeholder="Nome"
          onChange={(e) => [setName(e.target.value), setError('')]}
        />
      </div>
      <div className={style.divInput}>
        <AiOutlineMail />
        <input
          className={style.input}
          type="text"
          value={email}
          placeholder="E-mail"
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
      </div>
      <div className={style.divInput}>
        <FiKey />
        <input
          className={style.input}
          type="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => [setPassword(e.target.value), setError('')]}
        />
      </div>
      <span className={style.error}>{error}</span>
      <button className={style.button} onClick={handleRegister}>
        Cadastrar
      </button>
      <p className={style.terms}>
        Ao clicar em "cadastrar”, declaro que concordo com as Políticas de
        Privacidade e os Termos de Uso da Orange Juice.
      </p>
      <p className={style.login}>
        Já possui uma conta? Fazer&nbsp;
        <Link className={style.link} to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};
