const contrasenia1 = document.getElementById("contrasenia1");
const contrasenia2 = document.getElementById("contrasenia2");
const botonDeVerifiacion = document.getElementById("botonDeVerificacion");

botonDeVerificacion.addEventListener("click",()=>{

    if (contrasenia1.value == contrasenia2.value) alert('Verificación exitosa');
    else alert('Los campos no coinciden. Vuelva a intentar.');

});