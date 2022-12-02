// 1. Given two objects. Write a function that performs shallow compare.

function shallowCompare(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

shallowCompare({ a: "1" }, { a: "1" });

// 2. Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word")
//    is a word or phrase without a repeating letter.

function isIsogram(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return false;
      }
    }
  }
  return true;
}

isIsogram("uncopyrightable");

// 3. Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,
//    5, 8 …, ak = ak-1 + ak-2)

function findFibonacciNumber(num) {
  let prev = 1;
  let prePrev = 0;
  let nextNumber = 0;
  let arr = [];

  if (num === 0) {
    return 0;
  } else if (num > 0) {
    for (let i = 1; i <= num; i++) {
      arr.push(prev);

      nextNumber = prev + prePrev;
      prePrev = prev;
      prev = nextNumber;
    }
    return arr[arr.length - 1];
  } else {
    return "Number should be >= 0";
  }
}

findFibonacciNumber(10);

// 4. Insert a number. Calculate product and sum of the digits of the number. If product is
//    divisible by the sum, print the quotient, otherwise print the remainder.

function calculation(num) {
  let strNum = num.toString();
  let sum = 0;
  let product = 1;

  for (let i = 0; i <= strNum.length - 1; i++) {
    sum += +strNum[i];
    product *= +strNum[i];
  }
  let result = product % sum;

  if (num === 0) {
    return `Cannot calculate`;
  } else if (result === 0) {
    return `Quotient is ${product / sum}`;
  } else {
    return `Remainder is ${result}`;
  }
}

calculation(1233);

// 5. Write a program to print X star pattern series.

function patternSeries(count) {
  let result = "";

  for (let i = 1; i < count; i++) {
    for (let j = 2; j < count; j++) {
      if (j === i || j === count - i + 1) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }

  return result;
}

console.log(patternSeries(15));
