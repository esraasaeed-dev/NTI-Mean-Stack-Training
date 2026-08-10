// Task 1: Functions and Callback Functions
function multiply(a, b) {
    return a * b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

function displayResult(result) {
    console.log(result);
}

var result = calculate(5, 4, multiply);

displayResult(result);


// Task 2: Working with setTimeout and setInterval
function greetUser() {
    setTimeout(function () {
        console.log("Hello, User!");
    },3000);
}
greetUser();

var count = 10;
var intervalId = setInterval(function () {
    console.log(count);
    count--;
    if (count === 0) {
        console.log("Time's up!");
        clearInterval(intervalId);
    }
},1000);

var timeoutId = setTimeout(function () {
    console.log("This will be cleared!");
},5000);

clearTimeout(timeoutId);


// Task 3: CRUD without DOM
var items = [];

function createItem(item) {
    items.push(item);
}

function readItems() {
    items.forEach(function (item) {
        console.log(item);
    });
}

function updateItem(index, newItem) {
    items[index] = newItem;
}

function deleteItem(index) {
    items.splice(index, 1);
}

