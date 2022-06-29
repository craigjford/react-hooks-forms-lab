import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleNameChange = (e) => {
    const newItem = e.target.value;
    console.log('itemName = ', e.target.value)
    setItemName(newItem);
  } 

  const handleCategoryChange = (e) => {
      const newCategory = e.target.value
      console.log('newCategory = ', newCategory);
      setItemCategory(newCategory);
  } 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItem = { 
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    onItemFormSubmit(newItem)
    setItemName("");
    setItemCategory("Produce");
}


  return (
    <form className="NewItem" onSubmit={handleFormSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} placeholder="Enter a name..."/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
