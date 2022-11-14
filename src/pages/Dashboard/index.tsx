import { GoDiffAdded, GoTrashcan } from 'react-icons/go';
import { BiEdit } from 'react-icons/bi';
import { TrailRow } from '../../components/TrailRow';

export const Dashboard = () => {
  const handleAdd = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

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
