import { dateConvert } from '../../utils/dateConvert';

type TrailCardProps = {
  id?: string;
  title: string;
  description: string;
  creator: string;
  duration: number;
  handle: () => void;
};

export const TrailCard = ({
  title,
  description,
  creator,
  duration,
  handle,
}: TrailCardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span>{creator}</span>
        <span>{dateConvert.toHours(duration)}</span>
      </div>
      <button onClick={handle}>Saiba mais</button>
    </div>
  );
};
