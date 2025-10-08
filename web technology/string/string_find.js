// To search for a string inside a string, there are several functions:
// indexOf( searchString ) and lastIndexOf( searchString )

var string = "Hello, World!";
console.log( string.indexOf("o") ); // 4
console.log( string.indexOf("foo") ); // -1
console.log( string.lastIndexOf("o") ); // 8
console.log( string.lastIndexOf("foo") ); // -1

// includes( searchString, start )
console.log( string.includes("Hello") ); // true
console.log( string.includes("foo") ); // false
console.log( string.includes("o", 5) ); // true