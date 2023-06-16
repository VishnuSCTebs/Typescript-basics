//Types of writing function in typescript

//Named fuction

function add(a:number,b:number):number{
    return a+b;
}
console.log("Add",add(1,2))

//Arrow functions
const sub=(num1:number,num2:number):number=>num1-num2
console.log("Subtract",sub(6,3))


//Function Expression
const mult=function mult(a:number,b:number):number{
    return a*b;
}


//optional,required,rest parameters



function addMultiple(num1:number,num2:number,num3?:number):number{
    return num3?num1+num2+num3:num1+num2
}

const subMultiple=(num1:number,num2:number,num3=10):number=>num1-num2-num3


function add2(num1:number,num2:number,...num3:number[]):number{
    return num1+num2+num3.reduce((a,b)=>a+b,0)
}

let numbers=[1,2,3,4,5,6,7,8,9,10]
console.log(add2(2,3,...numbers))
console.log(add2(1,2,3,4,5))



//generic function


function getResult<Type>(items:Type[]):Type[] {

    return new Array<Type>().concat(items)
}

let result1=getResult<number>([1,2,3,4,5,6,7,8,9,10])
let result2=(getResult<string>(["Hello", "World"]))

console.log(result1,result2)



