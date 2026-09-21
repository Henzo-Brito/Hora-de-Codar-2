import { alterPage } from "./functions/alterPage.js";
import { error } from "./functions/error.js";

// Aqui criamos uma variavel global. Global significa que o elemento pode ser acessado por qualquer método. Para tornar global, utilizamos a palavra static.

var saldo = 100.5; // Float (Número com ponto flutuante)

const nameBtn = document.getElementById("nameBtn");

const sair = document.getElementById("sair");

sair.addEventListener("click", () => {
    const confirma = window.confirm("Você deseja sair?");
    alert(`${Nome}, foi um prazer ter você por aqui!`);
    if (confirma) {
        window.close();
    }
});

nameBtn.addEventListener("click", () => {
    const home = document.querySelector(".inicio");
    const form = document.querySelector(".form");
    const yourName = document.querySelector("#yourName");

    if (yourName.value.trim() !== "") {
        alert(`Seja Bem-Vindo ${yourName.value.trim()}`);

        form.style.display = "none";
        home.style.display = "block";
        sair.style.display = "flex";
        error("");
    } else {
        error("Valor Inválido");
    }
});

function hiddenExtrato() {
    const extra = document.querySelector(".extrato");
    extra.style.display = "none";
}

function extrato() {
    function oi() {
        const extra = document.querySelector(".extrato");
        hiddenExtrato();
        let aberto = false;
        alterPage("", true);

        if (aberto === false) {
            extra.style.display = "block";
            aberto = true;
        } else {
            hiddenExtrato();
            aberto = false;
        }
    }
    pedirSenha(oi);
}

/*  Função principal. */
function inicio() {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const btn4 = document.getElementById("btn4");
    const btn5 = document.getElementById("btn5");

    btn1.addEventListener("click", () =>{
        pedirSenha(ver_saldo)
    });
    btn2.addEventListener("click", fazer_saque);
    btn3.addEventListener("click", fazer_deposito);
    btn4.addEventListener("click", extrato);
    btn5.addEventListener("click", fazer_transferencia);
}

inicio();

/*  Função principal. */
function ver_saldo() {
    error("");
    hiddenExtrato();
    alterPage(`<p class="message">Seu saldo atual é: R$${saldo}</p>`, true);
}

function pedirSenha(onSuccess) {
    const container = document.createElement("div");
    const input = document.createElement("input");
    const btn = document.createElement("button");

    container.className = "lineDiv";

    input.placeholder = "Digite sua senha";
    input.type = "password";

    btn.type = "button";
    btn.innerText = "Confirmar";

    btn.addEventListener("click", () => {
        if (input.value === "3589") {
            error("");
            onSuccess();
        } else {
            error("Senha incorreta");
        }
    });

    container.appendChild(input);
    container.appendChild(btn);

    alterPage(container, false);
}

/*  Função para receber informado pelo usuário, processar e levar a uma mensagem de sucesso ou a repetição da função */
function fazer_deposito() {
    hiddenExtrato();

    function inputDeposito() {
        function sendDeposito(depos) {
            const deposito = Number(depos);

            if (Number.isNaN(deposito) || deposito === "") {
                // A Função isNaN checa se o valor informado é um Não-Número e retorna verdadeiro ou falso.
                error("Adicione um Valor válido");
            } else if (deposito <= 0) {
                error("O valor tem que ser maior que 0");
            } else {
                saldo += deposito;
                ver_saldo();
                error("");
            }
        }

        const container = document.createElement("div");
        const input = document.createElement("input");
        const btn = document.createElement("button");

        container.className = "lineDiv";

        input.placeholder = "Qual o valor de seu depósito?";

        btn.type = "button";
        btn.innerText = "Enviar";

        btn.addEventListener("click", () => {
            sendDeposito(input.value);
        });

        container.appendChild(input);
        container.appendChild(btn);

        alterPage(container, false);
    }

    pedirSenha(inputDeposito);
}

/*  Função para receber informado pelo usuário, processar e levar a uma mensagem de sucesso ou a repetição da função */
function fazer_saque() {
    hiddenExtrato();

    function inputSaque() {
        function sendSaque(saque) {
            const saqueValue = Number(saque);

            if (Number.isNaN(saqueValue) || saqueValue === "") {
                error("Adicione um Valor válido");
            } else if (saque <= 0) {
                error("O valor tem que ser maior que 0");
            } else if (saqueValue > saldo) {
                error("Saldo insuficiente");
            } else {
                saldo -= saqueValue;
                ver_saldo();
                error("");
            }
        }

        const container = document.createElement("div");
        const input = document.createElement("input");
        const btn = document.createElement("button");

        container.className = "lineDiv";

        input.placeholder = "Qual o valor de seu Saque?";

        btn.type = "button";
        btn.innerText = "Enviar";

        btn.addEventListener("click", () => {
            sendSaque(input.value);
        });

        container.appendChild(input);
        container.appendChild(btn);

        alterPage(container, false);
    }

    pedirSenha(inputSaque);
}

function fazer_transferencia() {
    hiddenExtrato();
    function sendTransferencia(transferencia) {
        const transferenciaValue = Number(transferencia);

        if (Number.isNaN(transferenciaValue) || transferenciaValue === "") {
            error("Adicione um Valor válido");
        } else if (transferenciaValue > saldo) {
            error("Saldo insuficiente");
        } else if (transferenciaValue <= 0) {
            error("O valor tem que ser maior que 0");
        } else {
            saldo -= transferenciaValue;
            ver_saldo();
            error("");
        }
    }

    function verifyNumber(transferencia) {
        const transferenciaValue = Number(transferencia);

        if (Number.isNaN(transferenciaValue) || transferenciaValue === "") {
            error("Adicione um Valor válido");
        } else {
            sendValue();
        }
    }

    function sendValue() {
        const container = document.createElement("div");

        const input = document.createElement("input");
        const btn = document.createElement("button");

        container.className = "lineDiv";

        input.placeholder = "Digite o valor da transferência";

        btn.innerText = "Enviar";

        btn.addEventListener("click", () => {
            sendTransferencia(input.value);
        });

        container.appendChild(input);
        container.appendChild(btn);

        alterPage(container, false);
    }

    function sendNumber() {
        const container = document.createElement("div");

        const input = document.createElement("input");
        const btn = document.createElement("button");

        container.className = "lineDiv";

        input.placeholder = "Adicione o número da conta";

        btn.innerText = "Enviar";

        btn.addEventListener("click", () => {
            verifyNumber(input.value);
        });

        container.appendChild(input);
        container.appendChild(btn);

        alterPage(container, false);
    }

    
    pedirSenha(sendNumber);
}
