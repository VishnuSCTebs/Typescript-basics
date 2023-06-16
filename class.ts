import { Login ,User} from "./interface"

class Employee{
    #id:number;
    name:string;
    protected address:string;


    constructor(id:number,name:string,address:string){
        this.#id=id;
        this.name=name;
        this.address=address;
    }

    get empId():number{
        return this.#id;
    }

    set empId(id:number){
        this.#id=id;

    }






    static getEmployeeCount():number{
        return 50;
    }


    getAddressWithName():string{
        return `${this.name} stays at ${this.address}`;
    }
}


class Manager extends Employee implements Login{
    constructor(id:number,name:string,address:string){
        super(id,name,address);
    }


    getAddressWithName(): string {
        return `${this.name} is a engineer at ${this.address}`;
    }

    login():User{
        return {name: 'John',id:1,email: 'vishnusatish2000@gmail.com'}

    }
}

let john=new Employee(1,"John","Ernakulam Kochi");
john.empId=200;
console.log(john.empId)

console.log(Employee.getEmployeeCount())
