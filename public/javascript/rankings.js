function summerlook() {
  var API_KEY = "5ede9a21-a9b5-48d4-83c1-b17aa201ac1e";
  var name = prompt("enter summoner name")
  $.ajax({
    url: 'https://na.api.pvp.net/api/lol/NA/v1.4/summoner/by-name/' + name + '?api_key=' + API_KEY,
    type: 'GET',
    dataType: 'json',
    data: {},
    success: function (json) {
      console.log(json)
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('error')
    }
  });
};