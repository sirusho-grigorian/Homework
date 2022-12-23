// 1. Given an array. Write a recursive function that removes the first
//    element and returns the given array.

function RemoveFirstElement(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr[i] = arr[i + 1];
    RemoveFirstElement(arr[i]);
  }
  return newArr;
}

RemoveFirstElement(arr);

// 2. Given an array of nested arrays. Write a recursive function that
//    flattens it. (Hint create function that concats arrays).

function ConcatedArrays(arr) {
  let flattenedArray = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(ConcatedArrays(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

ConcatedArrays(arr);

// 3. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find
//    the sum of digits of that number. Repeat that process if needed and return the result.

function SumOfDigits(num) {
  let sum = 0;
  let strNum = num.toString();

  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  let strSum = sum.toString();
  if (sum.toString().length > 1) {
    let result = 0;
    for (let j = 0; j < strSum.length; j++) {
      result += +strSum[j];
    }
    return result;
  }
  return sum;
}

SumOfDigits(29);

// 4. Given the list of the following readers. Output the books sorted by the percent in descending order which readStatus is true
//    and add ‘%’ char in the end for percent value.

const array = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Night", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

array
  .filter((item) => item.readStatus === true)
  .sort((a, b) => b.percent - a.percent)
  .map((el) => ({
    book: el.book,
    readStatus: el.readStatus,
    percent: el.percent + "%",
  }));
