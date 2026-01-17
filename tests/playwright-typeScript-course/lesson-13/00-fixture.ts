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