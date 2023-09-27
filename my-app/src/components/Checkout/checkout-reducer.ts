export type DEFAULT_VALUES_TYPE = {
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
    address: string | null;
    zip: string | null;
    city: string | null;
    country: string | null;
    eMoneyNumber: string | null;
    eMoneyPin: string | null;
  };
  
  export type Action = {
    type: string; 
    payload: string;
  };
  


export const CheckoutReducer = (
    state: DEFAULT_VALUES_TYPE,
    action: Action
  ): DEFAULT_VALUES_TYPE => {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "PHONE_NUMBER":
        return { ...state, phoneNumber: action.payload };
      case "ADDRESS":
        return { ...state, address: action.payload };
      case "ZIP":
        return { ...state, zip: action.payload };
      case "CITY":
        return { ...state, city: action.payload };
      case "COUNTRY":
        return { ...state, country: action.payload };
      case "E_MONEY_NUMBER":
        return { ...state, eMoneyNumber: action.payload };
      case "E_MONEY_PIN":
        return { ...state, eMoneyPin: action.payload };
      default:
        return state;
    }
  };

