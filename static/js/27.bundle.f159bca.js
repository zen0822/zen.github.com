(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{504:function(e,t){},507:function(e,t,n){"use strict";n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return h}));for(var c=n(63),o=n(7),i=n(163),s=n(15),r=Object(c.b)(),a=[],l=0;l<33;l++)a.push({text:"test-"+l,name:"name-"+l,size:"size-"+l,en:"en-"+l,value:l});var u=Object(s.e)("VUE2DO"),d=Object(s.e)(a),p=(Object(c.a)(o.appContent.get),Object(c.a)(o.compStage.get)),f=(Object(c.a)(o.deviceSize.get),Object(c.a)(o.typeUI.get)),m=Object(c.a)(o.typeTheme.get),v=function(e){var t=e.currentTarget;p.scrollTop=t.offsetTop},g=function(e,t){return e.path+"#"+t},h=function(){var e=function(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),r.dispatch(o.deviceSize,t))};window.addEventListener("resize",Object(i.a)(e,100)),e()},w={store:r,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return u},testOpt:function(){return a},appContent:function(){return this.$store.getters[o.appContent.get]},compStage:function(){return this.$store.getters[o.compStage.get]},typeUI:function(){return this.$store.getters[o.typeUI.get]},typeTheme:function(){return this.$store.getters[o.typeTheme.get]},deviceSize:function(){return this.$store.getters[o.deviceSize]}},mounted:function(){var e=this;this._initComp();var t=function(){var t=document.querySelector(".z-css-device-size"),n="";t&&(n=getComputedStyle(t,":after").getPropertyValue("content"),e.$store.dispatch(o.deviceSize,n))};window.addEventListener("resize",Object(i.a)(t,100)),t()}};t.b=w},509:function(e,t,n){},510:function(e,t,n){n(503);e.exports=function(e){var t="";return t+='<div class="welcome"><div class="welcome-bg"><h3 class="z-css-text-center z-css-m-t-double">welcome to</h3><h2 class="z-css-text-center z-css-m-t-double">vue2do</h2></div><div class="welcome-container"><z-row align="start" justify="justify"><z-col class="welcome-detail-col" :l="4" :xs="12" :span="4"><div class="welcome-detail-col-title">响应</div><p class="welcome-detail-col-text">适配任何设备，在移动端有更好的用户体验。\n支持五种尺寸的设备，让你不再担心适配不同设备的尺寸带来的烦恼。</p></z-col><z-col class="welcome-detail-col" :l="4" :xs="12" :span="4"><div class="welcome-detail-col-title">灵活</div><p class="welcome-detail-col-text">组件和组件之间可以灵活组合，能满足任何需求。\n组件的功能丰富，能随意搭配成需要的功能</p></z-col><z-col class="welcome-detail-col" :l="4" :xs="12" :span="4"><div class="welcome-detail-col-title">样式</div><p class="welcome-detail-col-text">内置多种 UI 规范和主题，让组件不再单调，为您提供更多的样式选择。\n支持 primary、danger、success、warning、orange、light、dark 7 种主题颜色，\n将会支持谷歌的 material UI、bootstrap UI、苹果的 OS UI 和微软的 metro UI。</p></z-col></z-row></div></div>'}},574:function(e,t,n){"use strict";n.r(t);n(509);var c=n(510),o=n.n(c),i=n(507);t.default={name:"PageWelcome",template:o()(),mixins:[i.b],data:function(){return{}},computed:{selectOpt:function(){return this.testOpt.unshift({value:-1,text:"请选择"}),this.testOpt}}}}}]);
//# sourceMappingURL=27.bundle.f159bca.js.map