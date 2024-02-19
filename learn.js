/*   INTRO    */


/*


    code is just a set of instructions that run line by line, top to bottom

    text after // or between slashes and asterisks (like this one) is called a "comment" 
    and is not run, just included to help others understand the code

    try copying and pasting code snippets into this online compiler!

    https://onecompiler.com/nodejs/


*/



/*   PRINTING    */




console.log("Hi Jess!") //prints a message




/*   VARIABLES   */



let thisIsAVariable = 5 //stores the value to the right of the equals sign into the variable on the left



/*


    "let" - initializes the variable
    "thisIsAVariable" - the name of the variable, can name it almost anything!
    "= 5" - the assignment

    you can assign to: 
    - an integer, like 5, 10, 100
    - a string of characters (called "strings"), like "Hello!"
    - a calculation, like 5 + 5 / 2 (evaluates left to right)


*/



thisIsAVariable = thisIsAVariable + 1 //adds one to the variable - now thisIsAVariable is equal to 6
console.log(thisIsAVariable) // what does this print? (look at the line above!)

let myName = "Miles"

let pi = 3.1415
let halfOfPi = pi / 2



/*


    NOTE: if the value to the left or right of "+" is a string, we concatenate the values! 
    "a" + "b" is the same as "ab"

    EXAMPLE:

        let index = 2
        let label = "index: "
        console.log(label + index) 

    prints "index: 2"

    if both the left and right are numbers, we add them as normal:
        let cost = 15
        let tax = 1.3
        let total = cost + tax 


*/




/*


    NOTE: variable assignments go from the right of the equals sign to the left of the equals sign

    newValue = oldValue + 1
    newValue is now equal to oldValue plus one

    you can use the same variable on the left and right side, but don't manipulate the value on the left!
    newValue + 1 = oldValue + 1  -- does not work!

    
*/




/*   WHILE LOOPS    */




let count = 1

while (count < 11) {        //starts a loop
    console.log(count)      //prints the number
    count = count + 1    //increments the number by one
}

console.log("loop ended!")



/*


    when a loop is declared, anything inside the curly braces "{ ... }" is run
    over and over again, while the condition in the parentheses is met.

    the loop ends and the code continues running after the loop when the condition is no longer met

    in this case:
        we declare count to be 1                - line 113
    
    loop 1:
        count < 11 is true                      - line 115
        so we print count, then add one to it   - line 116
        count is now 2 - line 117

    loop 2:
        count < 11 is true                      - line 115
        so we print count, then add one to it   - line 116
        count is now 3                          - line 117

    loop 3:
        count < 11 is true                      - line 115
        so we print count, then add one to it   - line 116
        count is now 4                          - line 117

    ...

    loop 9:
        count < 11 is true                      - line 115
        so we print count, then add one to it   - line 116
        count is now 10                         - line 117

    loop 10:
        count < 11 is false!                    - line 115
        so we exit the loop                     - move on to code AFTER the curly braces
        prints "loop ended"                     - line 120

    this loop counts from 1 to 10!


*/




/*   FOR LOOPS    */




for (count = 1; count < 11; count++) {
    console.log(count)
}




/* 




    count = 1 - sets our variable back to one

    count < 11 - sets the bounds of our loop, this loop will run as long as count is less than 10

    count++ - this is shorthand for "count = count + 1", which just increments count by one


    this loop does the same thing as the "while" loop above!




*/




let stars = '*'
for (let number = 1; number < 6; number++) {
    console.log(number + " stars: " + stars)
    stars += '*'
}




/*




    try running this code!

    for (let i = 1; i < 6; i++) - declares a for loop, starting from zero, going up to 5 (less than six!)

    the declaration - let i = 1 - sets i to one
    the condition - i < 6 - the loop runs while i is less than six
    the incrementation - i++ - add one to i every time the loop ends

    inside the loop:
        console.log(i + " stars: " + stars)  - prints the current value of "stars", which is one asterisk
        stars = stars + '*' - adds a single asterisk to "stars"

    stars is now equal to '**'

    the loop runs again, now with stars equal to '**'

    and again, but now stars is equal to '***'

    it runs five times, i = 1, i = 2, i = 3 ... until i = 6 and the condition "i < 6" is not true anymore




*/




stars = '*' //note that we didn't include 'let' here, since we already initialized "stars" above!
for (let number = 1; number < 6; number++) {
    console.log(number + " stars: " + stars)
    stars += '*'
}

// is equal to

stars = '*'
number = 1
while (number < 6) {
    console.log(number + " stars: " + stars)
    stars += '*'
    number = number + 1
}

// while loops are often easier to read, but for loops take up fewer lines and are more commonly used!




/*   ARRAYS    */

let names = ["Miles", "Jess", "Amanda"]
console.log(names) // prints all values of names
console.log(names[0]) //prints just the first value
console.log(names[1]) //prints just the second value
console.log(names[3]) //prints undefined!

/* 

    NOTE: data in code is "zero-indexed", meaning the first thing is at index zero, the second thing is at index 1, etc.

    index       0        1       2
    names = ["Miles", "Jess", "Amanda"]


*/


// we can also access arrays at indices indicated by variables!

let index = 1
console.log(names[index]) // names[index] = names[1] = "Jess"


/*


    Try writing a loop to print out these artists and their artwork!

    Use three lines or less! (excluding the names of the artists and artwork)


*/

let artistNames = ["van Gogh", "Picasso", "Klimt", "Dali", "Rembrandt"]
let artwork = ["Starry Night", "Guernica", "The Kiss", "The Persistence of Memory", "The Night Watch"]

/*


    HINT: look back at the for loop, plus line 69 and line 289

    SOLUTION: https://onecompiler.com/nodejs/424vkrgfr


*/

