import classes from "../BtnMenu/BtnMenu.module.css";
import CartImage from "./assets/ShoppingCart.svg";

const CartWidget = () => {
  return (
    <button className={classes.btnMenu}>
      <img src={CartImage} style={{ width: "30px", height: "30px" }} />1
    </button>
  );
};

export default CartWidget;
