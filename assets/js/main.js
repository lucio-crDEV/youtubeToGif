// main.js


// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listener al botón de carga
    const cargarBoton = document.querySelector('button[type="submit"]');
    
    cargarBoton.addEventListener('click', cargarVideo);
});

// Función para cargar el video
function cargarVideo() {
    // Obtener el valor del input de la URL del video
    const urlInput = document.getElementById('inputUrl');
    const videoUrl = urlInput.value;
    
    // Crear un elemento de video
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true; // Agregar controles de reproducción
    
    const videoContainer = document.querySelector('.preview'); // Cambiar por el contenedor correcto
    console.log(videoContainer.lastChild)
    
    videoContainer.appendChild(video);
    // Agregar el video al DOM
    // if(!videoContainer.lastChild()){
    // } else {
        // videoContainer.removeChild(video);
    // }
}
