//----------------------------------------------------------------
//Página para los desafíos de los cursos 1 y 2 de lógica de programación de Alura
function calcularPromedio(nota1, nota2, nota3, nota4){
    return(nota1+nota2+nota3+nota4)/4;
}

function verificarAprobacion(promedio){
    return promedio>=5 ? 'Aprobado' : 'Reprobado';
}

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 3;

promedio = calcularPromedio(nota1, nota2, nota3, nota4);
console.log(promedio);
aprobacion = verificarAprobacion(promedio);
console.log(aprobacion);
//Desafio

//1.- Crear función que muestre ¡Hola Mundo! en consola
function holaMundo(){
    console.log("¡Hola, Mundo!");
}
holaMundo();

//2.- Crear función que reciba un nombre como parametro y muestre Hola [nombre] en consola
let nombre = prompt("Ingresa tu nombre: ");
function saludoNombre(nombre){
    console.log(`¡Hola ${nombre}!`);
}
saludoNombre(nombre);

//3.- Crear una función que reciba un número como parámetro y devuelva el doble de ese numero
let ingresaNumero = parseInt(prompt("Ingresa un número: "));
function duplicarNumero(numero){
    return 2*(numero);
}
let doble = duplicarNumero(ingresaNumero);
console.log(doble);

//4.- Crear una funcion que reciba tres números como parámetros y devuelva su promedio
function promedio3Numeros(num1, num2, num3){
    return (num1+num2+num3)/3;
}
let promedio1 = promedio3Numeros(22,66,13);
console.log(promedio1);

//5.- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos
function numeroMayor(num1, num2){
    let nroMayor = 0;
    if(num1>nroMayor && num1>num2){
        nroMayor=num1;
    }else if(num2>nroMayor && num2>num1){
        nroMayor=num2;
    }else{
        nroMayor=0;
    }
    return nroMayor;
}
let nroUno = parseInt(prompt("Ingresa un número: "));
let nroDos = parseInt(prompt("Ingresa otro número: "));
let nroMayor = numeroMayor(nroUno, nroDos);
console.log(nroMayor);

//6.- Crear una función que reciba un número como parámetro y devuelva el resultado de ese número multiplicado por si mismo
let nroParaMultiplicar = parseInt(prompt("Ingresa un número: "));
function numeroPorSiMismo(numero) {
    return numero*numero;
}
let resultado = numeroPorSiMismo(nroParaMultiplicar)
console.log(resultado);

//crear funcion calculadora IMC que solicite como parámetros la altura y el peso
function calculadoraIMC(peso, altura){
    return peso/(altura*altura);
}
imc=calculadoraIMC(60, 1.60);
console.log(imc);

//crear funcion que calcule el valor factorial de un numero entregado como parametro
function factorialNumero(numero){
    resultado = 1;
    contador = 1;
    if(numero>resultado){
        do{
            resultado*=contador;
            contador++;
        }while(contador<=numero);
    }
    return resultado;
}
let numero = parseInt(prompt("Ingresa un número: "));
factorial = factorialNumero(numero);
alert(`El factorial de ${numero} es: ${factorial}.`);

//crear funcion que convierta un valor en dolares a CLP

function dolarAPesoChileno(valorDolar) {
    let valorPesoDolar = 947.25;
    return valorDolar * valorPesoDolar;
}

let dolares = 50;
let pesos = dolarAPesoChileno(dolares);
alert(`El valor de ${dolares} dolares en peso chileno es: $${pesos}`);

//Crear función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionaran como parametros

function getPerimetroRectangulo(alto, ancho){
    return ((2*alto) + (2*ancho));
}
function getAreaRectangulo(alto, ancho){
    return alto*ancho;
}

let ancho = 12;
let alto = 24;
let perimetro = getPerimetroRectangulo(alto, ancho);
let area =getAreaRectangulo(alto, ancho);
console.log(`El área del rectangulo es: ${area} y el perímetro es: ${perimetro}`);

//Crear función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parametro. Pi = 3,14.
let numeroPi = 3.14; 
let radio = 25;
function getPerimetroCirculo(radio){
    return (2*numeroPi)*radio;
}
function getAreaCirculo(radio){
    return numeroPi * (Math.pow(radio, 2));
}
let perimetroCirculo = getPerimetroCirculo(radio);
let areaCirculo = getAreaCirculo(radio);
console.log(`El área del círculo es: ${areaCirculo} y el perímetro es: ${perimetroCirculo}`);

//Crear una función que muestre la tabla de multiplicar de un número dado por parámetro.
let numeroTabla = 14;
function getTablaMultiplicar(numero){
    for(i=1; i<=10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
    return;
}
getTablaMultiplicar(numeroTabla);

//Crear una lista vacía llamada lista genérica
let listaGenerica = [];
//Crear una lista llamada lenguajesDeProgramacion que contenga los siguientes elementos: JavaScript, C, C++, Kotlin, Python
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
//Agregar a la lista lenguajesDeProgramación los siguientes elementos: Java, Ruby, GoLang
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');
//Crear una función que muestre en consola todos los elementos de la lista
function mostrarLista(lista){
    console.log(lista);
}
mostrarLista(lenguajesDeProgramacion);
//Crear una función que muestre en consola todos los elementos de la lista en orden inverso
function mostrarListaInversa(lista){
    let listaInversa = lista.toReversed();
    console.log(listaInversa);
}
mostrarListaInversa(lenguajesDeProgramacion);
//Crear una funcion que calcule el promedio de los elementos en una lista de números
let listaDeNumeros = [3, 4, 5, 7, 6, 4, 6, 5];
function calcularPromedio(){
    let total=0;
    for(i=0; i<listaDeNumeros.length; i++){
        total+=listaDeNumeros[i];
    }
    return total/listaDeNumeros.length;
}
let promedio = calcularPromedio();
console.log(`El promedio de la lista ${listaDeNumeros} es: ${promedio}`);
//Crear una función que muestre por consola el número más grande y el número más pequeño de una lista
function getMaximoYMinimo(lista){
    //Declaracion del mínimo y el máximo. El mínimo se inicializa como el primer elemento de la lista puesto que si no hay algún elemento de la lista 
    //que sea menor o igual a 0 este quedaría como el mínimo
    let max = 0;
    let min = lista[0];
    for(i=0;i<lista.length; i++){
        //If para encontrar el minimo
        if(lista[i] <= min){
            min = lista[i];
        }
        //If para encontrar el máximo
        if(lista[i] >= max){
            max = lista[i];
        }
    }
    console.log(`De la lista: [${lista}] el número máximo es: ${max} y el mínimo es: ${min}`);
}
getMaximoYMinimo(listaDeNumeros);

//Crear una función que devuelva la suma de todos los elementos de una lista
function getSumaLista(lista){
    let suma = 0;
    for(i=0;i<lista.length;i++){
        suma+=lista[i];
    }
    return suma;
}
let sumaNumeros = getSumaLista(listaDeNumeros);
console.log(`La suma de la lista: [${listaDeNumeros}] es: ${sumaNumeros}`);

//Crear una función que devuelva la posición de la lista donde se encuentra un elemento entregado por parametro o -1 si este elemento no existe en la lista
function getElementPosition(elemento, lista){
    return lista.includes(elemento) ? lista.indexOf(elemento) : -1;
}
let elemento = 'JavaScript';
let posicion = getElementPosition(elemento, lenguajesDeProgramacion);
console.log(`La posición de ${elemento} en la lista [${lenguajesDeProgramacion}] es: ${posicion}`);

//Crear una función que reciba dos listas del mismo tamaño y que devuelva una nueva lista con la suma de los elementos uno a uno
let lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lista2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
function getSumaDeListas(listaA, listaB){
    let suma = 0;
    let listaDeSalida = [];
    for(i=0;i<listaA.length;i++){
        suma = listaA[i]+listaB[i];
        listaDeSalida.push(suma);
    }
    return listaDeSalida;
}
let lista3 = getSumaDeListas(lista1, lista2);
console.log(lista3);
//Crear una funcion que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número
function getListaAlCuadrado(lista){
    let listaDeSalida = [];
    for(i=0;i<lista.length;i++){
        listaDeSalida.push(Math.pow(lista[i], 2));
    }
    return listaDeSalida;
}

let ListaCuadrada = getListaAlCuadrado(lista1);
console.log(ListaCuadrada);