//全局变量
function GetFile(Courier){
	var Url = location.href;
	var FileFitst = Url.lastIndexOf('/')+1;
	var FileLast = Url.length;
	var OldName = Url.substring(FileFitst,FileLast);
	location.href = Url.replace(OldName,Courier);
}
var Status = 0;
var DBMS_disArea = document.querySelector('.DBMS_disArea');

function show1(){
	var AreaSelect = $('@module_select');
	var AreaName = $('@module_select--title');
	if(AreaName != null){
		var Town = $('input',AreaSelect);
		for (var i = 0; i < Town.length; i++) {
			if(Town[i].checked){
				AreaName.innerText = AreaName.innerText.replace('请选择','已选择>>')
				AreaName.innerText += Town[i].value;
			}
		};
	}
}
function show2(){
	var NationSelect = $('@module_nation');
	var NationName = $('@module_nation--title');
	if(NationName != null){
		var Nation = $('input',NationSelect);
		for (var i = 0; i < Nation.length; i++) {
			if(Nation[i].checked){
				NationName.innerText = NationName.innerText.replace('请选择','已选择>>')
				NationName.innerText += Nation[i].value;
			}
		};
	}
}
function show3(list,name){
	if(name != null){
		for(var i = 0; i<list.length; i++){
			if(list[i].checked){
				name.innerText = name.innerText.replace('请选择','已选择>>')
				name.innerText += list[i].value;
			}
		}
	}	
}
// 投保公司限制
var InsureSelect2 = document.getElementById("module_insure_two");
var InsureName2 = document.getElementsByClassName("module_insure2--title")[0];
var InsureBox2= $('input',InsureSelect2);

var InsureTypeName2 = document.getElementsByClassName("module_type2--title")[0];
var TypeSelect2 = document.getElementById("insure_type_two");
var TypeBox2 = $('input',TypeSelect2);
//投保公司限制
var InsureName = document.getElementsByClassName("module_insure--title")[0];
var InsureSelect = document.getElementById("module_insure");
var InsureBox= $('input',InsureSelect);
//限制保险类型
var InsureTypeName = document.getElementsByClassName("module_type--title")[0];
var TypeSelect = document.getElementById("insure_type");
var TypeBox = $('input',TypeSelect);
//限制缴费方式
var InsurePayName = document.getElementsByClassName("module_pay--title")[0];
var PaySelect = document.getElementById("insure_pay");
var PayBox = $('input',PaySelect);
//行业限制
var IndustryName = document.getElementsByClassName("module_industry--title")[0];
var IndustrySelect = document.getElementById("industry");
var industry = $('input',IndustrySelect);
//学历
var EducationName = document.getElementsByClassName("module_education--title")[0];
var EducationSelect = document.getElementById("education");
var education = $('input',EducationSelect);
// 职位
var PositionName = document.getElementsByClassName("module_position--title")[0];
var PositionSelect = document.getElementById("position");
var position = $('input',PositionSelect);
//限制收租
var RentsName = document.getElementsByClassName("module_rents--title")[0];
var RentsSelect = document.getElementById("rents");
var rents = $('input',RentsSelect);
//房屋性质
var HouseName = document.getElementsByClassName("module_house--title")[0];
var HouseSelect = document.getElementById("house");
var house = $('input',HouseSelect);
//土地性质
var SoilName = document.getElementsByClassName("module_soil--title")[0];
var SoilSelect = document.getElementById("soil");
var soil = $('input',SoilSelect);
//车牌
var plate = document.getElementsByClassName("plate-title")[0];
var PlateList = document.getElementById("plate");
var plateInput = $('input',PlateList);
//车辆类型
var VehicleName = document.getElementsByClassName("module_vehicle--title")[0];
var VehicleSelect = document.getElementById("vehicle");
var VehicleInput = $('input',VehicleSelect);
//车辆所有人要求
var OwnerName = document.getElementsByClassName("module_owner--title")[0];
var OwnerSelect = document.getElementById("owner");
var OwnerInput = $('input',OwnerSelect);
//点击事件开始边界
window.onload = function(){
	var Button = $('button',$('@DBMS_funcArea'));
	var LogInOrOut = $('button',$('@DBMS_header'));
	var DbmsBody = $('@DBMS_body');
	var LocationSessioin = localStorage;
	var Prov = $('#province'),
		City = $('#city'),
		Town = $('#town');
	if(LocationSessioin.length == 0 || LocationSessioin.length == null){
		Dialog({
			Background:DbmsBody,
			Message:'请选择你的位置'
		});
		CitySelector(Prov,City,Town,'head')
			.then(
			function(){
				var ProvName = Prov.value,
					CityName = City.value;
				LocationSessioin.setItem('A',ProvName)+'-'+LocationSessioin.setItem('B',CityName);
				Status = 1;
				location.reload();
			}
		);
	}else{
		Status = 1;
		var editer;
		var zhe = document.getElementById("zhe");
		var wen = document.getElementById("wen");
		if(wen != null && localStorage.length >0 && wen.value != LocationSessioin.getItem('B')){
			// LocationSessioin.setItem('A',document.getElementById("zhe").value);
			// LocationSessioin.setItem('B',document.getElementById("wen").value);
			CitySelector(LocationSessioin.getItem('A'),LocationSessioin.getItem('B'),Town,'town');
			$('@DBMS_header--select').innerHTML = 
			'<span>'+
				'<p>'+'<i class="fa fa-location-arrow">'+'</i>'+'当前城市'+'</p>'+
			 '</span>'+
			 '<span>'+
					'<ul>'+
						'<li>'+zhe.value+'</li>'
					+'<li>'+wen.value+'</li>'
					+'<li>'+'<input class="select_editer" type="button" value="修改" />'+'</li>'
				+'</ul>'+
				'</span>';
			editer = $('@select_editer');
		}else if(document.getElementsByClassName("select_editer")[0] == null){
			CitySelector(LocationSessioin.getItem('A'),LocationSessioin.getItem('B'),Town,'town');
			$('@DBMS_header--select').innerHTML = 
			'<span>'+
				'<p>'+'<i class="fa fa-location-arrow">'+'</i>'+'当前城市'+'</p>'+
			 '</span>'+
			 '<span>'+
					'<ul>'+
						'<li>'+LocationSessioin.getItem('A')+'</li>'
					+'<li>'+LocationSessioin.getItem('B')+'</li>'
					+'<li>'+'<input class="select_editer" type="button" value="修改" />'+'</li>'
				+'</ul>'+
				'</span>';
			editer = $('@select_editer');
		}
		editer.onclick = function(){
			localStorage.clear();
			location.reload();
		};
	};
	if(LocationSessioin.length > 0 && document.getElementById("CityName") != null){
	   document.getElementById("CityName").value = LocationSessioin.getItem('B');
	   document.getElementById("ProvName").value = LocationSessioin.getItem('A');
	};
	for (var i = 0; i < Button.length; i++) {
		(function(i){
			Button[i].id == 'loan' ? Button[i].onclick = function(){
				location.href = '1.html';
			} : function(){
				if (Button[i].id !== 'productManage') {
					Button[i].onclick = function(){
						Dialog({
							Message:'此功能未开通！',
							Background:DbmsBody
						});
					};
				};
			Button[i].id == 'refundManage' ? Button[i].onclick = function(){location.href = 'Client_Product_Refund.html';} :
			Button[i].id == 'loanAudit' ? Button[i].onclick = function(){location.href = 'Client_Product_Audit.html';} :
			Button[i].id == 'addAccount' ? Button[i].onclick = function(){location.href = 'Client_Product_ID.html';} : false;
			}();
		})(i);
	};
	LogInOrOut[0].onclick = function(){
		location.href = 'http://192.168.0.188/daikuan2/signOut.do';
	};
	LogInOrOut[1].onclick = function(){
		location.href = 'http://192.168.0.188/daikuan2/Home_Page.jsp';
	};
	show1();
	show2();
	show3(industry,IndustryName);
	if(EducationName != null || PositionName != null){
		show3(education,EducationName);
		show3(position,PositionName)
	}
	if(InsureName != null){
		show3(InsureBox,InsureName);
		show3(InsureBox2,InsureName2);
		show3(TypeBox,InsureTypeName);
		show3(PayBox,InsurePayName);
		show3(TypeBox2,InsureTypeName2);
	}
	RentsName != null ? show3(rents,RentsName): false;
	show3(house,HouseName);
	show3(soil,SoilName);
	show3(VehicleInput,VehicleName);
	show3(OwnerInput,OwnerName);
};

var AreaStatus = 0;
// 产品发布	
$('@product--warp') && function(Courier){
	var Business = $('@require_businessLicense');
	var AreaSelect = $('@module_select');
	var AreaName = $('@module_select--title');
	var NationSelect = $('@module_nation');
	var NationName = $('@module_nation--title');
	var DbmsBody = $('@DBMS_body');
	var AreaStatus = 0;
	var NationStatus = 0;
	CitySelector(NationSelect,NationName,nationList,'nation');
	var x = $('@require_registerTime');
	if(Business != null){
	Business.value == 0 ? function(){
		x.style.display ='none';
		Business.addEventListener('change',function(){
			if (this.value == 0) {
				x.style.display ='none';
			}else{
				x.style.display ='inline-block';
			}
		})
	}(): function(){
		x.style.display ='inline-block';
		Business.addEventListener('change',function(){
			if (this.value == 0) {
				x.style.display ='none';
			}else{
				x.style.display ='inline-block';
			}
		})
	}() 
}

	var insurance = ["中国人寿","平安人寿","太保人寿","和谐健康人寿","人保寿险","富德生命人寿","新华人寿","安邦人寿","太平人寿","泰康人寿",
		"建信人寿","华夏人寿","阳光人寿","工银安盛人寿","中邮人寿","天安人寿","人保健康人寿","国华人寿","农银人寿","合众人寿","前海人寿",
		"百年人寿","幸福人寿","平安养老保险","珠江人寿","上海人寿","友邦保险","利安人寿","民生人寿","交银康联人寿","招商信诺人寿","中意人寿",
		"国寿存续保险","长城人寿","渤海人寿","信诚人寿","中美联泰大都会人寿","中英人寿","恒大人寿","中宏人寿","君康人寿","太平养老人寿","泰康养老人寿",
		"光大永明人寿","吉祥人寿","华泰人寿","中银三星人寿","中德安联人寿","中荷人寿","信泰人寿","英大人寿","长生人寿","国联人寿","同方全球人寿",
		"恒安标准人寿","弘康人寿","北大方正人寿","华汇人寿","汇丰人寿","东吴人寿","平安健康人寿","陆家嘴国泰人寿","君龙人寿","中韩人寿",
		"瑞泰人寿","昆仑健康人寿","德华安顾人寿","新光海航人寿","复星保德信人寿","中法人寿","太保安联健康人寿","中华人寿","中融人寿","安邦养老人寿",
		"国寿养老人寿","长江养老人寿"];
	InsureSelect != null ? insure(InsureSelect,'insure_name'): false;
	function insure(obj,name){
		for (var v = 0; v < insurance.length; v++) {
			var Child = document.createElement('div');
			Child.value = insurance[v];
			Child.innerHTML = '<label for='+'"'+x+'"'+' title='+'"'+insurance[v]+'"'+''+'>'+insurance[v]+'</label><input name='+'"'+name+'"'+''+'value='+'"'+insurance[v]+'"'+'type="checkbox" checked/>';
			obj.appendChild(Child);
			};
	}
// lisBox(plate,PlateList,plateInput);
    lisBox(InsureName,InsureSelect,InsureBox);

    InsureSelect2 != null ? insure(InsureSelect2,'insure_name2'): false;
    lisBox(InsureName2,InsureSelect2,InsureBox2);

    lisBox(InsureTypeName2,TypeSelect2,TypeBox2);

	lisBox(InsureTypeName,TypeSelect,TypeBox);

	lisBox(InsurePayName,PaySelect,PayBox);

	lisBox(IndustryName,IndustrySelect,industry);

	lisBox(EducationName,EducationSelect,education);

	lisBox(PositionName,PositionSelect,position);

	lisBox(RentsName,RentsSelect,rents);

	lisBox(OwnerName,OwnerSelect,OwnerInput);

	lisBox2(VehicleName,VehicleSelect,VehicleInput);

	lisBox2(HouseName,HouseSelect,house);

	lisBox2(SoilName,SoilSelect,soil);

	function lisBox(name,select,box,list){
	  if(name != null){
		name.onclick = function(){
			select.style.display = 'block';
			for(var i = 0; i<box.length; i++){
				if(!AreaStatus){
					box[i].setAttribute('data-status','on');
				};
				(function(i){
					box[i].onclick = function(){
						AreaStatus = 1;
						if (name.innerText.length == 3) {
							name.innerText = name.innerText.replace('请选择','已选择>>')
						};
						if(box[i].checked){
							box[i].setAttribute('data-status','off');
							name.innerText += this.value;
						}else{
							var text = name.innerText;
							box[i].setAttribute('data-status','on');
								name.innerText = [].join.call(text.split(this.value),'');
						};
					};
				})(i);
			}
			name.onmouseleave = function(){
			if (name.innerText.length == 5){
				name.innerText = ('请选择');
			};
			select.style.display = 'none';
			}
			select.onmouseenter = function(){
			select.style.display = 'block';
			}
			select.onmouseleave = function(){
			if (name.innerText.length == 5){
				name.innerText = ('请选择');
			};
			select.style.display = 'none';
			};
		}
	  }
	}
	function lisBox2(name,select,box,list){
		if(name != null){
		  name.onclick = function(){
			  select.style.display = 'block';
			  for(var i = 1; i<box.length; i++){
				  if(!AreaStatus){
					  box[i].setAttribute('data-status','on');
				  };
				  (function(i){
					  box[i].onclick = function(){
						  AreaStatus = 1;
						  if (name.innerText.length == 3) {
							  name.innerText = name.innerText.replace('请选择','已选择>>')
						  };
						  if(box[i].checked){
							  // if(name.innerText.length == 5){
							  // 	InsureBox[i].setAttribute('data-status','off');
							  // 	name.innerText += this.value;
							  // }else{
							  // 	InsureBox[i].setAttribute('data-status','off');
							  // 	name.innerText += "," + this.value;
							  // }
							  box[i].setAttribute('data-status','off');
							  name.innerText += this.value;
						  }else{
							  var text = name.innerText;
							  box[i].setAttribute('data-status','on');
							  // if(this.value == name.innerText.substring(name.innerText.lastIndexOf("\,") + 1,name.innerText.length)){
							  // 	name.innerText = [].join.call(text.split("," + this.value),'');
							  // }else{
							  // 	name.innerText = [].join.call(text.split(this.value + ","),'');
							  // }
							  // if(this.value == name.innerText.substring(name.innerText.lastIndexOf("\>") + 1,name.innerText.length)){
								  name.innerText = [].join.call(text.split(this.value),'');
							  // }
						  };
					  };
				  })(i);
			  }
			  box[0].onclick = function(){
				  if(box[0].checked){
				  for(var i=0;i<box.length;i++){
					 if(box[i].checked == false){
					  box[i].checked = true;
					  name.innerText = name.innerText.replace('请选择','已选择>>');
					  name.innerText +=  box[i].value;
					}
				  } 
				 }else{
				  for(var j=0;j<box.length;j++){
					  box[j].checked = false;
					  var text = name.innerText;
				  //   name.innerText = [].join.call(text.split(box[j].value),'');
					  name.innerText = '请选择';
					}
				 }
			}
				 name.onmouseleave = function(){
					if (name.innerText.length == 5){
						name.innerText = ('请选择');
					};
					select.style.display = 'none';
				 }
				 select.onmouseenter = function(){
					select.style.display = 'block';
				 }
				 select.onmouseleave = function(){
					if (name.innerText.length == 5){
						name.innerText = ('请选择');
					};
					select.style.display = 'none';
			    };
		  }
		}
	  }
	var InsureRequest = document.getElementsByClassName("insure_request")[0];
	var request = document.getElementsByClassName("request");
	showHide(InsureRequest,request);
	var TypeRequest = document.getElementsByClassName("type_request")[0];
	var TypeTime = document.getElementsByClassName("type_time");
	showHide(TypeRequest,TypeTime);
	var SocialSecurity = document.getElementsByClassName("social_security")[0];
	var social = document.getElementsByClassName("social");
	var ProvidentFund = document.getElementsByClassName("provident_fund")[0];
	var provident = document.getElementsByClassName("provident");
	showHide(SocialSecurity,social);
	showHide(ProvidentFund,provident);
	var UsedCar = document.getElementsByClassName("used_car")[0];
	var UsedCarList = document.getElementsByClassName("used_car_list");
	showHide(UsedCar,UsedCarList);

	var WholeCar = document.getElementsByClassName("whole-car")[0];
	var WholeCarList = document.getElementsByClassName("whole-car-1");
	showHide(WholeCar,WholeCarList);
	var AnjieCar = document.getElementsByClassName("AnjieCar")[0];
	var AnjieCarList = document.getElementsByClassName("AnjieCar-1");
	showHide(AnjieCar,AnjieCarList);

	var MortgageCar = document.getElementsByClassName("mortgage-car")[0];
	var MortgageCarList = document.getElementsByClassName("mortgage-car-1");
	showHide(MortgageCar,MortgageCarList);
	function showHide(obj1,obj2){
		if(obj1 != null){
			obj1.value == 0 ? function(){
				obj2[0].style.display ='none';
				obj2[1].style.display ='none';
				obj1.addEventListener('change',function(){
					if (this.value == 0) {
						obj2[0].style.display ='none';
						obj2[1].style.display ='none';
					}else{
						obj2[0].style.display ='inline-block';
						obj2[1].style.display ='inline-block';
						console.log(obj2[1].style.display);
					}
				})
			}(): function(){
				obj2[0].style.display ='inline-block';
				obj2[1].style.display ='inline-block';
				obj1.addEventListener('change',function(){
					if (this.value == 0) {
						obj2[0].style.display ='none';
						obj2[1].style.display ='none';
					}else{
						obj2[0].style.display ='inline-block';
						obj2[1].style.display ='inline-block';
					}
				})
			}() 
		}
	}
	var QuankuanHouse = document.getElementsByClassName("QuankuanHouse")[0];
	var QuankuanHouse_discount = document.getElementsByClassName("QuankuanHouse_discount");
	showHide2(QuankuanHouse,QuankuanHouse_discount);
	var AnjieHouse = document.getElementsByClassName("AnjieHouse")[0];
	var AnjieHouse_discount = document.getElementsByClassName("AnjieHouse_discount");
	showHide2(AnjieHouse,AnjieHouse_discount);
	var overdue = document.getElementsByClassName("overdue")[0];
	var OverdueAccount = document.getElementsByClassName("OverdueAccount");
	showHide2(overdue,OverdueAccount);
	function showHide2(obj1,obj2){
		if(obj1 != null){
			obj1.value == 0 ? function(){
				obj2[0].style.display ='none';
				obj1.addEventListener('change',function(){
					if (this.value == 0) {
						obj2[0].style.display ='none';
					}else{
						obj2[0].style.display ='inline-block';
					}
				})
			}(): function(){
				obj2[0].style.display ='inline-block';
				obj1.addEventListener('change',function(){
					if (this.value == 0) {
						obj2[0].style.display ='none';
					}else{
						obj2[0].style.display ='inline-block';
					}
				})
			}() 
		}
	}
	AreaName != null ? AreaName.onclick = function(){
		if(Status){
			AreaSelect.style.display = 'block';
			var Town = $('input',AreaSelect);
			for (var i = 1; i < Town.length; i++) {
				if(!AreaStatus){
					Town[i].setAttribute('data-status','on');
				};
				(function(i){
					Town[i].onclick = function(){
						AreaStatus = 1;
						if (AreaName.innerText.length == 3) {
							AreaName.innerText = AreaName.innerText.replace('请选择','已选择>>')
						};
						if(Town[i].getAttribute('data-status') == 'on'&& Town[i].checked){
							Town[i].setAttribute('data-status','off');
							AreaName.innerText += this.value;
						}else{
							var text = AreaName.innerText;
							Town[i].setAttribute('data-status','on');
							AreaName.innerText = [].join.call(text.split(this.value),'');
						};
					};
				})(i);
			};
			Town[0].onclick = function(){
				var checklist2 = document.getElementsByName("product_deptRegion");
				if(Town[0].checked){
					for(var i=0;i<checklist2.length;i++){
						if(checklist2[i].checked == false){
							checklist2[i].checked = true;
							AreaName.innerText = AreaName.innerText.replace('请选择','已选择>>');
							AreaName.innerText +=  checklist2[i].value;
						}
					} 
			   }else{
					for(var j=0;j<checklist2.length;j++){
					checklist2[j].checked = false;
					var text = AreaName.innerText;
					AreaName.innerText = [].join.call(text.split(checklist2[j].value),'');
					}
			   }
			}
			AreaSelect.onmouseleave = function(){
				if (AreaName.innerText.length == 5){
					AreaName.innerText = ('请选择');
				};
				AreaSelect.style.display = 'none';
			};
		}else{
			Dialog({
				Background:DbmsBody,
				Message:'请选择你的位置'
			});
		};
	}: false;
	
	NationName != null ? NationName.onclick = function(){
		NationSelect.style.display = 'block';
		var Nation = $('input',NationSelect);
		for (var i = 0; i < Nation.length; i++) {
			if(!NationStatus){
				Nation[i].setAttribute('data-status','on');
			};
			(function(i){
				Nation[i].onclick = function(){
					NationStatus = 1;
					if (NationName.innerText.length == 3) {
						NationName.innerText =NationName.innerText.replace('请选择','已选择>>')
					};
					if(Nation[i].getAttribute('data-status') == 'on'&& Nation[i].checked){
						Nation[i].setAttribute('data-status','off');
						NationName.innerText += this.value;
					}else{
						var text = NationName.innerText;
						Nation[i].setAttribute('data-status','on');
						NationName.innerText = [].join.call(text.split(this.value),'');
					};
				};
			})(i);
		};
		NationSelect.onmouseleave = function(){
			if (NationName.innerText.length == 5){
				NationName.innerText = ('请选择');
			};
			NationSelect.style.display = 'none';
		};
	}: false;
	/*ProductCompany.onchange = function(){
		if (this.value !== 0){
			$('@product_company--warp').innerHTML = '<input name="product_company" />'
		};
	};
	ProductIndustry.onchange = function(){
		if (this.value !== 0){
			$('@product_industry--warp').innerHTML = '<input name="product_industry" />'
		};
	};*/
	//征信
	var CreditEvent = function(Courier){
		var ReuseModule = $('.'+Courier.Re);
		var Countor = ReuseModule.length;
		if(Courier.En.value == 0){
			Courier.Ad.style.visibility = 'hidden';
			for(var i = 0; i < Countor; i++){
				Courier.Bo.removeChild(ReuseModule[0]);
			};
		}else{
			Courier.Dymic();
			Courier.Ad.style.visibility = 'visible';
		};
	};
	var QueryDymic = function(){
		var ReuseModule = document.createElement('div');
		ReuseModule.className = QueryReuse.className;
		ReuseModule.innerHTML = '<span>'+
                '<input type="text" name="creditRequirement_months"/>'+
               '<b>'+"月内"+'</b>'+
              '</span>'+
              '<span>'+
                '<select name="creditRequirement_loanStates">'+
                  '<option value="1">'+'无'+'</option>'+
                  '<option value="0">'+'贷款'+'</option>'+
               '</select>'+
               '<b>'+'+'+'</b>'+
              '</span>'+
              '<span>'+
                '<select name="creditRequirement_cardStates">'+
                  '<option value="1">'+'无'+'</option>'+
                  '<option value="0">'+'信用卡'+'</option>'+
                '</select>'+
               '<b>'+'+'+'</b>'+
			  '</span>'+
              '<span>'+
                '<select name="creditRequirement_examinationStates">'+
                  '<option value="1">'+'无'+'</option>'+
                  '<option value="0">'+'自查'+'</option>'+
                '</select>'+
               '<b>'+'&#8804;'+'</b>'+
              '</span>'+
              '<span>'+
                '<input type="text" name="creditRequirement_numbers" />'+
               '<b>'+'次'+'</b>'+
              '</span>'+
              '<button type="button" class="creditRequire_query--singleEnable">'+'此条失效'+'</button>';
		QueryBody.appendChild(ReuseModule);
		var SingleEnable = $('button',QueryBody);
		for (var i = 0; i < SingleEnable.length; i++) {
				SingleEnable[i].onclick = function(){
					QueryBody.removeChild(this.parentNode);
					SingleEnable.length == 0 ? function(){
						QueryEnable.value = 0;
						QueryAdd.style.visibility = 'hidden';
						QueryEnable.addEventListener('change',function(){
							if (this.value == 0) {
								QueryAdd.style.visibility = 'hidden';
							}else{
								QueryAdd.style.visibility ='visible';
							}
						})
					}(): false;
				};
		};
	};
	
	var ValueRegion = $('input',Courier);
	var CreditRequire = $('@product_creditRequire--warp');
	var QueryWarp = $('@creditRequire_query--warp');
	var QueryReuse = $('@creditRequire_query--reuse');
	var QueryBody = $('@creditRequire_query--body');
	var QueryAdd = $('@creditRequire_query--add');
	var QueryEnable = $('@creditRequire_query--wholeEnable');
	var QuerySingleEnable = $('@creditRequire_query--singleEnable');
	QueryEnable != null ?
	QueryEnable.value == 0 ? function(){
		QueryAdd.style.visibility = 'hidden';
		var QueryReuse = $('.creditRequire_query--reuse');
		var QueryReuseLen = QueryReuse.length;
		for(var i = 0; i < QueryReuseLen; i++){
			QueryBody.removeChild(QueryReuse[0]);
		};
		QueryEnable.addEventListener('change',function(){
			CreditEvent({
				Re:'creditRequire_query--reuse',
				Bo:QueryBody,
				Ad:QueryAdd,
				En:QueryEnable,
				Dymic:QueryDymic
			});
		});
	}():false || QueryEnable.addEventListener('change',function(){
		CreditEvent({
			Re:'creditRequire_query--reuse',
			Bo:QueryBody,
			Ad:QueryAdd,
			En:QueryEnable,
			Dymic:QueryDymic
		});
	}): false;
	QueryAdd != null ? QueryAdd.onclick = QueryDymic: false;
	var btn1 = document.getElementsByClassName('creditRequire_query--singleEnable');
	for(var i = 0; i < btn1.length; i++){
	   btn1[i].onclick = function(){
		 QueryBody.removeChild(this.parentNode);
			btn1.length == 0 ? function(){
				QueryEnable.value = 0;
				QueryAdd.style.visibility = 'hidden';
				QueryEnable.addEventListener('change',function(){
					if (this.value == 0) {
						QueryAdd.style.visibility = 'hidden';
					}else{
						QueryAdd.style.visibility ='visible';
					}
				})
			}(): false;
	   }
	} 
	
	var QueryDymic2 = function QueryDymic2(){
		var ReuseModule2 = document.createElement('div');
		ReuseModule2.className = QueryReuse2.className;
		ReuseModule2.innerHTML = '<span>'+
                '<input type="text" name="creditRequirement_months"/>'+
               '<b>'+"月内"+'</b>'+
              '</span>'+
              '<span>'+
                '<select name="creditRequirement_loanStates">'+
                  '<option value="1">'+'无'+'</option>'+
                  '<option value="0">'+'贷款'+'</option>'+
               '</select>'+
               '<b>'+'+'+'</b>'+
              '</span>'+
              '<span>'+
                '<select name="creditRequirement_cardStates">'+
                  '<option value="1">'+'无'+'</option>'+
                  '<option value="0">'+'信用卡'+'</option>'+
                '</select>'+
               '<b>'+'+'+'</b>'+
			  '</span>'+
			  '<span>'+
			    '<select name="">'+
				  '<option value="1">'+'无'+'</option>'+
				  '<option value="0">'+'担保'+'</option>'+
			    '</select>'+
			   '<b>'+'&#43;'+'</b>'+
		     '</span>'+
              '<span>'+
                '<select name="creditRequirement_examinationStates">'+
                  '<option value="1">'+'无'+'</option>'+
                  '<option value="0">'+'自查'+'</option>'+
                '</select>'+
               '<b>'+'&#8804;'+'</b>'+
              '</span>'+
              '<span>'+
                '<input type="text" name="creditRequirement_numbers" />'+
               '<b>'+'次'+'</b>'+
              '</span>'+
              '<button type="button" class="creditRequire_query--singleEnable">'+'此条失效'+'</button>';
		QueryBody2.appendChild(ReuseModule2);
		var SingleEnable2 = $('button',QueryBody2);
		for (var i = 0; i < SingleEnable2.length; i++) {
				SingleEnable2[i].onclick = function(){
					QueryBody2.removeChild(this.parentNode);
					SingleEnable2.length == 0 ? function(){
						QueryEnable2.value = 0;
						QueryAdd2.style.visibility = 'hidden';
						QueryEnable2.addEventListener('change',function(){
							if (this.value == 0) {
								QueryAdd2.style.visibility = 'hidden';
							}else{
								QueryAdd2.style.visibility ='visible';
							}
						})
					}(): false;
				};
		};
	};
	
	var ValueRegion2 = $('input',Courier);
	var CreditRequire2 = $('@product_creditRequire--warp2');
	var QueryWarp2 = $('@creditRequire_query--warp2');
	var QueryReuse2 = $('@creditRequire_query--reuse2');
	var QueryBody2 = $('@creditRequire_query--body2');
	var QueryAdd2 = $('@creditRequire_query--add2');
	var QueryEnable2 = $('@creditRequire_query--wholeEnable2');
	var QuerySingleEnable2 = $('@creditRequire_query--singleEnable2');
	QueryEnable2 != null ? 
	QueryEnable2.value == 0 ? function(){
		QueryAdd2.style.visibility = 'hidden';
		var QueryReuse2 = $('.creditRequire_query--reuse2');
		var QueryReuseLen2 = QueryReuse2.length;
		for(var i = 0; i < QueryReuseLen2; i++){
			QueryBody2.removeChild(QueryReuse2[0]);
		};
		QueryEnable2.addEventListener('change',function(){
			CreditEvent({
				Re:'creditRequire_query--reuse2',
				Bo:QueryBody2,
				Ad:QueryAdd2,
				En:QueryEnable2,
				Dymic:QueryDymic2
			});
		});
	}():false || QueryEnable2.addEventListener('change',function(){
		CreditEvent({
			Re:'creditRequire_query--reuse2',
			Bo:QueryBody2,
			Ad:QueryAdd2,
			En:QueryEnable2,
			Dymic:QueryDymic2
		});
	}): false;
	QueryAdd2 != null ? QueryAdd2.onclick = QueryDymic2: false;
	var btn12 = document.getElementsByClassName('creditRequire_query--singleEnable2');
	for(var i = 0; i < btn12.length; i++){
	   btn12[i].onclick = function(){
		 QueryBody2.removeChild(this.parentNode);
		 btn12.length == 0 ? function(){
			QueryEnable2.value = 0;
			QueryAdd2.style.visibility = 'hidden';
			QueryEnable2.addEventListener('change',function(){
				if (this.value == 0) {
					QueryAdd2.style.visibility = 'hidden';
				}else{
					QueryAdd2.style.visibility ='visible';
				}
			})
		}(): false;
	   }
	} 
	// QuerySingleEnable.onclick = function(){
	// 	QueryBody.removeChild(this.parentNode);
	// };

	var OverduoWarp = $('@creditRequire_overduo--warp')
	var OverduoBody = $('@creditRequire_overduo--body');
	var OverduoReuse = $('@creditRequire_overduo--reuse');
	var OverduoAdd = $('@creditRequire_overduo--add');
	var OverduoEnable = $('@creditRequire_overduo--wholeEnable');
	var OverduoButton = $('button',OverduoWarp);
	var OverduoSingleEnable = $('@creditRequire_overduo--singleEnable');
	var OverduoDymic = function(){
		var OverduoSingleEnable;
		var Son = document.createElement('div');
		Son.className = OverduoReuse.className;
		Son.innerHTML = '<span>'+
                '<input type="text" name="overdueCredit_months" />'+
               ' <b>'+'月内'+'</b>'+
              '</span>'+
              '<span>'+
                '<select name="overdueCredit_cardStates">'+
                  '<option value="0">'+'信用卡'+'</option>'+
                  '<option value="1">'+'无'+'</option>'+
                '</select>'+
               '<b>'+'&#43;'+'</b>'+
              '</span>'+
              '<span>'+
                '<select name="overdueCredit_loanStates">'+
                  '<option value="0">'+'贷款'+'</option>'+
                  '<option value="1">'+'无'+'</option>'+
                '</select>'+
               '<b>'+'&#43;'+'</b>'+
              '</span>'+
              '<span>'+
				'<select name="overdueCredit_loanStates">'+
				'<option value="0">'+'逾期'+'</option>'+
				'<option value="1">'+'连续逾期'+'</option>'+
			  '</select>'+
			 '<b>'+'&#8804;'+'</b>'+
              '</span>'+
              '<span>'+
                '<input type="text" name="overdueCredit_continuityOverdues" />'+
               '<b>'+'次'+'</b>'+
              '</span>'+
              '<button type="button" class="creditRequire_overduo--singleEnable">'+'此条失效'+'</button>';
		OverduoBody.appendChild(Son);
		OverduoSingleEnable = $('button',OverduoBody);
		for (var i = 0; i < OverduoSingleEnable.length; i++) {
			OverduoSingleEnable[i].onclick = function(){
				OverduoBody.removeChild(this.parentNode);
				OverduoSingleEnable.length == 0 ? function(){
					OverduoEnable.value = 0;
					OverduoAdd.style.visibility = 'hidden';
					OverduoEnable.addEventListener('change',function(){
						if (this.value == 0) {
							OverduoAdd.style.visibility = 'hidden';
						}else{
							OverduoAdd.style.visibility ='visible';
						}
					})
				}(): false;
			}
		};
	};
	OverduoEnable.value == 0 ? function(){
		OverduoAdd.style.visibility = 'hidden';
		var OverduoReuse = $('.creditRequire_overduo--reuse');
		var OverduoReuseLen = OverduoReuse.length;
		for(var i = 0; i < OverduoReuseLen; i++){
			OverduoBody.removeChild(OverduoReuse[0]);
		};
		OverduoEnable.addEventListener('change',function(){
			CreditEvent({
				Re:'creditRequire_overduo--reuse',
				Bo:OverduoBody,
				Ad:OverduoAdd,
				En:OverduoEnable,
				Dymic:OverduoDymic
			});
		});
	}():false || OverduoEnable.addEventListener('change',function(){
		CreditEvent({
			Re:'creditRequire_overduo--reuse',
			Bo:OverduoBody,
			Ad:OverduoAdd,
			En:OverduoEnable,
			Dymic:OverduoDymic
		});
	});
	OverduoAdd.onclick = OverduoDymic;
	var btn2 = document.getElementsByClassName('creditRequire_overduo--singleEnable');
	for(var i = 0; i < btn2.length; i++){
		btn2[i].onclick = function(){
			OverduoBody.removeChild(this.parentNode);
			btn2.length == 0 ? function(){
				OverduoEnable.value = 0;
				OverduoAdd.style.visibility = 'hidden';
				OverduoEnable.addEventListener('change',function(){
					if (this.value == 0) {
						OverduoAdd.style.visibility = 'hidden';
					}else{
						OverduoAdd.style.visibility ='visible';
					}
				})
			}(): false;
		}
	}
	// OverduoSingleEnable.onclick = function(){
	// 	OverduoBody.removeChild(this.parentNode);
	// };
	var LiabilityWarp = $('@creditRequire_liability--warp')
	var LiabilityBody = $('@creditRequire_liability--body');
	var LiabilityReuse = $('@creditRequire_liability--reuse');
	var LiabilityAdd = $('@creditRequire_liability--add');
	var LiabilityEnable = $('@creditRequire_liability--wholeEnable');
	var LiabilityButton = $('button',LiabilityWarp);
	var LiabilitySingleEnable = $('@creditRequire_liability--singleEnable');
	var LiabilityDymic = function LiabilityDymic(){
		var LiabilitySingleEnable;
		var Son = document.createElement('div');
		Son.className = LiabilityReuse.className;
		Son.innerHTML = '<span>'+
                '<input type="text" name="liabilityCredit_months" />'+
               '<b>'+'月内'+'</b>'+
              '</span>'+
              '<span>'+
                '<select>'+
                  '<option>'+'信用卡'+'</option>'+
                '</select>'+
               '<b>'+'&#43;'+'</b>'+
              '</span>'+
              '<span>'+
                '<select>'+
                  '<option>'+'信用卡'+'</option>'+
                '</select>'+
               ' <b>'+'&#43;'+' </b>'+
              '</span>'+
              '<span>'+
                '<select>'+
                  '<option>'+'贷款'+'</option>'+
                '</select>'+
               '<b>'+'&#8804;'+'</b>'+
              '</span>'+
              '<span>'+
                '<input type="text" name="liabilityCredit_numbers" />'+
               '<b>'+'次'+'</b>'+
              '</span>'+
              '<button type="button" class="creditRequire_liability--singleEnable">'+'此条失效'+'</button>';
		LiabilityBody.appendChild(Son);
		LiabilitySingleEnable = $('button',LiabilityBody);
		for (var i = 0; i < LiabilitySingleEnable.length; i++) {
			LiabilitySingleEnable[i].onclick = function(){
				LiabilityBody.removeChild(this.parentNode);
				LiabilitySingleEnable.length == 0 ? function(){
					LiabilityEnable.value = 0;
					LiabilityAdd.style.visibility = 'hidden';
					LiabilityEnable.addEventListener('change',function(){
						if (this.value == 0) {
							LiabilityAdd.style.visibility = 'hidden';
						}else{
							LiabilityAdd.style.visibility ='visible';
						}
					})
				}(): false;
			};
		};
	};
	LiabilityEnable.value == 0 ? function(){
		LiabilityAdd.style.visibility = 'hidden';
		var LiabilityReuse = $('.creditRequire_liability--reuse');
		var LiabilityReuseLen = LiabilityReuse.length;
		for(var i = 0; i < LiabilityReuseLen; i++){
			LiabilityBody.removeChild(LiabilityReuse[0]);
		};
		LiabilityEnable.addEventListener('change',function(){
			CreditEvent({
				Re:'creditRequire_liability--reuse',
				Bo:LiabilityBody,
				Ad:LiabilityAdd,
				En:LiabilityEnable,
				Dymic:LiabilityDymic
			});
		});
	}():false || LiabilityEnable.addEventListener('change',function(){
		CreditEvent({
			Re:'creditRequire_liability--reuse',
			Bo:LiabilityBody,
			Ad:LiabilityAdd,
			En:LiabilityEnable,
			Dymic:LiabilityDymic
		});
	});
	LiabilityAdd.onclick = LiabilityDymic;
	var btn3 = document.getElementsByClassName('creditRequire_liability--singleEnable');
	for(var i = 0; i < btn3.length; i++){
		btn3[i].onclick = function(){
			LiabilityBody.removeChild(this.parentNode);
			btn3.length == 0 ? function(){
				LiabilityEnable.value = 0;
				LiabilityAdd.style.visibility = 'hidden';
				LiabilityEnable.addEventListener('change',function(){
					if (this.value == 0) {
						LiabilityAdd.style.visibility = 'hidden';
					}else{
						LiabilityAdd.style.visibility ='visible';
					}
				})
			}(): false;
		}
	}
	// LiabilitySingleEnable.onclick = function(){
	// 	LiabilityBody.removeChild(this.parentNode);
	// };
	// 初级数据检测函数				
	function JuniorInspector(Courier){
		return [].every.call(Courier,function(Ctor){
			return Ctor.style.borderColor !== 'red';
		});
	};
	// 高级检测函数
	function SeniorInspector(Courier){
		var StringName = [
						'product_bankName',
						'product_productName',
						'product_data'
					],
					IntName = [
						'liabilityCredit_numbers',
						'liabilityCredit_months',
						'overdueCredit_overdues',
						'overdueCredit_continuityOverdues',
						'overdueCredit_months',
						'creditRequirement_months',
						'creditRequirement_numbers',
						'product_liabilities',
						'product_minimumLimit',
						'product_maximumAmount',
						'product_Term',
						'product_time',
						'product_maleInitialAge',
						'product_maleCutoffAge',
						'product_femaleInitialAge',
						'product_femaleCutoffAge',
						'product_whiteHouse',
						'registerTime',
						'repaidTerm',
						'vehicleCoty',
						'vehicleLicense',
						'product_minTerm',
						'product_maxTerm',
						'mortgageHouseYears'
					],
					FloatName = [
						'product_minimumInterest',
						'product_maximumInterest',
						'houseMonthInterest',
						'houseSeasonInterest'

					],
					IntExcptionName = [
						'vehicleOnePrice',
						'vehicleTransferTime',
						'vehicleSecondPrice',
						'vehicleTerm',
						'vehicleRepaidTerm',
						'vehicleMoney',
						'vehicleMonthPay',
						'minVehicleLicenseTime',
						'maxVehicleLicenseTime',
						'workShift',
						'workTime',
						'managementTime',
						'houseTerm',
						'houseRepaidTerm',
						'houseAppointRepaidTerm',
						'housePrice',
						'houseMoney',
						'houseMonthPay',
						'houseMonthIncome',
						'houseMortgageTerm',
						'houseSecuredTerm',
						'policyTotalTime',
						'policyPrice',
						'policyMonthlyPayment',
						'policyYearPayment',
						'policySurplusTime',
						'mortgageHouseQuankuanDiscount',
						'mortgageHouseAnjieDiscount',
						'minmortgageVehiclePrice',
						'maxmortgageVehiclePrice',
						'mortgageVehicleLicenseTime',
						'mortgageVehicleKilometer',
						'mortgageVehicleQuankuanDiscount',
						'mortgageVehicleAnjieDiscount',
						'mortgageVehicleYidiyaDiscount',
					],
					StringExcp = [
						'product_place',
						'product_company',
						'policyCompany',
						'policyRestrictType',
						'policyRestrictMode',
						'policyHholder',
						'mortgageVehicleBrand'
					],
			Int = /^\d+$|^[\d\.]+$/,
			Float = /^(\d+\.\d+|\d+(\.\d+)?%)$/,
			StringReg = /[^1-9A-z]/,
			sttr = /^[\u4e00-\u9fa5a-zA-Z\d\.]+$/;

			return StringName.indexOf(Courier.name) !== -1 ? StringReg.test(Courier.value):
			IntName.indexOf(Courier.name) !== -1 ? Int.test(Courier.value) :
			FloatName.indexOf(Courier.name) !== -1 ? Float.test(Courier.value) : 
			IntExcptionName.indexOf(Courier.name) !== -1 ? function(){
				if (Courier.value == '' || Courier.value == null) {
					return true;
				}else{
					return Int.test(Courier.value);
				};
			}() : StringExcp.indexOf(Courier.name) !== -1 ? function(){
				if (Courier.value == '' || Courier.value == null) {
					return true;
				}else{
					return sttr.test(Courier.value);
				};
			}() : true;
	};
	$('#dataHandle').onclick = function(){
		if([].every.call(ValueRegion,function(Ctor){
			return SeniorInspector(Ctor) ? function(){
				Ctor.removeAttribute('style');
				return true;
			}() : function(){
				Ctor.style.borderColor = 'red';
				return true;
			}();
		})){
			if(JuniorInspector(ValueRegion)){
				document.getElementById("warp").action = 'http://192.168.0.188/daikuan2/product_add.do';
				$('#dataHandle').form.submit();
			}else{
				Dialog({
					Background:DbmsBody,
					Message:'表格错误'
				});
			};
		};
	};
	
}($('@product--warp'));


//产品类型
$('#loanType') && function(){
	// 检测当前贷款类型中是否有空产品栏，有则显示为空
	[].every.call($('.disArea_loanType--details'),function(i){
		return $('span',i).length == 0 ? i.style.display = 'none' : true;
	});
	// 启动相应产品的详单
	var loanTypeOne = $('.disArea_loanType--one'),
		loanTypeTwo = $('.disArea_loanType--two');
	for(var i = 0; i < loanTypeOne.length; i++) { 
		(function(i){
		  loanTypeOne[i].onmouseenter = function(){
		   	var loanTypeButton = $('button',loanTypeTwo[i]);
			   loanTypeTwo[i].style.visibility = 'visible';
			  loanTypeTwo[i].onmouseleave = function(){
			    loanTypeTwo[i].style.visibility = 'hidden';
			  };
	    	loanTypeButton[0].onclick = function(){
				location.href="http://192.168.0.188/daikuan2/product_condition.do?product_identity="+this.name+"&product_type="+loanTypeOne[i].getAttribute('data-name');
	    	};
				loanTypeButton[1].onclick = function(){
				location.href="http://192.168.0.188/daikuan2/product_condition.do?product_identity="+this.name+"&product_type="+loanTypeOne[i].getAttribute('data-name');
				};
			};
		})(i);
	};
}();
// 时间
var time = document.getElementById("nav-data-span1");
var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
function showTime(){
	nowtime = new Date();
	year = nowtime.getFullYear();
	month = nowtime.getMonth()+1;
	date = nowtime.getDate();
	day = nowtime.getDay();
	time.innerHTML = year + "年" + month + "月" + date + "日" + "&nbsp;&nbsp;" + nowtime.toLocaleTimeString() + "&nbsp;&nbsp;" + weekday[day];
}
time != null ? setInterval("showTime()",1000) : false;
// 子账号
  ReviewPush();
  function ReviewPush(){
	var sel = document.getElementById("sel");
	var sel_ul = document.getElementById("sel_ul");
	var checkxh = document.getElementsByClassName("checkxh");
	var ClassName = document.getElementsByClassName("ClassName");
	if(sel != null){
		sel.onclick =function(){
			sel_ul.style.display = 'block';
		}
		sel_ul.onmouseleave =function(){
			sel_ul.style.display = 'none';
		}
		for (var i = 0; i < checkxh.length; i++) {
			(function(i){
				checkxh[i].onclick = function(){ 
					if(checkxh[i].checked){
						sel.innerHTML += ClassName[i].innerText + "&nbsp;";
					};
					if(checkxh[i].checked == false){
						sel.innerText = [].join.call(sel.innerText.split(ClassName[i].innerText) ,'');
					}
				}
			})(i)   
		}
	}
  }
  
  var success = document.getElementById('Success');
  var box1 = document.getElementById('box1');
  var cancel = document.getElementById('cancel');
  var times = document.getElementById('AuditPushTwo');
  success != null ? (function(){
  success.onclick = function(){
      box1.style.display = 'block';
  }
})() : false;
var RFE = document.getElementById("RFE");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
RFE != null ? RFE.onclick = function(){ 
	box2.style.display = 'block';
    var str = document.getElementById("pic_information").value;
    str = (str .substring(str .length - 1) == ',') ? str .substring(0, str .length - 1) : str ;
	document.getElementById("pic_information").value = str;
    console.log(document.getElementById("pic_information").value);} : false;
function close2(){
	box1.style.display = 'none';
	box2.style.display = 'none';
	box3.style.display = 'none';
	box4.style.display = 'none';
}
var loanbox = document.getElementById("LoanBox");
var loanlose = document.getElementById("LoanFailure");
var str1_val = document.getElementById("ID1_value");
var str2_val = document.getElementById("ID2_value");
function loanOpen1(str1){
	var atr1 = str1;
	str1_val.value = atr1;
	loanbox.style.display = 'block';
	console.log(str1_val.value);
};
function loanOpen2(str2){
	var atr2 = str2;
	str2_val.value = atr2;
	loanlose.style.display = 'block';
}
function close3(){
	loanbox.style.display = 'none';
	loanlose.style.display = 'none';
}

var lose = document.getElementById("lose");
RFE != null ? lose.onclick = function(){
	box4.style.display = 'block';
} : false;
// 表格删除 
var del = document.getElementsByClassName('del');
//   for(var i=0; i<checklist.length; i++){
// 	  del[i].onclick = function(){
// 		  for(var j=0; j<checklist.length; j++){
// 			if(checklist[j].checked){
// 				tc.removeChild(this.parentNode.parentNode);
// 			}
// 		  }
		
// 	  }
//   }
  
var arg = document.getElementsByClassName('arg')[0];
var checklist = document.getElementsByName ("selected");
var tc = document.getElementById("tc");
var arr = [];
function dow(){
	for(var i = 0; i<tc.rows.length-1; i++){
		if(tc.rows[i].cells[0].getElementsByTagName("input")[0].checked){
			arr.push(tc.rows[i].cells[0].id);
		}
		// arg.value = arr;
	}
}
function dell() {
	dow();
	if(arr.length > 0 && arr != null){
		// document.form.action="http://192.168.0.188/daikuan2/product_delete.do";
		// document.form.submit();
	}
	var tb = document.getElementById("td");
	if (tb.rows.length < 2) {
		return;
	}
	var row;
	var cell;
	var chk;
	for (var i = tb.rows.length - 3; i > 0; i--) {
		row = tb.rows[i];
		cell = row.cells[0];
		chk = cell.getElementsByTagName("input")[0];
		if (chk.checked) {
			tb.deleteRow(i);
		}
	}
}
	for(var i=0;i<checklist.length;i++){
			if(checklist[i].checked == false){
				(function(i){
					checklist[i].onclick = function(){
						document.getElementById("con").removeAttribute('disabled');
					}
				})(i) 
			}else if(checklist[i].checked){
				(function(i){
					checklist[i].onclick = function(){
					    document.getElementById("con").setAttribute('disabled','disabled');
					}
				})(i) 
			}
				document.getElementById("con").setAttribute('disabled','disabled');
			
			// checklist[1].onclick = function(){
			// 	document.getElementById("con").setAttribute('disabled','disabled');
				
			// }
		}
		// document.getElementById("con").onclick = function(){
		// 	document.getElementById("con").removeAttribute('disabled');
		// }
	 
		function selectAll() {
			if (document.getElementById("controlAll").checked) {
				for (var i = 0; i < checklist.length; i++) {
					checklist[i].checked = true;
				}
			} else {
				for (var j = 0; j < checklist.length; j++) {
					checklist[j].checked = false;
				}
			}
		}
// 返回顶部
var oTop = document.getElementById('backTop');
var ct = document.getElementsByClassName('DBMS_disArea')[0]; 
oTop != null ? window.onscroll = function(){ 
 var t = document.documentElement.scrollTop || document.body.scrollTop; 
 if( t >= 0 ) { 
	 oTop.style.bottom = '12%';
 } else { 
	 oTop.style.bottom = '-100px';
 } 
} : false;
ct.onscroll = function(){
	if( ct.scrollTop >= 0 ) { 
		oTop.style.bottom = '12%';
	} else { 
		oTop.style.bottom = '-100px';
	} 
}
var timer = null;
oTop != null ? oTop.onclick = function(){
	cancelAnimationFrame(timer);
	timer = requestAnimationFrame(function fn(){
		var Top = document.body.scrollTop || document.documentElement.scrollTop;
		if(Top > 0){
			document.body.scrollTop = document.documentElement.scrollTop = Top - 50;
			document.getElementsByClassName('DBMS_disArea')[0].scrollTop = Top - 50;
			timer = requestAnimationFrame(fn);
		}else{
			cancelAnimationFrame(timer);
		} 
	});
}: false;
// 子账号
var picBox = document.getElementById("pictureTop");
picBox == null ? vanish(): false;
function vanish(){
	var picBtn = document.getElementById("btn_1");
	if(picBtn != null){
		picBtn.removeAttribute('disabled');
	}
	// picBtn != null ? picBtn.removeAttribute('disabled'): false;
}
var fileList = document.getElementById("pic");
fileList != null ? (function() {
	var filesUpload = document.getElementById("files-upload");                      
		function uploadFile(file) {
		var span = document.createElement("span"),
			img,
			reader,
			xhr,
			fileInfo;  
			span.innerText = "文件格式错误" ;          
		if (typeof FileReader !== "undefined" && (/image/i).test(file.type)) {
				img = document.createElement("img");
				img.style.width = '150px';
				img.style.height = '120px';
				reader = new FileReader();
				reader.onload = (function (theImg) {
				return function (evt) {
						theImg.src = evt.target.result;
					};
				}(img));
					reader.readAsDataURL(file);
				}          
				if(img != null){
					fileList.appendChild(img);
					document.getElementById("btn_1").removeAttribute('disabled');
				} else{
					fileList.appendChild(span);
					document.getElementById("btn_1").setAttribute("disabled","disabled");
				}                          
		}             
			function traverseFiles (files) {
					if (typeof files !== "undefined") {
						 for (var i=0, l=files.length; i<l; i++) {
							uploadFile(files[i]);
						}
					}
					else {
							fileList.innerHTML = "No support for the File API in this web browser";
						}   
					}
			filesUpload.addEventListener("change", function () {
				fileList.innerHTML = '';
				traverseFiles(this.files);
			}, false);                                    
	})(): false;
	//子账号验证
	var picBtn = document.getElementById("btn_1");
	function checkUser1(va) {
        if (va == "") {
            document.getElementById("user_ID").innerHTML = "帐号不能为空";
        } else {
			document.getElementById("user_ID").innerHTML = "";
        }
    }

    function checkUser(va) {
        if (va == "") {
            document.getElementById("user").innerHTML = "用户名不能为空";
        } else {
            document.getElementById("user").innerHTML = "";
        }
    }

    function checkpwd(va) {
        if (va == "") {
            document.getElementById("pwd").innerHTML = "密码不能为空";
        } else {
            document.getElementById("pwd").innerHTML = "";
        }
        // if(va.length < 5 && va.length > 0){
        // 	document.getElementById("pwd").innerHTML="密码不能少于6位";
        // }else{
        // 	document.getElementById("pwd").innerHTML="";
        // 	}                     
    }

    function checkRpwd(va) {
        var pwd = document.getElementById("quepwd").value;
        if (va == "") {
			document.getElementById("rpwd").innerHTML = "密码不能为空";
        } else {
			document.getElementById("rpwd").innerHTML = "";
        }
        if (va != pwd) {
			document.getElementById("rpwd").innerHTML = "两个密码不同";
			picBtn.setAttribute('disabled','disabled');
        } else if(va == pwd && va != ''){
			picBtn.removeAttribute('disabled');
        }
    }
//拖动
    var disX = disY = 0;                         
    var div1 = document.getElementById("block1");  
    div1 != null ? div1.onmousedown = function(e) {
        var evnt = e || event;                  
        disX = evnt.clientX - div1.offsetLeft;   
        disY = evnt.clientY - div1.offsetTop;    

        document.onmousemove = function(e) {
            var evnt = e || event;
            var x = evnt.clientX - disX;
            var y = evnt.clientY - disY;
            var window_width  = document.documentElement.clientWidth  - div1.offsetWidth;
            var window_height = document.documentElement.clientHeight - div1.offsetHeight;
            div1.style.left = x + 225 + "px";
            div1.style.top  = y + 350 + "px";
        };
 
        document.onmouseup = function() {
            document.onmousemove =null;
            document.onmouup = null;
        };
        return false;
    }: false;
	var current = 0;
	div1 != null ? document.getElementById('target').onclick = function(){
		   current = (current+90)%360;
		   div1.style.transform = 'rotate('+current+'deg)';
	   }: false;
	   
var picCheck = document.getElementsByClassName("picCheck");
for (var i = 0; i < picCheck.length; i++) {
	picCheck != null ? picCheck[i].onclick = function(){
		if(this.checked){
			document.getElementById("pic_information").value += this.value + ',';
		}else{
			var text = document.getElementById("pic_information").value;
			document.getElementById("pic_information").value = [].join.call(text.split(this.value + ','),'');
		}
	}: false;
}
//使用权类型
var UseName = document.getElementsByClassName("module_use--title")[0];
var UseSelect = document.getElementById("use");
var use = $('input',UseSelect);
show3(use,UseName);
lisBox2(UseName,UseSelect,use);
function lisBox2(name,select,box){
	if(name != null){
		name.onclick = function(){
			select.style.display = 'block';
			for(var i = 0; i<box.length; i++){
				if(!AreaStatus){
					box[i].setAttribute('data-status','on');
				};
				(function(i){
					box[i].onclick = function(){
						AreaStatus = 1;
						if (name.innerText.length == 3) {
							name.innerText = name.innerText.replace('请选择','已选择>>')
						};
						if(box[i].checked){
							box[i].setAttribute('data-status','off');
							name.innerText += this.value;
						}else{
							var text = name.innerText;
              box[i].setAttribute('data-status','on');
              name.innerText = [].join.call(text.split(this.value),'');
						};
					};
				})(i);
			}
			name.onmouseleave = function(){
			if (name.innerText.length == 5){
				name.innerText = ('请选择');
			};
			select.style.display = 'none';
			}
			select.onmouseenter = function(){
			select.style.display = 'block';
			}
			select.onmouseleave = function(){
			if (name.innerText.length == 5){
				name.innerText = ('请选择');
			};
			select.style.display = 'none';
			};
	
		}
	}
}
