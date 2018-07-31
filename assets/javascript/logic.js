//SteamID64 keys, to be grabbed from DOM input
var steamID;

//appID, to be generated via the player API call
var appID;

//variable to hold player being called
var player;

//Array to hold games from API
var gamesArray = [];
// var games;
//First player call to API for game list
function playerAjax() {

  var queryURL = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=5EB85FE3C64B2FECF3B4CBE03147F65E&steamid=${steamID}&format=json`;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.response.games)
      let games = response.response.games
      gamesArray = games.map(x => x.appid)
      console.log(gamesArray)
      nameGames(gamesArray);


    });
}

function nameGames(gamesArray){
  for (i=0; i<gamesArray.length; i++){
    let namedGame = gameCall(gamesArray[i]);
    console.log(namedGame);
  }
}

//Calls to API to pull the game name from the APPID provided by the JSON object
function gameCall() {

  var queryURLGame = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=5EB85FE3C64B2FECF3B4CBE03147F65E&appid=${appID}&format=json`;

  $.ajax({
    url: queryURLGame,
    method: "GET"
  })
    .then(function (response) {
      console.log(reponse.response.game.gameName);
      console.log(response);
      return (response.response.game.gameName)
    });

}

//Will collect appID and generate a game logo image link to be appended into the appropriate div
function iconCall() {

  $('#infocurrent1').html(`<img src="https://steamcdn-a.opskins.media/steam/apps/${appID}/header.jpg?t=1">`)

}

//doc.ready to allow for DOM input
$(document).ready(function () {

  //Left submit button functionality
  $('#p1Btn').on('click', function () {
    event.preventDefault();
    player = 1;
    steamID = $('#steamID1').val().trim();
    console.log(steamID);
    playerAjax();
  });

  //Right submit button functionality
  $('#p2Btn').on('click', function () {
    event.preventDefault();
    player = 2;
    steamID = $('#steamID2').val().trim();
    console.log(steamID);
    playerAjax();
  });

});


