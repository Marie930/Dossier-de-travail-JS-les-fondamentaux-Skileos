/*LES BASES DE JS : BOOLEANS & COMPARAISONS*/
/*var myBoolean = true;*/
/*le boolean ne peut recevoir que 2 valeurs true ou false*/

/*OPERATEUR DE COMPARAISON*/
var x = 5;
var y = 12;
/*var myBoolean = (x===5);/*est-ce que x est = à 5?*/
/*var myBoolean = (x!==5);/*est-ce que x est différent de 5?*/

/*var myBoolean = (x==="5");/*est-ce que x est strictement = à 5 string?*/
/*var myBoolean = (x>12);/*est-ce que x est supérieur à 12?*/
/*var myBoolean = (x>=12);*/
var myBoolean = (x>=5);

/*COMMENT LIER PLUSIEURS QUESTIONS DANS UNE MÊME QUESTION?*/

/*var myBoolean = (x>3 && y<15);/*est-ce que x est supérieur à 3 ET--> && y inférieur à 15?*/
/*var myBoolean = (x>3 && y<10);/*il faut que les 2 questions répondent vrai pour que le résultat soit true. Si une des parties est fausse le tout sera faut*/
var myBoolean = (x>3 || y<10);/*il suffit qu'une des parties soit vrai pour que tout le résultat devienne vrai.*/
console.log(myBoolean);

/*tableau recap*/
console.log("------------------");
console.log(true && true);/*true*/
console.log(true && false);/*false/
console.log(false && true);/*false*/
console.log(false && false);/*false*/
console.log("------------------");
console.log(true || true);/*true*/
console.log(true || false);/*true*/
console.log(false || true);/*true*/
console.log(false || false);/*false*/
console.log("------------------");
console.log(!true);/*false*/
console.log(!false);/*true*/