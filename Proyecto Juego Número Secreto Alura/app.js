//Declaración de variables
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];
//Asignación de mensaje a la etiqueta correspondiente
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}
//Limpia la caja de intentos cada vez que el usuario clica en intentar luego de ingresar un número
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
//Genera un número aleatorio para el juego
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    }else{
        //Si el numero generado ya está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
//Restaura las condiciones iniciales (usada para la función reiniciarJuego())
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//Verifica si el intento del usuario es correcto. En caso contrario, aumenta la variable intentos hasta que el usuario acierte el número. 
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1)?'intento':'intentos'}`);
        //Si el usuario acierta, se habilita el boton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acierta
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego(){
    //Limpiamos la caja, 
    limpiarCaja();
    //Indicamos el mensaje de intervalo de números, 
    //Volvemos a generar el número aleatorio, 
    //Inicializar el número de intentos,
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego.
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();





