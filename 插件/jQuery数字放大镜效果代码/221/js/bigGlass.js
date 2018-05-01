$.fn.bigGlass = function(type){
	/*
	 *	type 1: 身份证    2：电话号码
	 *	号码放大镜随着字数延伸
	 *	身份证分割： 3 3 4 4 4   手机号码分割： 3 4 4
	*/
	var glassT = $(this).offset().top, glassL = $(this).offset().left;//定义预展示输入框的坐标
	var gId = $(this).attr("id");
	var glassStr = '<div id="bigGlass"><nobr><span></span><span></span><span></span><span></span></nobr></div>';
	$(this).after($(glassStr));
	$(this).keyup(function(){
		showBigGlass();
	})
	//生成放大镜
	function showBigGlass(){
		var inputVal = $("#"+gId).val(), l = inputVal.length;
		$("#bigGlass").css({"top":(glassT-50)+"px","left":glassL+"px"});
		 style="top:'+(glassT-50)+'px;left:'+glassL+'px;"
		if(!inputVal){
			$("#bigGlass").hide();
			return false;
		}
		//身份证号码与电话号码展示逻辑不同，做区分
		$("#bigGlass").html('<nobr><span></span><span></span><span></span><span></span></nobr>');
		if(type == 1){
			if(l <= 3){
				$("#bigGlass").find("span").eq(0).text(inputVal);
			}else if(l <= 6){
				$("#bigGlass").find("span").eq(0).text(inputVal.substring(0,3));
				$("#bigGlass").find("span").eq(1).text(inputVal.substring(3,l));
			}else if(l <= 14){
				$("#bigGlass").find("span").eq(0).text(inputVal.substring(0,3));
				$("#bigGlass").find("span").eq(1).text(inputVal.substring(3,6));
				$("#bigGlass").find("span").eq(2).text(inputVal.substring(6,l));
			}else{
				$("#bigGlass").find("span").eq(0).text(inputVal.substring(0,3));
				$("#bigGlass").find("span").eq(1).text(inputVal.substring(3,6));
				$("#bigGlass").find("span").eq(2).text(inputVal.substring(6,14));
				$("#bigGlass").find("span").eq(3).text(inputVal.substring(14,l));
			}
		}else{
			if(l <= 3){
				$("#bigGlass").find("span").eq(0).text(inputVal);
			}else if(l <= 7){
				$("#bigGlass").find("span").eq(0).text(inputVal.substring(0,3));
				$("#bigGlass").find("span").eq(1).text(inputVal.substring(3,l));
			}else{
				$("#bigGlass").find("span").eq(0).text(inputVal.substring(0,3));
				$("#bigGlass").find("span").eq(1).text(inputVal.substring(3,7));
				$("#bigGlass").find("span").eq(2).text(inputVal.substring(7,l));
			}
		}
		$("#bigGlass").show();
	}
	//控制数字放大镜的显示与销毁
	$(document).click(function(event){
		var obj = event.srcElement || event.target;
		if($(obj).attr("id") != gId){
			$("#bigGlass").html("").hide();
		}else{
			showBigGlass();
		}
	});
}
$(function(){
	$("#cardCode").bigGlass(1);
	$("#cardCode1").bigGlass(2);
})