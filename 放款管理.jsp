<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <title>子育金服 -入驻机构后台</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta name="robit" content="no-fallow">
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
                                <h7>您当前的位置：</h7>
                                <span><a href="#">首页</a> &gt; 成员管理</span>
                            </p>
                            <p id="que-nav-data">
                                <span id="nav-data-span1"></span>
                            </p>
                        </div>
                    </div>
                    <span id="rightBox">
                    <table border="1" class="refund">
                        <tr>
                            <th>产品</th> 
                            <th>用户名</th> 
                            <th>面签时间</th>
                            <th>操作</th>
                        </tr>
                        <c:forEach items="${examines }" var="examines">
                        <tr>
                            <td>${examines.creit.product_productName }</td> 
                            <td>${examines.personalAccount.account_name }</td> 
                            <td>
                            </td> 
                            <td><a href="merchantAccount_selectByID.do?image_id=${examines.image.image_id }">添加</a></td>
                        </tr>
                        </c:forEach>
                    </table>
                    <!-- 详情 -->
                </span>
                </span>
            </div>
    <jsp:include page="../model/js.jsp"></jsp:include>
</body>
</html>