<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>	
	<head>
		<title>子育金服 -入驻机构后台</title>
		<meta http-equiv="content-type" content="charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="css/Common_Icon_Css.css">
		<link rel="stylesheet" type="text/css" href="css/Client_Total_Css.css" />
		<script type="text/javascript" src="js/Common_Map.js"></script>
		<script type="text/javascript" src="js/Common_UW.js"></script>
	</head>
	<script type="text/javascript">
		function selectByID(id) {
			location.href="http://192.168.0.188/daikuan2/selectByID.do?image_id="+id; 
		}
		function image(id) {
			location.href="http://192.168.0.188/daikuan2/images.do?image_id="+id; 
		}
	</script>
	<body>
		<div id="totalBox">
		 <jsp:include page="model/top.jsp"></jsp:include>
			<jsp:include page="model/left.jsp"></jsp:include>
			<!-- this form left-hand face.[end]-->
			<!-- this form right-hand face.[start]-->
			<span id="rightBox">
				<form id="form" target="formData">
					<div id="formMain">
					<!-- start -->
						<div id="approval">
						<div>
							<div>
								<span>姓名</span>
								<span>客户编号</span>
								<span>贷款金额</span>
								<span>贷款产品</span>
								<span>还款期限</span>
								<span>操作</span>
							</div>
						</div>
						<div class="applicant">
							<c:forEach items="${examines }" var="examine">
								
							<div>
								<span>${examine.basicInformation.basicInformation_name }</span>
								<span class="bid">${examine.basicInformation.b_id }</span>
								<span>${examine.image.image_money/10000 }万</span>
								<span>${examine.creit.product_productName }</span>
								<span>${examine.image.image_month }期</span>
								<span>
									<button class="applyBtn" onclick="selectByID(${examine.image.image_id})">申请资料</button>
									<button class="applyBtn" onclick="image(${examine.image.image_id})">申请表</button>
								</span>
							</div>
							</c:forEach>
						</div>
					</div>
					
					<!-- end  -->
					</div>
					<div id="formHandle">
						<input id="dataHandle" type="button" value="提交" />
					</div>
				</form>	
			</span>
			<!-- this form right-hand face.[start]-->
		</div>
		<iframe name="formData" id="formData"></iframe>
		<script src="js/Client_Total_Script.js"></script>
		<script type="text/javascript">
		

	 	</script>
	</body>
</html>