document.addEventListener('DOMContentLoaded', function () {
    const formSup = document.getElementById('form-sup');
    formSup.addEventListener('submit', function (event) {
        // Prevenir el envío del formulario
        event.preventDefault();
        // Obtener los valores de los inputs
        const email = document.getElementById('newsletterEmail').value.trim();
        // Obtener los elementos para mostrar errores
        const emailError = document.getElementById('emailErrorSup');
        // Limpiar mensajes de error anteriores
        emailError.textContent = '';
        let isValid = true;
        // Validar email
        if (email === '') {
            emailError.textContent = 'El email es requerido.';
            isValid = false;
            document.getElementById('newsletterEmail').style.borderColor = 'red';
        } else if (!validateEmail(email)) {
            emailError.textContent = 'El email no es válido.';
            isValid = false;
            document.getElementById('newsletterEmail').style.borderColor = 'red';
        } else {
            document.getElementById('newsletterEmail').style.borderColor = 'green';
        }

        // Si todo es válido, enviar el formulario
        if (isValid) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '¡Suscripción exitosa!',
                html: `<strong>${email}</strong> se ha suscrito correctamente.`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                toast: true,
                background: '#fff',  // Cambia el color de fondo del toast
                customClass: {
                    popup: 'swal-wide'  // Clase personalizada para ajustar el ancho del popup si es necesario
                }
            });
            formSup.reset();
        }
    });

    formSup.addEventListener('reset', function () {
        // Restaurar el borde cuando el formulario se reinicia
        const inputs = formSup.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.borderColor = ''; // Restablece el color del borde al valor por defecto
        });
    });
});

// Función para validar el formato del email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}