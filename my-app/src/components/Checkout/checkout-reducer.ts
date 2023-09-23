
const CheckoutReducer = (state: {}, action: {type: string, payload: string}) => {
   switch(action.type){
    case('NAME'):
      return {...state, name: action.payload}; 
    case('EMAIL'):
      return {...state, email: action.payload}; 
    case('PHONE_NUMBER'):
      return {...state, phoneNumber: action.payload}; 
    case('ADDRESS'):
      return {...state, address: action.payload}; 
    case('ZIP'):
      return {...state, zip: action.payload}; 
    case('CITY'):
      return {...state, city: action.payload}; 
    case('COUNTRY'): 
      return {...state, country: action.payload}; 
   }
}

export default CheckoutReducer; 