/*    var dlNum  =$("#selectList").find("dl");
    //for (i = 0; i < dlNum.length; i++) {
     //   $(".hasBeenSelected .clearList").append("<div class=\"selectedInfor selectedShow\" style=\"display:none\"><span></span><label></label><em></em></div>");
   // }
    
    var refresh = "true";*/
    
   // $(".listIndex label").live("click",function(){
//		var Asele=$(".listIndex").find("a");
//        var text =$(this).text();
//        var selectedShow = $(".selectedShow");
//        var textTypeIndex =$(this).parents("dl").index();//父级dl 的索引值
//        var textType =$(this).parent("dd").siblings("dt").text();//取上一层的文本
//        index = textTypeIndex;
//        $(".clearDd").show();
//        $(".selectedShow").eq(index).show();
//		$(this).find("a").addClass("selected");
//
//		$(this).find("input").attr("checked",true);
//		var infor='<div class=\"selectedInfor selectedShow\"><span>'+textType+'</span><label>'+text+'</label><em></em></div>'
//         $(".hasBeenSelected .clearList").append(infor);
//		selectedShow.eq(index).find("span").text(textType);
//        selectedShow.eq(index).find("label").text(text);
//		判断个数显示
//       var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
//		if (show > 1) {
//         $(".eliminateCriteria").show();
//    	}
//       
//    });
/*	 $(".listIndex label").toggle(function(){
		 var Asele=$(".listIndex").find("a");
        var text =$(this).text();
        var selectedShow = $(".selectedShow");
        var textTypeIndex =$(this).parents("dl").index();//父级dl 的索引值
        var textType =$(this).parent("dd").siblings("dt").text();//取上一层的文本
        index = textTypeIndex;
        $(".clearDd").show();
        $(".selectedShow").eq(index).show();
		$(this).find("a").addClass("selected");

		$(this).find("input").attr("checked",true);
		var infor='<div class=\"selectedInfor selectedShow\"><span>'+textType+'</span><label>'+text+'</label><em></em></div>';
         $(".hasBeenSelected .clearList").append(infor);
		 
	},function(){
		$(this).find("a").removeClass("selected");
		$(this).find("input").attr("checked",false);
		});*/

//	 $(".listIndex label").toggle(function(){
//			 var text =$(this).text();
//        var selectedShow = $(".selectedShow");
//       var textTypeIndex =$(this).parents("dl").index();
//       var textType =$(this).parent("dd").siblings("dt").text();
//	           index = textTypeIndex -(2);
//			 $(this).find("a").addClass("selected");
//			 $(this).find("input").attr("checked",true);
//			 selectedShow.eq(index).find("span").text(textType);
//			 $(".selectedShow").eq(index).show();
//			  $(".clearDd").show();
//			  var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
//			//if (show > 1) {
////					   $(".eliminateCriteria").show();
////				}
//		 },function(){
//			 $(this).find("a").removeClass("selected");
//	     	 $(this).find("input").attr("checked",false);
//			 });
/*
    $(".selectedShow em").live("click",function(){
        $(this).parents(".selectedShow").remove();
        var textTypeIndex =$(this).parents(".selectedShow").index();
        index = textTypeIndex;
        $("#selectList").eq(index).find("a").removeClass("selected");
		$("#selectList").eq(index).find("input").attr("checked",false);
        
      //if($(".listIndex .selected").length < 2){
       //    $(".eliminateCriteria").hide();
        //}
    });   
    $(".eliminateCriteria").live("click",function(){
        $(".selectedShow").remove();
        //$(this).hide();
        $(".listIndex a ").removeClass("selected")
		$(".listIndex a ").prev().attr("checked",false);
    }); */


$('.clearDd').show();



var okSelect = []; //已经选择好的
var oSelectList = document.getElementById('selectList');

var oClearList = $(".hasBeenSelected .clearList");
var oCustext1 = document.getElementById('custext1');
var oCustext2 = document.getElementById('custext2');
var aItemTxt = oSelectList.getElementsByTagName('a');
var isCusPrice = false;//是否自定义价格
var radioVal = '';

oSelectList.onclick = function(e, a) {
    var ev = e || window.event;
    var tag = ev.target || ev.srcElement;
    if(!tag)return;
    var tagName = tag.nodeName.toUpperCase();
    var infor = '';
    var aRadio = document.getElementsByName('radio2');

    if( isCusPrice ) {
      radioVal = oCustext1.value + '-' + oCustext2.value + '元';
    } else {
      radioVal = '';
    }

    if (tagName == 'INPUT') {
        if (tag.getAttribute('type').toUpperCase() == 'CHECKBOX') { //如果点击 的是 input checkbox
            var val = next(tag);
            if (tag.checked) {
                var sType = prev(parents(tag, 'dd')).innerHTML;
                val && okSelect.push(trim(val.innerHTML) + '|' + sType)
            } else {
                var sType = prev(parents(tag, 'dd')).innerHTML;
                delStr(val.innerHTML + '|' + sType, okSelect)
            }
        } else if (tag.getAttribute('type').toUpperCase() == 'BUTTON') { //如果点击的是 自定义价格按钮
            radioVal = oCustext1.value + '-' + oCustext2.value + '元';
            isCusPrice = true;

            for (var i = 0; i < aRadio.length; i++) {
                aRadio[i].checked = false;
            }

        }
    }

    if (tagName == 'A') { //如果点击 的是 A
        var oPrevInput = prev(tag);

        if (!oPrevInput) { //如果上一个节点没有则认为点击的是 '不限'
            var parent = parents(tag, 'dd');
            var aItem = parent.getElementsByTagName('label');
            if(parent.getAttribute('data-more')) {
                var allCheckbox = next(parents(parent, 'dl')).getElementsByTagName('label');
                var sType = '';
                for (var i = 0, len = allCheckbox.length; i < len; i++) {
                    sType = prev(parents(allCheckbox[i], 'dd')).innerHTML;
                    delStr(text(allCheckbox[i]) + '|' + sType, okSelect);
                    allCheckbox[i].children[0].checked = false;
                }
            }

            if (trim(prev(parent).innerHTML) == '酒店价格') { //这里是直接根据 text来比较的.建议加个自定义属性作标识符
                for (var i = 0; i < aRadio.length; i++) {
                    aRadio[i].checked = false;
                }
                isCusPrice = false;
                a = true;
                radioVal = '';
            } else {
                var sType = '';
                for (var i = 0, len = aItem.length; i < len; i++) {
                    sType = prev(parents(aItem[i], 'dd')).innerHTML;
                    delStr(text(aItem[i]) + '|' + sType, okSelect);
                    aItem[i].children[0].checked = false;
                }
            }

        } else {

            if (oPrevInput && oPrevInput.getAttribute('type').toUpperCase() == 'RADIO') { //radio
                isCusPrice = false;
                oPrevInput.checked = true;
            }

            if (oPrevInput && oPrevInput.getAttribute('type').toUpperCase() == 'CHECKBOX') { //获取checkbox
                if (oPrevInput.checked) {
                    oPrevInput.checked = false;
                    var sType = prev(parents(tag, 'dd')).innerHTML;
                    delStr(tag.innerHTML + '|' + sType, okSelect);
                } else {
                    oPrevInput.checked = true;
                    var sType = prev(parents(tag, 'dd')).innerHTML;
                    okSelect.push(trim(tag.innerHTML) + '|' + sType)
                }
            }
        }
    };

    for (var i = 0; i < aRadio.length; i++) {
        if (aRadio[i].checked) {
            radioVal = next(aRadio[i]).innerHTML;
            isCusPrice = false;
            break;
        }
    }

    if(a) {
         isCusPrice = false;
    }

    if(a && a == 2) {
        for (var i = 0; i < aRadio.length; i++) {
            aRadio[i].checked = false;
        }
           
    } else {
       if (radioVal) infor += '<div class=\"selectedInfor selectedShow\"><span>酒店价格</span><label>' + radioVal + '</label><em p="2"></em></div>';
    }


    var vals = [];
    for (var i = 0,
    size = okSelect.length; i < size; i++) {
        vals = okSelect[i].split('|');
        infor += '<div class=\"selectedInfor selectedShow\"><span>' + vals[1] + '</span><label>' + vals[0] + '</label><em></em></div>';
    }
    oClearList.html(infor);
};
$('div.eliminateCriteria').click(function(){
    $(oSelectList).find('input').attr('checked',false);
    radioVal = '';
    isCusPrice = false;
    okSelect.length = 0;
    $(oSelectList).trigger('click', 1);
})

$('.clearList').find('em').live('click',function(){
    var self = $(this);
    var val = self.prev().html() + '|' + self.prev().prev().html();
    var n = -1;
    var a = this.getAttribute('p') || 1;
    self.die('click');
    for(var i = 0, len = aItemTxt.length; i < len; i++) {
         var html = val.split('|')[0];
         if(trim(aItemTxt[i].innerHTML) == html) {
              prev(aItemTxt[i]).checked = false;
              break;
        }
    };
    delStr(val, okSelect);
    $(oSelectList).trigger('click', a);

})

function delStr(str, arr) { //删除数组给定相同的字符串
    var n = -1;
    for (var i = 0,
    len = arr.length; i < len; i++) {
        if (str == arr[i]) {
            n = i;
            break;
        }
    }
    n > -1 && arr.splice(n, 1);
};
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '')
};
function text(e) {
    var t = '';
    e = e.childNodes || e;
    for (var j = 0; j < e.length; j++) {
        t += e[j].nodeType != 1 ? e[j].nodeValue: text(e[j].childNodes);
    }
    return trim(t);
}

function prev(elem) {
    do {
        elem = elem.previousSibling;
    } while ( elem && elem . nodeType != 1 );
    return elem;
};

function next(elem) {
    do {
        elem = elem.nextSibling;
    } while ( elem && elem . nodeType != 1 );
    return elem;
}

function parents(elem, parents) {  //查找当前祖先辈元素需要的节点  如 parents(oDiv, 'dd') 查找 oDiv 的祖先元素为dd 的
    if(!elem || !parents) return;
    var parents = parents.toUpperCase();
    do{
        elem = elem.parentNode;
    } while( elem.nodeName.toUpperCase() != parents );
    return elem;
};
