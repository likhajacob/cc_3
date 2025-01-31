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

// Task 3 - declaring employee details
let employee = {
    name: "Krupa Jacob",
    role: "Business Analyst",
    performanceScore: 85,
    isActive: true
};
// Update the performance score
employee.performanceScore = 90;

// Add a new property 'promotionEligible'
employee.promotionEligible = employee.performanceScore > 95;

// Log the updated employee object to the console
console.log(employee);

// Task 4 - customer feedback records
let feedback = [
    { customerName: "Anna", feedbackText: "Great service!", rating: 5 },
    { customerName: "Boban", feedbackText: "Satisfactory experience.", rating: 4 },
    { customerName: "Molly", feedbackText: "Could be better.", rating: 3 }
];

// Add a new feedback object
feedback.push({ customerName: "David", feedbackText: "Excellent support!", rating: 5 });

// Log the entire feedback list to the console
console.log(feedback);

// Task 5 - Inventory Management System
let inventory = {
    itemName: "Laptop",
    stockCount: 50,
    price: 750,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};

// Log the inventory details and total value to the console
console.log(inventory);
console.log("Total Inventory Value:", inventory.calculateTotalValue());
