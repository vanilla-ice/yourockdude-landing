!function(){"use strict";var n="undefined"==typeof window?global:window;if("function"!=typeof n.require){var e={},r={},t={}.hasOwnProperty,i={},o=function(n,e){var r=0;e&&(e.indexOf(!1)&&(r="components/".length),e.indexOf("/",r)>0&&(e=e.substring(r,e.indexOf("/",r))));var t=i[n+"/index.js"]||i[e+"/deps/"+n+"/index.js"];return t?"components/"+t.substring(0,t.length-".js".length):n},u=function(){var n=/^\.\.?(\/|$)/;return function(e,r){var t,i,o=[];t=(n.test(r)?e+"/"+r:r).split("/");for(var u=0,c=t.length;c>u;u++)i=t[u],".."===i?o.pop():"."!==i&&""!==i&&o.push(i);return o.join("/")}}(),c=function(n){return n.split("/").slice(0,-1).join("/")},a=function(e){return function(r){var t=u(c(e),r);return n.require(t,e)}},l=function(n,e){var t={id:n,exports:{}};return r[n]=t,e(t.exports,a(n),t),t.exports},s=function(n,i){var c=u(n,".");if(null==i&&(i="/"),c=o(n,i),t.call(r,c))return r[c].exports;if(t.call(e,c))return l(c,e[c]);var a=u(c,"./index");if(t.call(r,a))return r[a].exports;if(t.call(e,a))return l(a,e[a]);throw new Error('Cannot find module "'+n+'" from "'+i+'"')};s.alias=function(n,e){i[e]=n},s.register=s.define=function(n,r){if("object"==typeof n)for(var i in n)t.call(n,i)&&(e[i]=n[i]);else e[n]=r},s.list=function(){var n=[];for(var r in e)t.call(e,r)&&n.push(r);return n},s.brunch=!0,n.require=s}}(),require.register("initialize",function(n,e,r){$(window).load(function(){return $(".preloader").removeClass("preloader-active")}),$(document).ready(function(){return inlineSVG.init(),$(".slider").slick({adaptiveHeight:!1,arrows:!1,fade:!0}),$(".menu").click(function(){return $("#menu").addClass("active")}),$(".close").click(function(){return $("#menu").removeClass("active"),$(".flex-inner-cont").removeClass("active")}),$(".contact").click(function(){return $(".flex-inner-cont").addClass("active")})})});