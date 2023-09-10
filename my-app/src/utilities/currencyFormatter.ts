const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {style: 'currency', currency: 'USD', maximumSignificantDigits: 1, currencyDisplay: 'narrowSymbol'}); 

export default function formatCurrency(number: number){
    return CURRENCY_FORMATTER.format(number); 
}
