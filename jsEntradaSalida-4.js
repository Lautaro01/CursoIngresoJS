/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{ 
	//Creamos variable nombre
	//Asignamos un valor a variable por prompt
	//Para comprar un dato por ID le asignamos el valor variante

	var nombre;
	nombre = prompt("");
	document.getElementById("elNombre").value = nombre;
	
}

