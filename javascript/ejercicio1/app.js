let num1=Number(prompt('ingrese un numero'));
let num2=Number(prompt('ingrese un numero'));
let num3=Number(prompt('ingrese un numero'));
if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    console.log("ingresaste mal los numeros")
}

let suma=num1+num2+num3;
let promedio=suma/3;
console.log(promedio)