//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe 
	var iva 
	var importeFinal

	iva = 1.21

	importe = prompt("Ingrese importe");
	importe = parseInt(importe);

	importeFinal = importe * iva 

	document.getElementById("importe").value = importeFinal;

	
	
}

