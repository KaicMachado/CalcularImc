const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
 e.preventDefault();
 const peso = Number(form.inPeso.value);
 const altura = Number(form.inAltura.value);

 const imc = getImc(peso, altura);
 const nivel = getNivelImc(imc);
 const msg = `Seu IMC é ${imc} (${nivel}).`;

 if (!peso) {
  setResultado("Peso inválido", false);
  return;
 }
 if (!altura) {
  setResultado("Altura Inválida", false);
  return;
 }

 setResultado(msg, true);
});

// CALCULAR IMC
function getImc(peso, altura) {
 const imc = peso / altura ** 2;
 return imc.toFixed(2);
}

// DEFINIR NIVEL DO IMC
function getNivelImc(imc) {
 const tabelaImc = [
  "Abaixo do Peso",
  "Peso normal",
  "Sobrepeso",
  "Obesidade grau 1",
  "Obesidade grau 2",
  "Obesidade grau 3",
 ];
 if (imc >= 39.9) return tabelaImc[5];
 if (imc >= 34.9) return tabelaImc[4];
 if (imc >= 29.9) return tabelaImc[3];
 if (imc >= 24.9) return tabelaImc[2];
 if (imc >= 18.5) return tabelaImc[1];
 if (imc < 18.5) return tabelaImc[0];
}

// CRIAR ELEMENTO
function criaP() {
 const p = document.createElement("p");
 return p;
}

// INSERIR ELEMENTO
function setResultado(msg, isValid) {
 const resposta = document.querySelector("#resposta");
 resposta.innerHTML = "";

 const p = criaP();
 p.innerHTML = msg;
 if (isValid) {
  p.classList.add("paragrafo-resultado");
 } else {
  p.classList.add("bad");
 }
 resposta.appendChild(p);
}
