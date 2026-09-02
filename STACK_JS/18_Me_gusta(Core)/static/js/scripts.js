console.log("Conexión correcta...");

let publicaciones = document.querySelectorAll('.contenedor-likes');

for (let i = 0; i < publicaciones.length; i++) {
    let publicacion = publicaciones[i];


    let boton = publicacion.querySelector('.descripcion-boton');
    let contador = publicacion.querySelector('#meGustas');
    let likes = 0;

    if (boton && contador) {
        boton.addEventListener('click', () => {
            likes++;
            contador.textContent = `${likes} like(s)`;
        });
    }
}


