const resultadoEl = document.querySelector('#resultado')
const copiarEl = document.querySelector('#copiar');
const longitudEl = document.querySelector('#longitud');
const mayusEl = document.querySelector('#mayus');
const minusEl = document.querySelector('#minus');
const numsEl = document.querySelector('#nums');
const simbsEl = document.querySelector('#simbs');
const generarEl = document.querySelector('#generar')

const randomFunc = {
    minus: getRandomLower,
    mayus: getRandomUpper,
    numero: getRandomNumber,
    simbolo: getRandomSymbol
}

copiarEl.addEventListener('click', function() {
    let textoACopiar = document.querySelector('#resultado');
    textoACopiar = textoACopiar.innerText;
    navigator.clipboard.writeText(textoACopiar);
    alert('Texto copiado con exito!');
})

generarEl.addEventListener('click', ()=>{
    const longitud = +longitudEl.value
    const conMinus = minusEl.checked
    const conMayus = mayusEl.checked
    const conNum = numsEl.checked
    const conSym = simbsEl.checked

    resultadoEl.innerText = generarContra(conMinus, conMayus, conNum, conSym, longitud)
})

function generarContra(minus, mayus, numero, simbolo, longitud){
    let contraGenerada = ''
    const tiposCont = minus + mayus + numero + simbolo
    const tiposArr = [{minus}, {mayus}, {numero}, {simbolo}].filter(item=>Object.values(item)[0])

    if(tiposCont === 0){
        return ''
    }

    for(let i =0;i<longitud;i+=tiposCont){
        tiposArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            contraGenerada += randomFunc[funcName]()
        })
    }

    const contraFinal = contraGenerada.slice(0, longitud)

    return contraFinal
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}