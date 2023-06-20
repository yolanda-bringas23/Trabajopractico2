const numeros = document.querySelectorAll(".numero");
const oper = document.querySelectorAll(".operadores");
const igual = document.querySelector(".igual");
const borrar = document.querySelector(".borrar");
const pantalla = document.querySelector(".pantalla"); 

let operandoActual = "";
let operandoAnterior = ""; 
let resultado = ""; 
let operador = ""; 

const suma = (a,b) => {
    return a + b;
}

const resta = (a,b) => {
    return a - b;
}

const division = (a,b) => {
    return a / b;
}

const multiplicar = (a,b) => {
    return a * b;
}

numeros.forEach((numero) => {
    numero.addEventListener("click", () => {
        operandoActual += numero.innerHTML;
        pantalla.innerHTML = operandoActual;
    })
})

oper.forEach((operadores) => {
    operadores.addEventListener("click", () => {
        if (operandoAnterior == ""){
            operandoAnterior = operandoActual;
            operandoActual = "";
        }
        operador = operadores.innerHTML;
    })
})


igual.addEventListener("click",() => {
    switch(operador) {
        case "+":
            resultado = suma(parseFloat(operandoAnterior), parseFloat(operandoActual));
            break;
        case "-":
            resultado = resta(parseFloat(operandoAnterior), parseFloat(operandoActual));
            break;
        case "/":
            resultado = division(parseFloat(operandoAnterior), parseFloat(operandoActual));
            break;
        case "*":
            resultado = multiplicar(parseFloat(operandoAnterior), parseFloat(operandoActual));
            break;
        //default:
            console.log("operacion no valida");
        
    }
    pantalla.innerHTML = resultado;
})

borrar.addEventListener("click",() => {
    pantalla.innerHTML = "";
    operandoAnterior = ""; 
    operandoActual = ""; 
})