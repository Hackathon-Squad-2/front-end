import { GoDiffAdded, GoTrashcan } from 'react-icons/go';
import { BiEdit } from 'react-icons/bi';
import { TrailRow } from '../../components/TrailRow';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

type User = {
  name: string;
  email: string;
  isAdmin: boolean;
};

type Trail = {
  id: string;
  title: string;
  creator: string;
  createdAt: string;
};

export const Dashboard = () => {
  const { id } = useParams();

  const [trails, setTrails] = useState<Trail[]>([]);

  const handleAddTrail = () => {
    navigate(`/admin/trails`);
  };

  const handleAddContent = (id: string) => {
    navigate(`/admin/${id}/content`);
  };

  const handleEdit = () => {
    return;
  };

  const handleDelete = async (id: string) => {
    const response = await api.delete(`/admin/trails/${id}`);

    if (response.status === 204) getTrails();
  };

  const token = localStorage.getItem('@hackathon:token');
  const user: User = JSON.parse(localStorage.getItem('@hackathon:user')!);

  const navigate = useNavigate();

  const getTrails = async () => {
    const response = await api.get<Trail[]>(`/admin/trails/`);

    if (response.status !== 200) return;

    setTrails(response.data);
  };

  useEffect(() => {
    if (!user || !user.isAdmin) return navigate('/login');

    getTrails();
  }, []);

  return (
    <>
      <img src="https://via.placeholder.com/150" alt="Logo" />
      <div>
        <div>
          <h1>Admin</h1>
          <span>EDITAR POSTAGENS / POSTAGENS EXCLUÍDAS</span>
        </div>
        <button onClick={handleAddTrail}>Nova trilha</button>
        <div>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Adicionado em</th>
                <th>Criado por</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {trails?.map((trail) => (
                <TrailRow
                  key={trail.id}
                  title={trail.title}
                  date={trail.createdAt}
                  creator={trail.creator}
                  handleAddContent={() => handleAddContent(trail.id)}
                  handleEdit={handleEdit}
                  handleDelete={() => handleDelete(trail.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
