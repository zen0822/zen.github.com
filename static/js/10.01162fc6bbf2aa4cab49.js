webpackJsonp([10],{539:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l(577);var o=c(l(578)),a=c(l(561));function c(e){return e&&e.__esModule?e:{default:e}}t.default={name:"PageCompSelect",template:(0,o.default)(),mixins:[a.default],data:function(){return{testName:"test",dropMenuOpt:[],classifyOpt:{recent:[{value:1,text:"test1"}],hot:[{value:1,text:"test1"},{value:2,text:"test2"},{value:3,text:"test3"}]},initVal:[]}},computed:{selectOpt:function(){return this.testOpt.unshift({value:-1,text:"请选择"}),this.testOpt}},created:function(){for(var e=this,t=[],l=0;l<13;l++)t.push({text:"test-"+l,name:"name-"+l,size:"size-"+l,en:"en-"+l,value:l});this.dropMenuOpt=t,setTimeout(function(){var l;(l=e.dropMenuOpt).push.apply(l,t)},1e4)}}},561:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=z(l(131)),a=z(l(91)),c=l(184);function z(e){return e&&e.__esModule?e:{default:e}}for(var b=[],s=0;s<33;s++)b.push({text:"test-"+s,name:"name-"+s,size:"size-"+s,en:"en-"+s,value:s});t.default={store:o.default,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return b},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]},deviceSize:function(){return this.$store.getters[a.default.deviceSize]}},mounted:function(){var e=this;this._initComp();var t=function(){var t=document.querySelector(".z-css-device-size"),l="";t&&(l=getComputedStyle(t,":after").getPropertyValue("content"),e.$store.dispatch(a.default.deviceSize,l))};window.addEventListener("resize",(0,c.throttle)(t)),t()}}},577:function(e,t){},578:function(e,t,l){var o=l(92);e.exports=function(e){var t,l="",a={};return a.section=t=function(e,a){var c=this&&this.block;this&&this.attributes,l=l+'<section><router-link class="anchor-title"'+o.attr("id",e,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(t=a)?"":t)+"</span></router-link>",c?c&&c():l+="<p>暂无内容</p>",l+="</section>"},l+='<div><article class="example-article">',a.section.call({block:function(){l=l+'<p class="section-description">直接传入 init-opt，10s 之后会更改 initOpt 数据</p><z-select :ui="typeUI" :theme="typeTheme" :option="dropMenuOpt"></z-select><z-code :theme="typeTheme">'+o.escape(null==(t='<z-select :option="dropMenuOpt"></z-select>')?"":t)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){l=l+'<p class="section-description">用直观的标签声明下拉框的数据</p><z-select :ui="typeUI" :theme="typeTheme"><z-select-ele value="1">{{ testName }}</z-select-ele><z-select-ele value="2">按钮</z-select-ele><z-select-ele value="3">测试3</z-select-ele><z-select-ele value="4">测试4</z-select-ele><z-select-ele value="5">测试5</z-select-ele></z-select><z-code :theme="typeTheme">'+o.escape(null==(t="<z-select>")?"":t)+"\n  "+o.escape(null==(t='<z-select-ele value="1">{{ testName }}</z-select-ele>')?"":t)+"\n  "+o.escape(null==(t='<z-select-ele value="2">按钮</z-select-ele>')?"":t)+"\n  "+o.escape(null==(t='<z-select-ele value="3">测试222</z-select-ele>')?"":t)+"\n  "+o.escape(null==(t='<z-select-ele value="4">测试3</z-select-ele>')?"":t)+"\n  "+o.escape(null==(t='<z-select-ele value="5">测试4</z-select-ele>')?"":t)+"\n"+o.escape(null==(t="</z-select>")?"":t)+"</z-code>"}},"tag","添加子标签"),a.section.call({block:function(){l=l+'<z-select :ui="typeUI" :theme="typeTheme" select-all :classify="[{key: &quot;recent&quot;,text: &quot;最近&quot;}, {key: &quot;hot&quot;,text: &quot;热门&quot;}]" :classify-opt="classifyOpt"></z-select><z-code :theme="typeTheme">'+o.escape(null==(t="<z-select")?"":t)+"\n  :select-all=\"true\"\n  :classify=\"[{\n    key: 'recent',\n    text: '最近'\n  }, {\n    key: 'hot',\n    text: '热门'\n  }]\"\n"+o.escape(null==(t='  :classify-opt="classifyOpt"></z-select>')?"":t)+"</z-code>"}},"classify","分类下拉选择"),a.section.call({block:function(){l=l+'<z-select :ui="typeUI" :theme="typeTheme" multiple :option="selectOpt"></z-select><z-code :theme="typeTheme">'+o.escape(null==(t="<z-select")?"":t)+"\n  multiple\n  "+o.escape(null==(t=':option="selectOpt"></z-select>')?"":t)+"</z-code>"}},"multiple","多选下拉框"),a.section.call({block:function(){l=l+'<z-select :ui="typeUI" :theme="typeTheme" search :option="selectOpt"></z-select><z-code :theme="typeTheme">'+o.escape(null==(t='<z-select search :option="selectOpt"></z-select>')?"":t)+"</z-code>"}},"search","搜索功能"),a.section.call({block:function(){l=l+'<z-select :ui="typeUI" :theme="typeTheme" :value="2" :option="selectOpt"></z-select><z-code :theme="typeTheme">'+o.escape(null==(t='<z-select :value="2" :option="selectOpt"></z-select>')?"":t)+"</z-code>"}},"init","指定选定下拉选项"),a.section.call({block:function(){l+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>classify</z-table-col><z-table-col>Object</z-table-col><z-table-col>——</z-table-col><z-table-col>有值（数组类型）就开启标题下拉框 option 分类模式</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>classifyOpt</z-table-col><z-table-col>Object</z-table-col><z-table-col>——</z-table-col><z-table-col>分类下拉框的数据</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>coverTrig</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>菜单展开时遮挡触发器，默认不开启</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>defaultValue</z-table-col><z-table-col>String, Number</z-table-col><z-table-col>——</z-table-col><z-table-col>按钮种类，默认值 -1</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>defaultText</z-table-col><z-table-col>String</z-table-col><z-table-col>请选择</z-table-col><z-table-col> 默认的选项文本值</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>errorMessage</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>没选的时候显示的错误信息</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>max</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>多选下拉框最多选择几个（默认是 0）</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>min</z-table-col><z-table-col>Number</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>多选下拉框至少选择几个（默认是 0）</z-table-col></z-table-row><z-table-row slot="9"><z-table-col>menuWidth</z-table-col><z-table-col>Nubmer | String</z-table-col><z-table-col>170</z-table-col><z-table-col>菜单宽度，可选值有 ‘auto’、‘100%’ 和数字</z-table-col></z-table-row><z-table-row slot="10"><z-table-col>multiple</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>开启多选</z-table-col></z-table-row><z-table-row slot="11"><z-table-col>option</z-table-col><z-table-col>Array</z-table-col><z-table-col>——</z-table-col><z-table-col>下拉框的 option 数据</z-table-col></z-table-row><z-table-row slot="12"><z-table-col>param</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>搜索参数名 (组件作为表单控时候的搜索参数名)</z-table-col></z-table-row><z-table-row slot="13"><z-table-col>required</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>必须选择下拉框的值（默认是 false）</z-table-col></z-table-row><z-table-row slot="14"><z-table-col>readOnly</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>只读（默认是 false）</z-table-col></z-table-row><z-table-row slot="15"><z-table-col>search</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>开启搜索过滤（默认为 false）</z-table-col></z-table-row><z-table-row slot="16"><z-table-col>selectAll</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>启动全选的功能（默认是 false）</z-table-col></z-table-row><z-table-row slot="17"><z-table-col>selectAllTxt</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>全选选项的名字</z-table-col></z-table-row><z-table-row slot="18"><z-table-col>store</z-table-col><z-table-col>All</z-table-col><z-table-col>——</z-table-col><z-table-col>储存实例化的信息</z-table-col></z-table-row><z-table-row slot="19"><z-table-col>textName</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>指定读取 下拉框 optionItems 的 text 值的 key 的名字</z-table-col></z-table-row><z-table-row slot="20"><z-table-col>value</z-table-col><z-table-col>String, Number</z-table-col><z-table-col>——</z-table-col><z-table-col>默认第一个显示的值</z-table-col></z-table-row><z-table-row slot="21"><z-table-col>valueName</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>指定读取下拉框 optionItems 的 value 值的 key 的名字</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),l+="</article></div>"}}});