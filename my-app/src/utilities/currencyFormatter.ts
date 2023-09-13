const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {style: 'currency', currency: 'USD', maximumSignificantDigits: 1, currencyDisplay: 'narrowSymbol'}); 

export function formatCurrency(number: number){
    return CURRENCY_FORMATTER.format(number); 
}


export function randomIdGenerator(){
    return Math.floor(Math.random() * 100); 
}