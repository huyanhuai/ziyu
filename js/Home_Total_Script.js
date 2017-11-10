//定义画布宽高和生成点的个数
var canvas = $('@home_head--canvas'),POINT = 35;
var WIDTH = canvas.offsetWidth, HEIGHT = canvas.offsetHeight;
canvas.width = WIDTH,
canvas.height = HEIGHT;
var context = canvas.getContext('2d');
context.strokeStyle = 'rgba(255,255,255,0.02)',
context.fillStyle = 'rgba(255,255,255,0.2)';
var circleArr = [];
//线条：开始xy坐标，结束xy坐标，线条透明度
function Line (x, y, _x, _y, o){
  this.beginX = x,
  this.beginY = y,
  this.closeX = _x,
  this.closeY = _y,
  this.o = o;
}
//点：圆心xy坐标，半径，每帧移动xy的距离
function Circle (x, y, r, moveX, moveY) {
  this.x = x,
  this.y = y,
  this.r = r,
  this.moveX = moveX,
  this.moveY = moveY;
}
//生成max和min之间的随机数
function num (max, _min) {
  var min = arguments[1] || 0;
  return Math.floor(Math.random()*(max-min+1)+min);
}
// 绘制原点
function drawCricle (cxt, x, y, r, moveX, moveY) {
  var circle = new Circle(x, y, r, moveX, moveY)
  cxt.beginPath()
  cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
  cxt.closePath()
  cxt.fill();
  return circle;
}
//绘制线条
function drawLine (cxt, x, y, _x, _y, o) {
  var line = new Line(x, y, _x, _y, o)
  cxt.beginPath()
  cxt.strokeStyle = 'rgba(255,255,255,'+ o +')'
  cxt.moveTo(line.beginX, line.beginY)
  cxt.lineTo(line.closeX, line.closeY)
  cxt.closePath()
  cxt.stroke();

}
//初始化生成原点
function init () {
  circleArr = [];
  for (var i = 0; i < POINT; i++) {
    circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
  }
  draw();
}
//每帧绘制
function draw () {
  context.clearRect(0,0,canvas.width, canvas.height);
  for (var i = 0; i < POINT; i++) {
    drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
  }
  for (var i = 0; i < POINT; i++) {
    for (var j = 0; j < POINT; j++) {
      if (i + j < POINT) {
        var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
          B = Math.abs(circleArr[i+j].y - circleArr[i].y);
        var lineLength = Math.sqrt(A*A + B*B);
        var C = 1/lineLength*7-0.009;
        var lineOpacity = C > 0.03 ? 0.03 : C;
        if (lineOpacity > 0) {
          drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
        }
      }
    }
  }
}
//调用执行
window.onload = function () {
  setInterval(function () {
    for (var i = 0; i < POINT; i++) {
      var cir = circleArr[i];
      cir.x += cir.moveX;
      cir.y += cir.moveY;
      if (cir.x > WIDTH) cir.x = 0;
      else if (cir.x < 0) cir.x = WIDTH;
      if (cir.y > HEIGHT) cir.y = 0;
      else if (cir.y < 0) cir.y = HEIGHT;
    }
    draw();
  },16);
  init();
  var UserName = $('@login_input--name'),
    UserPassword = $('@login_input--pass'),
    LoginInter = $('@login_interface'),
    Message = $('@login_message'),
    BtnLogin = $('@login_input--submit'),
    Counter = 0,
    Notice = '<i class="fa fa-exclamation-triangle"></i>';
  $('#Log_In') && ($('#Log_In').onclick = function(){
    LoginInter.style.display = 'block';
    LoginInter.style.left=(window.innerWidth/2-LoginInter.offsetWidth/2)+'px';
    LoginInter.style.top=(window.innerHeight/2-LoginInter.offsetHeight/2)+'px';
    BtnLogin.onclick = SubmitValue;
  });
  $('@login_interface--close').onclick = function(){
    LoginInter.removeAttribute('style');
    UserName.value = null;
    UserPassword.value = null;
    Message.innerText = null;
  };
  UserName.onfocus = function(){
    if(BtnLogin.disabled == true){
      BtnLogin.disabled = false;
      BtnLogin.style.cursor = 'pointer';
    };
    Message.innerText = null;
  };
  UserPassword.onfocus = function(){
    Message.innerText = null;
  };
  function CursorVerfy(ACourier,BCourier){
    if(ACourier){
      Counter = 1;
      BCourier.disabled = true;
      BCourier.style.cursor = 'not-allowed';
    }else{
      Counter = 0;
      BCourier.disabled = false;
      BCourier.style.cursor = 'pointer';
    }
  }
  function SubmitValue(){
    if(UserName.value == ''||UserPassword.value ==''){
      Message.innerHTML = Notice+'不能有空值';
    }else{
      CursorVerfy(!Counter,BtnLogin);
      AsyncJX({
        Method:'get',
        Url:'http://192.168.0.188/daikuan2/account_login.do',
        Value:{
          Key:[UserName.name,UserPassword.name],
          Value:[UserName.value,MD5(UserPassword.value)]
        },
        RightExecutor:function(arg){
          CursorVerfy(!Counter,BtnLogin);
          if(/\d/i.test(arg)){
            if(arg<'5'){
              Message.innerHTML = Notice+"已经错误"+arg+"次,还剩"+(5-arg)+"次锁定帐号";
            }else{
              Message.innerHTML = Notice+"帐号已被锁定请联系客服";
              BtnLogin.disabled = true;
              BtnLogin.style.cursor = 'not-allowed';
            };
          }else{
            if(arg == 'false'){
              Message.innerHTML = Notice+"此帐号不存在";
            }else{
              location.reload();
            };
          };
        }
      });
    }
  };
}