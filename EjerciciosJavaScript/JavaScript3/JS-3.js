const primerNumeroEnTexto = document.getElementById("primerNumeroEnTexto");
const segundoNumeroEnTexto = document.getElementById("segundoNumeroEnTexto");
const botonDeComparacion = document.getElementById("botonDeComparacion");

botonDeComparacion.addEventListener('click', () => {

    let primerNumeroAComparar = Number(primerNumeroEnTexto.value);
    let segundoNumeroAComparar = Number(segundoNumeroEnTexto.value);

    if (primerNumeroAComparar > segundoNumeroAComparar) alert('El número mayor es el primero: ' + primerNumeroAComparar);
    else if (primerNumeroAComparar < segundoNumeroAComparar) alert('El número mayor es el segundo: ' + segundoNumeroAComparar);
    else alert('Los dos números son iguales. No hay uno mayor que otro.');
    
});