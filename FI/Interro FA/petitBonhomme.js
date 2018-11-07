function PetitBonhomme ( {
                             touches = {gauche : 37, haut : 38, droite : 39, bas : 40},
                             taille = {largeur : 50, hauteur : 70},
                             urlImage = "petitBonhomme.jpg",
                             x = 200,
                             y = 200
                        } )
{
    ImageDeplacable.call (this, taille, urlImage, x, y);
    this.fixerEvenementTouches (touches);
}

PetitBonhomme.prototype = new ImageDeplacable();

/*
PetitBonhomme.prototype.creerBalise = function (urlImage, x, y, largeur, hauteur) {
    ImageDeplacable.prototype.creerBalise.call (this,urlImage, x, y, largeur, hauteur);
}
*/

PetitBonhomme.prototype.fixerEvenementTouches = function (touches) {
    var bonhomme=this;
    document.body.addEventListener("keydown",
        function (event) {
            switch (event.keyCode) {
                case touches.gauche :
                    bonhomme.x-=10;
                    break;
                case touches.droite :
                    bonhomme.x+=10;
                    break;
                case touches.haut :
                    bonhomme.y-=10;
                    break;
                case touches.bas :
                    bonhomme.y+=10;
                    break;
            }
        });
}

PetitBonhomme.prototype.__defineGetter__ ("x",function () {
    return parseInt(this.balise.style.left);
});

PetitBonhomme.prototype.__defineSetter__ ("x",function (x) {
    this.balise.style.left=x+"px";
});

PetitBonhomme.prototype.__defineGetter__ ("y",function () {
    return parseInt(this.balise.style.top);
});

PetitBonhomme.prototype.__defineSetter__ ("y",function (y) {
    this.balise.style.top=y+"px";
});

