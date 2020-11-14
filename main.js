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
    document.write(guiones);
}

   
function cambiarporletra(){
    // cambiar guión por
}

function comprobar(letra){
    if (palabra_elegida.includes(letra) ){
        cambiarporletra();   
    }
    else errores += 1;
}

function Iniciar(){
    dibujos = window.open("dibujos.html", "", "width=800px,height=400px,top=80px,left=800px");
    estadopalabra = window.open("estadopalabra.html", "", "width=800px,height=400px,top=80px,left=800px");
    window.open("estadisticas.html", "", "width=800px,height=400px,top=80px,left=800px");
}

function Reiniciar(){
	errores = 0;
	document.getElementById("clicks").textContent = errores;
	nuevaImagen();
}


var palabra_elegida = randomitem(arrayusuario);

creararray(arrayusuario);

console.log(palabra_elegida.split(""));

console.log(guiones(palabra_elegida));


// VENTANA HIJO PALABRA
let estadopalabra;
let palabrilla = "pepitogrillo";
let arrpalabra = palabrilla.match(/.{1}/g);

function

function PruebaPalabra2(){
    for ( var i = 0, i < palabrilla.length, i++){
        document.write(typeof(arrpalabra[i]) + " ");
        estadopalabra.document.getElementbyId("palabritaprueba").innerText = arrpalabra[i];
    }
}    
function PruebaPalabra(){
    for ( let i = 0, i<palabra_elegida.length, i++){
        estadopalabra.document.getElementbyId("palabrita").innerText = arrpalabra[i];

    }
}
    

// VENTANA HIJO DIBUJO
var errores = 0;
let dibujos;

function Prueba(){
    errores += 1;
    document.getElementById("clicks").textContent = errores;
	nuevaImagen();
}

function nuevaImagen(){
    switch (errores){
        case 0:
            dibujos.document.getElementById("imagenAhorcado").src = "0fallos.png";
            break;
        case 1:
            dibujos.document.getElementById("imagenAhorcado").src = "1fallos.png";
            break;
        case 2:
            dibujos.document.getElementById("imagenAhorcado").src = "2fallos.png";
            break;
        case 3:
            dibujos.document.getElementById("imagenAhorcado").src = "3fallos.png";
            break;
        case 4:
            dibujos.document.getElementById("imagenAhorcado").src = "4fallos.png";
            break;
        case 5:
            dibujos.document.getElementById("imagenAhorcado").src = "5fallos.png";
            setTimeout(function(){dibujos.document.getElementById("imagenAhorcado").src = "5fallosGO.png"}, 1000);
            break;
    }
}
