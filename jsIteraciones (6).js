function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero 
	 
	while (contador < 5)
	{
		
		contador ++;
		
		numero = prompt("ingrese 5 numeros");
		numero = parseInt(numero);
		
		while ( isNaN (numero))
		{
			numero = prompt("ingrese 5 NU ME ROS")
			numero = parseInt(numero);
		}
		

		acumulador = acumulador + numero
		
	}
	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN