$(function(){
	$('.add').click(function(){
		var num=parseInt($('.num').val());
		var bnum=parseInt($('.ng-bindingOnly').html());
		var total=parseFloat(parseFloat($('.total').html()).toFixed(2));
//		console.log(total)
		var x=630.00;
		x=  parseFloat(parseFloat(x).toFixed(2));
//		console.log((x+total).toFixed(2))
		$('.num').val(num+1);
//		console.log(bnum)
		$('.ng-bindingOnly').html(bnum+1)
		$('.total').html((total+x).toFixed(2))
	});
	$('.reduce').click(function(){
		var num=parseInt($('.num').val());
		var bnum=parseInt($('.ng-bindingOnly').html());
		var total=parseFloat(parseFloat($('.total').html()).toFixed(2));
//		console.log(total)
		var x=630.00;
		x=  parseFloat(parseFloat(x).toFixed(2));
		if(num==1){
			return;
		}
		$('.num').val(num-1)
		if(bnum==1){
			return;
		}
		$('.ng-bindingOnly').html(bnum-1)
		
		$('.total').html((total-x).toFixed(2))
		
		
	});
	
	//删除商品
//	$('.cp_del').click(function(){
//		if(!confirm('真的要删除这件商品吗？')) return;
//			$(this).parent().parent().parent().parent().parent().parent().parent().remove();
//			$('.cart_none').css({display:"block"})
//	})
	$('.cp_del').click(function(){
		$('.cover').css({display:'block'})
		$('.close_btn').click(function(){
			$('.cover').css({display:'none'})
		})
		$('.delpro').click(function(){
			$('.cover').css({display:'none'})
			$('.cp_del').parent().parent().parent().parent().parent().parent().parent().remove();
			
			$('.cart_none').css({display:"block"})
			
		});
	});
	
	
	
//	if($('.cart_none').attr('display')=='block'){
//		alert(123)
//		
//	}
	
});
