### Playwright Test

#### Test group

Test suite = tập hợp test cases
thường để nhóm các test case vào 1 group

=> Dùng từ khóa describe

Giúp quản lý các test case dễ dàng hơn

```javascript
test.describe("Suite name", async () => {
  test("testcase name", async ({ page }) => {
    test.step("step 1 name", async () => {
      //code...
    });

    test.step("step 2 name", async () => {
      //code...
    });
  });
});
```

#### Hooks

Các thời điểm chạy test:

- Trước khi chạy :before Test
- Trong khi chạy : Test
- Sau khi chạy : after Test

=> Playwright có 4 hooks như sau:

- beforeAll: setup 1 step nào đó trước khi tất cả các test được chạy
- beforeEach: setup 1 step nào đó trước khi mỗi test chạy
- afterEach: setup 1 step nào đó sau khi mỗi test chạy
- afterAll: setup 1 step nào đó sau khi tất cả test chạy

VD thực tế: kiểm tra tính năng danh mục

1. Pre-condition: (bước setup cho test case)

- Tạo tài khoản 1 lần duy nhất để dùng cho các test cases dưới đây => ***Dùng beforeAll***
- Đăng nhập tài khoản (do trong auto, mỗi lần mở 1 trình duyệt lên => sẽ mở 1 incognito window => phải đănh nhập lại => dùng beforeEach)

2. Test steps:
    
    2.1 Test tạo danh mục thành công

    - Tạo 1 danh mục.
    - Kiểm tra danh mục xuất hiện ngoài storefront

    2.2 Testcase sửa danh mục thành công

    - Sửa danh mục đã tồn tại
    - Kiểm tra updated danh mục xuất hiện ngoài storefront

    2.3 Testcase sửa handle của danh mục thành công:

    - ....


3. Post conditions: (bước teardown)

- Xóa danh mục
- Xóa tài khoản (chạy 1 lần duy nhất => beforeAll)

Lưu ý: fixture {page} sẽ chỉ đưa vào trong beforeAll/ afterAll/ beforeEach/ afterEach / test....

Không đưa fixture {page} vào test.describe / test.step

#### Demo:

```javascript
import { test } from "@playwright/test";

test.describe("Material site", async () => {
// Nên đưa tất cả các hook có trong test suite lên đầu    
  test.beforeAll(async ({ page }) => {
    await page.goto("http://playwrightvn.com");
  });

  test.afterAll(async ({ page }) => {
    await page.goto("http://playwrightvn.com");
  });

  test.beforeEach(async ({ page }) => {
    await test.step("Access Material page", async () => {
      await page.goto("https://material.playwrightvn.com/");
    });
  });

  test.afterEach(async ({ page }) => {
    await test.step("close browser", async () => {
      await page.close();
    });
  });

  test("User registration page", async ({ page }) => {
    await test.step("Click to User registration page link", async () => {
      await page
        .locator(`//a[contains(@href,'01-xpath-register-page')]`)
        .click();
    });
  });

  test("Product page", async ({ page }) => {
    await test.step("Click to product page link", async () => {
      await page
        .locator(`//a[contains(@href,'02-xpath-product-page')]`)
        .click();
    });
  });
});
// Khi chạy test cho suite trên:
// 1. Mở trình duyệt và đi tới trang http://playwrightvn.com
// 2. Tiếp tục đi tới trang https://material.playwrightvn.com/
// 3. Click vào user registration page và access vào user registration page
// 4. Close trình duyệt
// 5. Mở lại trình duyệt và đi tới trang https://material.playwrightvn.com/
// 6. Click vào product page link và access vào product page
// 7. Close trình duyệt
// 8. Mở lại trình duyệt và đi tới trang http://playwrightvn.com
```
#### Assertion:
Là bước khẳng định hoặc xác nhận 1 diều gì đó. Đây là những câu lệnh để kiểm tra xem 1 output nào đó có đúng như mong đợi hay không
Nếu không có assertion thì sẽ các testcase đều trở thành vô nghĩa

Với playwright thì chúng ta sẽ assert thông qua hàm expect

```typescript
import {test,expect} from '@playwright/test';

test("Test 01", async ({page}) => {
    // Khẳng định rằng title trang phải là homepage
    await expect(page).toHaveTitle('Home page');

    // Khẳng định rằng: button phải visible (nhìn thấy được)
    await expect(page.locator('button')).toBeVisible();

    // Khẳng định rằng: giá trị phải bằng 5
    expect(2 + 3).toBe(5);
})
```

Các loại Assertion:
- Generic Assertion (Lấy từ thư viện expect)

    - expect (giá trị) = (giá trị)

VD: 

    - expect(value).toBe(expected);
    - expect(array).toHaveLength(6);
    - expect(string).toContain('text');

```typescript
import {test,expect} from '@playwright/test';

test("Demo expect",async () => {
    expect(1 + 2).toEqual(3);
})

// expect array length:
const arr = [1,2,3];
expect(arr).toHaveLength(3);

// expect string contains:
const str = "Hello Vietnam"
expect(str).toContain('Vietnam');

test("Material page",async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/`);
    const title = await page.title();
    expect(title).toContain(`Playwright Việt Nam`)
})
```

- Web-first Assertions (auto waiting)
    - expect (phần tử) có giá trị

Dùng cho các element trên web, tự động chờ cho đến khi điều kiện so sánh được thỏa mãn
Trong lúc implement code, cố gắng sử dụng web-first assertion nhiều nhất có thể để các test case có thể chạy ổn định và đáng tin cậy

***Flaky*** : các test case lúc passed lúc failed
#### Các web-first assertion phổ biến
```typescript
// Element State
// Kiểm tra visibility:
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();

// Kiểm tra enabled/ disabled:
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();

// Kiểm tra checked (checkbox/ radio)
await expect(locator).toBeChecked();

// Kiểm tra focus
await expect(locator).toBeFocused();

// Text and content:
// Có chứa text:
await expect(locator).toContainText('Hello');

// Text chính xác:
await expect(locator).toHaveText('Welcome');

// Text khớp regex:
await expect(locator).toHaveText(/welcome/i);

// Kiểm tra nhiều elements:
await expect(locator).tohaveText(['Item1','Item2']);

// Attributes & Properties:
// Kiểm tra attribute:
await expect(locator).tohaveAttribute('href', '/about');

// Kiểm tra class:
await expect(locator).toHaveClass('active');
await expect(locator).toHaveClass(/btn-primary/);

// Kiểm tra value (input fields)
await expect(locator).toHaveValue('john@example.com');

// Kiểm tra count
await expect(locator).toHaveCount(5);

// Page Assertion
// Url:
await expect(locator).toHaveURL(`https://example.com/`);
await expect(locator).toHaveURL(`/.*checkout/`);

// title:
await expect(locator).toHaveTitle('My app');
```
