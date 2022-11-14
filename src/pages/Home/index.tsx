import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrailCard } from '../../components/TrailCard';
import { api } from '../../services/api';

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
    // navigate(`/trails/${id}`);
    console.log(id);
  };

  useEffect(() => {
    const getTrails = async () => {
      const response = await api.get<Trail[]>('/trails');

      if (response.status !== 200) return;

      setTrails(response.data);
    };

    getTrails();
  }, []);

  return (
    <div>
      {trails.map((trail) => (
        <TrailCard
          key={trail.id}
          title={trail.title}
          description={trail.description}
          creator={trail.creator}
          duration={trail.duration}
          handle={() => handleInfo(trail.id)}
        />
      ))}
    </div>
  );
};
