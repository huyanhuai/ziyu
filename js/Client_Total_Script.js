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
//点击事件开始边界
window.onload = function(){
	var Button = $('button',$('@DBMS_funcArea'));
	var LogInOrOut = $('button',$('@DBMS_header'));
	var DbmsBody = $('@DBMS_body');
	var LocationSessioin = localStorage;
	var Prov = $('#province'),
			City = $('#city'),
			Town = $('#town');
	if(LocationSessioin.length == 0){
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
		CitySelector(LocationSessioin.getItem('A'),LocationSessioin.getItem('B'),Town,'town');
		$('@DBMS_header--select').innerHTML = 
		`<span>
			<p><i class="fa fa-location-arrow"></i>当前城市</p>
		 </span>
		 <span>
				<ul>
					<li>`+LocationSessioin.getItem('A')+'</li>'
				+'<li>'+LocationSessioin.getItem('B')+'</li>'
				+'<li><input class="select_editer" type="button" value="修改" /></li>'
			+`</ul>
			</span>`;
		editer = $('@select_editer');
		editer.onclick = function(){
			localStorage.clear();
			location.reload();
		};
	};
	for (var i = 0; i < Button.length; i++) {
		(function(i){
			Button[i].id == 'loan' ? Button[i].onclick = function(){
				location.href = 'Client_Product.html';
			} : function(){
				if (Button[i].id !== 'productManage') {
					Button[i].onclick = function(){
						Dialog({
							Message:'此功能未开通！',
							Background:DbmsBody
						});
					};
				};
			}();
		})(i);
	};
	LogInOrOut[0].onclick = function(){
		location.href = 'http://192.168.0.188/daikuan2/signOut.do';
	};
	LogInOrOut[1].onclick = function(){
		location.href = 'http://192.168.0.188/daikuan2/Home_Page.jsp';
	};
};
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
	// Business.addEventListener('change',function(){
		var x = $('@require_registerTime');
		// if (this.value == 0) {
		// 	x.style.display ='none';
		// }else{
		// 	x.style.display ='inline-block';
		// }
	// })
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
	AreaName.onclick = function(){
		if(Status){
			AreaSelect.style.display = 'block';
			var Town = $('input',AreaSelect);
			for (var i = 0; i < Town.length; i++) {
				if(!AreaStatus){
					Town[i].setAttribute('data-status','on');
				};
				(function(i){
					Town[i].onclick = function(){
						AreaStatus = 1;
						if (AreaName.innerText.length == 3) {
							AreaName.innerText = AreaName.innerText.replace('请选择','已选择>>')
						};
						if(Town[i].getAttribute('data-status') == 'on'){
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
	};
	NationName.onclick = function(){
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
					if(Nation[i].getAttribute('data-status') == 'on'){
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
	};
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
		ReuseModule.innerHTML = `<span>
                <input type="text" name="creditRequirement_months" />
                <b>月内</b>
              </span>
              <span>
                <select name="creditRequirement_loanStates">
                  <option value="1">无</option>
                  <option value="0">贷款</option>
                </select>
                <b>+</b>
              </span>
              <span>
                <select name="creditRequirement_cardStates">
                  <option value="1">无</option>
                  <option value="0">信用卡</option>
                </select>
                <b>+</b>
              </span>
              <span>
                <select name="creditRequirement_examinationStates">
                  <option value="1">无</option>
                  <option value="0">自查</option>
                </select>
                <b>&#8804;</b>
              </span>
              <span>
                <input type="text" name="creditRequirement_numbers" />
                <b>次</b>
              </span>
              <button type="button" class="creditRequire_query--singleEnable">此条失效</button>`;
		QueryBody.appendChild(ReuseModule);
		var SingleEnable = $('button',QueryBody);
		for (var i = 0; i < SingleEnable.length; i++) {
				SingleEnable[i].onclick = function(){
					QueryBody.removeChild(this.parentNode);
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
	});
	QueryAdd.onclick = QueryDymic;
	var btn1 = document.getElementsByClassName('creditRequire_query--singleEnable');
	for(var i = 0; i < btn1.length; i++){
	   btn1[i].onclick = function(){
		 QueryBody.removeChild(this.parentNode);
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
		Son.innerHTML = `<span>
                <input type="text" name="overdueCredit_months" />
                <b>月内</b>
              </span>
              <span>
                <select name="overdueCredit_cardStates">
                  <option value="0">信用卡</option>
                  <option value="1">无</option>
                </select>
                <b>&#43;</b>
              </span>
              <span>
                <select name="overdueCredit_loanStates">
                  <option value="0">贷款</option>
                  <option value="1">无</option>
                </select>
                <b>&#43;</b>
              </span>
              <span>
				<select name="overdueCredit_loanStates">
				<option value="0">逾期</option>
				<option value="1">连续逾期</option>
			  </select>
			  <b>&#8804;</b>
              </span>
              <span>
                <input type="text" name="overdueCredit_continuityOverdues" />
                <b>次</b>
              </span>
              <button type="button" class="creditRequire_overduo--singleEnable">此条失效</button>`;
		OverduoBody.appendChild(Son);
		OverduoSingleEnable = $('button',OverduoBody);
		for (var i = 0; i < OverduoSingleEnable.length; i++) {
			OverduoSingleEnable[i].onclick = function(){
				OverduoBody.removeChild(this.parentNode);
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
	var LiabilityDymic = function(){
		var LiabilitySingleEnable;
		var Son = document.createElement('div');
		Son.className = LiabilityReuse.className;
		Son.innerHTML = `<span>
                <input type="text" name="liabilityCredit_months" />
                <b>月内</b>
              </span>
              <span>
                <select>
                  <option>信用卡</option>
                </select>
                <b>&#43;</b>
              </span>
              <span>
                <select>
                  <option>信用卡</option>
                </select>
                <b>&#43;</b>
              </span>
              <span>
                <select>
                  <option>贷款</option>
                </select>
                <b>&#8804;</b>
              </span>
              <span>
                <input type="text" name="liabilityCredit_numbers" />
                <b>次</b>
              </span>
              <button type="button" class="creditRequire_liability--singleEnable">此条失效</button>`;
		LiabilityBody.appendChild(Son);
		LiabilitySingleEnable = $('button',LiabilityBody);
		for (var i = 0; i < LiabilitySingleEnable.length; i++) {
			LiabilitySingleEnable[i].onclick = function(){
				LiabilityBody.removeChild(this.parentNode);
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
						'product_maxTerm'
					],
					FloatName = [
						'product_minimumInterest',
						'product_maximumInterest',
						'minVehicleLicenseTime',
						'maxVehicleLicenseTime',
					],
					IntExcptionName = [
						'vehicleOnePrice',
						'vehicleTransferTime',
						'vehicleSecondPrice',
						'vehicleTerm',
						'vehicleRepaidTerm',
						'vehicleMoney',
						'vehicleMonthPay'
					],
					StringExcp = [
						'product_place',
						'product_industry',
						'product_company'
					],
			Int = /^\d+$/,
			Float = /^(\d+\.\d+|\d+(\.\d+)?%)$/,
			StringReg = /[^1-9A-z]/;

			return StringName.indexOf(Courier.name) !== -1 ? StringReg.test(Courier.value):
			IntName.indexOf(Courier.name) !== -1 ?Int.test(Courier.value) :
			FloatName.indexOf(Courier.name) !== -1?Float.test(Courier.value) : 
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
					return StringReg.test(Courier.value);
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
	for(var i = 0; i < loanTypeOne.length; i++) { //5
		(function(i){
		  loanTypeOne[i].onmouseenter = function(){
		   	var loanTypeButton = $('button',loanTypeTwo[i]);
			   loanTypeTwo[i].style.visibility = 'visible';
			  loanTypeTwo[i].onmouseleave = function(){
			    loanTypeTwo[i].style.visibility = 'hidden';
			  };
			  console.log(i);
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