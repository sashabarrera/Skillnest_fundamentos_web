console.log("Prueba de conexion Js...");


let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes: function () {
        console.log("Pan:", this.pan);
        console.log("Carne:", this.carne);
        console.log("Queso:", this.queso);
        console.log(
            "Extras:",
            this.extras.join(", ")
        );
    }
};

//Acceder al pan

console.log(hamburguesaEspecial.pan);
hamburguesaEspecial.mostrarIngredientes();


//Objeto con metodos automovil
function caracteristicasAuto(){

    let auto = {
        Auto: "Toyota",
        marca: "Toyota",
        modelo: "Corolla",
        año: 2023,
        encender: function () {
            alert("Encendiendo",)
            alert(`Auto: ${this.Auto}`)
            alert(`marca: ${this.marca}`)
            alert(`modelo: ${this.modelo}`)
            alert(`año: ${this.año}`);
        }
    };
    auto.encender();
}


//Objeto con metodos casa
function mostrarInformaciones() {
    let casa = {
        direccion: "Av. Siempre Viva 742",
        habitaciones: 4,
        baños: 2,
        mostrarInformacion: function () {
            alert(`Direction: ${this.direccion}`)
            alert(`Habitaciones: ${this.habitaciones}`)
            alert(`Baños: ${this.baños}`);
        }
    };
    casa.mostrarInformacion();
}

