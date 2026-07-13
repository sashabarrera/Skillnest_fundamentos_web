console.log("Conexion correcta...");
// # Ejercicio 1: Calculadora de Envío

// ## Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho

function ejercicio1(){
    let nombreCliente = prompt("Ingresar nombre del cliente:");
    let peso = parseInt(prompt("Ingresar peso de paquete:"));
    let valorDespacho = 2000;
    let totalDespacho = 0;
    let mensaje = "";
    if ( peso > 0 && peso < 2){
       totalDespacho = peso * valorDespacho;
    } else if(peso > 2 && peso <= 5 ){
        totalDespacho = peso * valorDespacho;;
    } else if(peso > 5 && peso <= 10 ){
        totalDespacho = peso * valorDespacho;
    } else if(peso > 10 && peso < 50 ){
       totalDespacho = peso * valorDespacho;
    } else{
        mensaje = "Ingresar valores validos!!";
    }

    mensaje = `Nombre Cliente: ${nombreCliente} \nPaquete pesa: ${peso}kg
    \nValor despacho: $${valorDespacho * peso}`;
}

// ---

// # Ejercicio 2: Acceso a Biblioteca

// ## Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

function ejercicio2() {
    let tipoUsuario = prompt("Ingrese tipo de usuario (estudiante / profesor):").toLowerCase();
    let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros solicitados:"));
    let limiteEstudiante = 2;
    let limiteProfesor = 5;
    if (tipoUsuario == "estudiante" && cantidadLibros <= limiteEstudiante) {
        alert(`Préstamo permitido. ¡Disfruta tus ${cantidadLibros} libros, estimado Estudiante!`);
    } else if (tipoUsuario == "estudiante" && cantidadLibros > limiteEstudiante) {
        alert(`Préstamo denegado. Como Estudiante, superas el límite permitido de ${limiteEstudiante} libros.`);
    } else if (tipoUsuario == "profesor" && cantidadLibros <= limiteProfesor) {
        alert(`Préstamo permitido. Profesor, se le han asignado sus ${cantidadLibros} libros para sus clases.`);
    } else if (tipoUsuario == "profesor" && cantidadLibros > limiteProfesor) {
        alert(`Préstamo denegado. Estimado Profesor, ha superado su límite de ${limiteProfesor} libros.`);
    } else {
        alert("Error: Tipo de usuario no válido o cantidad incorrecta. Intente de nuevo.");
    }
}


// Utilizar operadores lógicos para realizar las validaciones.

// ---

// # Ejercicio 3: Clasificación Deportiva

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

function ejercicio3(){
    let nombrePariente = prompt("Ingrese nombre del pariente:");
    let edad =  parseInt(prompt("Ingresar tu edad:"));
    let categoríasInfantil =  12;
    let categoriaJovenil = 19;
    let categoriaAdulto = 64;
    let categoriaMayor = 90;
    if(edad >= 0 && edad <= 12){
        alert(`Nombre: ${nombrePariente}\nEdad: ${edad}\nCategoria asignada: Infantil `);
    } else if(edad >= 13 && edad <=19){
        alert(`Nombre: ${nombrePariente}\nEdad: ${edad}\nCategoria asiganada: Juvenil`);
    } else if(edad >= 20 && edad <= 64){
        alert(`Nombre: ${nombrePariente}\nEdad: ${edad}\nCategoria asignada: Adulto `);
    } else if(edad >= 65 && edad <= 90){
        alert(`Nombre: ${nombrePariente}\nEdad: ${edad}\nCategoria asiganada: Mayor`);
    } else{
        alert("Ingrese valores validos");
    }
}



// ---

// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

function ejercicio4() {
    let nombreTrabajador = prompt("Ingrese su nombre:");
    let edad = parseInt(prompt("Ingrese sus años de servicio:"));
    
    let antiguedad = "";
    let recibeBono = "";

    if (edad >= 0 && edad <= 2) {
        antiguedad = "Principiante";
        recibeBono = "No recibe bonificación (Se requiere más de 2 años).";
    } else if (edad > 2 && edad <= 5) {
        antiguedad = "Intermedio";
        recibeBono = "¡Sí recibe bonificación de nivel bajo!";
    } else if (edad > 5 && edad <= 10) {
        antiguedad = "Avanzado";
        recibeBono = "¡Sí recibe bonificación de nivel medio!";
    } else if (edad > 10) {
        antiguedad = "Experto / Senior";
        recibeBono = "¡Sí recibe bonificación máxima!";
    } else {
        alert("Error: Ingrese una cantidad de años válida.");
        return; 
    }

    alert(`Nombre: ${nombreTrabajador}\nNivel de antigüedad: ${antiguedad}\nEstado: ${recibeBono}`);
}



// ---

// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida

// ---

function ejercicio5() {
    let nombreConductor = prompt("Ingrese el nombre del conductor:");
    let velocidad = parseInt(prompt("Ingrese la velocidad registrada (km/h):"));
    
    let limitePermitido = 120; // Límite máximo de velocidad de ejemplo
    let clasificacion = "";
    let mensajeExceso = "";

    if (velocidad >= 0 && velocidad <= 40) {
        clasificacion = "Velocidad Baja";
    } else if (velocidad > 40 && velocidad <= 90) {
        clasificacion = "Velocidad Moderada";
    } else if (velocidad > 90 && velocidad <= 120) {
        clasificacion = "Velocidad Alta (Dentro del límite)";
    } else if (velocidad > 120) {
        clasificacion = "Velocidad Peligrosa / Excesiva";
    } else {
        alert("Error: Ingrese un registro de velocidad válido.");
        return;
    }
    if (velocidad > limitePermitido) {
        mensajeExceso = `\n¡ALERTA!: Ha excedido la velocidad máxima permitida de ${limitePermitido} km/h.`;
    } else {
        mensajeExceso = "\nConducción segura. Respeta las señales de tránsito.";
    }

    alert(`Nombre del conductor: ${nombreConductor}\nVelocidad: ${velocidad} km/h\nClasificación: ${clasificacion}${mensajeExceso}`);
}









// # Desafío Extra

// Agregar una o más de las siguientes mejoras:

// - Validación de campos vacíos.
// - Validación de datos numéricos.
// - Mostrar mensajes utilizando emojis.
// - Mostrar resultados dentro del HTML utilizando `innerHTML`.
// - Cambiar colores o estilos mediante JavaScript según el resultado obtenido.

