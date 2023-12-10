import { Link } from 'react-router-dom'

const Item = ({ id, name, price, img }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} style={{ width: 150 }} />
      <h4>ARS ${price}</h4>
      <Link to={`/detail/${id}`}>Ver Más...</Link>
    </div>
  );
};

export default Item;
