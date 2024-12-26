let logo = document.querySelector('.imagem')

setTimeout(() => {
    logo.style.transition = 'all 1s ease-in-out'
    logo.style.opacity = '1'
}, 1000);

let abrirMenu = document.querySelector('#abrir')
abrirMenu.addEventListener('click', Open)

let fecharMenu = document.querySelector('#fechar')
fecharMenu.addEventListener('click', Close)

let modal = document.querySelector('.menu-tel')

function Open(){
    modal.style.transition = 'all 1s easy'
    modal.style.zIndex = '+2'
    modal.style.opacity = '1'
}

function Close() {
    modal.style.zIndex = '-1'
    modal.style.opacity = '0'
}
