//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var numero; 
	var maximo;
	var minimo;
	var dias=1;


	while(dias < 7)
	{	
		
		dias++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if (dias == 1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
					maximo=numero;
			}
			if(numero<minimo)
			{
				minimo = numero; 
			}

			
		}

		
	
	}
		
	if(dias==7)
	{
			alert("el importe mas alto fue " + maximo);
			alert("El importe mas bajo sue" + minimo);

	}
			
}

