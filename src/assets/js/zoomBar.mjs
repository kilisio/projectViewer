var seek = document.querySelector('.zoomBar');
var fill = document.querySelector('.zoomFill');
var handle = document.querySelector('.zoomDot');
function clamp(min,val,max){
  return Math.min(Math.max(min,val),max);
}
let mousedown = false;
seek.addEventListener('mousedown', function(e){
  mousedown = true;
  var p = (e.clientX - seek.offsetLeft)/seek.clientWidth;
  clamp(0,p,1);
  // console.log(p);
  fill.style.width = p * 100 + '%';
  document.querySelector(".responsiveIframe iframe").style.transform = 'scale(' + p + ')';
});
seek.addEventListener('mouseup', function(e){
  if(!mousedown) return;
  mousedown = false;
  var p = (e.clientX - seek.offsetLeft)/seek.clientWidth;
  clamp(0,p,1);
  fill.style.width = p * 100 + '%';
  document.querySelector(".responsiveIframe iframe").style.transform = 'scale(' + p + ')';
});
window.addEventListener('mousemove', function(e){
  if(!mousedown) return;
  var p = (e.clientX - seek.offsetLeft)/seek.clientWidth;
  clamp(0,p,1);
  fill.style.width = p * 100 + '%';
  document.querySelector(".responsiveIframe iframe").style.transform = 'scale(' + p + ')';
});
