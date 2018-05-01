$(document).ready(function () {
	$(".drama-poster li").live("hover", function () {
		$(".current").removeClass("current");
		$(this).addClass("current") 
	});
 
});

$(function () {
	var a = $(".drama-poster ul>li");
	a.mouseover(function () {
		a.removeClass("current");
		$(this).addClass("current") 
	});
	$(".drama-slide li.next a").click(function () {
		var b = $(".drama-poster ul>li:first"), c = $(".drama-poster ul .current").index();
		$(".drama-poster ul>li:last").after(b);
		$(".drama-poster ul li").removeClass("current");
		$(".drama-poster ul").find("li").eq(c).addClass("current") 
	});
	$(".drama-slide li.prev a").click(function () {
		var c = $(".drama-poster ul>li:last"), b = $(".drama-poster ul .current").index();
		$(".drama-poster ul>li:first").before(c);
		$(".drama-poster ul li").removeClass("current");
		$(".drama-poster ul").find("li").eq(b).addClass("current") 
	}) 
});
