export function formatCurrency(number:number){
   const roundedNumber = Math.round(number*100)/100; 
   
   return `${roundedNumber.toLocaleString(undefined, {maximumFractionDigits:0, minimumFractionDigits:0})} $`; 
}