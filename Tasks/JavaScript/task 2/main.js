//====== Task 1: Using console.log() and Variables =====
var string = "Js"
var num = 5
var bool = true
var nul = null
var undef 
console.log(string , num ,bool, nul, undef)
console.log(typeof(string), typeof(num), typeof(bool), typeof(nul), typeof(undef))
var firstName = "Esraa"
var lastName = "Said"
console.log( `welcome ${firstName} ${lastName}`)
console.log( "welcome " + firstName + " "  + lastName)

//===== Task 2: Working with Data and Basic Validation =====
var username = prompt(" Enter username")
var Password = Number(prompt("Enter password"))
if (username != ""){
    if(Password.length < 8){
        alert("Password must be at least 8 characters.")
    }else{
        console.log(`username: ${Username} , Password: ${Password}`)
    }
}else{
     alert("Username is required")
}



/* ==== Objective: Build a program to evaluate employees based on multiple criteria (such as:
years of experience, work performance, and overall rating) ==== */

// Gather Employee Data
var name = prompt("What is your name?" )
var age = prompt("How old are you?" )
var experience = Number(prompt("How many years of experience?"))
var rate = Number(prompt("Rate yourself from 1 to 10"))

// Determine Job Category & Salary Calculation
var baseSalary = 15000
var bonus  
var finalSalary 
if( experience < 2){
    experience = "junior"
    bonus = baseSalary * 0.1
    finalSalary = baseSalary + bonus
}
else if(experience >= 2 && experience <= 5){
    experience = "Mid-Level"
    bonus = baseSalary * 0.15
    finalSalary = baseSalary + bonus
}
else if(experience > 5 && experience <= 10){
    experience = "Senior"
    bonus = baseSalary * 0.2
    finalSalary = baseSalary + bonus
}
else {
    experience = "Expert"
    bonus = baseSalary * 0.2
    finalSalary = baseSalary + bonus
}

// Check Performance Level
switch(true){
   case rate > 9:
      rate = "Excellent";
      break
    case ( rate == 7 || rate == 8):
       rate = "Good"
       break
    case (rate == 5 || rate == 6):
        rate = "Average"
        break
    default:
        rate = "Needs Improvemen"
       
}

// Work Shift Time Calculation
var currenthour = new Date().getHours()
var workShift 
if( currenthour >= 9 && currenthour < 18 ){
    workShift = "Day shift"
}
else {
    workShift = "Night shift"
}

var message = `
                name: ${name}
                age: ${age}
                Experience: ${experience}
                Rate: ${rate}
                Base Salary: ${baseSalary}
                Bonus: ${bonus}
                Final Salary: ${finalSalary}
                Working Shift: ${workShift}`

console.log(message)
alert(message)
document.getElementById("result").innerText = message



//===== Task : Attendance Sheet =====
for(var i = 1; i<= 10; i++){
    console.log(i)
}
//===== Task : Even Seat Numbers =====
for(var i = 2; i<= 20; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}
console.log("These seats are only available for online booking.")


//===== Task : Daily Sales Total =====
var totalSales = 0     
for(var i = 1; i<= 15; i++){
    totalSales += i
}
console.log(totalSales)

//===== Task : Queue Tickets =====
var i = 1
while(i <= 7){
    console.log(i)
    i++
}

//===== Task : Rocket Launch Countdown =====
var i = 8
while(i >= 1){
    console.log(i)
    i--
}

//===== Task : First Login Welcome =====


var i = 1
do{
    console.log("Welcome")
    console.log(i)
    i++
}while(i <= 5)

//===== Task : Empty Cart vs First Visit =====
var itemsInCart = 10

while(itemsInCart < 5){
    alert("Start shopping")
}
do{
    alert("Start shopping")
}while(itemsInCart < 5)
// while ---> Executed only when the condition is met
//do...while ---> It must be executed at least once, even if the condition is not met.

//===== Task: Student Profile Card =====
var userName = "Ali"
var userAge = 22
var isStudent = true
console.log(`
            userName: ${userName}
            userAge: ${userAge}
            isStudent: ${isStudent}
    `)

console.log(`
            userName: ${typeof(userName)}
            userAge: ${typeof(userAge)}
            isStudent: ${typeof(isStudent)}
    `)
// ===== Task: Price Match Bug =====
var dbPrice = 10
var inputPrice = "10"
console.log(dbPrice == inputPrice)
console.log(dbPrice === inputPrice)
// == --> It only compares values
// === --> It compares values ​​and type

//===== Task : App Welcome Screen =====
var userName = prompt("What is your name?")
alert(`Welcome, ${userName}`)
console.log(`Welcome, ${userName}`)

//===== Task: Checkout Quantity =====
 pieces = prompt("How many pieces?")
 
 console.log(typeof(Number(pieces)))
 console.log(typeof(+(pieces)))
 console.log(typeof(parseInt(pieces)))

 //==== Task: Mini Calculator =====
 var a = 10
 var b = 3
 console.log(a+b)
 console.log(a-b)
 console.log(a/b)
 console.log(a%b)
 console.log(a**b)

 //==== Task: Cinema Age Gate ====
 var age = "23"
 if(age >= 18){
    console.log(" You can enter")
 }else{
    console.log("Sorry, underage")
 }
 //===== Task: Exam Result Letter =====
 var grade = 85
 if( age >= 60 && age<=70){
    console.log("D")
 }else if(age > 70 && age <=80){
    console.log("C")
 }else if(age > 80 && age <= 90){
        console.log("B")
 }else if(age > 90 && age <= 100){
        console.log("A")
}else
    console.log("F")

//===== Task : Quick Age Label =====
var age = Number(prompt("Enter your age"));

var status = age >= 18 ? "Adult" : "Minor";

console.log(status);

//===== Task: Quick Age Label =====
var day =prompt("What day is it today?")
switch(day){
    case "Saturday":
    case "Sunday":
        alert("Work Day")
        break
    case "Friday":
    case "Monday":
        alert("Weekend")
        break
    default:
        alert("default")
    
}

//===== Task: Product Price Table ====
var unitPrice = prompt("What is the unit price?")
for(var i = 1; i <= 10; i++){
    console.log(i*unitPrice)
}

//==== Task: Download Progress =====
var size = Number(prompt("Enter file size"));

if (size > 0) {
    for (let i = 1; i <= size; i++) {
        console.log(i);
    }
} else {
    console.log("size file Invalid");
}

//===== Task: Order IDs Parity =====
start = prompt("What is the starting number?")
var end = prompt("What is the end number?")
for(i = start; i <= end; start++){
    if(i % 2 == 0){
        console.log("express")
    }else{
        console.log("normal")
    }
}

//===== Task : Weekly Expense Average ======
var totalBudget = 0
var averageBudget = 0

for(var i = 1; i <= 5; i++){
    var budget = Number(prompt(`Day ${i} Budget`))
    totalBudget += budget
}
averageBudget = totalBudget / 5
console.log(totalBudget)
console.log(averageBudget)

//===== Task: ATM PIN Retry =====
var correctPin = "1234"
var attempts = 1
 
 while(attempts <= 3){
    enterpin = prompt(" Enter PNI")
    if(correctPin === enterpin){
        alert("Login success")
        break
    }else if (attempts == 3){
        alert("Login failure")
    }
    attempts++
 }

//===== Task: Account Verification Gate ======
hasAccount = true
isVerified = false
console.log(hasAccount || isVerified)
console.log(hasAccount && isVerified)
console.log(!hasAccount )
console.log(!isVerified)
if(hasAccount){
    if(isVerified){
        console.log("Welcome back")
    }else{
        console.log("Please verify your account")
    }
}else{
    console.log("Please sign up")
}

//===== Task: Broken Invoice Total =====
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
var result = a + b + Number(c) + d + e
console.log(result)
if (result <= 20){
    for ( var i = 1; i <= result; i++){
        console.log(i)
    }
}else{
    console.log("Too big to print line by line.")
}

//==== Task: Promo Code Combinations ======
var num = Number(prompt("Enter the number"))
var factorial = 1
if(num < 0){
    console.log("Error, you entered a negative number")
    alert("Error, you entered a negative number");

}else{
    for(var i = num; i >= 1; i--){
    factorial *= i
    }
console.log(`${num}! = ${factorial}`)
alert(`${num}! = ${factorial}`) 
}





















 







