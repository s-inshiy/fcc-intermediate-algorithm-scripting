// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

// Object.keys(bob).length should return 6.
// bob.getFirstName() should return "Bob".
// bob.getFullName() should return "Bob Ross".

var Person = function (firstAndLast) {
  this.firstAndLast = firstAndLast.split(" ");

  this.getFirstName = function () {
    return this.firstAndLast[0];
  };

  this.getLastName = function () {
    return this.firstAndLast[1];
  };

  this.getFullName = function () {
    return this.firstAndLast.join(" ");
  };

  this.setFirstName = function (name) {
    this.firstAndLast[0] = name;
  };

  this.setLastName = function (name) {
    this.firstAndLast[1] = name;
  };
};

Person.prototype.setFullName = function (name) {
  this.firstAndLast = name.split(" ");
};

var bob = new Person("Bob Ross");
bob.setFirstName("Haskell");

console.log(bob.getFullName());
