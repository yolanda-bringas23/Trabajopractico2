const pantalla = document.querySelector('.pantalla'); 
const botonesNumeros = document.querySelectorAll('.numero');
console.log(botonesNumeros);
const botonesOperadores = document.querySelectorAll('.operacion');
let operandoActual = '';
let operandoAnterior = ''; 
let operador = ''; 
let resultado = '';

const suma = (a,b) => {
    return a + b;
}
 
const resta = (a,b) => {
    return a - b;
}

const multiplicacion = (a,b) => {
    return a * b;
}

const division = (a,b) => {
    return a / b;
}


botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log(boton);
    })
})


