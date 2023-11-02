//Bienvenida del usuario:
const formulario = document.getElementById("formulario");
const bienvenida = document.getElementById("bienvenida");

document.getElementById("enviar").addEventListener("click", function () {
    //tomo los valores del formulario
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value

    //creo un parrafo para mostrar los datos
    const parrafo = document.createElement("p")
    parrafo.textContent = `Bienvenido ${nombre} ${apellido}`

    //agrego el parrafo al div de bienvenida
    bienvenida.appendChild(parrafo)

    //reset del formulario
    formulario.reset()
})