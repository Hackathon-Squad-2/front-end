import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrailCard } from '../../components/TrailCard';
import { api } from '../../services/api';

import logo from '../../assets/images/evolutionlogo.png';
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
      <p className={style.titulo}>
        O que é a orange evolution?
        <br />
        Se você:
      </p>
      <ul className={style.lista}>
        <li>● Procura conteúdo tech de qualidade e gratuito;</li>
        <li>● Está migrando de carreira para a área tech;</li>
        <li>
          ● Sente que com o apoio de uma comunidade vitaminada irá se
          desenvolver mais;
        </li>
        <li>
          ● Quer se preparar de forma mais assertiva para processos seletivos;
        </li>
        <li>● É protagonista da sua história e formação;</li>
      </ul>
      <p className={style.conclusao}>
        O Orange Evolution é para você, pode chegar!
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
