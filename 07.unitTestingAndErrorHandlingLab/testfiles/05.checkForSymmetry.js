export function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

// Your tests will be supplied with a function 
// named 'isSymmetric()'. It should meet the 
// following requirements:
// •	Take an array as an argument
// •	Return false for any input that isn’t 
// of the correct type
// •	Return true if the input array is symmetric
// •	Otherwise, return false
