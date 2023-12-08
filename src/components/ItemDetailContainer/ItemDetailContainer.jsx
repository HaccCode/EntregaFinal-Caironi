import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById().then((response) => {
      setProduct(response);
    });
  });

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
