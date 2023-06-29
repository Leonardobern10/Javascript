
const numero1 = document.getElementsByClassName("option")[0];
const numero2 = document.getElementsByClassName("option")[1]
const numero3 = document.getElementsByClassName("option")[2]
const numero4 = document.getElementsByClassName("option")[3]
const numero5 = document.getElementsByClassName("option")[4]
const btn = document.getElementById("btn");
const endereço = document.getElementsByTagName("a")[0]
let refBtn = undefined;
console.log(endereço)

numero1.addEventListener("click", function () {
  console.log("Numero 1 pressionado!");
  numero1.setAttribute("style", "background-color:hsl(25, 97%, 53%)");
  apagaEstilo(numero2);
  apagaEstilo(numero3);
  apagaEstilo(numero4);
  apagaEstilo(numero5);
  refBtn = 0;
});
numero2.addEventListener("click", function () {
  console.log("Numero 2 pressionado!");
  numero2.setAttribute("style", "background-color:hsl(25, 97%, 53%)");
  apagaEstilo(numero1);
  apagaEstilo(numero3);
  apagaEstilo(numero4);
  apagaEstilo(numero5);
  refBtn = 1;
});
numero3.addEventListener("click", function () {
  console.log("Numero 3 pressionado!");
  numero3.setAttribute("style", "background-color:hsl(25, 97%, 53%)");
  apagaEstilo(numero2);
  apagaEstilo(numero1);
  apagaEstilo(numero4);
  apagaEstilo(numero5);
  refBtn = 2;
});
numero4.addEventListener("click", function () {
  console.log("Numero 4 pressionado!");
  numero4.setAttribute("style", "background-color:hsl(25, 97%, 53%)");
  apagaEstilo(numero2);
  apagaEstilo(numero3);
  apagaEstilo(numero1);
  apagaEstilo(numero5);
  refBtn = 3;
});
numero5.addEventListener("click", function () {
  console.log("Numero 5 pressionado!");
  numero5.setAttribute("style", "background-color:hsl(25, 97%, 53%)");
  apagaEstilo(numero2);
  apagaEstilo(numero3);
  apagaEstilo(numero4);
  apagaEstilo(numero1);
  refBtn = 4;
});

btn.addEventListener("click", function () {
  btn.setAttribute("style","background-color: white; color: hsl(25, 97%, 53%)");
});

function apagaEstilo(el) {
  el.style.backgroundColor = "";
}

const referenciaBtn = undefined;
btn.addEventListener("click", function () {
  if (refBtn === 0){
  endereço.setAttribute("href", "Projeto1.html")
  } else if (refBtn === 1){
    endereço.setAttribute("href", "Projeto2.html")
  } else if (refBtn === 2){
    endereço.setAttribute("href", "Projeto3.html")
  } else if (refBtn === 3) {
    endereço.setAttribute("href", "Projeto4.html")
  } else if (refBtn === 4) {
    endereço.setAttribute("href", "Projeto5.html")
  } else if (refBtn === 5) {

  }
})

