
//营销——营销——编辑页面的js
$(function(){
	$(function() {//解决延迟问题
	         FastClick.attach(document.body);
           });
           
	$(".compile_content_ula_charu").hide();
	$(".compile_meng_chazi").hide();
	$(".compile_meng_fenxiang").hide();
	
	//营销——营销——分享，点击分享的js
	$(".compile .compile_head_content_fenxiang").on("click",function(){
		$(".compile_meng_fenxiang").show();
	})
	$(".compile .compile_meng_fenxiang li:nth-child(1) ").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile .compile_meng_fenxiang li:nth-child(2) ").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile .compile_meng_fenxiang li:nth-child(3) ").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile .compile_meng_fenxiang li:nth-child(4) ").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile .compile_meng_fenxiang li:nth-child(5) ").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile .compile_meng_fenxiang li:nth-child(6) ").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile .compile_meng_fenxiang li:nth-child(7) ").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile .compile_meng_fenxiang li:nth-child(8) ").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	
	//营销——营销——编辑页面的文字js
	$(".compile_content_ula li").on("click",function(){
		if($(this).hasClass("compile_bg")){
			$(this).removeClass("compile_bg");
		}else{
			$(this).addClass("compile_bg");
			$(this).siblings().removeClass("compile_bg");
		}
        $(this).after($(".compile_content_ula_charu"));
        $(".compile_content_ula_charu").toggle();
	})

	//营销——营销——编辑页面，点击图片的js
	$(".compile_content_ula img").one("click",function(){
		if($(this).hasClass("compile_bg")){
			$(this).removeClass("compile_bg");	
		}else{
			$(this).addClass("compile_bg");
			$(this).siblings().removeClass("compile_bg");
		}
		$(this).after($(".compile_content_ula_charu"));
		$(".compile_content_ula_charu").toggle();
		$(".compile_content_ula_charu button:nth-child(1)").attr({"disabled":"disabled"});
		$(".compile_content_ula_charu button:nth-child(2)").attr({"disabled":"disabled"});
		$(".compile_content_ula_charu button:nth-child(5)").attr({"disabled":"disabled"});
		$(".compile_content_ula_charu button:nth-child(6)").attr({"disabled":"disabled"});
		$(".compile_content_ula_charu button:nth-child(7)").attr({"disabled":"disabled"});
	})
	
	
	/*营销——营销——编辑页面的插入文字js*/
	$(".compile_meng_chazi").hide();
	$(".compile_meng_chazi_quxiao").on("click",function(){
		$(".compile_meng_chazi").hide();
		$("textarea").val("");
	})
	
	$(".compile_content_ula_charu button:lt(2)").on("click",function(){
		$(".compile_meng_chazi").show();
		if ($(this).html()=="插文字") {
			$(".compile_meng_chazi_tijiao").on("click",function(){
		    if($("textarea").val().length== 0){
			   $("textarea").val("你未输入文字")
			   $("textarea").css({"color":"#f00"});
			   $("textarea").animate({"color":"#f00"},1000,function(){
				   $(this).val("");
			       $(this).css({"color":"#000"});
			   })
		    }else{
			var val=$("textarea").val();
			var LiV=$(".compile_bg").text();
			$(".compile_bg").after("<li>"+val+"</li>");
			$("textarea").val("");
			$(".compile_meng_chazi").hide();
			$(".compile_content_ula_charu").hide();
			$(".compile_content_ula li").removeClass("compile_bg");
		   }
		
	      })
		} else if ($(this).html()=="改文字") {
				var LiT=$.trim($(".compile_bg").text());
				var tr=$("textarea").val(LiT);       
			$(".compile_meng_chazi_tijiao").on("click",function(){
		    if($("textarea").val().length== 0){
			   $("textarea").val("你未输入文字");
			   $("textarea").css({"color":"#f00"});
			   $("textarea").animate({"color":"#f00"},1000,function(){
				   $(this).val("");
			       $(this).css({"color":"#000"});
			   })
		}else{
			$(".compile_bg").text($("textarea").val());
			$("textarea").val("");
			$(".compile_meng_chazi").hide();
			$(".compile_content_ula_charu").hide();
			$(".compile_content_ula li").removeClass("compile_bg");
		   }
		
	      })
		}
	})
	
	//删除的图层效果
	
    $(".compile_meng_shanchu").hide();
    $(".compile_meng_shanchu div:last-child").on("click",function(){
    	$(".compile_meng_shanchu").hide();
    })
	$(".compile_content_ula_charu button:nth-child(4)").on("click",function(){
		$(".compile_meng_shanchu").show();
	})
	$(".compile_meng_shanchu div:first-child").on("click",function(){
    	$(".compile_bg").remove();
    	$(".compile_meng_shanchu").hide();
    	$(".compile_content_ula_charu").hide();
   })
	
	/**营销——营销——编辑页面的插入广告js*/
	$(".compile_GG_moban_zi div:last-child").on("click",function(){
		if($(this).hasClass("compile_GG_moban_xuan")){
			$(this).removeClass("compile_GG_moban_xuan");
			$(this).addClass("compile_GG_moban_XZ");
		}else{
			$(this).addClass("compile_GG_moban_xuan");
			$(this).removeClass("compile_GG_moban_XZ");
			$(this).parents(".compile_GG_moban").siblings().children(".compile_GG_moban_zi").children().last().removeClass("compile_GG_moban_xuan");
			$(this).parents(".compile_GG_moban").siblings().children(".compile_GG_moban_zi").children().last().addClass("compile_GG_moban_XZ");
            }
	})
	$(".compile_content_ula_charu button:nth-child(5)").on("click",function(){
				mui.openWindow({
				url:"compile_guanggao.html",
				id:"compile_guanggao.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	/**营销——营销——编辑页面的换行js*/
	$(".compile_content_ula_charu button:nth-child(6)").on("click",function(){
		$(".compile_bg").after("<br />");
	})
	
	//营销——营销——编辑页面的悬浮广告js
	$(".compile_content_ula_charu button:last-child").on("click",function(){
				mui.openWindow({
				url:"compil_xuanfuguanggao.html",
				id:"compil_xuanfuguanggao.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	
	//营销——营销——编辑页面的悬浮广告的点击“保存”js
	$(".compile_XFGG .WMP_head_cont_cun").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	/**营销——营销——编辑页面的悬浮广告js*/
	$(".compile_XFGG_d").hide();
	$(".compile_XFGG_b").hide();
	$(".compile_XFGG_c").hide();
	$(".compile_XFGG_qiehuan li").on("click",function(){
		$(this).addClass("compile_XFGG_qiehuan_bian");
		$(this).siblings().removeClass("compile_XFGG_qiehuan_bian");
	})

	//营销——营销——编辑页面的悬浮广告的页面切换
	$(".compile_XFGG_qiehuan li:nth-child(1)").on("click",function(){
		$(".compile_XFGG_a").show();
		$(".compile_XFGG_d").hide();
	    $(".compile_XFGG_b").hide();
	    $(".compile_XFGG_c").hide();
	})
	$(".compile_XFGG_qiehuan li:nth-child(2)").on("click",function(){
		$(".compile_XFGG_b").show();
		$(".compile_XFGG_d").hide();
	    $(".compile_XFGG_a").hide();
	    $(".compile_XFGG_c").hide();
	})
	$(".compile_XFGG_qiehuan li:nth-child(3)").on("click",function(){
		$(".compile_XFGG_c").show();
		$(".compile_XFGG_d").hide();
	    $(".compile_XFGG_b").hide();
	    $(".compile_XFGG_a").hide();
	})
	$(".compile_XFGG_qiehuan li:nth-child(4)").on("click",function(){
		$(".compile_XFGG_d").show();
		$(".compile_XFGG_a").hide();
	    $(".compile_XFGG_b").hide();
	    $(".compile_XFGG_c").hide();
	})
	
	//营销——营销——编辑页面的悬浮广告的字的背景
	$(".compile_XFGG_beijingxuanze").on("click",function(){
		mui.openWindow({
				url:"compile_xuanfuguanggao_zibeijing.html",
				id:"compile_xuanfuguanggao_zibeijing.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	//营销——营销——编辑页面的悬浮广告的二维码的上传样式
	$(".compile_XFGG_d_xuan_left div:last-child").on("click",function(){
		if ($(this).hasClass("compile_XFGG_d_WX")) {
			$(this).removeClass("compile_XFGG_d_WX");
			$(this).addClass("compile_XFGG_d_XZ");
			$(".compile_XFGG_d_xuan_right div:nth-child(2)").addClass("compile_XFGG_d_WX");
			$(".compile_XFGG_d_xuan_right div:nth-child(2)").removeClass("compile_XFGG_d_XZ");
		} else{
			$(this).addClass("compile_XFGG_d_XZ");
			$(this).removeClass("compile_XFGG_d_WX");
		}
		$(".compile_XFGG_d_neirong div:first-child").css("float","left");
		$(".compile_XFGG_d_neirong div:last-child").css("float","right");
	})
	
	$(".compile_XFGG_d_xuan_right div:last-child").on("click",function(){
		if ($(this).hasClass("compile_XFGG_d_WX")) {
			$(this).removeClass("compile_XFGG_d_WX");
			$(this).addClass("compile_XFGG_d_XZ");
			$(".compile_XFGG_d_xuan_left div:nth-child(2)").addClass("compile_XFGG_d_WX");
			$(".compile_XFGG_d_xuan_left div:nth-child(2)").removeClass("compile_XFGG_d_XZ");
		} else{
			$(this).addClass("compile_XFGG_d_XZ");
			$(this).removeClass("compile_XFGG_d_WX");
		}
		$(".compile_XFGG_d_neirong div:first-child").css("float","right");
		$(".compile_XFGG_d_neirong div:last-child").css("float","left");
	})
	
	
	//营销——营销——编辑页面的历史记录
	$(".compile_foot_jilu").on("click",function(){
				mui.openWindow({
				url:"compile_lishijilu.html",
				id:"compile_lishijilu.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile_foot_yulan").on("click",function(){
				mui.openWindow({
				url:"compile_yulanwenzhang.html",
				id:"compile_yulanwenzhang.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	
	/*营销——推广——微名片js*/
	$(".WMP .WMP_head_cont_cun").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_yulan.html",
				id:"tuiguang_weimingpian_yulan.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(1)").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(2)").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(3)").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(4)").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(5)").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(6)").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(7)").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(8)").on("click",function(){
				mui.openWindow({
				url:"tuigunag_weimingpian_chayinyue.html",
				id:"tuigunag_weimingpian_chayinyue.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(9)").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ula li:nth-child(10)").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ulb li:last-child").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_xinxi.html",
				id:"tuiguang_weimingpian_xinxi.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_cont_ulc li:last-child").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_chashipin.html",
				id:"tuiguang_weimingpian_chashipin.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_foot span:first-child").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_moban.html",
				id:"tuiguang_weimingpian_moban.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".WMP_foot span:last-child").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian_yulan.html",
				id:"tuiguang_weimingpian_yulan.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	/*营销——推广——微名片——信息弹出页面js*/
	$(".WMP_xinxi_tishi").hide();
	$(".WMP_xinxi .WMP_head_cont_cun").on("click",function(){
	//正则表达式判断手机号	
	    var tel=$(".WMP_xinxi input").val()//获取input里的值
    	var num=/^1[3578]\d{9}$/
           
		if (tel.length==0) {
			$(".WMP_xinxi_tishi div").html("手机号不能为空");
			$(".WMP_xinxi_tishi").show().delay(2000).hide(0);
		} else if(!num.test(tel)){
			$(".WMP_xinxi_tishi div").html("手机号不正确");
			$(".WMP_xinxi_tishi").show().delay(2000).hide(0);
    	}else {
			mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
		}	
	})
	
	
	
	/*营销——推广——微名片——插入背景音乐js*/
	$(".WMP_yinyue_xuanze_right div:first-child").on("click",function(){
		var music=document.getElementById("audio");
		if ($(this).hasClass("WMP_yinyue_bofang")) {
			$(this).removeClass("WMP_yinyue_bofang");
			$(this).addClass("WMP_yinyue_zanting");
			$(music).push();
		} else{
			$(this).removeClass("WMP_yinyue_zanting");
			$(this).addClass("WMP_yinyue_bofang");
			$(this).parents(".WMP_yinyue_xuanze").siblings().children(".WMP_yinyue_xuanze_right").children("div:nth-child(1)").addClass("WMP_yinyue_zanting");
			$(this).parents(".WMP_yinyue_xuanze").siblings().children(".WMP_yinyue_xuanze_right").children("div:nth-child(1)").removeClass("WMP_yinyue_bofang");
//			$(this).parent().siblings().find("#audio").play();
            $(music).play();
		}
	})
     $(".WMP_yinyue_xuanze_right div:last-child").on("click",function(){
		if ($(this).hasClass("WMP_yinyue_xuanzhong")) {
			$(this).removeClass("WMP_yinyue_xuanzhong");
			$(this).addClass("WMP_yinyue_weixuan");
		} else{
			$(this).removeClass("WMP_yinyue_weixuan");
			$(this).addClass("WMP_yinyue_xuanzhong");
			$(this).parents(".WMP_yinyue_xuanze").siblings().children(".WMP_yinyue_xuanze_right").children("div:nth-child(2)").addClass("WMP_yinyue_weixuan");
			$(this).parents(".WMP_yinyue_xuanze").siblings().children(".WMP_yinyue_xuanze_right").children("div:nth-child(2)").removeClass("WMP_yinyue_xuanzhong");
		}
	})
	$(".WMP_yinyue .WMP_head_cont_cun").on("click",function(){
		mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	//营销——推广——微名片——插入视频
	$(".WMP_shipin .WMP_head_cont_cun").on("click",function(){
		mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	
	/*营销——推广——微名片——预览名片js*/
	$(".WMP_yulan .compile_head_content_fenxiang").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	/*营销——推广——微名片——更换模板js*/
	$(".WMP_moban span").on("click",function(){
		if($(this).hasClass("WMP_moban_kongyuan")){
			$(this).removeClass("WMP_moban_kongyuan");
			$(this).addClass("WMP_moban_kongyuan");
		}else{
			$(this).addClass("WMP_moban_shiyuan");
			$(this).parents().siblings().children("span").removeClass("WMP_moban_shiyuan");
		}
	})
	$(".WMP_MB .WMP_head_cont_cun").on("click",function(){
				mui.openWindow({
				url:"tuiguang_weimingpian.html",
				id:"tuiguang_weimingpian.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	
	
	
	//营销——广场——企业js
//	var mySwiper = new Swiper('.swiper-container',{//轮播图js
//          pagination : '.swiper-pagination',
//         autoplay:500,//自动永久播放
//         autoplayDisableOnInteraction: false
//           })	
//	
	//轮播图跳转
	$(".compile_GC_qiye .swiper-wrapper div").on("click",function(){
				mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile_GC_qiye .compile_GC_qiye_anli").on("click",function(){
				mui.openWindow({
				url:"guangchang_qiye_anli.html",
				id:"guangchang_qiye_anli.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	
	//营销——广场——企业--安利下的企业相关js
	$(".compile_GC_anli_QYJE").on("click",function(){
		mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile_GC_anli_QYBD").on("click",function(){
		mui.openWindow({
				url:"guangchang_anli_MTBD.html",
				id:"guangchang_anli_MTBD.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile_GC_anli_QYXC").on("click",function(){
		mui.openWindow({
				url:"guangchang_anli_QYXC.html",
				id:"guangchang_anli_QYXC.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile_GC_anli_QYJXS").on("click",function(){
		mui.openWindow({
				url:"guangchang_anli_QYJXS.html",
				id:"guangchang_anli_QYJXS.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile_GC_anli_QYXT").on("click",function(){
		mui.openWindow({
				url:"guangchang_anli_QYXT.html",
				id:"guangchang_anli_QYXT.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile_GC_anli_QYDP").on("click",function(){
		mui.openWindow({
				url:"guangchang _anli_QYDP.html",
				id:"guangchang _anli_QYDP.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	$(".compile_GC_anli_QYSP").on("click",function(){
		mui.openWindow({
				url:"guangchang_anli_QYXC.html",
				id:"guangchang_anli_QYXC.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	$(".compile_GC_anli_QYLT").on("click",function(){
		mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	$(".compile_GC_anli_WYJM").on("click",function(){
		mui.openWindow({
				url:"guangchang_anli_WYJM.html",
				id:"guangchang_anli_WYJM.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
//	营销——广场——企业——安利——企业店铺
	$(".compile_GC_QYDP_daohang li").on("click",function(){
		if ($(this).hasClass("compile_GC_QYDP_daohang_bian")) {
			$(this).removeClass("compile_GC_QYDP_daohang_bian");
		} else{
			$(this).addClass("compile_GC_QYDP_daohang_bian");
			$(this).siblings().removeClass("compile_GC_QYDP_daohang_bian");
		}
	})
	
	$(".compile_GC_QYDP_con").on("click",function(){
		mui.openWindow({
				url:"guangchang_anli_QYDP_SPXQ.html",
				id:"guangchang_anli_QYDP_SPXQ.html",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
	})
	
	
//	营销——广场——企业——安利——我要加盟
	$(".compile_GC_WYJM_ming").on("blur",function(){
		var name= /^[\u4e00-\u9fa5 ]{2,4}$/;
		if ($(this).val().length==0) {
			$(this).next().css("display","block");
		} else if(!name.test($(this).val())){
			$(this).next().next().css("display","block");
		}	
	})
	$(".compile_GC_WYJM_ming").on("focus",function(){
		$(this).next().css("display","none");
		$(this).next().next().css("display","none");
	})
	
	$(".compile_GC_WYJM_tel").on("blur",function(){
		var num=/^1[3578]\d{9}$/;
		if ($(this).val().length==0) {
			$(this).next().css("display","block");
		} else if(!num.test($(this).val())){
			$(this).next().next().css("display","block");
		}	
	})
	$(".compile_GC_WYJM_tel").on("focus",function(){
		$(this).next().css("display","none");
		$(this).next().next().css("display","none");
	})
	
	$(".compile_GC_WYJM_QQ").on("blur",function(){
		var qq=/^\d{5,10}$/;
		if ($(this).val().length==0) {
			$(this).next().css("display","block");
		} else if(!qq.test($(this).val())){
			$(this).next().next().css("display","block");
		}	
	})
	$(".compile_GC_WYJM_QQ").on("focus",function(){
		$(this).next().css("display","none");
		$(this).next().next().css("display","none");
	})
	
	$(".compile_GC_WYJM_jijiao").on("click",function(){
		if ($(".compile_GC_WYJM_ming").val().length==0) {
			$(".compile_GC_WYJM_ming").next().css("display","block");
		} else if($(".compile_GC_WYJM_tel").val().length==0){
			$(".compile_GC_WYJM_tel").next().css("display","block");
		}else if($(".compile_GC_WYJM_QQ").val().length==0){
			$(".compile_GC_WYJM_QQ").next().css("display","block");
		}else{
			mui.openWindow({
				url:"https://www.baidu.com/",
				id:"https://www.baidu.com/",
				styles:{
				top:'0',
				bottom:'0px',
				width:'100%',
				height:'100%'
				},
				extras:{
				
				},
				show:{
				autoShow:true,
				aniShow:'slide-in-left',
				duration:'500'
				},
				waiting:{
				autoShow:true,
				title:'正在加载...',
					options:{
					width:'waiting-dialog-widht',
					height:'waiting-dialog-height'
					}
				}
			}) 
		}
	})
	
	
	
	
	
	
	
	
})


