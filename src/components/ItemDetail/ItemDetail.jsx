import ItemCount from "../ItemCount/ItemCount";
import classes from "./ItemDetailContainer.module.css";

const ItemDetail = ({ name, category, img, stock, price, format,description }) => {
  return (
    <div className={classes.itemdetail}>
      <div className={classes.pic}>
        <img src={img} style={{ width: 350 }}></img>
      </div>
      <div className={classes.detail}>
        <h1>{name}</h1>
        <h3>Sistema: {category}</h3>
        <h3>Formato: {format}</h3>
        <h2>ARS ${price}</h2>
        <p>{description}</p>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
