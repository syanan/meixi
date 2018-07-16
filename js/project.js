$(function(){
	listScreen();
	initConsult();
	initForm();
	order();
	// 用于窗口滑到一定距离就出现一个区域
	// $(window).scroll(function(){
	// 	var top=$(window).scrollTop();
	// 	console.log(top);
	// 	if(top>=900){
	// 		// alert(123);

	// 	}
	// })

});


// 左侧列表
function listScreen(){
	
	$('.listScreenItem_tit').click(function(){
		$(this).siblings().slideToggle();
		// $(this).parent().siblings().children('.listScreenItem_m').slideUp();

		// 加号减号的交换
		var nr=$(this).children('.top_r').html();
		nr=nr=='+'?'-':'+';
		$(this).children('.top_r').html(nr);

	});
	$('.sub_a').click(function(){
		$(this).siblings().toggle();
		$(this).children('em').toggleClass('lstLabed');
	});

	// 点商品分类里全部选择
	$('.ls_ft_ca_allsl>a').click(function(){
	 	$(this).find('em').toggleClass('lstCheck');
	 	var flag=$(this).find('em').hasClass('lstCheck');
	 	$(this).parent().nextAll('li').find('em').each(function(i,item){
	 		if(flag){
	 			$(item).addClass('lstCheck');
	 		}else{
	 			$(item).removeClass('lstCheck');
	 		}
	 	});
	 });

	$('.ca_item>a').click(function(){
		var length=$(this).parent().parent().find('li').length-1;
		$(this).find('em').toggleClass('lstCheck');
	 	if($(this).find('em')[0].className.indexOf('lstCheck')!=-1){
	 		//没选中到选中
	 		if($(this).parent().parent().find('li.ca_item>a>em.lstCheck').length==length)
	 			$('.ls_ft_ca_allsl>a>em').addClass('lstCheck');
	 	}else{
	 		$('.ls_ft_ca_allsl>a>em').removeClass('lstCheck');
	 	}
	 });

	// 点品牌与性别
	$('.ls_sidebar_s>li>a').click(function(){
	 	$(this).find('em').toggleClass('lstCheck');
	 });
	// 点颜色
	$('.colorBox>li>a').click(function(){
	 	$(this).find('em').toggleClass('lstCheck');
	 });

}

// 右侧商品排序栏
function order(){
	$('.proFilter_l').children('a').eq(1).click(function(){
		$('.arrow').css({display:'none'});
		$('.le').css({display:'none'});
	});
	$('.proFilter_l').children('a').eq(0).click(function(){
		$('.arrow').css({display:'none'});
		$('.le').css({display:'none'});
	});
	$('.proFilter_l').children('a').eq(2).click(function(){
		$('.arrow').css({display:'none'});
		$('.le').css({display:'inline-block'});
		$('.le').toggleClass('la');
	});
}


// 咨询栏返回顶部
function initConsult(){
	$('.return').click(function(){
		$('html,body').animate({scrollTop:0},200);
	});
}


// 表单验证
function initForm(){
	$('form').validate({
		errorPlacement:function(error,element){
			error.appendTo(element.parent());
		},
		rules:{
			price:'digits'
		},
		messages:{
			price:'*价格必须为整数'
		}
	});
}

