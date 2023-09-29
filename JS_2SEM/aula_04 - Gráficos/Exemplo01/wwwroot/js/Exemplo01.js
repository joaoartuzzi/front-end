//dados para o gráfico
var data = {
    //rotulos do gráfico
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

    //propriedades do gráfico
    datasets: [{
        label: 'Vendas 2023',
        backgroundColor: 'rgba(76, 193, 192, 0.6)',
        borderColor: 'rgba(0, 192, 150 , 1)',
        borderWidth: 1,
        data : [13, 10, 6, 29, 10, 9,]
    },
    {
        label: 'Vendas 2022',
        borderWidth: 1,
        data: [3, 6, 20, 5, 14, 8]
    },
    {
        label: 'Vendas 2021',
        borderWidth: 1,
        data: [6, 8, 10, 13, 9, 4]
    },
    {
        label: 'Vendas 2020',
        borderWidth: 1,
        data: [8, 13, 18, 16, 10, 9]
    },
    {
        label: 'Vendas 2019',
        borderWidth: 1,
        data: [19, 9, 13, 8, 9, 5]
    }
]
};

//configurações do gráfico
var options = {
    scales: {
        y:{
            begginAtZero: true
        }
    }
};

//criar o gráfico de barras
var ctx = document.querySelector('#grafico').getContext('2d');
var barChhart = new Chart (ctx, {
    type: 'bar',
    data: data,
    options: options
}) 