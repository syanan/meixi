$(function(){
	nav();
	bagOperation();
});
function nav(){

	
	$('.header-nav-title>li').hover(function(){
		$('.header_nav_sel').eq($(this).index()).addClass('select').siblings().removeClass('select');
	},function(){
		$('.header_nav_sel').eq($(this).index()).removeClass('select')
	})
	$('.header_nav_sel').hover(function(){
		$(this).addClass('select')
		$('.header-nav-title>li').eq($(this).index()).find('em').css({opacity:1})
		console.log($('.header-nav-title>li').eq($(this).index()).find('em'))
//		$('.header-nav-title>li').eq($(this).index()).addClass('select')
	},function(){
		$(this).removeClass('select')
		$('.header-nav-title>li').eq($(this).index()).find('em').css({display:'none'})
//		$('.header-nav-title>li>em').eq($(this).index()).removeClass('select')
	})
	
}

function bagOperation(){
	$('.headerCmlDel').click(function(){
		$(this).parent().remove();
		var qogNum=$('.headerCmt1').length;
		console.log(qogNum);
		$('.qog').html(1);
		if(qogNum==0){
			$('.qog').html(0);
			$('.headerBag-box').css({display:'none'})
			$('.shopBag-m').css({display:'block'})
			$('.shopBag-m').mouseout(function(){
				$('.shopBag-m').css({display:'none'})
			})
			$('.headerBag').hover(function(){
				$('.shopBag-m').css({display:'block'})
				
				
				
			},function(){
				$('.shopBag-m').css({display:'none'})
				
			})
			$('.shopBag-m').mouseover(function(){
				$(this).css({display:'block'})
			})
//			$('.shopBag-m').hover(function(){
//				$('.shopBag-m').css({display:'block'})
//			},function(){
//				$('.shopBag-m').css({display:'none'})
//				
//			})
		}
	});
//
	
}
