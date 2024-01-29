let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disable');
      } else {
        // el usuario no acertó
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El numero secreto es menor');
            } else {
                asignarTextoElemento('p', 'El número secreto es mayor');
            }
            intentos++; 
            limpiarCaja();
    }
    return;
}    

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del número secreto!');
    asignarTextoElemento('p', 'Indica un número entre el 1 y el 10.');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de inicio del juego
    condicionesIniciales();
    //Generar el número aleatorio
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //Inicializar el # de intentos
}




condicionesIniciales();