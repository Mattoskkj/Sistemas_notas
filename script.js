const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome"); 
const idade = document.querySelector("#idade");
const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const nota3 = document.querySelector("#nota3");
const resultadoN = document.querySelector("#resultadoN");
const resultadoI = document.querySelector("#resultadoI");
const resultadoM = document.querySelector("#resultadoM");
const resultado1 = document.querySelector("#resultado1");
const resultado2 = document.querySelector("#resultado2");
const resultado3 = document.querySelector("#resultado3");
const resultadoS = document.querySelector("#resultadoS");
const resultadoSOMA = document.querySelector("#resultadoSOMA");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nomeAluno = nome.value.trim();
    const idadeAluno = Number(idade.value);

    if (nomeAluno === "" || idadeAluno <= 0) {
        resultadoN.textContent = "Preencha os dados corretamente.";
        resultadoI.textContent = "Preencha os dados corretamente.";  
        return;
    }

    else {
        resultadoI.textContent = "Idade do aluno: " + idadeAluno;  
        resultadoN.textContent = "Nome do Aluno: " + nomeAluno;
    }


    const notaUm = Number(nota1.value);
    const notaDois = Number(nota2.value);
    const notaTres = Number(nota3.value);

     
    if(notaUm === "" || notaUm < 0 || notaUm > 10) {
        resultado1.textContent = "Preencha os dados corretamente.";
        return;
    }

    if (notaDois === "" || notaDois < 0 || notaDois > 10) {
        resultado2.textContent = "Preencha os dados corretamente.";
        return;
    }
    if (notaTres === "" || notaTres < 0 || notaTres > 10) {
        resultado3.textContent = "Preencha os dados corretamente.";
        return;
    }
  
    resultado1.textContent = "Primeira Nota: " + notaUm;
    resultado2.textContent = "Segunda Nota: " + notaDois;
    resultado3.textContent = "Terceira Nota: " + notaTres;

    const notaFinal = (notaUm + notaDois + notaTres) / 3;

     resultadoM.textContent ="Média do Aluno: " + notaFinal.toFixed(2);

  if (notaFinal >= 7) {
    resultadoS.classList.add("cores1");
      resultadoS.textContent = "Aprovado";
  } else if (notaFinal >= 5 && notaFinal < 7) {
    resultadoS.classList.add("cor2");
      resultadoS.textContent = "Recuperação";
  } else {
    resultadoS.classList.add("Cores3");
      resultadoS.textContent = "Reprovado";
    }

   const somaNecessaria = (notaUm + notaDois + notaTres) - 21;

    if (somaNecessaria >= 21) 
    {
        resultadoSOMA.textContent ="O aluno Alcançou a meta";
    }
    else
    {
        resultadoSOMA = somaNecessaria - 21;
        resultadoSOMA.textContent = "O aluno não atingiu a pontuação por" + somaNecessaria;
    }
})

  




formulario.addEventListener("reset", function (evento) {
    resultadoN.textContent = ""; 
    resultadoI.textContent = ""; 
    resultado1.textContent = ""; 
    resultado2.textContent = ""; 
    resultado3.textContent = ""; 
    resultadoM.textContent = ""; 
    resultadoS.textContent = ""; 

});