//LES CONSTRUCTEURS
var dog = new Object();
dog.name = "Maddie";
dog.color = "white";
dog.age = 5;
dog.aboie = function () { console.log("Wouaf Wouaf") };

dog.aboie = function (number) {
    while (number > 0) {
        console.log(number.toString() + "Wouaf");
        number--;//pour ne pas rentrer dans une boucle infinie-à chaque fois enlève un nombre
    };
};
dog.aboie(4);
//Admettons qu'on veuille créer un 2ème chien on peut créer un 2ème objet - on reprend les infos du dessus et on les renommes dog2.name, dog2.color etc...
//Mais il y a plus intelligent, nous allons utiliser les fonctions constructeur
//cette fonction constructeur on peut l'imaginer comme une usine
//on va lui donner certains paramètres elle va nous rendre un objet qui est déjà construit
//function Dog(name, color, age) { //1ère lettre de la fonction en majuscule
//  this.name = name;//quand je veux désigner une instance de chien le mot clé à utiliser c'est le This
    //le chien que je vais fabriquer son nom sera le nom que j'ai donné dans la fonction constructeur
//  this.color = color;
//  this.age = age;
//  this.aboie = function()
//     {
//    console.log("Wouaf");
//  };//ajout de la méthode
// }
//nous avons expliqué comment marche une fonction qui construit des chiens

var petitCaniche = new Dog("Choupette", "black", 4);
var grosPittbull = new Dog("Rex", "white", 2);
//console.log(petitCaniche);
//console.log(grosPittbull);
//petitCaniche.aboie();

//Si dans ma méthode j'avais écris juste Wouaf et le nom du chien
function Dog(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.aboie = function()
    {
    console.log("Wouaf " + this.name);
    };
}
petitCaniche.aboie();
grosPittbull.aboie();
