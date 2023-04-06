// Obtém os elementos HTML relevantes
const nomeInput = document.getElementById("nome");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const calcularButton = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");

// Define a função para calcular o IMC e comparar com os valores recomendados
function calcularIMC() {
  // Obtém o nome, peso e altura dos inputs
  const nome = nomeInput.value;
  const peso = Number(pesoInput.value);
  const altura = Number(alturaInput.value);

  // Calcula o IMC
  const imc = peso / (altura ** 2);

  // Verifica o resultado e exibe a mensagem adequada
  let resultado = "";
  if (imc < 18) {
    resultado = "abaixo do recomendado";
  } else if (imc > 35) {
    resultado = "acima do recomendado";
  } else {
    resultado = "excelente";
  }

  // Exibe o resultado com o nome informado
  resultadoDiv.innerText = `${nome}, seu IMC é ${imc.toFixed(2)}. Você está ${resultado}.`;
}

// Adiciona um listener de evento para o botão de calcular
calcularButton.addEventListener("click", calcularIMC);
