interface Person {
  name: string;
  age: number;
}

const PersonObj: Person = { name: "John Byron", age: 29 };
console.log(PersonObj);

const PersonObj2: Person = { name: "Kyle Simpson", age: 28 };
console.log(PersonObj2);

// class intstance
class PersonClass implements Person {
  constructor(public name : string, public age : number) {}
}

const newPerson = new PersonClass('Mike North', 20)
console.log(newPerson)

// another example
type Person2 = { name: string; emurable: boolean };

const obj: Person2 = { name: "Will Sentence", emurable: true };
console.log(obj);

// map, filter

const arr:any = [1,2,3,4];
const result = arr.map(elem => elem * 3);
console.log(result)
