webpackJsonp([23],{540:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a(o(579)),n=a(o(559));function a(t){return t&&t.__esModule?t:{default:t}}e.default={name:"PageCompIcon",template:(0,l.default)(),mixins:[n.default],data:function(){return{testName:"test"}}}},559:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i(o(133)),n=i(o(93)),a=o(184);function i(t){return t&&t.__esModule?t:{default:t}}for(var c=[],r=0;r<33;r++)c.push({text:"test-"+r,name:"name-"+r,size:"size-"+r,en:"en-"+r,value:r});e.default={store:l.default,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return c},appContent:function(){return this.$store.getters[n.default.appContent.get]},compStage:function(){return this.$store.getters[n.default.compStage.get]},typeUI:function(){return this.$store.getters[n.default.typeUI.get]},typeTheme:function(){return this.$store.getters[n.default.typeTheme.get]},deviceSize:function(){return this.$store.getters[n.default.deviceSize]}},mounted:function(){var t=this;this._initComp();var e=function(){var e=document.querySelector(".z-css-device-size"),o="";e&&(o=getComputedStyle(e,":after").getPropertyValue("content"),t.$store.dispatch(n.default.deviceSize,o))};window.addEventListener("resize",(0,a.throttle)(e)),e()}}},579:function(t,e,o){var l=o(94);t.exports=function(t){var e,o="",n={};return n.section=e=function(t,n){var a=this&&this.block;this&&this.attributes,o=o+'<section><router-link class="anchor-title"'+l.attr("id",t,!0,!0)+' tag="h1"'+l.attr(":to",'anchorLink("'+t+'")',!0,!0)+'><span @click="goAnchor">'+l.escape(null==(e=n)?"":e)+"</span></router-link>",a?a&&a():o+="<p>暂无内容</p>",o+="</section>"},o+='<div><article class="example-article">',n.section.call({block:function(){o=o+'<z-icon kind="github" size="L"></z-icon><z-code :theme="typeTheme">'+l.escape(null==(e='<z-icon kind="github" size="L"></z-icon>')?"":e)+"</z-code>"}},"start","开始使用"),n.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="(item, index) in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col :max-width="index === 3 ? &quot;30%&quot; : &quot;&quot;">{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>size</z-table-col><z-table-col>String</z-table-col><z-table-col>(*xs | s | m | l | xl)</z-table-col><z-table-col>图标尺寸</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>type</z-table-col><z-table-col>String</z-table-col><z-table-col>（fa | ali | *)</z-table-col><z-table-col><p>字符图标类型</p><ul><li>ali：默认值，vue2do 自带的 iconfont 图标</li><li>fa：内置的 fontawesome 的图标配置，但是需要自己加载 fontawesome 文件</li><li>自定义，用户自己加载 alimama 的 iconfont 文件进来，根据用户配置的图标前缀</li></ul></z-table-col></z-table-row><z-table-row slot="3"><z-table-col>kind</z-table-col><z-table-col>String</z-table-col><z-table-col>*</z-table-col><z-table-col>图标的种类（ex：fa-circle -> kind=\'circle\'，ali-fold -> kind=\'fold\')</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),o+="</article></div>"}}});