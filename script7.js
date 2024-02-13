/*LES SCOPE (ET PLUS PRÉCISEMMENT LES SCOPES DES VARIABLES*/
/*function multiply(number1, number2, number3) {
    var resultMultiply = number1 * number2 * number3;
    return resultMultiply;
}
/*!!!les variables créée dans le corps de ma fonction sont LOCALES !!! ELLES SONT CONNUES JUSTE DANS LE CORPS DE MA FONCTION*/
/*nous venons de déclarer une fonction mais comment l'utiliser?*/
/*éxécution de la fonction*/
/*var a = 5;
var b = 6;
var result = multiply(a, b, a);
console.log(result);

/*Pour que la variable dans la fonction soit globale il faut l'écrire comme suit, mais c'est largement déconseillé*/

function multiply(number1, number2, number3) {
    resultMultiply = number1 * number2 * number3;
    return resultMultiply;
}
var a = 5;
var b = 6;
var result = multiply(a, b, a);
console.log(resultMultiply);
