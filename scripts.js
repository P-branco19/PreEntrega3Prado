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

//Agregar productos al carrito:
const botonesAgregar = document.getElementsByClassName("agregarCarrito")
const carrito = document.getElementById("listaCarrito")
const totalCarrito = document.getElementById("total")
const vaciarCarrito = document.getElementById("vaciarCarrito")

let total = 0

for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener("click", function () {
        const tarjeta = this.parentElement
        const nombre = tarjeta.getElementsByClassName("card-title")[0].textContent
        const precioTexto = tarjeta.getElementsByClassName("card-subtitle")[0].textContent

        //Extrae el precio numerico del texto
        const precio = parseFloat(precioTexto.replace("$", ""))

        //Actualiza el total
        total += precio

        //Crea un elemento de lista con nombre y precio:
        const itemCarrito = document.createElement("li")
        itemCarrito.textContent = `${nombre} - ${precioTexto}`

        //Agrega el elemento al carrito
        carrito.appendChild(itemCarrito)

        //Actualiza el precio total
        totalCarrito.textContent = `Total: $${total}`
    })
}

//Evento para vaciar el carrito
vaciarCarrito.addEventListener("click", function () {
    //Vaciar la lista del carrito
    carrito.innerHTML = ""
    //Restablece el total a 0
    total = 0
    //Actualiza la visualizacion del total
    totalCarrito.textContent = "Total: $0"
})