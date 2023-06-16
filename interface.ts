export interface User{
    name: string,
    age?: number,
    id:number,
    email: string
}

const user: User={name: 'John',id:1,email: 'vishnusatish2000@gmail.com'}


interface Employee extends User{
    salary: number
}


export interface Login{
    login():User
}


let {name,email:username}:User=user

const users:User[]=[
    {name: 'John',id:1,email: 'vishnusatish2000@gmail.com'},
    {name: 'Jane',id:2,email: 'vishnusatish2000@gmail.com'},
    {name: 'Mike',id:3,email: 'vishnusatish2000@gmail.com'},
    {name: 'Mary',id:4,email: 'vishnusatish2000@gmail.com'},
]


const [user1,user2,...restOfUsers]=users

console.log(user1,user2)
console.log(restOfUsers)