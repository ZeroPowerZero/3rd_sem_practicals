console.log("hello ji console");

let input = document.getElementById("inp");
let addd = document.getElementById("button1");
let deletes = document.getElementById("button2");

addd.addEventListener("click", () => {
  const newdiv = document.createElement("div");
  let inputtext = input.value;

  if (inputtext === "") return;

  newdiv.innerHTML = `
    <input class="chk" type="checkbox">
    <p>${inputtext}</p>
  `;

  document.body.appendChild(newdiv);

  
  const chk = newdiv.querySelector(".chk");
  const p = newdiv.querySelector("p");

  
  chk.addEventListener("change", () => {
    if (chk.checked) {
      p.style.textDecoration = "line-through";
      p.style.color = "gray";
    } else {
      p.style.textDecoration = "none";
      p.style.color = "black";
    }
  });


  input.value = "";
});
