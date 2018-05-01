/**********************************************
Desiged by Jason.Leung
QQ, 147430218
SinaWB, @切片麵包
任何企业或个人在使用过程中，不得删除作者出处。违者必究。
**********************************************/
function drag(obj){
	var sw = document.documentElement.clientWidth || document.body.clientWidth;
	var sh = document.documentElement.clientHeight || document.body.clientHeight;
	obj.onmousedown = function(ev){
		var oEvent = ev || event;
		var posX = oEvent.clientX - obj.offsetLeft;
		var posY = oEvent.clientY - obj.offsetTop;
		document.onselectstart = function(){return false};
		document.onmousemove = function(ev){
			var oEvent = ev || event;
			var oDivX = oEvent.clientX - posX;
			var oDivY = oEvent.clientY - posY;
			if (oDivX<=10){
				oDivX = 0;
			}else if (oDivX >= sw - obj.offsetWidth - 10){
				oDivX = sw - obj.offsetWidth;
			};
			if (oDivY<=10){
				oDivY = 0;
			}else if(oDivY >= sh-obj.offsetHeight-10){
				oDivY = sh-obj.offsetHeight;
			};
			obj.style.left = oDivX + 'px';
			obj.style.top = oDivY + 'px';
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
			document.onselectstart = function(){return true};
		};
	};
};
function css(obj,json){
	for (var attr in json){
		obj.style[attr] = json[attr];
	};
};
var qq_plugin = {
	css_data : {box_id : 'plugin_qq_box', inner_class : 'inner_box', bg : 'images/q_1.png', bg2 : 'images/q_2.png'},
	info : {x : 'Designed By Jason.Leung\nQQ, 147430218\nSinaWB, @切片麵包\n任何企业或个人在使用过程中，不得删除作者出处。违者必究。'},
	set : function(json){
		this.box = document.getElementById(this.css_data.box_id);
		this.inner = this.box.getElementsByTagName('div')[0];
		this.box.style.top = json.top + 'px';
		if (!this.info.x || this.info.x.length!=80){
			this.box.style.display = 'none';
			alert('警告：没有授权的程序，请联系开发者 (QQ,147430218)');
		}else{
			if (!json.qq){
				css(this.inner,{background:'#fff'});
				alert('QQ在线客服务插件未设置QQ号码。\n需技术支持，请联系开发者 (QQ,147430218)');
				return;
			}else{
				css(this.inner,{background:'url('+this.css_data.bg+') no-repeat'});
				this.qq_fn(json);
			};			
		};
	},
	qq_fn : function(json){
		var _this = this;
		this.inner.onclick = function(){
			window.open('http://wpa.qq.com/msgrd?v=3&uin='+json.qq+'&site=qq&menu=yes','_blank');
		};
		this.inner.onmouseover = function(){
			css(_this.inner,{background:'url('+_this.css_data.bg2+') no-repeat'});
		};
		this.inner.onmouseout = function(){
			css(_this.inner,{background:'url('+_this.css_data.bg+') no-repeat'});
		};
		console.log(this.info.x);
		drag(this.box);
		window.onresize = function(){
			drag(_this.box);
		};
	},
};