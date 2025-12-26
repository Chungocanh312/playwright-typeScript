### 1. Function express:

Định nghĩa function bằng cách gán cho nó 1 biến

#### VD:

```javascript
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
// Output:
// 5 => cả hai cách đều cho ra kết qủa giống nhau
```

### 2. Lambda Function - Hay còn gọi là arrow function:

- Xuất hiện lần đầu trong ES6 (phiên bản ES2015)
- Đây là cách viết ngắn gọn hơn cho funtion
- Sử dụng dấu =>

#### VD:

```javascript
// Function truyền thống:
function sum1(a, b) {
  return a + b;
}

// Function expression:
const sum2 = function (a, b) {
  return a + b;
};

// Arrow function (lambda)
const sum3 = (a, b) => {
  return a + b;
};
```

#### 1 số biến thể của arrow function:

```javascript
// Cú pháp ngắn gọn nhất (implicit return):
const add = (a, b) => a + b; // ngầm hiểu là sẽ trả về a + b. Vì chỉ có 1 dòng trả về nên có thể bỏ luôn cặp ngoặc nhọn {} và chữ return
console.log(add(1, 2));
//Output:
//3

// Trong trường hợp không có tham số:
// => vẫn phải có cặp ngoặc tròn rỗng:
const greet = () => console.log(`Hello!`);
const getRandom = () => Math.random();

greet();
//Output: Hello!

console.log(greet());
// Output: Undefined => do console.log() sẽ luôn trả về giá trị là undefined

console.log(getRandom());
// Output: 1 số bất kì

// Có 1 tham số => có thể bỏ dấu ngoặc tròn:
const double = (x) => x * 2;
const square = (y) => y * y;

// Vẫn có 1 tham số nhưng ta vẫn muốn giữ dấu ngoặc (tùy style mà bạn muốn):
const tripple = (x) => x * 3;

console.log(double(2));
// Output: 4
console.log(square(3));
// Output: 9
console.log(tripple(4));
// Output: 12
```

### 3. Anonymous Function:

- Là 1 hàm ẩn danh => function không có tên
- Được sử dụng khi function chỉ cần dùng một lần hoặc làm callback

#### VD:

```javascript
// Name function (có tên):
function nameFunction(){
    console.log(`I have a name!`);
}

// Anonymous function (không tên):
function() {
    console.log(`I'm anonymous!`);
}
// => Tuy nhiên sẽ báo lỗi: Syntax Error! Do hàm anonymous Không thể đứng một mình

// Anonymous function phải được sử dụng ngay. Như sau:
// 1. Gán cho biến
const anonymousFunc = function(){
    console.log(`I'm anonymous but stored in a variable`);
}

// 2. Dùng làm hàm callback:
setTimeout(function() {
    console.log(`Anonymous callback!`);
}, 1000);
```

### 4. DOM:

- Khi vào 1 website, ta thấy website bao gồm:
  - Các khối text
  - Các hình ảnh
  - Các liên kết
  - Các ô input
- Tuy nhiên với máy tính thì sẽ nhìn ở dưới dạng cây có cấu trúc
  - Ta mở cây này bằng cách bấm vào phím F12 (hoặc chuột phỉa vào vùng trống, chọn Inspect) => sau đó chọn tab "Element"
  - Cấu trúc này gọi là DOM (Document Object Model)
  - Các phần tử (component) trên trang web thì trong DOM được hiểu là các node hay là các thẻ html
- 1 node sẽ bao gồm:
  - Thẻ mở : trong đó có type của thẻ (tên thẻ : VD: lable/ div...)
  - Các thuộc tính của thẻ/ text (Lưu ý: thuộc tính sẽ luôn nằm trong thẻ mở)
  - Thẻ đóng

`<option value="usa">United States</option>`

- Cũng có loại thẻ là thẻ tự đóng. Các thẻ này thưởng thể hiện cho các component là những chỗ xuống dòng / ngắt đoạn

`<br/>`

`<hr/>`

- Thực tế có rất nhiều loại thẻ khác nhau:

  - Thẻ tiêu chuẩn: thẻ do tổ chức uy tín mozilla định nghĩa
  - Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa

- Các thẻ tiêu chuẩn thường gặp:

  - `<html>`: thẻ gốc của trang
  - `<head>`: Chứa metadata: Tiêu đề website, hiển thị google
  - `<body>`: Nội dung của cả Website hiển thị
  - `<div>` : Khối/ container chung
  - `<span>`: Inline container. Dùng để định dạng văn bản. VD định nghĩa 1 đoạn text có màu gì
  - `<header>` , `<footer>` , `<nav>` , `<section>`: thẻ ngữ nghĩa
  - `<ul>` : thẻ chứa 1 list không theo thứ tự
  - `<ol>` : thẻ chứa 1 list có theo thứ tự
  - Link web demo: material.playwrightvn.com/035-DOM-elements.html

### 5. Selector:

Có 3 loại selector thường dùng:

- XPath
- CSS Selector
- Playwright Selector

#### XPath Seletor:

- Dùng được hầu hết trong tất cả các trường hợp
- Đa dạng, có khả năng tìm các phần tử khó
- Nhược điểm: hơi dài
- VD: //button[normalize-space() = 'Add to cart']

#### CSS Selector:

- Dựa trên các thuộc tính CSS để có thẻ viết selector ngắn gọn, performance cao
- Dùng cho các trường hợp dễ tìm
- Không linh hoạt bằng Xpath
- VD: .add-to-cart

#### Playwright selector:

- Chỉ dùng riêng cho Playwright
- Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
- Hướng tới "Giống người dùng đang nhìn thấy gì"
- Cũng không phải trường hợp nào cũng sử dụng được
- VD: page.getByText("Add to cart")

#### Khi nào thì dùng gì?

Playwright selector > CSS selector > XPath

- Vẫn cần học hiểu cả ba loại để có thể sử dụng cho mọi loại dự án
- Có những dự án thích dùng CSS hoặc chỉ thích dùng Xpath thì buộc ta phải tuân theo

#### XPATH (XML PATH)

- Có 2 loại:
  - Tuyệt đối: đi dọc theo cây DOM. Bắt đầu bởi 1 dấu /
  - Tương đối: tìm dựa vào đặc tính. Bắt đầu bởi 2 dấu / (//). Cú pháp //tagname[@attribute='value attribute']
  - Ta nên dùng Xpath tương đối

#### selector text():
Hàm text() dùng để tìm ra phần tử có giá trị tương ứng. VD:

`<div @class="playwright">This is a text</div>`

Thì để chọn phần tử ta dùng cú pháp sau:

`//div[text()='This is a text']`

#### selector contains():
Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. VD:

`<div> Tôi là Alex </div>` 

=> Text này có 1 ký tự space ở đầu và ở cuối

VD khác:

`<div> Bây giờ là : 08:07 </div>` 

=> Thời gian sẽ tùy vào thời điểm truy cập vào trang web

=> Để chọn các phần tử này => ta sẽ dùng hàm contains(<giá trị>, <giá trị contains>).

VD:

`//div[contains(text(),'Tôi là Alex')`


### 6. Playwright basic syntax:

Automation = tương tác + verify

- Viết một test
- Tổ chứu thành các step
- Tương tác cơ bản

  - Navigation
  - Click
  - Fill

#### test:

Đơn vị cơ bản để khai báo 1 test:

#### VD:

```javascript
import { test } from '@playwright/test';

test('<Tên testcase>', async ({ page }) => {
  // Code của test
});
// Khi chúng ta viết chữ test ở đâu kia nghĩa là ta đánh dấu ta đang tạo 1 file testcase cho playwright hiểu và thực thi
// File test phải đặt tên như sau: <tên file - function/module..>.spec.js
// Trước khi thực hiện bất kì dòng code nào, ta phải import thư viên test của playwright vào

// Steps: là 1 đơn vị nhỏ hơn, năm trong test. Dùng để khai báo từng step của testcase

await test.step('Tên step', async () => {
  // Code here
});
// Lưu ý: test step nên được map 1-1 với test case đã defined để dễ dàng maintain
```

#### Basic Action:

#### Navigate:

```typescript
await page.goto('https://material.playwrightvn.com/');
```

#### Locate:

Sử dụng page.locator("<selector>") để chọn phần tử trên trang

```typescript
await page.locator("//input[@id='email'");
```

#### action click:

Sử dụng hàm click() để tương tác với phần tử:

```typescript
await page.locator("//input[@id='email'").click(); // click 1 lần

await page.locator("//input[@id='email'").dblclick();  // double click

await page.locator("//input[@id='email'").click({
    button : 'right';
}) // Click chuột phải

await page.locator("//input[@id='email'").click({
    modifiers: ['Shift'],
}) // Click chuột kèm bấm 1 phím khác
// ta có thể xem hướng dẫn các option trong hàm click()
// => hover vào hàm click();
```

#### Action input:

Có 2 hàm để thực hiện:
Fill()
Hàm này giống như việc ta paste 1 nội dung vào 1 ô input

pressSequentially()
hàm này giống như việc ta gõ từng chữ cái vào 1 ô input

```typescript
// fill():
page.locator("//input").fill("Playwright Viet Nam");

// pressSequentially():
page.locator("//input").pressSequentially("Playwright Viet Nam", {
  delay: 100, // 0.1 s sẽ nhập 1 ký tự trong chuỗi
});
```

#### Action radio/ checkbox:

```typescript
// Lấy giá trị hiện tại xem là đang được check rồi hay là không
const isChecked = page.locator(`//input`).isChecked();

// Check/ uncheck radio/ checkbox:
page.locator("//input").check(); //check
page.locator("//input").setchecked(false); // uncheck
```

#### Action Dropdown : select - Option:

```typescript
await page.locator("//select[@id='country']").selectOption({ label: "USA" });
await page.locator("//select[@id='interests']").selectOption('Art'); // Cách này JS sẽ hiểu là đang truyền vào value 
// Tương đương với:
await page.locator("//select[@id='interests']").selectOption({ value: 'Art' });
```

#### Action upload file:
```typescript
await page.locator("//input[@id='profile']").setInputFiles('<file-path>');

await page.locator("//input[@id='profile']").setInputFiles('tests/playwright-typeScript-course/lesson-05-data-test/data-test.txt') // path ta chuột phải vào file data rồi chọn copy relatives path
```

#### Action Hover():
Để hover vào phần tử, ta dùng hàm hover: 
```typescript
await page.locator("").hover();
```
#### handle confirmation dialog:
```javascript
import {test} from 'playwright/test'

test('handle confirmation dialog', async ({page}) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.locator("//a[@href='03-xpath-todo-list.html']").click();

  await page.locator("//input[@id='new-task']").fill(`Task 1`);
  await page.locator("//button[@id='add-task']").click();
  page.on('dialog',async dialog => dialog.accept()); // lưu ý: code xử lý dialog phải ở trước dòng code có action làm tạo ra dialog đó. Ở đây khi ta click vào delete button => hiển thị dialog
  // lệnh này không cần phải await
  await page.locator("//button[text()='Delete']");
})
```

