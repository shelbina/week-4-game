//initialize game
$(document).ready(function(){

var wins=0;
    $('#yourWins').text(wins);
var loses=0;
    $('#yourLoses').text(loses);
var ranGem=0;
var yourGem=0;

//generate random number for pictures and create on click function to connect picture to random number
var num1 = Math.floor(Math.random() * 11 + 1);
    $("#red").on("click", function() {
    yourGem += num1;
    $("#yourGem").text(yourGem);
    console.log('ranGem: '+ ranGem +" yourGem"+yourGem);
    endGame();
    //
        });

var num2 = Math.floor(Math.random() * 11 + 1);
    $("#green").on("click", function() {
    yourGem+=num2;
    $("#yourGem").text(yourGem);
    endGame();
    //reset();
        });

var num3 = Math.floor(Math.random() * 11 + 1);
    $("#yellow").on("click", function() {
    yourGem+=num3;
    $("#yourGem").text(yourGem);
    endGame();
    //reset();
        });

var num4 = Math.floor(Math.random() * 11 + 1);
    $("#blue").on("click", function() {
    yourGem+=num4;
    $("#yourGem").text(yourGem);
    endGame();
    //reset();
        });



//generate random gem power
var randomNum = Math.floor(Math.random() * 101 + 19);
$("#ranGem").text(randomNum);

//game continues if yourgem is less than random
//function game(){
 //   if (yourGem < ranGem){
       // console.log('game is talking')
//};

//end game with lose if yourgem is more than random gem, with win if your gem is = to randomgem
function endGame(){
    if (yourGem==randomNum){
        wins++;
        $("#yourWins").text(wins);
        console.log('wins' +wins);
        reset();
    }
    if (yourGem > randomNum){
        loses++;
        $("#yourLoses").text(loses);
        console.log('Losses'+loses);
        reset();
    }
    };
//};


// reset the game
function reset(){
    randomNum = Math.floor(Math.random() * 101 + 19);
    $("#ranGem").text(randomNum);
	yourGem=0;	
	$("#yourGem").text(yourGem);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
};

});