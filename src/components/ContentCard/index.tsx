type ContentCardsProps = {
  title: string;
  type: string;
  creator: string;
};

export const ContentCard = ({ title, type, creator }: ContentCardsProps) => {
  return (
    <>
      <h2>{title}</h2>
      <div>
        <span>{type}</span>
        <span>{creator}</span>
      </div>
    </>
  );
};
