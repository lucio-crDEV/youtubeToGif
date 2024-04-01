// main.js
// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    // Código que se ejecuta cuando el DOM está completamente cargado
    
    // Aquí podrías inicializar cualquier configuración necesaria
    
    // Por ejemplo, podrías agregar event listeners para manejar la carga del video
    const cargarBoton = document.querySelector('button[type="submit"]');
    cargarBoton.addEventListener('click', cargarVideo);
});

// Función para cargar el video
function cargarVideo() {
    // Obtener el valor del input de la URL del video
    const urlInput = document.getElementById('inputUrl');
    const videoUrl = urlInput.value;
    
    console.log(videoUrl)

    // Llamar a la función de procesamiento de video utilizando ffmpeg.js
    // procesarVideo(videoUrl);
    gifshot.GIFEncoder(100, 100)
}

// console.log('hola')