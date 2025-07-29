import { test, expect } from '@playwright/test';
import { apiGeneral } from '../../testData/endpoints';

test.describe.serial('Go rest', () => {

    const url = '/public/v2/users/';
    const { name, gender, email, status } = apiGeneral.userData;
    let userId = '';

    test('should get users list', async ({ request }) => {
        const response = await request.get(process.env.GO_REST_HOST + url);
        expect(response.status()).toEqual(200);
        expect(response.statusText()).toEqual('OK');
    });

    test('should successfully create a new user', async ({ request }) => {
        const requestPayload = { name, gender, email, status }
        const response = await request.post(process.env.GO_REST_HOST + url, {
            data: requestPayload,
            headers: apiGeneral.goRestHeaders
        });
        const data = await response.json();
        expect(response.status()).toEqual(201);
        expect(response.statusText()).toEqual('Created');
        expect(data).toHaveProperty('id');
        expect(data.email).toEqual(email);

        userId = data.id;
    });


    test('should get created user by id', async ({ request }) => {

        let response = await request.get(process.env.GO_REST_HOST + `/public/v2/users/${userId}`, {
            headers: apiGeneral.goRestHeaders
        })
        expect(response.status()).toEqual(200);

        const userById = await response.json();
        expect(userById.name).toEqual(name);
        expect(userById.email).toEqual(email);
        expect(userById.gender).toEqual(gender);
    });

    // get user by id 

    // update 

    // get user by id 

    // delete 

    // get user by id - 404 

    // faker 
})