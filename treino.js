let add = 0;

function getValue() {
  var input = document.getElementById("inputt");
  var value = input.value;
  add = value
}

window.onload = function () {
  const button = document.getElementById("botão");
  const button2 = document.getElementById("botaoparar");
  let numero = 0;
  let parar = false;

  button.addEventListener("click", () => {
    numero += add;
  });

  button2.addEventListener("click", () => {
    parar = true;
    console.log(numero);
    numero = 0;
  });
};
