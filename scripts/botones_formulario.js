import { actualizarCarrito } from "./pedido.js"
import { funcionalidadesCarrito } from "./modales.js"

const addPizza = document.getElementById("btn-add-pizza")
const addBebida = document.getElementById("btn-add-bebida")
addPizza.addEventListener("click", () => {
    const ingRemove = document.querySelectorAll(".ingredientes")
    const ingInputs = Array.prototype.slice.call(ingRemove)
    const masaSel = document.getElementById("masa")
    const masa = masaSel.options[masaSel.selectedIndex].value
    const tomateSel = document.getElementById("base")
    const tomate = tomateSel.options[tomateSel.selectedIndex].value
    const quesoSel = document.getElementById("queso")
    const queso = quesoSel.options[quesoSel.selectedIndex].value
    let pizzaId
    const localPizzas = localStorage.getItem("pizzas")
    
    if(!localPizzas){
        pizzaId = 0
    } else{
        let pizzas = JSON.parse(localPizzas)
        let random = Math.floor(Math.random() * 1000)
        let contiene = false
        pizzas.map(pizza => {
            if(pizza.id === random) contiene = true
        })
        if(contiene) random += random + Math.floor(Math.floor(random / 2) + Math.floor(Math.random() * 100))
        pizzaId = random
    }

    let pizza = {
        "id": pizzaId,
        "ingredientes": [],
        "masa": masa,
        "tomate": tomate,
        "queso": queso
    }

    ingInputs.map((ingrediente) => {
        if(ingrediente.checked){
            pizza["ingredientes"].push(ingrediente.id)
        }
    })

    let order = () => {
        let final = []
        let pizzas = JSON.parse(localPizzas)
        if(!pizzas){
            final.push(pizza)
        }else{
            pizzas.map(p => {
                final.push(p)
            })
            final.push(pizza)
        }
        actualizarCarrito(final)
        setTimeout(funcionalidadesCarrito, 1000)
        return JSON.stringify(final)
    }

    localStorage.setItem("pizzas", order())

})
addBebida.addEventListener("click", () => {
    const cc = document.getElementById("cc").value
    const zero = document.getElementById("ccz").value
    const cerv = document.getElementById("cerveza").value
    const agua = document.getElementById("agua").value

    let bebidas = [
        {"cc": cc},
        {"zero": zero},
        {"cerv": cerv},
        {"agua": agua}
    ]

    localStorage.setItem("bebidas", JSON.stringify(bebidas))
})