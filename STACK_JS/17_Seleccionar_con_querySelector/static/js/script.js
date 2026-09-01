console.log("Conexion correcta...");

//Seleccion de titulo con querySelector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del titulo es: ${title.textContent}`)
//Seleccionar un parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);

//Seleccionar dentro de nav

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

//Selecctionar parrafos
let parrafos = document.querySelector(".texto");
console.log(parrafos.textContent); // "Este es el primer párrafo."

//Elemento inexistente
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}


//Tarea:

/*Crear un botón y aplicar condicion al igual que ejemplo...
- Debe cambiar su texto al momento de hacer click
- Debe activarse un hover js cambiando el color de fondo 
*/

const botoncito = document.querySelector("#main-boton")


botoncito.addEventListener("click", function () {
    if (botoncito !== null) {//boton existe?
        if (this.textContent === "Haz click en mi y cambiare") {
            this.textContent === "Ves que es distinto?"
            this.style.backgroundColor = "pink"
            this.style.color = "black"
        } else {
            this.textContent = "Haz click en mi y cambiare"
            this.style.backgroundColor = "gray"
            this.style.color = "white"
        }
    } else { //boton no existe
        console.log("El botón no existe.");
    }
    });























