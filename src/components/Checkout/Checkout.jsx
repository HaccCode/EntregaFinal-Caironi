import { useState } from "react";
import { useCart } from "../../context/CartContext/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const { cart, total, clearCart } = useCart();

  const createOrder = async (userData) => {
    try {
      setLoading(true);
      const objOrder = {
        buyer: {
          userData,
        },
        items: cart,
        total,
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsCollection = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const { docs } = await getDocs(productsCollection);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => {
          prod.id === doc.id;
        });
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const orderCollection = collection(db, "orders");

        const { id } = await addDoc(orderCollection, objOrder);
        clearCart();
        setOrderId(id);
      } else {
        //notificacon de falta de stock
      }
    } catch (error) {
      //notificacion de error generando la orden
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Su Orden esta siendo generada...</h1>;
  }

  if (orderId) {
    return <h1>El N° ID de su orden es: {orderId}</h1>;
  }

  return (
    <>
      <h1>CheckOut</h1>
      {/* <ContactForm createOrder={createOrder} /> */}
      <button onClick={createOrder}>Generar Orden</button>
    </>
  );
};

export default Checkout;
