//? EXERCISE 1

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// const maxOfTwoNumbers = (x, y) => {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }
  
//   console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  


//? EXERCISE 2


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

// function isAdult(age) {
//     if(age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log('Exercise 2 Result:', isAdult(21));


//? EXERCISE 3
/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// function isCharAVowel(character) {
//     if(character === ("a" || "e" || "i" || "o" || "u")) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log('Exercise 3 Result:', isCharAVowel("a"));

// ? EXERCISE 4
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// function generateEmail(name, domain) {
//     return `${name}@${domain}`
// }

// console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


//? EXERCISE 5

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

// function greetUser(name, timeOfDay) {
//     return `Good ${timeOfDay}, ${name}!`
// }

// console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


//? EXERCISE 6


/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

// function reverseString(string) {
//     let newString = ""
//     for(let i = string.length - 1; i >= 0; i--) {
//         newString += string[i] // newString = newString + string[i]
//     }
//     return newString
// }

// console.log('Exercise 6 Result:', reverseString("rockstar"));



//? EXERCISE 7

/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

// function checkPalindrome(isPalindrome) {
//     let palOne = ""
//     for(let i = isPalindrome.length - 1; i >= 0; i--) {
//         palOne += isPalindrome[i] // newString = newString + string[i]
//     }
//     return palOne === isPalindrome
// }

// console.log('Exercise 7 Result:', checkPalindrome("radar"));


//? EXERCISE 8

/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

// function maxOfThree(num1, num2, num3) {
//     numArray = [num1, num2, num3]
//     maxNum = 0
//     let i = 0
//     while (i < numArray.length-1) {
//         if(numArray[i] > maxNum)
//         maxNum = numArray[i]
//         i++
//     }
//     return maxNum
// }

// console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));



//? EXERCISE 9

/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/


// function calculateTip(billAmount, tipPercentage) {
//     return Math.round(((billAmount*tipPercentage)*0.01))
// }

// console.log('Exercise 9 Result:', calculateTip(47.4567, 20));


//? EXERCISE 10

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

// function convertTemperature(temp, convertTo) {
//     let convertedTemp = 0
//     if(convertTo === "C") {
//         return (temp * 1.8) + 32
//     } else if (convertTo === "F") {
//         return (temp - 32) / 1.8
//     } else if (convertTo !== "C" || convertTo !== "F") {
//         console.log("please enter valid input: either C or F")
//     }
// }

// console.log('Exercise 10 Result:', convertTemperature(32, "C"));


//? EXERCISE 11


/*
Exercise 11: basicCalculator()

Create a function named basicCalculator. It should take three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). Perform the provided operation on the two numbers. In operations where the order of numbers is important, treat the first parameter as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

// function basicCalculator(operand1, operand2, operator) {
//     if(operator === "add") {
//         return operand1 + operand2
//     } else if(operator === "subtract") {
//         return operand1 - operand2
//     } else if(operator === "multiply") {
//         return operand1 * operand2
//     } else if(operator === "divide") {
//         return operand1 / operand2
//     } else {
//         console.log("Invalid input: please try again")
//     }
// }


// console.log('Exercise 11 Result:', basicCalculator(42, 5, "subract"));



//? EXERCISE 12

/*
Exercise 12: calculateGrade()

Define a function called calculateGrade. It should take a numerical score and return the corresponding letter grade (A, B, C, D, F). For example, 90 and above yields an 'A', 80-89 is a 'B', and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

// function calculateGrade(score) {
//     if(score >= 90) {
//         return "A"
//     } else if(score >= 80) {
//         return "B"
//     } else if(score >= 70) {
//         return "C"
//     } else if(score >= 60) {
//         return "D"
//     } else if(score <60 && score >= 0) {
//         return "F"
//     } else {
//         console.log("Please input valid number")
//     }
// }


// console.log('Exercise 12 Result:', calculateGrade(-6));

