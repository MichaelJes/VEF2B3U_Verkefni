"use strict";
function Pizza(verd, staerd, alegg) {
    this.verd = verd;
    this.staerd = staerd;
    this.alegg = alegg;
}
 Pizzas = new Array();
 Pizza[0] = new Pizza( 2100, "M","Ananas");
 Pizza[1] = new Pizza( 1789, "S","Oregano");
 Pizza[2] = new Pizza( 1789, "S","Oregano");
 Pizza[3] = new Pizza( 1789, "S","Oregano");
 Pizza[4] = new Pizza( 1789, "S","Oregano");
 Pizza[5] = new Pizza( 1789, "S","Oregano");
 Pizza[6] = new Pizza( 1789, "S","Oregano");
 Pizza[7] = new Pizza( 1789, "S","Oregano");
 var ims = document.getElementById("Pizza")
for (var i = 0; i <= Pizzas.length; i++) {
	ims[i].innerHTML+="<h1>Pizza"+i+"</h1>"
	for (var key in Pizza[0]) { 
    ims[i].innerHTML += Pizza[i][key];
}
};
