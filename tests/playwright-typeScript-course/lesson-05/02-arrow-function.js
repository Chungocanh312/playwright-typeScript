const sum3 = (a, b) => {
  return a + b;
};

// BT
// 1. Khai báo hàm có tham số name. Trả về chuỗi Hello <name>
const myName = (firstName) => {
  return firstName;
};
console.log(`My Name is ` + myName(`Ngoc Anh`));

// 2. Khai báo hàm có tham số price, quantity, discount.
// TRả về giá trị, biết giá trị = price * quantity - discount
const totalAmount = (price, quantity, discount) => {
  return price * quantity - (price * quantity * discount) / 100;
};
console.log(`Total amount is ` + totalAmount(2_000, 10, 50));

// Cú pháp ngắn gọn nhất (implicit return):
const add = (a,b) => a + b; // ngầm hiểu là sẽ trả về a + b. Vì chỉ có 1 dòng trả về nên có thể bỏ luôn cặp ngoặc nhọn {} và chữ return
console.log(add(1,2));

// Trong trường hợp không có tham số:
// => vẫn phải có cặp ngoặc tròn rỗng:
const greet = () => console.log(`Hello!`); // Ở đây luôn mặc định sẽ trả về undefined vì console.log luôn trả về undefined.
const getRandom = () => Math.random();
greet();
console.log(getRandom());

// Có 1 tham số => có thể bỏ dấu ngoặc tròn:
const double = x => x * 2;
const square = y => y * y;
console.log(double(2));
console.log(square(3));

// Vẫn có 1 tham số nhưng ta vẫn muốn giữ dấu ngoặc (tùy style mà bạn muốn):
const tripple = (x) => x * 3;
console.log(tripple(4));
