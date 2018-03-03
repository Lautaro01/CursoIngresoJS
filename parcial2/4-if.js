//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var resta;
	var multiplicar;

	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
		multiplicar=numeroUno*numeroDos;

	}
	else
	{
		if(numeroUno > numeroDos)
		{
			resta=numeroUno-numeroDos;
		}
		else
		{
			suma=numeroUno+numeroDos;
		}
	}

	document.write("Suma: " + suma + " resta: " + resta + " multiplicacion: " + multiplicar  )

	
}

