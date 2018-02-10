/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    // Crear una variable para el numero uno y dos
    // tomar el valor de las variables con un ID
    // trasformarlos a enteros con el parseInt
    // mostrarlos y sumarlos por Alert
    
    var numeroUno
    var numeroDos
    
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    alert(numeroUno + numeroDos);



}

