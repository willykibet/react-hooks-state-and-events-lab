import React, { useState } from "react";

function Item({ name, category }) {
  const [clicked, setClicked] = useState(false)

  return (
    <li className={ clicked ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=> setClicked(true)}>Add to Cart</button>
    </li>
  );
}

export default Item;
