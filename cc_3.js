// Task 1 - Declare an array with at least 5 numerical values
let prices = [18.99, 34.99, 52.99, 19.98, 20.99];
// Add a new price to the array
prices.push(56.99);
// remove the first price from the array
prices.shift();
// log the updated price list to the console
console.log(prices);

// Task 2 - Declare an array orders with at least 5 numerical values represnting quantities
let orders = [5,10,15,25];
//Increase the third order quantity by 5
orders[2] += 5;
//calculate the total number of all orders
let totalorders = orders.reduce((sum,order) => sum + order, 0);
//log the updated array and total order count to the console
console.log(orders);
console.log("Total order count:", totalorders);