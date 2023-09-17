import { createContext, ReactNode, useContext, useState } from "react";
import {
  headphonesList,
  earphonesList,
  speakersList,
} from "../components/Elements/Products/ProductData";
import CartItem from "../components/Cart/CartItem";

type CartItemTypes = {
  id: number;
  quantity: number;
};

type ShoppingCartContextProvider = {
  children: ReactNode;
};

type CartContextProvider = {
  getItemAmount: (id: number) => number;
  decreaseItemAmount: (id: number) => void;
  increaseItemAmount: (id: number) => void;
  renderCartItems: () => void;
  getTotalPrice: () => number[]; 
  removeAllItems: () => void; 
  cartItemsAmount: number; 
  cartItems: CartItemTypes[]; 
};

const CartContext = createContext({} as CartContextProvider);

export function useShoppingCart() {
  return useContext(CartContext);
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProvider) {
  const [cartItems, setCartItems] = useState<CartItemTypes[]>([]);
  const [cartItemsAmount, setItemsAmount] = useState(0); 

  const allProducts = [...headphonesList, ...speakersList, ...earphonesList];
  const selectedProducts = cartItems.map((item) =>
    allProducts.filter((product) => product.id === item.id)
  );

  function getItemAmount(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemAmount(id: number) { 
    return setCartItems((currentItems) => {
    setItemsAmount(prevVal => prevVal + 1)
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
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
    setItemsAmount(prevVal => prevVal - 1); 
    setCartItems((currentItems) => {
      if (cartItems.find((item) => item.id === id)?.quantity === 1) {
        return cartItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeAllItems(){
    setCartItems([])
    setItemsAmount(0); 
  }

  function getTotalPrice(){ 
     const pricesArr = []; 
     for(let i=0; i<selectedProducts.length; i++){
      for(let j=0; j<1; j++){
        pricesArr.push(selectedProducts[i][0]?.price); 
      }
     }
     return pricesArr; 
  }



  function renderCartItems() {
    return selectedProducts.map((item) => {
      return item.map((product) => {
        return (
          <CartItem
            name={product.cartName}
            price={product.price}
            image={product.mainImage}
            id={product.id}
          />
        );
      });
    });
  }

  return (
    <CartContext.Provider
      value={{
        getItemAmount,
        increaseItemAmount,
        decreaseItemAmount,
        renderCartItems,
        removeAllItems,
        getTotalPrice, 
        cartItemsAmount,
        cartItems, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
