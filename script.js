//? EXERCISE 1

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

//* ANSWER

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  


//? EXERCISE 2


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

//* MY ANSWER

function isAdult(age) {
    if(age >= 18) {
        return true
    } else {
        return false
    }
}

console.log('Exercise 2 Result:', isAdult(21));


//? EXERCISE 3
/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

//* ANSWER

function isCharAVowel(character) {
    if(character === ("a" || "e" || "i" || "o" || "u")) {
        return true
    } else {
        return false
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));



//* ALTERNATIVE ANSWER using INCLUDES

// function isCharAVowel(char) {
//     const vowels = "aeiouAEIOU"
//     return vowels.includes(char)
// }

// console.log('Exercise 3 Result:', isCharAVowel("a"));



// ? EXERCISE 4
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

//* MY ANSWER

function generateEmail(name, domain) {
    return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


//? EXERCISE 5

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

//* MY ANSWER

function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


//? EXERCISE 6


/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

//* MY ANSWER - starting at end of string

function reverseString(string) {
    let newString = ""
    for(let i = string.length - 1; i >= 0; i--) {
        newString += string[i] // newString = newString + string[i] -- string.charAt - alternative for [0]
    }
    return newString
}

console.log('Exercise 6 Result:', reverseString("rockstar"));


//* ANSWER - starting at beginning of string

// function reverseString(string) {
//     let newString = ""
//     for(let i = 0; i < string.length; i++) {
//         newString = string[i] + newString // newString = newString + string[i] -- string.charAt - alternative for [0]
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

//* MY ANSWER

function checkPalindrome(isPalindrome) {
    let palOne = ""
    for(let i = isPalindrome.length - 1; i >= 0; i--) {
        palOne += isPalindrome[i] // newString = newString + string[i]
    }
    return palOne === isPalindrome
}

console.log('Exercise 7 Result:', checkPalindrome("radar"));



//* ANSWER from Nick

// function checkPalindrome(string) {
//     return reverseString(string) === string
//     }

// console.log('Exercise 7 Result:', checkPalindrome("radar"));

//? EXERCISE 8

/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

//* MY ANSWER

function maxOfThree(num1, num2, num3) {
    numArray = [num1, num2, num3]
    maxNum = 0
    let i = 0
    while (i < numArray.length-1) {
        if(numArray[i] > maxNum)
        maxNum = numArray[i]
        i++
    }
    return maxNum
}

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));


//* ALTERNATIVE ANSWER

// ! return Math.max()




//? EXERCISE 9

/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

//* MY ANSWER

function calculateTip(billAmount, tipPercentage) {
    return Math.round(((billAmount*tipPercentage)/100))
}

console.log('Exercise 9 Result:', calculateTip(50, 20));


//? EXERCISE 10

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

//* MY ANSWER

function convertTemperature(temp, convertTo) {
    let convertedTemp = 0
    if(convertTo === "C") {
        return (temp * 1.8) + 32
    } else if (convertTo === "F") {
        return (temp - 32) / 1.8
    } else if (convertTo !== "C" || convertTo !== "F") {
        console.log("please enter valid input: either C or F")
    }
}

console.log('Exercise 10 Result:', convertTemperature(32, "C"));


//? EXERCISE 11


/*
Exercise 11: basicCalculator()

Create a function named basicCalculator. It should take three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). Perform the provided operation on the two numbers. In operations where the order of numbers is important, treat the first parameter as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

//* MY ANSWER

function basicCalculator(operand1, operand2, operator) {
    if(operator === "add") {
        return operand1 + operand2
    } else if(operator === "subtract") {
        return operand1 - operand2
    } else if(operator === "multiply") {
        return operand1 * operand2
    } else if(operator === "divide") {
        return operand1 / operand2
    } else {
        console.log("Invalid input: please try again")
    }
}


console.log('Exercise 11 Result:', basicCalculator(42, 5, "subract"));



//? EXERCISE 12

/*
Exercise 12: calculateGrade()

Define a function called calculateGrade. It should take a numerical score and return the corresponding letter grade (A, B, C, D, F). For example, 90 and above yields an 'A', 80-89 is a 'B', and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

//* MY ANSWER

function calculateGrade(score) {
    if(score >= 90) {
        return "A"
    } else if(score >= 80) {
        return "B"
    } else if(score >= 70) {
        return "C"
    } else if(score >= 60) {
        return "D"
    } else if(score <60 && score >= 0) {
        return "F"
    } else {
        console.log("Please input valid number")
    }
}


console.log('Exercise 12 Result:', calculateGrade(-6));


//? EXERCISE 13
/*
Exercise 13: createUsername()

Define a function called createUsername. It should take a first name and a last name and return a username. The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/

//* MY ANSWER - using .slice and .length

function createUsername(firstName, lastName) {
    let firstLast = firstName + lastName
    return ((firstName.slice(0, 3)) + (lastName.slice(0, 3))) +  firstLast.length
}


console.log('Exercise 13 Result:', createUsername("Samantha", "Green"));



//? EXERCISE 14

/*
Exercise 14: numArgs()

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

//* MY ANSWER - using (...args)

// function numArgs(...args) {
//     let numberOfParameters = 0
//     for(let i = args.length; i > 0; i--) {
//         numberOfParameters += 1
//     }
//     return numberOfParameters
// }


console.log('Exercise 14 Result:', numArgs(1, 2, 3, 4, 5));



//* JOE'S FOLLOW UP ANSWER

function numArgs(...args) {
    return `${args.length}`
}

