

// OBJETIVO 1- quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos/inativos

//  Passo 1- pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3- Adicionar a classe "ativo" nos escondidos
       mostrarMaisProjetos(); //função fatorada

    // OBJETIVO 2- Esconder o botão de mostrar mais
    //Passo 1- pegar o botão e esconder ele
       esconderBotao();  //função fatorada
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

