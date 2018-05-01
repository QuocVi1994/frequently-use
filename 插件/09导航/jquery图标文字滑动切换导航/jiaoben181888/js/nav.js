(function($) {
	$(function(){
		$('.nav li a').hover(function(){
			$('.navwz',this).stop().fadeIn(200);
			$('.navwz h1',this).stop().animate({'top':'0'},400);
			$('.navwz h2',this).stop().animate({'top':'0'},400);
		},function(){
			$('.navwz',this).stop().fadeOut(400);
			$('.navwz h1',this).stop().animate({'top':'-43px'},400);
			$('.navwz h2',this).stop().animate({'top':'43px'},400);
		})
		qfzy();
	})
})(jQuery);

function qfzy(){

	if(jQuery(window).width()>1003){
		var nav = jQuery(window).width();
	}else{
		var nav = 1003;
	}
	var nav_single = nav/7;
	jQuery('.nav').width(nav);
	jQuery('.nav li').width(nav_single);
}

jQuery(window).resize(function(){
	if (typeof indexSlides != 'undefined' && indexSlides.reformat) 
	indexSlides.reformat();
	qfzy();
});