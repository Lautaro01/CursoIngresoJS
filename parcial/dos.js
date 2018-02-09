function Mostrar()
{
    var producto;
    var iva;
    

    producto = prompt("Escriba el importe del producto para saber su valor con iva agregado!");
    producto = parseInt(producto);

    iva = producto*1.21;

    document.getElementById("importeFinal").value = iva;



    





}
