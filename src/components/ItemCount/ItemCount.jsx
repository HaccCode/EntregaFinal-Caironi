/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = ({ initial = 1, stock = 5, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>      
      <h3>{count}</h3>
      <button onClick={decrement} className={classes.boton}>
        -
      </button>
      <button onClick={() => onAdd(count)} className={classes.boton}>
        Agregar al Carrito
      </button>
      <button onClick={increment} className={classes.boton}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
