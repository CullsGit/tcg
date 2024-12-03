import "./Card.css";

const Card = ({ name, img, role, region, power, health }) => {
  const roleClass = `card-${role.toLowerCase()}`;

  return (
    <div className={`card ${roleClass}`}>
      <h2>{name}</h2>
      <img className="card-img" src={img} />
      <h3 className="card-power">Power: {power}</h3>
      <h3 className="card-health">Health: {health}</h3>

      <h3>Region: {region}</h3>
    </div>
  );
};

export default Card;
