function billboard(name, price = 30) {
  let n = Array.from(name);
  n = n.reduce();
  console.log(n);
}

billboard("Abishai Charalampos");

// let romanToInt = function (s) {
//   let I = 1;
//   let V = 5;
//   let X = 10;
//   let L = 50;
//   let C = 100;
//   let D = 500;
//   let M = 1000;

//   console.log(s);
// };
// romanToInt("LVIII");

// function cockroachSpeed(s) {
//   let cm = 27.77777778;
//   s = s * cm;
//   console.log(Math.floor(s));
// }
// cockroachSpeed(1.09);

// function grow(x) {
//   x = x.sort((a, b) => a - b);
//   let sum = 1;
//   for (let i = 0; i < x.length; i++) {
//     sum = sum * x[i];
//   }
//   console.log(sum);
// }

// grow([4, 1, 1, 1, 4]);

//   let arr = array.map((el) => -el);
//   if (array === []) {
//     console.log([]);
//   } else {
//     console.log(arr);
//   }
// }
// invert([]);

// function contamination(text, char) {
//   let t = Array.from(text);
//   t = text.length;
//   let con = char.repeat(t);
//   if (char === "") {
//     console.log("");
//   } else {
//     console.log(con);
//   }
// }
// contamination("afs", "s");

// function positiveSum(arr) {
//   let a = arr.filter((el) => el > 0);
//   a = a.reduce((a, b) => a + b);
//   console.log(a);
// }
// positiveSum([1, -2, 3, 4, 5]);

// const quarterOf = (month) => {
//   let q = Number(month);
//   if (q <= 3) {
//     console.log(1);
//   } else if (q <= 6) {
//     console.log(2);
//   } else if (q <= 9) {
//     console.log(3);
//   } else {
//     console.log(4);
//   }
// };
// quarterOf(12);

// function sumMix(x) {
//   let newArr = x.map(myFunction);
//   function myFunction(num) {
//     return Number(num);
//   }

//   newArr = newArr.reduce(myfunc);
//   function myfunc(total, num) {
//     return total + num;
//   }
//   console.log(newArr);
// }
// sumMix([9, 3, "7", "3"]);

// function sum(numbers) {
//   let newArr = numbers.map(myFunction);
//   function myFunction(num) {
//     return Number(num);
//   }
//   newArr = newArr.reduce(myfunc);
//   function myfunc(total, num) {
//     return total + num;
//   }
//   console.log(newArr);
// }
// sum([5, 6, 6]);

// function doubleChar(str) {
//   let sep = Array.from(str);
//   let newArr = sep.map(myFunction);

//   function myFunction(num) {
//     return num + num;
//   }
//   console.log(newArr.join(""));
// }
// doubleChar("Abcd");

// function mergeArrays(arr1, arr2) {
//   let sumArr = arr1.concat(arr2);
//   sumArr.sort((a, b) => a - b);
//   function removeDuplicate(sumArr) {
//     return sumArr.filter((item, index) => sumArr.indexOf(item) === index);
//   }
//   return removeDuplicate(sumArr);
// }

// mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);

// var replaceDots = function (str) {
//   console.log(str.replace(/\./g, "-"));
// };
// replaceDots("one.two.three");

// function position(letter) {
//   let alphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   alphabet = letter;
//   console.log("Position of alphabet:" + "" + letter.indexOf());
// }
// position("a");

// function maps(x) {
//   let array = [];
//   for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     array.push(element * 2);
//   }

//   console.log(array);
// }

// maps([1, 2, 3]);

// function squareDigits(num) {
//   let x = String(num);
//   x = Array.from(x);
//   x = x.map(
//     (myFunction = (r) => {
//       return r ** 2;
//     })
//   );
//   x = x.join("");
//   console.log(Number(x));
// }

// squareDigits(46);

// function problem(x) {
//   if ((x = "")) {
//     console.log("false");
//   } else {
//     console.log(x * 50 + 6);
//   }
// }
// problem(1);

// function solution(str) {
//   return str.reverse();
// }

// solution("alo");

// function nameShuffler(str) {
//   let a = str.split(` `);
//   console.log(a.reverse().join(` `));
// }

// nameShuffler("asdfa adsfasdf");

// function remove(string) {

// }

// remove("Hi!");

// function sunTwoSmallestNumbers(numbers) {
//   let sortNum = numbers.sort((a, b) => a - b))
//   return sortNum[0] + sortNum[1]
// }
// sunTwoSmallestNumbers([223, 31, 15, 67, 98]);

// function removeChar(num) {
//   let a =
// }
// removeChar("12345");

// function remainder(n, m) {
//   if (n <= 1) {
//     console.log(NaN);
//   } else if (m > n) {
//     console.log(m % n);
//   } else {
//     console.log(n % m);
//   }
// }
// remainder(-251, -830);

// function remainder(n, m) {
//   let remainder = n <= 1 ? NaN : m > n ? m % n : n % m;
// }
// remainder(13, 72);
