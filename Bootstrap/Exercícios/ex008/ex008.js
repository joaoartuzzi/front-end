var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('usuarios'))
if (listaUsuarios == null){
    listaUsuarios = []
}

console.log(listaUsuarios)

function validarCadastro(nome, usuario, senha, confirmarSenha){
    if (senha != confirmarSenha) {
        alert ('Verifique suas senhas pois estão diferentes')
        return false
    }

    if (nome != '' && usuario != '' && senha != '' && confirmarSenha != '' ) {
        return true
    } else {
        return false
    }    
}

function Cadastrar() {
    var nome = document.getElementById("nome").value
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
    var confirmarSenha = document.getElementById("confirmarSenha").value
    
    var possoCadastrar = validarCadastro(nome, usuario, senha, confirmarSenha)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    
    var usuario = {
        nome: nome,
        usuario: usuario, 
        senha: senha
    }
    listaUsuarios.push(usuario)
    
    localStorage.setItem( 'usuarios', JSON.stringify(listaUsuarios) )

    document.getElementById("nome").value = ''
    document.getElementById("usuario").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("confirmarSenha").value = ''
    document.getElementById("nome").focus()

    alert ('Usuário cadastrado com sucesso. Faça o login.   ')

    location.href = `ex008.html`
}
function limpar() {
    document.getElementById("nome").value = ''
    document.getElementById("usuario").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("confirmarSenha").value = ''
    document.getElementById("nome").focus()
}