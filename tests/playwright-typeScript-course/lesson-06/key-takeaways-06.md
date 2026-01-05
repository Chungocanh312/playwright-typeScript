### Git, Javascript advanced
#### Git: clone, push and pull
`git branch <branch_name>`
Lệnh này dùng để tạo ra 1 nhánh mới nhưng không chuyển sang nhánh mới đó mà vẫn sẽ ở lại nhánh cũ
#### Clone:
là hành động lấy code từ 1 repo đã có sẵn về máy tính cá nhân. 
Câu lệnh:

`git clone <link repo>`

Lưu ý: máy phải tạo SSH key và kết nối tới github thì mới có thể clone từ repo thuộc tài khoản github đó được

Bình thường nếu 1 repo public mà chưa thêm tk của mình vào repo thì khi clone chỉ có thể sử dùng https. Khi đã thêm tk của mình vào repo thì mới có thể clone và dùng SSH

Trong trường hợp clone 1 repo bị trùng tên với 1 repo đã có sẵn trên máy mà ta lại không muốn phải vào ổ để tạo thư mục mới hoặc đổi tên project cũ => git hỗ trợ đổi tên repo khi clone
Câu lệnh:
`git clone <link repo> <tên mới>`

Nếu clone bằng https thì mỗi lần pull/ clone thì đều sẽ phải nhập username + password

#### cách dùng cd để di chuyển thư mục trong terminal:
`cd..`
di chuyển về thư mục cha

`cd <tên thư mục con>`
di chuyển vào thư mục con
nếu tên thư mục dài có thể sử dụng phím tab để tự hoàn thiện tên thư mục

#### Push

Câu lệnh:

`git push origin <tên nhánh>`

origin là tên của provider source version control
VD: cty dùng gitLab thì ta có thể đặt tên là gitLab và sử dụng lệnh như sau

`git push gitLab <tên nhánh>`

Tips: có thể dùng lệnh để mở 1 cửa số VS code mới với file dự án khác bằng lệnh :

`code .`

Lưu ý phải cd đến đúng thư mục chứa code đó 
VD : code nằm trong folder tên playwright-typescript => phải cd /playwright-typescrip => vào hẳn trong thư mục đó trước đã

Để xem các remote đã tạo cho local repo => sử dụng lệnh:

`git remove -v`

#### Pull:
Dùng để pull code từ remote repo về máy local

Câu lệnh:

`git pull <tên remote> <tên nhánh>`

VD: git pull origin main

Trường hợp: local có 2 nhánh main và ABC

=> main có code thay đổi sau đó đã push và merge vào nhánh ABC

=> Khi này trên remote :

- Nhánh main: chưa có code mới
- Nhánh ABC: có đẩy đủ mới nhất

=> chúng ta muốn đồng bộ lại code sang nhánh main

=> Ở local: checkout sang nhánh main `git checkout main`

=> lấy thông tin mới nhất ở trên remote `git fetch <tên remote>`

=> merge nhánh ABC vào nhánh main: `git merge <tên nhánh ABC>`

=> khi này: nhánh main sẽ có code mới nhất

- Lấy các commit từ ABC
- Áp vào main
- Tự tạo 1 merge commit
- Commit đó đã nằm trong lịch sử main

=> Không có file nào đang ở trạng thái “chưa commit”.

=> chỉ cần push lại lên main của remote => lúc này trên remote nhánh main sẽ có code mới nhất

=> đây là cách làm để cho log commit clear nhất

#### Stashing:
Lưu các thay đổi trước khi chuyển nhánh. Sử dụng trong trường hợp: đang làm dở task A tại nhánh A nhưng phải chuyển sang task B ở nhánh B, k muốn commit code task A vì chưa xong và không muốn code dở của task A đi theo khi mình chuyển sang làm task B ở nhánh B

Câu lệnh:

`git stash`

Lưu ý: git stash sẽ lưu lại những thay đổi trên các file mà mình đã có commit trước đó (nghĩa là các file đã được git theo dõi trước đó). Nếu ở đây ta có cả các file mới chưa commit bao giờ thì ta phải dùng lệnh

`git stash -u`

=> khi này code mới ở nhánh A sẽ được lưu tạm ở bộ nhớ tạm, hiển thị code nhánh A sẽ quay về ban đầu => checkout nhánh B sẽ sạch sẽ

=> khi muốn quay lại làm tiếp task A ở nhánh A

=> checkout về nhánh A

=> sau đó dùng lệnh

`git stash pop`

=> sẽ lôi code dở ra và apply và nhánh A

=> tuyệt đối k pop khi vẫn còn ở nhánh B vì khi đó git sẽ apply code dở đó vào nhánh B => có thể bị nhập A dở và B nếu k conflict hoặc bị conflict

Trường hợp có nhiều stash:

=> Dùng lệnh sau để xem list các stash

`git stash list`

=> sẽ hiển thị list. VD:

`stash@{0}.....`

`stash@{1}.....`

=> muốn lấy ra stash{1} ta dùng lệnh:

`git stash pop stash@{1}`

Trường hợp muốn lưu tên stash để tiện khi pop stash

`git stash save "<tên stash>"`

hoặc

`git stash push -m "tên stash"`

=> khi list thì stash đó sẽ có ghi chú tên để ta dễ nhận biết

### Merge request (Pull request)

merge request (pull request) = gộp code từ 1 nhánh sang nhánh còn lại

Sau khi tạo nhánh mới ở local => commit => push với tên nhánh 
Trên git sẽ hiển thị commit ở 1 nhánh mới k phải main
Khi đó ta sẽ phải tạo pull request để có ng trong team review và sau đó approve cho PR của mình có thể merge đc vào nhánh main

#### Git Convention:
convention = bộ quy tắc
convention giúp:
- Gọn gàng, đồng bộ
- Dễ đoán được ý đồ của PR/ commit

Convention đặt tên branch:
- feat/checkout
- fix/fill-info
- feat/lesson-06

`<type>/<short-description>`

***type***
- feat: tính năng mới
- fix: sửa lỗi
- conf: thay đổi cấu hình (config)
- chore: các thay đổi lặt vặt như xóa file không dùng, đổi tên file

***short-description*** : Mục đích của branh được tạo ra

### Javascript -  class:
Class là gì => 
- Dùng để khai báo kiểu dữ liệu
- Là một khuôn mẫu định nghĩa các thuộc tính và phương thức mà các đối tượng thuộc class đó sẽ có

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
```
tên class sẽ được viết theo PascalCase:
```javascript
// Trong trường hợp ta muốn khai báo các object student đơn lẻ như sau:
const A1 = {
    name: "A1"
    role: "student"
}

const A2 = {
    name: "A2"
    role: "student"
}

const A3 = {
    name: "A3"
    role: "student"
}
// Cách trên rất mất thời gian và không có tính tái sử dụng
// => ta dùng class để tạo 1 bộ khung, sau đó muốn tạo object chỉ cần gọi class ra, truyền các giá trị vào các thuộc tính cần phải có của nó là đc


class Student {
    // thuộc tính/ property : chỉ cần ghi như sau , js sẽ tự hiểu đó là các thuộc tính của class student (tương tự như thuộc tính của 1 object)
    // Không cần phải khai báo từ khóa let/ const ở phía trước thuộc tính
    name
    role
    // constructor/ hàm khởi tạo => khởi tạo các thuộc tính bắt buộc phải có của class, ví dụ class này có name và role là bắt buộc phải có
    constructor(name, role){
        this.name = name;
        this.role = role;
    };
    // phương thức/ method:
    //Phương thức (method) trong class là gì
    //- Là các hàm được gắn với class
    //- Thường để thực hiện các hành động liên quan tới đối tượng (class) đó
    sayMyName () {
        console.log(`My name is ${this.name}`);
    }
    // Lưu ý không cần thêm từ khóa function ở trước
    // Nếu muốn hàm có thể hứng được trong 1 biến => hàm đó phải có return
    // với method trong class thì cũng tương tự hàm => có thể thêm return để có thể tạo biến để hứng két quả trả về sau khi thực thi method đó

    saySomething (message) {
        console.log(`Say something: ${message}`);
        return `Say something: ${message}`
    }

}

// Tạo 1 object từ khuôn class student:
const nganNguyen = new Student("Ngan nguyen", "Student"); 
// 2 parameter kia sẽ được truyền vào 2 biến có trong constructor của class Student

// Tạo 1 object khác:
const hien = new Student("hien", "student");

// Tạo 1 object khác và cho object đó hành động:
const Nga = new Student("Nga","Student");
Nga.sayMyName();
```

### TypeScript:
- TS là JS cải tiến, thêm kiểu dữ liệu để code rõ ràng hơn
- Giúp phát hiện lỗi ngay khi viết code (VD: gán sai kiểu dữ liệu)
- TS được biên dịch thành JS để chạy
```typescript
let age : number = 25; // phải là số
let name : string = "John" // phải là string
let teams : string[] = ["team A", "team B"] // phải là mảng chuỗi

// VD: age = "30" => báo lỗi vì không thể gán chuỗi cho kiểu dữ liệu là số
```

- Interface trong typescript

    - Interface định nghĩa cấu trúc cho đối tượng (như cầu thủ trong đội bóng)
    - Đảm bảo đối tượng có đúng các thuộc tính và kiểu dữ liệu

VD:
```typescript
interface Player {
    name: string;
    position: string;
    jerseyNumber: number;
}

let player: Player = {
    name: "John",
    position: "Forward",
    jerseyNumber: 10
};
// Trong class: class trong TS giống JS nhưng có thêm:
// - Khai báo kiểu dữ liệu cho thuộc tính và phương thức
// VD:
class Team {
    name: string,
    players: Player[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }
}
// Để run TS:
`npx ts-node <path_file>`
`npx tsx <path_file>`

// Ở đây: interface Player là 1 kiểu array
// => khi khai báo thuộc tính khác với kiểu dữ liệu là Player => phải viết là:
// players: Player[]
// hoặc có 1 cách viết khác:
// players: Array<Player>

// Ngoài ra constructor ở trên có thể khai báo như sau:
constructor (name: string, players: Player[]) {
    this.name = name;
    this.players = players;
}

// Các kiểu khai báo khác cần nhớ:
// Mảng chỉ toàn string:
string[]
Array<string>
// Mảng chỉ toàn Player (1 interface nào đó)
Player[]
Array<Player>
// Mảng chỉ trộn Player và string
(Player | string)[]
Array<Player | string>
// Mảng chỉ Player hoặc string
Player[] | string[]
Array<Player> | Array<string>
```


