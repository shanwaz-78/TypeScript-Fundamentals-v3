let arr:string[] = ['php','java','js','ts'];
arr = ['c', 'c++'];

// we can give (any) type after that we'll able to apply all kinds of types 2. dont give any type he'll automatically undestand what's the types in it.

let arr2:any[] = ['Julia', true, 27];

type tyeOBj = {name:string, age:number}
const array:tyeOBj = {
  name : 'jul',
  age : 19,
};

const array2:tyeOBj= {
  name:'kyle',
  age:30,
}

 // In tuples we can define specific types to each element that's our tupels.
const tuples: [string,string,number,boolean] = ['Simpson','Desuza',3,true];

const arra3:String[] = ['First', 'Second', 'Third'];
