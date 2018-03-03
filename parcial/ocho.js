function Mostrar()
{   
    var contadorDeNumeros=0; //Osea, cuantos numeros ingrese
    var numeros;             //valor del numero
    var numerosPares=0;      // Cantidad de numeros pares
    var promedio;            //
    var sumaDeTodosLosNumeros=0; //Numero+numero+numero....
    var maximo;     
    var minino; 
    var respuesta="si"

    while(respuesta != "no")
    {
        contadorDeNumeros++;
        numeros = prompt("Ingrese su numero.");
        numeros = parseInt(numeros);
        sumaDeTodosLosNumeros = sumaDeTodosLosNumeros + numeros;
        

        while(numeros < 0 || isNaN(numeros))
        { 
            numeros = prompt("Ingrese un numero mayor a 0!");
            numeros = parseInt(numeros);
        }//validar 

        if(numeros%2==0 && numeros != 0)
        {
            numerosPares++;
        }//numeros pares

        if(contadorDeNumeros == 1)
        {
            maximo = numeros;
            minino = numeros;
        }
        else
        {
            if(numeros > maximo)
            {
                maximo = numeros;
            }
            else
            {
                if(numeros < maximo && numeros < minino)
                {
                    minino = numeros
                }
            }
        }//maximo y minimo
        respuesta = prompt("Desea continuar?");
    }//while 

    promedio = sumaDeTodosLosNumeros/contadorDeNumeros

    document.write("A) La cantidad de numeros pares es: " + numerosPares + ". <br>");
    document.write("B) El promedio de los numeres ingresados es: " + promedio + ". ");
    document.write("C) La suma de todos los numeros es:" + sumaDeTodosLosNumeros + ". ");
    document.write("El numero maximo es: " + maximo + " y el numero minimo es: " + minino);


}//funcion 
