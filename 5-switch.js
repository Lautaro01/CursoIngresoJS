//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes 

	mes = prompt("Mes del año");

	switch(mes)
	{
		case "enero":
		case "febrero":
			alert("Veranitoooo!!")
			break;
			
		default:
			alert("Extraño enero y febrero")
			break;
	}
	
}

