import style from './style.component.css';

type ContentCardsProps = {
  title: string;
  type: string;
  creator: string;
};

export const ContentCard = ({ title, type, creator }: ContentCardsProps) => {
  return (
    <div className={style.cardConteudo}>
      <div className={style.cabecalho}>
        <h2 className={style.titulo}>{title}</h2>
        <span className={style.tipo}>{type}</span>
      </div>
      <span className={style.criador}>{creator}</span>
    </div>
  );
};
