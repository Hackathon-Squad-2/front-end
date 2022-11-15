import { GoDiffAdded, GoTrashcan } from 'react-icons/go';
import { BiEdit } from 'react-icons/bi';
import { TrailRow } from '../../components/TrailRow';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

import logo from '../../assets/images/logoadmin.png';
import style from './style.module.css';

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

  const handleAddTrail = (id: string) => {
    navigate(`/admin/trail`);
  };

  const handleAddContent = (id: string) => {
    navigate(`/admin/${id}/content`);
  };

  const handleEdit = () => {
    return;
  };

  const handleDelete = async (id: string) => {
    const response = await api.delete(`/admin/trails/${id}`);

    console.log(response);
  };

  const token = localStorage.getItem('@hackathon:token');
  const user: User = JSON.parse(localStorage.getItem('@hackathon:user')!);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) return navigate('/login');

    const getTrails = async () => {
      const response = await api.get<Trail[]>(`/trails/`);

      if (response.status !== 200) return;

      setTrails(response.data);
    };

    getTrails();
  }, []);

  return (
    <>
      <img className={style.logo} src={logo} alt="Logo" />
      <div>
        <div className={style.topo}>
          <h1 className={style.admin}>Admin</h1>
          <button className={style.novaTrilha}>Nova trilha</button>
        </div>
        <div>
          <table className={style.tabela}>
            <thead className={style.tableHead}>
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
