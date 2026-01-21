import { test, expect } from '@playwright/test';
import { TodoApiPage } from './03-todo.api.page'; 

test('Get all todo', async ({ request }) => {
    const todoApiPage = new TodoApiPage(request);
    const responseJson = await todoApiPage.getAll();

    expect(responseJson.todos.length).toEqual(59);
})

test('Get single todo', async ({ request }) => {
    const todoApiPage = new TodoApiPage(request);
    const responseJson = await todoApiPage.getTodo(50);

    console.log(responseJson);
    expect(responseJson.todo.title).toContain("documentation");
})