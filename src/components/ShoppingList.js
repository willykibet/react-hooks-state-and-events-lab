import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredItems, setFilteredItems] = useState(items); // Initialize state for the filtered items

  function filterItems(event) {
    const selectedCategory = event.target.value;

    if (selectedCategory === "All") {
      setFilteredItems(items); 
    } else {
      const filtered = items.filter(item => item.category === selectedCategory);
      setFilteredItems(filtered); 
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterItems}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
