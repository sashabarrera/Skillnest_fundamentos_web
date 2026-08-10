console.log("Prueba de conexion Js...");

document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColorBody()}); 

document.getElementById("colorButton2").addEventListener("click", function () { 
    cambiarColor()});

    document.getElementById("colorButton3").addEventListener("click", function () {
    cambiar()});

function cambiarColorBody() {
    let colores = ["#757474", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("body");
    elemento.style.backgroundColor = colorAleatorio;
}

function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#20025c", "#dbdbda", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja1");
    elemento.style.backgroundColor = colorAleatorio;
}

function cambiar() {
    let colores = ["#b91c00", "#c6f7e6", "#cfc2c2", "#ffd700", "#1e303f", "#c5b9b4"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja2");
    elemento.style.backgroundColor = colorAleatorio;
}

