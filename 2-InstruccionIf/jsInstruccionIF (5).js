function Mostrar()
{
//tomo la edad  
var edad; 

edad = document.getElementById("edad").value; 

if(edad < 13 || edad > 17 )
{
   alert("Usted NO es un adolescente")
}
else 
{
    alert("usted SI es un adolescente")
}
}//FIN DE LA FUNCIÓN