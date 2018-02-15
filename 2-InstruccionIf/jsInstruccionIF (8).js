function Mostrar()
{
//tomo la edad  
var edad 
var estado

edad = document.getElementById("edad").value; 
estado = document.getElementById("estadoCivil").value; 

if(edad >= 18 && estado == "Soltero")
{
    alert("Es mayor de edad y esta solo jajaja xd")
}
}//FIN DE LA FUNCIÓN