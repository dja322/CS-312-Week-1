
//generates random number from 1 - 6
function generateRandom()
{
      return Math.floor(Math.random() * 6 + 1);
}

window.onload = function()
{
  //checks if page is reloading
  var reloading = sessionStorage.getItem("reloading");

  //if page is reloading then run roll dice
  if (reloading)
  {
      //calls RollDice and set dice
      RollDice();
  }
  else
  {
      //sets page status
      sessionStorage.setItem("reloading", "true");
  }

}

//activate on refresh
function RollDice()
{
      //gets random value between 1 and 6
      var dice1 = generateRandom();
      var dice2 = generateRandom();

      //sets images of player 1 dice roll
      var player1Img = document.getElementsByClassName("img1")[0];
      player1Img.src = "images/dice" + dice1 + ".png";

      //sets images of player 2 dice roll
      var player2Img = document.getElementsByClassName("img2")[0];
      player2Img.src = "images/dice" + dice2 + ".png";

      //calls function to set win screen
      SetWinScreen(dice1, dice2);

      return null;
}

//sets victory screen for players when dice is rolled
function SetWinScreen(dice1, dice2)
{
      //finds label using ID
      var VictoryLabel = document.getElementById("VictoryLabel");

      //Checks who wins and set label accordingly
      if (dice1 > dice2)
      {
        VictoryLabel.innerHTML = "🚩Player 1 Wins!";
      }
      else if (dice1 < dice2)
      {
        VictoryLabel.innerHTML = "Player 2 Wins!🚩";
      }
      else
      {
        VictoryLabel.innerHTML = "Draw!";
      }
}
