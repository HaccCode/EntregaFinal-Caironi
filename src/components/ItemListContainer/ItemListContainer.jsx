/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

import classes from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    getDocs(collectionRef)
        .then(querySnapshot => {
          console.log(querySnapshot)

          const productsAdapted = querySnapshot.docs.map(doc => {
            const fields = doc.data()
            return { id: doc.id, ...fields }
          })
          
          setProducts(productsAdapted)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false);
        })
    // const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    // asyncFunction(categoryId)
    //   .then((response) => {
    //     setProducts(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [categoryId]);

  if(loading) {
  return <h1>Loading...</h1>
  }
  
    return (
    <div className={classes.tit2}>
      <h1>
        {greeting}
        <strong className={classes.text}> I</strong>
      </h1>
      <ItemList products={products} />
    </div>
  );
  }


export default ItemListContainer;
