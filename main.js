const form = document.getElementById('formContato')
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});


function adicionaLinha() {
    const inputNomeContato = document.getElementById('nomeContato')
    const inputTelContato = document.getElementById('telContato')

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O Telefone: ${inputTelContato.value} já foi inserido.`)
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(parseFloat(inputTelContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}`;
        linha += `<td>${inputTelContato.value}`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
};    

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

