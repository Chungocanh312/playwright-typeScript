# Day 4: JavaScript advance

### 1. Phạm vi của biến:

Phạm vi (scope) là việc xác định nơi mà biến có thể truy cập. Trong JavaScript có ba loại phạm vi:

- Toàn cục (Global)
- Function scope (hàm)
- Block scope (khối hàm)

1. #### Toàn cục (global):
   Là biến mà các hàm trong 1 file/ class đều có thể truy câp tới được. Có thể gọi được đến từ trong hàm/ trong 1 đoạn code If-else

#### VD:

```javascript
var globalVar = `Tôi là biến toàn cục`;
var globalLet = `Tôi cũng là biến toàn cục`;

function testFunction() {
  console.log(globalVar); // Truy cập được
  console.log(globalLet); // Truy cập được
}
```

2. #### Function scope :
   Là biến mà chỉ có thể sử dụng/ truy cập trong 1 hàm nhất định

#### VD:

```javascript
function myFunction() {
  var functionScoped = `Chỉ có thể truy cập ở trong hàm này`;
  let alsoFunctionScoped = `Tương tự`;

  console.log(functionScoped); // ok. chạy được dòng code này
}

console.log(alsoFunctionScoped); // Error: functionScoped is not defined
```

3. #### Block scope (khối hàm):
   Là biến mà chỉ có thể sử dụng/ truy cập trong 1 block code nhất định

#### VD:

```javascript
if (true) {
  var varVariable = `var không có block scope`;
  let letVariable = `let có block scope`;
  const constVariable = `const cũng có block scope`;
}
console.log(varVariable); // OK - var không bị giới hạn bởi block. kiểu var là kiểu cũ,k bị giới hạn nên rất khó kiểm soát nên hiện tại mn đã không dùng nữa
console.log(letVariable); // Error : letVariable is not defined
console.log(constVariable); // Error : constVariable is not defined
```

4. ### Khái niệm hoisting:
   Là khi JavaScript di chuyển các khia báo biến lên đầu phạm vi của chúng trước khi thực thi code

#### VD:

```javascript
console.log(x); // undefined (Không phải error)

// Tương đương với:
var x;
console.log(x); // undefined
x = 5;

// Trường hợp Với let và const:
console.log(y); // Error: Cannot access 'y' before initialization
let y = 5;
```

Như ở trên đây thì javascript sẽ tự động đẩy dòng code khai báo biến lên trước câu lệnh thực thì mà gọi đến biến đó giúp cho không bị lỗi. Tuy nhiên thì nó sẽ không thể lấy được giá trị nên khi in ra sẽ là undifined hoặc null ...
Cơ chế này gọi là hoisting
Tuy nhiên với biến const / let thì sẽ bị báo lỗi chứ k như biến var

5. ### Break và continue:
   #### Break:
   Dùng để thoát vòng lặp ngày lập tức

#### VD:

```javascript
// Thoát khi tìm thấy giá trị cần tìm:
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Thoát khỏi vòng lặp khi i = 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// VD thực tế: Tìm phần tử đầu tiên chia hết cho 2 trong 1 mảng
const numbers = [1, 3, 8, 7, 9, 11];
let firstEven = null;

for (let num of numbers) {
  if (num % 2 === 0) {
    firstEven = num;
    break; // Dừng lại ngay khi tìm thấy
  }
}
```

#### Continue:

Dùng để bỏ qua các giá trị mà ta không muốn thao tác đến trong vòng lặp
=> dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo

#### VD:

```javascript
// Ta có 2 đoạn code như sau:
for (....){
    if (i % 2 !== 0){
        console.log(i); // Đây là sẽ in ra các số lẻ
    }
}

for (....){
    if(i % 2 === 0){
        continue;
    }
    console.log(i); // Đây cũng sẽ in ra các số lẻ nhưng ý tưởng ở đây là bỏ qua các số chẵn (chia hết cho 2). Khi đã chạy vào trường hợp bỏ qua => sẽ k chạy các đoạn code bên dưới continue (ở đây là console.log) mà sẽ chạy vào vòng lặp tiếp. Nếu gặp trường hợp k bỏ qua => sẽ chạy dòng lệnh bên dưới => in ra được các số lẻ
}

// VD thực tế:
// Bỏ qua số chẵn:
for (let i = 0; i < 10 ; i++){
    if (i % 2 === 0) {
        continue; // Bỏ qua số chẵn
    }
    console.log(i)
}
// Output: 1, 3, 5, 7, 9
```

6. ### Câu điều kiện if-else:
   Dùng để thực thi các dòng code khác nhau trong điều kiện true hoặc false

#### VD:

```javascript
let score = 75;
if (score >= 60) {
    console.log(`Bạn đã qua môn`)
}else (score < 60 ) {
    console.log(`Bạn đã trượt`)
};
```

7. ### Câu điều kiện if-else-if:
   Dùng để kiểm tra nhiều điều kiện theo thứ tự

#### VD:

```javascript
let score = 85;

if (score >= 85) {
  console.log(`Xuất sắc`);
} else if (score >= 80) {
  console.log(`Giỏi`);
} else if (score >= 70) {
  console.log(`Khá`);
} else if (score >= 60) {
  console.log(`Trung bình`);
} else {
  console.log(`Yếu`);
}
// Với loại câu điều kiện này:
// Khi kiểm tra điều kiện đầu tiên, nếu đúng nó sẽ dừng lại. Nếu sai nó mới tiếp tục kiểm tra điều kiện tiếp theo
```

8. ### Ternary operator:
   Toán tử điều kiện : Cách viết ngắn gọn cho if ... else 1 cách đơn giản hơn

#### VD:

```javascript
let age = 20;
let status = age >= 18 ? "Người lớn" : "Trẻ em";
console.log(status); //Người lớn

// Có thể lồng nhau (nên cẩn thận với độ phức tạp)
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

// Ở đây dấu ? để đánh dấu đây là 1 mệnh đề điều kiện
// Sau dấu ? sẽ có 2 khối: 1 khối trước dấu : và 1 khối sau dấu :
// Trước dấu : là value cho mệnh đề đúng
// Sau dấu: là value cho mệnh đề sai
```

9. ### Kết hợp nhiều điều kiện : && hoặc ||
   Ta sẽ sử dùng kết hợp && và || vào trong phần điều kiện

#### VD:

```javascript
let userName = `admin`;
let password = `12345`;

// Toán tử AND (&&)
if (username === `admin` && password === `123456`) {
  console.log(`Đăng nhập thành công`);
}

// Toán tử OR (||)
let day = `Saturday`;
if (day === `Saturday` || day === `Sunday`) {
  console.log(`Ngày cuối tuần`);
}

// Toán tử NOT (!)
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Vui lòng đăng nhập!");
}
```

10. ### Vòng lặp for - in:
    Dùng để duyệt qua các thuộc tính (Properties) có thể đếm được của một object, bao gồm cả thuộc tính kế thừa.

#### VD:

```javascript
// Object:
const person = {
  name: `John`,
  age: 30,
  city: `New York`,
};

for (let property in person) {
  console.log(`${property} : ${person[property]}`);
  console.log(property + `:` + person[property]);
}
// Output:
// name: John
// age: 30
// city: New York

// biến property ở đây dùng với in của 1 object
// => js hiểu là property sẽ lấy lần lượt từng thuộc tính của object đó
// => và person[property] sẽ lấy lần lượt từng giá trị tương ứng với từng thuộc tính đang xét trước đó
// Vì sao lại dùng [] để lấy thay vì dùng. vì nếu dùng chấm thì phải define cụ thể tên thuộc tính. Nhưng vì ta đang chạy 1 vòng lặp xét từng thuộc tính nên dùng [] mới có thể sử dụng biến được

// Array (mảng)- không khuyến khích sử dụng với for ... in :
const colors = [`red`, `green`, 1, `blue`];
colors.customProperty = `rainbow`;

for (let index in colors) {
  console.log(index + ":" + colors[index]);
}
// Output:
// 0 : red
// 1 : green
// 2 : blue
// customProperty : rainbow

// Lưu ý đoạn code: colors.customProperty = `rainbow`;
// Trong js thì array cũng được coi là 1 object. Nên ta có thể thêm thuộc tính cho nó
// Câu lệnh này là ta thêm 1 thuộc tính customProperty vào array colors
// Và khi in ra thì cũng tương tự với object thì sẽ hiển thị thuộc tính : giá trị thuộc tính => chỉ khác là với array thuộc tính sẽ mặc định là index của từng giá trị trong mảng
```

11. ### Vòng lặp for - of: (Thường dùng với array)

#### VD:

```javascript
const arr = [100, 500, 780, 900];
for (let item of arr) {
  console.log(item);
}
// Output:
// 100
// 500
// 780
// 900

// Khác với for..in => for..of sẽ in luôn từng giá trị của từng phần tử trong object/ array => phù hợp với array hơn

// Ứng dụng for..of :
// Trong trường hợp ta muốn in các phần tử trong 1 mảng thì sẽ ngắn gọn hơn nếu ta dùng vòng lặp for bình thường:
//:
for (let item of arr) {
  if (item > 0) {
    console.log(item);
  }
}

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > 0) {
    console.log(arr[i]);
  }
}
// => ta thấy cách viết for..of sẽ ngắn gọn hơn nhiều
```

12. ### util function :

#### VD:

- trim();
- toLowerCase()
- toUpperCase()
- includes()
- replace()
- split()
- substring()
- indexOf()
  - Util = tiện ích
  - Util function = các hàm tiện ích có sẵn
  - Giúp xử lý code nhanh gọn hơn:
- Util: có 2 dạng hàm tiện ích
  - String util
  - Array util

13. ### String util:

### trim():

Dùng để cắt đi những khoảng trắng (space) ở đầu và ở cuối của mỗi chuỗi

#### VD:

```javascript
let className = `    K18 Playwright    `; // Ở đây ta có khoảng trắng ở cả đầu và cuối
console.log(className.trim());
// Output:
//K18 Playwright
//    K18 Playwright
```

### toLowerCase() và toUpperCase():

Dùng để viết toàn bộ đoạn text về chữ in thường hoặc chữ in hoa

#### VD:

```javascript
let className = `K18 Playwright`; // Ở đây ta có cả in hoa và in thường trong chuỗi
console.log(className.toUpperCase()); // viết tất cả thành in hoa
console.log(className.toLowerCase()); // viết tất cả thành in thường
// Output:
//K18 PLAYWRIGHT
//k18 playwright
```

### includes():

Giúp chúng ta kiểm tra trong 1 chuỗi A có chứa 1 chuỗi con là B nào không
Hàm này sẽ trả về cho ta 1 giá trị kiểu boolean (True or False)

#### VD:

```javascript
let className2 = `Cộng hòa xã hội chủ nghĩa Việt Nam`;
console.log(className2.includes(`Cộng`));
console.log(className2.includes(`Mỹ`));
// Output:
//true
//false
```

### replace():

Dùng để thay 1 chuỗi vào trong 1 chuỗi

#### VD:

```javascript
let frameWork = `Playwright Javascript`;
console.log(frameWork.replace(`Javascript`, `Typescript`));
// Output:
// Playwright Typescript
// Trong trường hợp nếu ta chọn 1 chuỗi không có trong chuỗi ban đầu => Thì đoạn code sẽ vẫn chạy, không trả ra lỗi, nhưng in ra chuỗi ban đầu không bị thay đổi
```

### split():

Dùng để chia 1 chuỗi thành 1 mảng chứa các giá trị lấy từ chuỗi ban đầu

#### VD:

```javascript
let emails = `ngocanh@gmail.com, hoang@gmail.com, lien@gmail.com`;
const arrEmail = emails.split(`, `); // vì ở đây giữa các email đều có ", " => nên ta sẽ dùng phần này trong chuỗi để làm mốc để chia các phần tử của chuỗi
console.log(arrEmail);
// Output:
// [ 'ngocanh@gmail.com', 'hoang@gmail.com', 'lien@gmail.com' ]

const arrEmail1 = emails.split(`@`);
console.log(arrEmail1);
// Output:
// [ 'ngocanh', 'gmail.com, hoang', 'gmail.com, lien', 'gmail.com' ]
// phần tử dùng để chia (@) sẽ không còn trong mảng đc tạo
// Kết quả là 4 phần tử gồm:
// Phần tử 1 từ ký từ đầu cho đến ký tự đứng trước dấu @ đầu tiên
// Phần tử 2 là ký tự sau dấu @ đầu tiên cho đến ký đứng trước dấu @ thứ 2
// Phần tử 3 là ký tự sau dấu @ thứ hai cho đến ký tự đứng trước dấu @ thứ 3
// Phần tử 4 là ký tự sau dấu @ thứ 3 đến ký tự cuối cùng
```

### substring():

Giúp chúng ta chia 1 chuỗi cha thành 1 chuỗi con. Hàm này nhận vào 2 tham số : vị trí bắt đầu và vị trí kết thúc => để generate ra 1 đoạn chuỗi ta cần

#### VD:

```javascript
let className3 = `K18 Playwright`;
console.log(className3.substring(0, 3));
// Output:
// K18
// Trong 1 chuỗi thì index cũng giống như trong mảng (0 - (n-1))
// => ta muốn lấy K18 trong chuỗi kia thì sẽ truyền vào index của 2 tham số là: 0(ký tự K là ký tự bắt đầu) và 3(ký tự space sẽ là ký tự kết thúc)

console.log(className3.substring(5));
//Output:
// laywright
// Nếu chỉ truyền vào 1 tham số duy nhất => nó sẽ coi tham số được truyền vào là index của vị trí start còn vị trí end sẽ là ký tự cuối cùng
```

### indexOf():

Giúp chúng ta kiểm tra vị trí của 1 chuỗi hoặc 1 ký tự nào đó trong chuỗi cha

#### VD:

```javascript
let className4 = `K18 Playwright Typescript`;
console.log(className4.indexOf("Play"));
// Output:
// 4
// Ở đây nó sẽ lấy index của ký tự P => trong chuỗi index của nó === 4
// Trường hợp truyền vào 1 chuỗi không có trong chuỗi cha
console.log(className4.indexOf("Sele"));
// Output:
// -1
// Luôn luôn trả ra == -1
```
