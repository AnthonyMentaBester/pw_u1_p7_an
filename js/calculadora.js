var op = "";
var numero1 = "";
var numero2 = "";
var operador = "";
var respuesta = "";


function setearvalor(valor){
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    document.getElementById('id-display').innerText=valor;
}

function setearvalorConcatenado(valor){
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    document.getElementById('id-display').innerText=valorActual + valor;
}

function operacion(valor) {
    const display = document.getElementById("id-display");
    if (numero1 === "") {
        numero1 = display.innerText;
    } else if (respuesta !== "") {
        numero1 = respuesta.toString();
    }
    op = valor;
    display.innerText = "0";
}


function calcular() {

    const display = document.getElementById("id-display");
    numero2 = display.innerText;

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
            respuesta = "ERROR";
    }

    display.innerText = `${numero1} ${op} ${numero2} = ${respuesta}`;
    numero1 = "";
    numero2 = "";
    op = "";
}