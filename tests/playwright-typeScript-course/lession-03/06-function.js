// Task 1:
function multiply(a, b) {
  return a * b;
}

let giaTri1 = multiply(2, 3);
let giaTri2 = multiply(5, 6);

console.log(giaTri1);
console.log(giaTri2);

// Task 2:
function findMin(a, b, c) {
  return Math.min(a, b, c);
}
let minNumber = findMin(4, 9, 6);
console.log(`Số nhỏ nhất trong 3 số là ${minNumber}`);

// Task 3:
let students = [
  { name: `Nam`, score: 6 },
  { name: `Ly`, score: 9 },
  { name: `Lâm`, score: 3 },
  { name: `Hiệp`, score: 9 },
  { name: `Trung`, score: 7 },
  { name: `Nghĩa`, score: 10 },
];

function getTopStudent(students, threshold) {
  const topStudent = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      topStudent.push({ name: students[i].name, score: students[i].score });
    }
  }
  return topStudent;
}
const listTopStudent = getTopStudent(students, 7);
console.log(listTopStudent);

//Task 4:
function calculateInterest (principal, rate, year) {
    return principal + principal*rate*year/100;
};

const tongTien = calculateInterest(1000,10,20);
console.log(`Tong tien la ${tongTien} VND`);