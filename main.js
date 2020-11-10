//Parte Oscar 
var promptuser = prompt("Introduce las palabras a adivinar");  
var arrayusuario = promptuser.split(",");




function randomitem(arrayusuario) {
    return arrayusuario[Math.floor(Math.random() * arrayusuario.length)];
}

function creararray(arrayusuario) {
    if (arrayusuario == null || arrayusuario == "") {
        arrayusuario = ["coco", "casa", "manzana", "pera", "piña"];
    }
    console.log(arrayusuario);
}

function guiones(palabra_elegida) {
    for (var i = 0; i > palabra_elegida.length; i++) {
    }
}

function guiones(palabra_elegida) {
    const n = palabra_elegida.length;
    var guiones = [];

    console.log(palabra_elegida.length);

    for(i = 0; n > i; i++){
        guiones[i] = "_";
    }
    console.log(guiones);
}

function Iniciar(){
    window.open("dibujos.html", "", "width=800px,height=400px,top=80px,left=800px");
    window.open("estadopalabra.html", "", "width=800px,height=400px,top=80px,left=800px");
    window.open("estadisticas.html", "", "width=800px,height=400px,top=80px,left=800px");
}

var palabra_elegida = randomitem(arrayusuario);

creararray(arrayusuario);

console.log(palabra_elegida.split(""));

console.log(guiones);



// VENTANA HIJO DIBUJO
var errores = 0;
let dibujos;

function PruebaErrorCambioImagen(){
    errores += 1;
}

function nuevaImagen(){
    
    
    switch (errores){
        case 0:
            dibujos.window.document.getElementById("imagenAhorcado").src = "0fallos.png";
            break;
        case 1:
            dibujos.window.document.getElementById("imagenAhorcado").src = "1fallos.png";
            break;
        case 2:
            dibujos.window.document.getElementById("imagenAhorcado").src = "2fallos.png";
            break;
        case 3:
            dibujos.window.document.getElementById("imagenAhorcado").src = "3fallos.png";
            break;
        case 4:
            dibujos.window.document.getElementById("imagenAhorcado").src = "4fallos.png";
            break;
        case 5:
            dibujos.window.document.getElementById("imagenAhorcado").src = "5fallos.png";
            break;
        default:
            dibujos.window.document.getElementById("imagenAhorcado").src = "0fallos.png";
            break;
    }
  
}

