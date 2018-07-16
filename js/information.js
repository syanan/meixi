$(function(){
	update();
	del();
	save();
	tab();
	affirm();
	valid();
});

// 点击修改按钮
function update(){
	$('.update').click(function(){
		$(this).next('.save').children('span').eq(0).css({display:'inline-block'});
		$(this).css({display:'none'});
		// 去除readOnly属性
		$(this).prev('input').removeAttr('readOnly');
	});
}

// 点击取消按钮
function del(){
	$('.del').click(function(){
		$(this).parent().css({display:'none'});
		$(this).parent().parent().prev('a').css({display:'inline-block'});
		// 增加readOnly属性
		$(this).parent().parent().prev('a').prev('input').attr('readOnly','true');
		$(this).parent().next('span').css({display:'none'});
	});
	$('.del_one').click(function(){
		$('.tel').val('18363990818');
	});

	$('.del_two').click(function(){
		$('.mail').val('');
	});

}
// 点击保存验证按钮
function save(){
	// 手机号码验证
	$('.saveVelidate_one').click(function(){
		var vals=$('.tel').val();
		if(vals=='18363990818'){
			$(this).parent().next('span').css({display:'inline-block'});
		}else{
			if(/^[0-9]{11}$/.test(vals)){
				$('.vC').html($('.tel').val());
				$('.edit_one').css({display:'block'});	
			}else{
				$('.edit_three').css({display:'block'});
			}
		}
		
		
	});
	
	$('.btn_one').click(function(){
		$('.edit_one').css({display:'none'});

	});

	$('.btn_three').click(function(){
		$('.edit_three').css({display:'none'});
	});
	$('.edit_three .point_m a').click(function(){
		$('.edit_three').css({display:'none'});
	});
	// 邮箱验证
	$('.saveVelidate_two').click(function(){
		$('.email').html($('.mail').val());
		$('.edit_two').css({display:'block'});
	});
	$('.btn_two').click(function(){
		$('.edit_two').css({display:'none'});

	});
}

// 头部选项卡
function tab(){
	$('.inform_top>a').click(function(){

		$(this).css({'color':'#333','font-weight':'bold'});
		$(this).siblings().css({'color':'#666','font-weight':'normal'});

	});
	$('.tab_one').click(function(){
		$('.inform_m_one').css({display:'block'});
		$('.inform_m_two').css({display:'none'});
	});
	$('.tab_two').click(function(){
		$('.inform_m_two').css({display:'block'});
		$('.inform_m_one').css({display:'none'});
	});
}

// 点击确认按钮
function affirm(){
	$('.sbtn').click(function(){
		$('.edit_four').css({display:'block'});
	});
	$('.btn_four').click(function(){
		$('.edit_four').css({display:'none'});
	});
	$('.ok').click(function(){
		$('.edit_four').css({display:'none'});
	});
}

// 表单验证
function valid(){
	$('.origin').validate({
		rules:{
			origin:{
				required:true,
				rangelength:[5,23]

			},
			news:{
				required:true,
				rangelength:[5,23]
			},
			affirm:{
				required:true,
				rangelength:[5,23],
				equalTo:'#new'
			}
		},

		messages:{
			origin:{
				required:'*原始密码不能为空',
				rangelength:'*长度必须在{0}-{1}之间'
			},
			news:{
				required:'*密码不能为空',
				rangelength:'*长度必须在{0}-{1}之间'
			},
			affirm:{
				required:'*密码不能为空',
				rangelength:'*长度必须在{0}-{1}之间',
				equalTo:'*密码不一致'
			}
		}
	})
}