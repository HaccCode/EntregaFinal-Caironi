import classes from '../CartWidget/CartWidget.module.css'
import CartImage from "./assets/ShoppingCart.svg";

const CartWidget = () => {
  return (
    <button className={classes.cartMenu}>
      <img src={CartImage} style={{ width: "30px", height: "25px" }} />1
    </button>
  );
};

export default CartWidget;
