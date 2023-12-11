import { Link } from 'react-router-dom'

import classes from "./Navbar.module.css";
import BtnMenu from "../BtnMenu/BtnMenu";
import CartWidget from '../CartWidget/CartWidget';

import Logo from "./assets/Logo.png";

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <img src={Logo} style={{ width: "100px", height: "100px"}} />
      <Link to='/'><h1 className={classes.title}>PressStart - Gamestore</h1></Link>
      <section className={classes.categories}>
        <Link to='/category/pc'>PC</Link>
        <Link to='/category/ps4'>PS4</Link>
        <Link to='/category/ps5'>PS5</Link>
        <Link to='/category/xbox-xs'>XBOX XS </Link>
        <Link to='/category/nintendo-switch'>NINTENDO SWITCH</Link>
        <Link to='/category/emuladores'>EMULADORES</Link>
        <CartWidget/>
      </section>
      
    </nav>

  );
};

export default Navbar;
