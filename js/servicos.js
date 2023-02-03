var tdTotalItens = document.querySelector('.js-total-de-itens');
var tdTotalPreco = document.querySelector('.js-total-preco');
var buttonConfirmar = document.querySelector('.js-botao-compras');

var totalItens = 0;
var totalPreco = 0;

function adicionaItem(checkbox){
    if(checkbox.checked){
        totalItens++;
        totalPreco += parseInt(checkbox.value);
    }
    else{
        totalItens--;
        totalPreco -= parseInt(checkbox.value);
    }
    tdTotalItens.textContent = totalItens + ' itens';
    tdTotalPreco.textContent = totalPreco + ' reais';
}

buttonConfirmar.onclick = confirmaCompra;

function confirmaCompra(){
    if(totalItens === 0){
        alert('Nenhum item selecionado');
    }
    else {
        alert('Itens adicionado no carrinho');
    }
}

