/*Ternary Operator: The “Question mark” or “conditional” 
operator in JavaScript is a ternary operator that has three 
operands. It is the simplified operator of if/else.
Syntax:
condition ? value if true : value if false
Example:
Input: let result = (10 > 0) ? true : false;
Output: true*/

//program to check whether the number is even
//or odd using the ternary operator.

let num;
let checkCondition = num % 2 == 0 ? "even" : "odd";
console.log(checkCondition);
