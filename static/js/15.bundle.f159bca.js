(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{504:function(e,t){},507:function(e,t,l){"use strict";l.d(t,"g",(function(){return s})),l.d(t,"f",(function(){return m})),l.d(t,"e",(function(){return p})),l.d(t,"c",(function(){return h})),l.d(t,"a",(function(){return d})),l.d(t,"d",(function(){return f}));for(var o=l(63),a=l(7),c=l(163),z=l(15),b=Object(o.b)(),n=[],r=0;r<33;r++)n.push({text:"test-"+r,name:"name-"+r,size:"size-"+r,en:"en-"+r,value:r});var i=Object(z.e)("VUE2DO"),p=Object(z.e)(n),u=(Object(o.a)(a.appContent.get),Object(o.a)(a.compStage.get)),s=(Object(o.a)(a.deviceSize.get),Object(o.a)(a.typeUI.get)),m=Object(o.a)(a.typeTheme.get),h=function(e){var t=e.currentTarget;u.scrollTop=t.offsetTop},d=function(e,t){return e.path+"#"+t},f=function(){var e=function(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),b.dispatch(a.deviceSize,t))};window.addEventListener("resize",Object(c.a)(e,100)),e()},w={store:b,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return i},testOpt:function(){return n},appContent:function(){return this.$store.getters[a.appContent.get]},compStage:function(){return this.$store.getters[a.compStage.get]},typeUI:function(){return this.$store.getters[a.typeUI.get]},typeTheme:function(){return this.$store.getters[a.typeTheme.get]},deviceSize:function(){return this.$store.getters[a.deviceSize]}},mounted:function(){var e=this;this._initComp();var t=function(){var t=document.querySelector(".z-css-device-size"),l="";t&&(l=getComputedStyle(t,":after").getPropertyValue("content"),e.$store.dispatch(a.deviceSize,l))};window.addEventListener("resize",Object(c.a)(t,100)),t()}};t.b=w},532:function(e,t,l){},533:function(e,t,l){var o=l(503);e.exports=function(e){var t,l="",a={};return a.section=t=function(e,a){var c=this&&this.block;this&&this.attributes;l=l+'<section><router-link class="anchor-title"'+o.attr("id",e,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(t=a)?"":t)+"</span></router-link>",c?c&&c():l+="<p>暂无内容</p>",l+="</section>"},l+='<div><article class="example-article">',a.section.call({block:function(){l=l+'<z-input :ui="typeUI" :theme="typeTheme" block required helper-text="输入文本" multiline placeholder="asd输入区域" ref="startInput"></z-input><z-code :theme="typeTheme">'+o.escape(null==(t="<z-input")?"":t)+'\n  multiline\n  block\n  required\n  helper-text="输入文本"\n  '+o.escape(null==(t='ui="bootstrap"></z-input>')?"":t)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){l=l+'<z-input :ui="typeUI" :theme="typeTheme" value="区域文本的值" textLengthTip :max="10" label="区域标签" type="area" :row="4" placeholder="请输入..."></z-input><z-code :theme="typeTheme">'+o.escape(null==(t='<z-input label="区域标签" type="area" :row="4" placeholder="请输入..."></z-input>')?"":t)+"</z-code>"}},"textarea","输入区域"),a.section.call({block:function(){l=l+'<z-input :ui="typeUI" :theme="typeTheme" completion label="补全功能" placeholder="请输入...会补全的..." ref="input"><z-search :ui="typeUI" :theme="typeTheme" :option="testOpt" :input="false" ref="completion" slot="completion"></z-search></z-input><z-code :theme="typeTheme">'+o.escape(null==(t="<z-input")?"":t)+"\n    "+o.escape(null==(t="completion")?"":t)+'\n    label="补全功能"\n    '+o.escape(null==(t='placeholder="请输入...会补全的..."')?"":t)+"\n    "+o.escape(null==(t='ref="input">')?"":t)+"\n  "+o.escape(null==(t="<z-search")?"":t)+"\n      "+o.escape(null==(t=':option="testOpt"')?"":t)+"\n      "+o.escape(null==(t='ref="completion"')?"":t)+"\n      "+o.escape(null==(t='slot="completion"></z-search>')?"":t)+"\n"+o.escape(null==(t="<z-input>")?"":t)+"</z-code>"}},"completion","补全功能"),a.section.call({block:function(){l=l+'<z-input :ui="typeUI" :theme="typeTheme" active-verify label="手机" :min="2" :max="11" name="手机" placeholder="例如: 13111111111" helper-text="限制只能输入2-10位以内" verified-type="mobile" :header-span="4" ref="verifyInput"></z-input><z-btn class="z-css-m-l" :ui="typeUI" :theme="typeTheme" @click.native="clickVerifyInput">点击验证是否为手机</z-btn><z-code :theme="typeTheme">'+o.escape(null==(t="<z-input")?"":t)+'\n    :min="2"\n    :max="10"\n    error-message="邮箱"\n    placeholder="限制只能输入2-10位以内"\n    verifedType="email"\n    '+o.escape(null==(t='ref="verifyInput"></z-input>')?"":t)+"</z-code>"}},"verify","验证功能"),a.section.call({block:function(){l=l+'<z-input :ui="typeUI" :theme="typeTheme" :min="2" :max="10" error-message="邮箱" placeholder="限制只能输入2-10位以内" verified-type="email" :header-span="4"><div slot="header"><z-menu :ui="typeUI" :theme="typeTheme" :init-opt="testOpt" style="width:40px;"></z-menu></div></z-input><z-btn class="z-css-m-l" :ui="typeUI" :theme="typeTheme">点击验证是否为邮箱</z-btn><z-code :theme="typeTheme">'+o.escape(null==(t="<z-input")?"":t)+'\n    :min="2"\n    :max="10"\n    error-message="邮箱"\n    placeholder="限制只能输入2-10位以内"\n    verifedType="mobile"\n    '+o.escape(null==(t='ref="verifyInput"></z-input>')?"":t)+"</z-code>"}},"append","添加附加项"),a.section.call({block:function(){l+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>hidden</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>设置为隐藏域</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>initVal</z-table-col><z-table-col>All</z-table-col><z-table-col>——</z-table-col><z-table-col>设置当前输入框的值</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>number</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>输入框的数字指定为 nmuber 类型</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>placeholder</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>占位符</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>param</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>查询参数名</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>readOnly</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>是否为只读状态</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>required</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>是否为必填，默认否</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>row</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>textarea 的行数, 默认为 4</z-table-col></z-table-row><z-table-row slot="9"><z-table-col>textLengthTip</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>显示当前输入的长度的提示</z-table-col></z-table-row><z-table-row slot="10"><z-table-col>type</z-table-col><z-table-col>String</z-table-col><z-table-col>(*input | textarea)</z-table-col><z-table-col>输入类型( text | textarea )</z-table-col></z-table-row><z-table-row slot="11"><z-table-col>theme</z-table-col><z-table-col>String</z-table-col><z-table-col>(default | *primary)</z-table-col><z-table-col>主题</z-table-col></z-table-row><z-table-row slot="12"><z-table-col>errorMessage</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>input 为空和格式不对的错误信息</z-table-col></z-table-row><z-table-row slot="13"><z-table-col>errorTipType</z-table-col><z-table-col>String</z-table-col><z-table-col>( bubble | *tip )</z-table-col><z-table-col>弹出错误提示的类型（ bubble | tip ）</z-table-col></z-table-row><z-table-row slot="14"><z-table-col>formatMessage</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>格式错误的提示信息</z-table-col></z-table-row><z-table-row slot="15"><z-table-col>min</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>input，textarea 可输入最小长度（数字）</z-table-col></z-table-row><z-table-row slot="16"><z-table-col>max</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>input，textarea 可输入最大长度（数字）</z-table-col></z-table-row><z-table-row slot="17"><z-table-col>regex</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>验证值的正则</z-table-col></z-table-row><z-table-row slot="18"><z-table-col>verifedType</z-table-col><z-table-col>String</z-table-col><z-table-col>(email | phone | password | url | tel)</z-table-col><z-table-col>验证值的类型</z-table-col></z-table-row><z-table-row slot="19"><z-table-col>completion</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>是否启用自动搜索补全功能</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),a.section.call({block:function(){l+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>change</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li><li>value - 输入框的值</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>focus</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li></ul></z-table-col></z-table-row><z-table-row slot="3"><z-table-col>blur</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li></ul></z-table-col></z-table-row><z-table-row slot="4"><z-table-col>keyup</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li></ul></z-table-col></z-table-row></z-table>'}},"events","events 组件事件"),l+="</article></div>"}},586:function(e,t,l){"use strict";l.r(t);l(532);var o=l(533),a=l.n(o),c=l(507);t.default={name:"PageCompInput",template:a()(),mixins:[c.b],data:function(){return{testName:"test"}},methods:{clickVerifyInput:function(){return this.$refs.verifyInput.validate()}}}}}]);
//# sourceMappingURL=15.bundle.f159bca.js.map