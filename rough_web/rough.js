// console.log("hello ji")
// let arr = [1,2,3,4,5];
// for (let i in arr) {
//     arr[i]=i+1
//     console.log(i)
// }
// // for (let i of arr) {
// //     console.log(i)
// // }
// const map = new Map()
//  .set('abc', 1)
//  .set('def', 2)
// for (const iteration of map) {
//  console.log(iteration) //will log ['abc', 1] and then ['def', 2]
// }

// //object
// const someObject = { name: 'Mike' };
// for (let key of Object.keys(someObject)) {
//  console.log(key + ": " + someObject[key]);
// }
// // for in
// var object = {"a":"foo", "b":"bar", "c":"baz"};  
// // `a` is inaccessible
// Object.defineProperty(object , 'b', {
//  enumerable: false,
// });
// for (var key in object) {
//  if (object.hasOwnProperty(key)) {
//  console.log('object.' + key + ', ' + object[key]);
//  }
// }

let sigma = document.getElementById("button");


sigma.addEventListener("dblclick", () => {
  console.log("hello ji");
});

let alpha = document.getElementById("maa");


let regex = new RegExp("hello");


alpha.addEventListener("input", () => {
  let text = alpha.value;
  let match = regex.exec(text);
  console.log(match);

  // Display result in <p id="ma">
  document.getElementById("ma").textContent =
    match ? "Matched!" : "No match";
});

document.getElementById("para").blur()

