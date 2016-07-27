function summonerLookUp() {

    var API_KEY = "5ede9a21-a9b5-48d4-83c1-b17aa201ac1e";
    var SUMMONER_NAME = $('#sumID').val().toLowerCase();

    $.ajax({
        url: 'https://na.api.pvp.net/api/lol/NA/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function (json) {
            var obj = json[SUMMONER_NAME];
            var SUMMONER_ID = obj.id;
            $.ajax({
                url: 'https://na.api.pvp.net/api/lol/NA/v1.3/game/by-summoner/' + SUMMONER_ID + '/recent' + '?api_key=' + API_KEY,
                type: 'GET',
                dataType: 'json',
                data: {

                },
                success: function (json) {
                    console.log(json)
                    var recent = json.games 
                    var wins = 0;
                    var loss = 0;
                    for  (i = 0; i < recent.length; i++) {
                        var matchs = recent[i].stats.win;
                        if (matchs) {   
                            wins += 1;
                        } else {
                            loss += 1;
                        }
                    }
                    if (wins >= 6) {
                        $('#message').html('<strong>'+SUMMONER_NAME+'</strong>' + ' is not a feeder');
                        $('#message2').html('has <strong>Won</strong> '+wins+' out of 10 past games');
                    } else {
                        $('#message').html('<strong>'+SUMMONER_NAME+'</strong>' + ' is a feeder');
                        $('#message2').html('has <strong>Lost</strong> '+loss+' out of past 10 games');
                    }
                }
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('#message').html('Invalid summoner ID');
        }
    });
};
$(function() {
    $('#subbutt').on('click', function() {
        console.log('hi')
    });
});


