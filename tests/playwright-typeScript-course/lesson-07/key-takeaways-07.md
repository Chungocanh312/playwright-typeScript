### javascript và typescript:
Với javascript: sẽ không quy định phải khai báo kiểu dữ liệu cho biến => thuận tiện khi viết nhưng về lâu dài rất dễ gây lỗi vặt

VD:
```javascript
let a = 5;

// 100 dòng code

let a = "Ngoc Anh"

// 100 dòng code

const x = a + 10
console.log(x) // => in ra là Ngoc Anh 10 dù expected là 15
```
typescript =  javascript + Utils . nghĩa là TS chính là JS kèm thêm 1 số các tính năng nâng cao hơn => giúp JS trở nên chặt chẽ hơn, giảm lỗi vặt và khiến phần mềm tin cậy hơn

Hiện nay typescript vẫn thường xuyên update những tính năng mới để đáp ứng các nhu cầu

### interface và type:
#### type 
là cách khai báo 1 kiểu dữ liệu do ta tự định nghĩa:

VD:
```typescript
type CauThu = {
    name: string;
    jerseyNumber: number;
    Age: number;
}
// ở đây ta đã khai báo 1 kiểu dữ liệu tên là CauThu với các thuộc tính và kiểu dữ liệu của thuộc tính bắt buộc phải theo như trên

// Nếu ta khai báo 1 biến với kiểu dữ liệu không phải CauThu => có thể thiếu thuộc tính nhưng sẽ không bị báo lỗi:
const cauThuA = {
    name = "antone",
    age = 20
}

// Nếu ta khai báo 1 biến với kiểu dữ liệu là CauThu => nếu k đúng với kiểu dữ liệu đã tạo => sẽ bị báo lỗi:
const cauThuA : CauThu = {
    name = "antone",
    age = 20
} //=> báo lỗi đỏ

// Type không merge được, không khai báo thành 2 type cùng tên được 
type User = {
  name: string;
};

// ❌ không khai báo lại được => báo lỗi 
type User = {
  age: number;
};

// Có thể quy định union type/ intersection type/ function type : những Cái này interface không làm được

// Union type:
type Status = "success" | "fail" | "pending";

// intersection type: 
type UserWithRole = User & { role: string };

// function type: 
type LoginFn = (username: string, password: string) => boolean;
```
#### interface
cũng là 1 cách khai báo, nhưng linh hoạt hơn type trong việc mở rộng (có thể extend thêm thuộc tính, merge các interface cùng tên thành 1 interface)
Dùng để mô tả structure
```typescript
// merge (khai báo nhiều lần)
interface User {
  name: string;
}

interface User {
  age: number;
}
//=> tự động merge và khi tạo 1 biến kiểu User thì biến đó phải có đủ các thuộc tính từ các interface user merge thành
const user: User = {
  name: "anh",
  age: 10
}
// Điều này Chỉ interface làm được, type thì không

// Mô tả object/ class:
interface User {
  name: string;
  age: number;
}

class Student implements User {
  name = "";
  age = 0;
}

// interface có thể extend 1 interface:
interface Admin extends User {
  role: string;
}
```
### Selector advance: Xpath: axes
- parent
- child
- ancestor
- descendant
- following
- preceding
- following-sibling
- preceding-sibling

`//tag/relationship::tagname[@attribute='value']`

#### DOM relation:
- ***self***: node hiện tại. Là node ta đang chỏ vào trên DOM
- ***parent***: node cha. Là node phía trên trực tiếp của node hiện tại
- ***children***: node con. là node phía dưới trực tiếp của node hiện tại
- ***ancestor***: node tổ tiên. là các node: cha của cha...
- ***descendant***: node hậu duệ. là các node con, cháu... của node hiện tại
- ***following***: node ae phía dưới và các node con của nó. Các node này nằm phía bên tay phải của self node. Lưu ý: không lấy những thẻ con của self node
- ***preceding***: node ae phía trên và các node con của nó. Các node này ằm phía bên tay trái của node hiện tại. Lưu ý: không lấy các node ancestor (ancestor/ parent) của self node
- ***siblings***: node anh em. là các node có cùng cấp và cùng node cha

    - ***following-sibling***: chỉ lấy các node ae theo sau thẻ hiện tại (không bao gồm các node con của các node này)
    - ***preceding-sibling***: chỉ lấy các node ae ở đằng trước thẻ hiện tại (không bao gồm các node con của các node này)

#### XPath: advance methods
- wildcard: * : để có thể chọn 1 lúc nhiều node có cùng attribute. VD: //* thì nó sẽ lấy đc toàn bộ thẻ có trong DOM. Có thể thay cho tên node. sẽ không quan tâm loại node, tên node là gì. Chỉ quan tâm tới thuộc tính bên trong
- Chứa thuộc tính : (id/ class/ name ...)
- and và or: kết hợp các điều kiện về thuộc tính của node
- innerText: text()
- normalize-space(): Dùng để loại bỏ space đầu và cuối và kiểm tra giá trị text. `//h1[normalize-space()='User Registration']`
- contains: chỉ cần 1 phần text hoặc value của attribute
- starts-with: text hoặc value của attribute bắt đầu bằng các ký tự nhất định `//h1[starts-with(text(),'User')]`
- not: phủ định lại điều kiện. VD tìm thẻ h1 mà k bắt đầu bằng chữ User `//h1[not(starts-with(text(),'User'))]`