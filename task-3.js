// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// Output:
// 'TomTimTinTik'

const friends = ["Tom", "Tim", "Tin", "Tik"];
// simple system with join()
// const sliceFriends = friends.join("");
let allFriend = "";
for (const friend of friends) {
  //   console.log(friend);
  allFriend = allFriend + friend;
}
console.log(allFriend);
