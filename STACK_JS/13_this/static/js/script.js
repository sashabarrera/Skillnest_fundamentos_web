console.log("Prueba de conexion Js...");



// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");
//Guardando una referencioa

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    let textoBoton = boton.textContent; //Guardando texto del boton
    if (textoBoton == "Haz clic en mí") {
        this.innerText = "¡Texto cambiado!";
    }else{
        this.innerText = "Haz clic en mí";
    }
    // Cambia el texto del botón usando `this`
    //innerText: Texto de la etiqueta
});

