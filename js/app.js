function comprar() {
    let selectionBox = document.getElementById('tipo-ingresso').value;
    let qtdInt = parseFloat(document.getElementById('qtd').value);
    let qtdOption = parseInt(document.getElementById(`qtd-${selectionBox}`).innerHTML);

    switch (true) {
        case qtdInt>0 && Number.isInteger(qtdInt) && qtdOption>=qtdInt:
            switch (selectionBox) {
                case 'pista':
                    if (qtdInt<=qtdOption) {
                        qtdOption = qtdOption - qtdInt;
                        document.getElementById('qtd-pista').innerHTML = qtdOption;
                        clearQtd();
                    }
                    else {
                        return alert('Quantidade selecionada é maior que a quantidade disponível');
                    }
                    break;
                case 'inferior':
                    if (qtdInt<=qtdOption) {
                        qtdOption = qtdOption - qtdInt;
                        document.getElementById('qtd-inferior').innerHTML = qtdOption;
                        clearQtd();
                    }
                    else {
                        return alert('Quantidade selecionada é maior que a quantidade disponível');
                    }
                    break;
                case 'superior':
                    if (qtdInt<=qtdOption) {
                        qtdOption = qtdOption - qtdInt;
                        document.getElementById('qtd-superior').innerHTML = qtdOption;
                        clearQtd();
                    }
                    else {
                        return alert('Quantidade selecionada é maior que a quantidade disponível');
                    }
                    break;
                default:
                    break;
            }
            break;
        default:
            impossivelEfetuar();
            break;
    }
}

function impossivelEfetuar() {
    let selectionBox = document.getElementById('tipo-ingresso').value;
    let qtdOption = parseInt(document.getElementById(`qtd-${selectionBox}`).innerHTML);
    let qtdInt = parseFloat(document.getElementById('qtd').value);
    let selectElement = document.getElementById('tipo-ingresso');
    let selectedItem = selectElement.options[selectElement.selectedIndex].innerText;
    // return qtdOption;
    switch (true) {
        case qtdOption===0:
            alert(`Não há mais lugares disponíveis para ${selectedItem}`);
            clearQtd();
            break;
        case qtdOption< qtdInt:
            alert(`Quantidade selecionada é maior que a quantidade disponível para ${selectedItem}`);
            clearQtd();
            break;
        case isNaN(qtdInt):
            alert('Nenhuma quantidade selecionada');
            clearQtd();
            break;
        case !Number.isInteger(qtdInt):
            alert('Digite um número inteiro');
            clearQtd();
            break;
        case qtdInt<0:
            alert('Não é possível informar um número negativo');
            clearQtd();
            break;
        default:
            break;
    }
}

function clearQtd() {
    document.getElementById('qtd').value = '';
}

function calcSimples(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return console.log(a + b);
            break;
        case 'subtracao':
            return console.log(a - b);
            break;
        case 'multiplicacao':
            return console.log(a * b);
            break;
        case 'divisao':
            return console.log(a / b);
            break;
        default:
            break;
    }
}

function parOuImpar(n) {
    x = n % 2;
    return x===0 ? 'Par' : 'Ímpar';
}

function celsiusFahrenheit(paraQual, valor) {
    cToF = (valor * 9/5) + 32;
    fToC = (valor - 32) * 5/9;
    switch (paraQual) {
        case 'c':
            return cToF;
            break;
        case 'f':
            return fToC;
            break;
    }
}