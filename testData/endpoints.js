import { faker } from "@faker-js/faker";

export const apiGeneral = {
    goRestHeaders: {
        'Authorization': `Bearer ${process.env.TOKEN}`,
        'Content-Type': 'application/json'
    },
    userData: {
        "name": faker.name.firstName() + ' ' + faker.name.lastName(),
        "gender": "male",
        "email": faker.internet.email(),
        "status": "active"
    }
}