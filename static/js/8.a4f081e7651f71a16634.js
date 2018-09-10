webpackJsonp([8],{551:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l(600);var n=o(l(601)),a=o(l(559));function o(e){return e&&e.__esModule?e:{default:e}}t.default={name:"PageCompMenu",template:(0,n.default)(),mixins:[a.default],data:function(){return{testName:"test",dropMenuOpt:[],classifyOpt:{recent:[{value:1,text:"test1"}],hot:[{value:1,text:"test1"},{value:2,text:"test2"},{value:3,text:"test3"}]},initVal:[]}},computed:{selectOpt:function(){return this.testOpt.unshift({value:-1,text:"请选择"}),this.testOpt}}}},559:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(l(133)),a=u(l(93)),o=l(184);function u(e){return e&&e.__esModule?e:{default:e}}for(var c=[],z=0;z<33;z++)c.push({text:"test-"+z,name:"name-"+z,size:"size-"+z,en:"en-"+z,value:z});t.default={store:n.default,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return c},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]},deviceSize:function(){return this.$store.getters[a.default.deviceSize]}},mounted:function(){var e=this;this._initComp();var t=function(){var t=document.querySelector(".z-css-device-size"),l="";t&&(l=getComputedStyle(t,":after").getPropertyValue("content"),e.$store.dispatch(a.default.deviceSize,l))};window.addEventListener("resize",(0,o.throttle)(t)),t()}}},600:function(e,t){},601:function(e,t,l){var n=l(94);e.exports=function(e){var t,l="",a={};return a.section=t=function(e,a){var o=this&&this.block;this&&this.attributes,l=l+'<section><router-link class="anchor-title"'+n.attr("id",e,!0,!0)+' tag="h1"'+n.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+n.escape(null==(t=a)?"":t)+"</span></router-link>",o?o&&o():l+="<p>暂无内容</p>",l+="</section>"},l+='<div><article class="example-article">',a.section.call({block:function(){l=l+'<z-menu :ui="typeUI" :theme="typeTheme"><z-menu-ele value="1">{{ testName }}</z-menu-ele><z-menu-ele value="2"><z-btn>按钮</z-btn></z-menu-ele><z-menu-ele value="3">测试3</z-menu-ele><z-menu-ele value="4">测试4</z-menu-ele><z-menu-ele value="5">测试5</z-menu-ele></z-menu><z-code :theme="typeTheme">'+n.escape(null==(t="<z-menu>")?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="1">{{ testName }}</z-menu-ele>')?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="2">')?"":t)+"\n    "+n.escape(null==(t="<z-btn>按钮</z-btn>")?"":t)+"\n  "+n.escape(null==(t="</z-menu-ele>")?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="3">测试222</z-menu-ele>')?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="4">测试3</z-menu-ele>')?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="5">测试4</z-menu-ele>')?"":t)+"\n"+n.escape(null==(t="</z-menu>")?"":t)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){l=l+'<p class="section-description">使用自定义的触发器，并且不遮盖触发器</p><z-menu :ui="typeUI" :theme="typeTheme" noCoverTrig><z-btn slot="trigger" type="flat">菜单</z-btn><z-menu-ele value="1">{{ testName }}</z-menu-ele><z-menu-ele value="2"><z-btn>按钮</z-btn></z-menu-ele><z-menu-ele value="3">测试3</z-menu-ele><z-menu-ele value="4">测试4</z-menu-ele><z-menu-ele value="5">测试5</z-menu-ele></z-menu><z-code :theme="typeTheme">'+n.escape(null==(t="<z-menu noCoverTrig>")?"":t)+"\n  "+n.escape(null==(t='<z-menu-trig slot="trigger"><z-btn type="flat" />菜单</z-btn></z-menu-trig>')?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="1">{{ testName }}</z-menu-ele>')?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="2">')?"":t)+"\n    "+n.escape(null==(t="<z-btn>按钮</z-btn>")?"":t)+"\n  "+n.escape(null==(t="</z-menu-ele>")?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="3">测试222</z-menu-ele>')?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="4">测试3</z-menu-ele>')?"":t)+"\n  "+n.escape(null==(t='<z-menu-ele value="5">测试4</z-menu-ele>')?"":t)+"\n"+n.escape(null==(t="</z-menu>")?"":t)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){l+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>store</z-table-col><z-table-col>Object</z-table-col><z-table-col>——</z-table-col><z-table-col>储存实例化的信息</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>noCoverTrig</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>菜单展开是不遮挡触发器，TODO： pc 上默认是不遮挡的，mobile 是默认遮挡的</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>noTrig</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>不使用组件自带的菜单触发器</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>height</z-table-col><z-table-col>String, Number</z-table-col><z-table-col>——</z-table-col><z-table-col>菜单高度，1、auto：根据菜单内容的高度，2、数字：输入数字就是自定义的像素高度</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>width</z-table-col><z-table-col>String, Number</z-table-col><z-table-col>——</z-table-col><z-table-col>菜单宽度，1、auto：根据菜单内容的宽度，2、数字：输入数字就是自定义的像素高度</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>trigHeight</z-table-col><z-table-col>String, Number</z-table-col><z-table-col>——</z-table-col><z-table-col>菜单触发器的高度，1、auto：根据菜单内容的高度，2、数字：输入数字就是自定义的像素高度</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),l+="</article></div>"}}});