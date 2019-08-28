
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
    
    

$("#startButton").on("click", function() {
    targetNumber = Math.floor((Math.random() * 101) + 19);
    $("#number-to-guess").text(targetNumber);
});

    
    $("#crystal1").on("click", function() {
        if (chosenCrystal1Number) {
            return false;
        }
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal1Number = randomNumber;
        alert("crystal 1 = " + crystal1Number);
        chosenCrystal1Number = true;
    });

    $("#crystal2").on("click", function() {
        if (chosenCrystal2Number) {
            return false;
        }
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal2Number = randomNumber;
        alert("crystal 2 = " + crystal2Number);
        chosenCrystal2Number = true;
    });

    $("#crystal3").on("click", function() {
        if (chosenCrystal3Number) {
            return false;
        }
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal3Number = randomNumber;
        alert("crystal 3 = " + crystal3Number);
        chosenCrystal3Number = true;
    });

    $("#crystal4").on("click", function() {
        if (chosenCrystal4Number) {
            return false;
        }
        randomNumber = Math.floor((Math.random() * 12) + 1);
        crystal4Number = randomNumber;
        alert("crystal 4 = " + crystal4Number);
        chosenCrystal4Number = true;
    });

    $("#crystal1").on("click", function() {
        if ((chosenCrystal1Number === true) && ( playerNumber < targetNumber)) {
            alert("player's number is still less than the target number")
            playerNumber += crystal1Number;
            alert("the sum is " + playerNumber);
        }
    });

    $("#crystal2").on("click", function() {
        if ((chosenCrystal2Number === true) && ( playerNumber < targetNumber)) {
            alert("player's number is still less than the target number")
            playerNumber += crystal2Number;
            alert("the sum is " + playerNumber);
        }
    });

    $("#crystal3").on("click", function() {
        if ((chosenCrystal3Number === true) && ( playerNumber < targetNumber)) {
            alert("player's number is still less than the target number")
            playerNumber += crystal3Number;
            alert("the sum is " + playerNumber);
        }
    });

    $("#crystal4").on("click", function() {
        if ((chosenCrystal4Number === true) && ( playerNumber < targetNumber)) {
            alert("player's number is still less than the target number")
            playerNumber += crystal4Number;
            alert("the sum is " + playerNumber);
         } 
    });

    $("#crystal1, #crystal2, #crystal3, #crystal4").on("click", function() {
        if (playerNumber > targetNumber) {
            alert("player's number is greater than the target number")
            alert("Game Over You Lose");
         } else if (playerNumber === targetNumber) {
            alert("player's number is equal to the target number")
            alert("Game Over You Win! The playerNumber is " + playerNumber);
         }
    });















})// closing bracket for $(document).ready(function()


