import { test, expect } from "@playwright/test";

test("Authentication", async ({ request }) => {
    const baseUrl = `https://material.playwrightvn.com/api/user-management/v1`;

    // Login -> get token
    const loginResponse = await request.post(`${baseUrl}/login.php`, {
        data: {
            email: "admin@example.com",
            password: "password",
        },
    });

    const loginRepsonseJson = await loginResponse.json();
    console.log(loginRepsonseJson)
    const token = loginRepsonseJson.data.token
    console.log(token)

    // Call api with token
    const userResponse = await request.get(`${baseUrl}/users.php`,{
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })

    const userResponseJson = await userResponse.json();
    console.log(userResponseJson);
})
