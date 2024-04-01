/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ (() => {

eval("// main.js\n// Configuración inicial\ndocument.addEventListener('DOMContentLoaded', function() {\n    // Código que se ejecuta cuando el DOM está completamente cargado\n    \n    // Aquí podrías inicializar cualquier configuración necesaria\n    \n    // Por ejemplo, podrías agregar event listeners para manejar la carga del video\n    const cargarBoton = document.querySelector('button[type=\"submit\"]');\n    cargarBoton.addEventListener('click', cargarVideo);\n});\n\n// Función para cargar el video\nfunction cargarVideo() {\n    // Obtener el valor del input de la URL del video\n    const urlInput = document.getElementById('inputUrl');\n    const videoUrl = urlInput.value;\n    \n    console.log(videoUrl)\n\n    // Llamar a la función de procesamiento de video utilizando ffmpeg.js\n    // procesarVideo(videoUrl);\n    gifshot.GIFEncoder(100, 100)\n}\n\nconsole.log('hola')\n\n//# sourceURL=webpack://youtubetogif/./assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/main.js"]();
/******/ 	
/******/ })()
;