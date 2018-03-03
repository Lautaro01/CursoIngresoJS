function Mostrar()
{
    var numeroUno;
    var numeroDos;

    numeroUno = prompt("Ingrese el numero uno!.");
    numeroUno = parseInt(numeroUno);
    numeroDos = prompt("Ingrese el numero dos!.");
    numeroDos = parseInt(numeroDos);

    if(numeroUno == numeroDos)
    {
        document.write("Los numeros ingresados eran iguales, su multiplicacion es: " + (numeroUno * numeroDos) );
    }
    else 
    {
        if(numeroUno > numeroDos)
        {
            document.write("El primer numero era mas grande que el segundo, su resta es: " + (numeroUno - numeroDos));
        }
        else
        {
            document.write("El primer numero era MENOR que el segundo, su suma es: " + (numeroUno + numeroDos));
        }
    }

}
