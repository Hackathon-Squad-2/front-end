import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ContentCard } from '../../components/ContentCard';

import style from './style.module.css';

import { api } from '../../services/api';

type Content = {
  id: string;
  title: string;
  type: string;
  creator: string;
};

type Trail = {
  title: string;
  description: string;
  content: Content[];
};

export const InfoTrail = () => {
  const { id } = useParams();

  const [trailInfo, setTrailInfo] = useState<Trail>({} as Trail);

  useEffect(() => {
    const getContents = async () => {
      const response = await api.get(`/trails/${id}/content`);

      if (response.status !== 200) return;

      localStorage.setItem('@hackathon:trail', id!);
      setTrailInfo(response.data);
    };

    getContents();
  }, []);

  return (
    <div className={style.geral}>
      <h1 className={style.titulo}>{trailInfo.title}</h1>
      <p className={style.descricao}>{trailInfo.description}</p>
      <div className={style.cardsConteudo}>
        {trailInfo.content?.map((content) => (
          <ContentCard
            key={content.id}
            title={content.title}
            type={content.type}
            creator={content.creator}
          />
        ))}
      </div>
      <Link to="/register">
        <button className={style.button}>Quero Aprender</button>
      </Link>
    </div>
  );
};
