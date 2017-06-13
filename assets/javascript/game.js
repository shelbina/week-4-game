var wins=0;
var loses=0;



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