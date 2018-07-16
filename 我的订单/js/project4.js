$(function(){
	// 订单右边头部点击事件
	topNav();
});
function topNav(){
	$('.order_top>ul>li>a').click(function(){
		$(this).parent().children('em').addClass('em_clicked');
		$(this).parent().siblings().children('em').removeClass('em_clicked');
		$(this).css({fontWeight:'bold'});
		$(this).parent().siblings().children('a').css({fontWeight:'normal'});
		// $(this).next('em').addClass('em_clicked');
	});
	$('.navdel').click(function(){
		$('.order_m').css({display:'none'});
		$('.order_hid').css({display:'block'});
	});
	$('.navshow').click(function(){
		$('.order_m').css({display:'block'});
		$('.order_hid').css({display:'none'});
	});
}
