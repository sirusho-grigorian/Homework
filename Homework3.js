// 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
//    where sorting order is violated.

function findViolatedNumberIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(i) < arr[i]) {
      return arr.indexOf(i);
    }
  }
}

findViolatedNumberIndex([2, 12, 15, 48, 64]);

//2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
//   Find sum of each row and print them as an array

function sumOfRows(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    newArr.push(sum);
  }
  return newArr;
}

sumOfRows([
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
]);

// 3. Given an array of integers. Write a function that return new array from first array,
//    where removed even numbers, and odd numbers was multiplied with new array length.

function multiplicationOfOddNumbers(arr) {
  let newArr = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    result.push(newArr[j] * newArr.length);
  }
  return result;
}

multiplicationOfOddNumbers([5, 4, 78, 0, -3, 7]);

// 4. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
//    elements starting from a to b spaced by step.

function arrayFromSpecifiedStep(a, b, step) {
  let arr = [];

  if (a <= b) {
    for (let i = a; i <= b; i += step) {
      arr.push(i);
    }
    return arr;
  }

  return `${a} should be less than equal to ${b}`;
}

arrayFromSpecifiedStep(10, 100, 20);

// 5. Given an array of numbers. Print frequency of each unique number. (Frequency is the
//    count of particular element divided by the count of all elements)

let arr = [1, 1, 2, 2, 3];

const frequencyOfUniqueNumber = arr.filter((el, index) => {
  if (arr.indexOf(el) === index) {
    return el;
  }
});

frequencyOfUniqueNumber;
