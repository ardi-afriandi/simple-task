import React, { createContext, useState, useContext } from 'react';

export const SimpleTaskContext = createContext();

const SimpleTaskContextProvider = (props) => {
  const [email, setEmail] = useState('');
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, item]);
    console.log(items);
  };

  const findItem = (id) => {
    const itemFound = items.find((item) => item.id === id);

    setEditItem(itemFound);
    console.log(editItem);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (item) => {
    const newItems = items.map((i) => (i.id === item.id ? item : i));

    setItems(newItems);
    setEditItem(null);
  };

  return (
    <SimpleTaskContext.Provider value={{
      email,
      setEmail,
      items,
      addItem,
      findItem,
      removeItem,
      updateItem,
      editItem,
      setEditItem,
    }}
    >
      {props.children}
    </SimpleTaskContext.Provider>
  );
};

export default SimpleTaskContextProvider;
