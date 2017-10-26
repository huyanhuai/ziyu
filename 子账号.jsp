<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/Child_account.css">
</head>
<body>
    <div id="per-que">
        <div class="per-que-nav clear">
            <img src="img/home2.png" alt="">
            <p class="que-nav-cur">
                <h7>您当前的位置：</h7>
                <span><a href="">首页</a> > 添加子账号</span>
            </p>
            <p id="que-nav-data">
                <span id="nav-data-span1"></span>
                <span id="nav-data-span2"></span>
                <span id="nav-data-span3"></span>
            </p>
        </div>
        <div class="per_que_con">
            <div class="per_con_con">
                <div class="per_con_tit">
                    <h3>添加子账号</h3>
                </div>
                <div class="per_con_form">
                    <form action="">
                        <p>
                            <span>账号</span>
                            <input type="text" placeholder="请输入账号" name="account_name">
                        </p>
                        <p>
                            <span>用户名</span>
                            <input type="text" placeholder="请输入用户名" name="account_bankName">
                        </p>
                        <p>
                            <span>密码</span>
                            <input type="text" placeholder="密码最小长度为6位" name="account_pass">
                        </p>
                        <p>
                            <span>确认密码</span>
                            <input type="text" placeholder="请重复密码">
                        </p>
                        <div class="clear">
                            <span>权限</span>
                            <!--<li>
                                <div>可授权权限</div>
                                <select multiple>
                                    <option value="0">产品管理</option>
                                    <option value="1">子账号管理</option>
                                    <option value="2">客户</option>
                                    <option value="3">产品管理</option>
                                    <option value="4">产品管理</option>
                                </select>
                            </li>
                            <li class="li_2">
                                <div>已授权权限</div>
                                <select multiple></select>
                            </li>-->
                            <input type="text" id="sel">
                            <ul>
                                <li>
                                    <input type="checkbox" value="0" name="account_power">
                                    <span>产品发布</span>
                                </li>
                                <li>
                                    <input type="checkbox" value="1" name="account_power">
                                    <span>还款管理</span>
                                </li>
                                <li>
                                    <input type="checkbox" value="2" name="account_power">
                                    <span>贷款审核</span>
                                </li>
                                <li>
                                    <input type="checkbox" value="3" name="account_power">
                                    <span>产品管理</span>
                                </li>
                                <li>
                                    <input type="checkbox" value="4" name="account_power">
                                    <span>账号管理</span>
                                </li>
                            </ul>
                        </div>
                        <p>
                            <span>状态</span>
                            <select name="account_state" id="">
                                <option value="0">激活</option>
                                <option value="1">不激活</option>
                            </select>
                        </p>
                        <div class="per_btn">
                            <button>保存</button>
                            <button class="btn_2">取消</button>
                        </div>
                    </form>
                    <input type="hidden" value="${message }" id="message"/>
                </div>
            </div>
        </div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/time.js"></script>
    <script src="js/Child_account.js"></script>
    <c:if test="${message!=null }">
    <script>
    	$(function(){
    		var message=$('#message').val();
    		alert(message);
    	})
    </script>
    </c:if>
</body>
</html>