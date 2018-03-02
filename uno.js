
function Mostrar()
{
//perimetro y superficie de un triangulo equilatero
//pedir por pront altura 

var altura;
var base; 
var superficie;
var perimetro;


altura = prompt("Introduzca la altura del triangulo");


base = document.getElementById("laBase").value; 


superficie= (base*altura)/2;

perimetro=base*3;

alert("la superficie del triangulo es: " + superficie + ". ");
alert("El periemtro del triangulo es: " + perimetro + ". ")














}
