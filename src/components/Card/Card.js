const Card = ({ name, image, role, region, power, health }) => {
  return (
    <div className="card">
      <h2>Name</h2>
      <h3 className="power">Power</h3>
      <h3 className="health">Health</h3>
      <img className="role-icon"></img>
      <img className="card-img"></img>
      <p>Region</p>
    </div>
  );
};

export default Card;
