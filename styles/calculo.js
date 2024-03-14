let numerosAdicionados = [];

localStorage.s

function insert(value) {
    numerosAdicionados.push(value);

    document.querySelector(".texto_resultado").innerHTML = numerosAdicionados.join("");
}

function vezes() {
    localStorage.setItem(numerosAdicionados.length, numerosAdicionados.join(""))

    document.querySelector(".texto_resultado").innerHTML = "";
}
