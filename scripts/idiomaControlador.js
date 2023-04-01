export function idiomaRedireccion(){
    // Redireccionar al usuario en base a su idioma y/o a los idiomas soportados por la página
    // console.log("LocalStorage: \n" + localStorage.getItem("language"))
    // console.log("Navigator: \n" + navigator.language)
    let lang = localStorage.getItem("language")
    if(!lang) localStorage.setItem("language", navigator.language)
    /*lang === "es" ? redirect("es") : redirect("en")

    function redirect(lan){
        if(lan === "es"){
            alert("Vas a ser redirigido a la página en español")
            window.location = `./${lan}/index.html`
        } else{
            alert("You will be redirected to english page")
            window.location = `./en/index.html`
        }
    }*/

    // Cambiar el idioma
    const btnEn = document.getElementById("lang-en")
    const btnEs = document.getElementById("lang-es")

    btnEn.addEventListener("click", changeLang("en"))
    btnEs.addEventListener("click", changeLang("es"))

    function changeLang(lan){
        localStorage.setItem("language", lan)
    }
}