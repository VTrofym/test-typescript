// const btn = document.querySelector("button")! as HTMLInputElement;
// const inp1 = document.getElementById("num1")! as HTMLInputElement;
// const inp2 = document.getElementById("num2")! as HTMLInputElement;

// function addNumber(num1: number, num2: number) {
//   return num1 + num2;
// }

// btn.addEventListener("click", function() {
//   console.log(addNumber(+inp1.value, +inp2.value));
// });

// let arrObj: {name: string, nnn: any}[]
// arrObj = [
//   { name: "asssssss", nnn: 5 },
//   { name: "assss", nnn: 11115 }
// ]

// const obj1 = {
//   name: 'vvv',
//   age: 26
// }

// const obj:{name: string, age: number} = {
//   name: 'vvv',
//   age: 26
// }

// const obj2:{name?: string, age: number} = {
//   age: 26
// }

// const data: {
//   id: number,
//   price: number,
//   permission: string[],
//   details: {
//     title: string,
//     description?: string
//   }
// } = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     // description: 'This is awesome product!'
//   }
// }

// any
// let some:any;
// some = 10;
// some = 'Some string';
// let num: number;
// num = some;

//unknown
// let some:unknown;
// some = 10;
// num = some;

// let some:unknown;
// some = 10;
// let num: number;
// if (typeof some === 'number') {
//   num = some;
// }

//Tuple
// let fixed: [string, number];
// fixed = ['Text', 10];
// fixed.push('Add this text');

// // enum
// enum Role { ADMIN, USER };
// const person = {
//   role: Role.ADMIN,
// }
// if (person.role === Role.ADMIN) {
//   console.log('Role: ', Role.ADMIN);
// }

//union
// let union: string | number;
// union = 'Text';
// union = 10;
// union = [];

// function combine(param1: number | string, param2: number | string) {
//   if (typeof param1 === 'number' && typeof param2 === 'number') {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }
// console.log(combine('qwe', 'ewq'))

//literal
// let literal: 'first' | 'second';
// literal = 'first';
// literal = 'second';
// literal = 'third';

//! Типы для методов и функций​

// Return Type​
// function returnResult (num: number): number {
//   return num;
// }

// Void
// function print (): void {
//   console.log('Print some text');
// }

// never
// function generateError (message: string, status: number): never {
//   throw {message, status};
// }
// generateError('An error', 500);

//function
// function calc (param1: number, param2: number, callback: (num1: number, num2: number) => number):void {
//   console.log('Result:', callback(param1, param2));
// }
// calc(1,1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);

// let foo: Function
// foo=()=>{}

// let foo:()=>void
// foo=()=>{}

// function foo(par1: number, par2: number, callback: (par1:number, par2:number) => number) {
//   return callback(par1, par2)
// }


//! Custom types
//// Опишем тип
// type DatabaseDate =  {
//   id: number;
//   price: number;
//   permission: string[];
//   details: {
//     title: string;
//     description?: string;
//   }
// }
// // Назначим тип для объекта
// const data: DatabaseDate = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     description: 'This is awesome product!'
//   }
// }

// type Product= {
//   id: number;
//   title: string;
//   price: number;
//   showTitle:()=>void
// }
// const product1: Product = {
//   id: 1,
//   title: 'Fanta',
//   price: 100,
//   showTitle() {
//     console.log(this.title);
//   }
// }
// const product2: Product = {
//   id: 1,
//   title: 'Cola',
//   price: 100,
//   showTitle() {
//     console.log(this.title);
//   }
// }
// product1.showTitle()
// product2.showTitle()

//! задачи
// // let age = 50;
// let age:number = 50;
// // let name = 'Max';
// let nam:string = 'Max';
// // let toggle = true;
// let toggle:boolean = true;
// // let empty = null;
// let empty: null = null;
// // let notInitialize = undefined;
// let notInitialize:undefined = undefined;
// // let callback = (a) => { return 100 + a };
// let callback = (a: number) => number;
// callback = (a) => { return 100 + a };

//*Задавайте тип для переменной в которую можно сохранить любое значение.
let anything:any = -20;
anything = 'Text';
anything = {};

//* Kод с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
let some:unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
  str = some;
}

//* Hеизменяемый массив со строго описанными типами
// let person = ['Max', 21];
let person: [string, number] = ['Max', 21];

let strNum: string | number

//* Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let qwerty:'enable'|'disable'

//*Укажите типы для следующих функций
function showMessage(message:string):void {
  console.log(message);
}
function calc(num1:number, num2:number):number {
  return num1 + num2;
}
function customError():never {
  throw new Error('Error');
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open'|'close';
  details?: {
    createAt: string;
    updateAt: string;
  }
}

const page1:Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2:Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
