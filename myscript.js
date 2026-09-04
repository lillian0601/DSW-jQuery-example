$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("img").addClass("border");
	});
	$("#p1").click(function(){
		$(".disappear").hide();
	});
	$("h1").hover(function() {
		$(this).css("color", "DarkMagenta");
	});
});
