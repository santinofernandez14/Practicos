let num1=Number(prompt('ingrese un numero'));
let num2=Number(prompt('ingrese un numero'));
let num3=Number(prompt('ingrese un numero'));

if(num1>num2 && num1>num3){
    alert('el numero mayor es '+num1);
}else if(num2>num1 && num2>num3){
    alert('el numero mayor es '+num2);
}else if(num3>num1 && num3>num2){
    alert('el numero mayor es '+num3);
}else if(num1%3==0 || num2%3==0 || num3%3==0){
    alert('los tres numeros son iguales');
}



