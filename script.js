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


/* Cambios Realizados por Javier */
// 1. Funcion para poder desplegar los temas de investigacion de forma animada al hacer click
//    todo esto mediante una lista

function mostrarArticulos(id) {
    const lista = document.getElementById(id);
    if (lista.style.display === "none") { // Se modifica el atributo de lista "display: none" --> No visible
        lista.style.display = "block"; // Por el de lista "display:block" --> Mostrar el elemento como bloque en un contenedor
    } else {
        lista.style.display = "none";
    }
}

// 2. Ocultar o mostrar la tabla de artículos
function toggleTabla() {
    const tabla = document.querySelector("#articulos table");
    if (tabla.style.display === "none") {
        tabla.style.display = "table";
    } else {
        tabla.style.display = "none";
    }
}

// 3. Funcion para mostrar mensaje al pasar el mouse por encima del titulo

function mensajeTitulo() {
    alert("Este es el tema principal del proyecto");
}

// Funciones agregadas por Andrés Gámez

// Validar formulario
function validarFormulario(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor complete todos los campos antes de enviar.");
    return false;
  }

  enviarMensaje();
  resetearFormulario();
}

// Mostrar mensaje de confirmación
function enviarMensaje() {
  alert("¡Gracias por contactarnos! Tu mensaje fue enviado con éxito.");
}

// Resetear formulario
function resetearFormulario() {
  document.getElementById("formContacto").reset();
}

// Vincular validación al evento submit
document.getElementById("formContacto").addEventListener("submit", validarFormulario);