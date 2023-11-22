import classes from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={classes.tit2}>
      <h1>{greeting}<strong className={classes.text}>I</strong></h1>
      
    </div>
  );
};

export default ItemListContainer;
