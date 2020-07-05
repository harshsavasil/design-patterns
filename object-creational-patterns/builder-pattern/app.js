const Pizza = require('./Pizza');
const pepperoni = new Pizza();

pepperoni.setBase('Whole Wheat');
pepperoni.setSauce('Tomato Basil');
pepperoni.setCheese('Smoked Mozarella');
pepperoni.setToppings(['Pepperoni', 'Basil']);

pepperoni.bake();

