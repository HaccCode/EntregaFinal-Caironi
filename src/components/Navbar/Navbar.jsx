import classes from "./Navbar.module.css";
import BtnMenu from "../BtnMenu/BtnMenu";
import CartWidget from '../CartWidget/CartWidget';
import Logo from "./assets/Logo.png";

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <img src={Logo} style={{ width: "100px", height: "100px"}} />
      <h1 className={classes.title}>Press Start - Gamestore</h1>
      <section className={classes.categories}>
        <BtnMenu name={"PC"} callback={() => console.log('click en PC')} />
        <BtnMenu name={"PS4"} callback={() => console.log('click en PS4')} />
        <BtnMenu name={"PS5"} callback={() => console.log('click en PS5')} />
        <BtnMenu name={"XBOX"} callback={() => console.log('click en XBOX')} />
        <BtnMenu name={"NINTENDO"} callback={() => console.log('click en NINTENDO')}/>
        <CartWidget/>
      </section>
      
    </nav>

  );
};

export default Navbar;
