const botaoAumentar = document.querySelector('#aumentar');
const botaoDiminuir = document.querySelector('#diminuir');
//const botaoZerar = document.querySelector(#'zerar')
const contadorElemento = document.querySelector('#contador');

let contador = 0;

function aumentar()
{
    contador++;
    contadorElemento.textContent = contador;
}

function diminuir() 
{
    if (contador < 0) 
    {
        alert("Contador Zerado")    
    }    
    else {
        contador--;
    contadorElemento.textContent = contador;
    }
}

function zerar()
{
    contador = 0;
    contadorElemento.textContent = contador;
}

botaoAumentar.addEventListener('click', aumentar);
botaoDiminuir.addEventListener('click', diminuir);
document.querySelector('#zerar').addEventListener('click', zerar);