<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>  
<head>
  <title>子育金服 -入驻机构后台</title>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta http-equiv="Pragma" content="no-cache" />
  <link rel="stylesheet" type="text/css" href="css/Client_Icon_Css.css" />
  <link rel="stylesheet" type="text/css" href="css/Client_Total_Css.css" />
  <script type="text/javascript" src="js/Common_Map.js"></script>
  <script type="text/javascript" src="js/Common_UW.js"></script>
</head>
<body>
<jsp:include page="model/top.jsp"></jsp:include>
<div class="DBMS_body">
 <jsp:include page="model/left.jsp"></jsp:include>
  <span class="DBMS_disArea">
    <form class="product--warp" action="product_add.do" method="post">
      <jsp:include page="model/jiben.jsp"></jsp:include>
      <fieldset class="product_otherInfo--warp">
        <legend>进件要求</legend>
        <span>
          <p>&#42;房龄</p>
          <div>
            <b>&#8804;</b>
            <input type="text" name="mortgageHouseYears" />
            <b>年</b>
          </div>
        </span>
        <span>
          <p>&#42;房屋性质</p>
          <div>
              <p class="module_position--title">请选择</p>
              <div class="module_position" id="position">
                  <div>
                      <label for="">全选</label>
                      <input type="checkbox" name="" id="" >
                  </div>
                  <div>
                      <label for="" title="住宅">住宅</label>
                      <input type="checkbox" name="" value="住宅" >
                  </div>
                  <div>
                      <label for="">厂房</label>
                      <input type="checkbox" name="" value="厂房" >
                  </div>
                  <div>
                      <label for="">别墅/排屋</label>
                      <input type="checkbox" name="" value="别墅/排屋" >
                  </div>
                  <div>
                      <label for="">经济适用房</label>
                      <input type="checkbox" name="" value="经济适用房" >
                  </div>
                  <div>
                    <label for="">房改房</label>
                    <input type="checkbox" name="" value="房改房" >
                </div>
                <div>
                    <label for="">商住两用房</label>
                    <input type="checkbox" name="" value="商住两用房" >
                </div>
                <div>
                    <label for="">写字楼</label>
                    <input type="checkbox" name="" value="写字楼" >
                </div>
                <div>
                    <label for="">商铺</label>
                    <input type="checkbox" name="" value="商铺" >
                </div>
                <div>
                    <label for="">商用</label>
                    <input type="checkbox" name="" value="商用" >
                </div>
              </div>
          </div>
          <!-- <div>
          	<select name="mortgageHouseNature">
          		<option>住宅</option>
          		<option>厂房</option>
          		<option>别墅/排屋</option>
          		<option>经济适用房</option>
          		<option>房改房</option>
          		<option>商住两用房</option>
          		<option>写字楼</option>
          		<option>商铺</option>
          		<option>商用</option>
          	</select>
          </div> -->
        </span>
        <span>
          <p>&#42;土地性质</p>
          <div>
              <p class="module_position--title">请选择</p>
              <div class="module_position" id="position">
                  <div>
                      <label for="">全选</label>
                      <input type="checkbox" name="" id="" >
                  </div>
                  <div>
                      <label for="">住宅用地</label>
                      <input type="checkbox" name="" value="住宅用地" >
                  </div>
                  <div>
                      <label for="">工业用地</label>
                      <input type="checkbox" name="" value="工业用地" >
                  </div>
                  <div>
                      <label for="">仓储用地</label>
                      <input type="checkbox" name="" value="仓储用地" >
                  </div>
                  <div>
                      <label for="">商业服务用地</label>
                      <input type="checkbox" name="" value="商业服务用地" >
                  </div>
                  <div>
                    <label for="">旅游业用地</label>
                    <input type="checkbox" name="" value="旅游业用地" >
                </div>
                <div>
                    <label for="">金融保险业用地</label>
                    <input type="checkbox" name="" value="金融保险业用地" >
                </div>
                <div>
                    <label for="">市政公用设施用地</label>
                    <input type="checkbox" name="" value="市政公用设施用地" >
                </div>
                <div>
                    <label for="">绿代用地</label>
                    <input type="checkbox" name="" value="绿代用地" >
                </div>
                <div>
                    <label for="">公共建筑用地</label>
                    <input type="checkbox" name="" value="公共建筑用地" >
                </div>
                <div>
                    <label for="">文/体娱用地</label>
                    <input type="checkbox" name="" value="文/体娱用地" >
                </div>
                <div>
                    <label for="">机关/宣传用地</label>
                    <input type="checkbox" name="" value="机关/宣传用地" >
                </div>
                <div>
                    <label for="">科研设计用地</label>
                    <input type="checkbox" name="" value="科研设计用地" >
                </div>
                <div>
                    <label for="">教育用地</label>
                    <input type="checkbox" name="" value="教育用地" >
                </div>
                <div>
                    <label for="">医卫用地</label>
                    <input type="checkbox" name="" value="医卫用地" >
                </div>
                <div>
                    <label for="">交通用地</label>
                    <input type="checkbox" name="" value="交通用地" >
                </div>
                <div>
                    <label for="">铁路用地</label>
                    <input type="checkbox" name="" value="铁路用地" >
                </div>
                <div>
                    <label for="">民用机场用地</label>
                    <input type="checkbox" name="" value="民用机场用地" >
                </div>
                <div>
                    <label for="">港口码头用地</label>
                    <input type="checkbox" name="" value="港口码头用地" >
                </div>
                <div>
                    <label for="">其他交通用地</label>
                    <input type="checkbox" name="" value="其他交通用地" >
                </div>
              </div>
          </div>
          <!-- <div>
          	<select name="mortgageHouseLandNature">
          		<option>住宅用地</option>
          		<option>工业用地</option>
          		<option>仓储用地</option>
          		<option>商业服务用地</option>
          		<option>旅游业用地</option>
          		<option>金融保险业用地</option>
          		<option>市政公用设施用地</option>
          		<option>绿代用地</option>
          		<option>公共建筑用地</option>
          		<option>文/体娱用地</option>
          		<option>机关/宣传用地</option>
          		<option>科研设计用地</option>
          		<option>教育用地</option>
          		<option>医卫用地</option>
          		<option>交通用地</option>
          		<option>铁路用地</option>
          		<option>民用机场用地</option>
          		<option>港口码头用地</option>
          		<option>其他交通用地</option>
          	</select>
          </div> -->
        </span>
        <span>
          <p>&#42;使用权类型</p>
          <div>
              <p class="module_--title">请选择</p>
              <div class="module_" id="">
                  <div>
                      <label for="">出让</label>
                      <input type="checkbox" name="" value="出让" >
                  </div>
                  <div>
                      <label for="">划拨</label>
                      <input type="checkbox" name="" value="划拨" >
                  </div>
              </div>
          </div>
          <!-- <div>
          	<select name="mortgageHouseUseType">
          		<option>出让</option>
          		<option>划拨</option>
          	</select>
          </div> -->
        </span>
        <span>
          <p>&#42;第二住所证明</p>
          <div>
          	<select name="mortgageHouseSecondResidence">
          		<option>有</option>
          		<option>有无均可</option>
          	</select>
          </div>
        </span>
        <span>
          <p>&#42;房屋与工作地是否一致</p>
          <div>
          	<select name="mortgageHouseDeptAgreement">
          		<option>是</option>
          		<option>无要求</option>
          	</select>
          </div>
        </span>
        <span>
          <p>全款房</p>
          <select name="mortgageHouseQuankuan">
            <option value="1">接受</option>
            <option value="0">不接受</option>
          </select>
        </span>
        <span>
          <p>全款房折扣</p>
          <input type="text" name="mortgageHouseQuankuanDiscount"/>
        </span>
        <span>
          <p>按揭房或已抵押房</p>
          <select name="mortgageHouseAnjie">
            <option value="1">接受</option>
            <option value="0">不接受</option>
          </select>
        </span>
        <span>
          <p>按揭房或已抵押折扣</p>
          <input type="text" name="mortgageHouseAnjieDiscount"/>
        </span>
      </fieldset>
     <jsp:include page="model/zhengxin.jsp"></jsp:include>
    </form>
  </span>
</div>
<script src="js/Client_Total_Script.js"></script>
</body>
</html>
