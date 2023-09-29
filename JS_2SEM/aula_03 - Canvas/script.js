//atribui a uma variável o elemento selecionado
canvas = document.querySelector('canvas');

//definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

//a variável c se torna um objeto onde pode ser atribuido métodos
c = canvas.getContext('2d');

//atribuindo propriedades e metodos ao objeto
//posiçôes(X, Y, widght)

c.fillStyle = "red";
c.fillRect(100,80,150,500);
c.fillStyle = "rgba(0,255,0,0,5)";
c.fillRect(200,100,500,100);
c.fillRect(100,400,850,100);

//Desenhando uma linha

c.beginPath();
//Posição inicio da linha
c.moveTo(50,450);
c.lineTo(700,50);
c.stroleStyle = "black";
c.stroke();
//Encerrando o caminho
c.closePath();

//criando um círculo
//posições para criação
//k, y, raio, anguloInical, anguloFicar

c.beginPath()
c.arc(400, 450, 100, 0, Math.PI * 2);
c.fillStyle = "rgba(0,0,255,0.5";
c.stroke();
c.fill();
c.closePath();

//Criando um laço para criar vários círculos randomicos

for(var i = 0; i < 10; i++)
{
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    c.beginPath();
    //Math.random * 100 deixa o tamanho aleatório
    c.arc(x, y, Math.random() * 100, 0, Math.PI * 2);
    c.fillStyle = "rgba(0,0,225,0.5)";
    c.stroke();
    c.fill();
    c.closePath();
}