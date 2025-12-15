// Task 1:
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

let sum1 = 0;
let a = 1;

while (a <= 100) {
  sum1 += a;
  a++;
}
console.log(sum1);

// Task 2:
const bangCuuChuong = [];
for (let b = 2; b <= 9; b++) {
  bangCuuChuong.push(1 * b);
  bangCuuChuong.push(2 * b);
  bangCuuChuong.push(3 * b);
  bangCuuChuong.push(4 * b);
  bangCuuChuong.push(5 * b);
  bangCuuChuong.push(6 * b);
  bangCuuChuong.push(7 * b);
  bangCuuChuong.push(8 * b);
  bangCuuChuong.push(9 * b);
  bangCuuChuong.push(10 * b);
}
console.log(bangCuuChuong);

// Task 3:
const numbers = [];
for (let i = 1; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers);

// Task 4:
for (let d = 1; d <= 10; d++) {
  console.log(`user${d}@example.com`);
}

// Task 5:
const doanhThu = [
  { month: 1, total: 100 },
  { month: 2, total: 50 },
  { month: 3, total: 40 },
  { month: 4, total: 100 },
  { month: 5, total: 50 },
  { month: 6, total: 40 },
  { month: 7, total: 100 },
  { month: 8, total: 50 },
  { month: 9, total: 40 },
  { month: 10, total: 100 },
  { month: 11, total: 50 },
  { month: 12, total: 40 },
];

let tongDoanhThu = 0;
for (let z = 0; z < doanhThu.length; z++) {
  tongDoanhThu += doanhThu[z].total;
}
console.log(tongDoanhThu);
