let age = 20;
let guestType = age >= 18 ? "Người lớn" : "Trẻ em";
console.log(guestType);
// Có thể viết không có ngặc ()
let guestType2 = age >= 18 ? "Người lớn" : "Trẻ em";
console.log(guestType2);

let score = 75;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(grade);

// Hoặc viết có ngoặc () cho dễ nhìn hơn
let grade2 =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(grade2);

// BT: cho 2 biến age, status
// age >= 75 => stt = "nghỉ hưu"
// còn lại => lao động

let ageLabor = 15;
let laborStatus = ageLabor >= 65 ? "nghỉ hưu" : "lao động";
console.log(laborStatus);

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

let weekDay1 = 4;
let dayName1 =
  weekDay1 === 1
    ? `Sunday`
    : weekDay1 === 2
    ? `Monday`
    : weekDay1 === 3
    ? `Tuesday`
    : weekDay1 === 4
    ? `Wednesday`
    : weekDay1 === 5
    ? `Thursday`
    : weekDay1 === 6
    ? `Friday`
    : weekDay1 === 7
    ? `Saturday`
    : `Number is invalid`;
console.log(dayName1);
