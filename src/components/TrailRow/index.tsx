import { BiEdit } from 'react-icons/bi';
import { GoDiffAdded, GoTrashcan } from 'react-icons/go';

import style from './style.module.css';

type TrailRowProps = {
  title: string;
  date: string;
  creator: string;
  handleAddContent: () => void;
  handleEdit?: () => void;
  handleDelete: () => void;
};

export const TrailRow = ({
  title,
  date,
  creator,
  handleAddContent,
  handleEdit,
  handleDelete,
}: TrailRowProps) => {
  return (
    <tr>
      <td className={style.titulo}>{title}</td>

      <td className={style.data}>{date}</td>
      <td className={style.criador}>{creator}</td>
      <td>
        <button className={style.botao} onClick={handleAddContent}>
          <GoDiffAdded />
        </button>
        <button className={style.botao} onClick={handleEdit}>
          <BiEdit />
        </button>
        <button className={style.botao} onClick={handleDelete}>
          <GoTrashcan />
        </button>
      </td>
    </tr>
  );
};
