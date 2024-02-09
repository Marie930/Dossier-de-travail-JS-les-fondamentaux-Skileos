/*SYNTAXE ET VARIABLES - LES BASES DE JS NUMBERS & STRINGS*/
var nom = 'Marie';/*une valeur string peut être entre 2 double quote ou simple quote*/
var nomLength = nom.length;/*pour connaître la longueur du nom"*/
var x = 12;
/*var y = 25.63;*/
var xToString = x.toString();
console.log(nom);
console.log(xToString);
/*console.log(x);*/
/*console.log(y);
console.log(x+y);
console.log(x*y);*/
/*on peut également faire passer un nombre en string en utilisant la fonction toString.
Le résultat apparait alors en noir dans la console et non plus en bleu*/
/*on peut également faire des conversions, je ne le veux plus en string mais en nombre*/
var xString = '12';
var xNumber = parseInt(xString);/*il prend notre string et il va la convertir en Int-->Integer, c'est une sorte de nombre, des nombres entiers*/
/*console.log(x.toString());*/
/*console.log(nomLength);*/
console.log(xNumber);
console.log(xString);
var xString2 = '12.63';
var xNumber2 = parseFloat(xString2);
/*si on veut garder les décimales on utilise parseFloat*/
console.log(xNumber2);

var myString = 'Hello Marie';
/*si on veut connaître la place d'une sous-string (ici Marie) dans une variable alors on fait:*/
var position = myString.indexOf("Marie");
console.log(position);/*résultat 6 - on compte le 1er caractère à partir de 0 - */
/*autre fonction utilisée --> replace - ici remplace Marie par Laure*/
var myNewString = myString.replace("Marie","Laure");
console.log(myNewString);

/*autre fonction -->aditionner 2 string*/
var string3 = 'Hello';
var string4 = 'Marie';
var myNewString2 = string3 +" "+ string4;/*string3+espace+string4*/
console.log(myNewString2);
