//获取url中的参数
		    function getUrlParam(name) {
		        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		        if (r != null) return unescape(r[2]); return null; //返回参数值
		    }
			
			//获取cookie
			function getCookie(cookieName){  
			        var cookieValue="";  
			        if (document.cookie && document.cookie != '') {   
			            var cookies = document.cookie.split(';');  
			            for (var i = 0; i < cookies.length; i++) {   
			                 var cookie = cookies[i];
							 cname = cookie.split("=");
			                 if (cname[0] == cookieName) {  
			                       cookieValue = cname[1];   
			                       break;  
			                 }  
			             }  
			        }   
			        return cookieValue;  
			    }
				
				layui.use(['layer'], function() {
					var layer = layui.layer;
					$(document).ready(function(){
						var name = getUrlParam("name");
						if(name!=null&&name!=""){
							var code = getCookie(name);
							$("#name").html(name);
							if(code!=null&&code!=""){
								
							}else{
								
								  window.location = 'http://qiushile.top/EF/page/login.html';
								
								}
						}else{
							
							  window.location = 'http://qiushile.top/EF/page/login.html';
							
							}
					        
					    });
					});
				
				
				
				