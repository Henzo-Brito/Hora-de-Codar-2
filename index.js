import {alterPage} from "./functions/alterPage.js";
import { error } from "./functions/error.js";
import { sair } from "./functions/sair.js";
// Aqui criamos uma variavel global. Global significa que o elemento pode ser acessado por qualquer método. Para tornar global, utilizamos a palavra static.

var saldo = 100.5; // Float (Número com ponto flutuante)

const nameBtn = document.getElementById("nameBtn")

nameBtn.addEventListener("click", ()=>{
    const home = document.querySelector(".inicio") 
    const form = document.querySelector(".form") 
    const yourName = document.querySelector("#yourName")

    if (yourName.value.trim() !== ""){
        alert("Seja Bem-Vindo " + yourName.value.trim())

        name = yourName.value.trim()

        form.style. display = "none"
        home.style.display = "block"
        error("")
    }else{
        error("Valor Inválido")
    }
})

/*  Função principal. */
function inicio(){
    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2")
    const btn3 = document.getElementById("btn3")
    const btn4 = document.getElementById("btn4")

    btn1.addEventListener("click", ver_saldo)
    btn2.addEventListener("click", fazer_saque)
    btn3.addEventListener("click", fazer_deposito)
    btn4.addEventListener("click", sair)
}

inicio()

/*  Função principal. */
function ver_saldo() {
    error("")
    
    alterPage(`<p class="message">Seu saldo atual é: R$${saldo}</p>`, true)
}

/*  Função para receber informado pelo usuário, processar e levar a uma mensagem de sucesso ou a repetição da função */
function fazer_deposito() {
    function sendDeposito(depos){
        const deposito = Number(depos) 

		if (isNaN(deposito) || deposito == '') { // A Função isNaN checa se o valor informado é um Não-Número e retorna verdadeiro ou falso.
            error("Adicione um Valor válido")
		} else {
            saldo += deposito
            ver_saldo()
            error("")
		}
    }

    const container = document.createElement("div")

    const input = document.createElement("input")
    const btn = document.createElement("button")
    
    container.className = "lineDiv"

    input.placeholder = "Qual o valor de seu depósito?"

    btn.innerText = "Enviar"

    btn.addEventListener("click", ()=>{
        sendDeposito(input.value)
    })

    container.appendChild(input)
    container.appendChild(btn)

    alterPage(container, false)
}
/*  Função para receber informado pelo usuário, processar e levar a uma mensagem de sucesso ou a repetição da função */
function fazer_saque() {
    function sendDeposito(depos){
        const deposito = Number(depos)
		
        if (isNaN(deposito) || deposito == '') {
            error("Adicione um Valor válido")
		} else {
            saldo -= deposito
            ver_saldo()
            error("")
		}
    }

    const container = document.createElement("div")

    const input = document.createElement("input")
    const btn = document.createElement("button")
    
    container.className = "lineDiv"

    input.placeholder = "Qual o valor de seu Saque?"

    btn.innerText = "Enviar"

    btn.addEventListener("click", ()=>{
        sendDeposito(input.value)
    })

    container.appendChild(input)
    container.appendChild(btn)

    alterPage(container, false)
}


