// import classes from '../CartWidget/CartWidget.module.css'
import CartImage from "./assets/ShoppingCart.svg";
import { useCart } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import classes from "../Navbar/Navbar.module.css";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className={classes.cartMenu}>
      <img src={CartImage} style={{ width: "30px" }} />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
