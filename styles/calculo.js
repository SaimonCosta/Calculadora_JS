// let numerosAdicionados = [];

// localStorage.s

// function insert(value) {
//     numerosAdicionados.push(value);

//     document.querySelector(".texto_resultado").innerHTML = numerosAdicionados.join("");
// }

// function vezes() {
//     localStorage.setItem(numerosAdicionados.length, numerosAdicionados.join(""))

//     document.querySelector(".texto_resultado").innerHTML = "";
// }



function adicionar(valor) {
   
    document.querySelector('.texto_resultado').innerText += valor;
}


function limpar() {

    document.querySelector('.texto_resultado').innerText = '';
}


function calcular() {
   
    let expressao = document.querySelector('.texto_resultado').innerText;
  
    let resultado = eval(expressao); 
    
    document.querySelector('.texto_resultado').innerText = resultado;
}
