import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { dateConvert } from '../../utils/dateConvert';

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
    <div>
      <h1>Adicionar novo Conteúdo</h1>
      <div>
        <label>Título do conteúdo</label>
        <input
          type="text"
          value={title}
          onChange={(e) => [setTitle(e.target.value), setError('')]}
        />

        <label>Tipo</label>
        <input
          type="text"
          value={type}
          onChange={(e) => [setType(e.target.value), setError('')]}
        />

        <label>URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => [setUrl(e.target.value), setError('')]}
        />

        <label>Criador</label>
        <input
          type="text"
          value={creator}
          onChange={(e) => [setCreator(e.target.value), setError('')]}
        />

        <label>Duração</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => [setDuration(e.target.value), setError('')]}
        />
        {error.length > 0 && <span>{error}</span>}
        <button onClick={handleSubmit}>Adicionar</button>
      </div>
      <Link to="/dashboard">
        <button>Voltar</button>
      </Link>
    </div>
  );
};
