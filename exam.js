function Somme (a,b) {
    this.a=a;
    this.b=b;
    this.c= this.effectuer()

}
Somme.prototype.effectuer = function () {
    Somme.prototype.c=this.a+this.b;

    return this.a+this.b;

}


var objet=new Somme (12,60)


console.info(objet.c);
