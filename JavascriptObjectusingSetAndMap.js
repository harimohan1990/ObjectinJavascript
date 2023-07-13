// the Set and Map objects are built-in collections that can be used to store and manipulate data. Here's an example of creating objects using Set and Map:

// Set is used to create a collection of unique values, while Map is used to create a collection of key-value pairs. You can add, retrieve, check for existence, and remove values or key-value pairs from both Set and Map. Additionally, you can iterate over the elements using methods like forEach.

// Both Set and Map offer powerful features and methods to manipulate data efficiently, and they can be useful in various scenarios depending on your specific needs.

//Set example 

const setObj = new Set();

// Adding values to the Set
setObj.add('Apple');
setObj.add('Banana');
setObj.add('Orange');
setObj.add('Apple'); // Duplicates are ignored

// Checking the size of the Set
console.log(setObj.size); // Output: 3

// Checking if a value exists in the Set
console.log(setObj.has('Banana')); // Output: true

// Removing a value from the Set
setObj.delete('Orange');

// Iterating over the Set
setObj.forEach((value) => {
  console.log(value);
});
// Output: 'Apple', 'Banana'

// Clearing the Set
setObj.clear();
console.log(setObj.size); // Output: 0


// Map example 

const mapObj = new Map();

// Adding key-value pairs to the Map
mapObj.set('name', 'John');
mapObj.set('age', 30);
mapObj.set('city', 'New York');

// Checking the size of the Map
console.log(mapObj.size); // Output: 3

// Getting the value for a specific key
console.log(mapObj.get('name')); // Output: 'John'

// Checking if a key exists in the Map
console.log(mapObj.has('age')); // Output: true

// Removing a key-value pair from the Map
mapObj.delete('city');

// Iterating over the Map
mapObj.forEach((value, key) => {
  console.log(key, value);
});
// Output: 'name' 'John', 'age' 30

// Clearing the Map
mapObj.clear();
console.log(mapObj.size); // Output: 0
