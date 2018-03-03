function Mostrar()
{
  var importe;
  var importeFinal;

  importe = prompt("Igrese su importe!.");

  importeFinal = importe*1.21;

  document.getElementById("importeFinal").value = importeFinal;

}
