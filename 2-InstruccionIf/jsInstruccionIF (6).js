function Mostrar()
{
//tomo la edad  

var edad 

edad = document.getElementById("edad").value; 

if(edad > 18)
{
    alert("usted es mayor de edad")
}
else
{
    if(edad >= 0 && < 13)
    {
        alert("Usted es un niño, no deberia estar aqui!")
    }
    else
    {
        alert("Usted es un adolescente!")
    }
}
}//FIN DE LA FUNCIÓN