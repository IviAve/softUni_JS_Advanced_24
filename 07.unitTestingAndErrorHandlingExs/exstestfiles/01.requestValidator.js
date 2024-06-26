function requestValidator(obj) {
    
    const validMetod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validUriPattern = /^[\w.]+$/g;
    const validUri = '*';
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validMessage = ['<', '>', '\\', '&', `'`, `"`];


    if (!validMetod.includes(obj.method)) {
        throw new Error ('Invalid request header: Invalid Method')
    }
    if (!obj.uri || obj.uri === validUri || !obj.uri.match(validUriPattern)) {
        throw new Error ('Invalid request header: Invalid URI')
    }
    if (!validVersion.includes(obj.version)) {
        throw new Error ('Invalid request header: Invalid Version')
    }
    // if (validMessage.includes(obj.message)) {
    //     throw new Error ('Invalid request header: Invalid Message')
    // }
    if (!obj.hasOwnProperty('message')) {
        throw new Error ('Invalid request header: Invalid Message')
    }
    for (const el of obj.message) {
        if (validMessage.includes(el)) {
            throw new Error ('Invalid request header: Invalid Message')
        }
    }
    return obj;
    //console.log(obj);
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  )
// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
//   )
  requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  )
// Write a function that validates an HTTP request object. The object has the properties method, uri, version, and message.
//  Your function will receive the object as a parameter and has to verify that each property meets the following requirements:
// •	method - can be GET, POST, DELETE or CONNECT
// •	uri - must be a valid resource address or an asterisk (*); a resource address is a 
// combination of alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
// •	version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
// •	message - may contain any number of non-special characters (special characters are <, >, \, &, ', ")
// If a request is valid, return it unchanged. 
// If any part fails the check, throw an Error with the message "Invalid request header: Invalid {Method/URI/Version/Message}". 
// Replace the part in curly braces with the relevant word. Note that 
// some of the properties may be missing, in which case the request is invalid. 
// Check the properties in the order in which they are listed above. 
// If more than one property is invalid, throw an error for the first encountered.
// Input / Output
// Your function will receive an object as a parameter. Return the same object or throw an Error as described above as an output.
