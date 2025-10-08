
// replace(regexp | substring, replacement | replaceFunction)
// replace() will return a string that has all occurrences of substrings matching the RegExp regexp or string
// substring with a string replacement or the returned value of replaceFunction.
// Note that this does not modify the string in place, but returns the string with replacements.
// var string = "Hello, World!";
// string = string.replace("Hello", "Bye");
// console.log(string); // "Bye, World!"
// string = string.replace(/W.{3}d/g, "Universe");
// console.log(string); // "Bye, Universe!"

// replaceFunction can be used for conditional replacements for regular expression objects(i.e., with use with
// regexp).The parameters are in the following order:
// Parameter Meaning
// match the substring that matches the entire regular expressiong
// g1, g2, g3, ... the matching groups in the regular expression
// offset the offset of the match in the entire string
// string the entire string
// Note that all parameters are optional.

var string = "heLlo, woRlD!";
string = string.replace(/([a-zA-Z])([a-zA-Z]+)/g, function (match, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
});
console.log(string); // "Hello, World!"
