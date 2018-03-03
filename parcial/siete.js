function Mostrar()
{
    var notas;
    var sexo;
    var alumnos=0;
    var notasTotales=0;
    var promedio;
    var notaMasBaja;
    var varonesNotasMayorSeis=0;

    for(alumnos=0;alumnos < 10;alumnos++)
    {
        notas = prompt("Ingresa la nota del alumno nº" + alumnos);
        notas = parseInt(notas);
        notasTotales = notasTotales + notas;

        while(notas<0 || notas>10 || isNaN(notas))
        {
            notas = prompt("Ingrese la nota del alumno nº"+ alumnos +" (del 1 al 10 inclusive!)");
            notas = parseInt(notas);
        }//validacion nota

        sexo = prompt("Introduzca el sexo del alumno nº" + alumnos + " con f o m");

        while(sexo !="f" && sexo !="m")
        {
            sexo = prompt("Introduzca el sexo del alumno nº" + alumnos + " con f o m");
        }// validacion sexo

        if(alumnos == 0)
        {
            notaMasBaja = notas;
        }
        else
        {
            if(notas < notaMasBaja)
            {
                notaMasBaja = notas;
            }
        }//Nota mas baja

        if(sexo == "m" && notas>=6)
        {
            varonesNotasMayorSeis++;
        }
        
    }//For
    promedio = notasTotales/alumnos;

    alert("A)El promedio de las notas totales es: " + promedio + " B)La notas mas baja fue un: " + notaMasBaja + " C)La cantidad de varones que su nota fue mayor o igual a seis es: " + varonesNotasMayorSeis + ". ");
}//function 
