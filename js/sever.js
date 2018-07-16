var tels=Mock.mock({
	'tels|10':[{
		"phone|+1":17868090890
	}]
}).tels;
Mock.mock('http://code.com',function(){
	var result=Mock.mock({'code':/^[a-zA-Z0-9]{4}$/}).code;
	return result;
});
Mock.mock('http://validatetel.com',function(options){
//	console.log(options);
	var tel=options.body.split('=')[1];
	for(var i=0;i<tels.length;i++){
		if(tels[i].phone==tel) return false;
	}
	return true;
});
Mock.mock('http://re.com',function(options){
	console.log(options);
	var tel=options.body.split('=')[1];
	tels.push(tel);
	return true;
});

