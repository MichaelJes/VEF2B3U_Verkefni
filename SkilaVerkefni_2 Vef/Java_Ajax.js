$.ajax({
    'url': 'https://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        for(var i = 0; i < response.results.length; i++){
            var data = response.results;
            var date = data[i].dateOfShow;
            values=date.split('T');
            var Dagsetning=values[0];
            var Timi=values[1];
            $('.main').append('' +
                '<div class=" pure-u-1 pure-u-md-1-3 pure-u-sm-1-2 pure-u-lg-1-4 pure-u-xl-1-5 Window">' +
                    '<div class="thumbnail">' +
                        '<img class="eventimage" src="' + data[i].imageSource + '">' +
                        '<div class="caption">' +
                            '<h2 class="ellipsis"><b>' + data[i].eventDateName + '</b></h2>' +
                            '<h4>' + data[i].eventHallName + '</h4>' +
                            '<small>' +"Dagsetning "+ Dagsetning+" <br> "+"Klukkan "+ Timi + '</small>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>');
        }
    }
})