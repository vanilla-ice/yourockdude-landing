!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var n={},a={},r={}.hasOwnProperty,t={},i=function(e,n){var a=0;n&&(n.indexOf(!1)&&(a="components/".length),n.indexOf("/",a)>0&&(n=n.substring(a,n.indexOf("/",a))));var r=t[e+"/index.js"]||t[n+"/deps/"+e+"/index.js"];return r?"components/"+r.substring(0,r.length-".js".length):e},o=function(){var e=/^\.\.?(\/|$)/;return function(n,a){var r,t,i=[];r=(e.test(a)?n+"/"+a:a).split("/");for(var o=0,l=r.length;l>o;o++)t=r[o],".."===t?i.pop():"."!==t&&""!==t&&i.push(t);return i.join("/")}}(),l=function(e){return e.split("/").slice(0,-1).join("/")},s=function(n){return function(a){var r=o(l(n),a);return e.require(r,n)}},c=function(e,n){var r={id:e,exports:{}};return a[e]=r,n(r.exports,s(e),r),r.exports},u=function(e,t){var l=o(e,".");if(null==t&&(t="/"),l=i(e,t),r.call(a,l))return a[l].exports;if(r.call(n,l))return c(l,n[l]);var s=o(l,"./index");if(r.call(a,s))return a[s].exports;if(r.call(n,s))return c(s,n[s]);throw new Error('Cannot find module "'+e+'" from "'+t+'"')};u.alias=function(e,n){t[n]=e},u.register=u.define=function(e,a){if("object"==typeof e)for(var t in e)r.call(e,t)&&(n[t]=e[t]);else n[e]=a},u.list=function(){var e=[];for(var a in n)r.call(n,a)&&e.push(a);return e},u.brunch=!0,e.require=u}}(),require.register("initialize",function(e,n,a){$(window).load(function(){return $(".preloader").removeClass("preloader-active")}),$(document).ready(function(){var e,n,a,r,t,i,o,l,s,c,u,d,f,p,m,v;return inlineSVG.init(),$(".slider").slick({adaptiveHeight:!1,arrows:!1,fade:!0,autoplay:!0,autoplaySpeed:4e3}),$(".contact").click(function(){return $(".flex-inner-cont").addClass("active")}),s=document.getElementById("pathA"),u=document.getElementById("pathC"),d=new Segment(s,8,32),p=new Segment(u,8,32),e=function(e){e.draw("80% - 24","80%",.3,{delay:.1,callback:function(){n(e)}})},n=function(e){e.draw("100% - 54.5","100% - 30.5",.6,{easing:ease.ease("elastic-out",1,.3)})},e(d),e(p),c=document.getElementById("pathB"),f=new Segment(c,8,32),a=function(e){e.draw(2,38,.1,{callback:function(){r(e)}})},r=function(e){e.draw(20,20,.3,{easing:ease.ease("bounce-out",1,.3)})},a(f),t=function(e){e.draw("90% - 24","90%",.1,{easing:ease.ease("elastic-in",1,.3),callback:function(){i(e)}})},i=function(e){e.draw("20% - 24","20%",.3,{callback:function(){o(e)}})},o=function(e){e.draw(8,32,.7,{easing:ease.ease("elastic-out",1,.3)})},l=function(e){e.draw(8,32,.7,{delay:.1,easing:ease.ease("elastic-out",2,.4)})},t(d),l(f),t(p),v=m=!0,$(".menu").click(function(){m?(e(d),a(f),e(p),$("#menu").addClass("active"),$("body").addClass("hidden")):($("#menu").removeClass("active"),$("body").removeClass("hidden"),$(".flex-inner-cont").removeClass("active"),t(d),l(f),t(p)),m=!m}),$("html").hover(function(){return $(".parallax-slider").addClass("scale")}),$(window).scroll(function(){return $("body").scrollTop()>350?($(".parallax-mirror:nth-of-type(1)").find(".parallax-slider").removeClass("opacity"),$(".parallax-mirror:nth-of-type(2)").find(".parallax-slider").addClass("opacity")):($(".parallax-mirror:nth-of-type(1)").find(".parallax-slider").addClass("opacity"),$(".parallax-mirror:nth-of-type(2)").find(".parallax-slider").removeClass("opacity"))})})});