var storedString = {}; //To store short string

function makeShort(l) { // Function to generate short string
    var size = 1;
    if (l > 1) {
        size = parseInt(l / 2);
    }
    var newString = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < size; i++)
        newString += possible.charAt(Math.floor(Math.random() * possible.length));
    return newString;
}

function shortString(str) { // Function to check if new generated string is already present or not; If not present then store new one
    var newString = makeShort(str.length);
    while (newString in storedString) {
        newString = makeShort(str.length);
    }
    storedString[newString] = str;
    return newString;
}

function getOriginalString(query) { // Function to get original string from their respective short string
    if (query in storedString) {
        return storedString[query];
    } else {
        return "Not Found!";
    }
}

var str1 = "hello world"; // Example string 1
var str2 = "hello terribly tiny tales"; // Example string 2
var shortStr1 = shortString(str1); // Short string of example string 1
var shortStr2 = shortString(str2); // Short string of example string 2
console.log(storedString); // Print all stored strings with their short strings
console.log(getOriginalString(shortStr1)); // Print original string from short string
console.log(getOriginalString(shortStr2)); // Print original string from short string