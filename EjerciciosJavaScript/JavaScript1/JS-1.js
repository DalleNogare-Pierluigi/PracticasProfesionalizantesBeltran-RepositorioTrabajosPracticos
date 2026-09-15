const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {

    boton.addEventListener('click', (botonPresionado) => { //El 'click' es una de muchas opciones del aEL

        const numBoton = botonPresionado.target.innerText;
        alert("Presionado el botón número " + numBoton);

    });

});