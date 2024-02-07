let num=Number(prompt('ingrese un numero'));
if(isNaN(num)){
    alert('ingrese un numero')
}
let suma=0;
while(num!=-1){
    if(isNaN(num)){
        alert('ingrese un numero')
    }else{
    num=Number(prompt('ingrese un numero'));
    suma=num+suma;
    alert(suma);
}
    
    }


