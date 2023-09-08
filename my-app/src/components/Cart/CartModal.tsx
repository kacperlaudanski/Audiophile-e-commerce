import React, { ReactEventHandler, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";

interface Modal {
    openModal: boolean; 
    closeModal: ReactEventHandler; 
    children: any; 
   // itemsNumber: number; 
    //totalPrice: string; 
}

const CartModal: React.FC<Modal> = ({openModal, closeModal, children, /*itemsNumber, totalPrice*/}) => {
    const ref = useRef<HTMLDialogElement | null>(null); 

    useEffect(() => {
       if(openModal){
        ref.current?.showModal(); 
       }else{
        ref.current?.close(); 
       }
    }, [openModal])
    return (
        <dialog ref={ref} onCancel={closeModal}>
          <div className="cart-top">
            <h3>CART({/*itemsNumber*/})</h3>
            <button className="cart-remove-btn">Remove all</button>
          </div>
          {children}
          <div className="cart-bottom">
            <h4>TOTAL</h4>
            <span className="cart-total-price">{/*totalPrice*/}</span>
          </div>
          <NavLink className='checkout-btn' to='/checkout' onClick={closeModal}>CHECKOUT</NavLink>
        </dialog>
    )
}

export default CartModal; 