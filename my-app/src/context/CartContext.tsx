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
  removeItem: (id: number) => void;
  renderCartItems: () => void;
  getTotalPrice: () => number; 
  removeAllItems: () => void; 
  cartItemsAmount: number; 
};

const CartContext = createContext({} as CartContextProvider);

export function useShoppingCart() {
  return useContext(CartContext);
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProvider) {
  const [cartItems, setCartItems] = useState<CartItemTypes[]>([]);

  const allProducts = [...headphonesList, ...speakersList, ...earphonesList];
  const selectedProducts = cartItems.map((item) =>
    allProducts.filter((product) => product.id === item.id)
  );
  const cartItemsAmount = selectedProducts.length; 

  function getItemAmount(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemAmount(id: number) {
    return setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            console.log(item.quantity);
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

  function removeItem(id: number) {
    return setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  function removeAllItems(){
    return setCartItems([]); 
  }

  function getTotalPrice(){
     let totalPrice = 0; 
     selectedProducts.map((productArr, index) => {
        productArr.map(product => {
            totalPrice += product.price
        }) 
     }) 
     return totalPrice;
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
        removeItem,
        renderCartItems,
        getTotalPrice,
        removeAllItems,
        cartItemsAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
