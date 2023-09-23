import React, { SetStateAction } from "react";

export const conditions = {
    name: /^[a-zA-Z]+$/, 
    email: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 
    phoneNumber: /^\(?\d{5,10}\)?[-\s]?\d{3}[-\s]?\d{4}$/, 
    address: /^[a-zA-Z0-9]+$/, 
    zip: /^\d{5}$/,
}

interface CheckValidation {
    input: string, 
    condition: string, 
    setValidationState: (state: boolean) => void; 
}

export function checkValidation({input, condition, setValidationState}: CheckValidation){
   if(!input.trim().match(condition)){
    setValidationState(false);
   }else{
    setValidationState(true); 
   }
}