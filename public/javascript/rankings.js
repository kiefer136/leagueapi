$(function() {
  var API_KEY = "5ede9a21-a9b5-48d4-83c1-b17aa201ac1e";
  var sum1 = "aviator";
  var sum2 = "proudlycanadian";
  $.ajax({
    url: 'https://na.api.pvp.net/api/lol/NA/v1.4/summoner/by-name/'+ sum1 + ',' + sum2 + '?api_key=' + API_KEY,
    type: 'GET',
    dataType: 'json',
    data: {},
    success: function (json) {
      var obj1 = json[sum1].profileIconId;
      var obj2 = json[sum2].profileIconId;
      $('#sum1icon').html('<img src="http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/'+ obj1 +'.png"><p></p>');
      $('#sum2icon').html('<img src="http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/'+ obj2 +'.png"><p></p>');
      $('#name1').html(sum1);
      $('#name2').html(sum2);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('error')
    }
  });
  $.ajax({
    url: 'https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/'+ '580645,42870422'+ '/entry?api_key=' + API_KEY,
    type: 'GET',
    dataType: 'json',
    data: {},
    success: function (json) {
      var obj1 = json['580645'][0].tier;
      var obj2 = json['42870422'][0].tier;
      var div1 = json['580645'][0].entries[0].division;
      var div2 = json['42870422'][0].entries[0].division;
      $('#sum1 p').html(obj1+ ' ' +div1)
      $('#sum2 p').html(obj2+ ' ' +div2)
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('error')
    }
  });
})


// 580645
// 42870422