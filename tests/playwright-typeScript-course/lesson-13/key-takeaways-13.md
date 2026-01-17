### Object destructuring, fixture
#### Object destructuring
Object destructuring là gì

- **Destruct** == phá hủy, dỡ bỏ

    - Trong context javascript, destruct = lấy các giá trị của các thuộc tính trong object

```typescript
// VD khi chưa có destructuring
const myClass = {
    school: 'BBA',
    course: 'Full-stack QA'
}

const school = myClass.school;
const course = myClass.course;

console.log(school); // => in ra 'BBA'
console.log(course); // => in ra 'Full-stack QA'

// VD khi có destructuring:
const myClass = {
    school: 'BBA',
    course: 'Full-stack QA'
}

const {school, course} = myClass

console.log(school); //=> in ra 'BBA'
console.log(course); //=> in ra 'Full-stack QA'
```

### Fixture:
Fixture là gì?
Playwright sử dụng concept fixture gồm:
- page

- request

=> là những concept cơ bản nhất trong playwright để giúp cho việc viết test trở nên đơn giản hơn

- Fixture trong  playwright là cơ chế để:

    - Tái sử dụng setup/ teardown code (dọn dẹp sau khi test xong)
    - Chia sẻ object giữa các test
    - Tạo môi trường test độc lập
    - Mở rộng built-in fixtures (page, context, browser)
    - Nhóm test theo ngữ nghĩa thay vì các common setup (các setup chung cho các test)

- Các fixture có trong plawwright:

    - `page` : type là `Page` : Tạo 1 page riêng biệt cho test
    - `context`: type là `BrowserContext` : Tạo 1 context riêng biệt cho test. Fixture page phía trên cũng cùng context với context này
    - `browser`: type là `Browser`: được dùng chung giữa các test để tối ưu tài nguyên
    - `browserName` : type là `string`: Tên browser đang chạy , có thể là chromium, firefox và webkit
    - `request` : type là `APIRequestContext`: là một `APIRequestContext` instance độc lập

- Custom fixture:
là fixture do tự mình tạo ra

```typescript
// file fixture:
import {test as base, expect} from '@playwright/test'
import { MaterialPage } from './00-pom';
// test as base => chỉ là để đặt lại tên cho từ test
// nếu trong file có chỗ nào dùng đến từ test ta có thể đổi thành từ base

const test = base.extend<{materialPage: MaterialPage}>({
    // ở đây ta báo với playwright là ta sẽ mở rộng fixture test (base vì ta đang đổi test thành base) 1 thuộc tính nào đó. VD như trên là thuộc tính tên là materialPage
    //  bên trong ngoặc nhọn ta sẽ truyền tham số với tên tham số và kiểu dữ liệu của tham số
    // VD ở trên ta dùng MaterialPage => ta đang expect là mỗi khi truyền fixture này vào test thì playwright sẽ tư động khởi tạo instance cho object MaterialPage
    materialPage: async ({page,},use) => {
    // Ở đây ta sẽ định nghĩa thuộc tính materialPage mà ta khai báo sẽ extend trong fixture test sẽ được sử dụng như thế nào    
        const materialPage = new MaterialPage(page);
        await materialPage.goToUrl();
        await expect(materialPage.page.getByText("Tài liệu học automation test")).toBeVisible();
        await use(materialPage);
        // use ở đây dung để set các dòng code ở trên sẽ chạy trước khi chạy các file test 
        // use(materialPage) tức là code trong materialPage sẽ chạy trước khi playwright vào các code bên trong các test để chạy
        console.log("Test End");
        // phần này sau use sẽ chạy sau mỗi khi code của từng file test chạy hết
        // đây chính là code teardown
        // Các dòng code SAU await use(...) trong custom fixture sẽ chạy
        // SAU KHI MỖI TEST KẾT THÚC,
        // KHÔNG đợi tất cả file test chạy xong => Tức là: per-test teardown, không phải global.
    }
})

export {test}

// file test:
import { expect } from "@playwright/test";
import { test } from "./00-fixture";

test("Test 1: registration page", async ({ materialPage }) => {
  await materialPage.page
    .getByText(`Bài học 1: Register Page (có đủ các element)`)
    .click();

  await expect(materialPage.page.getByText("User Registration")).toBeVisible();
});

test("Test 2: Product page", async ({ materialPage }) => {
  await materialPage.page.getByText(`Bài học 2: Product page`).click();

  await expect(materialPage.page.getByText("Simple E-commerce")).toBeVisible();
});
```
#### fixture nâng cao:
Nên đọc thêm về:

- Overriding fixtures
- Worker-scoped fixtures
- Automatic fixtures
- Fixture timeout
- Fixtures-options
- Execution order


#### Test generator
Test generator là gì?
Là việc thao tác bằng tay sau đó tự động gen ra code

- Trong VScode > left menu > test > chọn **record new** (ở bên dưới)
- **Record at cursor**: record và sinh ra code tại vị trí con trỏ chuột
- **Assertion**: Generate ra  các step so sánh

Sử dụng khi cần code nhanh. Hoặc khi ta lười, phải manual nhiều thì có thể dùng cái này xong sau đó gen code trước sửa lại code sau

#### Video recording
Video recording dùng để quay video toàn bộ quá trình test

Dùng để giúp debug các test một cách dễ dàng hơn
Giúp generate ra evidence nhanh chóng

Để gen ra video recording trong Playwright :

- Ta sửa trong file `playwright.config.ts` , mục use
- Các mode:

    - **off**: tắt, không record
    - **on**: bật, record tất cả các test
    - **retain-on-failure**: record hết, nhưng chỉ giữ lại test fail
    - **on-first-retry**: record những test nào fail và phải retry