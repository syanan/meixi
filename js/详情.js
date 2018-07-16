 $(function(){
	
	//回到顶部
	bToTop();
	//图片切换
	changeImg();
	//尺码选择
	sizeCheck();
	//商品信息
	mea();
	//其他
	 other();
	 $('.addBag').click(function(){
	 	window.location.href='购物车.html'
	 });
});
//图片切换
function changeImg(){
	$('.list-edit').mouseover(function(){
		$(this).addClass('select').siblings().removeClass('select')
		var imgSrc=$(this).find('img').attr('src');
		$('.img-pro>img').attr('src',imgSrc);
	});
}

//回到顶部 
function bToTop(){
	$('.consultTop').click(function(){
		 $("html,body").animate({scrollTop:0}, 500);
	});
}
//尺码选择
function sizeCheck(){
	$('.sizex>li').click(function(){
		$(this).addClass('select').siblings().removeClass('select')
	});
}
//商品信息栏
function mea(){
	var w=$(window).height();
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		console.log(top)
		if(top>=960){
			$('.pro-tab-m').css({position:'fixed',top:0,left:'112px'});
			$('#pro-tab-bag').css({display:'block'})
			$('#pro-tab-buy').css({display:'block'})
		}else{
			$('.pro-tab-m').css({position:'absolute',left:0});
			$('#pro-tab-bag').css({display:'none'})
			$('#pro-tab-buy').css({display:'none'})
		}
		
	});
}
function other(){
	$('.changeb').click(function(){
		$(this).addClass('select').siblings().removeClass('select');
	});
	$('.top1291').click(function(){
		 $("html,body").animate({scrollTop:1291},100);
		
	});
	$("#pro-tab-bag").click(function(){
		$("html,body").animate({scrollTop:0}, 400);
	});
}
	
	
	
	