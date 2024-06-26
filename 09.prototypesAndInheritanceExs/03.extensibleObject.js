
function extensibleObject() {
  return {
      extend(template) {
          for (let key in template) {
              if (typeof template[key] === 'function') {
                  Object.getPrototypeOf(this)[key] = template[key];
              } else {
                  this[key] = template[key];
              }
          }
      }
  };
}




const myObj = extensibleObject();

const template = {
  extensionMethod: function () { },
  extensionProperty: 'someString'
}
myObj.extend(template);



// Create an object that can clone the functionality of another object into itself.
// Implement an extend(template) function that would copy all of the properties of the t
// emplate to the parent object and if the property is a function, add it to
// the object’s prototype instead.
// Input / Output
// Your code should return the extensible object instance. The extend()
// function of your object will receive a valid object as an input
//  parameter and has no output.
//  Note that __proto__ is a hidden property, representing the object’s prototype -
//   depending on your test environment, you may not have access to it directly,
//   but you can use other functions to do that.
// Hints
// To gain access to the prototype of an instance, use the Object.getPrototypeOf()
//  function. To make a function shared between all instances, it’ll have to be
//  attached to the prototype instead of the instance.


