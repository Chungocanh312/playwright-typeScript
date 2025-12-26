// Hàm map();
const students = ["An", "Binh", "Cường"];
const studentList = students.map((studentName, index) => 
({
    id: index + 1,
    studentName: studentName,
    code: `SV00${index + 1}`
}));

console.log(studentList);

// Với hàm Map() (Và nhiều hàm mảng khác)
// => parameter đầu tiên của callback luôn là giá trị của phần tử hiện tại trong mảng
// parameter thứ hai là index của phần tử trong mảng
// Ở VD trên: Index là biến do ta tự đặt nhưng với hàm map(). Nó sẽ mặc định parameter thứ hai 
// truyền vào hàm map() chính là index của mảng. 
// Nên nếu muốn lấy index => chỉ cần đảm bảo nó nằm ở vị trí thứ 2 của mảng

// Hàm filter()
const products = [
  { name: 'iphone 15 pro', price: 18000000, category: 'phone', inStock: false},
  { name: 'samsung S24', price: 28000000, category: 'phone', inStock: false},
  { name: 'iphone 16 promax', price: 32000000, category: 'phone', inStock: true},
  { name: 'iphone 17', price: 24000000, category: 'phone', inStock: true},
  { name: 'iphone 17 air', price: 30000000, category: 'phone', inStock: true},
  { name: 'Macbook pro M1', price: 12000000, category: 'phone', inStock: true},
  { name: 'Macbook pro M4', price: 49000000, category: 'phone', inStock: true},
  { name: 'Macbook pro M5', price: 60000000, category: 'phone', inStock: true},
];

// Lọc sản phẩm còn hàng:
const availableProducts = products.filter(product => product.inStock);
console.log(availableProducts);

// Lọc sản phẩm giá dưới 30 triệu:
const affordableProducts = products.filter(product => product.price <= 30000000);
console.log(affordableProducts);

// Lọc sản nhiều điều kiện: là điện thoại và còn hàng
const availablePhones = products.filter(product => product.category === 'phone' && product.inStock);
console.log(availablePhones);

// Hàm find();
const numbers = [1,5,3,8,2,10,7];

// Tìm số chẵn đầu tiên trong mảng
const firstOddNumber = numbers.find(num => num % 2 === 0);
console.log(firstOddNumber);

// Tìm số lớn hơn 6:
const numberGreaterThanSix = numbers.find(num => num > 6);
console.log(numberGreaterThanSix);

// TH không tìm thấy và sẽ trả về undifined:
const negativeNumber = numbers.find(num => num < 0);
console.log(negativeNumber);

const users = [
  { id: 101, name: 'An', role: 'admin', active: true },
  { id: 102, name: 'Bình', role: 'user', active: false },
  { id: 103, name: 'Cường', role: 'super Admin', active: true },
  { id: 104, name: 'Dũng', role: 'admin', active: true }
];

// Tìm user theo ID:
const userById = users.find(user => user.id === 103);
console.log(userById)

// Tìm admin đầu tiên:
const adminUser = users.find(user => user.role === 'admin');
console.log(adminUser);

// Tìm user không active:
const inactiveUser = users.find(user => !user.active);
console.log(inactiveUser);

// reduce():
const numbersReduce = [1,2,3,4,5];

// Cách hoạt động từng bước:
const sum = numbersReduce.reduce((accumulator,current) => {
  console.log(`accumulator: ${accumulator}, current: ${current}`);
  return accumulator + current;
},0);

console.log(sum); 

const cart = [
  {product: 'Laptop', price: 30_000_000, quantity: 1},
  {product: 'Mouse', price: 300_000, quantity: 2},
  {product: 'Keyboard', price: 800_000, quantity: 1},
  {product: 'Monitor', price: 5_000_000, quantity: 1}
];

// Tính tổng tiền giỏ hàng
const totalAmount = cart.reduce((total, item) => {
  return total + (item.price * item.quantity)
},0);

console.log(totalAmount);
console.log(`Tổng tiền: ${totalAmount.toLocaleString('vi-VN')}đ`);

// Tính tổng số lượng sản phẩm:
const totalItem = cart.reduce((totalItem, item) => {
  return totalItem + item.quantity;
},0);

console.log(`Tổng số sản phẩm: ${totalItem.toLocaleString('vi-VN')} sp`);

// Hàm some()
const numbersSome = [1,3,5,7,8,9];

// Kiểm tra có số chẵn không?
const hasEven = numbersSome.some(num => num % 2 === 0);
console.log(hasEven); // true (vì có số 8)

// Kiểm tra có số > 10 không
const hasGreaterThan10 = numbersSome.some(num => num > 10);
console.log(hasGreaterThan10); // false (không có số nào lớn hơn 10)

// Dừng ngay khi tìm thấy số chẵn và ghi lại log:
const hasEvenWithLog = numbersSome.some((num) => {
  console.log(`checking: ${num}`);
  return num % 2 === 0;
});

// VD thực tế:
const user = {
  name: "Nguyễn Văn Anh",
  roles: ["user", "editor"],
};

const adminRoles = ['admin','superadmin'];
const editorRoles = ['editor','admin'];

// Kiểm tra user có quyền editor không?
const isEditor = user.roles.some(role => editorRoles.includes(role));
console.log(`quyền edit của user là ${isEditor}`);

// Kiểm tra user có phải admin không?
const isAdmin = user.roles.some(role => adminRoles.includes(role));
console.log(`quyền admin bằng ${isAdmin}`);

// Hàm kiểm tra quyền tổng quát
function hasPermission(userRoles, requiredRoles) {
  return userRoles.some(role => requiredRoles.includes(role));
}; // ở đây ta tạo hàm để có thể tái sử dụng

console. log(hasPermission(user.roles, ['viewer','editor'])); // in ra true

// Hàm every():
const numberEvery = [2,4,6,8,10];

// Kiểm tra tất cả là số chẵn
const allEven = numberEvery.every(num => num % 2 === 0)
console.log(allEven) // true

// Kiểm tra tất cả > 0 ?
const allPositive = numberEvery.every(num => num > 0)
console.log(allPositive) // true

// Kiểm tra tất cả > 5?
const allGreaterThan5 = numberEvery.every(num => num > 0)
console.log(allGreaterThan5) // false

// Dừng ngay khi gặp false
const checkWithLog = numberEvery.every(num => {
  console.log(`checking: ${num}`);
  return num < 5;
});

// VD thực tế:
const orderItems = [
  { product: 'iphone 15', quantity: 1, inStock: 5, price: 25_000_000},
  { product: 'AirPods', quantity: 2, inStock: 10, price: 4_000_000},
  { product: 'Case', quantity: 1, inStock: 20, price: 500_000}
];

// Tất cả sản phẩm còn đủ hàng?
const allAvailable = orderItems.every(item => item.quantity <= item.inStock);
console.log(allAvailable) // true

// Tất cả sản phẩm có gía hợp lệ? (tức là > 0)
const allPriceIsValid = orderItems.every(item =>item.price > 0);
console.log(allPriceIsValid) // true

// Kiểm tra giới hạn số lượng (max mỗi 10 sản phẩm)
const maxQuantity = orderItems.every(item => item.quantity <= 10);
console.log(maxQuantity) // true

// Kiểm tra tổng hợp các validation
function isOrderValid (orderItems) {
  return orderItems.every(item => 
  item.quantity <= item.inStock &&
  item.price > 0 &&
  item.quantity <= 10);
};

console.log(isOrderValid(orderItems)); // true

// Hàm sort():
const fruits = ['banana','apple','orange','grape'];
fruits.sort();
console.log(fruits); 

// BUG phổ biến: sort số không đúng thoe mặc định!
const numbersSort = [10,5,40,25,1000,1];
numbers.sort(); // đoạn này sẽ làm thay đổi mảng gốc
console.log(numbersSort); 

// Cách đúng: dùng compare function
const numbersSort2 = [10,5,40,25,1000,1];
numbersSort2.sort((a,b) => a - b); // tăng dần 

console.log(numbersSort2); 
numbersSort2.sort((a,b) => b - a); // giảm dần
console.log(numbersSort2); 


