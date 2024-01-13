/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount";
import classes from "./ItemDetail.module.css";
import { useCart }  from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";

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
  const { addItem, isInCart } = useCart();

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id,
      name,
      price,
      quantity,
    };

    addItem(objProductToAdd);
    console.log("agregado al carrito:", quantity);
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
        <div>
          {!isInCart(id) ? (
            <ItemCount onAdd={handleOnAdd} stock={stock} />
          ) : (
            <Link
              to="/cart"
              className={classes.boton}
              style={{ color: "black", padding: "5px" }}
            >
              Finalizar Compra
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
