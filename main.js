let dibujos;
let estadopalabra;
var errores = 0;

//Parte Oscar 

var promptuser = prompt("Introduce las palabras a adivinar");  
var arrayusuario = promptuser;

console.log(arrayusuario);


function randomitem(arrayusuario) {
    if(arrayusuario == null || arrayusuario == "") {
        arrayusuario = ["coco", "casa", "manzana", "pera", "piña"];
    }else{arrayusuario = promptuser.split(",");}
    
    return arrayusuario[Math.floor(Math.random() * arrayusuario.length)];
}

console.log(palabra_elegida);

function creararray(arrayusuario) {
    if (arrayusuario == null || arrayusuario == "") {
        arrayusuario = ["coco", "casa", "manzana", "pera", "piña"];
        randomitem(arrayusuario);
    }else {randomitem(arrayusuario);}
    console.log(arrayusuario);
}


function guiones(guiones_split) {
    console.log(palabra_elegida.length);

    for(var i = 0; i < palabra_elegida.length; i++){
        guiones_split[i] = "_";
    }
    estadopalabra.document.getElementById("palabrita").innerHTML = guiones_split.toString();
    
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
var palabra_split = palabra_elegida.split("");
var guiones_split = palabra_elegida.split("");


//console.log(palabra_elegida.split(""));
//console.log(guiones(palabra_elegida));


// VENTANA HIJO PALABRA
//let palabrilla = creararray(arrayusuario);

        
function pruebapalabrilla(){
    for(var i = 0; i < palabra_elegida.length; i++){
        arrayguiones[i] = "_";
    }
    estadopalabra.document.getElementById("palabrita").innerHTML = arrayguiones.toString();
}

function letraqueentra(){
    let letra = document.getElementById("formletra").submit();

    estadopalabra.document.getElementById("letradada").innerHTML = letra.toString();
}


function dimeunaletra() {
    var letraprompt = prompt("introduce la letra");
    console.log(letraprompt);
    comparalaletra(letraprompt);
}

function comparalaletra(letra){
    let i;
    for (i=0; i<palabrilla.length; i++){
        if(letra == arrpalabra[i]){
            arrayguiones[i] = letra;
            estadopalabra.document.getElementById("palabrita").innerHTML = arrayguiones.toString();
        }else{errores += 1;}
    }
}




function PruebaPalabra2(){
    for ( var i = 0; i < palabrilla.length; i++){
        document.write(typeof(arrpalabra[i]) + " ");
        estadopalabra.document.getElementbyId("palabritaprueba").innerText = arrpalabra[i];
    }
}    
function PruebaPalabra(){
    for ( let i = 0; i<palabra_elegida.length; i++){
        estadopalabra.document.getElementbyId("palabrita").innerText = arrpalabra[i];

    }
}
    

// VENTANA HIJO DIBUJO

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
