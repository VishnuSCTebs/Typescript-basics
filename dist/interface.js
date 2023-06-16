"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = { name: 'John', id: 1, email: 'vishnusatish2000@gmail.com' };
let { name, email: username } = user;
const users = [
    { name: 'John', id: 1, email: 'vishnusatish2000@gmail.com' },
    { name: 'Jane', id: 2, email: 'vishnusatish2000@gmail.com' },
    { name: 'Mike', id: 3, email: 'vishnusatish2000@gmail.com' },
    { name: 'Mary', id: 4, email: 'vishnusatish2000@gmail.com' },
];
const [user1, user2, ...restOfUsers] = users;
console.log(user1, user2);
console.log(restOfUsers);
