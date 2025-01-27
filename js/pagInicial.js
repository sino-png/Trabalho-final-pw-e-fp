function configurarMemoriaSecundaria() {
    if (!localStorage.usuarios) {
        var usuarios = [];
        localStorage.setItem('usuarios', JSON.stringigy(usuarios));
    }
    if (!localStorage.funcionarios) {
        var funcionarios = []; 
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }
}

function Entrar() {
    if ($("#formInicio").valid()){
        window.location.href = "#"
    }
}