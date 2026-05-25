console.log("Conexion exitosa..");

// ✅ Ejercicio 1: Sistema de descuento
// 📝 Enunciado
// Una tienda realiza descuentos según el monto de compra:
// Si la compra es mayor o igual a $50.000 → 20% descuento
// Si la compra es mayor o igual a $30.000 → 10% descuento
// Si la compra es menor a $30.000 → sin descuento
// El programa debe solicitar:
// Nombre del cliente
// Monto de compra
// Luego mostrar:
// Descuento aplicado
// Total a pagar

function sistemaDescuento(){
    let nombre=prompt("ingrese su nombre");
    let monto= parseInt(prompt("Ingrese el monto de compra: "))
    if(monto >= 50000){
        alert(`El monto con descuento es: ${monto - (monto * 0.20)}`)
    }else if(monto >= 30000){
        alert(`El monto con decuento es:  ${monto - (monto * 0.1)}`)
    }else if(monto <= 30000 && monto >0){
        alert(`El monto final es: ${monto}. Sin descuento`)
    }else{
        alert("Ingrese valores validos");
    }
}


// ✅ Ejercicio 2: Acceso a evento
// 📝 Enunciado
// Una persona puede ingresar a un evento si:
// Tiene 18 años o más
// O viene acompañada por un adulto
// Solicitar:
// Edad
// Si viene acompañado (si o no)
// Mostrar:
// “Acceso permitido”
// o “Acceso denegado”

function accesoVento(){
    let edad=parseInt(prompt("Ingrese su edad"))
    if(edad > 18){
        alert("acceso permitido!")
    }
    else if (edad < 18 && edad > 0){
        let permitido = prompt("¿Viene con un acompañate?: si/no");
        if(permitido == "si"){
            alert("Acceso permitido")
        }else if (permiso == "no"){
            alert("Acceso denegado")
        }else{
            alert("Ingrese valores validos")
        }
    }
}








// ✅ Ejercicio 3: Clasificación de temperatura
// 📝 Enunciado
// Solicitar una temperatura y clasificar:
// Menor a 10 → “Hace frío”
// Entre 10 y 24 → “Temperatura agradable”
// 25 o más → “Hace calor”
// Además:
// Si la temperatura supera los 35 grados, mostrar una alerta adicional:
//  “Temperatura extrema”.
