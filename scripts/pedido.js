import { funcionalidadesCarrito, modalError } from "./modales.js"
import { addPedido } from "./firebase.js"
import { reiniciarFormulario } from "./formulario.js"

export function actualizarCarrito(pedido) {
/*
    <div class="product-box">
        <div class="product-bar">
            <span class="product-title">PIZZA CUSTOMIZADA</span>
            <img src="./images/close.png" class="btn-remove" />
        </div>
        <span class="product-value">Atún, Jamón, York, Huevo</span>
    </div>
*/

// Vamos a borrar todas las pizzas de la lista, porque sino se duplica, triplican ad infinitum
const superparent = document.getElementById("modal-content")
while(superparent.firstChild) {
    superparent.firstChild.remove()
}

let pa = document.createElement("div")
pa.id = `bebida`
pa.classList.add("product-box")
let fa = document.createElement("div")
fa.classList.add("product-bar")

let localBebidas = localStorage.getItem("bebidas")
let bebidas = JSON.parse(localBebidas)
let cc, ccz, cerv, agua

if(localBebidas){
    bebidas = JSON.parse(localBebidas)
    cc = Number(Object.values(bebidas)[0]["cc"])
    ccz = Number(Object.values(bebidas)[1]["zero"])
    cerv = Number(Object.values(bebidas)[2]["cerv"])
    agua = Number(Object.values(bebidas)[3]["agua"])
} else{
    cc = 0
    ccz = 0
    cerv = 0
    agua = 0

    if(cc > 0){
        let txt = document.createElement("p")
        txt.innerText = `Coca Cola: ${cc}`
        pa.appendChild(txt)
    }
    if(ccz > 0){
        let txt = document.createElement("p")
        txt.innerText = `Coca Cola Zero: ${ccz}`
        pa.appendChild(txt)
    }
    if(cerv > 0){
        let txt = document.createElement("p")
        txt.innerText = `Cerveza: ${cerv}`
        pa.appendChild(txt)
    }
    if(agua > 0){
        let txt = document.createElement("p")
        txt.innerText = `Agua: ${agua}`
        pa.appendChild(txt)
    }
    
    if(cc + ccz + cerv + agua > 0){
        let ti = document.createElement("span")
        ti.classList.add("product-title")
        ti.innerText = "BEBIDAS"
        fa.appendChild(ti)
        pa.appendChild(fa)

        superparent.appendChild(pa)
    }
}

    if(pedido !== undefined){
        pedido.map((item) => {
            // Diccionario para al mostrar los ingredientes, muestre cada ingrediente seriamente. Ej: "Aceituna" en vez de "acei"
            let dictionary = [
                {"jamon": "Jamón Serrano"},
                {"york": "Jamón York"},
                {"atun": "Atún"},
                {"acei": "Aceitunas"},
                {"huevo": "Huevo"}
            ]
        
            let nuevoIng = []
            item["ingredientes"].map(i => {
                dictionary.map(word => {
                    if(String(Object.keys(word)) === i){
                        nuevoIng.push(String(Object.values(word)))
                    }
                })
            })
        
            let parent = document.createElement("div")
            parent.id = `p-${item.id}`
            parent.classList.add("product-box")
            let father = document.createElement("div")
            father.classList.add("product-bar")
            let titulo = document.createElement("span")
            titulo.classList.add("product-title")
            titulo.innerText = "PIZZA CUSTOMIZADA"
            father.appendChild(titulo)
            let pic = document.createElement("img")
            pic.src = './images/close.png'
            pic.classList.add("btn-remove")
            father.appendChild(pic)
            let masa = document.createElement("p")
            masa.innerText = `Masa: ${item.masa}`
            let tomate = document.createElement("p")
            tomate.innerText = `Tomate: ${item.tomate}`
            let queso = document.createElement("p")
            queso.innerText = `Queso: ${item.queso}`
            let ingr = document.createElement("span")
            ingr.classList.add("product-value")
            ingr.innerText = `Ingredientes: ${nuevoIng.join(", ")}`
            parent.appendChild(father)
            parent.appendChild(masa)
            parent.appendChild(tomate)
            parent.appendChild(queso)
            parent.appendChild(ingr)
            superparent.appendChild(parent)
            funcionalidadesCarrito()
            reiniciarFormulario()
        })
    }

}

export function borrarPizza(id){
    let identifier = Number(id.slice(2))
    let localPizzas = localStorage.getItem("pizzas")
    let pizzas = JSON.parse(localPizzas)
    let newPizzas = []

    pizzas.map(pizza => {
        if(pizza.id !== identifier){
            newPizzas.push(pizza)
        }
    })
    localStorage.setItem("pizzas", JSON.stringify(newPizzas))
    actualizarCarrito(newPizzas)
}

export function reiniciarPizzas(){
    localStorage.removeItem("pizzas")
}

export async function crearTicket(){
    let dictionary = {
        "cc": "Coca Cola",
        "zero": "Coca Cola Zero",
        "cerv": "Cerveza",
        "agua": "Agua",
        "jamon": "jamón serrano",
        "york": "jamón york",
        "atun": "atún",
        "acei": "aceitunas",
        "huevo": "huevo"
    }

    const localBebidas = localStorage.getItem("bebidas")
    let bebidas = JSON.parse(localBebidas)
    if(!localBebidas || localBebidas === null || localBebidas === undefined || localBebidas === '') return modalError("bebida")
    const localPizzas = localStorage.getItem("pizzas")
    let pizzas = JSON.parse(localPizzas)
    if(!localPizzas || localPizzas === null || localPizzas === undefined || localPizzas === '') return modalError("pizza")
    const precios = await fetch('./scripts/precios.json').then(response => response.json())
    let coste = 0
    
    let parent = document.createElement("div")
    parent.id = "pedido"
    parent.classList.add("modal")
    let btnClose = document.createElement("img")
    btnClose.src = "./images/close.png"
    btnClose.id = "pedido-cerrar"
    btnClose.addEventListener("click", () => {
        btnClose.parentElement.remove()
    })
    parent.appendChild(btnClose)
    let ticket = document.createElement("p")
    ticket.innerText = "TICKET"
    ticket.id = "pedido-ticket"
    parent.appendChild(ticket)
    let separador = document.createElement("hr")
    parent.appendChild(separador)
    let titleBebidas = document.createElement("p")
    titleBebidas.innerText = "BEBIDAS"
    titleBebidas.classList.add("pedido-title")
    parent.appendChild(titleBebidas)

    bebidas.map(bebida => {
        coste += Number(precios["bebidas"][Object.keys(bebida)]) * Number(Object.values(bebida))
        let item = document.createElement("p")
        item.classList.add("pedido-item")
        item.innerText = `${dictionary[Object.keys(bebida)]}(${Number(precios["bebidas"][Object.keys(bebida)])}€) x${Number(Object.values(bebida))}     -> ${Number(precios["bebidas"][Object.keys(bebida)]) * Number(Object.values(bebida))}€`
        parent.appendChild(item)
    })

    let titlePizzas = document.createElement("p")
    titlePizzas.innerText = "PIZZAS"
    titlePizzas.classList.add("pedido-title")
    parent.appendChild(titlePizzas)
    pizzas.map(pizza => {
        coste += precios["base"]
        let price = precios["base"]
        pizza["ingredientes"].map(ing => {
            coste += Number(precios["ingredientes"][ing])
            price += Number(precios["ingredientes"][ing])
        })
        let item = document.createElement("p")
        item.classList.add("pedido-item")
        let arrayIngr = []
        pizza["ingredientes"].map((ing) => {
            arrayIngr.push(dictionary[ing])
        })
        item.innerText = `PIZZA CUSTOMIZADA: ${arrayIngr.join(", ")} -> ${price}€`
        parent.appendChild(item)
    })
    let textoPrecio = document.createElement("p")
    textoPrecio.id = "pedido-precio"
    textoPrecio.innerText = `TOTAL: ${coste}€`
    parent.appendChild(textoPrecio)

    let nombre = document.createElement("p")
    let nombreValor = document.getElementById("name-input").value
    if(!nombreValor || nombreValor === null || nombreValor === undefined || nombreValor === '') return modalError("nombre")
    nombre.innerText = `A nombre de: ${nombreValor}`
    parent.appendChild(nombre)
    let direccion = document.createElement("p")
    let direccionValor = document.getElementById("address-input").value
    if(!direccionValor || direccionValor === null || direccionValor === undefined || direccionValor === '') return modalError("direccion")
    direccion.innerText = `A dirección: ${direccionValor}`
    parent.appendChild(direccion)
    let tel = document.createElement("p")
    let telValor = document.getElementById("telephone-input").value
    if(!telValor || telValor === null || telValor === undefined || telValor === '') return modalError("telefono")
    tel.innerText = `Teléfono de contacto: ${telValor}`
    parent.appendChild(tel)
    let desc = document.createElement("p")
    desc.innerText = `Comentario: ${document.getElementById("customer-ta").value}`
    parent.appendChild(desc)

    document.body.appendChild(parent)
    localStorage.removeItem("pizzas")
    localStorage.removeItem("bebidas")
    addPedido(pizzas, bebidas)
    actualizarCarrito()
    reiniciarFormulario()
}