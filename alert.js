main = function() {

	$(".skeletons div").click(function() {
	
		$(this).find('.gif').toggle();
	    $(this).find('.png').toggle();
	
		myAudio = $(this).find("audio")[0];
		
		if(myAudio.paused){
			myAudio.play();
		} else {
			myAudio.pause();
		}
		
	});
	
	

};

$(document).ready(main);

