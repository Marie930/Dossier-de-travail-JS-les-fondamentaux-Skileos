/*OBJECTS*/
/*UN OBJET A DES PROPRIETES ET DES METHODES, les méthodes ce sont les fonctions£*/
/*synthaxe*/
//var object = {
//propertyName1: propertyValue1,/*propriété numéro1 avec la valeur de la propriété*/
//propertyName2: propertyValue2,/*propriété numéro2 avec la valeur de la propriété*/
//method1 : function()//
//{

//}
//}

//var dog = {
// name: "Maddie",
//color: "white",
//age: 4
//};//ceci est la déclaration d'un objet
//pour accéder à ces propriétés
//console.log(dog.age);//pour avoir l'âge du chien
//console.log(dog.name);//pour avoir le nom
//console.log(dog["name"]);//autre possibilité [le nom de la propriété] entre crochets
//voilà comment on fait une boucle sur les objets pour lister toutes les propriétés de l'objet
//var dog = {
//name: "Maddie",
//color: "white",
//age: 4
//};
//for(var property in dog)
//{
// console.log(dog.property);//ça ne fonctionnera pas car property est une string 
//}
//il faut synthaxer de la façon suivante

//for(var property in dog)
//{
//console.log(dog[property]);
//}
//La réponse console est Maddie white 4, il l'a fait en boucle...P1 P2 P3
//Il existe une autre façon de crééer un objet qui consiste tout simplement à utiliser le constructeur de la classe objet et ensuite donner chacune des valeurs
//var dog = new Object();
//dog.name = "Maddie";
//dog.color = "white";
//dog.age = 5;
//for (var property in dog) {
//console.log(dog[property]);
//}
//Maintenant essayons de crééer une méthode
var dog = new Object();
dog.name = "Maddie";
dog.color = "white";
dog.age = 5;
dog.aboie = function () { console.log("Wouaf Wouaf") };//se souvenir que les fonctions ne sont pas obligées de prendre de paramètres ni de renvoyer de valeur
//pour l'instant il ne se passe rien car nous avons uniquement déclarer la fonction
//si je veux faire aboyer mon chien, j'écris ce qui suit
dog.aboie();//les parenthèses = éxécute la fonction
//si c'était une fonction qui prenait des paramètres comme imprime le nb de Wouaf en fonction du paramètre number
dog.aboie = function (number) {
    while (number > 0) 
    { 
        console.log(number.toString() + "Wouaf");
        number--;//pour ne pas rentrer dans une boucle infinie-à chaque fois enlève un nombre
    };
};
dog.aboie(4);
