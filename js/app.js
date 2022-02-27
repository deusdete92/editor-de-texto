//aria de texto
let texto  = document.getElementById('texto')

// botão negrito
const negrito = () => {
    if(texto.classList.contains('negrito')){
        texto.classList.remove('negrito')
    }else{
        texto.classList.add('negrito')
    }
}
document.getElementById('negrito').addEventListener('click', negrito)

// botão itálico
const italico = () => {
    if(texto.classList.contains('italico')){
        texto.classList.remove('italico')
    }else{
        texto.classList.add('italico')
    }
}
document.getElementById('italico').addEventListener('click', italico)

//area seleção 
const maiusculaMinuscula = () => {
    let textoSelecao = document.getElementById('selecao').value
    if (textoSelecao == 'maiuscula'){
        if(texto.classList.contains('minuscula')){
            texto.classList.remove('minuscula')
            texto.classList.add('maiuscula')
        }else{
            texto.classList.add('maiuscula')
        }
    }else if(textoSelecao == 'minuscula'){
        if(texto.classList.contains('maiuscula')){
            texto.classList.remove('maiuscula')
            texto.classList.add('minuscula')
        }else{
            texto.classList.add('minuscula')
        }
    }else if(textoSelecao == ''){
        if(texto.classList.contains('minuscula') || texto.classList.contains('maiuscula')){
            texto.classList.remove('minuscula')
            texto.classList.remove('maiuscula')
        }
    }
}

// botão copiar
const copiarTexto = () => {
    let copiar = document.getElementById('texto').value
    navigator.clipboard.writeText(copiar)
}
document.getElementById('copiar').addEventListener('click', copiarTexto)



//apagar
const apagar = () => {
    texto.value = ''
}
document.getElementById('apagar').addEventListener('click', apagar)
