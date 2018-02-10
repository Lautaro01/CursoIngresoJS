function Mostrar()
{
    var largo
    var ancho
    var perimetro

    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;

    largo=parseInt(largo);
    ancho=parseInt(ancho);

    perimetro = 2*largo + 2*ancho;

    alert("Se necesitan " + perimetro*3 +" metros de alambre para colocar tres hilos de alambrado en su perimetro." )


}
