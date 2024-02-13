/*LES BOUCLES "LOOPS"- les boucles servent à éxécuter un certain code plusieurs fois, tant qu'une condition est réalisée on exécute le code*/
/*1er type de boucles-->WHILE*/
/*var number = 0

/*while (number < 3) {
    console.log(number);/*attention à ne pas s'arrêter là car cela sera une boucle infinie
    number++;
    /*affiche dans la console, 0,1,2--> soit 0, puis 0+1=1, puis 1+1=2 et stop puisque 2+1=3
}*/



/*2ème type de boucles-->DO WHILE - Il fait en 1er le DO - et ensuite il exécute le While et si oui, tu reviens et tu refais le DO*/
/*
do {
    console.log(number);
    number++;
}
while (number < 3);

/*revenons à WHILE*/

/*while (number>0 && number<3)
{
    console.log(number);
    number++;
}
/*on constate que rien ne s'affiche dans la console - normal il number n'est pas supérieur à 0)*/

/*par contre si on reprend le DO WHILE le résultat sera différent*/
/*do {
    console.log(number);
    number++;

} while (number > 0 && number < 3);*/

/*Autre boucle très utilisée c'est le FOR*/

/*synthaxe

for(Partie1 c'est la partie initialisation, Partie 2 c'est la partie condition que je veux vérifier à chaque fois avant d'exécuter le code, une fois que j'ai vérifié la condition je fais 2 choses : le code à exécuter et la Partie 3 ça permet de mettre à jour des choses )
{
    code à exécuter
}*/

for (var number = 0; number < 5; number++)
{
    console.log(number);
}
