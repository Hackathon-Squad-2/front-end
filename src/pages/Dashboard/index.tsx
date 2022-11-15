import { GoDiffAdded, GoTrashcan } from 'react-icons/go';
import { BiEdit } from 'react-icons/bi';
import { TrailRow } from '../../components/TrailRow';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';

export const Dashboard = () => {
  const { id } = useParams();

  const [trails, setTrails] = useState({});

  const handleAdd = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  const token = localStorage.getItem('@hackathon:token');

  useEffect(() => {
    const getTrails = async () => {
      const response = await api.get(`/trails/${id}/content`);
    };

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
        <button>Nova trilha</button>
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
              <TrailRow
                title="Full Stack"
                date="Em 11/11/2022 22:32"
                creator="ADMIN"
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />

              <TrailRow
                title="UX/UI Design"
                date="Em 12/11/2022   12:40"
                creator="ADMIN"
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />

              <TrailRow
                title="QA (Quality Assurance)"
                date="Em 12/11/2022   15:39"
                creator="ADMIN"
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
