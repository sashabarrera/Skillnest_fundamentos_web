console.log("Prueba de conexion Js...");


let boton = document.getElementById("cambiarTexto");

boton.addEventListener("click", function () {
    let textoBoton = boton.textContent; 
    if (textoBoton == "Cerrar sesión") {
        this.innerText = "Iniciar sesión";
    } else {
        this.innerText = "Cerrar sesión";
    }

});

function perfil(){
    alert("!Bienvenido¡");
}

let botonMegusta = document.getElementById("like");

botonMegusta.addEventListener("click", function () {
    let cantidad = parseInt(botonMegusta.textContent) + 1;
    botonMegusta.innerText = cantidad + " Me gusta";
});

let botonMegusta2 = document.getElementById("like2");

botonMegusta2.addEventListener("click", function () {
    let cantidad = parseInt(botonMegusta2.textContent) + 1;
    botonMegusta2.innerText = cantidad + " Me gusta";
});



