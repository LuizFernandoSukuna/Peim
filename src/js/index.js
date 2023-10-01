const botoes = document.querySelectorAll('.botao');

const personagem = document.querySelectorAll(".personagens");


botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        const botaoselecionado = desselecionarbotao();
        const personagensselecionado = desselecionarpersonagens();

        botaoselecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");
        personagensselecionado.classList.remove("selecionado");
        personagem[index].classList.add("selecionado");
    });

});

function desselecionarpersonagens() {
    return document.querySelector(".personagens.selecionado");
}

function desselecionarbotao() {
    return document.querySelector(".botao.selecionado");
}

