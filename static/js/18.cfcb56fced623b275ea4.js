(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{489:function(e,t,l){"use strict";l.d(t,"g",function(){return s}),l.d(t,"f",function(){return p}),l.d(t,"e",function(){return r}),l.d(t,"c",function(){return h}),l.d(t,"a",function(){return d}),l.d(t,"d",function(){return v});for(var o=l(88),c=l(10),a=l(139),b=l(26),z=Object(o.c)(),n=[],i=0;i<33;i++)n.push({text:"test-"+i,name:"name-"+i,size:"size-"+i,en:"en-"+i,value:i});Object(b.e)("VUE2DO");var r=Object(b.e)(n),u=(Object(o.b)(c.appContent.get),Object(o.b)(c.compStage.get)),s=(Object(o.b)(c.deviceSize.get),Object(o.b)(c.typeUI.get)),p=Object(o.b)(c.typeTheme.get),h=function(e){var t=e.currentTarget;u.scrollTop=t.offsetTop},d=function(e,t){return e.path+"#"+t},v=function(){function e(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),z.dispatch(c.deviceSize,t))}window.addEventListener("resize",Object(a.a)(e,100)),e()},m={store:z,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return n},appContent:function(){return this.$store.getters[c.appContent.get]},compStage:function(){return this.$store.getters[c.compStage.get]},typeUI:function(){return this.$store.getters[c.typeUI.get]},typeTheme:function(){return this.$store.getters[c.typeTheme.get]},deviceSize:function(){return this.$store.getters[c.deviceSize]}},mounted:function(){var l=this;this._initComp();function e(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),l.$store.dispatch(c.deviceSize,t))}window.addEventListener("resize",Object(a.a)(e,100)),e()}};t.b=m},513:function(e,t,l){},514:function(e,t,l){var a=l(104);e.exports=function(e){var o,c="",t={};return t.section=o=function(e,t){var l=this&&this.block;this&&this.attributes;c=c+'<section><router-link class="anchor-title"'+a.attr("id",e,!0,!0)+' tag="h1"'+a.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+a.escape(null==(o=t)?"":o)+"</span></router-link>",l?l&&l():c+="<p>暂无内容</p>",c+="</section>"},c+='<div><article class="example-article">',t.section.call({block:function(){c=c+'<z-check :ui="typeUI" :theme="typeTheme" :option="testOpt" :value="1"></z-check><z-code :theme="typeTheme">'+a.escape(null==(o="<z-check></z-check>")?"":o)+"</z-code>"}},"start","开始使用"),t.section.call({block:function(){c=c+'<z-check :ui="typeUI" :theme="typeTheme" check-all multiple vertical :option="testOpt" :value="[1,2]"></z-check><z-code :theme="typeTheme">'+a.escape(null==(o="<z-check")?"":o)+'\n  vertical\n  multiple\n  check-all\n  :option="testOpt.slice(0, 8)"\n  :value="[1, 2]"\n'+a.escape(null==(o="></z-check>")?"":o)+"</z-code>"}},"multiple","多选"),t.section.call({block:function(){c=c+'<z-check :ui="typeUI" :theme="typeTheme" check-all multiple check-all-disabled vertical :option="testOpt2" :value="[1,2]"></z-check><z-code :theme="typeTheme">'+a.escape(null==(o="<z-check")?"":o)+'\n  vertical\n  multiple\n  check-all\n  :option="testOpt.slice(0, 8)"\n  :value="[1, 2]"\n'+a.escape(null==(o="></z-check>")?"":o)+"</z-code>"}},"checkAllDisabled","禁用多选"),t.section.call({block:function(){c+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>checkAll</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>false</z-table-col><z-table-col>全选 checkbox 的选项</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>checkAllLabel</z-table-col><z-table-col>String</z-table-col><z-table-col>全选</z-table-col><z-table-col>全选 checkbox 的选项的 label 标签</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>checkAllDisabled</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>false</z-table-col><z-table-col>全选 checkbox 的选项禁用</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>disabled （废除），转移到 option 属性里面</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>false</z-table-col><z-table-col>不可选</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>multiple</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>false</z-table-col><z-table-col>是否为多选</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>option</z-table-col><z-table-col>Array</z-table-col><z-table-col>——</z-table-col><z-table-col>选择框数据, ex: [{ value: 1, text: \'a\', disabled: true // 默认是 false }]</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>param</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>表单控件的参数名</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>required</z-table-col><z-table-col>String</z-table-col><z-table-col>false</z-table-col><z-table-col>是否必选</z-table-col></z-table-row><z-table-row slot="9"><z-table-col>textName</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>指定读取 checkboxItems 的 text 值的 key 的名字</z-table-col></z-table-row><z-table-row slot="10"><z-table-col>value</z-table-col><z-table-col>Number, Array</z-table-col><z-table-col>——</z-table-col><z-table-col>初始化时选中的值，默认为第一项， 是checkbox 則為數組</z-table-col></z-table-row><z-table-row slot="11"><z-table-col>valueName</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>指定读取 checkboxItems 的 value 值的 key 的名字</z-table-col></z-table-row><z-table-row slot="12"><z-table-col>verifiedHint</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>checkbox 验证时候显示的错误提示（是跟 form 组件搭配使用得）</z-table-col></z-table-row><z-table-row slot="13"><z-table-col>vertical</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>false</z-table-col><z-table-col>选择框是否垂直分布（默认 false，是水平分布）</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),t.section.call({block:function(){c+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>click</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>点击选择事件。</p><p>以下的为返回值说明：</p><ul><li>value - 选择框的值</li><li>index - 当前选择框的索引值（从 1 开始）</li><li>event</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>change</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>选择框的值变化。</p><p>以下的为返回值说明：</p><ul><li>value - 选择框的值</li><li>index - 当前选择框的索引值（从 1 开始）</li></ul></z-table-col></z-table-row></z-table>'}},"events","events 组件事件"),t.section.call({block:function(){c+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;参数&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>check</z-table-col><z-table-col>Object</z-table-col><z-table-col>value：选择框的 value 值</z-table-col><z-table-col><p>点击选择事件。</p><p>以下的为返回值说明：</p><ul><li>value - 选择框的值</li><li>index - 当前选择框的索引值（从 1 开始）</li><li>event</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>verify</z-table-col><z-table-col>Object</z-table-col><z-table-col>——</z-table-col><z-table-col><p>选择框的值变化。</p><p>以下的为返回值说明：</p><ul><li>value - 选择框的值</li><li>index - 当前选择框的索引值（从 1 开始）</li></ul></z-table-col></z-table-row></z-table>'}},"methods","methods 组件方法"),c+="</article></div>"}},568:function(e,t,l){"use strict";l.r(t);l(513);var o=l(514),c=l.n(o),a=l(489);t.default={name:"PageCompCheck",template:c()(),mixins:[a.b],computed:{testOpt:function(){return[{value:1,text:"a"},{value:2,text:"b",disabled:!0},{value:3,text:"c"},{value:4,text:"d",disabled:!0},{value:5,text:"e",disabled:!0},{value:6,text:"g"}]},testOpt2:function(){return[{value:1,text:"a"},{value:2,text:"b"},{value:3,text:"c"},{value:4,text:"d"},{value:5,text:"e"},{value:6,text:"g"}]}},data:function(){return{testName:"test"}}}}}]);