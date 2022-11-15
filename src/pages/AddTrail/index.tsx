import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { dateConvert } from '../../utils/dateConvert';

import style from './style.module.css';

type User = {
  name: string;
  email: string;
  isAdmin: boolean;
};

export const AddTrail = () => {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [banner, setBanner] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');
  const [duration, setDuration] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const user: User = JSON.parse(localStorage.getItem('@hackathon:user')!);

  const handleSubmit = async () => {
    if (title.length == 0) return setError('Título é obrigatorio');
    if (banner.length == 0) return setError('O banner é obrigatorio');
    if (creator.length == 0) return setError('Criador é obrigatorio');
    if (duration.length == 0) return setError('Duração é obrigatorio');
    if (description.length == 0) return setError('Description é obrigatorio');

    const response = await api.post(`/admin/trails/`, {
      title,
      banner,
      creator,
      duration: dateConvert.toMinutes(duration),
      description,
    });

    if (response.status !== 201) return setError('Erro na criação');

    navigate('/dashboard');
  };

  useEffect(() => {
    if (!user || !user.isAdmin) return navigate('/login');
  }, []);

  return (
    <div className={style.geral}>
      <h1 className={style.titulo}>Adicionar nova Trilha</h1>
      <div className={style.formulario}>
        <label className={style.label}>Título da trilha</label>
        <input
          className={style.input}
          type="text"
          value={title}
          onChange={(e) => [setTitle(e.target.value), setError('')]}
        />

        <label className={style.label}>Banner</label>
        <input
          className={style.input}
          type="text"
          value={banner}
          onChange={(e) => [setBanner(e.target.value), setError('')]}
        />

        <label className={style.label}>Criador</label>
        <input
          className={style.input}
          type="text"
          value={creator}
          onChange={(e) => [setCreator(e.target.value), setError('')]}
        />

        <label className={style.label}>Duração</label>
        <input
          className={style.input}
          type="text"
          value={duration}
          onChange={(e) => [setDuration(e.target.value), setError('')]}
        />

        <label className={style.label}>Descrição</label>
        <textarea
          className={style.textArea}
          value={description}
          onChange={(e) => [setDescription(e.target.value), setError('')]}
        />

        {error.length > 0 && <span>{error}</span>}
        <button className={style.botao} onClick={handleSubmit}>
          Adicionar
        </button>
      </div>
      <Link to="/dashboard">
        <button className={style.botao}>Voltar</button>
      </Link>
    </div>
  );
};
