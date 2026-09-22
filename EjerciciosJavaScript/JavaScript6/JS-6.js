const pizzaSeleccionada = document.getElementById("opcionesDePizzas");
var precio = "El precio de la pizza es ";

pizzaSeleccionada.addEventListener('change', () => {

    switch (pizzaSeleccionada.value) {

        case "1":

            precio = precio + "$20000.";
        
        break;

        case "2":

            precio = precio + "$18000.";
        
        break;

        case "3":

            precio = precio + "$22000.";

        break;

        default:

            precio = "Pizza no seleccionada.";

        break;

    }

    document.getElementById("precio").value = precio;

    precio = "El precio de la pizza es ";

});