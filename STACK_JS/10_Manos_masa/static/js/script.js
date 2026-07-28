console.log("Prueba de conexion Js...");
function  pizza(){
    function pizzaOven(pan, salsas, queso, ingredientes) {
        let pizzaChicago = {};
            pizzaChicago.pan = pan;
            pizzaChicago.salsas = salsas;
            pizzaChicago.queso =  queso;
            pizzaChicago.ingredientes = ingredientes;
            return pizzaChicago;
    }
    let p1 =  pizzaOven(
        "deep-dish",
        "ketchup",
        ["mozzarella","cheddar"],
        ["pepperoni","salchicha"]
    );
    let p2 = pizzaOven(
        "deep-dish",
        "marina",
        ["mozzarella","feta"],
        ["champiñones","aceitunas","cebolla"]
    );
    alert(`Una pizza “estilo Chicago”:
        Pan: ${p1.pan}
        Salsas: ${p1.salsas}
        Queso: ${p1.queso.join(" - ")}
        Ingredientes: ${p1.salsas}`);

    alert(`Una pizza “estilo Chicago”:
        Pan: ${p2.pan}
        Salsas: ${p2.salsas}
        Queso: ${p2.queso.join(" - ")}
        Ingredientes: ${p2.salsas}`);
}


function misPizzas(){
    function mipizzaFavorita(pan, salsas, queso, ingredientes) {
        let pizzaNapolitana = {};
            pizzaNapolitana.pan = pan;
            pizzaNapolitana.salsas = salsas;
            pizzaNapolitana.queso =  queso;
            pizzaNapolitana.ingredientes = ingredientes;
            return pizzaNapolitana;
    }
    let m1 =  mipizzaFavorita(
        "deep-dish",
        "tomate",
        ["mozzarella","cheddar"],
        ["pepperoni","salame"],
    );
    let m2 = mipizzaFavorita(
        "deep-dish",
        "tomate",
        ["mozzarella","feta"],
        ["choclo","aceitunas","huevo"],
    );
    alert(`Ingredientes de la segunda pizza:
        Pan: ${m1.pan}
        Salsas: ${m1.salsas}
        Queso: ${m1.queso.join(" - ")}
        Ingredientes: ${m1.ingredientes}`);

    alert(`Ingredientes de la segunda pizza:
        Pan: ${m2.pan}
        Salsas: ${m2.salsas}
        Queso: ${m2.queso.join(" - ")}
        Ingredientes: ${m2.ingredientes}`);
}

