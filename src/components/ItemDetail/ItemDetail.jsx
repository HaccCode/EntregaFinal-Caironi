import ItemCount from "../ItemCount/ItemCount";
import classes from "./ItemDetail.module.css";
import { useState } from "react";


const ItemDetail = ({
  id,
  name,
  category,
  price,
  img,
  format,
  description,
  stock,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (count) => {
    const objProductToAdd = {
      id,
      name,
      price,
      count,
    };

    setQuantity(count);
  };

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
          <div>{quantity === 0 ? (
            <ItemCount onAdd={handleOnAdd} stock={stock} />
          ) : (
            <button className={classes.boton}>Finalizar Compra</button>
          )}</div>
          
        </div>
      </div>
    
  );
};

export default ItemDetail;
