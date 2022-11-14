import { dateConvert } from '../../utils/dateConvert';

import style from './style.module.css';

type TrailCardProps = {
  id?: string;
  title: string;
  description: string;
  duration: number;
  handle: () => void;
};

export const TrailCard = ({
  title,
  description,
  duration,
  handle,
}: TrailCardProps) => {
  return (
    <div className={style.card}>
      <h2 className={style.titulo}>{title}</h2>
      <p className={style.descricao}>{description}</p>
      <div className={style.duracao}>
        <span>{dateConvert.toHours(duration)}</span>
      </div>
      <button className={style.button} onClick={handle}>
        Saiba mais
      </button>
    </div>
  );
};
