// function Somme (a,b) {
//     this.a=a;
//     this.b=b;
//     this.c= this.effectuer()
//
// }
// Somme.prototype.effectuer = function () {
//     Somme.prototype.c=this.a+this.b;
//
//     return this.a+this.b;
//
// }
//
//
// var objet=new Somme (12,60)
//
//
// console.info(objet.c);


//console.info(isNaN("3"));

a=[1,2,3];
a.forEach(function (element,index,array) {
    array[index]=element*2;
    
});
console.log(a);

function F1() {}
F1.prototype.x=3;
a=new F1();
F1.prototype={y:2};
console.log(a.constructor);


