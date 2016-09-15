$(function() {
  var API_KEY = "5ede9a21-a9b5-48d4-83c1-b17aa201ac1e";
  var sum1 = "aviator"
  var sum2 = "proudlycanadian"
  var sum3 = "kazumar"
  var sum4 = "firzen"
  var sum5 = "sparkofchaos"
  $.ajax({
    url: 'https://na.api.pvp.net/api/lol/NA/v1.4/summoner/by-name/'+ sum1 + ',' + sum2+ ',' + sum3+ ',' + sum4+ ',' + sum5 + '?api_key=' + API_KEY,
    type: 'GET',
    dataType: 'json',
    data: {},
    success: function (json) {
      var sum1id = json[sum1].id;
      var sum2id = json[sum2].id;
      var sum3id = json[sum3].id;
      var sum4id = json[sum4].id;
      var sum5id = json[sum5].id;
      var obj1 = json[sum1].profileIconId;
      var obj2 = json[sum2].profileIconId;
      var obj3 = json[sum3].profileIconId;
      var obj4 = json[sum4].profileIconId;
      var obj5 = json[sum5].profileIconId;
      $('#sum1icon').html('<img src="http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/'+ obj1 +'.png"><p></p>');
      $('#sum2icon').html('<img src="http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/'+ obj2 +'.png"><p></p>');
      $('#sum3icon').html('<img src="http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/'+ obj3 +'.png"><p></p>');
      $('#sum4icon').html('<img src="http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/'+ obj4 +'.png"><p></p>');
      $('#sum5icon').html('<img src="http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/'+ obj5 +'.png"><p></p>');


      $('#name1').html(sum1);
      $('#name2').html(sum2);
      $('#name3').html(sum3);
      $('#name4').html(sum4);
      $('#name5').html(sum5);
      $.ajax({
        url: 'https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/'+sum1id+','+sum2id+','+sum3id+','+sum4id+','+sum5id+'/entry?api_key=' + API_KEY,
        type: 'GET',
        dataType: 'json',
        data: {},
        success: function (json) {
          var tier1 = json[sum1id][0].tier;
          var tier2 = json[sum2id][0].tier;
          var tier3 = json[sum3id][0].tier;
          var tier4 = json[sum4id][0].tier;
          var tier5 = json[sum5id][0].tier;
          var div1 = json[sum1id][0].entries[0].division;
          var div2 = json[sum2id][0].entries[0].division;
          var div3 = json[sum3id][0].entries[0].division;
          var div4 = json[sum4id][0].entries[0].division;
          var div5 = json[sum5id][0].entries[0].division;
          $('#sum1icon p').html(tier1+ ' ' +div1+'<img src="img/'+tier1.toLowerCase()+'.png">')
          $('#sum2icon p').html(tier2+ ' ' +div2+'<img src="img/'+tier2.toLowerCase()+'.png">')
          $('#sum3icon p').html(tier3+ ' ' +div3+'<img src="img/'+tier3.toLowerCase()+'.png">')
          $('#sum4icon p').html(tier4+ ' ' +div4+'<img src="img/'+tier4.toLowerCase()+'.png">')
          $('#sum5icon p').html(tier5+ ' ' +div5+'<img src="img/'+tier5.toLowerCase()+'.png">')

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log('error')
        }
      });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('error')
    }
  });
})


// 580645
// 42870422