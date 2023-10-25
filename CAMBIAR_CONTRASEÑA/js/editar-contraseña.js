const actual = document.getElementById("contraseña-actual");
const nueva = document.getElementById("contrasena");
const confirmar = document.getElementById("confirmar-contrasena");
const btnVerContraA = document.getElementById("verContraA");
const btnVerContraN = document.getElementById("verContraN");
const btnVerContraC = document.getElementById("verContraC");
const btnGuardar = document.getElementById("boton");


btnGuardar.addEventListener("click", function() {

  // Aca verifico que la contraseña cumpla los requisitos con if else y usando regedix
  // Mostrando alertas especificas en caso de que la contraseña no cumpla algun requisito
  if (!/.{8,}$/.test(nueva.value)) {
      alert("La nueva contraseña tiene una longitud menor a 8 caracteres");

  } else if (!/[0-9]/.test(nueva.value)) {
      alert("La nueva contraseña debe tener numeros");
      
  } else if (!/[a-zA-Z]/.test(nueva.value)) {
      alert("La nueva contraseña debe tener letras");

  } else if (!/[^a-zA-Z0-9]/.test(nueva.value)) {
      alert("La nueva contraseña debe contener al menos un simbolo, excepto @");

  } else if (/[@]/.test(nueva.value)) {
      alert("La nueva contraseña no puede tener el @");

  } else if (nueva.value !== confirmar.value) {
      alert("La nueva contraseña no coincide con la confirmacion de contraseña");

  } else{
      try {
          alert("Datos enviados");
          window.location.href = "/LOGIN/html/login.html";
      } catch (error) {
          console.log('Error: Algo fallo en el envio de los datos', error);
      }
  }
});

btnVerContraA.addEventListener("mousedown", function() {
  actual.type = "text";
});
btnVerContraA.addEventListener("mouseup", function() {
  actual.type = "password";
});

btnVerContraN.addEventListener("mousedown", function() {
  nueva.type = "text";
});
btnVerContraN.addEventListener("mouseup", function() {
  nueva.type = "password";
});

btnVerContraC.addEventListener("mousedown", function() {
  confirmar.type = "text";
});
btnVerContraC.addEventListener("mouseup", function() {
  confirmar.type = "password";
});
  