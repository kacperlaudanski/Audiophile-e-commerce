export const conditions = {
    name: /^[a-zA-Z]+$/, 
    email: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 
    phoneNumber: /^\(?\d{5,10}\)?[-\s]?\d{3}[-\s]?\d{4}$/, 
    address: /^[a-zA-Z0-9]+$/, 
    zip: /^\d{5}$/,
    eMoneyNumber: /^\d{10}$/,
    eMoneyPin: /^\d{4}$/
}

interface CheckValidation {
    input: string, 
    condition: RegExp, 
    setValidationState: React.Dispatch<React.SetStateAction<boolean>>; 
}

export function checkValidation(input: string, condition: RegExp, setValidationState: React.Dispatch<React.SetStateAction<boolean>>){
   if(!input.trim().match(condition)){
    setValidationState(false);
   }else{
    setValidationState(true); 
   }
}
 