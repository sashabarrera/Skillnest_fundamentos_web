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
            return a;
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


