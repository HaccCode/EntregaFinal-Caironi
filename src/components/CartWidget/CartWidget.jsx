import classes from '../CartWidget/CartWidget.module.css'
import CartImage from "./assets/ShoppingCart.svg";
import { useCart } from "../../context/CartContext/CartContext";

const CartWidget = () => {
    const { totalQuantity } = useCart()



  return (
    <button className={classes.cartMenu}>
      <img src={CartImage} style={{ width: "30px", height: "25px" }} />{totalQuantity}
    </button>
  );
};

export default CartWidget;
