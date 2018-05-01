/**
 * @fileoverview Giant Interective Group, Inc. Javascript Library v#version.
 * 该Javascript UI库是基于jQuery的扩展。
 * <pre>
 * Copyright (C) 2004-2009 Giant Interective Group, Inc. All rights reserved.
 * 版权所有 2004-2009 上海巨人网络科技有限公司
 * </pre>
 * Download by http://sc.xueit.com
 * @version 1.0.0, #date 2009-04-06
 * @author  Zhangkai
 * Depend on jQuery 1.3.x
 */
 (function($) {
    var isShow = false;
    $.fn.tab = function(options) {
        this.opts = $.extend({},$.fn.tab.defaults, options);
		this._init();
		this.disableArr=[];
	}	
	$.fn.tab.prototype={
		_init:function(){
			var _this = this;
			if($(_this.opts.tabList).length>0){
				$(_this.opts.tabList).each(function(index){
						$(this).bind(_this.opts.eventType,function(){
							//判断是否禁用，是否效果还在执行中，是否在当前选中的按钮上
							if($.inArray(index,_this.disableArr)==-1&&(!isShow)&&$(this).attr("class").indexOf(_this.opts.tabActiveClass)==-1){
								//callback
								if(_this.opts.callBackStartEvent){
									_this.opts.callBackStartEvent(index);
								}
								$(_this.opts.tabList).removeClass(_this.opts.tabActiveClass);
								$(this).addClass(_this.opts.tabActiveClass);
								_this._showContent(index);
							}
						});
					});
			}
		},
		_showContent:function(index){
			isShow = true;
			var _this = this;
			switch(_this.opts.showType){
				case "show":
					$(_this.opts.contentList+":visible").hide();
					//callback
					if(_this.opts.callBackHideEvent){
						_this.opts.callBackHideEvent(index);
					}
					$(_this.opts.contentList).eq(index).show();
					if(_this.opts.callBackShowEvent){
						_this.opts.callBackShowEvent(index);
					}
					isShow =false;
					break;
				case "fade":
					$(_this.opts.contentList+":visible").fadeOut(_this.opts.showSpeed,function(){
						//callback
						if(_this.opts.callBackHideEvent){
							_this.opts.callBackHideEvent(index);
						}
						$(_this.opts.contentList).eq(index).fadeIn(function(){
							//callback
							if(_this.opts.callBackShowEvent){
								_this.opts.callBackShowEvent(index);
							}
							isShow =false;
						});
					});
					break;
				case "slide":
					$(_this.opts.contentList+":visible").slideUp(_this.opts.showSpeed,function(){
						//callback
						if(_this.opts.callBackHideEvent){
							_this.opts.callBackHideEvent(index);
						}
						$(_this.opts.contentList).eq(index).slideDown(function(){
							//callback
							if(_this.opts.callBackShowEvent){
								_this.opts.callBackShowEvent(index);
							}
							isShow =false;
						});
					});
					break;
			}
		},
		setDisable:function(index){
			//如果不存在
			var _this = this;
			if($.inArray(index,this.disableArr)==-1){
				this.disableArr.push(index);
				$(_this.opts.tabList).eq(index).addClass(_this.opts.tabDisableClass);
			}
		},
		setEnable:function(index){
			//如果不存在
			var _this = this;
			var i =$.inArray(index,this.disableArr);
			if(i>-1){
				this.disableArr.splice(i,1);
				$(_this.opts.tabList).eq(index).removeClass(_this.opts.tabDisableClass);
			}
		},
		triggleTab:function(index){
			$(this.opts.tabList).eq(index).trigger(this.opts.eventType);
		}
	}
    $.fn.tab.defaults = {
	   tabList:".ui-tab-container .ui-tab-list li",
	   contentList:".ui-tab-container .ui-tab-content",
       tabActiveClass:"ui-tab-active",
	   tabDisableClass:"ui-tab-disable",
	   eventType:"click",									//触发事件，有click和mouseover两种类型
	   showType:"show",										//显示方式，show 直接显示，fade渐变，slide滑动
	   showSpeed:200,										//显示速度，单位为毫秒
	   callBackStartEvent:null,
	   callBackHideEvent:null,
	   callBackShowEvent:null
    };
})(jQuery);