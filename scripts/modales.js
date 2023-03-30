import { borrarPizza } from "./pedido.js"

export function animacionCarrito() {
    const btnCart = document.getElementById("btnCart")
    const btnClose = document.getElementById("btnClose")
    const cartModal = document.getElementById("cart-modal")

    btnCart.addEventListener("click", () => {
        cartModal.classList.add("open-width")
        cartModal.classList.remove("close-width")
        cartModal.style.visibility = "visible"
    })

    btnClose.addEventListener("click", () => {
        cartModal.classList.remove("open-width")
        cartModal.classList.add("close-width")
        setTimeout(function(){
            cartModal.style.visibility = "hidden"   
        }, 550)
    })
}

export function funcionalidadesCarrito(){
    let arrayRemove = document.querySelectorAll(".btn-remove")
    let btnsRemove = Array.prototype.slice.call(arrayRemove)
    
    btnsRemove.forEach(btn => {
        btn.addEventListener("click", function(){
            let parent = btn.parentNode.parentNode
            borrarPizza(parent.id)
            parent.remove()
        })
    })
}

export function cookiesControlador(){
    let acceptedCookies = localStorage.getItem("acceptedCookies")
    if(!acceptedCookies){
        const cookiesModal = `
            <div id="cookies-modal" class="modal">
                <div id="cookies-text">
                    <div id="cookies-title">
                        <span>Esta página web usa cookies</span>
                        <hr>
                    </div>
                    <div id="cookies-description">
                        <span>Esta página web requiere del uso de las cookies del navegador. Las cookies de esta página web se usan para personalizar el contenido, anuncios y añadir características para mejorar la experiencia del usuario, como, mostrar la página en el idioma seleccionado por el navegador, mostrar la página en el tema preferido del usuario, etcétera. Si quieres saber más sobre las cookies visita <a href="https://european-union.europa.eu/cookies_es" id="cookies-redirect">este enlace</a>. Nos regimos por la leyes de la Unión Europea, lugar de residencia de esta empresa.</span>
                    </div>
                </div>
                <div id="cookies-form">
                    <form>
                        <input type="button" value="Acepto" id="cookies-button">
                    </form>
                </div>
            </div>
                `
        document.body.innerHTML = document.body.innerHTML + cookiesModal
        const acceptBtn = document.getElementById("cookies-button")
        acceptBtn.addEventListener("click", function(){
            localStorage.setItem("acceptedCookies", true)
            console.log("Funciona")
            acceptBtn.parentNode.parentNode.parentNode.remove()
        })
    }
}