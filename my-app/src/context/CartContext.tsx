import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {
  headphonesList,
  earphonesList,
  speakersList,
} from "../data/ProductData";
import CartItem from "../components/Cart/CartItem";
import CheckoutCartItem from "../pages/Checkout/CheckoutCartItem";
import { addToStorage, deleteFromStorage, getFromStorage } from "../utilities/cartStorageHandler";

export type CartItemTypes = {
  id: number;
  quantity: number;
};

type ShoppingCartContextProvider = {
  children: ReactNode;
};

type CartContextProvider = {
  getItemAmount: (id: number | undefined) => number | undefined;
  decreaseItemAmount: (id: number | undefined) => void;
  increaseItemAmount: (id: number | undefined) => void;
  renderCartItems: () => void;
  totalPriceHandler: () => void;
  totalPrice: number;
  removeAllItems: () => void;
  cartItemsAmount: number;
  cartItems: CartItemTypes[];
  renderCheckoutItems: () => ReactNode;
  renderFirstCheckoutItem: () => ReactNode; 
};

const CartContext = createContext({} as CartContextProvider);

export function useShoppingCart() {
  return useContext(CartContext);
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProvider) {
  const [cartItems, setCartItems] = useState<CartItemTypes[]>(getFromStorage('cart'));
  const [cartItemsAmount, setItemsAmount] = useState(getFromStorage('cartItemsAmount'));

  const allProducts = [...headphonesList, ...speakersList, ...earphonesList];

  function getItemAmount(id: number | undefined) {
    return getFromStorage('cart').find((item: {id: number, quantity: number}) => item.id === id)?.quantity || 0;
  }

  function increaseItemAmount(id: number | undefined) {
    if (id !== undefined) {
      return setCartItems((currentItems) => {
        setItemsAmount((prevVal: number) => prevVal + 1);
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
  }

  function decreaseItemAmount(id: number | undefined) {
    setItemsAmount((prevVal: number) => prevVal - 1);
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

  function removeAllItems() {
    setCartItems([]);
    setItemsAmount(0);
    addToStorage('cartItemsAmount', cartItemsAmount);
    deleteFromStorage('cart'); 
  }

  const [totalPrice, setTotalPrice] = useState(0);

  function totalPriceHandler() {
    let totalPrice = 0;
    cartItems.map((item) => {
      const product = allProducts.find((product) => product.id === item.id);
      if (product !== undefined) {
        totalPrice += product?.price * item.quantity;
      }
    });
    setTotalPrice(totalPrice);
  }

  function renderCartItems() {
    return getFromStorage('cart')?.map((item: {id: number}) => {
      const product = allProducts.find((product) => product.id === item.id);
      console.log(allProducts);
      return (
        <CartItem
          name={product?.cartName}
          price={product?.price}
          image={product?.mainImage}
          id={product?.id}
        />
      );
    });
  }

  function renderFirstCheckoutItem() {
    return getFromStorage('cart')?.map((item:{id: number, quantity:number}, index:number) => {
      const product = allProducts.find((product) => product.id === item.id);
      if (index === 0) {
        return (
          <CheckoutCartItem
            name={product?.cartName}
            image={product?.mainImage}
            price={product?.price}
            quantity={item.quantity}
          />
        );
      }
      return null;
    });
  }

  function renderCheckoutItems() {
    return getFromStorage('cart')?.map((item: {id: number, quantity: number}) => {
      const product = allProducts.find((product) => product.id === item.id);
      return (
        <CheckoutCartItem
          name={product?.cartName}
          image={product?.mainImage}
          price={product?.price}
          quantity={item.quantity}
        />
      );
    });
  }

  useEffect(() => {
   addToStorage('cart', cartItems)
  }, [cartItems])

  useEffect(() => {
    addToStorage('cartItemsAmount', cartItemsAmount); 
  }, [cartItemsAmount])

  return (
    <CartContext.Provider
      value={{
        getItemAmount,
        increaseItemAmount,
        decreaseItemAmount,
        renderCartItems,
        removeAllItems,
        cartItemsAmount,
        totalPrice,
        totalPriceHandler,
        cartItems,
        renderCheckoutItems,
        renderFirstCheckoutItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
