(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{486:function(n,e,o){"use strict";o.r(e),o.d(e,"serverMain",function(){return r});var i=function(i,a,c,u){return new(c=c||Promise)(function(n,e){function t(n){try{o(u.next(n))}catch(n){e(n)}}function r(n){try{o(u.throw(n))}catch(n){e(n)}}function o(e){e.done?n(e.value):new c(function(n){n(e.value)}).then(t,r)}o((u=u.apply(i,a||[])).next())})},a=function(t,r){var o,i,a,n,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return n={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function e(e){return function(n){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(a=2&e[0]?i.return:e[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,e[1])).done)return a;switch(i=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return c.label++,{value:e[1],done:!1};case 5:c.label++,i=e[1],e=[0];continue;case 7:e=c.ops.pop(),c.trys.pop();continue;default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){c=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){c.label=e[1];break}if(6===e[0]&&c.label<a[1]){c.label=a[1],a=e;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(e);break}a[2]&&c.ops.pop(),c.trys.pop();continue}e=r.call(t,c)}catch(n){e=[6,n],i=0}finally{o=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,n])}}};function t(){this.init()}var r=new(t.prototype.init=function(){return i(this,void 0,void 0,function(){var e,t,r=this;return a(this,function(n){switch(n.label){case 0:return"serviceWorker"in navigator?[4,o.e(0).then(o.bind(null,488))]:[3,2];case 1:e=n.sent().Workbox,t=new e("/sw.js"),window.addEventListener("load",function(){return i(r,void 0,void 0,function(){var e;return a(this,function(n){switch(n.label){case 0:t.register().then(function(n){n.pushManager.subscribe({userVisibleOnly:!0}).catch(function(n){console.warn(n)})}).catch(function(n){console.warn("SW of mock registration failed: ",n)}),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,Notification.requestPermission()];case 2:return n.sent(),[3,4];case 3:return e=n.sent(),console.warn(e),[3,4];case 4:return[2]}})})}),n.label=2;case 2:return[2]}})})},t)}}]);