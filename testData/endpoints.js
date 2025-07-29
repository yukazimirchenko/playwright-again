import { faker } from "@faker-js/faker";

export const apiGeneral = {
    goRestHeaders: {
        'Authorization': `Bearer 5d9aef4d4d0ffa0516c0b18110bc1410658c79da4a63fc05301951111aa80b7e`,
        'Content-Type': 'application/json'
    },
    userData: {
        "name": faker.name.firstName() + ' ' + faker.name.lastName(),
        "gender": "male",
        "email": faker.internet.email(),
        "status": "active"
    }
}