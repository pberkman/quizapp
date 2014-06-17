$(document).ready(function() {
	$("#action").on ("click", function() {
		$("#intro").hide();
		$("#play").show();
	})
	$("#showTime").on("click", function() {
		$("#rules").hide();
		$("#q1Wrapper").show();
		$("#ticket1").addClass("questionIndicator");
	})
})