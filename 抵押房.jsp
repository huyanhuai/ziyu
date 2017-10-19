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
        <c:choose>
        	<c:when test="${creit.product_identity==1 }">
        		<span>
		          <p>现单位工作时间</p>
		          <div>
		            <b>&#8805;</b>
		            <input type="text" name="workShift" />
		            <b>月</b>
		          </div>
		        </span>
		        <span>
		          <p>工作时间</p>
		          <div>
		            <b>&#8805;</b>
		            <input type="text" name="workTime" />
		            <b>月</b>
		          </div>
		        </span>
        	</c:when>
        	<c:otherwise>
        		 <span>
		          <p>营业执照要求</p>
		          <div>
		            <select class="require_businessLicense" name="businessLicense">
		              <option value="1">有</option>
		              <option value="0">有无均可</option>
		            </select>
		          </div>
		        </span>
		        <span class="require_registerTime">
		          <p>营业执照注册时间</p>
		          <div>
		            <b>&#8805;</b>
		            <input type="text" name="registerTime" />
		            <b>月</b>
		          </div>
		        </span>
		        <span>
		          <p>经营时间</p>
		          <div>
		            <b>&#8805;</b>
		            <input type="text" name="managementTime" />
		            <b>月</b>
		          </div>
		        </span>
        	</c:otherwise>
        </c:choose>
        <span>
          <p>&#42;购房价格</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="housePrice" />
            <b>万元</b>
          </div>
        </span>
        <span>
          <p>&#42;总抵押期限</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="houseMortgageTerm" />
            <b>月</b>
          </div>
        </span>
        <span>
          <p>&#42;已抵押期限</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="houseSecuredTerm" />
            <b>月</b>
          </div>
        </span>
        <span>
          <p>&#42;月付利息</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="houseMonthInterest" />
            <b>元</b>
          </div>
        </span>
        <span>
          <p>&#42;季付利息</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="houseSeasonInterest" />
            <b>元</b>
          </div>
        </span>
        <span>
          <p>&#42;月收入</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="houseMonthIncome" />
            <b>元</b>
          </div>
        </span>
        <span>
          <p>房产类型</p>
          <select name="houseType">
            <option>抵押房</option>
            <option>本市抵押</option>
            <option>外市抵押</option>
          </select>
        </span>
        <span>
          <p>是否出租</p>
          <select name="houseLease">
            <option value="1">是</option>
            <option value="0">无要求</option>
          </select>
        </span>
      </fieldset>
     <jsp:include page="model/zhengxin.jsp"></jsp:include>
    </form>
  </span>
</div>
<script src="js/Client_Total_Script.js"></script>
</body>
</html>
