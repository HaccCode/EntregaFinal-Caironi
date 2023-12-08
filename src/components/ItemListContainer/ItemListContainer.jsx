import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import classes from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  });

  return (
    <div className={classes.tit2}>
      <h1>
        {greeting}
        <strong className={classes.text}>I</strong>
      </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
