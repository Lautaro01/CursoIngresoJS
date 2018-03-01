function Mostrar()
{
var numero = prompt("Ingrese un numero");
var cantidadNumerosPares = 0;

var numerosPares
for( i = 1; i < numero ; i++ )
{
    if(i%2==0 && i != 0)
    {
         numerosPares++;
        
    }
}

alert(numerosPares)

}//FIN DE LA FUNCIÓN