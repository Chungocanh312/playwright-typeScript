// BT: Khai báo biến là thứ trong tuần (kiểu number)
// VD: sun = 1; mon = 2..., sat = 7
// Nếu số = 1 thì in ra là sunday, nếu số =2 thì in ra mon...

let weekDay = 5;
if (weekDay == 1) {
  console.log(`Sunday`);
} else if (weekDay === 2) {
  console.log(`Monday`);
} else if (weekDay === 3) {
  console.log(`Tuesday`);
} else if (weekDay === 4) {
  console.log(`Wednesday`);
} else if (weekDay === 5) {
  console.log(`Thursday`);
} else if (weekDay === 6) {
  console.log(`Friday`);
} else if (weekDay === 7) {
  console.log(`Saturday`);
} else {
  console.log(`This number is invalid`);
}
