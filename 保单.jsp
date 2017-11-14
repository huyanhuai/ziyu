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
          <p>&#42;投保公司限制</p>
          <div>
              <p class="module_select--title">请选择</p>
              <div class="module_select" id="town">
                  <div>
                      <label for="">全选</label>
                      <input type="checkbox" name="" id="moduleAll" >
                    </div>
              </div>
            </div>
        </span>
        <span>
          <p>&#42;投保生效时间</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policyEffectTime" value="${productPolicy.policyEffectTime }"/>
            <b>月</b>
          </div>
        </span>
        <span>
          <p>&#42;总保额</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policyPrice" value="${productPolicy.policyPrice }"/>
            <b>万元</b>
          </div>
        </span>
        <span>
          <p>&#42;限制保险类型</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policyRestrictType" value="${productPolicy.policyRestrictType }"/>
          </div>
        </span>
        <span>
          <p>&#42;限制缴费方式</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policyRestrictMode" value="${productPolicy.policyRestrictMode }"/>
          </div>
        </span>
        <span>
          <p>&#42;月缴金额</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policyMonthlyPayment" value="${productPolicy.policyMonthlyPayment }"/>
            <b>元</b>
          </div>
        </span>
        <span>
          <p>&#42;年缴金额</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policyYearPayment" value="${productPolicy.policyYearPayment }"/>
            <b>元</b>
          </div>
        </span>
        <span>
          <p>&#42;投保人</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policyHholder" value="${productPolicy.policyHholder }"/>
          </div>
        </span>
        <span>
          <p>&#42;保单总期限</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policyTotalTime" value="${productPolicy.policyTotalTime }"/>
            <b>月</b>
          </div>
        </span>
        <span>
          <p>&#42;保单剩余时间</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policySurplusTime" value="${productPolicy.policySurplusTime }"/>
            <b>月</b>
          </div>
        </span>
         <span>
          <p>&#42;万能险投保生效时间</p>
          <div>
            <b>&#8805;</b>
            <input type="text" name="policySurplusTime" value="${productPolicy.policySurplusTime }"/>
            <b>月</b>
          </div>
        </span>
      </fieldset>
     <jsp:include page="model/zhengxin.jsp"></jsp:include>
    </form>
  </span>
</div>
<script src="js/Client_Total_Script.js"></script>
</body>
</html>
