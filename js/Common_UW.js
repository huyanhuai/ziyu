/*
 * this is Uncanny Workmanship js first version.
 * this frame is used for daily operator what is tedious.
 * uncanny workmanship v.1.0
 * writer by me.
 */
console.log('\nUncanny Workmanship V 1.0\n\nDeveloper Test Page\n\n');  
if(!document.getElementsByClassName){  
	document.getElementsByClassName = function(className, element){  
			var children = (element || document).getElementsByTagName('*');  
			var elements = new Array();  
			for (var i=0; i<children.length; i++){  
					var child = children[i];  
					var classNames = child.className.split(' ');  
					for (var j=0; j<classNames.length; j++){  
							if (classNames[j] == className){   
									elements.push(child);  
									break;  
							}  
					}  
			}   
			return elements;  
	};  
} 
//dom选择器
function $(symbol,parent) {
	return (/\./).test(symbol)?
		function(){
			var isClass = symbol.split('.'),
					Class = (parent||document).getElementsByClassName(isClass[1]);
			return Class;
		}():
	(/#/).test(symbol)?
		function(){
			var isId = symbol.split('#');
			return (parent||document).getElementById(isId[1]);
		}():
	(/\@/).test(symbol)?
		function(){
			var isClass = symbol.split('@');
			return (parent||document).querySelector('.'+isClass[1]);
		}():
		function(){
			return (parent||document).getElementsByTagName(symbol);
		}();
};
//verification all kinds of input type.
var Justicar = {
	'IDCard':function(Str){
		var Iso7064 = (12-((Str[0]*7+Str[1]*9+Str[2]*10+Str[3]*5+Str[4]*8+Str[5]*4+Str[6]*2+Str[7]*1+Str[8]*6+Str[9]*3+Str[10]*7+Str[11]*9+Str[12]*10+Str[13]*5+Str[14]*8+Str[15]*4+Str[16]*2)%11))%11;
		return /^[0-9]{17}(\d|X|x)$/.test(Str) ? function(){
			return Iso7064 == 10 ? function(){
				return /\x/i.test(Str[17]);
			}():function(){
				return Str[17] == Iso7064 ? true : false;
			}()
		}():false;
	},
	'PhoneNumber':function(Str){
		return /^1(3|4|5|8){1}\d{9}$/.test(Str);
	},
	'Email':function(Str){
		return /^(\d|\w)+(@[1-9a-zA-Z]+\.[a-z]{2,6})$/.test(Str);
	}
};
//ajax
function AsyncJX(Courier){
	function GetValue(Courier){
		return typeof Courier == 'object' ? function(){
			var Sugar = '....';
			return Courier.Value.length == Courier.Key.length ? function(){
				for(var i = 0; i < Courier.Key.length+1; i++){
					var KVP = Courier.Key.pop() +'='+ Courier.Value.pop();
					Sugar += '&'.concat(KVP);
				};
				return Sugar.replace(/....&/,'');
			}(): Dialog({Message:'数据错误'});
		}() : Courier;
	};
	try{
		var Ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	}catch(Courier){
		Dialog({Message:Courier});
	};
	Courier.Method == 'get' ? Ajax.open(Courier.Method,Courier.Url+'?'+GetValue(Courier.Value)):(function(){
		Ajax.open(Courier.Method,Courier.Url);
		Ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
	})();
	Ajax.onreadystatechange = function(){
		Ajax.readyState == 4 && Ajax.status == 200 ? function(){
			var ResponseValue = Ajax.responseText || Ajax.responseXML;
			return Courier.RightExecutor ? Courier.RightExecutor(ResponseValue) : true;
		}():function(){
			return Courier.ErrorExecutor ? Courier.ErrorExecutor() : false;
		}();
	};
	Courier.Method == 'get' ? Ajax.send(null) : Ajax.send(GetValue(Courier.Value));
};
//time reporter.
function TimeReporter(v_elem){
	var v_time,
		v_dt = new Date(),
		v_d = v_dt.getDate(),
		v_h = v_dt.getHours(),
		v_m = v_dt.getMonth()+1,
		v_s = v_dt.getSeconds(),
		v_y = v_dt.getFullYear(),
		v_mi = v_dt.getMinutes();
	v_h <= 12?v_time = strCode(19978,21320,22909,33)+'&nbsp;&#62;&#62;':
	v_h <= 18?v_time = strCode(19979,21320,22909,33)+'&nbsp;'+strCode(29616,22312,26159,20013,22269,26102,38388)+'&#62;&#62;':
	v_time = strCode(26202,19978,22909,33)+'&nbsp;'+strCode(29616,22312,26159,20013,22269,26102,38388)+'&#62;&#62;';
	v_m <= 9?v_m = '0'+v_m:v_m;v_d <= 9?v_d = '0'+v_d:v_d;v_h<10?v_h = '0'+v_h:v_h;v_mi<10?v_mi = '0'+v_mi:v_mi;v_s<10?v_s = '0'+v_s:v_s;
	v_elem.innerHTML = v_time+'&nbsp;'+v_y+'-'+v_m+'-'+v_d+'-'+v_h+'-'+v_mi+'-'+v_s;
};
//entity character exchanger.
function StrCodeLoop(v_attr){
	var a_box = [],
			i = 0;
	for (; i < v_attr.length; i++) {
		a_box.push(v_attr.charCodeAt(i));
	}
	return a_box;
};
//消息提示框函数开始边界
//此函数接收样式参数传入参数无需特定顺序
function Dialog(Courier){
	var BigDiv = document.createElement('div');
	var Div = document.createElement('div'),
			Style = Div.style,
			Disapper = function(){
				document.body.removeChild(BigDiv);
        $('@DBMS_body').removeAttribute('style');
			};
	BigDiv.appendChild(Div);
	BigDiv.style.height = '1200px';
	BigDiv.style.position = 'absolute';
	BigDiv.style.top = '70px';
	BigDiv.style.zIndex = '100px';
	Style.position = 'fixed';
  Style.height = '200px';
  Style.width = '300px';
  Style.top = (window.innerHeight-300)/2+'px';
	Style.left = (window.innerWidth-200)/2+'px';
	Style.backgroundColor = '#1f262e';
	Style.color = 'white';
	Style.fontSize = '21px';
	Style.zIndex = '666px';
	Style.boxShadow = '0 0 20px 0 black';
	Courier.Model && Courier.Model == 'Confirm' ? function(){
		document.body.appendChild(Div);
		Div.innerHTML = '<p style="margin-top:20%;">'+(Courier.Message||'未知错误')+'</p><p style="margin-top:5%;">Tips：点击关闭提示框</p>';
	}:function(){
    Courier.Background && function(){
			Courier.Background.style.filter = 'blur(3px)';
			Courier.Background.style.filter = 'progid:DXImageTransform.Microsoft.Blur()';
		}();
		document.body.appendChild(BigDiv);
		Courier.Type && Courier.Type == 'img' ?
			Div.innerHTML =	'<img src="'+Courier.Path+'"/>' : Div.innerHTML = '<p style="margin-top:20%;">'+(Courier.Message||'未知错误')+'</p><p style="margin-top:5%;">Tips：点击关闭提示框</p>';
	}();
	Div.onclick = Disapper;
};
//城市选择函数
	function CitySelector(ACourier,BCourier,CCourier){
		if(arguments[3] == 'head'){
		var StatusReporter = new Promise(function(resolve,reject){
			var ACtor,BCtor;
			var OptionText = '<option>请选择</option>';;
			for(var i = 0; i < provinceList.length; i++){
					(function(i){
							Add(ACourier,provinceList[i]);
					})(i);
			};
			function Add(Father,Brother){
					var Child = document.createElement('option'),
							Name = Brother.name||Brother;
					Child.value = Name;
					Child.innerText = Name;
					Father.appendChild(Child);
			};
			ACourier.addEventListener("change",function(){
				BCourier.innerHTML = OptionText;
				//CCourier.innerHTML = OptionText;
				var Text = this.value;
				for (var i = 0; i < provinceList.length; i++) {
						(function(){
								if(Text == provinceList[i].name){
										ACtor = provinceList[i];
									};
						})(i);
				};
				for (var i = 0; i < ACtor.cityList.length; i++) {
						(function(i){
								Add(BCourier,ACtor.cityList[i]);
						})(i)
				};
			});
			BCourier.addEventListener("change",function(){
				resolve();
				var Text= this.value;
				for (var i = 0; i < ACtor.cityList.length; i++) {
					(function(){
							if(Text == ACtor.cityList[i].name){
									BCtor = ACtor.cityList[i];
							};
					})(i);
				};
				/*for (var i = 0; i < BCtor.areaList.length; i++) {
					(function(i){
							OtherAdd(CCourier,BCtor.areaList[i],i);
					})(i);
				};*/
			});
		});
		return StatusReporter;
	}else if(arguments[3] == 'town'){
		for (var i = 0; i < provinceList.length; i++) {
			if (provinceList[i].name == ACourier) {
				var Now = provinceList[i].cityList;
				for(var j = 0; j < Now.length; j++){
					if (Now[j].name == BCourier) {
						var NowName = Now[j].areaList;
						for(var k = 0; k < NowName.length; k++){
							var Child = document.createElement('div'),
									name = NowName[k],
									q = 'town'+k;
							Child.value = name;
							Child.innerHTML = '<label for='+'"'+q+'"'+'>'+name+'</label><input name="product_deptRegion"'+'id='+'"'+q+'"'+'value='+'"'+name+'"'+'type="checkbox" />';
							CCourier && CCourier.appendChild(Child);
						}
					}
				}
			}
		};
		}else{
			for (var v = 0; v < CCourier.length; v++) {
			var x = 'nation'+v
			var Child = document.createElement('div');
			Child.value = CCourier[v];
			Child.innerHTML = '<label for='+'"'+x+'"'+'>'+CCourier[v]+'</label><input name="product_nation"'+'id='+'"'+x+'"'+'value='+'"'+CCourier[v]+'"'+'type="checkbox" />';
			ACourier.appendChild(Child);
			};
		};
	};

//MD5
function MD5(Str){
	var hexcase = 0;
	var b64pad  = "";
	var chrsz   = 8;
	function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));};
	function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));};
	function hex_hmac_md5(key, data){ return binl2hex(core_hmac_md5(key, data));};
	function b64_hmac_md5(key, data){ return binl2b64(core_hmac_md5(key, data));};
	function calcMD5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));};
	function md5_vm_test(){
		return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
	};
	function core_md5(x, len){
		x[len >> 5] |= 0x80 << ((len) % 32);
		x[(((len + 64) >>> 9) << 4) + 14] = len;
		var a =  1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d =  271733878;
		for(var i = 0; i < x.length; i += 16){
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;
			a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
			d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
			c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
			b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
			a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
			d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
			c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
			b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
			a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
			d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
			c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
			b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
			a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
			d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
			c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
			b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
			a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
			d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
			c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
			b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
			a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
			d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
			c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
			b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
			a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
			d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
			c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
			b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
			a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
			d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
			c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
			b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
			a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
			d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
			c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
			b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
			a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
			d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
			c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
			b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
			a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
			d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
			c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
			b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
			a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
			d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
			c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
			b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
			a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
			d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
			c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
			b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
			a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
			d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
			c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
			b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
			a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
			d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
			c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
			b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
			a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
			d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
			c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
			b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
			a = safe_add(a, olda);
			b = safe_add(b, oldb);
			c = safe_add(c, oldc);
			d = safe_add(d, oldd);
		};
		return Array(a, b, c, d);
	};
	function md5_cmn(q, a, b, x, s, t){
		return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	};
	function md5_ff(a, b, c, d, x, s, t){
		return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	};
	function md5_gg(a, b, c, d, x, s, t){
		return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	};
	function md5_hh(a, b, c, d, x, s, t){
		return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	};
	function md5_ii(a, b, c, d, x, s, t){
		return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	};
	function core_hmac_md5(key, data){
		var bkey = str2binl(key);
		if(bkey.length > 16){
			bkey = core_md5(bkey, key.length * chrsz);
		};
		var ipad = Array(16), opad = Array(16);
		for(var i = 0; i < 16; i++){
			ipad[i] = bkey[i] ^ 0x36363636;
			opad[i] = bkey[i] ^ 0x5C5C5C5C;
		};
		var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
		 return core_md5(opad.concat(hash), 512 + 128);
	};
	function safe_add(x, y){
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	};
	function bit_rol(num, cnt){
	  return (num << cnt) | (num >>> (32 - cnt));
	};
	function str2binl(str){
	  var bin = Array();
	  var mask = (1 << chrsz) - 1;
	  for(var i = 0; i < str.length * chrsz; i += chrsz){
	    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
	  }
	  return bin;
	};
	function binl2hex(binarray){
	  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	  var str = "";
	  for(var i = 0; i < binarray.length * 4; i++){
	    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
	  }
	  return str;
	};
	function binl2b64(binarray){
	  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	  var str = "";
	  for(var i = 0; i < binarray.length * 4; i += 3){
	    var triplet = (((binarray[i>>2]>> 8*( i%4)) & 0xFF) << 16)|(((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )|((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
		  for(var j = 0;j<4;j++){
		    if(i*8+j*6>binarray.length*32){
		      str += b64pad;
		    }else{
		      str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
		    };
		  };
		  return str;
		};
	};
	if(Str){
		return hex_md5(Str);
	};
};