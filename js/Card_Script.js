
    //卡种类：
    var CardName = document.getElementsByClassName("card_type");
	var CardSelect0 = document.getElementById("card_type-1");
	var CardInput0 = $('input',CardSelect0);

	var CardSelect1 = document.getElementById("card_type-2");
	var CardInput1 = $('input',CardSelect1);

	var CardSelect2 = document.getElementById("card_type-3");
	var CardInput2 = $('input',CardSelect2);

	var CardSelect3 = document.getElementById("card_type-4");
	var CardInput3 = $('input',CardSelect3);

	var CardSelect4 = document.getElementById("card_type-5");
	var CardInput4 = $('input',CardSelect4);

	var CardSelect5 = document.getElementById("card_type-6");
    var CardInput5 = $('input',CardSelect5);
    lisBox(CardName[0],CardSelect0,CardInput0);
	lisBox(CardName[1],CardSelect1,CardInput1);
	lisBox(CardName[2],CardSelect2,CardInput2);
	lisBox(CardName[3],CardSelect3,CardInput3);
	lisBox(CardName[4],CardSelect4,CardInput4);
    lisBox(CardName[5],CardSelect5,CardInput5);
    // 客户类型
    var CustomerName = document.getElementsByClassName("customer_types");
	var CustomerSelect0 = document.getElementById("customer_types-1");
    var CustomerInput0 = $('input',CustomerSelect0);

    var CustomerSelect1 = document.getElementById("customer_types-2");
    var CustomerInput1 = $('input',CustomerSelect1);

    var CustomerSelect2 = document.getElementById("customer_types-3");
    var CustomerInput2 = $('input',CustomerSelect2);

    var CustomerSelect3 = document.getElementById("customer_types-4");
    var CustomerInput3 = $('input',CustomerSelect3);

    var CustomerSelect4 = document.getElementById("customer_types-5");
    var CustomerInput4 = $('input',CustomerSelect4);

    var CustomerSelect5 = document.getElementById("customer_types-6");
    var CustomerInput5 = $('input',CustomerSelect5);
    lisBox(CustomerName[0],CustomerSelect0,CustomerInput0);
    lisBox(CustomerName[1],CustomerSelect1,CustomerInput1);
    lisBox(CustomerName[2],CustomerSelect2,CustomerInput2);
    lisBox(CustomerName[3],CustomerSelect3,CustomerInput3);
    lisBox(CustomerName[4],CustomerSelect4,CustomerInput4);
    lisBox(CustomerName[5],CustomerSelect5,CustomerInput5);
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
    // 预览
    function xmTanUploadImg(obj){
        var fl=obj.files.length;
        // for(var i=0;i<fl;i++){
            var file=obj.files[0];
            var reader = new FileReader();
            console.log(obj.parentNode.children.length);
            console.log(obj.parentNode.lastChild);
            reader.onload = function(e){
                console.log("成功读取....");
                
                var imgstr='<img  style="width:300px;height:160px;" src="'+e.target.result+'"/><span class="" onclick="closeP(this);">×</span>';
                var inpstr='<input type="file" name="file" id="files-upload" multiple="multiple" onchange="xmTanUploadImg(this)" imgid="img" style="border:0;width:200px;height:30px;float:left;"/>'
                var oimgbox=document.getElementById("Credit_Cards-pictureList");
                var xdiv=document.createElement("div")
                var ndiv=document.createElement("div");
                xdiv.innerHTML=inpstr;
                xdiv.className="inp-div";
                ndiv.innerHTML=imgstr;
                ndiv.className="img-div";
                ndiv.style = "margin-right:10px;";
                var xxdiv = document.getElementsByClassName("inp-div");
                if(obj.parentNode.children.length > 1){
                    obj.parentNode.removeChild(obj.parentNode.lastChild);
                    obj.parentNode.appendChild(ndiv);
                }else{
                    obj.parentNode.appendChild(ndiv);
                    oimgbox.appendChild(xdiv);
                }
                
            }
            reader.readAsDataURL(file);   
        }
    // }
    function closeP(obj){
        obj.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode);
    }
    //卡组织选择
    var currency = document.getElementsByClassName("currency")[0];
    var card_brand = document.getElementsByClassName("card_brand");
    showHide2(currency,card_brand);
	function showHide2(obj1,obj2){
		if(obj1 != null){
			obj1.value == 0 ? function(){
				obj2[0].style.display ='inline-block';
				obj1.addEventListener('change',function(){
					if (this.value == 0) {
                        obj2[0].style.display ='inline-block';
                        obj2[1].style.display ='none';
					}else{
						obj2[0].style.display ='none';
                        obj2[1].style.display ='inline-block';
					}
				})
			}(): false;
		}
	}