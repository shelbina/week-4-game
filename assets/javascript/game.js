//initialize game
$(document).ready(function(){

var wins=0;
	$('#yourWins').text(wins);
var loses=0;
	$('#yourLoses').text(loses);
var ranGem=0;
var yourGem=0;




//generate random gem power
var randomNum = Math.floor(Math.random() * 101 + 19);
$("#ranGem").text(randomNum);

//generate random number for pictures and create on click function to connect picture to random number
var num1 = Math.floor(Math.random() * 11 + 1);
	$("#red").on("click", function() {
	yourGem+=num1;
	$("#yourGem").text(yourGem);
	endGame();
	    });

var num2 = Math.floor(Math.random() * 11 + 1);
	$("#green").on("click", function() {
	yourGem+=num2;
	$("#yourGem").text(yourGem);
	endGame();
	    });

var num3 = Math.floor(Math.random() * 11 + 1);
	$("#yellow").on("click", function() {
	yourGem+=num3;
	$("#yourGem").text(yourGem);
	endGame();
	    });

var num4 = Math.floor(Math.random() * 11 + 1);
	$("#blue").on("click", function() {
	yourGem+=num4;
	$("#yourGem").text(yourGem);
	endGame();
	    });

//create win lose to end game
function endGame(){
	if (yourGem==ranGem){
		wins++;
		$("#yourWins").text(wins);
		reset();
	}
	else if (yourGem > ranGem){
		loses++;
		$("#yourLoses").text(loses);
		reset();
	};
};


// reset the game
function reset(){

	randomNum = Math.floor(Math.random() * 101 + 19);

	num1 = Math.floor(Math.random() * 11 + 1);
	num2 = Math.floor(Math.random() * 11 + 1);
	num3 = Math.floor(Math.random() * 11 + 1);
	num4 = Math.floor(Math.random() * 11 + 1);
};

});