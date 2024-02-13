/*UNE AUTRE VARIABLE : LES ARRAYS (TABLEAUX)-DANS UNE VARIABLE ON STOCKE PLUSIEURS VALEURS*/
/*La synthaxe
var name = [valeur1, valeur2, valeur3]*/
var fruits = ["pomme", "banane", "orange", "citrons", "kiwi"];
/*console.log(fruits.length);/*pour connaître la taille du array
console.log(fruits[0]);/*-->comment faire pour accéder à un élément du array? La réponse dans la console "pomme" - l'index commence toujours à 0*/


/*for (var i = 0; i < fruits.length; i++) { console.log(fruits[i]); }*/

/*les arrays viennent avec pas mal de petites fonctions*/
/*on veut ajouter un élément à cet array*/

/*fruits.push("kiwi");
console.log(fruits);
/*on veut enlever la dernière valeur de l'array*/
/*fruits.pop();
console.log(fruits);
/*Slice prend 2 arguments : un index de début et un index de fin - il retourne le sous-array c'est à dire ce qu'il y entre l'index de début et l'index de fin*/
var agrumes = fruits.slice(2, 4);
console.log(agrumes);
/*Slice fonctionne aussi avec un argument - ça enlève tout ce qu'il y a avant l'argument*/
var agrumes = fruits.slice(2);
console.log(agrumes);
/*un array peut aussi contenir des strings, numbers, boolean*/

var myArray = ["pommes", 15, true];
console.log(myArray);

/*on peut faire un array qui contient un autre array*/
var myArray1 = [[0,1],[5,7],[12,18]];
console.log(myArray1);

/*comment faire pour imprimer la place du number 7?*/
console.log(myArray1[2][1]);