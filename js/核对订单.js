$(function(){
	delAdress();
	 upDoenAdress();
	 title();
	 ding();
});
//删除地址
function delAdress(){
	$('#delAddress').click(function(){
		$('.cover').css({display:'block'})
		$('.ac_btn_box>.close_btn').click(function(){
			$('.cover').css({display:'none'})
		})
		$('.ac_btn_box>.delpro').click(function(){
			$('.aderess').remove();
			$('.cover').css({display:'none'})
		});
	})
}
//地址
function upDoenAdress(){
//	$('.shr_more_address>span').toggle(function(){
//
//		$(this).html('收起地址')
//	},function(){
//
//		$(this).html('展开地址')
//	})
	$('.shr_more_address').click(function(){
		if($(this).children('span').html()=='展开地址'){
			$(this).children('span').html('收起地址')
		}else{
			$(this).children('span').html('展开地址')
		}
		
	})
}
function title(){
	$('#order_coupons>li').click(function(){
		$(this).addClass('select').siblings().removeClass('select')
		$('.tab_conbox_m').eq($(this).index()).addClass('select').siblings().removeClass('select')
		$(this).find('em').addClass('select').parent().siblings('li').find('em').removeClass('select')
	})
}
function ding(){
	$("#order_pay_btn").click(function(){
		$(".mas").css({display:'block'})
	});
	$(".close_btn ").click(function(){
		$(".mas").css({display:'none'})
	});
}
