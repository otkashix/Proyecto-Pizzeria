export function idiomaCarga(){
    let lang = localStorage.getItem("language")
    if(!lang){
        localStorage.setItem("language", navigator.language)
    }
    translateWeb(lang)
    
    // Cambiar el idioma
    const btnEn = document.getElementById("lang-en")
    const btnEs = document.getElementById("lang-es")

    btnEn.addEventListener("click", () => {
        changeLang("en")
    })
    btnEs.addEventListener("click", () => {
        changeLang("es")
    })

    function changeLang(lan){
        localStorage.setItem("language", lan)
        console.log(localStorage.getItem("language"))
        translateWeb(lan)
    }
}

export async function translateWeb(lang){
    const textos = await fetch('./scripts/textos.json').then(response => response.json())
    document.getElementById("dbPedidos").innerText = textos[lang]["navbar-orders"]
    document.getElementById("banner-title-text").innerText = textos[lang]["banner-title"]
    document.getElementById("banner-description").innerText = textos[lang]["banner-description"]
    document.getElementById("category-customize").innerText = textos[lang]["category-customize"]
    document.getElementById("category-data").innerText = textos[lang]["category-data"]
    document.getElementById("label-masa").innerText = textos[lang]["customizer-dough"]
    document.getElementById("label-base").innerText = textos[lang]["customizer-tomato"]
    document.getElementById("label-queso").innerText = textos[lang]["customizer-cheese"]
    document.getElementById("label-york").innerText = textos[lang]["ingredient-york"]
    document.getElementById("label-jamon").innerText = textos[lang]["ingredient-jam"]
    document.getElementById("label-atun").innerText = textos[lang]["ingredient-tuna"]
    document.getElementById("label-acei").innerText = textos[lang]["ingredient-olive"]
    document.getElementById("label-huevo").innerText = textos[lang]["ingredient-egg"]
    document.getElementById("item-ingredientes").innerText = textos[lang]["customizer-ingredients"]
    document.getElementById("item-bebidas").innerText = textos[lang]["customizer-drinks"]
    document.getElementById("label-cc").innerText = textos[lang]["drink-cc"]
    document.getElementById("label-ccz").innerText = textos[lang]["drink-ccz"]
    document.getElementById("label-cerv").innerText = textos[lang]["drink-beer"]
    document.getElementById("label-agua").innerText = textos[lang]["drink-water"]
    document.getElementById("btn-add-pizza").value = textos[lang]["button-add-pizza"]
    document.getElementById("btn-add-bebida").value = textos[lang]["button-add-drinks"]
    document.getElementById("name-input").placeholder = textos[lang]["data-name"]
    document.getElementById("telephone-input").placeholder = textos[lang]["data-telephone"]
    document.getElementById("address-input").placeholder = textos[lang]["data-address"]
    document.getElementById("customer-ta").placeholder = textos[lang]["data-comment"]
    document.getElementById("customer-btn").value = textos[lang]["data-button"]
    document.getElementById("modal-bar-title").innerText = textos[lang]["modal-cart-title"]
    document.getElementById("footer-one").innerText = textos[lang]["footer-one"]
    document.getElementById("footer-two").innerText = textos[lang]["footer-two"]
    document.getElementById("footer-three").innerText = textos[lang]["footer-three"]
}