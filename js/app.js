function comprar() {
    let selectionBox = document.getElementById('tipo-ingresso').value;
    // let qtdPista = parseInt(document.getElementById('qtd-pista').innerHTML);
    // let qtdInferior = parseInt(document.getElementById('qtd-inferior').innerHTML);
    // let qtdSuperior = parseInt(document.getElementById('qtd-superior').innerHTML);
    let qtdInt = parseInt(document.getElementById('qtd').value);
    let qtdOption = parseInt(document.getElementById(`qtd-${selectionBox}`).innerHTML);

    switch (selectionBox) {
        case 'pista':
            if (qtdOption>0 && qtdInt<=qtdOption && !isNaN(qtdInt)) {
                qtdOption = qtdOption - qtdInt;
                document.getElementById('qtd-pista').innerHTML = qtdOption;
                clearQtd();
            }
            else {
                return impossivelEfetuar();
            }
            break;
        case 'inferior':
            if (qtdOption>0 && qtdInt<=qtdOption && !isNaN(qtdInt)) {
                qtdOption = qtdOption - qtdInt;
                document.getElementById('qtd-inferior').innerHTML = qtdOption;
                clearQtd();
            }
            else {
                return impossivelEfetuar();
            }
            break;
        case 'superior':
            if (qtdOption>0 && qtdInt<=qtdOption && !isNaN(qtdInt)) {
                qtdOption = qtdOption - qtdInt;
                document.getElementById('qtd-superior').innerHTML = qtdOption;
                clearQtd();
            }
            else {
                return impossivelEfetuar();
            }
            break;
        default:
            break;
    }

    // return qtdPista;
}

function impossivelEfetuar() {
    let selectionBox = document.getElementById('tipo-ingresso').value;
    let qtdOption = parseInt(document.getElementById(`qtd-${selectionBox}`).innerHTML);
    let qtdInt = parseInt(document.getElementById('qtd').value);
    // return qtdOption;
    switch (true) {
        case qtdOption===0:
            alert('Não há mais lugares disponíveis');
            break;
        case qtdOption< qtdInt:
            alert('Quantidade selecionada é maior que a quantidade disponível');
            break;
        case isNaN(qtdInt):
            alert('Nenhuma quantidade selecionada');
            break;
        default:
            break;
    }
}

function clearQtd() {
    document.getElementById('qtd').value = '';
}