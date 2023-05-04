
var claves = ["enter", "imes", "ai", "ober", "ufat"];

var codificar = function () {
    var mensaje = document.getElementById("mensajeEntrante").value;
    var resultado = "";
    if (mensaje.length > 0) {
        for (var i = 0; i < mensaje.length; i++) {
            if (mensaje.charAt(i) == 'e') {
                resultado += claves[0];
            }
            else if (mensaje.charAt(i) == 'i') {
                resultado += claves[1];
            }
            else if (mensaje.charAt(i) == 'a') {
                resultado += claves[2];
            }
            else if (mensaje.charAt(i) == 'o') {
                resultado += claves[3];
            }
            else if (mensaje.charAt(i) == 'u') {
                resultado += claves[4];
            }
            else {
                resultado += mensaje.charAt(i);
            }
        }

        document.getElementById("mensajeSaliente").value = resultado;
        mostrarElementos();
    }
    else {
        mensajeVacio();
    }

}

var decodificar = function () {
    var mensaje = document.getElementById("mensajeEntrante").value;
    var resultado = document.getElementById("mensajeSaliente");
    if (mensaje.length > 0) {
        mensaje = mensaje.replace(/enter/g, "e");
        mensaje = mensaje.replace(/imes/g, "i");
        mensaje = mensaje.replace(/ai/g, "a");
        mensaje = mensaje.replace(/ober/g, "o");
        mensaje = mensaje.replace(/ufat/g, "u");
        resultado.value = mensaje;
        mostrarElementos();
    }
    else {
        mensajeVacio();
    }

}

var copiarTexto = function () {
    navigator.clipboard.writeText(document.getElementById("mensajeSaliente").value);
    mensajeCopiado();
}

var mostrarElementos = function () {
    document.getElementById("mensajeSaliente").style.display = "inLine";
    document.getElementById("botonCopiar").style.display = "inLine";
}

var mensajeVacio = function(){
    document.getElementById("alertaVacio").style.display = "contents"
    setTimeout(()=>{
        document.getElementById("alertaVacio").style.display = "none"
    },3000);
}

var mensajeCopiado = function(){
    document.getElementById("alertaCopiado").style.display = "contents"
    setTimeout(()=>{
        document.getElementById("alertaCopiado").style.display = "none"
    },3000);
}