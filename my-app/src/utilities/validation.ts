export const conditions = {
    name: /^[a-zA-Z]+$/, 
    email: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 
    phoneNumber:/^\d{6,10}$/,
    address: /^[a-zA-Z0-9\s/]+$/, 
    zip: /^\d{5}$/,
    city: /^[a-zA-Z]+$/,
    country: /^[a-zA-Z]+$/, 
    eMoneyNumber: /^\d{10}$/,
    eMoneyPin: /^\d{4}$/
}

export function checkValidation(input: string, condition: RegExp, setValidationState: React.Dispatch<React.SetStateAction<boolean | null>>){
   if(!input.trim().match(condition)){
    setValidationState(false);
   }else{
    setValidationState(true); 
   }
}
 