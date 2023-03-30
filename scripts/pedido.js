import { funcionalidadesCarrito } from "./modales.js"

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

let localBebidas = localStorage.getItem("bebidas")
let bebidas = JSON.parse(localBebidas)
let cc = Number(Object.values(bebidas)[0]["cc"])
let ccz = Number(Object.values(bebidas)[1]["zero"])
let cerv = Number(Object.values(bebidas)[2]["cerv"])
let agua = Number(Object.values(bebidas)[3]["agua"])
console.log(`cc: ${cc} \n ccz: ${ccz} \n cerveza: ${cerv} \n agua: ${agua}`)

let pa = document.createElement("div")
pa.id = `bebida`
pa.classList.add("product-box")
let fa = document.createElement("div")
fa.classList.add("product-bar")
let ti = document.createElement("span")
ti.classList.add("product-title")
ti.innerText = "BEBIDAS"
fa.appendChild(ti)
pa.appendChild(fa)

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

superparent.appendChild(pa)

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
})

}

export function borrarPizza(id){
    console.log(`Parent ID: **${id}**`)
    // ✅ Tenemos que borrar el p- y quedarnos con el número
    // Después tenemos que coger el pedido del Local Storage
    // Recorrer todo el Local Storage
    // Checkear si estamos en esa id
    // Si estamos, entonces NO AÑADIMOS
    // Pusheamos el Local Storage de nuevo
    // Se puede usar el código de prueba.js
    let identifier = Number(id.slice(2))
    console.log(identifier)
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