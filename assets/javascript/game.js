var wins=0;
var loses=0;



    $(document).ready(function() {
      //When random button is clicked...
     $('#random-button').on("click", function() {

      ///...we generate  a random number
         var random = Math.floor(Math.random() * 1000) + 1;

      ///...and then dumb the random nubmer into our random-number div.
         $("#random-number").html(random);
      });
      // ...

    });

function startGame() {

    numGuesses = 11;

    chosenWord = mysteryWord[Math.floor(Math.random() * mysteryWord.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;


    console.log(mysteryWord);
    blanksAndSuccesses = [];
    wrongGuesses = [];


    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    console.log(blanksAndSuccesses);


    document.getElementById("guessesLeft").innerHTML = numGuesses;