const binary = (decimal) => {
   binaryNum = []

   for (let i = 0; i < decimal.length; i++) {
      binaryNum.push(decimal % 2)

   }
}

function largestSwap(num) {
   let newNum = num.toString()
   let revNum = parseInt(newNum.slice(1) + newNum.slice(0, 1))
   return (num < revNum) ? "False" : "True"
}

// largestSwap(13)
// largestSwap(54)
// console.log(largestSwap(14)) //➞ false
// console.log(largestSwap(53)) //➞ true
// console.log(largestSwap(99)) //➞ true

function descendingOrder(n) {
   return parseInt(n.toString().split("").sort(function (a, b) {
      return b - a
   }).join(""))
}

// console.log(descendingOrder(843972))

function duplicateCount(text) {
   let notDupArr = []
   let dupArr = []
   const textArr = text.toLowerCase().split("")

   for (let i = 0; i < textArr.length; i++) {
      notDupArr.includes(textArr[i]) ? dupArr.push(textArr[i]) : notDupArr.push(textArr[i])
   }

   // remove duplicates -  using Set
   const dupCount = Array.from(new Set(dupArr))

   // remove duplicates -  using filter
   // const dupCount = dupArr.filter((item, index) => dupArr.indexOf(item) === index)

   // remove duplicates -  using reduce
   // const dupCount = dupArr.reduce((unique, item) =>{

   // })

   return dupCount.length
}

// console.log(duplicateCount("Indivisibilities"))
// console.log(duplicateCount("sillies"))

const solution = (number) => {
   let mulArr = []
   // create while loop counting down from "number" and add all multiples of 3 or 5 to mulArr
   n = number - 1;
   while (n > 0) {
      n % 3 === 0 || n % 5 === 0 ? mulArr.push(n) + n-- : n--
   }
   // add all numbers in mulArr
   return mulArr.reduce((total, acc) => total + acc)
}

// console.log(solution(10))

const digital_root = (n) => {
   let numArr = n.toString().split('')
   if (numArr.length < 2) {
      return n
   } else
      n = numArr.reduce((total, acc) => parseInt(total) + parseInt(acc))
   return digital_root(n)
}

// console.log(digital_root(942), "is the final answer")
// console.log(digital_root(132189), "is the final answer")
// digital_root(942)
// console.log(digital_root(16))

// really clean version of ^^^^
// function digital_root(n) {
//    return (n - 1) % 9 + 1;
// }

function isIsogram(str) {
   // convert str to lowercase and to an array:
   let strArr = str.toLowerCase().split('')
   for (let i = 0; i < strArr.length; i++) {

   }
}

const arrayDiff = (a, b) => {
   let diffs = []
   for (let i = 0; i < a.length; i++) {
      b.includes(a[i]) ? null : diffs.push(a[i])
   }
   return diffs
}

// const a = [1, 3, 1, 2, 3, 7, 6]
// const b = [3, 7]
// expect --> [1,1,2,6]

// console.log(arrayDiff(a,b),'is the answer')


const humanReadable = (seconds) => {
   return ('0' + Math.floor(seconds / 3600)).slice(-2) + ":" + ('0' + Math.floor(seconds % 3600 / 60)).slice(-2) + ":" + ('0' + (seconds % 3600 % 60)).slice(-2)
}

// let seconds= 8187
// console.log("hour:", Math.floor(seconds/3600))
// console.log("min:", Math.floor(seconds%3600/60))
// // console.log("sec:", Math.floor((seconds%3600)/3600))
// console.log("sec:", ((seconds%3600)%60))
// console.log("seconds:", seconds%)

// -->02:16:27

// console.log(humanReadable(7442))
// --> 01:
// console.log(humanReadable(63))


const vendorPrices = [".48", ".05", ".04", ".99"]

// for(let price of vendorPrices){
//   price="$"+price.padStart(4,0);
//   console.log(price);
// }

const naiveSearch = (long, short) => {
   let matches = 0;
   for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < short.length; j++) {
         if (long[i + j] !== short[j]) break;
         // check to see if you are at the last character of the short string
         if (j === short.length - 1) matches++
      }
   }
   return matches
}

// console.log(naiveSearch('lorie loled', 'lo' ))



// Sorting algorithms

// Valid Parentheses:

const toCamelCase = (str) => {
   // convert str to array, using "-" or "_" as separator (use regex)
   const strArr = str.split(/\-|_/)
   // loop through array, capitalizing the first letter of each entry besides the first (start i at 1)
   for (let i = 1; i <= strArr.length; i++) {
      console.log(strArr[i].charAt(0))
      // strArr[i].toUpperCase()
   }
   // join array back to string
   // return convertedStr
   return
}

// console.log(toCamelCase("the-stealth_warrior-is_not_the-best"))


function funWithAnagrams(text) {
   // Convert each string in array to its own sub-array, making a new array of arrays.
   const subArr = text.map(x => x.split(""))
   // console.log(text)
   // console.log(subArr[0].length)
   for (let i = 0; i < subArr.length; i++) {
      // console.log("i =",i,subArr[i].length)
      // console.log(subArr[i+1])
      if (subArr[i].length === 8) {
         // if (subArr[i].length == (subArr[i + 1]).length) {
         console.log(subArr[i], text[i], "even")
      }
   }

   // Compare length of sub-arrays at index i and i+1
   // If length is equal, compare each letter in sub-array (.includes()?). Else, break.
   // If there is a letter in one sub-array that isn't in the other, break. No need to keep looping.
   // If they match, then they are anagrams and second string should be removed from the original array.
   // Return original array, which has now had anagrams removed
}

const text = ["code", "aaagmnrs", "anagrams", "doce"]


// funWithAnagrams(text)
// console.log(funWithAnagrams(text))

class Student {
   constructor(firstName, lastName, year) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.grade = year;
   }
}
let joe = new Student("Joe", "Nosefgf", 2)


// let s = "racecar"
// // class Solution {
// function solve(s) {
//    //         console.log(s)
//    let sArr = s.split("");
//    // console.log("test:",sArr.reverse().join(""))
//    if (sArr.reverse().join("") === s) return true;
//    return false;
// }
// }

// console.log(solve(s))
// let n =11;
function solve(n) {
   let collatz = [n]
   while (n !== 1) {
      if (n % 2 === 0) {
         n = n / 2;
      } else {
         n = 3 * n + 1;
      }
      collatz.push(n)
   }
   return collatz.length
}
// console.log(solve(11))

// function solve(nums) {
//    let ns =nums.sort(function(a,b){return a-b});
//    console.log(ns)
//    let dif=0,temp;
//    for(let i = 0;i<ns.length-1;i++){
//       temp = ns[i+1]-ns[i]
//       // console.log('dif:',dif,'temp:',temp)
//       dif = Math.max(dif,temp)
//    }
//    return dif;
// }
// let nums = [4, 1, 2, 8, 9, 10]
// console.log(solve(nums))

// function solve(s) {
//    let stringHash = {};
//    for (let i = 0; i < s.length; i++) {
//       if (!stringHash[s[i]]) {
//          stringHash[s[i]] = 1;
//       }
//    }
//    if (Object.keys(stringHash).length === s.length) return true;
//    return false;
// }
// const s = "abcee" // true
// console.log(solve(s))

function solve(intervals, point) {
   let count = 0;
   // loop through intervals. if point is greater than interval i and smaller than interval i+1, increment count
   for (let i = 0; i < intervals.length; i++) {
      console.log('first', intervals[i][0])
      console.log('second', intervals[i][1])
      if (intervals[i][0] <= point && intervals[i][1] >= point) {
         console.log('increment!')
         count++;
      }
   }
   return count;
}
const s = [
   [1, 5],
   [3, 9],
   [4, 8],
   [10, 13]
]
// console.log('solution:', solve(s, 4))





class LLNode {
   constructor(val, next = null) {
      this.val = val
      this.next = next
   }
}


function solve(a, b) {
   let mergedArr = [];
   let counterA = 0;
   let counterB = 0;
   if (a.length > b.length) {

   }

   // loop through list A - this will only run as many times as A has entries
   for (let i = 0; i < a.length; i++) {
      // compare the first item in each list & push the larger of each index
      mergedArr.push(Math.min(a[counterA], b[counterB]))
      // if the item from a is bigger, increment counterA
      if (a[counterA] < b[counterB]) {
         // console.log('a:', a[counterA], "b: ", b[counterB])
         counterA++;
         console.log(counterA, counterB)
         // otherwise, increment counterB
      } else console.log("B increments"), counterB++;
      // if either 
      // if a is shorter than b, the remaining values in B need to be added to Array
      // if a is longer than b, the remaining values in A need to be added to Array

   }

   return mergedArr;
}
let a = [5, 10, 15];
let b = [3, 6, 9, 13, 18];
let c = a.concat(b).sort(function (a, b) {
   return a - b
})
// console.log(c)
// console.log(solve(a,b))

function solve(n) {
   let count = 0;
   const nConverted = n.toString(2)
   for (let i in nConverted) {
      if (nConverted[i] == 1) count++;
   }
   return count;
}
// console.log((4).toString(2))
// console.log(solve(4))

let nodes = [1, 0, 0]
// function solve(nodes) {
// return (parseInt(nodes.join(""),2))
// }
// console.log(solve(nodes))

// let s2 = "hga92bcbXagh"
let s2 = "hg3ag74g"

function solve(s2) {
   let sFiltered = s2.split("").filter(val => {
      return /[a-z]/.test(val);
   })
   console.log(sFiltered)
   let start = 0;
   let end = sFiltered.length - 1;
   const mid = Math.floor(sFiltered.length / 2);
   console.log('mid:', mid)
   while (start <= end) {
      console.log(start, end)

      console.log(sFiltered[start], sFiltered[end])
      if (sFiltered[start] !== sFiltered[end]) {
         console.log(sFiltered[start], "doesn't match", sFiltered[end])
         return false;
      }
      start++;
      end--;
   }
   console.log('end')
   return true;
}
// console.log(solve(s2))
const num = 123

function solve(num) {
   let sum = 0;
   while (num > 0) {
      console.log('sum', sum, 'num', num)
      sum += num % 10;
      num = Math.trunc(num / 10)
   }
   return sum;
}
// console.log(Math.floor(Math.log10(5400)))
// console.log(Math.trunc(278/10))
// console.log('solution:',solve(num))
let p = "aaaaaabbbccccaaaaddf"

function solve(p) {
   let newArr = [];
   let sArr = p.split("")
   let noDupes = sArr.filter((a, index) => {
      if (a !== sArr[index + 1]) newArr.push(a)
   })
   return newArr.join("");
}
// console.log(solve(p))

// someone else's solution to this^^^:
function solve(q) {
   return [...q].filter((c, i, a) => a[i - 1] !== c).join('')
}
let q = "aaaaaaabbbbbbbcccccccaaaadddddd"
// console.log(q)

function solve(num) {
   let sum = 0;
   while (num > 0) {
      // console.log('sum', sum, 'num', num)
      sum += num % 10;
      num = Math.trunc(num / 10)
      console.log('sum', sum, 'num', num)
   }
   // return sum;
   // }
   num = sum;
   // singleDig(num);
   return num;
}
// console.log(solve(8835))

function centuryFromYear(year) {
   if (year === 0) return 0;
   if (year < 100) return 1;
   // if (year < 1000 && year % 100 == 0) return year / 100;
   // if (year < 1000 && year % 100 == 0) return parseInt(year.toString().slice(0, 1))
   // if (year < 1000) return Math.floor(year / 100) + 1;
   // if (year < 1000) return parseInt(year.toString().slice(0, 1) + 1)
   if (year % 100 == 0) return year / 100;
   else return Math.floor(year / 100) + 1;
}
// console.log(centuryFromYear(8))

function makeArrayConsecutive2(statues) {
   let sortArr = statues.sort(function (a, b) {
      return a - b
   })
   // console.log(sortArr)
   // console.log(sortArr[sortArr.length-1] - sortArr[0])
   // sort array, subtract first from last element, then subtract that from the length of array
   return (sortArr[sortArr.length - 1] - sortArr[0]) - (statues.length - 1)
}
let statues = [6, 2, 3, 8]
// console.log(statues.at(-1))
// console.log(makeArrayConsecutive2(statues))

function almostIncreasingSequence(sequence) {
   let count = 0;

   //  if index 1 is not one greater than index 0, and if index 2 is one greater than index 0, increase the count

   for (let i = 0; i < sequence.length - 2; i++) {
      if (sequence[i + 1] - sequence[i] !== 1) {

         if (sequence[i + 2] - sequence[i] == 1) {
            console.log('counted', sequence[i], 'at index ', i)
            count++
         }
      }
   }
   // console.log('final count:',count)
   if (count < 2) return true;
   return false;
}

function almostIncreasingSequence(sequence) {
   let count = 0;
   for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i - 1]) count++;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) count++;
   }

   return count < 2;
}

let inputArray = ["aba",
   "aa",
   "ad",
   "vcd",
   "aba"
]

function allLongestStrings(inputArray) {
   let longArr = [];
   let sortArr = inputArray.sort(function (a, b) {
      return b.length - a.length
   })
   let i = 0;
   if (inputArray < 2) return inputArray;
   while (sortArr[i].length == sortArr[0].length) {
      longArr.push(sortArr[i])
      i++;
   }
   return longArr;
}
// console.log(allLongestStrings(inputArray))

function commonCharacterCount(s1, s2) {
   let count = 0;
   let s1Arr = s1.split(""),
      s2Arr = s2.split("");
   for (let i = 0; i < s1Arr.length; i++) {
      for (let j = 0; j < s2Arr.length; j++) {
         if (s1Arr[i] == s2Arr[j]) s2Arr.splice(j, 1)
         count++;
      }

   }
   // turn both strings into arrays and sort them. loop through s1, comparing it letters in s2. remove letter from s2 and increment count
   return count;
}

function isLucky(n) {
   // if the sum of first half of n is equal to sum of second half of n, return true
   // convert to string to figure out length
   // splice into two substrings based half the length
   let numStr = n.toString();
   let half = numStr.length / 2;
   let first = numStr.slice(0, half);
   let second = numStr.slice(half, numStr.length)
   console.log(first, second)
   return false;
}
// console.log(isLucky(1230))
// console.log(isLucky(239017))

// Write a function diff(arrA, arrB) that accepts two arrays and returns a new array that contains all values that are not contained in both input arrays. The order of numbers in the result array does not matter.

let arrA = [1, 2, 3, 4, 3, 4, 4]
let arrB = [3, 4, 5, 6, 8, 8]

const diff = (arrA, arrB) => {
   let index = 0;
   // removes all duplicates
   arrA = [...new Set(arrA)]
   arrB = [...new Set(arrB)]
   for (let i = 0; i < arrA.length; i++) {
      if (arrB.includes(arrA[i])) {
         index = arrB.indexOf(arrA[i])
         arrB.splice(index, index + 2);
         arrA.splice(i, i + 1);
      }
   }
   return arrA.concat(arrB);
}

// console.log(diff(arrA,arrB))

// write a function to determine if the sum of the first half of a number (even amt of digits) is equal to the sum of the second half of the digits
function isLucky(num) {
   // if the sum of first half of n is equal to sum of second half of n, return true
   let numStr = num.toString();
   let half = numStr.length / 2;
   let first = numStr.slice(0, half).split("").reduce(function (a, b) {
         return parseInt(a) + parseInt(b)
      }),
      second = numStr.slice(half, numStr.length).split("").reduce(function (a, b) {
         return parseInt(a) + parseInt(b)
      });
   // console.log(first, second)
   if (first === second) return true;
   return false;
}
// console.log(isLucky(1230))
// console.log(isLucky(239017))

// sort all elements that aren't -1 in ascending order, leaving the -1s in place;
function sortByHeight(arC) {
   // create two arrays, one of the indexes where -1 exists, and one for all other entries that will be sorted
   let treeIndex = [],
      nonTrees = [],
      sortedByHeight = [];
   for (let i = 0; i < arC.length; i++) {
      arC[i] == -1 ? treeIndex.push(i) : nonTrees.push(arC[i])
   }
   nonTrees.sort(function (a, b) {
      return b - a
   })
   for (let i = 0; i < arC.length; i++) {
      treeIndex.includes(i) ? sortedByHeight.push(-1) : sortedByHeight.push(nonTrees.pop())
   }
   return sortedByHeight;
}

let arC = [-1, 150, 190, 170, -1, -1, 160, 180] //, the output should be = [-1, 150, 160, 170, -1, -1, 180, 190].

// console.log(sortByHeight(arC))
// someone else's solution:
function sortByHeight(a) {
   var s = a.filter(h => h > 0).sort((a, b) => a - b)
   return a.map(p => {
      if (p !== -1) {
         return s.shift();
      }

      return -1;
   })
}
// Given a positive integer n, sum all of its digits to get a new number. Repeat this operation until the new number is less than 10 and return it.
function solve(numb) {
   while (numb > 9) {
      numb = numb.toString().split("").reduce(function (a, b) {
         return parseInt(a) + parseInt(b)
      })
   }
   return numb;
}

// console.log(solve(8835))

// Given an integer square (n by n) matrix, return its transpose. A transpose of a matrix switches the row and column indices. That is, for every r and c, matrix[r][c] = matrix[c][r].

let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
] //expected output: [   [1, 4, 7],   [2, 5, 8],   [3, 6, 9]]

function solve(matrix) {
   let transpose = [];
   for (let i = 0; i < matrix.length; i++) {
      transpose.push([])
      for (let j = 0; j < matrix[i].length; j++) {
         transpose[i].push(matrix[j][i])
      }
   }
   return transpose;
}
// console.log('solution:',solve(matrix))

// Given a two-dimensional integer list intervals of the form [start, end] representing intervals (inclusive), return their intersection, that is, the interval that lies within all of the given intervals.

intervals = [
   [1, 100],
   [10, 50],
   [15, 65]
] // expected output: [15, 50]
function solve(intervals) {
   let first = 0,
      second = Infinity;
   for (i in intervals) {
      first = Math.max(first, intervals[i][0])
      second = Math.min(second, intervals[i][1])
   }
   return [first, second]
}
// console.log(solve(intervals))

// Given two strings s0 and s1, return whether they are anagrams of each other.
// create a hash table of each string's character frequency and compare them

// function solve(s0,s1){
//    let s0Obj = {}, s1Obj = {};
//    for(i in s0){
//       !s0Obj[i]?s0Obj[s0[i]]=1:s0Obj[s0[i]]++
//    }
//    for(i in s1){
//       !s1Obj[i]?s1Obj[s1[i]]=1:s1Obj[s1[i]]++
//    }
//    for(i in s0Obj){
//       if(s0Obj[i] !== s1Obj[i]){
//          return false;
//       }
//    }
//    return true;
// }
let s0 = "silents",
   s1 = "listens";

function solve(s0, s1) {
   if (s0.length !== s1.length) return false;
   // let s0arr = s0.split("").sort(), s1arr = s1.split("").sort();
   // console.log(s0arr, s1arr)   
   // for (i in s0arr) {
   //    if (s0arr[i] !== s1arr[i]) return false;
   // }

   let s0Obj = {}
   // creates hash map of str0
   for (let str of s0) {
      s0Obj[s0[str]] = (s0[str] || 0) + 1
   }
   // compares each element of s1 with the key of s0 hash. decrements if a match is found
   for (let str of s1) {
      if (s0Obj[str]) {
         s0Obj[str]--
      } else {
         return false;
      }
   }

   return true;
}
// console.log(solve(s0, s1))

// 1. Write a method that takes in two integer arrays and returns a list of integers that are in the first list and not in the second list.
let arr1 = [1, 2, 3, 4, 5],
   arr2 = [2, 3, 1, 0, 5] //expected result: [4]

const compareArr = (arr1, arr2) => {
   let onlyFirst = [],
      arr2Obj = {};
   for (i in arr2) {
      !arr2Obj[arr2[i]] ? arr2Obj[arr2[i]] = 1 : arr2Obj[arr2[i]]++
   }
   for (i in arr1) {
      if (!arr2Obj[i]) {
         onlyFirst.push(i)
      }
   }
   return onlyFirst;
}

// write a function that returns the second largest integer in an array. Can include negative nums. Can't use .sort()
let arr = [2, 7, 25, 8, 4, 2212, 5, 3, 34] //expect:  34
const secondBiggest = (arr) => {
   let max = 0,
      second = 0,
      temp = 0;
   //   loop through each num
   for (i in arr) {
      temp = Math.min(max, arr[i])
      max = Math.max(max, arr[i])
      if (arr[i] > second && max !== arr[i]) {
         second = Math.max(temp, arr[i])
      }
   }
   return second;
}
let nums = [3, 3]

function solve(nums) {
   let max = 1,
      second = 1,
      temp = 1;
   for (i in nums) {
      temp = Math.min(max, nums[i]);
      max = Math.max(max, nums[i]);
      if (nums[i] > second && nums[i] > temp && temp !== max) {
         second = Math.min(temp, nums[i])
      }
   }
   console.log(max, second)
   if (max > second * 2) return true;
   return false;
}

function solve(nums) {
   if (nums.length < 1) return 0;
   let numsObj = {};
   for (let i in nums) {
      !numsObj[nums[i]] ? numsObj[nums[i]] = 1 : numsObj[nums[i]]++
   }
   let numsFreq = Object.values(numsObj).sort(function (a, b) {
      return b - a
   })
   return numsFreq[0]
}
// Given a list of integers sorted in ascending order nums, square the elements and give the output in sorted order.
let numms = [-9, -2, 0, 2, 3] // expected output: [0, 4, 4, 9, 81]
function solve(numms) {
   return numms.map(i => i * i).sort((a, b) => a - b)
}
// console.log(solve(numms))

//Given a list of integers prices representing prices of cars for sale, and a budget k, return the maximum number of cars you can buy.
let prices = [90, 30, 20, 40, 90],
   k = 95 // expected output: 3
function solve(prices, k) {
   let count = 0,
      total = 0;
   // sort prices, then loop through array, adding the price and incrementing count until total exceeds k
   prices = prices.sort((a, b) => a - b)
   for (i in prices) {
      total += prices[i]
      if (total <= k) {
         count++;
      }
   }
   return count;
}
// console.log(solve(prices, k))

// return the index of every peak in an array, ie: larger than its neighbors
let numss = [1, 2, 3, 2, 4] // expected output: [2,4]
function solve(numss) {
   let peaks = [];
   // loop through nums. if nums[i] is greater than neighbors, add i to peaks
   for (let i = 0; i < numss.length; i++) {
      if ((i === 0 && numss[i] > numss[i + 1]) ||
         (numss[i] > numss[i - 1] && numss[i] > numss[i + 1]) ||
         (i === numss.length - 1 && numss[i] > numss[i - 1]))
         peaks.push(i)
   }
   return peaks;
}

// find the intersection of two arrays:
const arrr1 = [1, 4, 5, 7];
const arrr2 = [2, 4, 6, 7];
const intersection = [...new Set(arrr1)].filter(val => arrr2.includes(val))
// console.log(intersection)


// You've got an integer n representing a chessboard of size n x n. Return the number of ways you can place n rooks, such that no two rooks attack each other.

// Two ways are considered different if in one of the ways, some cell of the chessboard is occupied, and in the other way, the cell is not occupied.
function solve(n) {
   let count = 1;
   while (n > 0) {
      count *= n;
      n = n - 1;
   }
   return count;
}
// Given an integer n greater than or equal to 0, return whether it is a power of two.
function solve(n) {
   return Math.log2(n) % 1 === 0
}
// console.log(console.log(solve(16)))

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
function alternatingSums(a) {
   let evens = 0,
      odds = 0;
   for (let i in a) {
      if (i % 2 === 0) {
         evens += a[i];
      } else odds += a[i]
   }
   return [evens, odds];
}
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
function addBorder(picture) {
   // create new array; first and last items are asteriks two longer than picture.length. for each element in picture, add one asterik before and after each string; concat firstLast, updated picture, firstLast
   let firstLast = ['*'.repeat(picture[0].length + 2)]
   for (let i in picture) {
      picture[i] = "*" + picture[i] + "*"
   }
   return firstLast.concat(picture, firstLast);
}

// You are given a two-dimensional integer matrix matrix containing 1s and 0s. For each row in matrix, reverse the row. Then, flip each value in the matrix such that any 1 becomes 0 and any 0 becomes 1
function solve(matrix) {
   for (let i in matrix) {
      matrix[i] = matrix[i].reverse()
      for (let j in matrix[i]) {
         matrix[i][j] === 1 ? matrix[i][j] = 0 : matrix[i][j] = 1;
      }
   }

   return matrix;
}
// Given a list of integers nums, return whether you can rearrange the order of nums such that the difference between every consecutive two numbers is the same.
function solve(nums) {
   nums = nums.sort((a, b) => a - b)
   // console.log('nums',nums, nums[0] )
   let temp = 0;
   let diff = nums[1] - nums[0]
   for (let i = 0; i < nums.length - 1; i++) {
      temp = nums[i + 1] - nums[i]
      console.log(diff)
      if (temp !== diff) return false;
   }
   return true;
}

// You are given a string s where each character is "L" meaning you moved one unit left, "R" meaning you moved one unit right, or "?" meaning either "L" or "R".
// Given you are at position 0, return the maximum possible distance you could be from 0 by replacing "?" with "L" or "R".
let g = "LLRRR??"

function solve(g) {
   let distance = 0;
   let quest = 0;
   for (let i in g) {
      if (g[i] === "L") distance--;
      if (g[i] === "R") distance++;
      if (g[i] === "?") quest++;
   }
   return Math.abs(distance) + quest;
}
// console.log(solve(g))

// Given a list of integers nums, sort the array such that:
// All even numbers are sorted in increasing order
// All odd numbers are sorted in decreasing order
// The relative positions of the even and odd numbers remain the same
let ums = [8, 13, 11, 90, -5, 4];

function solve(ums) {
   // need to loop through nums. keep track of order of odds/evens - populate orderArr. add each number to either odds or evens array and remove from nums. sort odds and evens. then loop through orderArr, pulling from either odds or evens accordingly and adding back to nums
   let orderArr = [],
      evens = [],
      odds = [],
      sorted = [];
   for (let i in ums) {
      if (ums[i] % 2 === 0) {
         orderArr.push('e')
         evens.push(ums[i])
      } else orderArr.push('o'), odds.push(ums[i])
   }
   evens = evens.sort((a, b) => b - a)
   odds = odds.sort((a, b) => a - b)
   for (let i in orderArr) {
      if (orderArr[i] === 'e') sorted.push(evens.pop())
      else sorted.push(odds.pop())
   }
   return sorted;
}
// console.log(solve(ums))

// Someone else's cleaner solution:
// // function solve(nums) {
// //    let odd = nums.filter(x => x % 2 !== 0).sort((a, b) => b - a);
// //    let even = nums.filter(x => x % 2 === 0).sort((a, b) => a - b);
// //    return nums.map(num => (num % 2 === 0) ? even.shift() : odd.shift());
// // }

// Given an integer n, return a list with each number from 1 to n, except if it's a multiple of 3 or has a 3, 6, or 9 in the number, it should be the string "clap".

// Note: return the number as a string.

function solve(n) {
   let res = [];
   for (let i = 1; i < n + 1; i++) {
      if (i % 3 === 0 || i.toString().match(/3|6|9/)) res.push("clap")
      else res.push(i.toString())
   }
   return res;
}
// Given a string s containing balanced parentheses "(" and ")", split them into the maximum number of balanced groups.
function solve(s) {
   let open = 0,
      res = [],
      temp = [];
   for (let i in s) {
      if (s[i] === "(") open++;
      if (s[i] === ")") open--;
      temp.push(s[i])
      if (open === 0) {
         res.push(temp.join(""))
         temp = []
      }
   }
   return res;
}
// You are given an integer n consisting of digits 1, 2, and 3 and you can flip one digit to a 3. Return the maximum number you can make.
let n = 123

function solve(n) {
   n = n.toString().split("")
   for (let i in n) {
      if (n[i] < 3) {
         n[i] = 3
         break
      }
   }
   return parseInt(n.join(""));
}
// console.log(solve(n))

// Given a string s, return its run-length encoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters.
let h = "aaaabbbccdaa" // Expected output "4a3b2c1d2a"

function solve(h) {
   let res = [],
      count = 1;
   for (let i = 0; i < h.length; i++) {
      if (h[i] === h[i + 1]) {
         count++;
      } else {
         res.push(count, h[i]);
         count = 1;
      }
   }
   return res.join("");
}
// console.log(solve(h))

// You are given a string d of "a" and "b"s. "a"s can stay "a" or turn into "b", but "b"s can't change.
// Return the number of unique strings that can be made.

// const solve = (d)=>{
//    return 2 ** d.match(/a/g).length;
// }
// Given a lowercase alphabet string s, return the index of the first recurring character in it. If there are no recurring characters, return -1.

function solve(s) {
   let visited = [];
   for (let i = 0; i < s.length; i++) {
      if (visited.includes(s[i])) return i;
      visited.push(s[i])
   }
   return -1;
}

// Given a lowercase alphabet string s, return the length of the longest substring with same characters.
function solve(s) {
   let count = 0,
      res = 0;
   // loop through s, incrementing count as long as each character is the same. once it's different, res = the larger of res and count
   if (s.length === 1) return 1;
   for (let i = 0; i < s.length; i++) {
      count++;
      if (s[i] === s[i + 1]) {
         console.log('nope')
      } else {
         res = Math.max(count, res);
         count = 0;
      }
   }
   return res;
}
// console.log("basdfsadfsadf")

let day1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
// To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:
const increaseCount = (day1) => {
   let count = 0;

   for (let i = 1; i < day1.length; i++) {
      if (day1[i - 1] < day1[i]) count++
   }
   return count;
}

console.log(increaseCount(day1))

// Write a function that rotates a list of numbers to the left by k elements. Numbers should wrap around.
function solve(nums, k) {
      return (nums.slice(k).concat(nums.slice(0, k)))
   }