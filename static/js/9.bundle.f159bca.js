(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{504:function(e,t){},507:function(e,t,n){"use strict";n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return h})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return v})),n.d(t,"d",(function(){return g}));for(var o=n(63),r=n(7),c=n(163),i=n(15),u=Object(o.b)(),s=[],a=0;a<33;a++)s.push({text:"test-"+a,name:"name-"+a,size:"size-"+a,en:"en-"+a,value:a});var p=Object(i.e)("VUE2DO"),d=Object(i.e)(s),f=(Object(o.a)(r.appContent.get),Object(o.a)(r.compStage.get)),m=(Object(o.a)(r.deviceSize.get),Object(o.a)(r.typeUI.get)),h=Object(o.a)(r.typeTheme.get),l=function(e){var t=e.currentTarget;f.scrollTop=t.offsetTop},v=function(e,t){return e.path+"#"+t},g=function(){var e=function(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),u.dispatch(r.deviceSize,t))};window.addEventListener("resize",Object(c.a)(e,100)),e()},y={store:u,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return p},testOpt:function(){return s},appContent:function(){return this.$store.getters[r.appContent.get]},compStage:function(){return this.$store.getters[r.compStage.get]},typeUI:function(){return this.$store.getters[r.typeUI.get]},typeTheme:function(){return this.$store.getters[r.typeTheme.get]},deviceSize:function(){return this.$store.getters[r.deviceSize]}},mounted:function(){var e=this;this._initComp();var t=function(){var t=document.querySelector(".z-css-device-size"),n="";t&&(n=getComputedStyle(t,":after").getPropertyValue("content"),e.$store.dispatch(r.deviceSize,n))};window.addEventListener("resize",Object(c.a)(t,100)),t()}};t.b=y},524:function(e,t,n){},525:function(e,t,n){var o=n(503);e.exports=function(e){var t,n="",r={};return r.section=t=function(e,r){var c=this&&this.block;this&&this.attributes;n=n+'<section><router-link class="anchor-title"'+o.attr("id",e,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(t=r)?"":t)+"</span></router-link>",c?c&&c():n+="<p>暂无内容</p>",n+="</section>"},n+='<div><article class="example-article">',r.section.call({block:function(){n+='<p>在终端安装</p><z-code type="shell" :theme="typeTheme">npm i vue2do -S</z-code><p>全部加载</p><z-code type="shell" :theme="typeTheme">import Vue from \'vue\'\nimport vue2do from \'vue2do\'\n\nVue.use(vue2do)</z-code><p>局部加载</p><z-code type="shell" :theme="typeTheme">import {\n  select,\n  input\n  // ...\n} from \'vue2do\'\n\nVue.component(\'select\', select)\nVue.component(\'yourPrefix\' + input.compName, input)</z-code>'}},"start","开始使用"),n+="</article></div>"}},582:function(e,t,n){"use strict";n.r(t);n(524);var o=n(525),r=n.n(o),c=n(507);t.default={name:"PageCompStart",template:r()(),mixins:[c.b],data:function(){return{testName:"testd"}}}}}]);
//# sourceMappingURL=9.bundle.f159bca.js.map