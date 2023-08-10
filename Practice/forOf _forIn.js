const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value);
}// array

//object

const person = {
    name: 'John Doe',
    age: 30,
    job: 'developer'
  };
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }

