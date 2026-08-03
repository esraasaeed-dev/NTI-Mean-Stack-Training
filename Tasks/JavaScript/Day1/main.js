

//***** Task 1: Console Intro *****
console.log("JS is running successfully");

//***** Task 2: Start Alert *****
window.alert("Ready to practice!")

//***** Task 3: Product Variables *****
 var productName = "Laptop"
 var price = 1500
 var isAvailable = true
 console.log(typeof(productName))
 console.log(typeof(price))
 console.log(typeof(isAvailable))

//*****   Task 4: Change Page Title *****
document.getElementById("mainTitle").innerText = "Practice Time"

//***** Task 5,6: City Label with + and Template *****
var city = "Cairo"
var country = "Egypt"
console.log(city + ", " + country)
console.log(`Location: ${city} - ${country}`)

//***** Task 7: Shop Math *****
itemPrice = 120  
quantity = 3
var total = itemPrice * quantity
var difference = 400 - total
var ProductPrice = itemPrice * quantity
var division = itemPrice / quantity
var remainder  = itemPrice % quantity
var exponent  = quantity **2
console.log(`
            Total = ${total}
            Difference = ${difference} 
            Product Price = ${ProductPrice} 
            Division = ${division}
            Remainder = ${remainder} 
            Exponent = ${exponent}  ` )

//***** Task 8: Ask Favorite Color *****
window.prompt("What is your favorite color?") 
console.log("is color favorite You is: " + window.prompt("What is your favorite color?")) 
window.alert("is color favorite You is: " + window.prompt("What is your favorite color?"))


//***** Task 9: Loose vs Strict *****
score = 20
textScore = "20"
console.log(score == textScore) // true, Because it only compares values
console.log(score === textScore) // false, Because it compares values ​​and type  

//***** Task 10: Convert Quantity *****
window.prompt("Enter the number of pieces:") 
var numderOfPieces = window.prompt("Enter the number of pieces:")
console.log( typeof(numderOfPieces))

numderOfPieces = Number(numderOfPieces)
console.log( typeof(numderOfPieces))

numderOfPieces = parseInt(numderOfPieces)
console.log(typeof(numderOfPieces))

numderOfPieces = +numderOfPieces
console.log( typeof(numderOfPieces))


//***** Task 11: Fruits List *****
 var fruits = ["apple", "banana", "mango"]
 console.log(fruits[1])
 fruits[1] = "orange"
 fruits.push = "grape"
  console.log(fruits)


//*****  Task 12: Course Object *****
var course = {title:"into to HTML", hours: 3, level: 3  }
course.title = "into to JS"
console.log(course.hours)
console.log(course)


//***** Task 13: Access Check *****
 var hasAccount = true
 var isVerified = false
console.log(hasAccount && isVerified)//false
console.log(hasAccount || isVerified)//true
console.log(!isVerified)//true


//***** Task 14: Update Balance *****
var balance = 50
balance += 30
balance *= 2
balance -= 20
console.log(`Expecte: ${balance}`)


// ***** Task 15: Booking Summary *****
var nameHotel= window.prompt("Enter the hotel name") 
var numberOfNights= window.prompt("Enter the number of nights") 
var booking = window.confirm("Is the booking confirmed?") 
window.alert(`Hotel: ${nameHotel}, Nights: ${numberOfNights} , Confirmed: ${booking}.`)
console.log(`Hotel: ${nameHotel}, Nights: ${numberOfNights} , Confirmed: ${booking}.`)


//***** Task 16: Predict the Output *****

console.log(2 + 8 + "0")//100
console.log("2" + 8 + 0)//280
console.log(2 + "8" + 0)//280


//*****  Task 17: Copy Behavior *****
var city1 = "Alex"
var city2 = city1
city2 = "Giza"
console.log(city1, city2) 
/* 
   city1 = "Alex" ,
   city2 = city1 --> city2 = "Alex" (city1 = "Alex"),
   city2 = "Giza"--> change city2 from  "Alex" to "Giza" and The city won't change (city1 = "Alex") 
*/

var car1 = { brand: "Toyota" }
var car2 ={}
// var car2 = car1
// car2.brand = "Honda"
console.log(car1, car2)
var car2 = Object.assign(car2,car1)
car2.brand = "Honda"
console.log(car1, car2)


//***** Task 18: Mixed Bag *****
var mixedBag = ["city", 5, true, null, undefined, [1,2,"e"], {"title": "array"}]
console.log( typeof(mixedBag[0]))
console.log( typeof(mixedBag[1]))
console.log( typeof(mixedBag[2]))
console.log( typeof(mixedBag[3]))
console.log( typeof(mixedBag[5]))
console.log( typeof(mixedBag[6]))

/**
:ما كنتش عارفه بس بحثت ووجد
object بالخطأ كـ null حيث تم تصنيف  من أول إصدار  JavaScriptانها خطأ قديم في تصميم 
   لكنها قيمة خاصة تُستخدم للتعبير عن عدم وجود قيمة(object) ليست كائنً null مع أن 
*/


//***** Task 19: Order Message (IPO) *****
var nameCustomer= window.prompt("What is the customer's name?") 
var price = window.prompt("What is the order price?") 
var  payment = window.confirm("Has payment been made?") 
price = +price
var order = `Customer name ${nameCustomer}, price ${price}, payment status ${payment}`
window.alert(order)
console.log(order)
document.getElementById("order").innerText = order


//***** Task 20: Two Numbers Report *****
var num1= window.prompt("Enter the first number") 
var num2 = window.prompt("Enter the second number")
num1 = +num1
num2 = +num2
 var sum = num1 + num2
 var difference  = num1 - num2
 var product  = num1 * num2
 var division = num1 / num2
 var modulus = num1 % num2
 var power = num1 ** num2
console.log(`
            ${num1} + ${num2} = ${sum} 
            ${num1} - ${num2} = ${difference}
            ${num1} * ${num2} = ${product}
            ${num1} / ${num2} = ${division}
            ${num1} % ${num2} = ${modulus} 
            ${num1} ^ ${num2} = ${power} `)


//***** Task 21: Fix the Total *****
 function makeInvoiceLine(item ,qty,  paid){
     var result =`"Invoice => Item: ${item} | Qty: ${qty} | Paid: ${paid}"`
    console.log(result)
    document.getElementById("line").innerText = result
 }

var item= window.prompt("Enter the item ") 
var qty = window.prompt("Enter the qty")
var paid = window.confirm("Has payment been made?")
makeInvoiceLine(item,qty,paid)


// ***** Task 23: Save Username *****
function saveUsername(){
    var name = document.getElementById("username").value
    var result
    if (name == "") {
        result = "Username is required"
        document.getElementById("result").innerText = result
    }
    else{
         result = `${name}: successfully Saved`
        document.getElementById("result").innerText = result
        var saveUserName ={username: name, status:"saved"}
        console.log(saveUserName)
    }
}


// ***** Task 24: Compare Values *****
var a = "15"
var b = 15
var c = null
var d
var e = [15]
var f = { value: 15 }
console.log(`variable a:
       ${a} | ${typeof(a)} | ${a == 15} |${a === 15}`)
console.log(`variable b:
       ${b} | ${typeof(b)} | ${b == 15} |${b === 15}`)
console.log(`variable c:
       ${c} | ${typeof(c)} | ${c == 15} |${c === 15}`)
console.log(`variable d:
       ${d} | ${typeof(d)} | ${d == 15} |${d === 15}`)
console.log(`variable e:
       ${e} | ${typeof(e)} | ${e == 15} |${e === 15}`)
console.log(`variable f:
       ${f} | ${typeof(f)} | ${f == 15} |${f === 15}`)
       //console.log(f)


//***** Task 25: Product Card App *****
var productName = window.prompt("What is the product name?")
var brand = window.prompt("What is the brand?")
var price = window.prompt("What is the price?")
var category = window.prompt("What is the category?")
var stock  = window.confirm("Is this product in stock?")
var productInfo = {product: productName, brand: brand, price: price, category: category, stock: stock}
var message = `
               product: ${productName} 
               brand: ${brand} 
               price: ${price}   
               category: ${category}  
               castock: ${stock} `
console.log(productInfo)
window.alert(message)
document.getElementById("results").innerText = message
console.log(productName[0])
console.log(productName.charAt(0))









 
