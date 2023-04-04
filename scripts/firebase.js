// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore-lite.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX7HlT7Fbij1uefXflsterkWM-4z0_f8Y",
  authDomain: "proyecto-pizzeria-d0dc1.firebaseapp.com",
  projectId: "proyecto-pizzeria-d0dc1",
  storageBucket: "proyecto-pizzeria-d0dc1.appspot.com",
  messagingSenderId: "1000797411328",
  appId: "1:1000797411328:web:9d7bf63f781aca6b7f60e5",
  measurementId: "G-VEPXVRWY4T"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app)

export async function getPedidos(){
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

    const pedidosCol = collection(db, 'pedidos')
    const pedidoSnapshot = await getDocs(pedidosCol)
    const pedidosList = pedidoSnapshot.docs.map(doc => doc.data())
    
    const parent = document.createElement("div")
    parent.classList.add("modal")
    parent.id = "todos-pedidos-modal"
    let btnClose = document.createElement("img")
    btnClose.src = "./images/close.png"
    btnClose.id = "pedido-cerrar"
    btnClose.addEventListener("click", () => {
        btnClose.parentElement.remove()
    })
    parent.appendChild(btnClose)
    const pedido = document.createElement("div")

    pedidosList.map(item => {        
        const fecha = document.createElement("p")
        let fechita = new Date(item.fecha)
        let formattedFechita = fechita.toLocaleDateString()
        fecha.innerText = `Fecha: ${formattedFechita}`
        fecha.classList.add("fecha-pedido")
        pedido.appendChild(fecha)

        item["pizzas"].map(pi => {
            const pizza_item = document.createElement("p")
            pizza_item.innerText = `PIZZA CUSTOMIZADA`
            pizza_item.classList.add("pizza-item")
            pedido.appendChild(pizza_item)

            const pizzas_item = document.createElement("p")
            pizzas_item.classList.add("pizza-ingredientes")
            let ingre = [pi.masa, pi.queso, pi.tomate]
            pi["ingredientes"].map(ing => {
                ingre.push(dictionary[ing])
            })
            pizzas_item.innerText = `Masa ${pi.masa}, queso ${pi.queso}, tomate ${pi.tomate}, ${ingre.join(", ")}`
            pedido.appendChild(pizzas_item)
        })

        const bebida_item = document.createElement("p")
        bebida_item.classList.add("bebidas-item")
        bebida_item.innerText = `BEBIDAS`
        pedido.appendChild(bebida_item)

        const bebidas_item = document.createElement("p")
        bebidas_item.classList.add("bebidas-cantidad")
        let bebidasArray = []
        item["bebidas"].map(be => {
            if(Object.values(be) > 0){
                bebidasArray.push(`${dictionary[Object.keys(be)]}: ${Object.values(be)}`)
            }
        })
        if(bebidasArray.length <= 0) bebidasArray.push("Sin bebidas")
        bebidas_item.innerText = `${bebidasArray.join('\n')}`
        
        pedido.appendChild(bebidas_item)
    })

    parent.appendChild(pedido)
    document.body.appendChild(parent)

    /* 
        <div class="modal" id="todos-pedidos-modal">
            <div class="pedido-item">
                <p class="fecha-pedido">Fecha: 235908245908</p>
                <p class="pizza-item">Pizza customizada</p>
                <p class="pizza-ingredientes">Ingredientes</p>
                <p class="bebidas-item">Bebidas</p>
                <p class="bebidas-cantidad"></p>
            </div>
        </div>
    */
}

export async function addPedido(pizzas, bebidas){
    let fecha = Date.now()
    let dato = {
        fecha: fecha,
        pizzas: pizzas,
        bebidas: bebidas
    }
    await setDoc(doc(db, "pedidos", generateRandomString()), dato)
}

function generateRandomString() {
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
    const numbers = [...Array(10).keys()].map(String);
    const alphabetArray = [...alphabet, ...alphabet.map(letter => letter.toUpperCase()), ...numbers];
  
    let randomString = '';
    while (randomString.length < 20) {
      const randomIndex = Math.floor(Math.random() * alphabetArray.length);
      const randomDigit = alphabetArray[randomIndex];
      randomString += randomDigit;
    }
    return randomString;
}