let logo = document.querySelector('#logo')
let frase = document.querySelector('.frase')
setTimeout(() => {
    logo.style.transition = 'all 1s ease-in-out'
    logo.style.opacity = '1'
    logo.style.transform = 'translateY(0px)'

    frase.style.transition = 'all 1s ease-in-out'
    frase.style.opacity = '1'
    frase.style.transform = 'translateY(0px)'
}, 1500);

/*INDICADORES*/
let um = document.querySelector('#one1')
let dois = document.querySelector('#one2')
let tres = document.querySelector('#one3')
let quatro = document.querySelector('#one4')
/*DIVISÕES*/
let feed1 = document.querySelector('#one')
let feed2 = document.querySelector('#two')
let feed3 = document.querySelector('#three')
let feed4 = document.querySelector('#four')

/*BOTÕES*/
let setaRightOne = document.querySelector('#sd1') 
let setaRightTwo = document.querySelector('#sd2')
let setaRightThree = document.querySelector('#sd3')

let setaLeftOne = document.querySelector('#se1') 
let setaLeftTwo = document.querySelector('#se2')
let setaLeftThree = document.querySelector('#se3')

setaRightOne.addEventListener('click', RightOneChange)
setaRightTwo.addEventListener('click', RightTwoChange)
setaRightThree.addEventListener('click', RightThreeChange)
setaLeftThree.addEventListener('click', LeftThreeChange)
setaLeftTwo.addEventListener('click', LeftTwoChange)
setaLeftOne.addEventListener('click', LeftOneChange)


/*PASSAGENS A DIREITA*/
function RightOneChange(){
    /*SETA*/
    setaRightOne.style.display = 'none'
    setaLeftOne.style.display = 'flex'
    setaRightTwo.style.display = 'flex'
    /*DIV*/
    feed1.style.display = 'none'
    feed2.style.display = 'flex'
    /*INDICADOR*/
    um.style.backgroundColor = 'transparent'
    dois.style.backgroundColor = '#FFA92B'
}

function RightTwoChange(){
    /*SETA*/
    setaLeftOne.style.display = 'none'
    setaRightTwo.style.display = 'none'
    setaLeftTwo.style.display = 'flex'
    setaRightThree.style.display = 'flex'
    /*DIV*/
    feed2.style.display = 'none'
    feed3.style.display = 'flex'
    /*INDICADOR*/
    dois.style.backgroundColor = 'transparent'
    tres.style.backgroundColor = '#FFA92B'
}

function RightThreeChange(){
    /*SETA*/
    setaLeftTwo.style.display = 'none'
    setaRightThree.style.display = 'none'
    setaLeftThree.style.display = 'flex'
    /*DIV*/
    feed3.style.display = 'none'
    feed4.style.display = 'flex'
    /*INDICADOR*/
    tres.style.backgroundColor = 'transparent'
    quatro.style.backgroundColor = '#FFA92B'
}
/*PASSAGEM A ESQUERDA*/
function LeftThreeChange(){
    /*SETA*/
    setaLeftThree.style.display = 'none'
    setaLeftTwo.style.display = 'flex'
    setaRightThree.style.display = 'flex'
    /*DIV*/
    feed4.style.display = 'none'
    feed3.style.display = 'flex'
    /*INDICADOR*/
    quatro.style.backgroundColor = 'transparent'
    tres.style.backgroundColor = '#FFA92B'
}

function LeftTwoChange(){
    /*SETA*/
    setaLeftTwo.style.display = 'none'
    setaRightThree.style.display = 'none'
    setaLeftOne.style.display = 'flex'
    setaRightTwo.style.display = 'flex'
    /*DIV*/
    feed3.style.display = 'none'
    feed2.style.display = 'flex'
    /*INDICADOR*/
    tres.style.backgroundColor = 'transparent'
    dois.style.backgroundColor = '#FFA92B'
}

function LeftOneChange(){
   /*SETA*/
   setaLeftOne.style.display = 'none'
   setaRightTwo.style.display = 'none'
   setaRightOne.style.display = 'flex'
   /*DIV*/
   feed2.style.display = 'none'
   feed1.style.display = 'flex'
   /*INDICADOR*/
   dois.style.backgroundColor = 'transparent'
   um.style.backgroundColor = '#FFA92B' 
}

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

setTimeout(() => {
    alert('Alguns botões deste site não funcionarão pois é apenas um site teste! Obrigado pela compreensão ;)')
}, 5000);