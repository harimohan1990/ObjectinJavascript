
let person = {
    name: 'Hari',
    age: 27,
    city: 'Bangalore'
  };
  
  // Using hasOwnProperty()
  console.log(person.hasOwnProperty('age')); // true
  console.log(person.hasOwnProperty('gender')); // false
  
  // Using 'in' operator
  console.log('age' in person); // true
  console.log('gender' in person); // false
  