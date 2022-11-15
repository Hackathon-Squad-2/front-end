import { BiEdit } from 'react-icons/bi';
import { GoDiffAdded, GoTrashcan } from 'react-icons/go';

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
      <td>{title}</td>

      <td>{date}</td>
      <td>{creator}</td>
      <td>
        <button onClick={handleAddContent}>
          <GoDiffAdded />
        </button>
        <button onClick={handleEdit}>
          <BiEdit />
        </button>
        <button onClick={handleDelete}>
          <GoTrashcan />
        </button>
      </td>
    </tr>
  );
};
