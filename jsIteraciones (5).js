function Mostrar()
{

var sexo = prompt("ingrese f ó m .");


 // while ( (sexo != "f" && sexo != "m") && sexo != null)
while( sexo != "f" && sexo != "m")
{
    if(sexo == null)
    {
        break
    }
    alert("ingrese nuevamentesu sexo");

    sexo = prompt("ingrese f ó m .");

}

if( sexo == "f")
{
    document.getElementById('Sexo').value = "femenino"

}
else if ( sexo == "m")
{
    document.getElementById('Sexo').value = "masculino"
}
else 
{

}


}//FIN DE LA FUNCIÓN