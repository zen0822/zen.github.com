(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{504:function(t,e){},507:function(t,e,o){"use strict";o.d(e,"g",(function(){return b})),o.d(e,"f",(function(){return d})),o.d(e,"e",(function(){return p})),o.d(e,"c",(function(){return f})),o.d(e,"a",(function(){return m})),o.d(e,"d",(function(){return g}));for(var n=o(63),c=o(7),i=o(163),a=o(15),r=Object(n.b)(),l=[],u=0;u<33;u++)l.push({text:"test-"+u,name:"name-"+u,size:"size-"+u,en:"en-"+u,value:u});var s=Object(a.e)("VUE2DO"),p=Object(a.e)(l),z=(Object(n.a)(c.appContent.get),Object(n.a)(c.compStage.get)),b=(Object(n.a)(c.deviceSize.get),Object(n.a)(c.typeUI.get)),d=Object(n.a)(c.typeTheme.get),f=function(t){var e=t.currentTarget;z.scrollTop=e.offsetTop},m=function(t,e){return t.path+"#"+e},g=function(){var t=function(){var t=document.querySelector(".z-css-device-size"),e="";t&&(e=getComputedStyle(t,":after").getPropertyValue("content"),r.dispatch(c.deviceSize,e))};window.addEventListener("resize",Object(i.a)(t,100)),t()},h={store:r,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return s},testOpt:function(){return l},appContent:function(){return this.$store.getters[c.appContent.get]},compStage:function(){return this.$store.getters[c.compStage.get]},typeUI:function(){return this.$store.getters[c.typeUI.get]},typeTheme:function(){return this.$store.getters[c.typeTheme.get]},deviceSize:function(){return this.$store.getters[c.deviceSize]}},mounted:function(){var t=this;this._initComp();var e=function(){var e=document.querySelector(".z-css-device-size"),o="";e&&(o=getComputedStyle(e,":after").getPropertyValue("content"),t.$store.dispatch(c.deviceSize,o))};window.addEventListener("resize",Object(i.a)(e,100)),e()}};e.b=h},537:function(t,e,o){var n=o(503);t.exports=function(t){var e,o="",c={};return c.section=e=function(t,c){var i=this&&this.block;this&&this.attributes;o=o+'<section><router-link class="anchor-title"'+n.attr("id",t,!0,!0)+' tag="h1"'+n.attr(":to",'anchorLink("'+t+'")',!0,!0)+'><span @click="goAnchor">'+n.escape(null==(e=c)?"":e)+"</span></router-link>",i?i&&i():o+="<p>暂无内容</p>",o+="</section>"},o+='<div><article class="example-article">',c.section.call({block:function(){o=o+'<z-icon kind="github" size="L"></z-icon><z-code :theme="typeTheme">'+n.escape(null==(e='<z-icon kind="github" size="L"></z-icon>')?"":e)+"</z-code>"}},"start","开始使用"),c.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="(item, index) in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col :max-width="index === 3 ? &quot;30%&quot; : &quot;&quot;">{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>size</z-table-col><z-table-col>String</z-table-col><z-table-col>(*xs | s | m | l | xl)</z-table-col><z-table-col>图标尺寸</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>type</z-table-col><z-table-col>String</z-table-col><z-table-col>（fa | ali | *)</z-table-col><z-table-col><p>字符图标类型</p><ul><li>ali：默认值，vue2do 自带的 iconfont 图标</li><li>fa：内置的 fontawesome 的图标配置，但是需要自己加载 fontawesome 文件</li><li>自定义，用户自己加载 alimama 的 iconfont 文件进来，根据用户配置的图标前缀</li></ul></z-table-col></z-table-row><z-table-row slot="3"><z-table-col>kind</z-table-col><z-table-col>String</z-table-col><z-table-col>*</z-table-col><z-table-col>图标的种类（ex：fa-circle -> kind=\'circle\'，ali-fold -> kind=\'fold\')</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),o+="</article></div>"}},589:function(t,e,o){"use strict";o.r(e);var n=o(537),c=o.n(n),i=o(507);e.default={name:"PageCompIcon",template:c()(),mixins:[i.b],data:function(){return{testName:"test"}}}}}]);
//# sourceMappingURL=35.bundle.f159bca.js.map