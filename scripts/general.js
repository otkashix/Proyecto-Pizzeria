import { animacionCarrito, funcionalidadesCarrito, cookiesControlador } from "./modales.js"
import { idiomaRedireccion } from "./idiomaControlador.js"
import { crearTicket } from "./pedido.js"

// Cookies
cookiesControlador()

// Carrito
animacionCarrito()
funcionalidadesCarrito()

// Idioma
idiomaRedireccion()

//Crear pedido
const btn = document.getElementById("customer-btn")
btn.addEventListener("click", () => {
    crearTicket()
})

// Hacer un carrusel que cambie el el texto del banner