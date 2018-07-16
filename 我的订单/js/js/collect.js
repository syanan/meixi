// window.onload=function(){
// 	initTab();
// 	edit();
// };
$(function(){
	initTab();
	edit();
});
// 选项卡
function initTab(){
	$('.r_nav>li').click(function(){
		$(this).addClass('select').siblings().removeClass('select');
		$('.content>div').removeClass('select');
		$('.content>div').eq($(this).index()).addClass('select');
	});

	
}

// 遮盖层
function edit(){
	$('.close_btn_one').click(function(){
		$('.edit').css({'display':'block'});
	});
	$('.close_btn_two').click(function(){
		$('.edit').css({'display':'none'});
	});
	$('.a_btn1').click(function(){
		$('.edit').css({'display':'none'});
		$('.content>div>ul').remove();
		$('.content-three').css({'display':'block'});
	});
	$('.a_btn2').click(function(){
		$('.edit').css({'display':'none'});
	});
}