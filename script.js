// 1. Mostrar un mensaje al cargar la página - este cambio fue hecho por janier
function bienvenida() {
    alert("Bienvenido al sitio sobre el impacto del COVID-19 en el empleo.");
}
window.onload = bienvenida;

// 2. Función para resaltar el tema al hacer clic  , Este cambio fue hecho por janier
function resaltarTema() {
    document.getElementById("tema").style.backgroundColor = "#e0f7fa";
}

// 3. Contador de artículos en la tabla , Este cambio fue hecho por janier
function contarArticulos() {
    let filas = document.querySelectorAll("#articulos table tr").length - 1; // quitar cabecera, Este cambio fue hecho por janier
    alert("Se han cargado " + filas + " artículos en la tabla.");
}
