let correctas = [1, 3, 3];

//arreglo donde se guardean las respuestas del usaurio
let opcion_elegida = [];
let opcion_elegidaO = [];
let cantidad_correctas = 0;
let cantidad_omitidas = 0;

//funcion que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada) {
  //Guardo la respuesta elegida
  opcion_elegida[num_pregunta] = seleccionada.value;
  opcion_elegidaO[num_pregunta] = seleccionada;

  id = "p" + num_pregunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "";
  labels[5].style.backgroundColor = "";
  labels[7].style.backgroundColor = "";
  labels[9].style.backgroundColor = "";

  seleccionada.parentNode.style.backgroundColor = "#B3B6B7";
}

function corregir(pxPantalla) {
  cantidad_correctas = 0;
  cantidad_omitidas = 0;
  num_pregunta = 0;
  for (i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcion_elegida[i]) {
      cantidad_correctas++;
      opcion_elegidaO[i].parentNode.style.backgroundColor = "#26F9CA";
    }
    if (correctas[i] != opcion_elegida[i]) {
      opcion_elegidaO[i].parentNode.style.backgroundColor = "#FC6A6A";
    }
    $(".alternativa").removeClass("alternativa");

    document.getElementById("input01").disabled = true;
    document.getElementById("input02").disabled = true;
    document.getElementById("input03").disabled = true;
    document.getElementById("input04").disabled = true;
    document.getElementById("input05").disabled = true;
    document.getElementById("input06").disabled = true;
    document.getElementById("input07").disabled = true;
    document.getElementById("input08").disabled = true;
    document.getElementById("input09").disabled = true;
    document.getElementById("input10").disabled = true;
    document.getElementById("input11").disabled = true;
    document.getElementById("input12").disabled = true;
    document.getElementById("bot").disabled = true;
    $(".video").css("display", "");
  }
  document.getElementById("resultado").innerHTML = cantidad_correctas;
}
/*
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev){
    if(ev.target.checked){
        document.documentElement.setAttribute('tema', 'dark');
    } else {
        document.documentElement.setAttribute('tema', 'light');
    }
}
colorSwitch.addEventListener('change', cambiaTema);
*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".botonQ").fadeIn("slow");
  } else {
    $(".botonQ").fadeOut("slow");
  }
});
$(".botonQ").click(function (event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 600);
});

$(".video").css("display", "none");

$("#video1").on("click", function () {
  $(".pregunta1V").css("display", "");
  $(".pregunta1V").fadeIn("slow");
  $("#video1").css("display", "none");
});

$(document).ready(function () {
  var altura = $(".menuP").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > altura) {
      $(".menuP").addClass("menu-fixed");
    } else {
      $(".menuP").removeClass("menu-fixed");
    }
  });
  $("#bot").click(function () {
    $(".botonQ").addClass("disabled");
  });
});

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

function ValidarDatos(){
    let mailErr = $("#correo").val();
    let passErr = $("#password").val();
    let userErr = $("#user").val();

    if(mailErr ==""){
        $(".mailErr").html("Por favor ingresa un correo")
    }

}