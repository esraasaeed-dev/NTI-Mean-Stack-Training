// Task 1: Format Full Name
var userName = prompt("What's your full name?").trim();
 var names = userName.split(" ");
 var fullName = "";
 for(var i = 0; i< names.length; i++){
    fullName += names[i].charAt(0).toUpperCase()+names[i].slice(1).toLowerCase()+" "
 }
console.log(fullName);
console.log(fullName.replaceAll(" ","").length);

// Task 2: Email Validator
var email = prompt("Enter your Email.");

if(email.includes("@") && !email.startsWith("@") && email.endsWith(".com") && email == email.replaceAll(" ","").trim()){
    console.log("Valid Email");
}else{console.log("Invalid Email");}

// Task 3: Count a Character
var text = prompt("Enter the text")
var textAppercase = text.toUpperCase();
textAppercase  = textAppercase.replaceAll(" ","") 
var char = prompt("Enter the character.")
charAppercase = char.toUpperCase();
var timesChar = 0
for(var i = 0 ; i < textAppercase.length; i++){
    if(textAppercase[i] == charAppercase){
        timesChar++;
    }
}
console.log(`Number of times the letter "${char}" appears  in the text "${text}"  = ${timesChar}`);

// Task 4: Replace a Word
var text = prompt("Enter the text").trim();
var word = prompt("Enter the word.").trim();
console.log(text.replaceAll(word,"***"));

// Task 5: Username Generator
var fristName = prompt("Enter your frist name").trim();
var lastName = prompt("Enter your last name").trim();
var userName = fristName.concat(".",lastName)
if (userName.length > 15){
    userName = userName.slice(0,15);
    console.log(userName);
}

// Task 6: Search Inside Text
var text = prompt("Enter thr the text ").trim();
var word = prompt("Enter the word").trim();
var wordsText =  text.split(" ");
var totalaTimes = 0;
var arrOftimes = []
 var j = 0;
for(var i = 0; i< wordsText.length; i++ ){
    if(wordsText[i] == word){
        totalaTimes++;
        arrOftimes[j] = i; 
        j++
    }
}
console.log(arrOftimes)
console.log(`Total number of occurrences is : ${totalaTimes}, first and last position is  index of(${Math.min(...arrOftimes)},${Math.max(...arrOftimes)}) `)
    
// Task 7: Reverse Every Word
var text = prompt("Enter the the text ").trim();
var textRevrse = ""
var wordsText = text.split(" ")
for(var i = 0; i < wordsText.length; i++){
    for(var j = wordsText[i].length -1; j >= 0; j--){
        textRevrse +=wordsText[i].charAt(j)
    }
    textRevrse+= " " 
}
console.log(` Text Revrse is : ${textRevrse}`)

// Task 8: Text Analyzer
var text = prompt("Enter the the text ").trim();
var wordsText = text.split(" ");
var textNospaces = text.replaceAll(" ","")
var numVowels = 0;
var numDigits = 0;
var numUppercase = 0;
var numLowercase = 0;
var longestWord = wordsText[0];
var shortestWord = wordsText[0];
for(i = 0; i < textNospaces.length; i++){
    if(textNospaces.charAt(i).toLowerCase() != textNospaces.charAt(i).toUpperCase()){ 
        if(textNospaces.charAt(i).toLowerCase() == textNospaces.charAt(i)){
            numLowercase++;
        }else {numUppercase++;} 
        if(textNospaces.charAt(i).toLocaleLowerCase() == "a" 
        || textNospaces.charAt(i).toLocaleLowerCase() == "e" 
        || textNospaces.charAt(i).toLocaleLowerCase() == "i"
        || textNospaces.charAt(i).toLocaleLowerCase() == "o"
        || textNospaces.charAt(i).toLocaleLowerCase() == "u"){
            numVowels++;
        }
    }if(!isNaN(Number(textNospaces.charAt(i)))){
        numDigits++;
    }
} 
for(var i = 0; i< wordsText.length; i++){
    if(wordsText[i].length > longestWord.length){
        longestWord = wordsText[i];
    }if(wordsText[i].length < shortestWord.length){
        shortestWord = wordsText[i] ;
    }
}

console.log( `Text is :${text}
            Number of wordes is ${wordsText.length}
            Number of characters is ${textNospaces.length}
            Number of vowels is ${numVowels} 
            Number of digits is ${numDigits}
            Number of uppercase letters is ${numUppercase} 
            Number os lowercase is ${numLowercase}
            Longest word  is ${longestWord}
            Shortest word is ${shortestWord}`)

// Task 9: Phone Number Masking
var number = prompt("Enter the phon number.").trim();
var hiden = "*".repeat(number.length-7);
var showfrist = number.slice(0,4);
var showlaste = number.slice(number.length-3 ,number.length);
var number = showfrist.concat("",hiden.concat("",showlaste));
console.log(`Phon number: ${number}`);

// Task 10: Sentence Cleaner
var text = "  i love javascript ; I enjoy studying and solving problems with it   ";
text = text.trim().replaceAll("javascript","JavaScript");
text = text[0].toUpperCase() + text.slice(1,text.length);
if(text.endsWith(".")){
    console.log(text);
}else{ 
    text = text + "."
    console.log(`added the period: ${text}`)
}

// Bonus Task: Text Processing Menu
var text = prompt("Enter your text:");
var choice = "0";

while (choice != "8") {

    choice = prompt(`
                     Choose a numder option:

                    1.Convert text to uppercase
                    2.Convert text to lowercase
                    3.Count characters
                    4.Count words
                    5.Search for a word
                    6.Replace a word
                    7.Reverse text
                    8.Exit
                        `);

    switch (choice) {
        
        case "1":
            console.log(text.toUpperCase());
            break;

        case "2":
            console.log(text.toLowerCase());
            break;

        case "3":
            console.log(`Number of characters: ${text.length}`);
            break;

        case "4":
            console.log(`Number of words: ${text.trim().split(" ").length}`);
            break;

        case "5":
            var searchWord = prompt("Enter the word to search:");
            if (text.includes(searchWord)) {
                console.log("Word found.");
            } else {
                console.log("Word not found.");
            }
            break;

        case "6":
            var oldWord = prompt("Enter the word to replace:");
            var newWord = prompt("Enter the new word:");
            text = text.replace(oldWord, newWord);
            console.log(`Updated text: ${text}`);
            break;

        case "7":
            var reversedText = "";
            for (var i = text.length - 1; i >= 0; i--) {
                reversedText += text.charAt(i);
            }
            console.log(`Reversed text: ${reversedText}`);
            break;

        case "8":
            console.log("Program exited.");
            break;

        default:
            console.log("Invalid choice.");
    }
}

















