import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import classes from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

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
