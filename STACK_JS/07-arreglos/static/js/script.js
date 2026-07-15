console.log("Prueba de conexion Js...");


//Valiables a lista

let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

let Nombres = ["ana", "Pedro", "María", "Carlos"]
//Mostrar a maria en una alerta
function Ejercicio() {
  let Nombres = ["ana", "Pedro", "María", "Carlos"];
  alert(Nombres[2]); //Mostrar a maria en una alerta
  let compras = [5000, 2300, 12000, 4500, 3000];
  let alumnos = ["Ana", "Pedro", "María", "José"];
  let datos = ["Carlos", 18, true];
  let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
  let mensaje = `${alumnos[1]} compro una ${frutas[0]} a ${compras[1]} con ${datos[0]}`;
  alert(mensaje);
}


//obtener el ultimo elemento
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
let ultima = frutas[frutas.length - 1]
// "variable.length -1 "simpre trae el ultimo elemento
console.log(ultima);

let frases = ["Hola", "a", "todos", "los",
  "programadores"];
let ultimo = frases[frases.length - 2] + frases[frases.length - 1];
console.log(ultimo);



let ListaTareas = ["Barrer", "Cocinar", "Realizar Compras"];

function manipularArreglo() {
  //Modificar un elemento del arreglo
  ListaTareas[1] = "Contruir";
  //Añadir un elemento al final de la lista 
  ListaTareas.push("cocinar"); //Agregz un elemto al final .push()
  //eliminar el ultimo elemento y mostrarlo
  let eliminado = ListaTareas.pop(); //Elimina ultimo .pop()
  //Añadir un elemento al inicio de la lista
  ListaTareas.unshift("Boxear"); // Agrega al principio unshift()
  //Eliminae el primer elelmto de la lista
  eliminado += "-" + ListaTareas.shift();//.shift eliminar el primero
  //mostrar resultados
  alert(ListaTareas.join(" - "));
  alert("Elementos eliminados:" + eliminado);
}




function buscarMayoresEdad() {
  let edades = [12, 15, 18, 20, 25];
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      console.log(edades[i]);
    }
  }
}




function Ejercicio0() {

    let nombres = ["Ana", "Pedro", "María", "Carlos", "Juan"];
    for (let i = 0; i < nombres.length; i++) {
        alert(`${i + 1}: ${nombres[i]}`);
    }
}


// ## Ejercicio 5

// Crear un arreglo con diez números.

// Contar:

// - Cuántos son pares.
// - Cuántos son impares.

function Ejercicio00() {

    let numeros = [4, 7, 12, 15, 22, 33, 40, 55, 68, 91];
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++; 
        } else {
            impares++; 
        }
    }
    let mensaje = `Cantidad de números pares: ${pares}\n- Cantidad de números impares: ${impares}`;
    alert(mensaje);
}




