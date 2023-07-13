

  // Clone the object using the spread operator

  // Clone the object using Object.assign()

  // Clone the object using JSON.parse() and JSON.stringify()


let originalObject = {
    name: 'Jay',
    age: 27,
    city: 'Delhi'
  };
  
  // Clone the object using the spread operator
  let clonedObject = { ...originalObject };
  
  console.log('Original:', originalObject);
  console.log('Cloned:', clonedObject);

// or

// Sample object
let originalObject = {
    name: 'Jay',
    age: 27,
    city: 'Delhi'
  };
  
  // Clone the object using Object.assign()
  let clonedObject = Object.assign({}, originalObject);
  
  console.log('Original:', originalObject);
  console.log('Cloned:', clonedObject);

//   or


// Sample object
let originalObject = {
    name: 'Jay',
    age: 27,
    city: 'Delhi'
  };
  
  // Clone the object using JSON.parse() and JSON.stringify()
  let clonedObject = JSON.parse(JSON.stringify(originalObject));
  
  console.log('Original:', originalObject);
  console.log('Cloned:', clonedObject);
  
  

  