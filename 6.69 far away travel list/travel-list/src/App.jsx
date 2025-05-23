import { useState } from 'react';
import Form from './components/Form.jsx';
import Logo from './components/Logo.jsx';
import PackingList from './components/PackingList.jsx';
import Stats from './components/Stats.jsx';

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }

  function handleClearAll() {
    const confirmed = window.confirm("Are you sure you want to clear the list?");
    if (confirmed) setItems([]);
  }

  return <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearAll={handleClearAll}/>
      <Stats items={items}/>
    </div>
}