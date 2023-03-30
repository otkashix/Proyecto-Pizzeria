// No permitir que la cantidad de las bebidas sea mayor a 10 ni menor a 0
const cola = document.getElementById("cc")
const zero = document.getElementById("ccz")
const cerv = document.getElementById("cerveza")
const agua = document.getElementById("agua")

cola.addEventListener("change", function(){
    if(cola.value > 10) cola.value = 10
    if(cola.value < 0) cola.value = 0
})
zero.addEventListener("change", function(){
    if(zero.value > 10) zero.value = 10
    if(zero.value < 0) zero.value = 0
})
cerv.addEventListener("change", function(){
    if(cerv.value > 10) cerv.value = 10
    if(cerv.value < 0) cerv.value = 0
})
agua.addEventListener("change", function(){
    if(agua.value > 10) agua.value = 10
    if(agua.value < 0) agua.value = 0
})

// Añadir longitud de Textarea
const ta = document.getElementById("customer-ta")
const tal = document.getElementById("tal")

ta.addEventListener("keypress", function(){
    let len = ta.value + 1
    tal.textContent = `${len.length}/145` 
})
ta.addEventListener("focus", function(){
    tal.style.visibility = "visible"
})
ta.addEventListener("blur", function(){
    tal.style.visibility = "hidden"
})