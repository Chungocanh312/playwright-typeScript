console.log(`Task 1:`);
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

console.log(`Task 2:`);
for (let m = 1; m <= 10; m++) {
  const result = 2 * m;
  console.log(`2 x ${m} = ${result}`);
}

for (let m = 1; m <= 10; m++) {
  const result = 3 * m;
  console.log(`3 x ${m} = ${result}`);
}

for (let m = 1; m <= 10; m++) {
  const result = 4 * m;
  console.log(`4 x ${m} = ${result}`);
}

for (let m = 1; m <= 10; m++) {
  const result = 5 * m;
  console.log(`5 x ${m} = ${result}`);
}

for (let m = 1; m <= 10; m++) {
  const result = 6 * m;
  console.log(`6 x ${m} = ${result}`);
}

for (let m = 1; m <= 10; m++) {
  const result = 7 * m;
  console.log(`7 x ${m} = ${result}`);
}

for (let m = 1; m <= 10; m++) {
  const result = 8 * m;
  console.log(`8 x ${m} = ${result}`);
}

for (let m = 1; m <= 10; m++) {
  const result = 9 * m;
  console.log(`9 x ${m} = ${result}`);
}

//C2:
for (let n = 1; n <= 9; n++) {
  console.log(`--- Bảng ${n} ---`);
  for (let i = 1; i <= 9; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// C3:
function printAllTables() {
  for (let n = 1; n <= 9; n++) {
    console.log(`--- Bảng ${n} ---`);
    for (let i = 1; i <= 9; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }
}
const bangCuuChuong = printAllTables();
console.log(bangCuuChuong);

console.log(`Task 3:`);
const numbers = [];
for (let i = 1; i <= 99; i++)
  if (i % 2 !== 0) {
    numbers.push(i);
  }
console.log(numbers);

console.log(`Task 4:`);
for (let d = 1; d <= 10; d++) {
  console.log(`user${d}@example.com`);
}

console.log(`Task 5:`);
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
