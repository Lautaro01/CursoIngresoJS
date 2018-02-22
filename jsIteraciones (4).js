function Mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 10.");

	while ( numero >= 11 && numero != null)
	{
		alert("El 0 al 10, ingrese de nuevo el numero.");

		var numero = prompt("ingrese un número entre 0 y 10.");
	}


}//FIN DE LA FUNCIÓN