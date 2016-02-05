"use strict";
function Pizza(verd, staerd, alegg) {
    this.verd = verd;
    this.staerd = staerd;
    this.alegg = alegg;
}
 
 var Pizza1 = new Pizza( 2100, "M","Ananas");
 var Pizza2 = new Pizza( 2677, "L","Oregano");
 var Pizza3 = new Pizza( 2100, "M","Oregano");
 var Pizza4 = new Pizza( 1789, "S","Oregano");
 var Pizza5 = new Pizza( 1789, "S","Oregano");
 var Pizza6 = new Pizza( 2677, "L","Oregano");
 var Pizza7 = new Pizza( 2100, "M","Oregano");
 var Pizza8 = new Pizza( 1789, "S","Oregano");
 var PizzaCollection = [Pizza1, Pizza2, Pizza3, Pizza4, Pizza5, Pizza6, Pizza7, Pizza8];
 var imsPizza = document.getElementById("Pizza");
    var counter = 1;
 for (var x in PizzaCollection) { 

 	var PizzaDiv = document.createElement("div");
 	PizzaDiv.innerHTML += "<div class=\"PizzaNafn\">"+"<h2>Bragð góð Pizza númer"+counter+"</h2>"+"</div>";
	
	PizzaDiv.className="Pizza";
	PizzaDiv.innerHTML += "<div class=\"PizzaPrice\">" + PizzaCollection[x].verd + "</div>";
	PizzaDiv.innerHTML += "<div class=\"PizzaStaerd\">" + PizzaCollection[x].staerd + "</div>";
	PizzaDiv.innerHTML += "<div class=\"PizzaAlegg\">" + PizzaCollection[x].alegg + "</div>";
	
	imsPizza.appendChild(PizzaDiv);
	counter++; 
 };
