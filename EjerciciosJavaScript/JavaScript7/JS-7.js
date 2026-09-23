const procesador = document.getElementById("procesador");
const monitor = document.getElementById("monitor");
const discoDuro = document.getElementById("discoDuro");

const precioProcesador = document.getElementById("precioProcesador");
const precioMonitor = document.getElementById("precioMonitor");
const precioDiscoDuro = document.getElementById("precioDiscoDuro");

const calculadorDePrecio = document.getElementById("calculadorDePrecio");
const textoPrecio = document.getElementById("textoPrecio");

var precio1 = 0;
var precio2 = 0;
var precio3 = 0;

procesador.addEventListener('change', () => {

    switch (procesador.value) {

        case "1":

            precio1 = 400;
        
        break;

        case "2":

            precio1 = 600;
        
        break;

        case "3":

            precio1 = 800;

        break;

        default:

            precio1 = 0;

        break;

    }

    if (precio1 == 0) precioProcesador.value = "Procesador no elegido";
    else precioProcesador.value = ("$" + precio1);

});

monitor.addEventListener('change', () => {

    switch (monitor.value) {

        case "1":

            precio2 = 250;
        
        break;

        case "2":

            precio2 = 350;
        
        break;

        case "3":

            precio2 = 550;

        break;

        default:

            precio2 = 0;

        break;

    }

    if (precio2 == 0) precioMonitor.value = "Monitor no elegido";
    else precioMonitor.value = ("$" + precio2);

});

discoDuro.addEventListener('change', () => {

    switch (discoDuro.value) {

        case "1":

            precio3 = 400;
        
        break;

        case "2":

            precio3 = 600;
        
        break;

        case "3":

            precio3 = 800;

        break;

        default:

            precio3 = 0;

        break;

    }

    if (precio3 == 0) precioDiscoDuro.value = "Monitor no elegido";
    else precioDiscoDuro.value = ("$" + precio3);

});

calculadorDePrecio.addEventListener('click', () => {

    textoPrecio.value = ("$" + (precio1 + precio2 + precio3));

})