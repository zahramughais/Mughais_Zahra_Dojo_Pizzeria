function pizzaOven (crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven ("thin", "BBQ", ["mozzarella"], ["chicken", "bell pepper", "onions"]);
console.log(pizza3);

var pizza4 = pizzaOven ("classic", "marinara", ["mozzarella"], ["basil", "olive oil"]);
console.log(pizza4);

var crustTypes = ["deep dish", "hand tossed", "thin", "classic"];
var sauceTypes = ["traditional", "marinara", "BBQ", "ranch"];
var cheeses = ["mozzarella", "feta", "parmesan", "cheddar",];
var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken", "bell peppers", "basil"];

function getRandomValue(arr) {
    var i = Math.floor(Math.random() * arr.length);
    var value = arr[i];
    return value;
}
function randomPizza (){
    var pizza = {};
    pizza.crustType = getRandomValue(crustTypes);
    pizza.sauceType = getRandomValue(sauceTypes);
    pizza.cheeses = getRandomValue(cheeses);
    pizza.toppings = getRandomValue(toppings);
    return pizza;
}
console.log(randomPizza());