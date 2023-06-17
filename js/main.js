const pantalla = document.querySelector('.pantalla'); 
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.ope');
const igual = document.querySelector('.igual');
const borrar = document.querySelector('.borrar');
let operandoActual = '';
let operandoAnterior = ''; 
let operador = ''; 
let resultado = '';


numeros.forEach((numero) => {
    numero.addEventListener('click', () => {
        operandoActual += numero.innerHTML;
        pantalla.innerHTML = operandoActual;
    })
})

operadores.forEach((ope) => {
    ope.addEventListener('click', () => {
        operandoAnterior = operandoActual;
        operandoActual = '';
        operador = ope.innerHTML;
    })
})

igual.addEventListener('click',() => {
    switch(operador){
        case 'x':
            resultado = parseFloat(operandoAnterior) * parseFloat(operandoActual);
            break
        case '/':
            resultado = parseFloat(operandoAnterior) / parseFloat(operandoActual);
            break
        case '-':
            resultado = parseFloat(operandoAnterior) - parseFloat(operandoActual);
            break
        case '+':
            resultado = parseFloat(operandoAnterior) + parseFloat(operandoActual);
            break
        default:
            console.log('Operacion no valida');
    }
    pantalla.innerHTML = resultado;
})

borrar.addEventListener('click',() => {
    pantalla.innerHTML = '';
})