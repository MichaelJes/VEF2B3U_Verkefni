$.ajax({
    'url': 'https://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        for(var i = 0; i < response.results.length; i++){
            var data = response.results;
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
            $('main').append('' +'<div class=" pure-u-1 pure-u-md-1-3 pure-u-sm-1-2 pure-u-lg-1-4 pure-u-xl-1-5 Window">' +
                        '<img class="Humas" src="' + data[i].imageSource + '">' +
                            '<h2><b>' + data[i].eventDateName + '</b></h2>' +
                            '<h4>' + data[i].eventHallName + '</h4>' +
                            '<small>' +"Dagsetning "+ Dagsetning+" <br> "+"Klukkan "+ Timi + '</small>' +'</div>');
        }
    }
})