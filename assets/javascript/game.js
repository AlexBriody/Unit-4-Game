
$(document).ready(function() {

    var randomNumber = 0;
    var targetNumber = 0;
    var playerNumber = 0;
    var crystal1Number = 0;
    var crystal2Number = 0;
    var crystal3Number = 0;
    var crystal4Number = 0;
    var chosenCrystal1Number = false;
    var chosenCrystal2Number = false;
    var chosenCrystal3Number = false;
    var chosenCrystal4Number = false;
    var gameOver= false;
    var wins = 0;
    var losses = 0;
    
    $("#startButton").on("click", reset);

    $("#crystal1, #crystal2, #crystal3, #crystal4").on("click", function() {
        if (randomNumber === 0) {
        reset();
        }//in case player clicks a crystal to start the game
    });
    
    $("#crystal1").on("click", function() {
        if (chosenCrystal1Number) {
            return false;
        }//to prevent another random number to be assigned per game
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal1Number = randomNumber;
        //alert("crystal 1 = " + crystal1Number);
        chosenCrystal1Number = true;
    });

    $("#crystal2").on("click", function() {
        if (chosenCrystal2Number) {
            return false;
        }//to prevent another random number to be assigned per game
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal2Number = randomNumber;
        //alert("crystal 2 = " + crystal2Number);
        chosenCrystal2Number = true;
    });

    $("#crystal3").on("click", function() {
        if (chosenCrystal3Number) {
            return false;
        }//to prevent another random number to be assigned per game
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal3Number = randomNumber;
        //alert("crystal 3 = " + crystal3Number);
        chosenCrystal3Number = true;
    });

    $("#crystal4").on("click", function() {
        if (chosenCrystal4Number) {
            return false;
        }//to prevent another random number to be assigned per game
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal4Number = randomNumber;
        //alert("crystal 4 = " + crystal4Number);
        chosenCrystal4Number = true;
    });

    $("#crystal1").on("click", function() {
        if (gameOver) {//in case player clicks a crystal to start the game
            reset();
        } else
        if ((chosenCrystal1Number === true) && ( playerNumber < targetNumber)) {
            playerNumber += crystal1Number;
            $("#playerTotal").text(playerNumber);
            //alert("the sum is " + playerNumber);
        }
    });

    $("#crystal2").on("click", function() {
        if (gameOver) {//in case player clicks a crystal to start the game
            reset();
        } else 
        if ((chosenCrystal2Number === true) && ( playerNumber < targetNumber)) {
            playerNumber += crystal2Number;
            $("#playerTotal").text(playerNumber);
            //alert("the sum is " + playerNumber);
        }
    });

    $("#crystal3").on("click", function() {
        if (gameOver) {//in case player clicks a crystal to start the game
            reset();
        } else
        if ((chosenCrystal3Number === true) && ( playerNumber < targetNumber)) {
            playerNumber += crystal3Number;
            $("#playerTotal").text(playerNumber);
            //alert("the sum is " + playerNumber);
        }
    });

    $("#crystal4").on("click", function() {
        if (gameOver) {//in case player clicks a crystal to start the game
            reset();
        } else
        if ((chosenCrystal4Number === true) && ( playerNumber < targetNumber)) {
            playerNumber += crystal4Number;
            $("#playerTotal").text(playerNumber);
            //alert("the sum is " + playerNumber);
         } 
    });

    $("#crystal1, #crystal2, #crystal3, #crystal4").on("click", function() {
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
        crystal1Number = 0;
        crystal2Number = 0;
        crystal3Number = 0;
        crystal4Number = 0;
        chosenCrystal1Number = false;
        chosenCrystal2Number = false;
        chosenCrystal3Number = false;
        chosenCrystal4Number = false;
        gameOver = false;
        $("#number-to-guess").text(targetNumber);
        $("#playerTotal").text("");
        $("#messageToPlayer").text("Good luck!");
        $("#messageToRestart").text("");
    }

   
    










})// closing bracket for $(document).ready(function()


