function Mostrar()
{

var diaDeLaSemana;
diaDeLaSemana = prompt("Que dia de la semana es? (Sin MAYUSCULAS)");

switch(diaDeLaSemana)
{
    case "sabado":
    case "domingo":
        alert("Es fin de semana.");
        break;
    default:
        alert("A trabajar !!!");
        break;
}



}
