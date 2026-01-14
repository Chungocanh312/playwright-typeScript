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