function Mostrar()
{
    var largo
    var ancho 
    var perimetro

    largo = document.getElementById("alrgo").value; 
    ancho = document.getElementById("ancho").value;

    perimetro = largo * 2 + ancho * 2;

    alert("Se necesitan: " + perimetro*3 + " metros de alambre para colocar 3 hilos de alambrado en su perimetro!.");
    


}
