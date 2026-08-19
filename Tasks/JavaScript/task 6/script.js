// Task 1
function test() {
    x = 10;
}

test();
console.log(x);


// Task 2
function testStrict() {
    "use strict";

    try {
        x = 10;
    } catch (error) {
        console.log(error.message);
    }
}

testStrict();


// Task 3
function testDelete() {
    "use strict";

    var localVar = "test";

    try {
        eval("delete localVar");
    } catch (error) {
        console.log(error.message);
    }

    const user = {
        name: "Sara"
    };

    delete user.name;

    console.log(user);
}

testDelete();


// Task 4
console.log(x);
var x = 10;
console.log(x);

// Output:
// undefined
// 10


// Task 5
sayHi();

function sayHi() {
    console.log("Hi");
}

try {
    sayBye();
} catch (error) {
    console.log(error.message);
}

var sayBye = function () {
    console.log("Bye");
};

// Case 1 Output:
// Hi

// Case 2 Output:
// TypeError


// Task 6
try {
    console.log(a);
    let a = 5;
} catch (error) {
    console.log(error.message);
}

// Output:
// ReferenceError

// Reason:
// a is in the Temporal Dead Zone


// Task 7
var n = 1;

function demo() {
    console.log(n);
    var n = 2;
    console.log(n);
}

demo();
console.log(n);

// Output:
// undefined
// 2
// 1


// Task 8
function testScope() {
    if (true) {
        var x = 10;
    }

    console.log(x);
}

testScope();


// Task 9
function testBlock() {
    if (true) {
        let x = 10;
        const y = 20;

        console.log(x);
        console.log(y);
    }
}

testBlock();


// Task 10
var a = 10;
var a = 20;

let b = 10;
// let b = 20;

// Redeclaration with var is allowed.
// Redeclaration with let causes an error.


// Task 11
const student = {
    name: "Sara",
    age: 22,
    city: "Cairo"
};

student.age = 23;
console.log(student);

student.grade = "A";
console.log(student);

delete student.city;
console.log(student);

try {
    student = {
        name: "Ali"
    };
} catch (error) {
    console.log(error.message);
}


// Task 12
const nums = [1, 2, 3];

nums.push(4);
console.log(nums);

nums[0] = 10;
console.log(nums);

try {
    nums = [5, 6, 7];
} catch (error) {
    console.log(error.message);
}

// push is allowed.
// Changing an index is allowed.
// Reassigning the array is not allowed.


// Task 13
var a;
let b;
const c;
// const c = 10;

console.log(a);
console.log(b);
console.log(c);

// var a is valid.
// let b is valid.
// const c is not valid because const must be initialized.


// Task 14
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1);
console.log(window.g2);
console.log(window.g3);

// Output:
// var global
// undefined
// undefined


// Task 15
const handlers = {};

for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}

console.log(handlers.fn0());
console.log(handlers.fn2());

// Output:
// index: 0
// index: 2

// Reason:
// let creates a new binding for each loop iteration.


// Task 16
const welcome = (name) => `Welcome, ${name}!`;

console.log(welcome("Sara"));


// Task 17
const fullInfo = (first, last, age) =>
    `${first} ${last} is ${age} years old`;

console.log(fullInfo("Ali", "Hassan", 25));


// Task 18
const multiply = (a, b) => a * b;

const sum = (a, b) => {
    console.log(a);
    console.log(b);

    return a + b;
};

console.log(multiply(3, 4));
console.log(sum(3, 4));


// Task 19
const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};

const { title, price, inStock } = product;

console.log(title);
console.log(price);
console.log(inStock);


// Task 20
const languages = ["HTML", "CSS", "JS", "React"];

const [first, second] = languages;

console.log(first);
console.log(second);


// Task 21
function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}

console.log(greet("Sara", "Hi"));
console.log(greet("Sara"));
console.log(greet());


// Task 22
function sumAll(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));


// Task 23
const arr1 = [1, 2];
const arr2 = [3, 4, 5];

const merged = [...arr1, ...arr2];

console.log(merged);

const originalNums = [10, 20, 30];
const copyNums = [...originalNums];

copyNums.push(40);

console.log(originalNums);
console.log(copyNums);


// Task 24
const user = {
    name: "Sara",
    age: 22
};

const contact = {
    email: "sara@nti.com",
    age: 23
};

const result = {
    ...user,
    ...contact
};

console.log(result);

// age = 23
// The last object's property wins.


// Task 25
const values = [2, 4, 6, 8];

function total(a, b, c, d) {
    return a + b + c + d;
}

console.log(total(...values));

// Output:
// 20


// Task 26
let person1 = {
    name: "Ali",
    child: {
        age: 5
    }
};

let person2 = person1;

person2.name = "Omar";

console.log(person1.name);

// Output:
// Omar

// Reason:
// person1 and person2 refer to the same object.


// Task 27
const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const copy = { ...original };

copy.name = "Sara";
copy.details.city = "Alex";

console.log(original);
console.log(copy);

// name changed only in copy.
// details.city changed in both objects because the copy is shallow.


// Task 28
const original2 = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const deepCopy = structuredClone(original2);

deepCopy.details.city = "Alex";

console.log(original2);
console.log(deepCopy);

// The original city stays Cairo because structuredClone creates a deep copy.


// Task 29
const userdata = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};

localStorage.setItem("userdata", JSON.stringify(userdata));

const data = JSON.parse(localStorage.getItem("userdata"));

console.log(typeof data);
console.log(data);

localStorage.removeItem("userdata");

// Type:
// object


// Task 30
const APP_CONFIG = {
    name: "My App",
    version: "1.0",
    api: {
        baseUrl: "https://api.com",
        timeout: 5000
    },
    features: []
};

APP_CONFIG.api.timeout = 10000;

APP_CONFIG.features.push("Login");

try {
    APP_CONFIG = {};
} catch (error) {
    console.log(error.message);
}


// Task 31
function createCard(title, price = 0, ...tags) {
    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} - ${price} EGP`
    };
}

const card1 = createCard("Laptop", 15000, "Tech", "Computer");
const card2 = createCard("Book");

console.log(card1);
console.log(card2);


// Task 32
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}