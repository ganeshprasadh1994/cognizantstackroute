
(function(){
  var speed=300,
  i=0,
  moveBox=function(){
    var el=document.getElementByID("box"),
    left=el.offsetLeft ,
    moveBy=3;
    el.style.left=left+moveBy+"px";
    if(left>399){
      clearTimeout(timer);
    }
  };
  var timer=setInterval(function() moveBox(3),speed);
}());
