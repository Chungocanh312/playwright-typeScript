### POM API && OTHER POM Styles

#### POM cho API
- Tổ chức test API ở dạng POM để dễ quản lý hơn
- Concept tương tự POM UI:

    - Tên class: TodoApiPage
    - Thuộc tính: request:
    APIRequestContext

```typescript
import { APIRequestContext } from '@playwright'

export class TodoApiPage {
    request: APIRequestContext;

    constructor (request: APIRequestContext) {
        this.request = request;
    }

}

```

#### Một số biến thể của POM
##### POM API nâng cao:
- Lưu baseURL để khi gọi API ngắn gọn hơn
- Thêm thuộc tính token để lưu lại token với các API dùng token

##### POM Style:
- Một vài styles viết POM khác:

1. **Style** mà chúng ta đã sử dụng ở bên trên được gọi là stype kế thừa, vì page phía sau sẽ kế thừa page phía trước
```typescript
class ProductPage extends HomePage {

}

const productPage = new ProductPage();

productPage.navigateTo("product"); // Hàm navigate là ở trong class homePage nhưng productPage vẫn sử dụng đc
productPage.addToCart("product1")
```

2. Dùng class **PomManager** để chứa tất cả các khởi tạo page (Giống pageGenerator trong selenium)
        - Quản lý nhiều page object
        - Các page objects có thể được tạo và truy cập từ 1 nơi duy nhất
        - Các page object độc lập với nhau
        - Các page chỉ được tạo khi cần thiết

```typescript
// VD:
import { Page } from '@playwright/test';
import { LoginPage } from "./00-pom-login";
import { DashboardPage } from "./00-pom-dashboard";

export class PomManager {
    page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    getLoginPage () {
        return new LoginPage(this.page);
    }

    getDashboardPage () {
        return new DashboardPage(this.page);
    }
}
```
3. return other POM

```typescript
const homePage = new HomePage();

const productPage = homePage.navigateTo("product_page");
productPage.addToCart("product1");

// VD:
// Tạo class HomePage
import {Page} from '@playwright/test';
import { ProductPage } from './02-product.page';

export class HomePage {
    page: Page

    constructor (page: Page) {
        this.page = page;
    }

    async navigateToProductPage () {
        await this.page.locator(``).click();
        return new ProductPage(this.page)
    }
}

// Tạo class ProductPage:
import {Page} from '@playwright/test'

export class ProductPage {
    page: Page

    constructor (page: Page) {
        this.page = page;
    }

    async addProductToCart () {
        await this.page.locator(``).click;
    }
}

// File test: 
import {test,expect} from '@playwright/test';
import { HomePage } from './01-home.page';

test ('Demo return other POM styles', async ({page}) => {
    const homePage = new HomePage(page);
    const productPage = await homePage.navigateToProductPage()
    await productPage.addProductToCart();
});
```

#### Async && await:
1. Async && await là gì?
- là 1 cách viết code trong JS/ TS để xử lý các tác vụ bất đồng bộ (asynchronous) một cách dễ đọc hơn
- **async**: đặt trước function để biến nó thành async function (Trả về Promise)
- **await**: đặt trước một promise để "chờ" nó hoàn thành trước khi chạy tiếp

2. Tại sao mình cần async, await?
- Cơ chế hoạt động của JS: Event loop single thread
    
    - Event loop: nghĩa là khi xử lý task thì bộ nhớ sẽ xem các task nào phải chờ thì sẽ đẩy sang 1 bên và xử lý các task tiếp theo (VD: các action liên quan tới gọi API (network), IO (input output - vd như đoc 1 file trên máy tính)). Giúp cho việc xử lý nhiều task trở nên nhanh hơn, tối ưu hơn => xử lý các việc theo dạng bất đồng bộ
    - Tuy nhiên với auto, thì phần lớn các hành động ta cần xử lý tuần tự, đồng bộ chứ không phải theo dạng bất đồng bộ được => phải dùng async await

    - VD: vào 1 trang đăng ký => fill thông tin

        1. Vào trang đăng ký cần thời gian chờ nó load và hiển thị ra các fill để điền => đầy được coi là 1 thao tác bất đồng bộ
        2. Fill thông tin vào các field sau khi đã hiển thị thành công

- Các thao tác trong automation network/ IO:
    - Mở trang web: mất vài giây
    - Tìm element: cần chờ element xuất hiện
    - Click button: phải chờ animation
    - Gọi API: chờ server phản hồi

- Làm thế nào để mình biết được cần async await => hover vào 1 cái function nào đó và thấy nó hiển thị Promise => cần await. Promise ở đây được hiểu là 1 lời hứa sẽ hoàn thành function => nếu muốn ta muốn chờ lời hứa đó hoàn thành => thêm await ở trước

- Cách dùng async await cho đúng:

```typescript
// Luôn dùng await với:
page.goto()
page.click()
page.fill()
page.waitForSelector()
expect().assertion // khi ta truyền 1 locator nào đó vào expect và tương tác với locator đó => phải await cho nó
// Bất kì method nào trả về Promise

// Không dùng await với:
page.locator() - vì nó chỉ khởi tạo locator chứ chưa tương tác
// Các biến thông thường
// Các action cần đồng bộ - Synchronous operations

```