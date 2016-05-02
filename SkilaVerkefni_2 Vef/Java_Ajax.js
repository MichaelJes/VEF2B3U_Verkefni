$.ajax({
    'url': 'https://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        
        var data = 0;
        $('main').append('' +'<div id="search"class=" pure-u-1 ">' + 
            '<input type="text" placeholder="filter by search" id="filter-search">');
        $('main').append('' +'<div id="Buttons" class=" pure-u-1 ">');
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
            $('main').append('' +'<div data-tags="'+data[i].eventHallName+'" id="'+i+'" class=" pure-u-1 pure-u-md-1-3 pure-u-sm-1-2 pure-u-lg-1-4 pure-u-xl-1-5 Window">' +
                        '<img  class="Humas" alt="'+data[i].eventDateName+'" src="' + data[i].imageSource + '">' +
                        '<div >'+
                            '<h2><b>' + data[i].eventDateName + '</b></h2>' +
                            '<h4>' + data[i].eventHallName + '</h4>' +
                            '<small>' +"Dagsetning "+ Dagsetning+" <br> "+"Klukkan "+ Timi + '</small>'+'</div>' +'</div>');
        }
               (function() {
              var $images = $('img');           
              var $search = $('#filter-search');      
              var cache = [];                         

                  $images.each(function() {                 
                    cache.push({                          
                      element: this,                      
                      text: this.alt.trim().toLowerCase() 
                    });
                  });
             
                function filter() {   
                        var idtimer = 0;                  
                        var querys = this.value.trim().toLowerCase();  
                        cache.forEach(function(img) {          
                          var index = 0;                      
                          if (querys) {                        
                            index = img.text.indexOf(querys);  // Find if query text is in there
                          }
                          if (index === -1) {$( ""+"#"+""+idtimer+"" ).hide()};
                          if (index > -1) {$( ""+"#"+""+idtimer+"" ).show()};
                          idtimer++;

                        });
                      }

                      if ('oninput' in $search[0]) {          
                        $search.on('input', filter);          
                      } else {                                
                        $search.on('keyup', filter);          
                      }              

                    }());
                        (function() {
                        var $evento = $('.Window');                  
                        var $buttons = $('#Buttons');
                        var tagged = {};
                        $evento.each(function() {                         
                          var img = this;                               
                          var tags = $(this).data('tags');                                             
                        if (tags) {                                   
                            tags.split().forEach(function(tagName) { 
                              if (tagged[tagName] == null) {            
                                tagged[tagName] = [];                   
                              }
                              tagged[tagName].push(img);                
                            });
                          }               
                        });
                            $('<button/>', {                                 
                          text: 'Show All',                              
                          class: 'active',
                          click: function() {                            
                            $(this)                                      
                              .addClass('active')                        
                              .siblings()                                
                              .removeClass('active');                    
                            $evento.show();                                
                          }
                        }).appendTo($buttons);                           

                        $.each(tagged, function(tagName) {               
                          $('<button/>', {                               
                            text: tagName + ' (' + tagged[tagName].length + ')', 
                            click: function() {                          
                              $(this)                                    
                                .addClass('active')                      
                                .siblings()                              
                                .removeClass('active');                  
                              $evento                                      
                                .hide()                                  
                                .filter(tagged[tagName])                 
                                .show();                                 
                            }
                          }).appendTo($buttons);                         
                        });

                      }());
                                                   
                          }
})