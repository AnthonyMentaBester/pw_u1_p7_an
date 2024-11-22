var op = "";
var numero1 = "";
var numero2 = "";
var operadoracion = "";
var respuesta = "";


function setearvalor(valor){
    let valorActual = document.getElementById('id-display');
    console.log(valorActual);
    document.getElementById('id-display').innerText=valor;
}

function setearvalorConcatenado(valor) {
    let valorActual = document.getElementById("id-display").innerText;
    if (valorActual === `${numero1}${op}`) {
        document.getElementById('id-display').innerText += valor;
    } else if (valorActual === "0") {
        document.getElementById('id-display').innerText = valor;
    } else {
        document.getElementById('id-display').innerText += valor;
    }
}



function operacion(valor) {
    const valorActual = document.getElementById("id-display");

    if (numero1 === "") {
        numero1 = valorActual.innerText;
    } else if (respuesta !== "") {
        numero1 = respuesta.toString();
        respuesta = ""; 
    }
    op = valor;
    if (!valorActual.innerText.includes(op)) {
        valorActual.innerText += valor;
    }
}


function vaciar() {
    const valorActual = document.getElementById("id-display");
    valorActual.innerText = "0";
    numero1 = "";
    numero2 = "";
    op = "";
    respuesta = "";
}

function borrar() {
    const valorActual = document.getElementById("id-display");

    if (valorActual.innerText.length > 1) {
        valorActual.innerText = valorActual.innerText.slice(0, -1);
    } else {
        valorActual.innerText = "0";
    }
}

function calcular() {

    const valorActual = document.getElementById("id-display");
    numero2 = valorActual.innerText;

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    switch (op) {
        case "+":
            respuesta = num1 + num2;
            break;
        case "-":
            respuesta = num1 - num2;
            break;
        case "*":
            respuesta = num1 * num2;
            break;
        case "%":
            if (num2 === 0) {
                respuesta = "ERROR";
            } else {
                respuesta = num1 / num2;
            }
            break;
        default:
            respuesta = valor;
    }

    valorActual.innerText = `${numero1}${op}${numero1} = ${respuesta}`;
    numero1 = "";
    numero2 = "";
    op = "";
}