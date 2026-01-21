import { APIRequestContext, expect } from "@playwright/test";

export class TodoApiPage {
    request: APIRequestContext;
    baseUrl: string;

    constructor (request: APIRequestContext) {
        this.request = request;
        this.baseUrl = `https://material.playwrightvn.com/api/todo-app/v1`;
    }

    // get all todos item:
    async getAll() {
        const response = await this.request.get(`${this.baseUrl}/todos.php`);
        const responseJson = await response.json();

        expect(response.status()).toBe(200);
        return responseJson;
    }

    // get a single todo item:
    async getTodo (id: number) {
        const response = await this.request.get(`${this.baseUrl}/todo.php`,{
            params : {
                'id': id
            }
        });

        const responseJson = await response.json();
        return responseJson;
    }

    // create todo item:


    // update todo item:


    // update partial todo item:


    // delete todo item:
}