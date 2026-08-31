console.log("Conexion corecta...");

const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", function () {
    console.log("El cursor esta sobre");
    imagen.src = "https://image.made-in-china.com/202f0j00UkAbMChILOul/Wheat-Field-Scenery-Handpainted-Oil-Painting-Wall-Art-for-Home-Decor.webp"
});


imagen.addEventListener("mouseout", function () {
    console.log("El ratón ha salido de la imagen");

    imagen.src = "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436535/2383011/main-image";
});