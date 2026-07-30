console.log("Prueba de conexion Js...");


//Ejemplo  Funcion simple (sin parametros)
function saludar(/* parametro */) {
    alert("¡Hola, bienvenido!");
}

saludar(); //Ejecutacion de una funcion

//Funciones con parametros
//El parametro recibe un valor para trabajar en la funcion.
//El parametro recibe el tipo de dato al momento de tomar valor.


function saludarParam(nombre) { //Parametro nombre
    alert("¡Hola, " + nombre + "!");
}

//saludarParam("Sasha"); //Ejecucion de la funcion con parametros. ("argumento")
saludarParam("Ana");

//Funciones con rectun

function encontrarMayor() {
    function encontrarMaximo(a, b) {
        if (a > b) {
            return a; //Este valor se devuelve porque cumple la condicion
        } else {
            return b;
        }
    }
    let numero1 = 10;
    let numero2 = 7;
    let maximo = encontrarMaximo(numero1, numero2);
    //Maxino guardara el valor del retorno
    alert(`El número mayor entre ${numero1}, y ${numero2}, es: ${maximo}`);
}

//Tarea 
/*Crear una funcion que reciba 3 parametros, a, b y c.
Debe Sumar a + b el resultado restarlo por c.
Devolver el vaoLr final y muestrar con alert */


function operaciones(a, b, c) {
    return a + b - c;
}
function mostrarResultado(){
    //Creacion de variables
    let num1 = parseInt(prompt("Ingrese primer número"));
    let num2 = parseInt(prompt("Ingrese segundo número"));
    let num3 = parseInt(prompt("Ingrese tercer número"));
    //Mostramos resultado
    let resultado = operaciones(num1, num2, num3);
    alert(`La operacion de ${num1} + ${num2} - ${num3} = ${resultado}`)
}

/* Crear una funcion que resiba un parametro y permita
atra vez de un bucle contar hasta este.
EJ: Se recibe el numero 5 y muetra: 1 - 2 - 3 - 4 - 5
Añadir una condicion para que el valor ingresado no sea superior a 100.
 */


function mostrarConteo(){
    //Creacion de variables
    let parametro = parseInt(prompt(`Ingrese el limite del contador`));
    //Mostrar resultados
    if(parametro <= 100){
        //Mostrar resultado
        resultado = contadorNumeros(parametro);
        alert(resultado.join(" - "))
    } else{
        alert("ingresaste un valor inferior a 100");
    }
}
function contadorNumeros(a){
let numeros = []
for(let i = 1; i <= a; i++){
    numeros.push(i)
}
return numeros;
}

