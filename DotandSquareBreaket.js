//Square bracket notation is particularly useful when you need to access //properties dynamically or when the property names contain spaces, special characters, or start with a number.
//Dot notation: You can access object properties using the dot (.) operator. Here's an example:
const person = {
    name: 'John',
    age: 30,
  };
  
  console.log(person.name); // Output: John
  console.log(person.age);  // Output: 30

  
  //Square bracket notation

  const person = {
    name: 'John',
    age: 30,
  };
  
  console.log(person['name']); // Output: John
  console.log(person['age']);  // Output: 30
  
  // Using variables or property names with special characters
  const propertyName = 'name';
  console.log(person[propertyName]); // Output: John
  