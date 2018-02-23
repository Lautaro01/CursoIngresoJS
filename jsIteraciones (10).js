function Mostrar()
{

	var contador=0;
	var numerosPositivos=0;
	var numerosNegativos=0;
	var numerosCero=0;
	var numero;
	var negativos=0;
	var positivos=0;
	var numerosPares=0;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;

	//declarar contadores y variables 
	
	var respuesta="si";

	 while(respuesta!="no")
	 { 
		contador++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(numero < 0)
		{
			numerosNegativos++;
			negativos = negativos + numero;	
		}
		else if ( numero > 0)
		{	
			numerosPositivos++;
			positivos = positivos + numero;	
		}
		else  
		{
			numerosCero++;
		}

	respuesta = prompt("Para salir ingresar no.");
	 }//While termina aca <---- 

	if(numero%2==0 && numero != 0)
	{
		numerosPares++;
	}//termina "if" contador de numeros pares. <----

	promedioNegativos = negativos/numerosNegativos;
	promedioPositivos = positivos/numerosPositivos;
	diferencia = positivos - negativos;


	document.write("suma de numeros positivos: " + positivos + ". ");

	document.write("suma de numeros negativos: " + negativos + ". ");

	document.write("La cantidad de numeros negativos que se intodujeron son: " + numerosNegativos + ". ");

	document.write("La cantidad de numeros positivos que se intodujeron son: " + numerosPositivos + ". ");

	document.write("La cantidad de ceros (0) ingresados son: " + numerosCero + ". ");

  	document.write("La cantidad de numeros pares ingrasados son: " + numerosPares + ". ");

	document.write("El promedio de los numeros negativos son: " + promedioNegativos + ". ");

	document.write("El promedio de los numeros positivos son: " + promedioPositivos + ". ");

	document.write("la diferencia entre numeros positivos y negativos es: " + diferencia +  ". ");





}//FIN DE LA FUNCIÓN