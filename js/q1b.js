function configurarMemoriaSecundaria(){
    if (!localStorage.carros){
        var carros = [];
        localStorage.setItem('carros', JSON.stringify(carros));
    }
}

function imprimirLinhaTabela(carro) {
	var tabelaDados = document.getElementById("tabelaDados");

	var linha = tabelaDados.insertRow(1);

	var colunaPlaca = linha.insertCell(0);
	var colunaDesc = linha.insertCell(1);
	var colunaValor = linha.insertCell(2);

	colunaPlaca.innerText = carro.placa;
	colunaDesc.innerText = carro.desc;
	colunaValor.innerText = carro.valor;

}

function exibirTabela() {

	var carros = JSON.parse(localStorage.getItem('carros'));

	var posicao = 0;
	var quantidade = carros.length;
	for (posicao = 0; posicao < quantidade; posicao++) {
		imprimirLinhaTabela(carros[posicao])
	}
}
