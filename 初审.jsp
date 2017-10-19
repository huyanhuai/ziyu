<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/repayment.css">
    <style>
        body{ width: 100% }
        div,p,span,img,a,button,ul,li{ margin: 0;padding: 0; }
        .clear:after{ clear:both;content:'';display:block;width: 0;height: 0;visibility:hidden;}
        ul,li{ list-style: none; }
        #rightBox{ width: 85%;background: #efefef; }
        #cusFir{ width: 80%;background: #fff;margin: 0 auto;height: 38px;line-height: 38px;border-top: 4px solid #009cff; }
        .cusFir_span{ font-size: 16px;display: block;margin-left: 18px; }
        #cusCon{ width: 80%;margin: 0 auto;border: 1px solid #e5e5e5;border-top: none;background: #efefef;overflow: hidden; }
        #cusCon li{ width: 95%;height:108px;background: #fff;margin: 9px auto 0; }
        #cusCon li img{ margin-top: 27px;margin-left: 26px;float: left; }
        #cusCon li p{ float: left;width: 346px;margin-top: 20px;font-size: 20px;margin-left: 42px;}
        .cusPad{ padding-left: 20px; }
        #page{text-align: center;}
    </style>
</head>
<body>
    <span id="rightBox">
        <div id="cusFir">
            <span class="cusFir_span">客户初审</span>
        </div>
        <ul id="cusCon">
        	<c:forEach items="${examines }" var="examines" begin="${page.startPos }" end="${page.pageNow*page.pageSize-1 }">
        		<li class="clear">
                <img src="${examines.creit.product_bankImage }" alt="" width="60px" height="60px">
                <p>申请${examines.account.account_bankName }贷款</p>
                <p>身份证号码：<span>${examines.basicInformation.basicInformation_IDcard }</span></p>
                <p>
                    <span>姓名：${examines.basicInformation.basicInformation_name }</span>
                    <span class="cusPad">性别：
                    <span>
                        <c:if test="${examines.basicInformation.basicInformation_sex==0 }">男</c:if>
                        <c:if test="${examines.basicInformation.basicInformation_sex==1 }">女</c:if>
                    </span></span>
                </p>
                <p>
                                       电话号码：<span>${examines.basicInformation.basicInformation_mobile }</span>
                </p>
                <p><a href="product_trial.do?image_id=${examines.image.image_id }"><button>查看详细</button></a></p>
            	</li>
        	</c:forEach>
        </ul>
    </span>
        <div id="page">
        	<a href="product_trialTable.do?account_id=${account.account_id }&a_id=${account.a_id}&pageNum=${page.pageNow-1 }">上一页</a>
        	<a href="product_trialTable.do?account_id=${account.account_id }&a_id=${account.a_id}&pageNum=${page.pageNow+1 }">下一页</a>
        	<a href="product_trialTable.do?account_id=${account.account_id }&a_id=${account.a_id}">首页</a>
        	<a href="product_trialTable.do?account_id=${account.account_id }&a_id=${account.a_id}&pageNum=${page.totalPageCount }">尾页</a>
        	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前第${page.pageNow }页共${page.totalPageCount }页
        </div>
</body>
</html>