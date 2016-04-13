// AJAX sýnidæmi frá MDN
// https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

/* Hvað er AJAX?
   Ajax requests are triggered by JavaScript code; your code sends a request to a URL, and when it receives a response, 
   a callback function can be triggered to handle the response. Because the request is asynchronous, 
   the rest of your code continues to execute while the request is being processed, so it's imperative that a callback be used to handle the response.

  XMLHttpRequest er notað til þess að tala við server-side scriptur. Það sendir
  og tekur á móti upplýsingum í mörgum mismunandi stöðlum, t.d. JSON, XML, HTML
  og TXT. Það sem að heillar við ajax er asynchronous eðli þess. Það þýðir það
  að allt þetta er hægt án þess að þurfa að refresha vefsíðuna. t.d. er hægt að
  uppfæra aðeins part af vefsíðunni tengdt við ákveðna eventa.
  

  Þegar ajax request er send þá er ferlið eftirfarandi:

  1)	Að taka instance af XMLHttpRequest objectinu

  2) 	Næst þarftu að ákveða hvað þú vilt gera þegar þú færð server response. Það dugar
  		að segja hvaða function þú vilt að keyri. Oft notað anonymous function.
  		
  3) 	Næst sendiru requestið. Fyrst þarftu að kalla í .open og setja í hvaða method þú vilt nota
 		urlið og hvort þú vilt asynchronous eða synchronous. 

  4)	eftir það kemur send(); Inn í send
  		á svo að koma öll data sem þú vilt senda með. ekkert þá er bara sett null.
*/


// Búum til object af XMLHttpRequest class
var httpRequest = new XMLHttpRequest();

// HTTP request object þarf að vita hvaða JS fall á að meðhöndla response frá miðlara
// Hægt er að nota onload (nýrra) eða onreadystatechange

	/* Dæmi 1 með onreadystatechange
	 *
	 * Hægt er að nota "assign a reference" á fallið  
	 * ath. hér er engin svigi eða param. gefinn, ekki verið að kalla á það.
	 *
	 * 		httpRequest.onreadystatechange = nameOfTheFunction;
	*/

// Dæmi 2. með onreadystatechange, önnur leið er að nota nanfnlaust fall (anonymous function)
httpRequest.onreadystatechange = function(){
// process the server response

    // athugum hver staðan er á request
    // readyState values; 0 (uninitialized), 1 (loading), 2 (loaded), 3 (interactive), 4 (complete)
    // user agent provides readyState (server provides status)
    if (httpRequest.readyState === 4) {
 		// Server response has been reveived and is ok to continue processing it 
    	
    	// athugum þá núna status code (er t.d. error í server side kóðanum)
    	// stauts codes; 2xx Sucessful, 3xx Redirection, 4xx Client error, 5xx Server Error
    	if (httpRequest.status === 200) {
   			 // perfect! Hér kemur JS kóði sem á að vinna með data frá server.
   			 //  two options to access that data:
   			 //  	a) httpRequest.reseponseText  - skilar streng (texta)
   			 //  	b) httpRequest.responseXML    - skiar  XMLDocument object sem hægt er að nota með JS DOM föll
			
		} else {
   				 // there was a problem with the request,
    			 // for example the response may contain a 404 (Not Found)
    			 // or 500 (Internal Server Error) response code
		}

	} else {
    // still not ready
	}
};

/* Make the request með open() og send()
 * param. 1 er HTTP request method
 * param. 2 er URL á skrá/síðu sem sér um response (server).
 * param. 3 asynchronous, JS stoppar ekki á meðan beðið er eftir svari frá miðlara.
*/
httpRequest.open('GET', 'http://www.example.org/some.file', true);

// param. getur verið hvaða data eða query sem er ef notað er POST 
httpRequest.send(null);





// Dæmi með að nota onload

	 httpRequest.onload = function(){
	 	// status 200 if true then request is successful
		if (httpRequest.status === 200){
		 // process the server response
		} else{
		 // problem with the request
		}
	 }


// Annað AJAX dæmi með JSON, virkar frá IE9+, sjá http://youmightnotneedjquery.com/
  var request = new XMLHttpRequest();
  request.open('GET', '/my/url', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
    } else {
      // We reached our target server, but it returned an error

    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();



/*
    Hver er munurinn á onreadystatechange og onload?
    onload er nýrri útgáfa af onreadyStatechange ( kom með xhr 2 ) og er í raun
    onreadyStatechange + readyState === 4 blandað saman
 */


// jQuery AJAX útfærslur
// http://learn.jquery.com/ajax/
// 
// jQuery provides AJAX for both a full-featured $.ajax() method, 
// and simple convenience methods such as; $.get(), $.getScript(), $.getJSON(), $.post(), and $().load()