function computerChoice(){
    var randomChoice = Math.random();

    if (randomChoice < 0.33) {   
        randomChoice = "rock"
    } else if (randomChoice < 0.66) {
        randomChoice = "paper"
    } else {
        randomChoice ="scissors"
    }
    return randomChoice
}
///////////////////////////////////////////////////
function compare (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "You win!";
        } else {
            return "Computer wins!";
        };
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "You win!";
        } else {
        return "Computer wins!";
        };
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "Computer wins!";
        } else {
            return "You win!";
        };
    };
}; 
///////////////////////////////////////////////////
function main(){    
    $('.header img').click(function(event){
        var userChoice = event.target.id;
        var computer = computerChoice();
        $(".battlefield").empty();
        $("p").empty();
        $(".battlefield").append("<img src=" + userChoice +".png />");
        $(".battlefield").append('<img src="X.png" />');
        $(".battlefield").append("<img src=" + computer +".png />");
        $(".battlefield img").show('slow');
        $("p").text(compare(userChoice,computer))
    })
}
///////////////////////////////////////////////////
$(document).ready(function(){
    main();
})