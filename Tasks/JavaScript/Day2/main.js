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





