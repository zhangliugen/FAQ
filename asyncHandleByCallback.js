//回调函数处理异步接口返回数据
function f(){
	var a;
	setTimeout(function(){
		a = 'hello';
	},1000);
	var b = 'world';
	console.log(a+b);
}
f();//调用返回 undefinedworld

//实现
function f(callback){
	var a;
	setTimeout(function(){
		a = 'hello';
		callback(hello);
	},1000);
	var b = 'world';
	console.log(a+b);
}