import classes from "../BtnMenu/BtnMenu.module.css";

const LinkMenu = (props) => {
  console.log(props);
  return (
    <button className={classes.linkMenu}>
      {props.name}
    </button>
  );
};

export default LinkMenu;
