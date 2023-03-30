let ingredientes = [];
// Ingredientes -> York, Jamon, Atun, Aceitunas, Huevo
// La masa, el tomate y el queso no son opcionales, siempre se van a mostrar, de ahí que se no se metan al array

// Detectar los cambios de los ingredientes
const divIn = document.getElementById("item-category2");
const chooses = divIn.getElementsByTagName("input");
//const chooses = chose.getElementsByTagName("input")

// Cada vez que cambie un checkbox comprobará si está marcado o no y si está en la lista
function triggerChange(num) {
    if (chooses[num].checked) {
        if (!ingredientes.includes(chooses[num].id)) {
            ingredientes.push(chooses[num].id);
            console.log(`Añadido: ${chooses[num].id} \n ${ingredientes}`);
            updateCanvas();
        }
    } else {
        for (let i = 0; i < ingredientes.length; i++) {
            if (ingredientes[i] === chooses[num].id) {
                ingredientes.splice(i, 1);
                console.log(`Removido: ${chooses[num].id} \n ${ingredientes}`);
                updateCanvas();
            }
        }
    }
}

chooses[0].addEventListener("change", function () {
    triggerChange(0);
});
chooses[1].addEventListener("change", function () {
    triggerChange(1);
});
chooses[2].addEventListener("change", function () {
    triggerChange(2);
});
chooses[3].addEventListener("change", function () {
    triggerChange(3);
});
chooses[4].addEventListener("change", function () {
    triggerChange(4);
});

// Canvas
// Inicializamos los canvas
const can1 = document.getElementById("layer1");
const ctx1 = can1.getContext("2d");
const can2 = document.getElementById("layer2");
const ctx2 = can2.getContext("2d");
const can3 = document.getElementById("layer3");
const ctx3 = can3.getContext("2d");
const can4 = document.getElementById("layer4");
const ctx4 = can4.getContext("2d");
const can5 = document.getElementById("layer5");
const ctx5 = can5.getContext("2d");
const can6 = document.getElementById("layer6");
const ctx6 = can6.getContext("2d");
const can7 = document.getElementById("layer7");
const ctx7 = can7.getContext("2d");
const can8 = document.getElementById("layer8");
const ctx8 = can8.getContext("2d");

// Definimos los path de las imagenes
const masaURI = "./images/masa.png";
const tomateURI = "./images/tomate.png";
const quesoURI = "./images/queso.png";
const yorkURI = "./images/york.png";
const jamonURI = "./images/jamon.png";
const atunURI = "./images/atun.png";
const aceiURI = "./images/aceitunas.png";
const huevoURI = "./images/huevo.png";

startCanvas();

// Crea las imagenes para el Canvas
function startCanvas() {
    const masaIMG = new Image(128, 128);
    masaIMG.onload = renderImage1;
    masaIMG.src = masaURI;

    const tomateIMG = new Image(128, 128);
    tomateIMG.onload = renderImage2;
    tomateIMG.src = tomateURI;

    const quesoIMG = new Image(128, 128);
    quesoIMG.onload = renderImage3;
    quesoIMG.src = quesoURI;

    const yorkIMG = new Image(128, 128);
    yorkIMG.onload = renderImage4;
    yorkIMG.src = yorkURI;

    const jamonIMG = new Image(128, 128);
    jamonIMG.onload = renderImage5;
    jamonIMG.src = jamonURI;

    const atunIMG = new Image(128, 128);
    atunIMG.onload = renderImage6;
    atunIMG.src = atunURI;

    const aceiIMG = new Image(128, 128);
    aceiIMG.onload = renderImage7;
    aceiIMG.src = aceiURI;

    const huevoIMG = new Image(128, 128);
    huevoIMG.onload = renderImage8;
    huevoIMG.src = huevoURI;
}

updateCanvas();

// Función que va a esconder o mostrar los layers con cada cambio
function updateCanvas() {
    // Si tiene York lo dibuja
    ingredientes.includes("york")
        ? (document.getElementById("layer4").style.visibility = "visible")
        : (document.getElementById("layer4").style.visibility = "hidden");

    // Si tiene Jamon lo dibuja
    ingredientes.includes("jamon")
        ? (document.getElementById("layer5").style.visibility = "visible")
        : (document.getElementById("layer5").style.visibility = "hidden");

    // Si tiene Atun lo dibuja
    ingredientes.includes("atun")
        ? (document.getElementById("layer6").style.visibility = "visible")
        : (document.getElementById("layer6").style.visibility = "hidden");

    // Si tiene Aceitunas lo dibuja
    ingredientes.includes("acei")
        ? (document.getElementById("layer7").style.visibility = "visible")
        : (document.getElementById("layer7").style.visibility = "hidden");

    // Si tiene Huevo lo dibuja
    ingredientes.includes("huevo")
        ? (document.getElementById("layer8").style.visibility = "visible")
        : (document.getElementById("layer8").style.visibility = "hidden");
}

// Función que dibuja cada imagen
function renderImage1() {
    can1.width = this.naturalWidth;
    can1.height = this.naturalHeight;
    ctx1.drawImage(this, 0, 0);
}
function renderImage2() {
    can2.width = this.naturalWidth;
    can2.height = this.naturalHeight;
    ctx2.drawImage(this, 0, 0);
}
function renderImage3() {
    can3.width = this.naturalWidth;
    can3.height = this.naturalHeight;
    ctx3.drawImage(this, 0, 0);
}
function renderImage4() {
    can4.width = this.naturalWidth;
    can4.height = this.naturalHeight;
    ctx4.drawImage(this, 0, 0);
}
function renderImage5() {
    can5.width = this.naturalWidth;
    can5.height = this.naturalHeight;
    ctx5.drawImage(this, 0, 0);
}
function renderImage6() {
    can6.width = this.naturalWidth;
    can6.height = this.naturalHeight;
    ctx6.drawImage(this, 0, 0);
}
function renderImage7() {
    can7.width = this.naturalWidth;
    can7.height = this.naturalHeight;
    ctx7.drawImage(this, 0, 0);
}
function renderImage8() {
    can8.width = this.naturalWidth;
    can8.height = this.naturalHeight;
    ctx8.drawImage(this, 0, 0);
    //ctx1.drawImage(ctx8, 0, 0)
}