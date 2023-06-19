const numeros = document.querySelectorAll(".numero");
const oper = document.querySelectorAll(".operadores");
const igual = document.querySelector(".igual");
const borrar = document.querySelector(".borrar");
const pantalla = document.querySelector(".pantalla"); 

let operandoActual = "";
let operandoAnterior = ""; 
let resultado = ""; 
let operador = ""; 


numeros.forEach((numero) => {
    numero.addEventListener("click", () => {
        operandoActual += numero.innerHTML;
        pantalla.innerHTML = operandoActual;
    })
})

oper.forEach((operadores) => {
    operadores.addEventListener("click", () => {
        operandoAnterior = operandoActual;
        operandoActual = "";
        operador = operadores.innerHTML;
    })
})

igual.addEventListener("click",() => {
    switch(operador) {
        case "+":
            resultado = parseFloat(operandoAnterior) + parseFloat(operandoActual);
            console.log(resultado);
            break;
        case "-":
            resultado = parseFloat(operandoAnterior) - parseFloat(operandoActual);
            break;
        case "/":
            resultado = parseFloat(operandoAnterior) / parseFloat(operandoActual);
            break;
        case "x":
            resultado = parseFloat(operandoAnterior) * parseFloat(operandoActual);
            break;
        default:
            console.log("operacion no valida");
    }
    pantalla.innerHTML = resultado;
})

borrar.addEventListener("click",() => {
    pantalla.innerHTML = "";
})