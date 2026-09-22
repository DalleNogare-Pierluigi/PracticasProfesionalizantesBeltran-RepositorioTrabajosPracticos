const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const botonDeUnion = document.getElementById("botonDeUnion");

botonDeUnion.addEventListener("click",()=>{

    let nombreYApellido = nombre.value + " " + apellido.value;
    
    document.getElementById("nombreYApellido").value = nombreYApellido;

});