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
  ListaTareas.push("cocinar"); //Agrega un elemento al final .push()
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

//Recorrer un arreglo
function recorrerAreglo() {
  let notas = [6.2, 5.8, 4.1, 7.0, 3.0, 6.9];

  for (let i = 0; i < notas.length; i++) {
    alert(`Monstrando Notas ${i + 1} de ${notas.length}: ${notas[i]}`);

  }
}

//Sumar elementos dentro de un bucle
function sumarElemento() {
  let ventas = [10000, 5000, 12000, 8000];
  let total = 0;
  for (let i = 0; i < ventas.length; i++) {
    total += ventas[i]; // += acumula
  }
  alert(`El resultado final es: ${total}`);
}


//Calcular promedio
function calcularPromedio() {
  let notas = [5.8, 6.2, 4.9, 6.5];
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  alert(`La suma acumulada es: ${suma}`)
  let promedio = suma / notas.length;
  alert(`El promedio de las notas: ${notas.join(' / ')}\nPromedio: ${promedio}`);
}

//Condiciones dentro de bucle

function buscarMayoresEdad() {
  let edades = [12, 15, 18, 20, 25, 35, 50, 5];
  let mayores = [];
  for (let i = 0; i < edades.length; i++) {
    //condicion para buscar mayores de 18
    if (edades[i] >= 18) {
      mayores.push(edades[i]); //Añade la posicion que cumple la condicion
    }
  }
  alert(`Del la lista de edades: ${edades.join(' - ')}.\nLos mayores son: ${mayores.join(' - ')}`)
}

//Encontar el menor y el mayor
function buscarMayorMenor(){
  let numeros = [10, 35, 7, 90, 22, 90, 2];
  let menor = numeros[0];
  let mayor = numeros[0];
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }else if (numeros[i] > mayor){
      mayor = numeros[i];
    }else{
      console.log(`Valor que no afecta: ${numeros[i]}`)
    }
  }
  alert(`De los numeros ${numeros.join(' / ')}\nEl menor es: ${menor}
  \nEl mayor es: ${mayor}`);
}

//Ejemplo completo
//Tarea: unir los consoles.log en una alerta
//Eliminar el ultimo valor y mostrarlo
//Añadir dos valores nuevos con .push (prompt) ok
//Contar cantidad de ventas mayores que $10.000
function calcularVentas(){
  let ventas = [5000,8000,12000,3000,10000,9000,4000];
let total = 0;
let mayores = [];
let contadorVentas = 0;
let mayor = ventas[0];
let valorEliminado = ventas.pop();
let valor1 =parseInt(prompt("Ingrese primer valor:"));
let valor2 =parseInt(prompt("Ingrese primer valor:"));
ventas.push(valor1, valor2);
for(let i=0;i<ventas.length;i++){
    total += ventas[i];
    if(ventas[i] > mayor){
        mayor = ventas[i];
        if( ventas[i] >= 10000){
          mayores.push(ventas[i])
          contadorVentas++;
        }
    }
}
alert(`Total ventas: ${total}\nMayor: ${mayor});
Promedio: ${total/ventas.length} Valores sobres $10000: ${mayores.join(' /')}
Conte de mayores: ${contadorVentas} ventas
Valor Ekiminado: ${valorEliminado}`);
}





// ## Ejercicio 1

// Crear el siguiente arreglo.

// ```javascript
// let edades = [15,18,20,14,25];
// ```

// Mostrar:

// - Primera edad.
// - Última edad.
// - Cantidad de elementos.


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




