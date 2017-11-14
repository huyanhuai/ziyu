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
</head>
<body>
<jsp:include page="../model/top.jsp"></jsp:include>
<div class="DBMS_body">
 <jsp:include page="../model/left.jsp"></jsp:include>
  <span class="DBMS_disArea">
  <div id="nav">
              <div class="per-que-nav clear">
                  <p class="que-nav-cur">
                      <span class="fa fa-home house"></span>
                      <h7>您当前的位置:</h7>
                      <span><a href="#">信用贷款</a> &gt; 消费贷</span>
                  </p>
                  <p id="que-nav-data">
                      <span id="nav-data-span1"></span>
                      <span id="nav-data-span2"></span>
                      <span id="nav-data-span3"></span>
                  </p>
              </div>
            </div>
    <form class="product--warp"  method="post">
      <jsp:include page="../model/jiben.jsp"></jsp:include>
      <fieldset class="product_otherInfo--warp">
        <legend>进件要求2</legend>
         <span>
          <p>&#42;连续打卡工资次数</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="salaryNumber" value="${commutersConsumption.salaryNumber }"/>
          </div>
        </span>
        <span>
          <p>&#42;打卡工资</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="salary" value="${commutersConsumption.salary }"/>
            <b>元</b>
          </div>
        </span>
        
        <span>
          <p>&#42;社保</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="sociaNumber" value="${commutersConsumption.sociaNumber }"/>
            <b>月</b>
          </div>
        </span>
        <span>
          <p>&#42;社保基数</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="social" value="${commutersConsumption.social }"/>
          </div>
        </span>
        <span>
          <p>&#42;公积金</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="fundNumber" value="${commutersConsumption.fundNumber }"/>
            <b>月</b>
          </div>
        </span>
        <span>
          <p>&#42;公积金单边缴纳</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="fund" value="${commutersConsumption.fund }"/>
            <b>元</b>
          </div>
        </span>
        <span>
          <p>&#42;商品房要求</p>
          <div>
          	<select name="houseRequirement">
          		<option ${commutersConsumption.houseRequirement=='有商品房'?'selected':'' }>有商品房</option>
          		<option ${commutersConsumption.houseRequirement=='本市房产'?'selected':'' }>本市房产</option>
          		<option ${commutersConsumption.houseRequirement=='外市房产'?'selected':'' }>外市房产</option>
          		<option ${commutersConsumption.houseRequirement=='本市全款'?'selected':'' }>本市全款</option>
          		<option ${commutersConsumption.houseRequirement=='外市全款'?'selected':'' }>外市全款</option>
          		<option ${commutersConsumption.houseRequirement=='本市按揭'?'selected':'' }>本市按揭</option>
          		<option ${commutersConsumption.houseRequirement=='外市按揭'?'selected':'' }>外市按揭</option>
          		<option ${commutersConsumption.houseRequirement=='本市抵押'?'selected':'' }>本市抵押</option>
          		<option ${commutersConsumption.houseRequirement=='外市抵押'?'selected':'' }>外市抵押</option>
          		<option ${commutersConsumption.houseRequirement=='无要求'?'selected':'' }>无要求</option>
          	</select>
          </div>
        </span>
      </fieldset>
        <input type="hidden" value="2" name="product_loanType"/>
        <input type="hidden" value="${creit.product_identity }" name="product_identity"/>
     <jsp:include page="../model/zhengxin.jsp"></jsp:include>
    </form>
  </span>
</div>
<jsp:include page="../model/js.jsp"></jsp:include>
</body>
</html>
