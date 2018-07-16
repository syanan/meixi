$(function(){
	edit();
});
// 遮盖层
function edit(){
	$('close_btn').click(function(){
		$('.edit').css({display:'block'});
	});
}