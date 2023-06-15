var PersonObj = { name: "John Byron", age: 29 };
console.log(PersonObj);
var PersonObj2 = { name: "Kyle Simpson", age: 28 };
console.log(PersonObj2);
// class intstance
var PersonClass = /** @class */ (function () {
    function PersonClass(name, age) {
        this.name = name;
        this.age = age;
    }
    return PersonClass;
}());
var newPerson = new PersonClass("Mike North", 20);
console.log(newPerson);
var obj = { name: "Will Sentence", emurable: true };
console.log(obj);
// map, filter
var arr = [1, 2, 3, 4];
var result = arr.map(function (elem) { return elem * 3; });
console.log(result);

