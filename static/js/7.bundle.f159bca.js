(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{504:function(e,t){},507:function(e,t,n){"use strict";n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return h}));for(var r=n(63),o=n(7),c=n(163),i=n(15),u=Object(r.b)(),p=[],a=0;a<33;a++)p.push({text:"test-"+a,name:"name-"+a,size:"size-"+a,en:"en-"+a,value:a});var s=Object(i.e)("VUE2DO"),d=Object(i.e)(p),f=(Object(r.a)(o.appContent.get),Object(r.a)(o.compStage.get)),l=(Object(r.a)(o.deviceSize.get),Object(r.a)(o.typeUI.get)),v=Object(r.a)(o.typeTheme.get),g=function(e){var t=e.currentTarget;f.scrollTop=t.offsetTop},m=function(e,t){return e.path+"#"+t},h=function(){var e=function(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),u.dispatch(o.deviceSize,t))};window.addEventListener("resize",Object(c.a)(e,100)),e()},z={store:u,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return s},testOpt:function(){return p},appContent:function(){return this.$store.getters[o.appContent.get]},compStage:function(){return this.$store.getters[o.compStage.get]},typeUI:function(){return this.$store.getters[o.typeUI.get]},typeTheme:function(){return this.$store.getters[o.typeTheme.get]},deviceSize:function(){return this.$store.getters[o.deviceSize]}},mounted:function(){var e=this;this._initComp();var t=function(){var t=document.querySelector(".z-css-device-size"),n="";t&&(n=getComputedStyle(t,":after").getPropertyValue("content"),e.$store.dispatch(o.deviceSize,n))};window.addEventListener("resize",Object(c.a)(t,100)),t()}};t.b=z},512:function(e,t,n){},513:function(e,t,n){var r=n(503);e.exports=function(e){var t="";return t=t+'<div class="page-build"><article class="example-article"><p>构建单页应用（spa）和多页应用（mpa）</p><p>全局安装 vue2do</p><z-code type="shell">npm i vue2do -g</z-code><p>初始化应用项目</p><z-code type="shell">vue2do init project [projectName] // projectName: 项目名字</z-code><p>构建应用</p><z-code type="shell">cd [projectName] // 初始化的项目应用目录下\nvue2do build '+r.escape(null=="<appType>"?"":"<appType>")+" [appName]</z-code></article></div>"}},576:function(e,t,n){"use strict";n.r(t);n(512);var r=n(513),o=n.n(r),c=n(507);t.default={name:"PageBuild",template:o()(),mixins:[c.b],data:function(){return{}},computed:{selectOpt:function(){return this.testOpt.unshift({value:-1,text:"请选择"}),this.testOpt}}}}}]);
//# sourceMappingURL=7.bundle.f159bca.js.map