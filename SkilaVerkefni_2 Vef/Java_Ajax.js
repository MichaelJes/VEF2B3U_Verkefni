$.ajax({
    'url': 'https://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        
        var data = 0;
        $('main').append('' +'<div class=" pure-u-1 ">' + 
            '<input type="text" placeholder="filter by search" id="filter-search">');
        for(var i = 0; i < response.results.length; i++){
            data = response.results;
            var date = moment(data[i].dateOfShow).format('DD.MMMM YYYY , h:mm');
            values = date.split(',');
            var Dagsetning = values[0];
            var Timi = values[1];
            var randomValue = Math.random();
            $(".Humas").error(function () {
                if (randomValue > Math.random())
                {
                    $(this).unbind("error").attr("src", "http://www.tskoli.is/media/starfsmenn/medium/GunnarThorunnarson.jpg");
                }
                else
                {
                    $(this).unbind("error").attr("src", "Pictures/Kennari.jpg");
                };
            });
            $('main').append('' +'<div id="'+i+'" class=" pure-u-1 pure-u-md-1-3 pure-u-sm-1-2 pure-u-lg-1-4 pure-u-xl-1-5 Window">' +
                        '<img  class="Humas" alt="'+data[i].eventDateName+'" src="' + data[i].imageSource + '">' +
                        '<div >'+
                            '<h2><b>' + data[i].eventDateName + '</b></h2>' +
                            '<h4>' + data[i].eventHallName + '</h4>' +
                            '<small>' +"Dagsetning "+ Dagsetning+" <br> "+"Klukkan "+ Timi + '</small>'+'</div>' +'</div>');
        }
               (function() {                           // Lives in an IIFE
              var $images = $('img');           // Get the images
              var $search = $('#filter-search');      // Get the input element
              var cache = [];                         // Create an array called cache

                  $images.each(function() {                 // For each image
                    cache.push({                          // Add an object to the cache array
                      element: this,                      // This image
                      text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
                    });
                  });
             
                function filter() {   
                        var idtimer = 0;                  // Declare filter() function
                        var querys = this.value.trim().toLowerCase();  // Get the query
                        cache.forEach(function(img) {         // For each entry in cache pass image 
                          var index = 0;                      // Set index to 0
                          if (querys) {                        // If there is some query text
                            index = img.text.indexOf(querys);  // Find if query text is in there
                          }
                          if (index === -1) {$( ""+"#"+""+idtimer+"" ).hide()};
                          if (index > -1) {$( ""+"#"+""+idtimer+"" ).show()};
                          idtimer++;

                        });
                      }

                      if ('oninput' in $search[0]) {          // If browser supports input event
                        $search.on('input', filter);          // Use input event to call filter()
                      } else {                                // Otherwise
                        $search.on('keyup', filter);          // Use keyup event to call filter()
                      }              

                    }());
       
    }
})