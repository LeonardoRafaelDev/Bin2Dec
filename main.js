const inputBinary = document.getElementById("binary");
const conversao = document.getElementById("convert");
const alerta = document.getElementById("alerta");

inputBinary.addEventListener("keyup", validacao);

//criar validaçao de 01 pegar regex
function validacao() {
  console.log("🚀 ~ validacao", validacao);
  if (inputBinary.value.match(/^[0-1]+$/g) === null) {
    alerta.innerHTML = "meno coloca so 0 e 1 ta loco";
  } else {
    alerta.innerHTML = "Esta é a conversão do número binário";
    convert();
  }
}

// criar funçao para converter
function convert() {
  let num = inputBinary.value;
  let numArray = Array.from(num);
  let som = 0;
  numArray.reverse();
  numArray.forEach(myFunction);

  function myFunction(item, index) {
    som += Number(item * 2 ** index);
  }
  conversao.innerHTML = som;
}
