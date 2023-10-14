import { CartItemType } from "../context/CartContext";

export function addToStorage(key: string, data: CartItemType[] | number) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function deleteFromStorage(key: string) {
  localStorage.removeItem(key);
}

export function getFromStorage(key: string) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }else{
    if(key === 'cartItemsAmount') return 0; 
    if(key === 'cart') return []; 
  }
}
