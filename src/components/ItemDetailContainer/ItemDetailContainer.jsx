import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    const documentRef = doc(db, "products", productId);

    getDoc(documentRef)
      .then((queryDocumentSnapshot) => {
        console.log(queryDocumentSnapshot);
        const fields = queryDocumentSnapshot.data();
        const productAdapted = { id: queryDocumentSnapshot.id, ...fields };
        setProduct(productAdapted);
      })
      .catch((error) => {
        toast.warning("Ocurrió un problema, reintente en unos momentos", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        });
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
        <ReactLoading type={"spin"} color={"#ac7714"} height={50} width={50} />
      </div>
    );
  }

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
