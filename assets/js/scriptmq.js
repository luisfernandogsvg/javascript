// esse código serve para monitorar o tamanho da tela,e quando chegar em determinado ponto, irá exibir o menu hamburger'

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        // itens.style = 'inline-block'
      itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none' 
    } else {
        itens.style.display = 'block'
    }
} 