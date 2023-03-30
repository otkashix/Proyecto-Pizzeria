/*
// Temporalmente, ya que estamos haciendo por módulos. Quizá se borra después
const btnClose = document.getElementById("btnClose")
const cartModal = document.getElementById("cart-modal")
const btnCart = document.getElementById("btnCart")
let arrayRemove = document.querySelectorAll(".btn-remove")
let btnsRemove = Array.prototype.slice.call(arrayRemove)
console.log(btnsRemove)

// Temporalmente, ya que estamos haciendo por módulos. Quizá se borra después
btnClose.addEventListener("click", function(){
    cartModal.classList.remove("open-width")
    cartModal.classList.add("close-width")
    setTimeout(function(){
        cartModal.style.visibility = "hidden"   
    }, 550)
})

btnCart.addEventListener("click", function(){
    cartModal.classList.add("open-width")
    cartModal.classList.remove("close-width")
    cartModal.style.visibility = "visible"
})
*/

/*  Recorre todos los elementos para que pueda escuchar cada uno
    Sé que funciona al pricipio de la página, cuando carga. Habrá que ver si al añadir un nuevo producto hay que refrescar el array de arriba que son los:
        - arrayRemove
        - btnsRemove
    Quizá símplemente actualizándolo dentro del eventListener funcione. Sino habrá que hacer mínimo una función
*/
/*
btnsRemove.forEach(function(btn){
    btn.addEventListener("click", function(){
        btn.parentNode.parentNode.remove()
    })
})
*/