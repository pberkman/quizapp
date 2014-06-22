$(document).ready(function() {





/*---Questions Objects---*/



var myQuestions=[{
  synop:"A group of kids set out on an adventure in search of pirate treasure that could save their homes from foreclosure.",
  movie:["Stand By Me", "The Goonies", "Peter Pan"],
  ca:1
},{
  synop:"A rich high school student tries to boost a new pupil's popularity, but reckons without affairs of the heart getting in the way.",
  movie:["Mean Girls", "10 Things I Hate About You", "Clueless"],
  ca:2
},{
  synop:"After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, N.A.S.A. recruits a misfit team of deep core drillers to save the planet.",
  movie:["Armageddon", "Deep Impact", "The Day After Tomorrow"],
  ca:0
},{
  synop:"A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.",
  movie:["American Psycho", "Wolf of Wallstreet", "Wallstreet"],
  ca:0
},{
  synop:"The aliens are coming and their goal is to invade and destroy. Fighting superior technology, Man's best weapon is the will to survive.",
  movie:["Aliens", "Independence Day", "War of the Worlds"],
  ca:1
}]

var currentQuestion=0;
var questionNum=1;
var score=0;
var questionsAnswered=[];

var askQuestion=function(question) {
  $("#synopsis").text(question.synop);
  $("#movie1").text(question.movie[0]);
  $("#movie2").text(question.movie[1]);
  $("#movie3").text(question.movie[2]);
};

$("#submit").click(function() {
  var answer=$(".answers:checked").val();
  var isCorrect=answer==myQuestions[currentQuestion].ca;

  questionsAnswered.push(isCorrect);

  if(isCorrect) {
    $("#rightAnswer").show();
    score++;
  } else {
    $("#wrongAnswer").show();
  }

 $(".continueButton").click(function() {
   $("#rightAnswer").hide();
   $("#wrongAnswer").hide();
 });
    $(".answers:checked").val("");
    currentQuestion++;
    questionNum++;
    $("#qNum").text(questionNum);
    askQuestion(myQuestions[currentQuestion]);

});

  $("#action").on ("click", function() {
    $("#intro").hide();
    $("#play").fadeIn("slow");
  })
  $("#showTime").on("click", function() {
    $("#rules").hide();
    $("#q1Wrapper").show();
    askQuestion(myQuestions[currentQuestion]);
    $("#qNum").text(questionNum);
  });

});