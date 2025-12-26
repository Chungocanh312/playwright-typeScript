### Getting started:
### GIT
Mỗi project sẽ dùng 1 tài khoản riêng

1. Set global cho tài khoản cá nhân (mặc định cho tất cả các project có trên máy cá nhân)
```typescript
git config --global user.name "<global name>"
git config --global user.email "<global email>"
// Cái này dùng cho:
// - Project cá nhân
// - Open source
// - Repo ngoài công ty
```
2. Set tài khoản cho từng project riêng :
```typescript
git config user.name "<project userName>"
git config user.email "<project userEmail>"
// Cái này dùng cho:
// - Chỉ áp dụng cho 1 project hiện tại đang làm việc
// - Không áp dụng cho các project khác có trên máy local
// - Không cần set lại lần sau
```
3. Kiểm tra từng project đang dùng account nào
```typescript
git config --local user.name
git config --local user.email
// Hoặc:
git config --list --show-origin | grep user
```

4. Set global default branch
Ta sẽ set default branch là main (Để mỗi khi git init (tạo repo git cho 1 dự án mới) thì nhánh main sẽ luôn là nhánh chính và là nhánh default của dự án đó)
```typescript
git config --global init.defaultBranch main
// Cách kiểm tra toàn bộ git global config hiện tại:
git config --global --list
```
5. Cách kết nối giữa local và git
SSH key là gì?
Nó bao gồm 2 cặp khóa:
- id_rsa: cần giữ bí mật
- id_rsa.pub: có thể publish/ gửi cho người khác
=> giúp cho việc xác thực đăng nhập trên Git đơn giản hơn
=> SSH key được lưu ở file ~/.ssh (~ ở đây đại diện cho thư mục home)

Lệnh tạo SSH key
```typescript
ssh-key-t rsa -b 4096 -C"<your email"
//VD:
ssh-key-t rsa -b 4096 -C"chungocanh312@gmail.com"
// Trong đó:
// t: là thuật toán
// rsa: tên thuật toán
// b: độ dài của khóa
// 4096: giá trị của độ dài khóa
// C: địa chỉ email của git
```
Lưu ý: nếu máy đã từng generate ssh key trước đó rồi. Khi dùng lệnh thì terminal sẽ báo là đã tồn tại và có muốn overwrite lại không?
Thì khi đó hãy ctrl + C để hủy lệnh tạo ssh key đi
=> sau đó gõ `open ~/.ssh/`

=> sẽ mở thư mục .ssh => Trong đó sẽ chứa 2 file: id_rsa và id_rsa.pub đã tồn tại trước đó
=> nên copy 2 file này và lưu ra 1 thư mục khác. Phòng trường hợp sau này dùng lại

Lệnh xóa SSH key cũ và tạo 2 file mới:
1. Xóa 2 file ssh key cũ:
`rm ~/.ssh/id_rsa~/.ssh/id_rsa.pub`

kiểm tra lại: `ls ~/.ssh/`

=> nếu không thấy 2 file id_rsa và id_rsa.pub => đã xóa thành công

