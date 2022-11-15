import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrailCard } from '../../components/TrailCard';
import { api } from '../../services/api';

import logo from '../../assets/images/logo.png';
import style from './style.module.css';

type Trail = {
  id: string;
  title: string;
  description: string;
  creator: string;
  duration: number;
};

export const Home = () => {
  const [trails, setTrails] = useState<Trail[]>([]);

  const navigate = useNavigate();

  const handleInfo = (id: string) => {
    navigate(`/trails/${id}`);
  };

  useEffect(() => {
    document.title = 'Home - Orange Evolution';

    const getTrails = async () => {
      const response = await api.get<Trail[]>('/trails');

      if (response.status !== 200) return;

      setTrails(response.data);
    };

    getTrails();
  }, []);

  return (
    <div>
      <img className={style.logo} src={logo} alt="Logo da Orange Evolution" />
      <p className={style.titulo}>O que é a orange evolution?</p>
      <p className={style.conteudo}>
        O Orange Evolution consiste em trilhas totalmente gratuitas para que
        você possa iniciar a sua carreira na tecnologia. Você terá acesso a
        vídeos, lives, artigos, apostilas e cursos gratuitos. Confira!
      </p>
      <div className={style.trilhas}>
        {trails.map((trail) => (
          <TrailCard
            key={trail.id}
            title={trail.title}
            description={trail.description}
            duration={trail.duration}
            handle={() => handleInfo(trail.id)}
          />
        ))}
      </div>
    </div>
  );
};
