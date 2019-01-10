
// EXTRAS
let beverageHelper = new BeverageFactory();


const olive = new Extra("olive", 2);
const meat = new Extra("meat", 5);
const tomatoe = new Extra("tomatoe", 2);
const mushroom = new Extra("mushroom", 4);



const pizzas = new OrderItem(1, funghi);
pizzas.getType.addExtra(olive);
const pizzas2 = new OrderItem(2, margharita);
const pizzas3 = new OrderItem(1, quatreformaggie);
pizzas3.getType.addExtra(meat);


let order = new Order();
order.addItems(pizzas);
order.addItems(pizzas2);
order.addItems(pizzas3);

