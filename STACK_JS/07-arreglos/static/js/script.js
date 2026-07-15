console.log("Prueba de conexion Js...");


// function Nombres() {
//   let nombres = ["Ana", "Pedro", "Maria", "Carlos"];
//   alert(nombres[2]);
// }

// let compras = [5000, 2300, 12000, 4500, 3000];
// let alumnos = ["Ana", "Pedro", "María", "José"];
// let datos = ["Carlos", 18, true];
// let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

// let mensaje = `${alumnos[2]} tiene ${datos[1]} años, y compro una ${fruta[3]} a ${compras[1]}`;
// alert(mensaje);

// let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
// console.log(frutas.length);// 4 --> Conteo de elementos

// let ultima = frutas[frutas.length - 1];
// // variable.length -1 siempre trae el ultimo elemento
// console.log(ultima);

//Desafio
// Del arreglo ["Hola", "a", "todos", "los",
//  "programadores"]
//Mostrar el penutimo elemento y el ultimo concatenado

let frases = ["Hola", "a", "todos", "los",
  "programadores"];
let ultimo = frases[frases.length - 1] + frases[frases.length - 2];
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


