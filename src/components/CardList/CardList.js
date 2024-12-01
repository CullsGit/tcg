import Card from "../Card/Card";
import { cards } from "../../cardData";

const CardList = () => {
  return (
    <>
      <h1>Card List</h1>
      {Object.entries(cards).map(([key, card]) => (
        <Card
          key={key}
          name={card.name}
          role={card.role}
          region={card.region}
          power={card.power}
          health={card.health}
          img={card.img}
        />
      ))}
    </>
  );
};

export default CardList;
