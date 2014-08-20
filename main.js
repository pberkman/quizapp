$(document).ready(function() {

//---Question Objects
var myQuestions=[{
  synop:"A group of kids set out on an adventure in search of pirate treasure that could save their homes from foreclosure.",
  movie:["Stand By Me", "The Goonies", "Peter Pan"],
  ca:1,
},{
  synop:"A rich high school student tries to boost a new pupil's popularity, but reckons without affairs of the heart getting in the way.",
  movie:["Mean Girls", "10 Things I Hate About You", "Clueless"],
  ca:2,
},{
  synop:"After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, N.A.S.A. recruits a misfit team of deep core drillers to save the planet.",
  movie:["Armageddon", "Deep Impact", "The Day After Tomorrow"],
  ca:0,
},{
  synop:"A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.",
  movie:["American Psycho", "Wolf of Wallstreet", "Wallstreet"],
  ca:0,
},{
  synop:"The aliens are coming and their goal is to invade and destroy. Fighting superior technology, Man's best weapon is the will to survive.",
  movie:["Aliens", "Independence Day", "War of the Worlds"],
  ca:1,
}];

//Global variable counters
var currentQuestion=0;
var questionNum=1;
var score=0;
var questionsAnswered=[];

//function to ask each question
var askQuestion=function(question) {
  $("#synopsis").text(question.synop);
  $("#movie1Label").text(question.movie[0]);
  $("#movie2Label").text(question.movie[1]);
  $("#movie3Label").text(question.movie[2]);
};

//function to go through questions
var play = function() {
  askQuestion(myQuestions[currentQuestion]); //asks next question
  $("#qNum").text(questionNum); //increases question number in header
      
      var answer=$(".answers:checked").val();
      var isCorrect=answer==myQuestions[currentQuestion].ca;

      questionsAnswered.push(isCorrect);
            
      if (isCorrect) {
        $('#ticketUL .ticketList').eq(currentQuestion).removeClass('questionIndicator');
        $("#rightAnswer").show();
        score++;
      } else {
        $("#wrongAnswer").show();
      }
              
      $("input:radio").removeAttr("checked"); //removes radio selection for next question
      currentQuestion++;
      questionNum++;
};



//Button Actions

    //Click on the submit button to decide whether the answer is correct/incorrect and then go on to next question.
    $("#submit").click(function() {
      if ($('input[name=answers]:checked').length===0) {
              alert("Please select a movie title to continue.");
      } else {
        play();
      }
    });
     
    //Initial button click to start the game from the home page. Once clicked will show directions
      $("#action").on("click", function() {
        $("#intro").hide();
        $("#play").fadeIn("slow");
      });

    //Click show time to start the game from the directions screen
      $("#showTime").on("click", function() {
        $("#rules").hide();
        $(".qwrapper").show();
        askQuestion(myQuestions[currentQuestion]);
        $("#qNum").text(questionNum);
      });

    //To exit out of the Right Answer/Wrong Answer pop up window and continue on to the rest of the game
      $(".continueButton").click(function() {
          $("#rightAnswer").hide();
          $("#wrongAnswer").hide();
          if (currentQuestion<5) {  //checks whether game is finised
            askQuestion(myQuestions[currentQuestion]); //asks next question
            $("#qNum").text(questionNum); //increases question number in header
          } else {
            $(".endScore").text(score);
            $("#gameOver").show();
          }
      });

    //Re-take the quiz
    $("#retake").click(function() {
      $("#gameOver").hide();
      $(".ticketList").addClass("questionIndicator");
        currentQuestion=0;
        questionNum=1;
        score=0;
        questionsAnswered=[];
      askQuestion(myQuestions[currentQuestion]);
      $("#qNum").text(questionNum);
    });



});
