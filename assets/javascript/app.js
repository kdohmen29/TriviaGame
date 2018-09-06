
var data = [
    {
        question: "The Fantastic Four have their headquarters in what building?",
        options: ["Stark Tower", "Fantastic Headquarters", "Baxter Building", "Xavier Institute"],
        correctAnswer: "Baxter Building"
    }, {
        question: "Peter Parker works as a photographer for:",
        options: ["The Daily Planet", "The Daily Bugle", "The New York Times", "The Rolling Stone"],
        correctAnswer: "The Daily Bugle"
    }, {

        question: "Thor has two war goats to pull his chariot. They are named:",
        options: ["Balder and Hermod", "Thunder and Lightning", "Ask and Embla", "Toothgrinder and Toothgnasher"],
        correctAnswer: "Toothgrinder and Toothgnasher"
    }, {
        question: "Captain America was frozen in which war?",
        options: ["World War I", "World War II", "Cold War", "American Civil War"],
        correctAnswer: "World War II"
    }, {
        question: "Iceman is a member of which team?",
        options: ["The X-Men", "The Fantastic Four", "The Invaders", "The Liberators"],
        correctAnswer: "The X-Men"
    }
]

var rightAnswers = 0;
var wrongAnswers = 0;





$("#display-questions").hide();
$("#display-options").hide();
$("#right-answers").hide();
$("#wrong-answers").hide();


$("#start").on("click", function (startGameTimer) {
    $("#start").hide()
    $("#display-questions").show();
    $("#display-options").show();

    startTimer();


});

var gameTimer;
//Timer
function startTimer() {
    var time = 15;
    $("#time").text(time);
    gameTimer = setInterval(function () {
        time--;
        $("#time").text(time);
        if (time === 0) {
            wrongAnswers++;
            $("#wrong-answers").text("Wrong Answers: " + wrongAnswers);
            clearInterval(gameTimer);
            displayNextQuestion();
            setTimeout(function () {
                alert("Times Up");
                index++;
                clearInterval(gameTimer);
                startTimer();
                displayNextQuestion();
            }, 10);


        }


    }, 1000);
}



var index = 0;
function displayNextQuestion() {
    if (index === data.length) {
        console.log("game over");
        $("#display-questions").html("Here is your Score: ");
        $("#display-options").hide();
        clearInterval(gameTimer);
        $("#time").hide();
        $("#right-answers").show();
        $("#wrong-answers").show();

        return

    }
    $("#display-questions").empty();
    $("#display-options").empty();

    var question = data[index].question;
    for (let i = 0; i < data[index].options.length; i++) {
        let newButton = $("<button class= 'btn btn-danger m-2'>")
        let eachOption = data[index].options[i];
        newButton.text(eachOption);
        newButton.attr("info", eachOption);
        newButton.addClass("option-button");
        $("#display-options").append(newButton);


    }

    $("#display-questions").append(question);

};



displayNextQuestion();


$("#display-options").on("click", ".option-button", function () {
    var chosenAnswer = $(this).attr("info");
    console.log(chosenAnswer)
    console.log(data[index].correctAnswer)
    if (chosenAnswer === data[index].correctAnswer) {
        // alert("that is correct");
        $("#correct-answer").text("That was Correct!");
        rightAnswers++;
        $("#right-answers").text("Correct Answers: 0" + rightAnswers);
        $("#correct-answer").show();
        $("#wrong-answer").hide();

    } else {
        // alert("That was wrong");
        $("#wrong-answer").text("That was wrong! correct answer was " + data[index].correctAnswer);
        wrongAnswers++;
        $("#wrong-answers").text("Wrong Answers: 0" + wrongAnswers);
        $("#correct-answer").hide();
        $("#wrong-answer").show();

    };
    index++;
    clearInterval(gameTimer);
    startTimer();

    displayNextQuestion();

});
