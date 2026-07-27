console.log("Prueba de conexion Js...");

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
alert(p1);
alert(`Ingredientes de la segunda pizza:
    Pan: ${p2.pan}
    Salsas: ${p2.salsas}
    Queso: ${p2.queso.join(" - ")}}
    Ingredientes: ${p2.salsas}`);
console.log(p1);



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
    ["pepperoni","salame"]
);
let m2 = pizzaOven(
    "deep-dish",
    "tomate",
    ["mozzarella","feta"],
    ["choclo","aceitunas","huevo"]
);
alert(m1);
alert(`Ingredientes de la segunda pizza:
    Pan: ${m2.pan}
    Salsas: ${m2.salsas}
    Queso: ${m2.queso.join(" - ")}}
    Ingredientes: ${m2.salsas}`);
console.log(m1);






