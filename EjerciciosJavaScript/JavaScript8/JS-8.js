const pregunta1 = document.getElementById("pregunta1");
const pregunta2 = document.getElementById("pregunta2");
const pregunta3 = document.getElementById("pregunta3");
const pregunta4 = document.getElementById("pregunta4");

const textoRespuesta1 = document.getElementById("textoRespuesta1");
const textoRespuesta2 = document.getElementById("textoRespuesta2");
const textoRespuesta3 = document.getElementById("textoRespuesta3");
const textoRespuesta4 = document.getElementById("textoRespuesta4");

let respuesta1 = 0;
let respuesta2 = 0;
let respuesta3 = 25;
let respuesta4 = 0;

const comprobarRespuestas = document.getElementById("comprobarRespuestas");
const textoRespuestas = document.getElementById("textoRespuestas");

pregunta1.addEventListener('change', () => {

    if (pregunta1.value == 3) respuesta1 = 25;
    else respuesta1 = 0;

})

pregunta2.addEventListener('change', () => {

    if (pregunta2.value == 2) respuesta2 = 25;
    else respuesta2 = 0;
    
})

pregunta3.addEventListener('change', () => {

    if (pregunta3.value == 1) respuesta3 = 25;
    else respuesta3 = 0;
    
})

pregunta4.addEventListener('change', () => {

    if (pregunta4.value == 4) respuesta4 = 25;
    else respuesta4 = 0;
    
})

comprobarRespuestas.addEventListener('click', () => {

    if (pregunta1.value == 3) textoRespuesta1.value = "La respuesta 1 es correcta. ";
    else textoRespuesta1.value = "La respuesta 1 es incorrecta. ";

    if (pregunta2.value == 2) textoRespuesta2.value = "La respuesta 2 es correcta. ";
    else textoRespuesta2.value = "La respuesta 2 es incorrecta. ";

    if (pregunta3.value == 1) textoRespuesta3.value = "La respuesta 3 es correcta.";
    else textoRespuesta3.value = "La respuesta 3 es incorrecta. ";
    
    if (pregunta4.value == 4) textoRespuesta4.value = "La respuesta 4 es correcta. ";
    else textoRespuesta4.value = "La respuesta 4 es incorrecta. ";

    let respuestasCorrectas = respuesta1 + respuesta2 + respuesta3 + respuesta4;
    textoRespuestas.value = ("La cantidad de respuestas correctas es del " + respuestasCorrectas + "%.");

})