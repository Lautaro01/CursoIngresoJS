function Mostrar()
{
    var importe;
    var porcenjate;
    var descuento;
    var importeFinal;

    importe = prompt("Ingrese su improte");
    porcenjate = prompt("Ingrese el descuento %");
    importe = parseInt(importe);
    porcenjate = parseInt(porcenjate);

    descuento = importe*porcenjate/100;
    descuento = parseInt(descuento);
    
    importeFinal = importe - descuento;
    descuento = parseInt(descuento);

    document.getElementById("importeFinal").value = importeFinal;

}
