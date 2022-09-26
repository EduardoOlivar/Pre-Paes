document.getElementById("btn-registro").addEventListener("click", registro);
document.getElementById("btn-login").addEventListener("click", login);
window.addEventListener("resize", anchoPagina);

let contenedorLoginRegistro = document.querySelector(
  ".contenedor-login-registro-form"
);
let formularioLogin = document.querySelector(".formulario-login");
let formularioRegistro = document.querySelector(".formulario-registro");
let formularioLoginInput = document.querySelector(".login");
let formularioRegistroInput = document.querySelector(".register");

function registro() {
  if (window.innerWidth > 850) {
    formularioRegistro.style.display = "block";
    contenedorLoginRegistro.style.left = "410px";
    formularioLogin.style.display = "none";
    formularioRegistroInput.style.opacity = "0";
    formularioLoginInput.style.opacity = "1";
  } else {
    formularioRegistro.style.display = "block";
    contenedorLoginRegistro.style.left = "0px";
    formularioLogin.style.display = "none";
    formularioRegistroInput.style.display = "none";
    formularioLoginInput.style.display = "block";
    formularioLoginInput.style.opacity = "1";
  }
}
function login() {
  if (window.innerWidth > 850) {
    formularioRegistro.style.display = "none";
    contenedorLoginRegistro.style.left = "10px";
    formularioLogin.style.display = "block";
    formularioRegistroInput.style.opacity = "1";
    formularioLoginInput.style.opacity = "0";
  } else {
    formularioRegistro.style.display = "none";
    contenedorLoginRegistro.style.left = "0px";
    formularioLogin.style.display = "block";
    formularioRegistroInput.style.display = "block";
    formularioLoginInput.style.display = "none";
  }
}

function anchoPagina() {
  if (window.innerWidth > 850) {
    formularioLoginInput.style.display = "block";
    formularioRegistroInput.style.display = "block";
  } else {
    formularioRegistroInput.style.display = "block";
    formularioRegistroInput.style.opacity = "1";
    formularioLoginInput.style.display = "none";
    formularioLogin.style.display = "block";
    formularioRegistro.style.display = "none";
    contenedorLoginRegistro.style.left = "0px";
  }
}

function ValidarDatos() {
  let mailErr = $("#correo").val();
  let passErr = $("#password").val();
  let userErr = $("#user").val();

  if (mailErr == "") {
    $(".mailErr").html("Por favor ingresa un correo");
  }
}