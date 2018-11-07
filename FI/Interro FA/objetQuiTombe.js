function ObjetQuiTombe ( {
                             taille = {largeur: 30, hauteur: 30},
                             urlImage = "missile.jpg",
                             x = 200, debut, fin
                         } )
{
    ImageDeplacable.call (this, taille, urlImage, x, debut);
    this.fin=fin;
}

ObjetQuiTombe.prototype = new ImageDeplacable();

ObjetQuiTombe.prototype.tombe = function () {
    if (this.y<this.fin) {
        this.y++;
        setTimeout(() => {
            this.tombe();
        }, 5);
    }
    else
        document.body.removeChild(this.balise);
}
ObjetQuiTombe.prototype.__defineGetter__ ("y",function () {
    return parseInt(this.balise.style.top);
});

ObjetQuiTombe.prototype.__defineSetter__ ("y",function (y) {
    this.balise.style.top=y+"px";
});