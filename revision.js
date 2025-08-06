let sum = 0;
// for (let i = 1; i < 10; i++) {
//   sum = sum + i;

//   //   console.log(i, sum);
// }
// console.log(sum);
let i = 1;
while (i < 10) {
  sum = sum + i;
  i++;
}
// console.log(sum);

// reverse number in array with for of loop;
const numbers = [23, 43, 54, 75, 786, 54, 4, 34, 31];
// console.log(numbers.reverse());
// let reverse = [];
// for (const number of numbers) {
//   reverse.unshift(number);
// }
// console.log(reverse);

const reverseArray = [];
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  reverseArray.unshift(number);
}
console.log(reverseArray);
