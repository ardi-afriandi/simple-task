import React, { createContext, useState, useContext } from 'react';

export const SimpleTaskContext = createContext();

const SimpleTaskContextProvider = (props) => {
  const [email, setEmail] = useState('');
  return (
    <SimpleTaskContext.Provider value={{ email, setEmail }}>
      {props.children}
    </SimpleTaskContext.Provider>
  );
};

export default SimpleTaskContextProvider;
