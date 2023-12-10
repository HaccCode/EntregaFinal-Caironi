import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, category, img, stock, price, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{category}</p>
      <img src={img} style={{ width: 300 }}></img>
      <h3>ARS ${price}</h3>
      <p>Descripción: {description}</p>
      <ItemCount stock={stock} />
    </div>
  );
};

export default ItemDetail;
