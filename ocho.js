function Mostrar()
{
// inegrsasr un nombre, el nombre va as er de un animal, ingresar su peso > 0 y  puede ser un numero,
// temperatura del abitad donde vive -40 o +40
// sexo del animal
// informar : nombre del animal mas pesado
// nombre del animal cullo habitad es el mas frio
// cantidad de temperaturas pares e impares 
// cantidad de de temperatura positivas y negativas
// sexo del animal cullo habitad tiene como temperatura 0 

var nombreDelAnimal;
var peso;
var temperaturaDeHabitad;
var sexo;
var respuesta="si"



while(respuesta != "no" )
{
    nombreDelAnimal=prompt("Ingrese el nombre del animal");
    peso=prompt("Ingresar el peso de un animal");
    peso=parseInt(peso);

    if( isNaN (peso)|| peso == null)
    {
    alert("ingrese un numero");
    break;	
    }

    temperaturaDeHabitad=prompt("Ingrese la temperatura del habitad");
    sexo=prompt("Ingrese el sexo del animal");

    


}
}