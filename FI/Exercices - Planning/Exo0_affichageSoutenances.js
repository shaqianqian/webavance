function Planning (baliseMere, listeJours, largeurJour) {
    this.baliseMere=baliseMere;

    // c'est mal !
    this.construitColonnesJours = function () {
    }


}

Planning.prototype.construitColonnesJours = function () {
    //this.baliseMere
}

window.onload = function () {
    planning = new Planning (
        document.getElementById("Planning"),
        ["04","05","06","07"],
        2
    );
}


function Somme (a,b) {
    this.a=a;
    this.b=b;
}

Somme.prototype.effectuer = function () {
    return this.a+this.b;
}

var objet=new Somme (12,60);
objet.effectuer();