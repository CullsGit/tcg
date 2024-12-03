import "./CardList.css";
import Card from "../Card/Card";
import { cards } from "../../cardData";

const CardList = () => {
  return (
    <>
      <h1 className="card-list-title">Card List</h1>
      <div className="cards-layout">
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
      </div>
    </>
  );
};

export default CardList;
