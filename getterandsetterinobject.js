const person = {
    firstName: 'John',
    lastName: 'Doe',
    
    // Getter
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    
    // Setter
    set fullName(name) {
      const parts = name.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  // Get the value using the getter
  console.log(person.fullName); // Output: "John Doe"
  
  // Set the value using the setter
  person.fullName = 'Jane Smith';
  console.log(person.firstName); // Output: "Jane"
  console.log(person.lastName); // Output: "Smith"
  
//   In the above example, the person object has two properties: firstName and lastName. It also defines a getter (fullName) and a setter (fullName). The getter concatenates the firstName and lastName properties to form the full name. The setter splits the name parameter into firstName and lastName and assigns them accordingly.

// To access the getter, you simply reference the property as if it were a regular property (person.fullName). To use the setter, you assign a value to the property (person.fullName = 'Jane Smith'). Behind the scenes, the getter and setter functions are called, allowing you to customize the behavior of property access.

// Getters and setters provide a way to encapsulate and control access to object properties. They allow you to perform custom operations when getting or setting a property value.