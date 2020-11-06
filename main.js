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

