let dibujos;
let estadopalabra;
let estadisticas;
var errores = 0;
var similitud = 0;
var palabra_elegida;
var palabra_split;
var guiones_split;
let arrayusuario = prompt("Introduce las palabras a adivinar, Ej: pepe,antonio,maria. Sino dale a aceptar"); 
//console.log(1 + " " + arrayusuario);

//Boton Inicio para Abrir las ventanas hijo y iniciar seleccion de palabra
function Iniciar(){
    dibujos = window.open("dibujos.html", "","width=400px,height=400px,top=100px,left=1200px" );
    estadopalabra = window.open("estadopalabra.html", "", "width=350px,height=200px, top=100px"  );
    estadisticas = window.open("estadisticas.html", "", "width=200px,height=200px, top=500px"); 
    arrayusuario = arrayusuario.split(",");
    continuacionInicio();
}
function continuacionInicio(){
    //console.log(2 + " " + arrayusuario);
    palabra_elegida = randomitem(arrayusuario);
    //console.log(3 + " " + palabra_elegida);
    palabra_split = palabra_elegida.split("");
    //console.log(4 + " " + palabra_split);
    guiones_split = palabra_elegida.split("");
    //console.log(5 + " " + palabra_split);
    setTimeout(guiones, 1000);
    setTimeout(llamarCookies, 1000);
}

// Boton Abandonar
function Abandonar(){
    Cabandonar();
    setTimeout(Reiniciar, 5000);
}

// reiniciar el juego
function Reiniciar(){
	errores = 0;
    similitud = 0;
    continuacionInicio();
    nuevaImagen();
}

// escoge una palabra de un array si la hay y sino utiliza una de la base
function randomitem(arrayusuario) {
    if(arrayusuario == null || arrayusuario == "") {
        arrayusuario = ["coco", "casa", "manzana", "pera", "piña"];
    }
    return arrayusuario[Math.floor(Math.random() * arrayusuario.length)];
}


// VENTANA HIJO PALABRA
    //cambia el array por guiones
function guiones(){
    for(var i = 0; i < palabra_elegida.length; i++){
        guiones_split[i] = "_";
    }
    //console.log(6 + " " + guiones_split);
    estadopalabra.document.getElementById("palabra").innerHTML = guiones_split.toString();
}
    // prompt de dar letras
function dimeunaletra() {
    var letraprompt = prompt("introduce la letra");
    //console.log(7 + " " + letraprompt);
    comparalaletra(letraprompt);
}
    // verifica si la letra esta, cambia la letra por el guion y si aciertas todas muestra el win
function comparalaletra(letraprompt){
    let i;
    let coincidencia = 0;
    
    for (i=0; i<palabra_elegida.length; i++){
        if(letraprompt == palabra_split[i]){
            guiones_split[i] = letraprompt;
            coincidencia += 1;
            similitud += 1;
            console.log(8 + " " + guiones_split);
            }
    }
    if(coincidencia == 0){
        errores += 1;
        nuevaImagen();
    }else if(similitud == palabra_elegida.length){
        dibujos.document.getElementById("imagenAhorcado").src = "imagenes/win.png";
        Cganar();
        setTimeout(Reiniciar, 4000);
    }
        
    estadopalabra.document.getElementById("palabra").innerHTML = guiones_split.toString();
    //console.log(20+ " " + similitud)
    //console.log(21+ " " + palabra_elegida.length)
}


// VENTANA HIJO DIBUJO
    //cambia la imagen segun la cantidad de errores y si has perdido
function nuevaImagen(){
     switch (errores){
        case 0:
            dibujos.document.getElementById("imagenAhorcado").src = "imagenes/0fallos.png";
            break;
        case 1:
            dibujos.document.getElementById("imagenAhorcado").src = "imagenes/1fallos.png";
            break;
        case 2:
            dibujos.document.getElementById("imagenAhorcado").src = "imagenes/2fallos.png";
            break;
        case 3:
            dibujos.document.getElementById("imagenAhorcado").src = "imagenes/3fallos.png";
            break;
        case 4:
            dibujos.document.getElementById("imagenAhorcado").src = "imagenes/4fallos.png";
            break;
        case 5:
            dibujos.document.getElementById("imagenAhorcado").src = "imagenes/5fallos.png";
            setTimeout(function(){dibujos.document.getElementById("imagenAhorcado").src = "imagenes/5fallosGO.png"}, 1000);
            Cperder();
            setTimeout(Reiniciar, 10000);
            break;
    }
}


//VENTANA STATS
let totalgame = 0;
let gwin = 0;
let glose = 0;
let gabandon = 0;
let winpercent = 0;
let losepercent = 0;
let abandonpercent = 0;

// Crear-Modificar Cookie   
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}
// Obtener Cookie  
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// Comprobar Cookie
function checkCookie(cname) {
    var namecookie=getCookie(cname);
    if (namecookie != "") {
        gwin = parseInt(getCookie("ganadas"));
        glose = parseInt(getCookie("perdidas"));
        gabandon = parseInt(getCookie("abandonos"));
    } else {
        setCookie("ganadas", gwin, 1);
        setCookie("perdidas", glose, 1);
        setCookie("abandonos", gabandon, 1);
    }
    
    calcular();
}
//realiza un check de si existe "ganadas" y si existen los coje.
function llamarCookies(){
    checkCookie("ganadas");
}

// Calcular %
function calcular(){
    totalgame = gwin + glose + gabandon;
    winpercent = (Math.round((gwin / totalgame)*100));
    abandonpercent = (Math.round((gabandon / totalgame)*100));
    losepercent = (Math.round((glose / totalgame)*100));
    MostrarPorcentajes();
}
function MostrarPorcentajes(){
    estadisticas.document.getElementById("partganadas").innerText = winpercent;
    estadisticas.document.getElementById("partperdidas").innerText = losepercent;
    estadisticas.document.getElementById("partabandonadas").innerText = abandonpercent;
}



//Añadir Cookies ganadas
function Cganar(){
    totalgame += 1;
    gwin += 1;
    setCookie("ganadas", gwin, 1);
}
//Añadir Cookies perdidas
 function Cperder(){
    totalgame += 1;
    glose += 1;
    setCookie("perdidas", glose, 1);
}
//Añadir Cookies abandonos
 function Cabandonar(){
    totalgame += 1;
    gabandon += 1;
    setCookie("abandonos", gabandon, 1);
}  