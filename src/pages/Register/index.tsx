import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiKey } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';

import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';

export const Register = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

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

    signIn({ email, password });

    navigate('/login');
  };

  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="Logo" />
      <div>
        <AiOutlineUser />
        <input
          type="text"
          value={name}
          placeholder="Nome"
          onChange={(e) => [setName(e.target.value), setError('')]}
        />
      </div>
      <div>
        <AiOutlineMail />
        <input
          type="text"
          value={email}
          placeholder="E-mail"
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
      </div>
      <div>
        <FiKey />
        <input
          type="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => [setPassword(e.target.value), setError('')]}
        />
      </div>
      <span>{error}</span>
      <button onClick={handleRegister}>Cadastrar</button>
      <p>
        Ao clicar em "cadastrar”, declaro que concordo com as Políticas de
        Privacidade e os Termos de Uso da Orange Juice.
      </p>
      <p>
        Já possui uma conta? Fazer
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
