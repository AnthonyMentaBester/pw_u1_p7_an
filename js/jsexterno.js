function cambiarTexto(idelemento, valor) {
    document.getElementById(idelemento).innerText = valor;

}
function cambiarColor(idelemento, valor) {
    document.getElementById(idelemento).style.color = valor;

}
function cambiarTamanio(idelemento, valor) {
    document.getElementById(idelemento).style.fontSize = valor;

}
function agregarElemento(idelemento, valor) {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + valor;

}