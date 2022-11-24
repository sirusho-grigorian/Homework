// 1. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number.
//    If the last digit of the inserted number is 0, number remains the same.

function bringLastDigitToTheBeginning(number) {
  let newNumber = "";

  if (number < 0) {
    console.log("Give a positive number!!!");
  } else {
    let lastDigit = number % 10;
    if (lastDigit === 0 || (number < 10 && number > 0)) {
      newNumber += number;
    } else {
      const strLastDigit = lastDigit.toString();
      let result = Math.floor(number / 10);
      newNumber += strLastDigit + result;
    }

    return +newNumber;
  }
}

console.log(bringLastDigitToTheBeginning(256));

// 2. Given three numbers. Sort them by the ascending order.

let firstNumber = -23;
let secondNumber = -456;
let thirdNumber = 0;

if (firstNumber > secondNumber) {
  const wrapper = firstNumber;
  firstNumber = secondNumber;
  secondNumber = wrapper;
}

if (firstNumber > thirdNumber) {
  const wrapper = firstNumber;
  firstNumber = thirdNumber;
  thirdNumber = wrapper;
}

if (secondNumber > thirdNumber) {
  const wrapper = b;
  secondNumber = thirdNumber;
  thirdNumber = wrapper;
}

console.log(firstNumber, secondNumber, thirdNumber);

// 3. Given the following code rewrite it using only two if operators. (Hint: use logicaloperators).

var n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
  i += 1;
}

if (n % 3 === 0 && n % 10 === 1) {
  j += 1;
}

// 4. Write a program which will compute the area of a rectangular or a triangle after prompting the user to type the name
//    of the figure name. Also check that entered numbers are positive. For the triangle entered numbers are height and and base.

function findAreaofTheGivenFigure(figure, a, b) {
  let result = `Please enter only positives`;

  if (a > 0 && b > 0) {
    if (figure === "triangle") {
      result = `Area of the triangle is ${(a * b) / 2}`;
    } else if (figure === "rectangular") {
      result = `Area of the rectangular is ${a * b}`;
    } else {
      result = `Unknown figure name`;
    }
  }

  return result;
}

console.log(findAreaofTheGivenFigure("triangle", 8, 9));

// 5. Given an object. Invert it (keys become values and values become keys). If there is more than key
//    for that given value create an array.

function invertKeysAndValuesOfObject(object) {
  let newObj = {};
  let newArr = [];
  const littleArr = [];

  for (let key in object) {
    newArr.push(object[key]);
    for (let i = 0; i <= newArr.length; i++) {
      for (let j = 0; j <= newArr.length; j++) {
        if (i !== j) {
          if (newArr[i] === newArr[j]) {
            littleArr.push(newArr[i]);
          }
        }
      }
    }
    newObj[object[key]] = key;
  }

  return newObj;
}

console.log(
  invertKeysAndValuesOfObject({
    a: "1",
    b: "2",
  })
);
