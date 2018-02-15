function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota
	nota = Math.floor(Math.random()* (11 - 1)+ 1)

	if(nota >=9  )
	{
		alert( "Te sacaste un: " + nota + " exelente!")
	}
	else if(nota >=4 )
	{
		alert("Te sacaste un: " + nota + " bien...")
	}
	else
	{
		alert("Te sacaste un: " + nota + " JAJAJAJA MONO IDIOTA")
	}

}//FIN DE LA FUNCIÓN