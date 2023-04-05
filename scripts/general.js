import { animacionCarrito, funcionalidadesCarrito, cookiesControlador } from "./modales.js"
import { idiomaCarga } from "./idiomaControlador.js"
import { crearTicket } from "./pedido.js"
import { getPedidos } from "./firebase.js"

// Cookies
cookiesControlador()

// Carrito
animacionCarrito()
funcionalidadesCarrito()

// Idioma
idiomaCarga()

// Crear pedido
const btn = document.getElementById("customer-btn")
btn.addEventListener("click", () => {
    crearTicket()
})

// Mostrar todos los pedidos
const btnPedidos = document.getElementById("dbPedidos")
btnPedidos.addEventListener("click", () => {
    getPedidos()
})