
class Request{

    constructor(method, uri, version, message){

        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);




// Write a class Request that holds data about an HTTP request. It has the following properties:
// •	method (String)
// •	uri (String)
// •	version (String)
// •	message (String)
// •	response (String)
// •	fulfilled (Boolean)
// The first four properties (method, uri, version, message) are set through the constructor, 
// in the listed order. The response property is initialized to undefined and the
//  fulfilled property is initially set to false.
// Constraints
// •	The constructor of your class will receive valid parameters. 
// •	Submit the class definition as is, without wrapping it in any function.

// Note the input parameters have the same names as the instance variables -
//  this isn’t necessary, but it’s easier to read. There will be no name collision because 
//  this identifier tells the interpreter to look for a variable in a different context, 
//  so this.method is not the same as the method.
// Our class is complete and can be submitted to Judge.

