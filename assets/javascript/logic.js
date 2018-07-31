var steamID1 = '76561197967234047';
var steamID2 = '';

function playerOneAjax(){

var queryURL = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=5EB85FE3C64B2FECF3B4CBE03147F65E&steamid="+steamID1+"&format=json";
        
    $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            console.log(response);
          });

        }

function playerTwoAjax(){

var queryURL = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=5EB85FE3C64B2FECF3B4CBE03147F65E&steamid="+steamID2+"&format=json";
        
    $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            console.log(response);
          });

        }

playerOneAjax();