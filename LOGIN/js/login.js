// Aca me traigo botones y elementos html para manejar logica del login
const usuarioI = document.getElementById("usuarioI");
const contrasenaI = document.getElementById("contrasenaI");
const btnIngresar = document.getElementById("ingresar");
const btnCrear = document.getElementById("crear");
const contrasenaR = document.getElementById("contrasenaR");
const btnNoCuenta = document.getElementById("noCuenta");
const btnNoContra = document.getElementById("noContra");
const btnCancelar = document.getElementById("cancelar");
const btnVerContraI = document.getElementById("verContraI");
const btnVerContraR = document.getElementById("verContraR");
const correo = document.getElementById("correo");

btnIngresar.addEventListener("click", function() {

    //Aca se traen los datos de la base de datos y permite o no el acceso
    try {
        alert("Datos Validos");
        window.location.href = "/FRONT_PAGE/html/index.html";
    } catch (error) {
        console.log('Error: Algo fallo en el envio de los datos', error);
    }
    
});


// Aca define acciones a ejecutar al presionar elementos html
btnCrear.addEventListener("click", function() {

    let esUPB;

    //Si el correo de registro pertecene al dominio UPB la variable se define como 1,
    // de lo contrario se define como 0.
    if (correo.value.match(/upb\.edu\.co/)) {
        esUPB = 1;
        console.log(esUPB);
    } else {
        esUPB = 0;
        console.log(esUPB);
    }

    // Aca verifico que la contraseña cumpla los requisitos con if else y usando regedix
    // Mostrando alertas especificas en caso de que la contraseña no cumpla algun requisito
    if (!/.{8,}$/.test(contrasenaR.value)) {
        alert("La contraseña tiene una longitud menor a 8 caracteres");

    } else if (!/[0-9]/.test(contrasenaR.value)) {
        alert("La contraseña debe tener numeros");
        
    } else if (!/[a-zA-Z]/.test(contrasenaR.value)) {
        alert("La contraseña debe tener letras");

    } else if (!/[^a-zA-Z0-9]/.test(contrasenaR.value)) {
        alert("La contraseña debe contener al menos un simbolo, excepto @");

    } else if (/[@]/.test(contrasenaR.value)) {
        alert("La contraseña no puede tener el @");
    } else{
        try {
            alert("Datos enviados");
            window.location.href = "/LOGIN/html/login.html";
        } catch (error) {
            console.log('Error: Algo fallo en el envio de los datos', error);
        }
    }
});

//Al darle click a "No tienes cuenta?" oculta el componente del login y muestra el de registro, sin actualizar la pagina
btnNoCuenta.addEventListener("click", function() {
    document.getElementById("login").classList.add("oculto"); // Para ocultar el login
    document.getElementById("registro").classList.remove("oculto"); // Para mostrar el registro
});

//Acá es al contrario que lo anterior, en la ventana de registro al darle "Cancelar", oculta el componente de registro y muestra de nuevo Login
btnCancelar.addEventListener("click", function() {
    document.getElementById("registro").classList.add("oculto"); // Para ocultar el registro
    document.getElementById("login").classList.remove("oculto"); // Para mostrar el login
});

//Esto esta asociado al boton que permite visualizar la contraseña de registro.
btnVerContraI.addEventListener("mousedown", function() {
    contrasenaI.type = "text";
});
btnVerContraI.addEventListener("mouseup", function() {
    contrasenaI.type = "password";
});

btnVerContraR.addEventListener("mousedown", function() {
    contrasenaR.type = "text";
});
btnVerContraR.addEventListener("mouseup", function() {
    contrasenaR.type = "password";
});

btnNoContra.addEventListener("click", function() {
    window.location.href = "/CAMBIAR_CONTRASEÑA/html/editar-contraseña.html";
})
