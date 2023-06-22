// union
function unionExample(year: string | number) {
  return year;
}
console.log(unionExample(2003 + "helo"));

// Intersection

type Person = {
  name: string;
  age: number;
};

type PersonAddress = {
  address: string;
  zipCode: number | string;
};

type PersonObj = Person & PersonAddress;

const PersonFullDetails: PersonObj = {
  name: "John",
  age: 20,
  address: "12, Mexicon in USA",
  zipCode: "32234211",
};

console.log(PersonFullDetails);
