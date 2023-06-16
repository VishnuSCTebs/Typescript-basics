// String
let fname:string
let lname:string

fname="Vishnu"
lname="Satish"

console.log(fname.toUpperCase(), lname.toUpperCase())

//Number

let age:number
age=parseInt("25")

console.log(age)

//Boolean

let isValid:boolean=false
console.log(isValid)

//Array

let empList:string[];
empList=["Hello","World"]
let numList:Array<number>;
numList=[1,2,3,4,5,6,7,8,9,10,11]

let newNum=numList[0]

let results=numList.filter((e)=>e<5)
let result=numList.find((num)=>num===2)

let sum=numList.reduce((acc,num)=>acc+num)

let emp=empList.find((e)=>e=="Hello")
console.log(sum)


//enum

const enum Color{
    Red,
    Green,
    Blue
}

let c:Color=Color.Blue

//tuples

let swapNumbs:[firstNumber:number,secondNumber:number];
function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]

}


swapNumbs=swapNumbers(1,2)
console.log(swapNumbs[1])

//any

let department:any

department="Computer Science"