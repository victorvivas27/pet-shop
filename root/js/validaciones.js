document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    
    form.addEventListener('submit', function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Obtener los valores de los inputs
        const name = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('telefono').value.trim();

        // Obtener los elementos para mostrar errores
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');

        // Limpiar mensajes de error anteriores
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';

        let isValid = true;

        // Validar nombre
        if (name === '') {
            nameError.textContent = 'El nombre es requerido.';
            isValid = false;
            document.getElementById('nombre').style.borderColor = 'red';
        } else {
            document.getElementById('nombre').style.borderColor = 'green';
        }

        // Validar email
        if (email === '') {
            emailError.textContent = 'El email es requerido.';
            isValid = false;
            document.getElementById('email').style.borderColor = 'red';
        } else if (!validateEmail(email)) {
            emailError.textContent = 'El email no es válido.';
            isValid = false;
            document.getElementById('email').style.borderColor = 'red';
        } else {
            document.getElementById('email').style.borderColor = 'green';
        }

        // Validar teléfono
        if (phone === '') {
            phoneError.textContent = 'El teléfono es requerido.';
            isValid = false;
            document.getElementById('telefono').style.borderColor = 'red';
        } else if (!validatePhone(phone)) {
            phoneError.textContent = 'El teléfono no es válido.';
            isValid = false;
            document.getElementById('telefono').style.borderColor = 'red';
        } else {
            document.getElementById('telefono').style.borderColor = 'green';
        }

        // Si todo es válido, enviar el formulario
        if (isValid) {
            alert('Formulario enviado correctamente!');
            // Aquí puedes hacer la lógica para enviar el formulario
            // e.g., enviar los datos a un servidor
            form.reset();
        }
    });

    form.addEventListener('reset', function() {
        // Restaurar el borde cuando el formulario se reinicia
        const inputs = form.querySelectorAll('input');
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

// Función para validar el formato del teléfono
function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/; // Ejemplo: solo números, 10 dígitos
    return phoneRegex.test(phone);
}