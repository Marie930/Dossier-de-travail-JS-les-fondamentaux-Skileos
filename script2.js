/*LES BASES DE JS : OPERATORS*/
/*1er opérateur--> = soit tu prends le chiffre 12 et tu le mets dans x. ça permet de mettre une valeur dans une variable*/
var x = 12;
var y = 5;
var result = x + y;
console.log(result);
/*on peut faire pareil en changeant d'opérateur + * - / */
/*il y aussi le modulo --> c'est le reste d'une division */
var result2 = x%y;
console.log(result2);
/*autre chose qu'on peut faire ce sont les ++ et les --*/
x++;
console.log(x);/*le résultat sera 13 x++ça veut dire 12+1 - xx-- = 11 */
var x = 14;
x +=1;/*c'est un raccourci d'écriture*/
console.log(x);
/* le + n'a pas la même valeur sur les strings*/
var string5 = "Hello";
var string6 = "Breton";
console.log(string5+" "+string6);