// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
function logReceipt (...items){
  let subTotal = 0
  let coloradoFoodDrinkTax = 4.00 * .01
  let takeOutTotal = subTotal + coloradoFoodDrinkTax

  items.forEach((item)=> {
    subTotal += item.price
    console.log(item.descr, `$${item.price}`)
  })
  let tax = Math.round(coloradoFoodDrinkTax * subTotal*100)/100
console.log(`Subtotal: $${subTotal}`)
console.log(`Tax: $${tax}`)
console.log(`Total: $${Math.round((coloradoFoodDrinkTax * subTotal + subTotal)*100)/100}`)
}


logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
