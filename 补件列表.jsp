<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>子育金服 -补件</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta name="robit" content="no-fallow">
    <style>
    	.bj_back{ width: 600px;background: #161b1f;position: absolute;margin-left:50%;left: -180px;margin-top: 130px;word-wrap:break-word ; }
    	#cusCon li p .bj{ background: rgb(255,0,0); }
    	.bj_x{ text-align: left;width:15px;margin-left: 580px;color: #fff;margin-bottom: 20px;font-size: 20px;cursor: pointer; }
    	.bj_back p{ text-align: left;font-size: 20px;color: #fff;width: 500px;margin: 0 auto 20px; }
    </style>
    <jsp:include page="../model/js.jsp"></jsp:include>
</head>
<body>
    <jsp:include page="../model/top.jsp"></jsp:include>
      <div class="DBMS_body">
        <jsp:include page="../model/left.jsp"></jsp:include>
        <span class="DBMS_disArea">
        	<div class="bj_back">      
        		<div class="bj_x">X</div>
        		<p>按揭大胜靠德就撒看到数据安康的垃圾的卡萨连接到卡萨丁就萨克的骄傲可大了就打卡机大卡的数据库了进的萨克大健康了大家可是大佬</p>
        	</div>
          <div id="nav">
              <div class="per-que-nav clear">
                  <p class="que-nav-cur">
                      <span class="fa fa-home house"></span>
                      <h7>您当前的位置:</h7>
                      <span><a href="#">首页</a> &gt; 补件列表</span>
                  </p>
                  <p id="que-nav-data">
                      <span id="nav-data-span1"></span>
                      <span id="nav-data-span2"></span>
                      <span id="nav-data-span3"></span>
                  </p>
              </div>
            </div>
          <span id="rightBox">
            <div class="cusFir">
                <h1 class="cusFir_span">补件列表</h1>
            </div>
            <ul id="cusCon">
              <c:forEach items="${examines }" var="examines" begin="${page.startPos }" end="${page.pageNow*page.pageSize-1 }">
                <li class="clear">
                    <img src="${examines.creit.product_bankImage }" alt="" >
                    <p>申请贷款:${examines.merchantAccount.account_bankName }</p>
                    <p>身份证号码:${examines.personalAccount.account_IDcard }<span></span></p>
                    <p>
                        <span>姓名:${examines.personalAccount.account_name }</span>
                        <span class="cusPad">性别:
                        <span>
                            <c:if test="${examines.personalAccount.account_sex==0 }">男</c:if>
                            <c:if test="${examines.personalAccount.account_sex==1 }">女</c:if>
                        </span></span>
                    </p>
                    <p>
                        电话号码:<span>${examines.personalAccount.account_phone }</span>
                    </p>
                    <p><a href=""><button class="bj">补件原因</button></a></p>
                    <p><a href="product_trial.do?image_id=${examines.image.image_id }"><button>查看详细</button></a></p>
                </li>
              </c:forEach>
            </ul>
        
            <div id="page">
              <a href="product_trialTable.do?pageNum=${page.pageNow-1 }">上一页</a>
              <a href="product_trialTable.do?pageNum=${page.pageNow+1 }">下一页</a>
              <a href="product_trialTable.do">首页</a>
              <a href="product_trialTable.do?pageNum=${page.totalPageCount }">尾页</a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前第${page.pageNow }页共${page.totalPageCount }页
            </div>
          </span>
        </span>
    </div>
</body>
</html>