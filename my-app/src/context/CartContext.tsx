import { createContext, ReactNode, useContext, useState } from "react";

type CartItem = {
    id: number; 
    quantity: number; 
}

type ShoppingCartContextProvider = {
    children: ReactNode
}

type CartContextProvider = {
    getItemAmount: (id: number) => number
    decreaseItemAmount: (id: number) => void
    increaseItemAmount: (id: number) => void
    removeItem: (id: number) => void
}

const CartContext = createContext({} as CartContextProvider); 

export function useShoppingCart(){
    return useContext(CartContext); 
}

export function ShoppingCartContextProvider({children}:ShoppingCartContextProvider){
   
    const [cartItems, setCartItems] = useState<CartItem[]>([]); 

    function getItemAmount(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0; 
    }

    function increaseItemAmount(id:number){
        return setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null){
                return [...currentItems, {id, quantity: 1}]; 
            }else{
               return currentItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item; 
                    }
                })
            }
        })
    }

    function decreaseItemAmount(id: number){
        setCartItems(currentItems => {
            if(cartItems.find(item => item.id === id)?.quantity === 1){
                return cartItems.filter(item => item.id !== id); 
            }else{
               return currentItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}; 
                    }else{
                        return item; 
                    }
                })
            }
        })
    }

    function removeItem(id: number){
        return setCartItems((currentItems) => {
           return currentItems.filter(item => item.id !== id); 
        })
    }



    return <CartContext.Provider value={{getItemAmount, increaseItemAmount, decreaseItemAmount, removeItem}}>
        {children}
    </CartContext.Provider>
}
