function Mostrar()
{
    var importe;
    var maximo;
    var minimo; 
    var contador=0;

    while(contador < 24)
    {
        contador++
        importe = prompt("Introduzca su importe");
        importe = parseInt(importe);

        while(isNaN(importe) || importe <= 0)
        {
            importe = prompt("Introduzca su importe! ( Su importe debe ser un numero mayor a 0, y no puede introducir letras!)");
            importe = parseInt(importe);
        }

        if(contador == 1)
        {
            maximo = importe;
            minimo = importe;
        }
        else 
        {
            if(importe > maximo)
            {
                maximo = importe;
            }
            else 
            {
                if( importe < maximo && importe < minimo)
                {
                    minimo = importe;
                }
                
            }
        }//contador maximo y minimo 
    }//While
    alert("El mayor importe fue: " + maximo + " y el menor fue: " + minimo + ". ");
}//funcion
