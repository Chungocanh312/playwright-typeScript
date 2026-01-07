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
const jsName = "Phong"

// typescript way:
const tsName: string = "Phong"
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

    getInfo() : string {
        return `${this.name} ${this.email} - ${this.age} tuổi`;
    };
}

// Sử dụng class trên:
const user1 = new User("An","an@gmail.com","20");
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
}

const dashboardPage = new DashboardPage();
dashboardPage.fullUserName("An Chu");

```

#### Page Object model