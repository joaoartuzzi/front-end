function animarBarraProgresso() 
{
    //Declarando as váriaveis e atribuindo os valores através dos elementos da DOM
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function(){
        if(progresso > 100)
        {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = 'url("https://engracado.com.br/wp-content/uploads/2020/05/toninho-tornado-pegadinhas-1024x576.jpg")'
        }
        else{
            progresso += 10;
            barra.css("width" , progresso + "%");
        }
    },50);
}