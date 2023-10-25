const telefonoInput = document.getElementById("telefono");
const errorMensaje = document.getElementById("error-mensaje");
const guardarBoton = document.getElementById("boton");

telefonoInput.addEventListener("input", function() {
    const valor = telefonoInput.value;
    const telefonoRegex = /^\d{5,10}$/; // Expresión regular para validar 5 a 10 dígitos

    if (!telefonoRegex.test(valor)) {
        errorMensaje.textContent = "El teléfono debe tener entre 5 y 10 dígitos.";
        guardarBoton.disabled = true; // Deshabilita el botón si el teléfono no es válido.
    } else {
        errorMensaje.textContent = "";
        guardarBoton.disabled = false; // Habilita el botón si el teléfono es válido.
    }
});

guardarBoton.addEventListener("click", function () {
    try {
        alert("Datos enviados");
        window.location.href = "/FRONT_PAGE/html/index.html";
    } catch (error) {
        console.log('Error: Algo fallo en el envio de los datos', error);
    }
})