//The Problem:
//Write a program that prints the numbers from 1 to 100.
//For multiples of three print "Fizz" instead of the number.
//For multiples of five print "Buzz" instead of the number. 
//For numbers which are multiples of both three and five, print "FizzBuzz". 

//The Solution:
//Write a loop that checks each number for multiples of 3 and 5
//Print the number to the console

    
//Print 1-100
function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        //need to check for multiples of 3 & 5 + 3&5 together
        if ( i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if ( i % 3 == 0) {
            console.log("Fizz");
        } else if ( i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();