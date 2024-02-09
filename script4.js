/*LES CONDITIONS IF & ELSE*/
/*la syntaxe*/
/*if(condition1)
{
    console.log("exécute ce code");
}
else if(condition2)
{
    console.log("la condition 1 n'est pas vraie mais la 2 l'est")
}
else/*si condition 1 est faux et que if else est faux alors tu executes ce code*/
/*{
    console.log("alors exécute ce code là!")
}*/

/*EXEMPLE CONCRET*/

var speed = 49;

if (speed < 80) {
    if (speed < 50) { console.log("accélère un petit peu") }
    else {
        console.log("tu roules à la bonne vitesse");
    }
}
else if (speed < 100) {
    console.log("il faut que tu ralentisses un petit peu")
}
else/*si condition 1 est faux et que if else est faux alors tu executes ce code*/ {
    console.log("tu roules beaucoup trop vite!")
}
/*Le Switch*/
/*La synthaxe
switch ("variable ou expression etc..")
{
    case 1: break;
    case 2: break;
    ...
    default:
}*/

var favoriteColor = "yellow";

/*switch (favoriteColor) {
    case "blue":
        console.log("waouh le bleu c'est trop beau!");
        break;
    case "red":
        console.log("j'aimerais bien une voiture rouge");
        break;
    default:
        console.log("alors là je ne sais pas quoi te répondre")
}
/*on veut réunir plusieurs cas, les réunir dans une même condition du switch - il n'y a pas de break entre le yellow et le blue"*/
switch (favoriteColor) {
    case "yellow":
    case "blue":
        console.log("waouh le bleu et le jaune c'est trop beau!");
        break;
    case "red":
        console.log("j'aimerais bien une voiture rouge");
        break;
    default:
        console.log("alors là je ne sais pas quoi te répondre")
}
