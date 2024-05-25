import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from "./models/item";

function App() {
  // const items = [
  //   { id: 1, product: "Lemon", quantitiy: 1 },
  //   { id: 2, product: "Orange", quantitiy: 2 },
  //   { id: 3, product: "Apple", quantitiy: 3 },
  // ];

  interface Item {
    id: number;
    product: string;
    quantity: number;
  }

  const [items, setItems] = useState<Item[]>([])


  return <div>{<ShoppingList items={items} />}</div>
}

export default App;
