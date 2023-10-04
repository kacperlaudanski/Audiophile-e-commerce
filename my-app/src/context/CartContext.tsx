import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  headphonesList,
  earphonesList,
  speakersList,
} from "../data/ProductData";
import CartItem from "../components/Cart/CartItem";
import CheckoutCartItem from "../components/Checkout/CheckoutCart/CheckoutCartItem";
import {
  addToStorage,
  deleteFromStorage,
  getFromStorage,
} from "../utilities/cartStorageHandler";

export type CartItemType = {
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
  totalPriceHandler: () => void;
  totalPrice: number;
  removeAllItems: () => void;
  cartItemsAmount: number;
  cartItems: CartItemType[];
  renderCheckoutItems: (firstItemOnly: boolean) => ReactNode;
};

const CartContext = createContext({} as CartContextProvider);

export function useShoppingCart() {
  return useContext(CartContext);
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProvider) {

  const [cartItems, setCartItems] = useState<CartItemType[]>(
    getFromStorage("cart")
  );
  const [cartItemsAmount, setItemsAmount] = useState(
    getFromStorage("cartItemsAmount")
  );

  const [totalPrice, setTotalPrice] = useState(0);

  const allProducts = [...headphonesList, ...speakersList, ...earphonesList];

  function getItemAmount(id: number) {
    return (
      getFromStorage("cart").find((item: CartItemType) => item.id === id)
        ?.quantity || 0
    );
  }

  function increaseItemAmount(id: number) {
    setItemsAmount((prevVal: number) => prevVal + 1);
    setCartItems((currentItems) => {
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
    addToStorage("cartItemsAmount", cartItemsAmount);
    deleteFromStorage("cart");
  }

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
    return getFromStorage("cart")?.map((item: { id: number }, index: number) => {
      const product = allProducts.find((product) => product.id === item.id);
      return (
        <CartItem
          key={index}
          name={product?.cartName!}
          price={product?.price!}
          image={product?.mainImage!}
          id={product?.id!}
        />
      );
    });
  }

  function renderCheckoutItems(firstItemOnly: boolean){
    return getFromStorage('cart')?.map((item: { id: number; quantity: number }, index: number) => {
      const product = allProducts.find((product) => product.id === item.id); 
      if(firstItemOnly && index !== 0){
        return null; 
      }
        return (
          <CheckoutCartItem
            key={index}
            name={product?.cartName}
            image={product?.mainImage}
            price={product?.price}
            quantity={item.quantity}
          />
      )
    })
  }

  useEffect(() => {
    addToStorage("cart", cartItems);
  }, [cartItems]);

  useEffect(() => {
    addToStorage("cartItemsAmount", cartItemsAmount);
  }, [cartItemsAmount]);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
