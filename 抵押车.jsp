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
          <p>&#42;车辆品牌</p>
          <div>
            <input type="text" name="mortgageVehicleBrand" />
          </div>
        </span>
        <span>
          <p>&#42;车型</p>
          <div>
          	<select name="mortgageVehicleModels">
          		<option>轿车</option>
          		<option>商务车</option>
          		<option>面包车</option>
          		<option>越野车</option>
          		<option>越野车(城市SUV)</option>
          		<option>皮卡车</option>
          		<option>跑车</option>
          		<option>货车</option>
          		<option>工程车</option>
          		<option>客车</option>
          	</select>
          </div>
        </span>
        <span>
          <p>&#42;裸车价(万元)</p>
          <div>
            <input type="text" name="minmortgageVehiclePrice" />
            <b>&#45;</b>
            <input type="text" name="maxmortgageVehiclePrice" />
          </div>
        </span>
        <span>
          <p>&#42;车龄</p>
          <div>
            <b>&#8804;</b>
            <input type="text" name="mortgageVehicleLicenseTime" />
            <b>月</b>
          </div>
        </span>
        <span>
          <p>&#42;公里数</p>
          <div>
            <b>&#8804;</b>
            <input type="text" name="mortgageVehicleKilometer" />
            <b>公里</b>
          </div>
        </span>
        <span>
          <p>&#42;全款车</p>
          <div>
           <select name="mortgageVehicleQuankuan">
           		<option value="1">接受</option>
           		<option value="0">不接受</option>
           </select>
          </div>
        </span>
        <span>
          <p>&#42;全款车抵押折扣</p>
          <div>
            <input type="text" name="mortgageVehicleQuankuanDiscount" />
          </div>
        </span>
        <span>
          <p>&#42;按揭车</p>
          <div>
           <select name="mortgageVehicleAnjie">
           		<option value="1">接受</option>
           		<option value="0">不接受</option>
           </select>
          </div>
        </span>
        <span>
          <p>&#42;按揭车抵押折扣</p>
          <div>
            <input type="text" name="mortgageVehicleAnjieDiscount" />
          </div>
        </span>
        <span>
          <p>&#42;已抵押车</p>
          <div>
           <select name="mortgageVehicleYidiya">
           		<option value="1">接受</option>
           		<option value="0">不接受</option>
           </select>
          </div>
        </span>
        <span>
          <p>&#42;已抵押车折扣</p>
          <div>
            <input type="text" name="mortgageVehicleYidiyaDiscount" />
          </div>
        </span>
        <span>
          <p>&#42;车牌</p>
          <div>
          	<select name="mortgageVehiclePlate">
          		
          	</select>
          </div>
        </span>
        <span>
          <p>抵押方式</p>
          <select name="vehicleType">
            <option>押车</option>
            <option>不押车</option>
          </select>
        </span>
      </fieldset>
        <input type="hidden" value="${account.account_id }" name="a_id"/>
        <input type="hidden" value="2" name="product_loanType"/>
        <input type="hidden" value="${creit.product_identity }" name="product_identity"/>
     <jsp:include page="model/zhengxin.jsp"></jsp:include>
    </form>
  </span>
</div>
<script src="js/Client_Total_Script.js"></script>
</body>
</html>
