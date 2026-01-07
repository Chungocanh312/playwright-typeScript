### GIT & CSS SELECTOR &&& PLAYWRIGHT SELECTOR

#### GIT
- Merge
- Conflict
- Rebase
- Squash

Git là gì? git dùng để làm việc nhóm . Các member làm các tas riêng rồi gộp công việc vào
Trong git, gộp vào còn gọi là ***merge***

Khi gộp vào thì có nhiều tình huống xảy ra

VD: 2 người cùng sửa 1 vị trí

=> Trong git gọi đó là ***conflict*** 

Khi ta làm việc mà lại tạo ra nhiều commit nhỏ, ta muốn gom nhóm lại thành 1 commit để tránh cho việc cây commit bị nhiều gây loạn

=> Trong git gọi đó là ***squash***

#### MERGE:
Merge code =  gộp code từ nhánh A vào 1 nhánh B
#### MERGE STRATEGY:
#### 1. Fast-forward merge
- Khi merge sẽ không tạo ra commit merge
- Xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo nhánh feature

`git merge <tên nhánh cần gộp vào>`

=> sau khi đã merge xong thì ta nên xóa nhánh đã được merge đi
`git branch -D <Tên nhánh cần xóa>`

Lưu ý: Ta luôn nên tạo nhánh trước -> implement code -> tạo commit
=> để commit nằm đúng nhánh, tránh commit vào nhầm vào main, lịch sử git rõ ràng

Vì khi commit được tạo trên main => khi tạo nhánh mới sẽ mang theo commit đó => main vẫn bị dính commit đó

Tuy nhiên: Sau khi git init => ta bắt buộc phải có ít nhất 1 commit thì remote mới nhận repo, không có commit thì sẽ không push được j cả . Vì khi git init => chỉ tạo repo local (tạo thư mục .git) nhưng chưa có commit thì chưa có branch thực sự, không có j để push

Ngoài ra, sau khi khởi tạo project và tạo 1 nhánh mới => nhánh đó sẽ là nhánh duy nhất và sẽ không có nhánh main dù đã setup nhánh default là main. Ta phải có commit sau khi init thì nhánh main mới đc tạo

#### 2. Three ways merge
- Khi merge có tạo ra commit merge
- Xảy ra khi ban muốn merge feature branch và branch chính. Mà lịch sử của 2 branch này đã có sự khác nhau 

VD: Từ main ta checkout ra 2 nhánh nữa
Nhánh A và nhánh B

1. Nhánh A : code tạo commit sau đó merge vào main => fast-forward merge
2. Nhánh B: code tạo commit sau đó cũng merge vào main => khi này lịch sử commit của main đã thay đổi so với lúc checkout sang nhánh B => nó tạo thêm 1 commit để đánh dấu rằng tại thời điểm merge B vào A thì lịch sử của main đã thay đổi so với lúc tạo B

Lưu ý: sau khi gõ lệnh merge B => sẽ hiển thị giao diện Vim => ta cần xử lý như sau:
- Bấm ESC
- gõ :wq (chỉ cần gõ thêm wq vì màn hình đã hiện sẵn :)
- Bấm enter 

Khi này sẽ giao diện Vim => commit B sẽ được merge vào main

**Ngoài ra, để tránh trường hợp trên (tạo commit dư - merge commit) => nhánh B nên cập nhật lại lịch sử từ main trước khi tạo commit mới (Update branch from base branch)**
=> ***rebase***

#### REBASE:
Lệnh

`git re-base <tên nhánh>`

Cập nhật nhánh gốc vào nhánh feat trước khi tạo commit trên nhánh feat

#### SQUASH
Lệnh

`git re-base -i HEAD~<số commit>` 

VD:
git rebase -i HEAD~2
👉 mở ra 2 commit GẦN NHẤT để squash.

✔ Vì HEAD trỏ vào commit mới nhất

✔ HEAD~2 nghĩa là: lùi 2 commit từ HEAD

✔ Git sẽ lấy tất cả commit sau mốc đó (không bao gồm mốc)

C1 --- C2 --- C3 --- C4 (HEAD) => sẽ gộp 2 commit C3 và C4

sau đó sẽ chuyển vào chế VIM => trên cùng sẽ hiển thị các commit được gom

=> Thường là ta sẽ gom các commit ở dưới vào commit trên cùng 
=> bấm i để chuyển sang chế độ INSERT
=> sau đó xóa chữ pick ở trước các commit cần gom và thay bằng chữ s
=> ESC => : => wq => enter
=> chuyển sang chọn commit message
=> chọn cái nào thì comment (#) các message còn lại 
=> hoặc có thể update commit message giữ lại
=> ESC => : => wq => enter

#### CONFLICT
- Là xung đột. Xung đột xảy ra khi 2 người cùng sửa 1 file, sau đó merge vào với nhau
- Không xảy ra xung đột khi thay đổi xảy ra ở các file khác nhau

` <<<<<<< HEAD`

` a simple line`

`=======`

` a new line`

`>>>>>>> feature/2`

Phần nằm giữa <<<< HEAD và ==== là các nội dung đang ở nhánh của mình

Phần nằm giữa ==== và >>>> (branch name) là nội dùng của nhánh mình muốn merge vào

Khi này ta xử lý conflict bằng cách:

Check conflict xem bỏ phần nào , giữ phần nào

=> xóa các dấu <<<<< HEAD (current change) / >>>>> (branch name) (incomming change) / =====

sau đó `git add .` và `git commit -m "..."` 

### CSS SELETOR & PLAYWRIGHT SELETOR

#### CSS SELETOR
- Cú pháp đơn giản, ngắn gọn hơn xpath
- Không sử dụng được cho các case phức tạp. VD content text

#### Playwright seletor:
- Được Playwright recomment sử dụng

```javascript
page.getByRole()
page.getByText()
page.getByLabel()
page.getByPlaceHolder()
page.getByAltText()
page.getByTitle()
page.getByTestId()

// 1. page.getByRole() : Tìm element theo aria role (Vai trò, ngữ nghĩa của element)
// Các role phổ biến:
// button: nút bấm
// link: liên kết
// textbox: ô nhập text
// checkbox: hộp kiểm
// radio: nút radio
// heading: tiêu đề
// listitem: các mục trong danh sách

// VD:
// Tìm button có attribute text "Submit"
await page.getByRole('button',{name: 'submit'}).click();

// Tìm link có attribute text "learn more":
await page.getByRole('link',{name: 'learn more'}).click();

// Tìm heading có level 1: (đây là cấp độ của thẻ h)
await page.getByRole('heading',{level: 1}).textContent();

// Tìm checkbox có attribute đã được check:
await page.getByRole('checkbox',{checked: true});

// name => dùng cho tên hiển thị (accessible) - tên hiển thị thẻ đó có ở trên UI
// level => dùng cho thẻ heading
// checked => dùng cho thẻ checkbox
// selected => dùng cho dropdown select option
// expanded => dùng cho accordion
// disabled => dùng cho trạng thái

// pressed => dùng cho toggle => ít dùng
// includeHidden => dùng cho element ẩn => ít dùng
// exact => dùng cho match tuyệt đối => ít dụng, chỉ dùng khi bắt buộc

// Với name thì ở đây name = accessible name của element. Tức là tên mà screen reader đọc lên cho element
// Thứ tự ưu tiên để playwright lấy ra accessible name
// 1. aria-label
// 2. aria-lableledby
// 3. Text content bên trong element
// 4. Một số thuộc tính đặc biệt (alt, title, value...)
// VD: 
<h1>Personal Notes</h1> 
=>  Accessible name = "Personal Notes"

<h1 aria-label="My Notes"></h1> 
<span id="title">Personal Notes</span>
=> Accessible name = "My Notes" không phải = "Personal Notes"

<h1 aria-labelledby="title"></h1>
<span id="title">Personal Notes</span>
=> Accessible name = "Personal Notes" 
Vì thẻ h1 dùng aria-labelledby = "title" => sẽ lấy text từ thẻ nào có id = title

<h1>
  <span>Personal</span>
  <span>Notes</span>
</h1>
=> Accessible name = "Personal Notes"

test('Demo playwright seletor 4', async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/01-xpath-register-page.html`);
    await page.getByRole("radio",{name: "Male", exact : true}).check(); 
    // dùng exact để chỉ tìm đúng tên = Male, nếu không nó sẽ lấy cả Female trên UI
    await expect(page.getByRole("radio",{name: "Female"})).toBeChecked();
})

test('Demo playwright seletor 5', async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/12-dom-nested.html`);
    const phoitemText = await page.getByRole("listitem").filter({hasText: "Ph"}).textContent();
    // Với role = listitem không bắt buộc phải dùng với filter
    // Tuy nhiên với trường hợp role listitem trả ra toàn bộ các item có trên page thì phải dùng cùng với filter để trách các strict mode
    console.log(phoitemText)
})

// 2. page.getByText():
// Tìm element theo text hiển thị trên trang 
page.getByText(text,options);

// Tìm chính xác text:
await page.getByText('Welcome back').click();

// Tìm text có chứa (substring):
await page.getByText('Welcome', exact: false).click();

// Dùng regex:
await page.getByText(/welcome/i); // case insensitive

// Kết hợp với các locator khác
await page.locator('div').getByText('Hello');
// các locator có thể nối nhau bằng dấu . Được gọi là chaining locator (chain) 
// => Giống như gọi hàm gọi biến trong 1 class

// 3. page.getByLabel(): Tìm input element thông qua text của thẻ <label> được liên kết với nó 
page.getByLabel(text,options)

`<!-- HTML -->`
`<label for = "emal">Email address</label>`
`<input id = "email" type = "email"</input>`

// Tìm input thông qua label:
await page.getByLabel('Email address').fill(email);

// Tìm input dựa trên 1 phần text trong thẻ label
await page.getByLabel('email', {exact: false}).fill(email);

// VD: 
test('Demo playwright seletor 6', async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/01-xpath-register-page.html`);
    await page.getByLabel("Username:").fill("Chu Ngoc Anh");
})

// 4. page.getByPlaceholder():
// VD:
`<input type="email" placeholder="name@example.com"/>`

await page.getByPlaceholder('name@example.com').fill(email);

// 5. page.getByTitle():
// VD:
`<span title='Issue count'>25 issues</span>`

await page.getByTitle('Issue count');

// 6. page.getByTestId():
// Mặc định dùng cho thuộc tính "data-testid"
//VD:
`<button data-testid = "directions">Itineraire</button>`
`<button id = "directions">Itineraire</button>`

await page.setTestIdAttribute('id'); // Dòng này để nói Nói với Playwright rằng: “Từ giờ trở đi, hãy coi attribute id là test id
await page.getByTestId('directions').click(); // Bắt được button đầu tiên, không bắt được button thứ 2 nếu không có dòng lệnh trên
```

