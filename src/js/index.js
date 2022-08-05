const btnAvancar = document.getElementById('botao-avancar');
const btnVoltar = document.getElementById('botao-voltar');
const cartoes = document.querySelectorAll('.cards');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
       cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function (){
    esconderCartaoSelecionado();
    
    if(cartaoAtual === cartoes.length - 1) {
        const cartaoSelecionado = document.querySelector('.fundo-1');
        cartaoSelecionado.classList.add('selecionado');
        cartaoAtual = 0;
    } else {
            cartaoAtual++;
    }
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function (){
    esconderCartaoSelecionado();

    if (cartaoAtual === 0) {
    	const cartaoSelecionado = document.querySelector('.fundo-8');
    	cartaoSelecionado.classList.add('selecionado');
    	cartaoAtual = cartoes.length - 1;
    } else {
    	cartaoAtual--;
    }
    mostrarCartao(cartaoAtual);
});