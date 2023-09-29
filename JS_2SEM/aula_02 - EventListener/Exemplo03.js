const corSelecionada = document.querySelector("#corSelecionada");
const exibirCor = document.querySelector("#exebirSelecao");

//Função para atualizar a cor exibida.
function atualizarCor()
{
    //atribui o valor da seleção na variável
    const corSeleciondaValue = corSelecionada.value;
    exibirCor.textContent = `Cor Selecionada: ${corSelecionada.value}`;

    //Usar cor no estilo da div
    exibirCor.style.color = corSelecionada.value;

}

//Adicionando ouvinte de evento change
atualizarCor()
corSelecionada.addEventListener('change', atualizarCor);