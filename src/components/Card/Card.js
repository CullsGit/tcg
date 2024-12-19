import "./Card.css";

const Card = ({ name, img, role, region, power, health }) => {
  const roleClass = `card-${role.toLowerCase()}`;

  return (
    <div className={"card"}>
      <img className="card-img" src={img} />
    </div>
  );
};

export default Card;
