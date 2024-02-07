let num=Number(prompt('ingrese un numero'));
if(num%2==0){
    console.log('el numero ingresado es par');
}else if(isNaN(num)){
    console.log("ingrese un numero")
}else{
    console.log('el numero ingresado es impar');
}