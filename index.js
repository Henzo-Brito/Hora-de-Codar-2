
// Aqui criamos uma variavel global. Global significa que o elemento pode ser acessado por qualquer método. Para tornar global, utilizamos a palavra static.

var saldo = 100.5; // Float (Número com ponto flutuante)
import {alterPage} from "./functions/alterPage.js";

/*  Função principal. */
function ver_saldo() {
    alterPage(`<p class="message">Seu saldo atual é: R$${saldo}</p>`, true)
}

/*  Função principal. */
function inicio(){
    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2")
    const btn3 = document.getElementById("btn3")
    const btn4 = document.getElementById("btn4")

    btn1.addEventListener("click", ver_saldo)
    btn3.addEventListener("click", fazer_deposito)
}

inicio()

/*  Função para receber informado pelo usuário, processar e levar a uma mensagem de sucesso ou a repetição da função */
function fazer_deposito() {
    const container = document.createElement("div")

    const input = document.createElement("input")
    const btn = document.createElement("button")
    
    container.className = "lineDiv"

    input.labels[0].textContent = "Coloque o seu nome"

    btn.innerText = "Enviar"

    container.appendChild(input)
    container.appendChild(btn)

    alterPage(container, false)
}
/*  Função para receber informado pelo usuário, processar e levar a uma mensagem de sucesso ou a repetição da função */
function fazer_saque() {
	var saque = parseFloat(prompt('Qual o valor para saque?'));
	if (isNaN(saque) || saque === '') {
		alert('Por favor, informe um número:');
		fazer_saque();
	} else {
		saldo -= saque;
		ver_saldo();
	}
}
/* Verificar se há um erro */
function erro() {
	alert('Por favor, informe um número entre 1 e 4');
	inicio();
}
function sair() {
	var confirma = confirm('Você deseja sair?');
	if (confirma) {
		window.close();
	} else {
		inicio();
	}
}


export default function themes() {
    const thems = [...document.getElementsByClassName("thems")];

    const ths = [
        {
            c1: "rgb(54, 51, 62)",
            c2: "rgb(0, 0, 0)",
            c3: "rgb(250, 202, 27)",
            c4: "rgb(217, 120, 34)",
            c5: "hsla(0, 0%, 0%, 1.00)"
        },
        {
            c4: "rgb(243, 128, 28)",
            c2: "rgb(0, 0, 0)",
            c5: "rgb(82, 22, 233)",
            c1: "rgb(250, 202, 27)",
            c5: "hsl(0, 0%, 1%)"
        },
        {
            c1: "rgb(253, 252, 255)",
            c2: "rgb(0, 0, 0)",
            c3: "rgb(250, 202, 27)",
            c4: "rgb(217, 120, 34)",
            c5: "hsl(0, 0%, 1%)"
        },
        {
            c1: "rgb(82, 22, 233)",
            c2: "rgb(0, 0, 0)",
            c3: "rgb(250, 202, 27)",
            c4: "rgb(217, 120, 34)",
            c5: "hsl(0, 0%, 1%)",
        }
    ];

    thems.forEach((e, i) => {
        e.addEventListener("click", () => {

            for (const c in ths[i]) {
                document.documentElement.style.setProperty(
                    `--${c}`,
                    ths[i][c]
                );
            }

        thems.forEach(theme => {
            theme.classList.remove("selected");
        });

        e.classList.add("selected");
        });
    });
}

themes()