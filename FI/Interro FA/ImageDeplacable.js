function ImageDeplacable (
                              taille = {largeur: 30, hauteur: 30},
                              urlImage = "forme.jpg",
                              x = 200, y = 20
                          ) {
    if (arguments.length==0)
        return;
    this.creerBalise(urlImage, x, y, taille.largeur, taille.hauteur);
}

ImageDeplacable.prototype.creerBalise = function (urlImage, x, y, largeur, hauteur) {
    this.balise = document.createElement("img");
    this.balise.src=urlImage;
    var style=this.balise.style;
    style.position="absolute";
    style.left=x+"px";
    style.top=y+"px";
    style.width=largeur+"px";
    style.height=hauteur+"px";
    document.body.appendChild(this.balise);
}
