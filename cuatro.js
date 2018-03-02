function Mostrar()
{
//ingresae 2 numers x pront; si son = concatenados;
//si el primero es mayor que el segundo los * 
//si el primero es mas chico que le segundo se restan 

var numeroUno;
var numeroDos;
numeroUno = prompt("Ingrese el primer numero");
numeroDos = prompt("Ingrese el segundo numero.");

var resultadoPar;
var resultadoMayor;
var resultadoMenor;

if(numeroUno == numeroDos)
{
    resultadoPar = numeroUno + numeroDos
}
else
{
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    if(numeroUno > numeroDos)
    {
       resultadoMayor = numeroUno * numeroDos;

        if(resultadoMayor%2==0 && resultadoMayor!=0)
        {
           alert (resultadoMayor + " Es par");
        }
        else 
        {
            
        }
        
        
    }
    else if ( numeroUno < numeroDos)
    {
        resultadoMenor
    }

}

document.write("Si los numeros eran iguales: " + resultadoPar + ", Si el primer numero era mayor que el segundo: " + resultadoMayor + " Si el primer numero era menor que el segundo: " + resultadoMenor );

}
