"use strict";console.log("%c avcexyegonet ","background: #010101; color: #ededed");window.innerWidth;function e(){document.querySelector(":root").style.setProperty("--vh",window.innerHeight/100+"px")}document.addEventListener("DOMContentLoaded",(function(){return e()})),window.addEventListener("resize",(function(){return e()}));var n=document.getElementById("footerDate");if(n){var t=new Date;n.innerHTML="".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}function o(){var e=window.innerWidth>=1200?16:15,n=new ymaps.Map("map",{center:[55.96149,38.037589],zoom:e,controls:[]}),t=new ymaps.Placemark([55.96149,38.037589],{},{iconLayout:"default#image",iconImageHref:"../images/media/map.png",iconImageSize:[45,45],iconImageOffset:[-10,-40]});n.geoObjects.add(t)}document.addEventListener("DOMContentLoaded",(function(){})),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("map")&&ymaps.ready(o)}));