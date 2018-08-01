//SteamID64 keys, to be grabbed from DOM input
var steamID;

//appID, to be generated via the player API call
var appID;

//variable to hold player being called
var player;

//Array to hold games from API
var gamesArray1 = [];
var gamesArray2 = [];

//First player call to API for game list
function playerOneAjax() {

  var queryURL = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=5EB85FE3C64B2FECF3B4CBE03147F65E&include_appinfo=1&steamid=${steamID}&format=json`;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.response.games)
      let games = response.response.games
      gamesArray1 = games.map(x => x)
      console.log(gamesArray1)
    });
}

//Second player call to API for game list
function playerTwoAjax() {

  var queryURL = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=5EB85FE3C64B2FECF3B4CBE03147F65E&include_appinfo=1&steamid=${steamID}&format=json`;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.response.games)
      let games = response.response.games
      gamesArray2 = games.map(x => x)
      console.log(gamesArray2)
      console.log("-------------------------------")
      appCompare(gamesArray1, gamesArray2)

    });
}

//Compares two account's gameid arrays and prints results
function appCompare(gamesArray1, gamesArray2){
var overlap = [];
  //  for (i=0; i<gamesArray1.length; i++){
  //    if (gamesArray1.appid === gamesArray2.appid){
  //       overlap.push(gamesArray1[i])
  //    }
  //  }
 
console.log(overlap)
}

//.map(x => x)
//Calls to API to pull the game name from the APPID provided by the JSON object
// function gameCall(overlap) {

//   var queryURLGame = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=5EB85FE3C64B2FECF3B4CBE03147F65E&appid=${overlap}&format=json`;

//   $.ajax({
//     url: queryURLGame,
//     method: "GET"
//   })
//     .then(function (response) {
//       console.log(response);
//       console.log(response.response.game.gameName)
//     });

// }

//Will collect appID and generate a game logo image link to be appended into the appropriate div
function iconCall(appID) {

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
    playerOneAjax();
  });

  //Right submit button functionality
  $('#p2Btn').on('click', function () {
    event.preventDefault();
    player = 2;
    steamID = $('#steamID2').val().trim();
    console.log(steamID);
    playerTwoAjax();
  });

});

// const arr1 = [
//   { appid: 10 },
//   { appid: 20 }
// ]

// const arr2 = [
//   { appid: 10 },
//   { appid: 100 },
//   { appid: 90 }
// ]

// const set = new Set(arr1.map(x => x.appid))
// const overlap = arr2.filter(x => set.has(x.appid))
// console.log(overlap)



