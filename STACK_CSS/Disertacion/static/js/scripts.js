console.log("Conexion exitosa con JS...");

function iniciarSesion() {
    // 1. Definimos los datos correctos del usuario
    const usuarioCorrecto = "admin";
    const claveCorrecta = "1234";

    // 2. Solicitamos los datos al usuario usando let y prompt
    let usuarioIngresado = prompt("Ingresa tu nombre de usuario:");
    let claveIngresada = prompt("Ingresa tu contraseña:");

    // 3. Validamos los datos con IF / ELSE
    if (usuarioIngresado === usuarioCorrecto && claveIngresada === claveCorrecta) {
        alert("¡Inicio de sesión exitoso! Bienvenido al sistema.");
    } else {
        alert("Error: Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}