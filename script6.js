/*LES FONCTIONS*/
/*Synthaxe*/
/*
function name(parameter1, parameter2, etc...)
{
    Code à exécuter
    return XPathResult;
}
*/

function multiply(number1, number2)
{
    return number1*number2;
}
/*nous venons de déclarer une fonction mais comment l'utiliser?*/
/*éxécution de la fonction*/
var a = 5;
var b = 6;
var result = multiply(a,b);
console.log(result);

/*Il est très important de séparer les 2 - La déclaration de la fonction on déclare comment elle fonctionne et l'éxécution de notre fonction)*/