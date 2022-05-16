import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("")

  function handleCategoryChange(event) {
    console.log('in handle Category ', event.target.value)
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
  
    return item.category === selectedCategory;
  });

  function handleSearchTermChange(event) {
    console.log('in handle Search ', event.target.value)
    setSearchTerm(event.target.value);
  }

  const itemsSearched = itemsToDisplay.filter((item) => item.name.includes(searchTerm))

  return (
    <div className="ShoppingList">
      <Filter search={searchTerm} onSearchChange={handleSearchTermChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsSearched.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
