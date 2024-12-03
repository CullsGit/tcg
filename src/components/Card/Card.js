import "./Card.css";

const Card = ({ name, img, role, region, power, health }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3 className="power">Power: {power}</h3>
      <h3 className="health">Health: {health}</h3>
      <h3>Role: {role}</h3>
      <h3>Region: {region}</h3>
      <img className="card-img" src={img} />
    </div>
  );
};

export default Card;
