import { dateConvert } from '../../utils/dateConvert';

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
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span>{dateConvert.toHours(duration)}</span>
      </div>
      <button onClick={handle}>Saiba mais</button>
    </div>
  );
};
