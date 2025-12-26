###### Git - Undo thing: 
### 1. Undo commit message: Dùng lệnh: > git commit --amend -m”message”
### 2. Restore file: File staging => working directory: Dùng lệnh: > git restore --staged <file_name>
### 3. Restore all file: Dùng lệnh: > git restore staged .
### 4. Un-commit file: File repository => Working directory: Dùng lệnh: > git reset HEAD~1
###### Git Branch:
### 1. Pull code từ source version control (GitHub) về: Dùng lệnh > git pull origin main/ master
### 2. Kiểm tra nhánh hiện tại mà chúng ta đang làm việc: Dùng lệnh > git branch 
### 3. Tạo nhánh: Dùng lệnh > git branch <tên nhánh mới>
### 4. Chuyển nhánh Dùng lệnh > git checkout <tên nhánh cần chuyển>
### 5. Vừa tạo và chuyển luôn sang nhánh mới: Dùng lệnh: > git branch -b <tên nhánh mới>
### 6. Xóa nhánh: Dùng lệnh: > git branch -D <tên nhánh cần xóa> Lưu ý: trước khi xóa nhánh nào cần phải chuyển sang nhánh khác rồi mới xóa nhánh cần xóa
###### JAVASCRIPT CONTINUE:
### 1. Convention: 
1. snake_case : chưa dùng đến kiểu này trong khóa học
2. kebab-case : đặt tên file
3. camelCase: đặt tên biến
4. PascalCase: đặt tên class
### 2. Object: Là đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc một hằng số
### 3. Array: Mảng:Là 1 công cụ trong javaScript dùng để lưu trữ thông tin, danh sách 
### 4. Function: Là 1 hàm: chứa đoạn code được đặt tên và có thể tái sử dụng, nó được sử dụng để thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
### Cách khai báo:function <nameFunction> () {// block code}