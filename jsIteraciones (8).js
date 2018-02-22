function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero 
	
	var respuesta

	respuesta = prompt("quiere ingresar un numero?")

	while(respuesta = "si")
	{
		contador ++;
		numero = prompt("que numero queres, PA? nnnnyaaaaa")
		numero = parseInt(numero)

		while ( isNaN (numero))
		{
			numero = prompt("ingrese NU ME ROS")
			numero = parseInt(numero);
		}
		
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN