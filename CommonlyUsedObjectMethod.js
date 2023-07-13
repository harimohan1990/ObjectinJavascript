//Object.keys(obj): Returns an array of the object's own enumerable property names

const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys); // Output: ['a', 'b', 'c']

//Object.values(obj): Returns an array of the object's own enumerable property values.

const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values); // Output: [1, 2, 3]

// Object.entries(obj): Returns an array of the object's own enumerable key-value pairs as arrays.

const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]

//Object.assign(target, ...sources): Copies the values of all enumerable properties from one or more source objects to a target object.

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const merged = Object.assign(target, source);
console.log(merged); // Output: { a: 1, b: 3, c: 4 }

//Object.hasOwnProperty(prop): Returns a boolean indicating whether the object has the specified property as its own property.
const obj = { a: 1, b: 2 };
console.log(obj.hasOwnProperty('a')); // Output: true
console.log(obj.hasOwnProperty('c')); // Output: false

//Object.freeze(obj): Freezes an object, preventing new properties from being added to it and existing properties from being modified or removed.
const obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.c = 3;
console.log(obj); // Output: { a: 1, b: 2 }

//Object.seal(obj): Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
const obj = { a: 1, b: 2 };
Object.seal(obj);
obj.c = 3;
console.log(obj); // Output: { a: 1, b: 2 }
