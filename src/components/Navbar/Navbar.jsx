import { Link } from "react-router-dom";

import classes from "../Navbar/Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

import Logo from "./assets/Logo.png";

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <img src={Logo} style={{ width: "100px", height: "100px" }} />
      <Link to="/">
        <h1 className={classes.title}>PressStart</h1>
      </Link>
      <section className={classes.categories}>
        <Link to="/category/PC" className={classes.linkMenu}>
          PC
        </Link>
        <Link to="/category/PS4" className={classes.linkMenu}>
          PS4
        </Link>
        <Link to="/category/PS5" className={classes.linkMenu}>
          PS5
        </Link>
        <Link to="/category/XBOX XS" className={classes.linkMenu}>
          XBOX XS{" "}
        </Link>
        <Link to="/category/NINTENDO SWITCH" className={classes.linkMenu}>
          NINTENDO SWITCH
        </Link>
        {/* <Link to='/category/fisicos' className={classes.linkMenu}>FISICOS</Link> */}
        <CartWidget />
      </section>
    </nav>
  );
};

export default Navbar;
