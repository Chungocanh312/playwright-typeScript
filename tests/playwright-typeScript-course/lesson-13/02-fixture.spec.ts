import {test} from '@playwright/test'

// fixture: page
test('Simple UI test case - page', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    // fixture page cho ta tương tác trên chỉ 1 tab của browser
    // Khi dùng page tức là ta đã vừa khởi động browser vừa bấm nút tạo 1 tab
})

// fixture: context
test('Simple UI test case - context', async ({context}) => {
    const page = await context.newPage();
    await page.goto('https://material.playwrightvn.com/');

    const page2 = await context.newPage();
    await page2.goto('https://google.com')
    // Fixture context giúp ta tạo được nhiều tab khác nhau của browser
    // Khi dùng context thì ta chỉ khởi động browser, muốn tạo tab thì phải newPage()
})

// fixture: browser
test('Simple UI test case - browser', async ({browser}) => {
    const context1 = await browser.newContext()
    const page1 = await context1.newPage();
    await page1.goto('https://material.playwrightvn.com/');

    const context2 = await browser.newContext()
    const page2 = await context2.newPage();
    await page2.goto('https://material.playwrightvn.com/');
    // Fixture browser sẽ giúp chúng ta có thể tạo hẳn 2 cửa sổ browser 

})

// fixture: browserName
// Dùng để in ra trình duyệt mình đang chạy auto là trình duyệt gì
test(' UI test case - browserName', async ({browserName}) => {
    console.log(browserName);
})

    // VD:
test('handle browser specific', async ({ page, browserName }) => {
  if (browserName === 'webkit') {
    // Safari có hành vi khác
  }

  if (browserName === 'firefox') {
    // Firefox xử lý khác
  }
});