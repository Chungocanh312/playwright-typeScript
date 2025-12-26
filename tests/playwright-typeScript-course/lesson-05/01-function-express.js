// khai báo hàm
function add(a, b) {
  return a + b;
}

// biểu thức hàm
const add1 = function (a, b) {
  return a + b;
};

// In và so sánh kết quả
console.log(add(2, 3));
console.log(add1(2, 3));

// BT:
// 1. Khai báo hàm có tham số name. Trả về chuỗi Hello <name>
const greetingGuest = function (name) {
  return name;
};
console.log(`Hello ` + greetingGuest(`Ngoc Anh`));

// 2. Khai báo hàm có tham số price, quantity, discount.
// TRả về giá trị, biết giá trị = price * quantity - discount
const totalAmount = function (price, quantity, discount) {
  return price * quantity - (discount * price * quantity) / 100;
};
console.log(`Total amount is ` + totalAmount(1000, 20, 20));
