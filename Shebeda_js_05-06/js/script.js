var wrapper = document.createElement('form');
wrapper.setAttribute("name", "wrapper");
wrapper.style.border = '1px solid white';
wrapper.style.width = '1347px';
wrapper.style.marginLeft = '-8px';
wrapper.style.marginTop = '-9px';
wrapper.style.height = '670px';
wrapper.style.background = 'url(photo/fon.jpg)';
wrapper.setAttribute( "onclick", "toggle()" );
document.body.appendChild(wrapper);
//Счетчик
var timer = document.createElement('input');
wrapper.appendChild(timer);
   timer.setAttribute( "name", "stopwatch" );
   timer.setAttribute( "value", "00:00:00.00" );
   timer.style.border = '1px solid rgba(255, 255, 255, 0)';
   timer.style.fontSize = '30px';
   timer.style.background = 'rgba(255, 255, 255, 0)';
   timer.style.size = '10';
   timer.style.textAlign = 'center';
   timer.style.display = 'block';
   timer.style.width = '448px';
   timer.style.height = '70px';
   timer.style.marginLeft = '340px';
   timer.style.marginTop = '110px';
   timer.style.borderRadius = '10px';
   timer.style.outline = 'none';
//start
var input1 = document.createElement('input');
wrapper.appendChild(input1);
input1.setAttribute( "onclick", "pause()" );
input1.setAttribute( "value", "Start" );
input1.setAttribute( "type", "button" );
input1.style.fontSize = '20px';
input1.style.marginLeft = '440px';
input1.style.marginTop = '30px';
input1.style.width = '100px';
input1.style.height = '53px';
input1.style.backgroundColor = '#cfe2f3';
input1.style.border = '1px solid black';
input1.style.borderRadius = '50px';
function handler() {
   if ('click') {
    //pause
   var input3 = document.createElement('input');
   wrapper.appendChild(input3);
   input3.setAttribute( "id", "al1" );
   input3.style.display = 'none';
   input3.setAttribute( "value", "Pause" );
   input3.setAttribute( "onclick", "pause()" );
   input3.setAttribute( "type", "button" );
   input3.style.fontSize = '20px';
   input3.style.position = 'absolute';
   input3.style.marginLeft = '-100px';
   input3.style.marginTop = '30px';
   input3.style.width = '100px';
   input3.style.height = '53px';
   input3.style.backgroundColor = '#cfe2f3';
   input3.style.border = '1px solid black';
   input3.style.borderRadius = '50px';
   //continue

  
  var input4 = document.createElement('input');
  wrapper.appendChild(input4);
  input4.style.display = 'none';
  input4.setAttribute( "id", "ol1" );
  input4.setAttribute( "value", "Continue" );
  input4.setAttribute( "type", "button" );
  input4.setAttribute( "onclick", "pause()" );
  input4.setAttribute( "onclick", "pause()" );
  input4.style.fontSize = '20px';
  input4.style.marginLeft = '-100px';
  input4.style.marginTop = '30px';
  input4.style.width = '100px';
  input4.style.height = '53px';
  input4.style.backgroundColor = '#cfe2f3';
  input4.style.border = '1px solid black';
  input4.style.borderRadius = '50px';
  input4.style.position = 'absolute';
  var input1 = input4;
  input4.style.display = 'inline-block';
  

  }
  //function handler1() {
    //if ('click'){
      //button1 = button2;
    //}
  //}
  //button4.addEventListener('click',handler);
}
input1.addEventListener('click',handler);
function toggle(el) {
  var el = document.getElementById('al1');
  el.style.display = (el.style.display == 'none') ? '' : 'none'
  var el = document.getElementById('ol1');
  el.style.display = (el.style.display == 'none') ? '' : 'none'}
   
//clear
var input2 = document.createElement('input');
wrapper.appendChild(input2);
input2.setAttribute( "type", "button" );
input2.setAttribute( "value", "Clear" );
input2.setAttribute( "onclick", "clearСlock()" );
input2.style.fontSize = '20px';
input2.style.marginLeft = '58px';
input2.style.marginTop = '30px';
input2.style.width = '100px';
input2.style.height = '53px';
input2.style.position = 'absolute';
input2.style.backgroundColor = '#cfe2f3';
input2.style.border = '1px solid black';
input2.style.borderRadius = '50px';
function handler2() {
    var el1 = document.getElementById('al1');
    el1.parentNode.removeChild(el1);
    var el2 = document.getElementById('ol1');
    el2.parentNode.removeChild(el2);
}
input2.addEventListener('click', handler2);


//объявляем переменные
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1, m=1, tm=1,s=0,ts=0,ms=0,show=true, init=0, ii=0; 
//функция для очистки поля
function clearСlock() { 
  clearTimeout(clocktimer); 
  h=1;m=1;tm=1;s=0;ts=0;ms=0; 
  init=0;show=true; 
  readout='00:00:00.00'; 
  document.wrapper.stopwatch.value=readout; 
  ii = 0; 
} 
//функция для старта секундомера
function startTIME() { 
  var cdateObj = new Date(); 
  var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
  if (t>999) { s++; } 
  if (s>=(m*base)) { 
    ts=0; 
    m++; 
  } else { 
    ts=parseInt((ms/100)+s); 
    if(ts>=base) { ts=ts-((m-1)*base); } 
  } 
  if (m>(h*base)) { 
    tm=1; 
    h++; 
  } else { 
    tm=parseInt((ms/100)+m); 
    if(tm>=base) { tm=tm-((h-1)*base); } 
  } 
  ms = Math.round(t/10); 
  if (ms>99) {ms=0;} 
  if (ms==0) {ms='00';} 
  if (ms>0&&ms<=9) { ms = '0'+ms; } 
  if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
  dm=tm-1; 
  if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
  dh=h-1; 
  if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
  readout = dh + ':' + dm + ':' + ds + '.' + ms; 
  if (show==true) { document.wrapper.stopwatch.value = readout; } 
  clocktimer = setTimeout("startTIME()",1); 
}

//функция для паузы
function pause() { 
  if (init==0) { dateObj = new Date(); 
  startTIME(); 
  init=1; 
  } else { if(show==true) { 
  show=false; 
  } else { show=true; } } 
} 






