// trago todos os elementos que quero usar para aqui.

const botoes_numericos = document.querySelectorAll(".botao_numerico");

const tela = document.querySelector(".valor_saida");

const resultado = document.querySelector(".botao_resultado");

const historico = document.querySelector(".valor_historico");

const botoes_operadores = document.querySelectorAll(".botao_operador")


// seleciono todos os botões de números e operadores para pegar os valores digitados.
botoes_numericos.forEach(botao => {
    botao.addEventListener("click" , () => {
        const valor = botao.innerText;

//Limito a quantidade de caracteres que aparecem na tela da calculadora.

if (window.innerWidth >= 568 && window.innerHeight > 150 && window.innerHeight <= 568) {
    if (tela.innerText.length > 6) {
        console.log("Valor limite é 6") 
        return;
    }
} else if (window.innerWidth >= 312) {
    if (tela.innerText.length > 10) {
        console.log("Valor limite é 10") 
        return;
    }
} 

if(tela.innerText === "") {
        tela.innerText = valor;
} else {
        tela.innerText += valor;
    }
    })
});

// seleciono todos os botões operadores para pegar os valores digitados.
botoes_operadores.forEach (btn_operador => {
    btn_operador.addEventListener("click" , () => {

        const valor_btn = btn_operador.innerText;
        
        if(tela.innerText === "") {
            tela.innerText = valor_btn;
        } else {
            tela.innerText += valor_btn;
        }
    })
})

// calculo o resultado e transmito para a tela de exibição.
resultado.addEventListener("click" , ()=> {

    if(tela.innerText === "") {
        tela.innerText = "";
        console.log("Nada para calcular!")
    } else {
        let calculo = tela.innerText;
        calculo = calculo.replace(/x/gi , "*");
        calculo = eval(calculo.replace(/÷/gi , "/"));
        const valor_historico = tela.innerText;
        historico.innerText = valor_historico;
        tela.innerText = calculo;
    }
});

// seleciono o botão de apagar para cada valor digitado. 
document.querySelector("#botao_apagar").addEventListener("click", () => {
        if(tela.innerText === "") {
            tela.innerText = "";
        } else {
            tela.innerText = tela.innerText.slice(0, -1);
            historico.innerText = historico.innerText.slice(0, -2);
        }
})

// seleciono o botão de apagar tudo de uma vez na tela de exibição.
document.querySelector("#botao_c").addEventListener("click" , () => {
    historico.innerText = "";
    tela.innerText = "";
});

// SUPORTE AO TECLADO

document.addEventListener('keydown', (event) => {
    let tecla = event.key;

    if (tecla === "*") {
        tecla = "x";
        console.log(tecla);
    } else if  (tecla === "/") {
        tecla = "÷"
        console.log(tecla);
    }

if ((tecla >= '0' && tecla <= '9') || tecla === '+' || tecla === '-' || tecla === 'x' || tecla === '÷') {

//Limito a quantidade de caracteres que aparecem na tela da calculadora. 

if (window.innerWidth < 568) {
    if (tela.innerText.length > 10) {
        console.log("Valor limite é 10") 
        return;
    }
} else if (window.innerWidth >= 568) {
    if (tela.innerText.length > 18) {
        console.log("Valor limite é 18") 
        return;
    }
} 
    
    if (tela.innerText === "") {
                tela.innerText = tecla;
            } else {
                tela.innerText += tecla;
        }
    } else if (tecla === '=' || tecla === 'Enter') {
        event.preventDefault();
        if (tela.innerText !== "") {
            let valor_historico = tela.innerText;
            historico.innerText = valor_historico;
            valor_historico = valor_historico.replace(/x/gi , "*");
            tela.innerText = eval(valor_historico.replace(/÷/gi , "/"));
            console.log(tela.innerText)
        } else {
            console.log("Nada para calcular!")
        }
} else if (tecla === 'Backspace') {
        tela.innerText = tela.innerText.slice(0, -1);
        historico.innerText = historico.innerText.slice(0, -2);
          
} else if (tecla === 'Escape'){
        historico.innerText = "";
        tela.innerText = "";
}
});