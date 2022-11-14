import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ContentCard } from '../../components/ContentCard';

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
    <>
      <h1>{trailInfo.title}</h1>
      <p>{trailInfo.description}</p>
      <div>
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
        <button>Quero Aprender</button>
      </Link>
    </>
  );
};
