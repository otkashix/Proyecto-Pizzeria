let costs;
const fetching = fetch('./scripts/precios.json').then(response => response.json()).then(data => console.log(data))

const addPizza = document.getElementById("btn-add")
addPizza.addEventListener("click", () => {
    const ingRemove = document.querySelectorAll(".ingredientes")
    const ingInputs = Array.prototype.slice.call(ingRemove)
    let pizzaId
    const localPizzas = localStorage.getItem("pizzas")
    
    if(!localPizzas){
        pizzaId = 0
    } else{
        let pizzas = JSON.parse(localPizzas)
        pizzaId = pizzas.length
    }

    let pizza = {
        "id": pizzaId,
        "ingredientes": []
    }

    ingInputs.map((ingrediente) => {
        if(ingrediente.checked){
            pizza["ingredientes"].push(ingrediente.id)
        }
    })

    let order = () => {
        let final = []
        let pizzas = JSON.parse(localPizzas)
        console.log(`Cogemos ${JSON.stringify(pizzas)}`)
        if(!pizzas){
            final.push(pizza)
            console.log(`Creada nueva pizza ${JSON.stringify(pizza)}`)
        }else{
            pizzas.map(p => {
                final.push(p)
            })
            final.push(pizza)
            console.log(`Actualizada pizza ${JSON.stringify(final)}`)
        }
        return JSON.stringify(final)
    }
    console.log(order())

    localStorage.setItem("pizzas", order())
    
    // Sino, insertar cada pizza en un localstorage con una id como pizzaNUMERO
    // recorrer todos los localstorage y coger por ID
    // Guardar cada pizza en una array
    // Manipular el Array
    // Recorrer el Array y guardar cada pizza de nuevo pero ya updateada

})