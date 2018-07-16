$(function(){
//	$('form').validate({
//		rules:{
//			account:{
//				required:true,
//				tel:true
//			},
//			pwd{
//				required:true,
//				
//			},
//			check{}
//		},
//		messages:{
//			account:
//			tel:
//		}
//	})
	$('.formBtn').click(function(){
		var text1=$('.text1').val();
		var pwd1=$('.pwd1').val();
		
		if(text1==''){
			$('#msg1').css({display:'block'});
//			if(pwd1==''){
//				
//			}
		}else if(text1!=17568090980){
			$('#msg1').css({display:'none'});
			$('#msg2').css({display:'block'});
			
		}else if(text1==17568090980&&pwd1==''){
			$('#msg2').css({display:'none'});
			$('#msg3').css({display:'block'});
		}else if(text1==17568090980&&pwd1!=1998131){
			$('#msg2').css({display:'none'});
			$('#msg3').css({display:'none'});
			$('#msg4').css({display:'block'});
		}else if(text1==17568090980&&pwd1==1998131){
			$('#msg4').css({display:'none'});
			window.location.href='首页.html';
		}
		
	});
	
});
