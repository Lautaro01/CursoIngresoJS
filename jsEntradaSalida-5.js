/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
    //Crear una variable para nombre y edad
    //tomar el valor de estas por ID
    //Mostrar los valores de las variables por alert y concatenar con un comentario
    
    var nombre;
    var edad;

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;
    
    alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

