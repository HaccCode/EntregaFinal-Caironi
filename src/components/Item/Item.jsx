import { Link } from "react-router-dom";
import classes from "./Item.module.css";

const Item = ({ id, name, price, img }) => {
  return (
    <div className={classes.item}>
      <h3>{name}</h3>
      <img src={img} style={{ width: 150 }} />
      <h4>ARS ${price}</h4>
      <Link to={`/detail/${id}`} className={classes.detalle}>
        Click aquí para más
      </Link>
    </div>
  );
};

export default Item;
