import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from "./models/item";
import ShoppingListForm from "./components/ShoppingListForm";

function App() {
  const [items, setItems] = useState<Item[]>([])
  const addItem = (product: string) => {
    console.log("App Component");
    console.log(product);
  }

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem}/>
    </div >
  );
}

export default App;
