### API TESTING

#### API là gì?
- Viết tắt của application programing interface
- Có chức năng giúp các hệ thống giao tiếp với nhau
- Nó sẽ có 1 bộ quy tắc chung để giúp phần mềm giao tiếp với nhau

API giống như cầu nối hặc hợp đồng giúp các hệ thống khác nhau làm việc cùng với nhau mà không cần biết chi tiết bên trong của nhau

Tại sao cần phải test API?
=> Đảm bảo hoạt động đúng - API trả về dữ liệu chính xác, xử lý logic đúng như thiết kế
=> Phát hiện lỗi sớm - bắt bug trước khi ảnh hưởng đến FE hoặc enduser
=> Kiểm tra bảo mật - Đảm bảo API không bị truy cập trái phép, không lộ dữ liệu nhạy cảm
=> tránh phụ thuộc vào implement FE/ mobile app
=> Dễ bảo trì - khi sửa code, chạy lại test để chắc chắn không làm hỏng tính năng cũ

#### Các Thành phần của API
1. Endpoint (Url) - Địa chỉ để truy cập tài nguyên
`https://material.playwrightvn.com/api/todo-app/v1/todos.php`

`https://` scheme : giao thức

`material.playwrightvn.com` domain (subdomain + domain)

- `materia` subdomain

- `playwrightvn` domain

- `com` tên miền

`/api/todo-app/v1/todos.php` path

2. HTTP Method - các phương thức thao tác:
- GET (lấy dữ liệu)
- POST (tạo mới)
- PUT/PATCH (Cập nhật)
- DELETE (xóa)
- ...

link chi tiết: `https://material.playwrightvn.com/039-http-method.html`

3. Request - yêu cầu gửi đi, bao gồm:
- Headers: thông tin bổ sung (token xác thực, content-type...)
- parameters: tham số trên url (query params)
- Body: Dữ liệu gửi lên (JSON, XML...)

4. Response - phản hồi trả về, gồm:
- status code: mã trạng thái (200 OK, 404 not found, 500 ...)
- Headers: thông tin phản hồi
- Body: Dữ liệu trả về (thường là JSON)

#### API document:
- Thường dùng swagger để build tài liệu hướng dẫn sử dụng API:

    - Thường bao gồm chi tiết:

        - Thông tin về endpoint, HTTP method, URL, body...
        - Phổ biến: dùng swagger

#### Giới thiệu về postman:
- Left Side bar :

    - Collections: tổ chức các API request thành nhóm
    - Enviroments: quản lý các biến môi trường (dev, staging, production)
    - History: Lịch sử các request đã gửi
    - Mock servers: tạo server giả lập
    - Monitors: theo dõi API tự động

- Right side bar:

    - Documentation
    - Comments
    - Code snippets

#### Playwright API Testing
- Sử dụng request fixture để thực hiện gọi API

    - Gọi các API mà không cần phỉa thực hiện thao tác thông qua trình duyệt
    - Thực hiện các thao tác gọi API trực tiếp trong code

```typescript
import {test} from '@playwright/test';

test('Api test cơ bản - response text', async({request}) => {
    const Url = ''

    const response = await request.get(Url);
    const responseText = await response.text();
    console.log(responseText)
})
```
#### request.get/put/patch/delete('link'):

```typescript
//VD:
const url = '';
const response = await request.get(url);

```
=> lấy kết quả và gán nó vào biến **response**

#### cách bật debug trong VS code:
tại dòng code mà mình muốn nó sẽ dừng lại tại đó khi chạy
=> click ở bên cạnh số thứ tự dòng => nó sẽ có chấm đỏ

=> click chuột phải vào biểu tưởng run test (mũi tên xanh nếu trước đó case passed, dấu x đỏ nếu trước đó case failed)

=> chọn debug => sẽ chạy test và dừng ở dòng mình đã đánh dấu

=> khi này ta có thể hover vào các biến để xem biến đó tại dòng đó đang có giá trị gì....

#### đối với response thì có 2 cách ta thường dùng để lấy response:
- response text: lấy ở dạng string
- response json: lấy ở dạng object
=> thường lấy ở dạng object để thực hiện kiểm tra sau này. Sử dụng chain (.) để lấy dữ liệu bên trong json

```typescript
//VD:
const url = 'https://material.playwrightvn.com/api/todo-app/v1/todos.php';
const response = await request.get(url);

const responseText = await response.text();
const responseJson = await response.json();

// Để chuyển từ 1 file text thành json:
const responseJson = JSON.parse(responseText);
```

#### Assertion API testing:
- Kiểm tra status code trả về
```typescript
const response = await request.get(Url);
expect(response.status()).toBe(200);

// Dùng hàm length để verify số phần tử trả về:
const response = await request.get(Url);
const resonseJson = await response.json();
expect(responseJson.<tên data chứa các phần từ>.length).toBe(10);
```

#### Authentication:

