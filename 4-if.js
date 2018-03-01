//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno
	var numeroDos

	var multiplicacion 
	var suma	
	var resta 

	numeroUno = prompt("Ingrese numero 1");
	numeroDos = prompt("Ingrese numero 2 ");

	if( numeroUno = numeroDos)
	{
		multiplicacion = numeroUno*numeroDos
	}
	else
	{
		if(numeroUno > numeroDos)
		{
			resta = numeroUno - numeroDos
		}
		else if(numeroUno < numeroDos)
		{
			suma= numeroUno + numeroDos
		}

	}


	document.write("Numeros iguales multiplicados: " + multiplicacion + " " )
	document.write("Numero 1 mas grande que el numero 2 se resta: " + resta + " ");
	document.write("Numero 1 menor que numero 2, lo sumo: " + suma + " ")
}

