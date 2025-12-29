import {test, expect, Page} from '@playwright/test'

test('Personal notes', async ({page}) => {
    const playwrightPageUrl = `https://material.playwrightvn.com/`;

    const personaNotesLinkPage = page.locator(`//a[contains(@href,'04-xpath-personal-notes')]`);
    const searchNotesTextbox = page.locator(`//input[@id='search']`);
    const titleNote = "click";
    const contentNote = "Hàm click dùng để thực hiện click vào các phần tử trên trang web";
    const searchResult = page.locator(`//div[@id='note-count']`);

    await test.step('Access PlaywrightVN page', async ()=>{
        await page.goto(playwrightPageUrl);
    })

    await test.step('Click on Personal page', async ()=>{
        await personaNotesLinkPage.click();
        await page.waitForLoadState('networkidle');
    })

    await test.step('Add 10 notes',async () => {
        await addMulitpleNotes(page,titleNote, contentNote );
    })

    await test.step('Search note and verify',async () => {
        await searchNotesTextbox.fill(`Một hoặc nhiều`);
        await expect(searchResult).toHaveText(`Total Notes: 0`);
    })
})

async function addMulitpleNotes (page: Page, titleNote: string, contentNote: string ) {
    const titleTextbox = page.locator(`//input[@id='note-title']`);
    const contentTextbox = page.locator(`//textarea[@id='note-content']`);
    const addNoteButton = page.locator(`//button[@id='add-note']`);
    for (let i = 1; i <= 10; i++) {
        await titleTextbox.fill(titleNote);
        await contentTextbox.fill(contentNote);
        await addNoteButton.click();
    }
}