
$(document).ready(function() {

    var randomNumber = 0;
    var targetNumber = 0;
    var playerNumber = "";
    var crystal2Number = 0;
    var crystal3Number = 0;
    var crystal4Number = 0;
    var crystal5Number = 0;
    var chosenCrystal2Number = false;
    var chosenCrystal3Number = false;
    var chosenCrystal4Number = false;
    var chosenCrystal5Number = false;
    var gameOver= false;
    var wins = 0;
    var losses = 0;
    
    $("#startButton").on("click", reset);

    $("#crystal2").on("click", function() {
        if (chosenCrystal2Number || gameOver) {
            return false;
        }//to prevent another random number to be assigned per game
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal2Number = randomNumber;
        //alert("crystal 2 = " + crystal2Number);
        chosenCrystal2Number = true;
    });

    $("#crystal3").on("click", function() {
        if (chosenCrystal3Number || gameOver) {
            return false;
        }//to prevent another random number to be assigned per game
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal3Number = randomNumber;
        //alert("crystal 3 = " + crystal3Number);
        chosenCrystal3Number = true;
    });

    $("#crystal4").on("click", function() {
        if (chosenCrystal4Number || gameOver) {
            return false;
        }//to prevent another random number to be assigned per game
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal4Number = randomNumber;
        //alert("crystal 4 = " + crystal4Number);
        chosenCrystal4Number = true;
    });

    $("#crystal5").on("click", function() {
        if (chosenCrystal5Number || gameOver) {
            return false;
        }//to prevent another random number to be assigned per game
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal5Number = randomNumber;
        //alert("crystal 5 = " + crystal1Number);
        chosenCrystal5Number = true;
    });

    $("#crystal2").on("click", function() {
        if ((chosenCrystal2Number === true) && ( playerNumber < targetNumber)) {
            playerNumber += crystal2Number;
            $("#playerTotal").text(playerNumber);
            //alert("the sum is " + playerNumber);
        }
    });

    $("#crystal3").on("click", function() {
        if ((chosenCrystal3Number === true) && ( playerNumber < targetNumber)) {
            playerNumber += crystal3Number;
            $("#playerTotal").text(playerNumber);
            //alert("the sum is " + playerNumber);
        }
    });

    $("#crystal4").on("click", function() {
        if ((chosenCrystal4Number === true) && ( playerNumber < targetNumber)) {
            playerNumber += crystal4Number;
            $("#playerTotal").text(playerNumber);
            //alert("the sum is " + playerNumber);
         } 
    });

    $("#crystal5").on("click", function() {
        if ((chosenCrystal5Number === true) && ( playerNumber < targetNumber)) {
            playerNumber += crystal5Number;
            $("#playerTotal").text(playerNumber);
            //alert("the sum is " + playerNumber);
        }
    });

    $("#crystal2, #crystal3, #crystal4, #crystal5").on("click", function() {
        if (gameOver) {
            return false;
        };
        if (playerNumber > targetNumber) {
            $("#playerTotal").text(playerNumber);
            //alert("The player's number is greater than the target number " + targetNumber);
            $("#messageToPlayer").text("Sorry! Your total is greater than the target number. You lose!");
            $("#messageToRestart").text("Click 'Start Game' to match another number.");
            losses += 1;
            $("#losses").text(losses);
            gameOver = true;
         } else if (playerNumber === targetNumber) {
            $("#playerTotal").text(playerNumber);
            //alert("player's number is equal to the target number " + targetNumber);
            $("#messageToPlayer").text("Congratulations! Your total is equal to the target Number. You win!");
            $("#messageToRestart").text("Click 'Start Game' to match another number.");
            wins += 1;
            $("#wins").text(wins);
            gameOver = true;
         }
    });

    function reset() {
        targetNumber = Math.floor((Math.random() * 101) + 19);
        playerNumber = 0;
        crystal2Number = 0;
        crystal3Number = 0;
        crystal4Number = 0;
        crystal5Number = 0;
        chosenCrystal2Number = false;
        chosenCrystal3Number = false;
        chosenCrystal4Number = false;
        chosenCrystal5Number = false;
        gameOver = false;
        $("#number-to-guess").text(targetNumber);
        $("#playerTotal").text("");
        $("#messageToPlayer").text("Click on a crystal to add a specific amount to your total score. Win the game by matching your score to the");
        $("#messageToRestart").text(" random target number. Lose the game when your total score goes above the random number. Good luck!");
    }

   
    










})// closing bracket for $(document).ready(function()


