function Mostrar()
{
  var importe;
  var iva;

  importe=prompt("Inserte el precio del producto, a continuacion se mostrata el valor del producto con IVA agregado");
  importe=parseInt(importe);

  iva = importe*1.21;

  document.getElementById("importeFinal").value = iva; 



}
