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

function apagar(){
    let texto_Atual = document.querySelector('.texto_resultado').innerText;
    let novoTexto = texto_Atual.slice(0, -1);
    document.querySelector('.texto_resultado').innerText = novoTexto;
}

function calcular(){
    let texto_resultado = document.querySelector('.texto_resultado').innerText;
    if(texto_resultado){
        document.querySelector('.texto_resultado').innerText = eval(texto_resultado);
    }
    else{
        alert("Digite algo para calcular");
    }
}

