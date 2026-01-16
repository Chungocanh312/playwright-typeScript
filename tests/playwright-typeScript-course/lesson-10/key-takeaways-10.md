### PAGE OBJECT MODEL (POM)

#### Typescript: so sánh với Javascript

Typescript là superset (mở rộng) của javascript

- Lí do: Js quá dễ dãi trong việc kiểm tra code => sinh ra rất nhiều lỗi
- Nên typescript ra đời để kiểm soát và giảm bớt lỗi của js
  => Vì typescript viết trên nền của javascript nên code TS cần được biên dịch qua JS trước khi chạy

`npm install -d typescript`

`npx tsc <file_path>`

- Dùng Typescript vì nó có nhiều ưu điểm hơn so với javascript

  - TS có hệ thống kiểu dữ liệu
  - Gợi ý code tốt hơn. (Gợi ý kiểu dữ liệu rõ ràng để ta viết code dễ dàng hơn)
  - Phát hiện lỗi sớm
  - Có interface & type alias
  - OOP features
  - Generic ...(cho phép viết code dùng chung cho nhiều kiểu dữ liệu, nhưng vẫn giữ được type an toàn)

```typescript
// javascript way:
const jsName = "Phong";

// typescript way:
const tsName: string = "Phong";
```

Để chạy test thì ta dùng lệnh:
`npx playwright test <fileTest_path>`

#### types in TS:

```typescript
// Các kiểu dữ liệu built-in type:
// VD: string, number, boolen
const academyName: string = "BetterBytesAcademy";

// Kiểu dữ liệu custome type - do mình tự định nghĩa:
// 1. TYPE :
// Cú pháp:
type <type_name> = {
    properties1: dataType1;
    properties2: dataType2;
}

// Type kiểu object:
type k18User = {
    name: string;
    age: number;
    yearOfExperience: number;
}

const student1: k18User = {
    name: "Phong",
    age: 18,
    yearOfExperience: 1
}

// Ngoài ra, type có thể đại diện cho bất kỳ kiểu nào
// Kiểu primitive:
type UserName = string;
type Age = number;
type IsActive = boolean;

// Kiểu Union type:
type Status = 'active' | 'inactive' | 'pending';

// Kiểu Array:
type Numbers = number[];
type Users = User[];

// Kiểu Tuple:
type Point = [number, number];

// Function type:
type Sum = (a: number, b: number) => number;


// 2. INTERFACE:
interface k18User2 {
    name: string;
    address: string;
    email: string;
}

const student2: k18User2 = {
    name: "Phong",
    address: "Ha Noi",
    yearOfExperience: "1"
}

// Lưu ý:
// Khi mình khai báo các thuộc tính trong interface/ type thì sẽ có dấu ; ở cuối cùng
// Còn khi khai báo biến với kiểu dữ liệu interface/ type thì ở cuối các thuộc tính sẽ dùng dấu ,
// Đối với tên kiểu dữ liệu (type/ interface) thì chữ cái đầu phải viết hoa
```

#### Typescript: class và kế thừa (extend)

Class: Dùng để mô hình hóa 1 đối tượng: bao gồm thuộc tính (property) và hành vi (methods)

- Property: đặc tính
- methods: các hành động mà đối tượng có thể thực hiện

```typescript
class User {
  email: string;
  name: string;
  age: number;

  constructor(email: string, name: string, age: number) {
    this.email = email;
    this.name = name;
    this.age = age;
  }

  getInfo(): string {
    return `${this.name} ${this.email} - ${this.age} tuổi`;
  }
}

// Sử dụng class trên:
const user1 = new User("An", "an@gmail.com", "20");
console.log(user1.getInfo());
```

#### Kế thừa:

là cơ chế kế thừa (inheritance) theo OOP. Cho phép 1 class thừa hưởng các thuộc tính và phương thức từ class khác

```typescript
class LoginPage2 {
    heading: string;
    ...
    constructor() {
        this.heading = "";
        ...
    }

    fillUserName(username: string) {
        console.log(`Filling username: ${username}`);
    }
    ...
}

class DashboardPage extends LoginPage2 {
    titleLoc: string;

    constructor() {
        super()
        this.titleLoc = "";
    }
// super(...) dùng để gọi constructor (hàm khởi tạo) của class cha
// Muốn truy cập biến (field) của class cha thì dùng this.<tên biến>
// Muốn gọi method của class cha thì dùng super.<tên method>

// VD:
class LoginPage {
  usernameLoc: string;
  passwordLoc: string;
  rememberMeLoc: string;
  btnLoginLoc: string;

  constructor(
    usernameLoc: string,
    passwordLoc: string,
    rememberMeLoc: string,
    btnLoginLoc: string
  ) {
    this.usernameLoc = usernameLoc;
    this.passwordLoc = passwordLoc;
    this.rememberMeLoc = rememberMeLoc;
    this.btnLoginLoc = btnLoginLoc;
  }

  fillUserName(username: string): void {
    console.log(`Filling username`, username);
  }
}

class DashboardPage extends LoginPage {
  headingLoc: string;

  constructor(
    usernameLoc: string,
    passwordLoc: string,
    rememberMeLoc: string,
    btnLoginLoc: string,
    headingLoc: string
  ) {
    super(usernameLoc,passwordLoc,rememberMeLoc,btnLoginLoc)
    this.headingLoc = headingLoc;
  }
}

const dashboardPage = new DashboardPage("an","chu","chu","chu","chu");
dashboardPage.fillUserName("anhcn")

}

const dashboardPage = new DashboardPage();
dashboardPage.fullUserName("An Chu");

// Lưu ý: muốn sửa tên class kèm theo sửa ở các vị trí đang dùng class đó
// ta bôi đen tên class -> chuột phải -> chọn rename symbol (phím tắt : F2)
```

#### Page Object model
POM là 1 ***design-partern*** - một cấu trúc tổ chức code "sạch đẹp và dễ bảo trì"
- POM = Page Object modal

**Hiểu đơn giản**:

POM = class với:

- **Properties**: các thành phần của trang web
- **Methods**: các hành động trên trang web

- POM sẽ giúp:

    - Locator bị lặp lại nhiều nơi 
    - Nếu UI thay đổi, phải sửa ở nhiều test
    - Code dài dòng, khó đọc
    - Khó maintain khi có nhiều test
    - Không tái sử dụng được code

- Tiêu chuẩn của POM:

    - Thực tế không có 1 chuẩn chung nào cho POM
    - Tất cả dưa trên:

        - Framework
        - Ngôn ngữ
        - Author
        - Sở thích
        - Kinh nghiệm

**Kế thừa (extends)** :
- Kế thừa giúp bạn tái sử dụng các thuộc tính của class cha cho các class con
- Hàm khởi tạo (constructor) là hàm sẽ chạy ngay khi bạn khởi tạo 1 object
```typescript
// Hàm khởi tạo:
export class SimpleClass {
    constructor() {
        console.log('Hello Playwright');
    }
}

// Sử dụng class:
const instance = new SimpleClass();

// Khi khởi tạo 1 đối tượng mới từ class SimpleClass, hàm console.log sẽ tự động chạy
```
**Từ khóa Super**:
- Dung để gọi đến hàmkhowir tạo của class cha. Khi kế thừa, bạn luôn cần gọi super() trong class cha

**Từ khóa export**
- Từ khóa export giúp chúng ta có thể xuất 1 biến, 1 hằng số ở 1 file
- Ở file khác muốn gọi đến chỉ cần nhập (import) để có thể dùng
```typescript
// Tại file login-page.ts
export class LoginPage {
    // Some code..
}

// Tại file test.spec.ts
import {LoginPage} from './page/login-page';
```

***Lưu ý:***
Với 1 cấu trúc thư mục như sau:
- test.spec.ts
- page

    - login.page.ts

Thì:

- `from './page/login-page;` là đường dẫn để đi tới login-page cần import. Do login-page này nằm trong thư mục page nên cần định nghĩa vào trong import
- Ta có thể viết `from './page/login-page.ts';` hoặc bỏ đuôi .ts trong phần import vì JS sẽ tự động thêm đuôi ts khi tìm kiếm
- Để import file nằm ở thư mục bên ngoài, ta dùng .. để đi ra folder cha của folder hiện tại . VD `../../login-page.ts`

**Refactoring**:
Refactoring là viết lại source code một cách khoa học hơn mà vẫn giữ được tính đúng đắn và giá trị về chứ năng của source code đó

Tại sao phải refactoring code
Refactoring không hề làm hệ thống chạy nhanh hơn, bảo mật hơn tuy nhiên nó sẽ giúp source code dễ tiếp cận, dễ đọc, dễ hiểu từ đó giúp ích rất nhiều cho quá trình bảo trì, mở rộng hệ thống

Khi nào thì thực hiện refactoring :
- Bất cứ khi nào bạn muốn code của mình tốt hơn thì đều có thể thực hiện refactoring.
- Tuy nhiên, một số giai đoạn dưới đây được cho là thích hợp hơn cả để làm refactoring:

    - Khi thêm chức năng mới vào source cũ
    - Khi tiến hành review code
    - Khi cần handover (bàn giao) lại

- Một số dấu hiệu cần refactoring
    - Smell: Method, function quá dài
    - Smell: quá nhiều parameters trong method, function
    - Smell: class chứa lượng code quá lớn

