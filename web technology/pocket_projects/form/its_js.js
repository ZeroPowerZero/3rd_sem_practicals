let namess = document.getElementById("nameinp");
let email = document.getElementById("emailinp");
let submit = document.getElementById("submitbtn");

let nameregex = /^[a-zA-Z]+$/;
let emailregex= /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
;

submit.addEventListener("click",()=>{
    if(nameregex.test(namess.value))
    {
        console.log("submit");
        alert("submitted");
    }
    else
    {
        alert("name field is incorrect");
    }
    if( emailregex.test(email.value))
    {
        console.log("email is valid");
    }
    else
    {
        alert("email in valid");
    }
});