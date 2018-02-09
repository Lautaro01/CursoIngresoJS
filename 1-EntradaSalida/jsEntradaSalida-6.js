/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numerou;
    var numerod;
    var resultado;

    numerou = document.getElementById("numeroUno").value; 
    numerod = document.getElementById("numeroDos").value;

    numerou = parseInt(numerou);
    numerod = parseInt(numerod); 

    
    resultado = numerou + numerod;

    alert("El resulado de su suma es: " + resultado);



}

