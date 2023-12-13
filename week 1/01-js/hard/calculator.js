/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result=0;
  }
  calculate(str){
    str=str.trim();

    let ans=eval(str);
    // console.log(ans,);
    ans=parseFloat(ans);
    // console.log(ans);
    if(ans==NaN  || ans==Infinity)
      throw new Error("Not a number");
    this.result=ans;

  }


  add(value){
    this.result+=value;
  }
  subtract(value){
    this.result-=value;
  }
  multiply(value){
    this.result*=value;
  }
  divide(value){
    if(value!=0)
    this.result/=value;
    else
    {
      throw new Error("Not possible");
    }
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
}

module.exports = Calculator;

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   add(number) {
//     this.result += number;
//   }

//   subtract(number) {
//     this.result -= number;
//   }

//   multiply(number) {
//     this.result *= number;
//   }

//   divide(number) {
//     if (number === 0) {
//       throw new Error('Cannot divide by zero');
//     }
//     this.result /= number;
//   }

//   clear() {
//     this.result = 0;
//   }

//   getResult() {
//     return this.result;
//   }

//   cleanString(expression) {
//     return expression.replace(/\s/g, '');
//   }

//   containsOtherCharacters(str) {
//     const pattern = /[^+\-/*\d()]/;
//     return pattern.test(str);
//   }

//   calculate(expression) {
//     expression = this.cleanString(expression);

//     if (this.containsOtherCharacters(expression)) {
//       throw new Error('Invalid Input');
//     }

//     const tokens = expression.match(/(\d+|\+|\-|\*|\/|\(|\))/g);

//     const operators = [];
//     const operands = [];

//     for (let token of tokens) {
//       if (!isNaN(parseFloat(token))) {
//         operands.push(parseFloat(token));
//       } else if (token === '(') {
//         operators.push(token);
//       } else if (token === ')') {
//         while (operators.length !== 0 && operators[operators.length - 1] !== '(') {
//           this.performOperation(operators.pop(), operands);
//         }
//         operators.pop();
//       } else {
//         while (
//           operators.length !== 0 &&
//           this.precedence(operators[operators.length - 1]) >= this.precedence(token)
//         ) {
//           this.performOperation(operators.pop(), operands);
//         }
//         operators.push(token);
//       }
//     }

//     while (operators.length !== 0) {
//       this.performOperation(operators.pop(), operands);
//     }

//     this.result = operands[0];
//   }

//   precedence(operator) {
//     if (operator === '+' || operator === '-') {
//       return 1;
//     } else if (operator === '*' || operator === '/') {
//       return 2;
//     }
//     return 0;
//   }

//   performOperation(operator, operands) {
//     const num2 = operands.pop();
//     const num1 = operands.pop();

//     switch (operator) {
//       case '+':
//         operands.push(num1 + num2);
//         break;
//       case '-':
//         operands.push(num1 - num2);
//         break;
//       case '*':
//         operands.push(num1 * num2);
//         break;
//       case '/':
//         operands.push(num1 / num2);
//         break;
//       default:
//         break;
//     }
//   }
// }

// module.exports = Calculator;

// const calculator = new Calculator();
