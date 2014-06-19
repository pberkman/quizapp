$(document).ready(function() {
	$("#action").on ("click", function() {
		$("#intro").hide();
		$("#play").fadeIn("slow");
	})
	$("#showTime").on("click", function() {
		$("#movieScreen").show();
		$("#rules").hide();
		$("#q4Wrapper").show();
		$("#ticketContainer").show();
		$("#ticket1").addClass("questionIndicator");
  })
  $(".answers>li").mouseenter(function() {
    $(this).toggleClass("answerClick");
  });
 /* $("#wrongAnswer").show();
   });*/
});

/*---Questions Objects---*/

function questionOne() {
  synop="A group of kids set out on an adventure in search of pirate treasure that could save their homes from foreclosure.";
  movie=["Stand By Me", "The Goonies", "Peter Pan"];
  ca="The Goonies";
}
function questionTwo () {
  synop="A rich high school student tries to boost a new pupil's popularity, but reckons without affairs of the heart getting in the way.";
  movie=["Mean Girls", "10 Things I Hate About You", "Clueless"];
  ca="Clueless";
}
function questionThree () {
  synop="After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, N.A.S.A. recruits a misfit team of deep core drillers to save the planet.";
  movie=["Armageddon", "Deep Impact", "The Day After Tomorrow"];
  ca="Armageddon";
}
function questionFour () {
  synop="A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.";
  movie=["American Psycho", "Wolf of Wallstreet", "Wallstreet"];
  ca="American Psycho";
}
function questionFive () {
  synop="The aliens are coming and their goal is to invade and destroy. Fighting superior technology, Man's best weapon is the will to survive.";
  movie=["Aliens", "Independence Day", "War of the Worlds"];
  ca="Independence Day";
}