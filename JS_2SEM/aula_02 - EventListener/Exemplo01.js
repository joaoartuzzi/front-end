//Selecionando botão pelo ID
const botao = document.querySelector('button');
const contadorElemento = document.querySelector('#contador');

//Inicializando contador
let contador = 0;

//Função que sera chamada peloeventListener
function contando()
{
    contador++;
    contadorElemento.textContent = contador;
}

//Adicionando ouvinte do evento de click
botao.addEventListener('click', contando);