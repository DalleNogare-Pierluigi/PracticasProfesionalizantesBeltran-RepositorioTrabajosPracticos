const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const botonDeUnion = document.getElementById("botonDeUnion");

botonDeUnion.addEventListener("click",()=>{

    alert("Su nombre completo es: " + nombre.value + " " + apellido.value);

});