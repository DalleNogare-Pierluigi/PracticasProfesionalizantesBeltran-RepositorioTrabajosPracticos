const numeroIngresadoEnTexto = document.getElementById("numTxt");
const botonParaElevarAlCubo = document.getElementById("b^3");

botonParaElevarAlCubo.addEventListener('click', () => {

    let numeroParaOperar = Number(numeroIngresadoEnTexto.value);
    
    alert('El número elevado al cubo es: ' + (numeroParaOperar ** 3));

});