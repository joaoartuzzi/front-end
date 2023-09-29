const canvas = document.querySelector("#pintarCanvas");
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d');

//variável que armazenará a cor
const corEscolhida = document.querySelector('#corEscolhida');
const botao = document.querySelector('#limpar');
let pintando = false;

//define a variável como true indicando que o usuário começou a desenhar
canvas.addEventListener('mousedown', () => {
    pintando = true;
})

//define a variável como false indicando que o usuário soltou o click
canvas.addEventListener('moseup', () => {
    pintando = false;
    context.beginPath();//começa uma nova trajetória.
})

//a ação é indicada assim que o mouse se move, desde que o mousedown continue pressionado
canvas.addEventListener('mousemove', desenhar);

//selecione a cor a ser utilizada
corEscolhida.addEventListener('input', atualizarCor);

//chamamos a função desenhar e passamos o event como parâmetro.
//o event é um objeto que contém atributos que são acionados de acordo com o evento ocorrido
function desenhar(event)
{
    if(!pintando) return;
    //retornam a posiçãodo elemento na tela
    const {clientX, clientY} = event;
    //obtém as coordenadas do canto esquerdo do topo
    const {left, top} = canvas.getBoundingClientRect();

    //subtrai as coordenadas do canvas nos dando relatividade com o canvas

    const x = clientX - left;
    const y = clientY - top;

    context.lineTo(x,y);
    context.stroke();
    context.beginPath();
    context.moveTo(x,y);
}

function atualizarCor(event){
    context.strokeStyle = event.target.value;
}
function limpar()
{
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();
}

botao.addEventListener('click', limpar);