function Mostrar()
{//ingrdsasrt 3 numeros, 
 var numeroUno;
 var numeroDos;
 var numeroTres;
 var NumeroMayor;
numeroUno = prompt("Ingrese el Primer numero.");
numeroDos = prompt("Ingrese el Segundo numero.");
numeroTres = prompt("Ingrese el Tercer numero.");

//parse

if(numeroUno > numeroDos && numeroUno > numeroTres )
{
 NumeroMayor = numeroUno;        
}   
else{
    if ( numeroDos > numeroUno && numeroDos > numeroTres ) 
    {
     NumeroMayor = numeroDos;    
    }
    else
    {
     NumeroMayor = numeroTres;     
    }
}

alert(NumeroMayor);

    



 
}
