import { createContext, useState, useEffect } from "react";
import axios from 'axios'

const CartContext = createContext()

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState(0);
  const [choose, setChoose] = useState(false);
  const [allShirts, setAllShirts] = useState([]);
  

  const addTask = (quantity) => {
    setCart([
      ...cart,
      {
        quantity,
      }
    ])
  }

  const addItem = (item, size) => {
    const itemWithSize = {
      ...item,
      size: size
    };
    setCart((prevCart) => [...prevCart, itemWithSize]);
  };
  
  // Este contexto lo puedes utilizar para hacer la llamada a la API y lo almacenas en una variable
  const apiURL = 'https://api-camishop.vercel.app';

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setAllShirts(response.data.teams);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  const cambio = () => {
    setChoose(!choose);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, shipping, setShipping, cambio, choose, allShirts, addTask, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, ContextProvider };
