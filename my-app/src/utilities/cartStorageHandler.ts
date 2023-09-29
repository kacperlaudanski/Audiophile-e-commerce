import { CartItemTypes } from "../context/CartContext";

export function addToStorage(key: string, data: CartItemTypes[] | number) {
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
    return []
  }
}
