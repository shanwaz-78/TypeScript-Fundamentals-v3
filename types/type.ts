function sum(num1:number, num2: number):number {
  return num1 + num2;
}
console.log(sum(2, 4)); // -> 6 (it can contain only type of numbers)

// only string values can contain.
const designation:string = 'Developer';

const bool:boolean = true;

// there are three core types in TS is string, number, boolean.

type obj = {name:string, age:number, salary:number};

const user:obj = {
  name : 'Julia',
  age : 30,
  salary : 50000,
};
console.log(user.salary)


function example(num1:number, num2:number):number {
  return num1 + num2;
};

example(2,3);