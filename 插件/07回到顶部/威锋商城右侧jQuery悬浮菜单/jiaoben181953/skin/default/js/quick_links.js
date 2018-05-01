/**
 * 右侧快速操作
 * kongge@office.weiphone.com
 * 2012.06.07
*/
jQuery(function($){
	//创建DOM
	var 
	quickHTML = '<div class="quick_links_panel"><div id="quick_links" class="quick_links"><a href="#top" class="return_top"><i class="top"></i><span>返回顶部</span></a><a href="#" class="my_qlinks"><i class="setting"></i><span>个人中心</span></a><a href="#" class="message_list" ><i class="message"></i><span>站内消息</span><em class="num" style="display:none"></em></a><a href="#" class="history_list"><i class="view"></i><span>最近浏览</span></a><a href="#" class="leave_message"><i class="qa"></i><span>联系客服</span></a></div><div class="quick_toggle"><a href="javascript:;" class="toggle" title="展开/收起">×</a></div></div><div id="quick_links_pop" class="quick_links_pop hide"></div>',
	quickShell = $(document.createElement('div')).html(quickHTML).addClass('quick_links_wrap'),
	quickLinks = quickShell.find('.quick_links');
	quickPanel = quickLinks.parent();
	quickShell.appendTo('body');
	
	//具体数据操作 
	var 
	quickPopXHR,
	loadingTmpl = '<div class="loading" style="padding:30px 80px"><i></i><span>Loading...</span></div>',
	popTmpl = '<div class="title"><h3><i></i><%=title%></h3></div><div class="pop_panel"><%=content%></div><div class="arrow"><i></i></div><div class="fix_bg"></div>',
	historyListTmpl = '<ul><%for(var i=0,len=items.length; i<5&&i<len; i++){%><li><a href="<%=items[i].productUrl%>" target="_blank" class="pic"><img alt="<%=items[i].productName%>" src="<%=items[i].productImage%>" width="60" height="60"/></a><a href="<%=items[i].productUrl%>" title="<%=items[i].productName%>" target="_blank" class="tit"><%=items[i].productName%></a><div class="price" title="单价"><em>&yen;<%=items[i].productPrice%></em></div></li><%}%></ul>',
	newMsgTmpl = '<ul><li><a href="'+account_comment_url+'"><span class="tips">新回复<em class="num"><b><%=items.commentNewReply%></b></em></span>商品评价/晒单</a></li><li><a href="'+account_consult_url+'"><span class="tips">新回复<em class="num"><b><%=items.consultNewReply%></b></em></span>商品咨询</a></li><li><a href="'+account_message_url+'"><span class="tips">新回复<em class="num"><b><%=items.messageNewReply%></b></em></span>我的留言</a></li><li><a href="'+account_arrival_url+'"><span class="tips">新通知<em class="num"><b><%=items.arrivalNewNotice%></b></em></span>到货通知</a></li><li><a href="'+account_reduce_url+'"><span class="tips">新通知<em class="num"><b><%=items.reduceNewNotice%></b></em></span>降价提醒</a></li></ul>',
	quickPop = quickShell.find('#quick_links_pop'),
	quickDataFns = {
		//个人中心
		my_qlinks: {
			title: '个人中心',
			content: '<div class="links"><ul><li><a href="'+account_url+'">个人首页</a></li><li><a href="'+account_order_url+'">订单管理</a></li><li><a href="'+account_return_url+'">退换货管理</a></li><li><a href="'+account_address_url+'">地址管理</a></li><li><a href="'+account_giftcard_url+'">我的优惠券</a></li><li><a href="'+account_cashcard_url+'">我的现金卡</a></li><li><a href="'+account_jf_url+'">我的积分</a></li></ul></div>',
			init: $.noop
		},
		
		//站内消息
		message_list: {
			title: '站内消息',
			content: loadingTmpl,
			init: function(ops){
				
				//获取实时最近浏览
				quickPopXHR = $.ajax({
					url: unreadNewMsgUrl,
					dataType: 'json',
					cache: false,
					success: function(data){
						//var html = '<div class="no_data"><i></i><span>暂无消息</span></div>';
						var html = ds.tmpl(newMsgTmpl, {
							items: data
						});
						
						if(1 == data.success){
							//重写总数
							var shell = $('#quick_links a.message_list'), num = data.msgtotal ;
							if(0 == num){
								shell.find('em').remove();
							}else{
								shell.append('<em class="num"><b>'+ Math.min(99, num) +'</b></em>').show();
							}
							
						}
						quickPop.html(ds.tmpl(popTmpl, {
							title: ops.title,
							content: '<div class="links">'+ html +'</div>'
						}));
					}
				});
			}
		},
		
		//最近浏览
		history_list: {
			title: '最近浏览',
			content: loadingTmpl,
			init: function(ops){
				//获取实时最近浏览
				quickPopXHR = $.ajax({
					url: recentlyViewedUrl,
					dataType: 'json',
					cache: false,
					success: function(data){
						var html = '<div class="no_data"><i></i><span>没有浏览记录</span></div>';
						if(data && data.length > 0){
							html = ds.tmpl(historyListTmpl, {
								items: data
							});
						}
						quickPop.html(ds.tmpl(popTmpl, {
							title: ops.title,
							content: '<div class="slider related_slider history_slider"><div class="inner">'+ html +'</div></div>'
						}));
					}
				});
			}
		},
		//给客服留言
		leave_message: {
			title: '给客服留言',
			content: '<form action="./" method="post"><div class="types"><input type="radio" name="type" id="type_1" value="1" checked /><label for="type_1">联系客服</label><input type="radio" name="type" id="type_3" value="2" /><label for="type_3">我要投诉</label><input type="radio" name="type" id="type_4" value="3"/><label for="type_4">不良信息举报</label></div><div class="txt"><textarea name="msg" id="msg" cols="30" rows="10" placeholder="客服你好，我想问一下..."></textarea></div><div class="token"><label for="token_txt">验证码：</label><input type="text" class="leavemsg_input" id="token_txt" autocomplete="off" name="token_txt" value="点击获取" style="margin-right: 8px; color: rgb(204, 204, 204);"/><span id="code_img"></span></div><div class="btns"><button type="submit" class="btn"><span>提交</span></button></div></form>',
			init: function(ops){
				setTimeout(function(){
					quickPop.find('textarea').focus();
				}, 100);
				//验证码
				quickPop.find('#token_txt').bind('focus', getValidateCode);
				
				//效验 & 提交数据
				var form = quickPop.find('form');
				form.attr("action",saveMessageUrl);
				form.bind('submit', function(e){
					e.preventDefault();
					var data = form.serialize();
					if(!checkMessageForm()){
						return false;
					}
					var type=quickPop.find(':radio:checked').val();
					jQuery.ajax({
						type:'post',
						url: saveMessageUrl, 
						data:{"message_style":type,"message_content":$("#msg").val(),"checkcode":$("#token_txt").val()},
						dataType:"json",
						error:function(value){
							ds.dialog.alert('留言失败');
						},
						success: function(value){
							var success = value.success;
							var info = value.info;
							if(success==1){
								hideQuickPop();
								showInfoTip(info, 'success');
							}else{
								ds.dialog.alert(info);
							}
						}
					});
				});
			}
		}
	};
	
	//showQuickPop
	var 
	prevPopType,
	prevTrigger,
	doc = $(document),
	popDisplayed = false,
	hideQuickPop = function(){
		if(prevTrigger){
			prevTrigger.removeClass('current');
		}
		popDisplayed = false;
		prevPopType = '';
		quickPop.hide();
	},
	showQuickPop = function(type){
		if(quickPopXHR && quickPopXHR.abort){
			quickPopXHR.abort();
		}
		if(type !== prevPopType){
			var fn = quickDataFns[type];
			quickPop.html(ds.tmpl(popTmpl, fn));
			fn.init.call(this, fn);
		}
		doc.unbind('click.quick_links').one('click.quick_links', hideQuickPop);

		quickPop[0].className = 'quick_links_pop quick_' + type;
		popDisplayed = true;
		prevPopType = type;
		quickPop.show();
	};
	quickShell.bind('click.quick_links', function(e){
		e.stopPropagation();
	});

	//通用事件处理
	var 
	view = $(window),
	quickLinkCollapsed = !!ds.getCookie('ql_collapse'),
	getHandlerType = function(className){
		return className.replace(/current/g, '').replace(/\s+/, '');
	},
	showPopFn = function(){
		var type = getHandlerType(this.className);
		if(popDisplayed && type === prevPopType){
			return hideQuickPop();
		}
		showQuickPop(this.className);
		if(prevTrigger){
			prevTrigger.removeClass('current');
		}
		prevTrigger = $(this).addClass('current');
	},
	quickHandlers = {
		//购物车，最近浏览，商品咨询
		my_qlinks: showPopFn,
		message_list: showPopFn,
		history_list: showPopFn,
		leave_message: showPopFn,
		//返回顶部
		return_top: function(){
			ds.scrollTo(0, 0);
			hideReturnTop();
		},
		toggle: function(){
			quickLinkCollapsed = !quickLinkCollapsed;
			
			quickShell[quickLinkCollapsed ? 'addClass' : 'removeClass']('quick_links_min');
			ds.setCookie('ql_collapse', quickLinkCollapsed ? '1' : '', 30);
		}
	};
	quickShell.delegate('a', 'click', function(e){
		var type = getHandlerType(this.className);
		if(type && quickHandlers[type]){
			quickHandlers[type].call(this);
			e.preventDefault();
		}
	});
	
	//Return top
	var scrollTimer, resizeTimer, minWidth = 1350;

	function resizeHandler(){
		clearTimeout(scrollTimer);
		scrollTimer = setTimeout(checkScroll, 160);
	}
	function checkResize(){
		quickShell[view.width() > 1340 ? 'removeClass' : 'addClass']('quick_links_dockright');
	}
	function scrollHandler(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkResize, 160);
	}
	function checkScroll(){
		view.scrollTop()>100 ? showReturnTop() : hideReturnTop();
	}
	function showReturnTop(){
		quickPanel.addClass('quick_links_allow_gotop');
	}
	function hideReturnTop(){
		quickPanel.removeClass('quick_links_allow_gotop');
	}

	view.bind('scroll.go_top', resizeHandler).bind('resize.quick_links', scrollHandler);
	quickLinkCollapsed && quickShell.addClass('quick_links_min');
	resizeHandler();
	scrollHandler();
	

	//校验商品咨询表单
	function  checkMessageForm(){
		var content = $("#msg");
		if(content.val()==""){
			ds.dialog({
				   title : '消息',
				   content : "请填写咨询内容！",
				   onyes : function(){
						this.close();
				   },
				   width : 200,
				   lock : true
			});
			return false;
		}

		var checkcode = $("#token_txt").val();
		if(checkcode=="" || checkcode=="点击获取"){
			ds.dialog({
				   title : '消息',
				   content : "验证码不能为空，请输入验证码！",
				   onyes : function(){
						this.close();
				   },
				   width : 200,
				   lock : true
			});
			return false;
		}
		return true;
	}

	//获取验证码
	function getValidateCode(){
		this.value="";
		var validateCodeUrl = validateCode_url+'?t='+Math.random();
		$("#code_img").html('<img id="validate_code_img_id_1" src="' + validateCodeUrl + '" height="20" width="80" alt="验证码" />');
		return;
	}
});

//首次加载站内消息总数
jQuery(function($){
	var shell = $('#quick_links a.message_list');
	if(shell.find("em").length){
		
		$.ajax({
			url: unreadNewMsgUrl,
			dataType: 'json',
			cache: false,
			success: function(data){
				if(1 == data.success){
					if(0 == data.msgtotal){
						shell.find('em').remove();
					}else{
						var num = data.msgtotal;
						//消息总数最大只显示 99
						shell.append('<em class="num"><b>'+ Math.min(99, num) +'</b></em>').show();
					}
				}
			}
		});
	}
});