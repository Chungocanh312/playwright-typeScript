import {test, expect, Locator, Dialog, Page} from "@playwright/test"

test('Todo page', async ({page})=> {
    const playwrightPageUrl = `https://material.playwrightvn.com/`;

    const toDoPageLink = page.locator(`//a[contains(@href,'03-xpath-todo-list')]`);
    const taskNameTextbox = page.locator(`//input[@id='new-task']`);
    const addTaskButton = page.locator(`//button[@id='add-task']`);
    const deleteTaskButtons = page.locator(`//ul[@id='task-list']//button[@id='to-do-delete']`);
    const taskRow = page.locator(`//ul[@id='task-list']//li`);          
    

    await test.step('Access PlaywrightVN page', async ()=>{
        await page.goto(playwrightPageUrl);
    })

    await test.step('Click on Todo page', async ()=>{
        await toDoPageLink.click();
    })

    await test.step('Add 100 task', async ()=>{
        await addMultipleTask(100,taskNameTextbox,addTaskButton);
        const addedRows = await taskRow.count();
        console.log(addedRows)
    })

    await test.step('Delete odd task', async ()=>{
        await deleteOddTask(page,taskRow);

    })

    await test.step('Verify remaining row number', async () => {
        const remainingRows = await taskRow.count()
        console.log(remainingRows);
        await expect(remainingRows).toEqual(50);
    })
})

async function addMultipleTask (times: number, textbox : Locator, addButton : Locator) {
    for (let i = 1; i <= times; i ++) {
    await textbox.fill(`To do`);
    await addButton.click();
    }

}

async function deleteOddTask (page : Page, rows : Locator){
    const rowsNumber = await rows.count();

    for (let i = rowsNumber - 1; i >= 0 ; i--) {
        if((i + 1) % 2 === 1){
            page.once('dialog',async (dialog : Dialog) => dialog.accept());
            await rows.nth(i).locator(`#to-do-delete`).click();
        }
    }
}

// async function deleteOddTask(page: Page, rows: Locator) {
//   const count = await rows.count();

//   for (let i = count - 1; i >= 0; i--) {
//     if ((i + 1) % 2 === 1) {

//       const dialogPromise = page.waitForEvent('dialog');
//       await rows.nth(i).locator('#to-do-delete').click();

//       const dialog = await dialogPromise;
//       await dialog.accept();
//     }
//   }
// }