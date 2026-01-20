import { test, expect } from '@playwright/test';

test('Get all todo', async ({ request }) => {
    const allTodoListRequest = await request.get(`https://material.playwrightvn.com/api/todo-app/v1/todos.php`);
    const allTodoListResponse = await allTodoListRequest.json();
    console.log(allTodoListResponse)

    expect(allTodoListRequest.status()).toBe(200);
})