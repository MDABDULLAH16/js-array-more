// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// Expected ooutput:
// John scored 85
// Alice scored 90

const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

const JohnDetails = students[0].name + " " + "scored " + students[0].marks;
// console.log(JohnDetails);
const AliceDetails = students[1].name + " " + "scored " + students[1].marks;
// console.log(AliceDetails);

for (const student of students) {
  console.log(student.name, "scored ", student.marks);
}
