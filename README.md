FizzBuzz JavaScript Project
Introduction
Welcome to my FizzBuzz JavaScript project! This project is a simple yet fundamental exercise in programming, often used to teach and test basic coding skills. The goal of this project is to print numbers from 1 to 100, but with a twist:

For multiples of 3, print “Fizz” instead of the number.
For multiples of 5, print “Buzz” instead of the number.
For multiples of both 3 and 5, print “FizzBuzz”.
What I Learned
1. Basic Syntax and Structure of JavaScript
Variables and Loops: I learned how to declare variables and use loops to iterate through a range of numbers.
Conditional Statements: I practiced using if, else if, and else statements to handle different conditions.
2. Modulus Operator
I discovered how the modulus operator (%) works to determine if a number is divisible by another number. This was crucial for checking if a number is a multiple of 3, 5, or both.
3. Console Output
I learned how to use console.log() to print output to the console, which is essential for debugging and displaying results.
4. Problem-Solving Skills
This project helped me develop my problem-solving skills by breaking down the problem into smaller, manageable parts and tackling each part step-by-step.
5. Code Efficiency
I learned the importance of writing efficient code. For example, checking for multiples of 15 (both 3 and 5) first to avoid redundant checks.
Code Explanation
Here’s a brief explanation of the code:
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
Loop: The for loop runs from 1 to 100.
Conditionals:
if (i % 15 === 0): Checks if i is divisible by both 3 and 5.
else if (i % 3 === 0): Checks if i is divisible by 3.
else if (i % 5 === 0): Checks if i is divisible by 5.
else: Prints the number if none of the above conditions are met.
Conclusion
Completing this FizzBuzz project has been a valuable learning experience. It has solidified my understanding of basic programming concepts and improved my confidence in writing JavaScript code. I look forward to tackling more complex projects in the future!
