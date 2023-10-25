const btnPerfil = document.getElementById("icono");
const btnLogin = document.getElementById("cerrarSesion");
const btnPerfilDatos = document.getElementById("datosperfil");

document.getElementById("itemPerfil1").style.display = "none";
document.getElementById("itemPerfil2").style.display = "none";

function esPar(numero) {
    return numero % 2 === 0;
}

let count = 1
btnPerfil.addEventListener("click", function() {
    console.log("si hay click")
    if (esPar(count) === false) {
        document.getElementById("itemPerfil1").style.display = "";
        document.getElementById("itemPerfil2").style.display = "";
    }else{
        document.getElementById("itemPerfil1").style.display = "none";
        document.getElementById("itemPerfil2").style.display = "none";
    };
    count = count + 1
});
