import { createContext, ReactNode, useContext, useState } from "react";
import CartItem from "../components/Cart/CartItem";

type ShoppingCartContextProvider = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemsAmount: (id: number) => number;
  increaseItemAmount: (id: number) => void;
  decreaseItemAmount: (id: number) => void;
  removeItem: (id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProvider) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); 

  function getItemsAmount(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0; 
  }

  function increaseItemAmount(id: number) {
    setCartItems((currentItems) => {   
      if (currentItems.find((item) => item.id === id) == null) {  
        return [...currentItems, { id, quantity: 1 }]; 
      } else {  
        currentItems.map((item) => {  
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };  
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemAmount(id: number) {
    setCartItems((currentItems) => {  
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {  
        return currentItems.filter((item) => item.id !== id); 
      } else {  
        currentItems.map((item) => { 
          if (item.id === id) { 
            return { ...item, quantity: item.quantity - 1 }; 
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
     return setCartItems(currentItems => {
        return currentItems.filter(item => item.id !== id); 
     })
  }
  return (
    <ShoppingCartContext.Provider value={{getItemsAmount, increaseItemAmount, decreaseItemAmount, removeItem}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
