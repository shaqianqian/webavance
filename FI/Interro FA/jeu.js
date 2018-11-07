jeu = {
    x : 10,
    y : 10,
    largeur : 400,
    hauteur : 300,
    espaceEntreRampe : 30,
    positionCanons : [],
    demarrer () {
        this.creerCadre();
        this.creerRampeMissile();
    },
    creerCadre () {
        this.cadre = document.createElement("div");
        var style=this.cadre.style;
        style.position="absolute";
        style.left=this.x+"px";
        style.top=this.y+"px";
        style.width=(this.x+this.largeur)+"px";
        style.height=(this.y+this.hauteur)+"px";
        style.borderColor="black";
        style.borderWidth="2px";
        style.borderStyle="solid";
        document.body.appendChild(this.cadre);
    },
    creerRampeMissile () {
        for (let dx=this.x+12 ; dx < this.x+this.largeur ; dx+=this.espaceEntreRampe ) {
            new Canon(dx,this.y+4,this.y+this.hauteur);
        }
    }
}

class Canon  {
    constructor (x,y,fin) {
        this.x = x;
        this.y = y;
        this.fin=fin;
        this.imageCanon = new ImageDeplacable({largeur: 22, hauteur: 47}, "canon.jpg", x, y);
        this.positionMissile = {x: x, y: y + 47};
        this.demarrer();
    }
    demarrer () {
        let nbSecondes= Math.floor(Math.random() * Math.floor(6))
        setTimeout(
            () => {
                let missile=new ObjetQuiTombe(
                    {
                    x:this.positionMissile.x,
                    debut:this.positionMissile.y,
                    fin:this.fin}
                );
                missile.tombe();
                this.demarrer();
            },
            nbSecondes*1000
        )
    }
}