//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importefinal;
	var iva;

	importe = prompt("Ingrese el importe");
	importe = parseInt(importe);

	iva= 1.21

	importefinal= importe * iva;

	document.getElementById("importe").value = importefinal;

}

