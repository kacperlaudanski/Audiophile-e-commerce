//const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {style: 'currency', currency: 'USD', maximumSignificantDigits: 1, currencyDisplay: 'narrowSymbol', maximumFractionDigits:2, minimumFractionDigits:2}); 

export function formatCurrency(number:number){
   const roundedNumber = Math.trunc(Math.round(number*100)/100); 
   
   return `${roundedNumber.toLocaleString(undefined, {maximumFractionDigits:0, minimumFractionDigits:0})} $`; 
}


