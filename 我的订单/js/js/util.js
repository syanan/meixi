function byId(id){
	return document.getElementById(id);
}
function byTag(tag,father){
	if(typeof father=='undefined'){
		return document.getElementsByTagName(tag);
	}else{
		return father.getElementsByTagName(tag);
	}
}
function byName(name){
	return document.getElementsByName(name);
}
function byClass(cls,father){
	if(typeof father=='undefined'){
		return document.getElementsByClassName(cls);
	}else{
		return father.getElementsByClassName(cls);
	}
}
//返回的是一个数组(获取一个节点的所有儿子节点)
function getChildren(father){
	var children=father.childNodes;
	var result=[];
	for(var i=0;i<children.length;i++){
		if(children[i].nodeType==1) 
			result[result.length]=children[i];
	}
	return result;
}
//给dom节点加一个指定的class值,如果有什么也不做
function addClass(node,className){
	if(node.className.indexOf(className)==-1)
		node.className+=
			node.className.length==0
			?className
			:' '+className;
}
function removeClass(node,className){
	node.className=node.className.replace(className,'');
	node.className=node.className.replace(/\s+/g,' ');
}