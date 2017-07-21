$(document).ready(function(){
	$(window).scroll(function(){
		$("#topoFlutuante").stop().animate($(this).scrollTop()>=157?{top:0}:{top:"-175px"});

		if ($(this).scrollTop()>=157){
			$("#top-menu").addClass("flutuante");
		}
		else {
			$("#top-menu").removeClass("flutuante");
		}
	});
});