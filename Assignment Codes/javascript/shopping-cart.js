const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat");

if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);

shoppingCart.splice(shoppingCart.indexOf("Tea"), 0, "Green Tea");

shoppingCart.splice(shoppingCart.indexOf("Tea"), 1)

console.log(shoppingCart);