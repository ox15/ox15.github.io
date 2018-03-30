$(document).ready(function(){
	$(".normal").hide();
	$(".normal2").hide();
	$(".normal3").hide();
	$(".normal4").hide();
	$(".normal5").hide();
	
    $(".closeup").click(function(){
        $(".normal").fadeIn(1000);
    });
	
	$(".closeup2").click(function(){
        $(".normal2").fadeIn(1000);
	});
	
	$(".closeup3").click(function(){
        $(".normal3").fadeIn(1000);
	});
	$(".closeup4").click(function(){
        $(".normal4").fadeIn(1000);
	});
	$(".closeup5").click(function(){
        $(".normal5").fadeIn(1000);
	});
});