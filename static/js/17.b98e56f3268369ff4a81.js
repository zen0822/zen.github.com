(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{489:function(e,t,l){"use strict";l.d(t,"g",function(){return u}),l.d(t,"f",function(){return p}),l.d(t,"e",function(){return i}),l.d(t,"c",function(){return h}),l.d(t,"a",function(){return f}),l.d(t,"d",function(){return m});for(var o=l(88),c=l(10),n=l(139),a=l(26),z=Object(o.c)(),b=[],s=0;s<33;s++)b.push({text:"test-"+s,name:"name-"+s,size:"size-"+s,en:"en-"+s,value:s});Object(a.e)("VUE2DO");var i=Object(a.e)(b),r=(Object(o.b)(c.appContent.get),Object(o.b)(c.compStage.get)),u=(Object(o.b)(c.deviceSize.get),Object(o.b)(c.typeUI.get)),p=Object(o.b)(c.typeTheme.get),h=function(e){var t=e.currentTarget;r.scrollTop=t.offsetTop},f=function(e,t){return e.path+"#"+t},m=function(){function e(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),z.dispatch(c.deviceSize,t))}window.addEventListener("resize",Object(n.a)(e,100)),e()},d={store:z,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return b},appContent:function(){return this.$store.getters[c.appContent.get]},compStage:function(){return this.$store.getters[c.compStage.get]},typeUI:function(){return this.$store.getters[c.typeUI.get]},typeTheme:function(){return this.$store.getters[c.typeTheme.get]},deviceSize:function(){return this.$store.getters[c.deviceSize]}},mounted:function(){var l=this;this._initComp();function e(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),l.$store.dispatch(c.deviceSize,t))}window.addEventListener("resize",Object(n.a)(e,100)),e()}};t.b=d},511:function(e,t,l){},512:function(e,t,l){var n=l(104);e.exports=function(e){var o,c="",t={};return t.section=o=function(e,t){var l=this&&this.block;this&&this.attributes;c=c+'<section><router-link class="anchor-title"'+n.attr("id",e,!0,!0)+' tag="h1"'+n.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+n.escape(null==(o=t)?"":o)+"</span></router-link>",l?l&&l():c+="<p>暂无内容</p>",c+="</section>"},c+='<div><article class="example-article">',t.section.call({block:function(){c=c+'<z-row class="z-css-m-b" justify="start"><z-col class="z-css-p-r" :xs="12"><span>按钮类型：</span><z-select class="p-component-btn-select" :ui="typeUI" :theme="typeTheme" ref="btnType" value="button" menuWidth="100%" style="width: 100px;"><z-select-ele value="button">button</z-select-ele><z-select-ele value="text">text</z-select-ele><z-select-ele value="float">float</z-select-ele><z-select-ele value="outline">outline</z-select-ele></z-select></z-col><z-col class="z-css-p-r" :xs="12"><span>边框圆角：</span><z-select class="p-component-btn-select" :ui="typeUI" :theme="typeTheme" ref="btnRadius" value="S" menuWidth="100%" style="width: 100px;"><z-select-ele value="none">none</z-select-ele><z-select-ele value="S">S</z-select-ele><z-select-ele value="M">M</z-select-ele><z-select-ele value="L">L</z-select-ele></z-select></z-col><z-col class="z-css-p-r" :xs="12"><span>按钮大小：</span><z-select class="p-component-btn-select" :ui="typeUI" :theme="typeTheme" ref="btnSize" value="S" menuWidth="100%" style="width: 100px;"><z-select-ele value="S">S</z-select-ele><z-select-ele value="M">M</z-select-ele><z-select-ele value="L">L</z-select-ele></z-select></z-col></z-row><z-btn :ui="typeUI" :theme="typeTheme" :radius="btnRadius" :size="btnSize" :type="btnType">提交</z-btn><z-code :theme="typeTheme">'+n.escape(null==(o="<z-btn>")?"":o)+"\n  提交\n"+n.escape(null==(o="</z-btn>")?"":o)+"</z-code>"}},"start","开始使用"),t.section.call({block:function(){c=c+'<z-btn :ui="typeUI" :theme="typeTheme"><p>custom content</p></z-btn><z-code :theme="typeTheme">'+n.escape(null==(o="<z-btn>")?"":o)+"\n  "+n.escape(null==(o="<p>custom content</p>")?"":o)+"\n"+n.escape(null==(o="</z-btn>")?"":o)+"</z-code>"}},"custom","自定义按钮内容"),t.section.call({block:function(){c=c+'<z-btn :ui="typeUI" :theme="typeTheme" disabled>禁止访问</z-btn><p>*focus、click 等其他交互都没有动画</p><z-code :theme="typeTheme">'+n.escape(null==(o="<z-btn disabled>")?"":o)+"\n  禁止访问\n"+n.escape(null==(o="</z-btn>")?"":o)+"</z-code>"}},"disabled","禁止访问"),t.section.call({block:function(){c=c+'<z-btn :ui="typeUI" :theme="typeTheme" link="//zen0822.github.io/#/component/btn" type="text">链接按钮</z-btn><p>type 为 text 才生效</p><z-code :theme="typeTheme">'+n.escape(null==(o='<z-btn type="text" link="//zen0822.github.io/#/component/btn">')?"":o)+"\n  链接按钮\n"+n.escape(null==(o="</z-btn>")?"":o)+"</z-code>"}},"link","链接按钮"),t.section.call({block:function(){c=c+'<z-btn ui="pure" :theme="typeTheme" :fontSize="14" fontColor="#fff" color="#FF6801" height="43px" width="115px" type="text">自定义样式</z-btn><p>可以自定义几个重要的样式</p><z-code :theme="typeTheme">'+n.escape(null==(o="<z-btn")?"":o)+"\n  ui='pure'\n  :fontSize='14'\n  fontColor='#fff'\n  color='#FF6801'\n  height='43px'\n  width='115px'\n  type='text'\n"+n.escape(null==(o=">")?"":o)+"\n  链接按钮\n"+n.escape(null==(o="</z-btn>")?"":o)+"</z-code>"}},"style","自定义样式"),t.section.call({block:function(){c+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>block</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>按钮的宽度是父元素的宽度, width: 100%</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>disabled</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>禁止点击</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>link</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>链接地址</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>radius</z-table-col><z-table-col>String</z-table-col><z-table-col>( none | *S | M | L)</z-table-col><z-table-col>按钮边角得半径尺寸</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>size</z-table-col><z-table-col>String</z-table-col><z-table-col>( *S | M | L)</z-table-col><z-table-col>按钮大小</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>submit</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>作为提交按钮</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>type</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *button | text | float | outline )</z-table-col><z-table-col>按钮类型</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>value</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>按钮名字</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),t.section.call({block:function(){c+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>click</z-table-col><z-table-col><p>返回 Object</p><ul><li>event - 注册事件的 Event 对象</li><li>emitter - 派送事件的对象</li></ul></z-table-col><z-table-col>点击btn事件</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>keyEnter</z-table-col><z-table-col><p>返回 Object</p><ul><li>event - 注册事件的 Event 对象</li><li>emitter - 派送事件的对象</li></ul></z-table-col><z-table-col>focus 时敲击 Enter 键</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>focus</z-table-col><z-table-col><p>返回 Object</p><ul><li>event - 注册事件的 Event 对象</li><li>emitter - 派送事件的对象</li></ul></z-table-col><z-table-col>按钮获得焦点事件</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>blur</z-table-col><z-table-col><p>返回 Object</p><ul><li>event - 注册事件的 Event 对象</li><li>emitter - 派送事件的对象</li></ul></z-table-col><z-table-col>按钮失去焦点事件</z-table-col></z-table-row></z-table>'}},"props","events 组件事件"),c+="</article></div>"}},567:function(e,t,l){"use strict";l.r(t);l(511);var o=l(512),c=l.n(o),n=l(489);t.default={name:"PageCompBtn",template:c()(),mixins:[n.b],data:function(){return{testName:"test",btnRadius:"S",btnType:"button",btnSize:"S"}},mounted:function(){var l=this;this.$refs.btnRadius.$on("change",function(e){var t=e.value;return l.btnRadius=t}),this.$refs.btnSize.$on("change",function(e){var t=e.value;return l.btnSize=t}),this.$refs.btnType.$on("change",function(e){var t=e.value;return l.btnType=t})}}}}]);