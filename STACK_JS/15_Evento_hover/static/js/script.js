console.log("Prueba de conexion Js...");

const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "Blue";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "red";
});

//Tarea 
/*Crear dos botones con evento onmouseover y onmouseout
-Cambia el texto de un boton
-Cambiar el color de fonto y color de texto del segundo boton.
*/

const boton2 = document.getElementById("miBoton2");

boton2.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton2.style.backgroundColor = "Blue";
    boton2.innerText = "Haz cambiado el texto!";
});

boton2.addEventListener("mouseout", function () {
    console.log("El ratón está sobre el botón");
    boton2.style.backgroundColor = "red";
    boton2.innerText = "Haz cambiado el texto!";
});





const boton3 = document.getElementById("miBoton3");


boton3.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton3.style.backgroundColor = "white";
    boton3.style.color = "black";
    boton3.innerText = "Haz cambiado el texto!";
});

boton3.addEventListener("mouseout", function () {
    console.log("El ratón está sobre el botón");
    boton3.style.backgroundColor = "red";
    boton3.innerText = "Haz cambiado el texto!";
});



