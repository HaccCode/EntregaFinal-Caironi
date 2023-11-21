import classes from "../BtnMenu/BtnMenu.module.css";

const BtnMenu = (props) => {
  console.log(props);
  return (
    <button onClick={props.callback} className={classes.btnMenu}>
      {props.name}
    </button>
  );
};

export default BtnMenu;
