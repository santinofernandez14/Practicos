let num1=Number(prompt('ingrese un numero'));
let num2=Number(prompt('ingrese un numero'));
let num3=Number(prompt('ingrese un numero'));

if(num1>num2 && num1>num3){
    alert('el numero mayor es '+num1);
}else if(num2>num1 && num2>num3){
    alert('el numero mayor es '+num2);
}else if(num3>num1 && num3>num2){
    alert('el numero mayor es '+num3);
}

if(num1===num2 || num1===num3){
    alert('hay dos numeros iguales '+ num1)
}else if(num2===num1 || num2===num3){
    alert('hay dos numeros iguales '+ num2)
}else if(num3===num1 || num3===num2){
    alert('hay dos numeros iguales '+ num3)
}

