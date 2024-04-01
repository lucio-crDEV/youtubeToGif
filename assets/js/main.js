import * as BcDLP  from 'bc-dlp';
// import * as EventEmitter  from '../../node_modules/events/events.js';

document.addEventListener('DOMContentLoaded', function () {
    // Agregar event listener al botón de carga
    const cargarBoton = document.querySelector('button[type="submit"]');

    cargarBoton.addEventListener('click', cargarVideo);
});

// Función para cargar el video
async function cargarVideo() {
    // Obtener el valor del input de la URL del video
    const urlInput = document.getElementById('inputUrl');
    const videoUrl = urlInput.value;

    // Crear un nuevo objeto BcDLP
    const bcDLP = new BcDLP('yt-dlp');

    // Obtener la metadata del video
    const metadata = await bcDLP.getVideoInfo(videoUrl);

    // Obtener el título del video
    const videoTitle = metadata.title;
    console.log('Título del video:', videoTitle);

    // Ejecutar yt-dlp para obtener un ReadableStream del video
    const { readStream, execEventEmitter } = bcDLP.execStream([
        videoUrl,
        '-f',
        'best',
        '-o',
        `${videoTitle}.mp4` // Utilizar el título del video como nombre de archivo
    ]);

    // Crear un elemento de video
    const videoElement = document.createElement('video');
    videoElement.controls = true;

    // Establecer el stream como fuente del elemento de video
    videoElement.srcObject = readStream;

    // Agregar el elemento de video al contenedor de previsualización
    const previewContainer = document.querySelector('.video-preview');
    previewContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar el video
    previewContainer.appendChild(videoElement);

    // Mostrar la sección de previsualización
    const previewSection = document.querySelector('.preview');
    previewSection.classList.remove('d-none');

    // Agregar event listener al botón de descarga
    const downloadButton = document.querySelector('.download');
    downloadButton.addEventListener('click', () => {
        // Descargar el video una vez completada la descarga
        const videoFilePath = `${videoTitle}.mp4`; // Utilizar el título del video como nombre de archivo
        const writeStream = fs.createWriteStream(videoFilePath);
        readStream.pipe(writeStream);

        // Manejar eventos de escritura
        writeStream.on('finish', () => {
            console.log('Video saved successfully');
        });

        writeStream.on('error', (error) => {
            console.error('Error saving video:', error);
        });
    });

    // Agregar event listener al botón de cancelar
    const cancelButton = document.querySelector('.cancel');
    cancelButton.addEventListener('click', () => {
        // Cancelar la descarga del video
        // Por ejemplo, puedes cerrar el stream
        readStream.destroy();
        console.log('Download cancelled');
    });

    // Manejar eventos del stream
    execEventEmitter.on('progress', (progress) => {
        console.log('Progress:', progress.percent, progress.totalSize);
    });

    execEventEmitter.on('error', (error) => {
        console.error('Error:', error);
    });

    execEventEmitter.on('close', () => {
        console.log('Download complete');
    });
}
