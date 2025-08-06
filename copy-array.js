const numbers = [12, 32, 42, 11, 3, 6, 19];
const copy1 = numbers;
copy1[1] = 100;
// console.log(numbers);
// console.log(copy1);
//ফকিরা মার্কা অ্যারে কপি করা নিয়ম;
const poorArray = [];
for (const num of numbers) {
  poorArray.push(num);
}
poorArray[2] = 500;
// console.log(poorArray);

// easy copy
const easyArray = [...poorArray];
easyArray.push(99, 33);
console.log(easyArray);
