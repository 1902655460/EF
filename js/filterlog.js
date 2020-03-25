//判断是否在iframe中
		if(self!=top){
			//parent.window.location.replace(window.location.href);
			//alert(window.location.toString());
		}else{
			alert('非法访问!')
			    window.location = 'http://qiushile.top/EF/index.html';
		}