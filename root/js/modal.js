// Obtener los elementos del DOM
const modalLocalidad = document.getElementById("modalLocalidad");
const modalTelefono = document.getElementById("modalTelefono");
const modalCorreo = document.getElementById("modalCorreo");

const imgLocalidad = document.getElementById("localidadImg");
const imgTelefono = document.getElementById("telefonoImg");
const imgCorreo = document.getElementById("correoImg");

const closeButtons = document.getElementsByClassName("close");

// Función para abrir el modal correspondiente
function openModal(modal) {
    modal.style.display = "flex";
}

// Función para cerrar el modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Asociar los eventos de clic para abrir los modales
imgLocalidad.onclick = function() {
    openModal(modalLocalidad);
}

imgTelefono.onclick = function() {
    openModal(modalTelefono);
}

imgCorreo.onclick = function() {
    openModal(modalCorreo);
}

// Asociar eventos de clic a todos los botones de cerrar (X)
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        closeModal(this.parentElement.parentElement);
    }
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
}