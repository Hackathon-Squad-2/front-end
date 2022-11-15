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

const validOptions = [
  'artigo',
  'apostila',
  'curso',
  'desafio',
  'ferramenta',
  'glossario',
  'live',
  'livro',
  'podcast',
  'playlist',
  'video',
];

export const AddContent = () => {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [creator, setCreator] = useState('');
  const [duration, setDuration] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const user: User = JSON.parse(localStorage.getItem('@hackathon:user')!);

  const handleSubmit = async () => {
    if (title.length == 0) return setError('Título é obrigatorio');
    if (type.length == 0) return setError('Tipo é obrigatorio');
    if (!validOptions.includes(type)) return setError('Tipo invalido!');

    if (url.length == 0) return setError('Url é obrigatorio');
    if (creator.length == 0) return setError('Criador é obrigatorio');
    if (duration.length == 0) return setError('Duração é obrigatorio');

    const response = await api.post(`/admin/trails/${id}/content`, {
      title,
      type,
      creator,
      duration: dateConvert.toMinutes(duration),
      url,
    });

    if (response.status !== 201) return setError('Erro na criação');

    navigate('/dashboard');
  };

  useEffect(() => {
    if (!user || !user.isAdmin) return navigate('/login');
  }, []);

  return (
    <div className={style.geral}>
      <h1 className={style.titulo}>Adicionar novo Conteúdo</h1>
      <div className={style.formulario}>
        <label className={style.label}>Título do conteúdo</label>
        <input
          className={style.input}
          type="text"
          value={title}
          onChange={(e) => [setTitle(e.target.value), setError('')]}
        />

        <label className={style.label}>Tipo</label>
        <input
          className={style.input}
          type="text"
          value={type}
          onChange={(e) => [setType(e.target.value), setError('')]}
        />

        <label className={style.label}>URL</label>
        <input
          className={style.input}
          type="text"
          value={url}
          onChange={(e) => [setUrl(e.target.value), setError('')]}
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
