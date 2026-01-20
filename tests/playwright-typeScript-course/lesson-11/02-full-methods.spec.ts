import { test } from "@playwright/test";

test.describe("", async () => {
  let id: number;

  test("create a todo", async ({ request }) => {
    const createTodo = await request.post(
      "https://material.playwrightvn.com/api/todo-app/v1/todo.php",
      {
        data: {
          title: "Complete project documentation AnChu",
          description: "Write comprehensive docs for the API",
          status: "in_progress",
          priority: "medium",
          due_date: "2026-10-25T17:00:00",
          user_id: 1,
        },
      },
    );

    const newTodoResponse = await createTodo.json();
    console.log(newTodoResponse);
    id = newTodoResponse.todo.id;
    console.log(id);
  });

  test("Delete newly created to", async ({ request }) => {
    const deleteRequest = await request.delete(
      `https://material.playwrightvn.com/api/todo-app/v1/todo.php`,
      {
        data: {
          id: id,
        },
      },
    );

    const deleteResponse = await deleteRequest.json();
    console.log(deleteResponse);

    const getListToDo = await request.get(
      "https://material.playwrightvn.com/api/todo-app/v1/todos.php",
    );
    const todoListResponse = await getListToDo.json();
    console.log(todoListResponse);
  });
});
