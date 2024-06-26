export function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}




// You are provided with an implementation of the lookupChar() function:
// А good first step in testing a method is usually to determine all exit conditions.
//  Reading through the specification or taking a look at the implementation we 
//  can easily determine 3 main exit conditions:
// •	Returning undefined
// •	Returning an "Incorrect index"
// •	Returning the char at the specified index
// Now that we have our exit conditions we should start checking in what 
// situations we can reach them. If any of the parameters are of incorrect type, undefined should be returned. 
// If we take a closer look at the implementation, we see that the check uses 
// Number.isInteger() instead of typeof(index === number) to check the index.
//  While typeof would protect us from getting past an index that is a non-number,
//   it won’t protect us from being passed a floating-point number.
//    The specification says that the index needs to be an integer, since floating-point numbers won’t work as indexes.
// Moving on to the next exit condition - returning an "Incorrect index" 
// if we get past an index that is a negative number or an index that is outside of the bounds of the string.
// For the last exit condition - returning a correct result. A simple check for the returned value will be enough.
// With these last two tests, we have covered the lookupChar() function.

