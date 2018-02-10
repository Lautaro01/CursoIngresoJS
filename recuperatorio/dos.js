function Mostrar()
{
    var importe;
    var descuento; 

    importe = prompt("Inserte su importe y a continuacion se le mostrara su importe final con un 25% de menos:");
    importe = parseInt(importe);

    descuento = importe*0.25;


    document.getElementById("importeFinal").value = importe - descuento; 
  
}
