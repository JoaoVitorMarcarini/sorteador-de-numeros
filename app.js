

function sortear(){
    let quantidade = document.getElementById('quantidade').value; 
    let de = document.getElementById('de').value; 
    let ate = document.getElementById('ate').value;
    let intervalo = ate - de + 1 

    if (intervalo < quantidade){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!')
        return;    
    }

    if(de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    } 

    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
    
         while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
    
        sorteados.push(numero);
       
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    
        alterarStatusBotao();
    }
    
    
    

}

function obterNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else{
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')    
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao()
}

    

