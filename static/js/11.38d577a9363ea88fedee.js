webpackJsonp([11],{539:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),t(577);var o=c(t(578)),a=c(t(559));t(185);function c(e){return e&&e.__esModule?e:{default:e}}l.default={name:"PageCompInput",template:(0,o.default)(),mixins:[a.default],data:function(){return{testName:"test"}},methods:{clickVerifyInput:function(){this.$refs.verifyInput.validate()}}}},559:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=c(t(184)),a=c(t(132));function c(e){return e&&e.__esModule?e:{default:e}}for(var z=[],b=0;b<33;b++)z.push({text:"test-"+b,name:"name-"+b,size:"size-"+b,en:"en-"+b,value:b});l.default={store:o.default,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var l=e.currentTarget;this.compStage.scrollTop=l.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return z},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]}},mounted:function(){this._initComp()}}},577:function(e,l){},578:function(e,l,t){var o=t(92);e.exports=function(e){var l,t="",a={};return a.section=l=function(e,a){var c=this&&this.block;this&&this.attributes,t=t+'<section><router-link class="anchor-title"'+o.attr("id",e,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(l=a)?"":l)+"</span></router-link>",c?c&&c():t+="<p>暂无内容</p>",t+="</section>"},t+='<div><article class="example-article">',a.section.call({block:function(){t=t+'<z-input :ui="typeUI" :theme="typeTheme" block required helper-text="输入文本" multiline placeholder="asd输入区域" ref="startInput"></z-input><z-code :theme="typeTheme">'+o.escape(null==(l="<z-input")?"":l)+'\n  multiline\n  block\n  required\n  helper-text="输入文本"\n  '+o.escape(null==(l='ui="bootstrap"></z-input>')?"":l)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){t=t+'<z-input :ui="typeUI" :theme="typeTheme" textLengthTip :max="10" label="区域标签" type="area" :row="4" placeholder="请输入..."></z-input><z-code :theme="typeTheme">'+o.escape(null==(l='<z-input label="区域标签" type="area" :row="4" placeholder="请输入..."></z-input>')?"":l)+"</z-code>"}},"textarea","输入区域"),a.section.call({block:function(){t=t+'<z-input :ui="typeUI" :theme="typeTheme" completion label="补全功能" placeholder="请输入...会补全的..." ref="input"><z-search :ui="typeUI" :theme="typeTheme" :option="testOpt" :input="false" ref="completion" slot="completion"></z-search></z-input><z-code :theme="typeTheme">'+o.escape(null==(l="<z-input")?"":l)+"\n    "+o.escape(null==(l="completion")?"":l)+'\n    label="补全功能"\n    '+o.escape(null==(l='placeholder="请输入...会补全的..."')?"":l)+"\n    "+o.escape(null==(l='ref="input">')?"":l)+"\n  "+o.escape(null==(l="<z-search")?"":l)+"\n      "+o.escape(null==(l=':option="testOpt"')?"":l)+"\n      "+o.escape(null==(l='ref="completion"')?"":l)+"\n      "+o.escape(null==(l='slot="completion"></z-search>')?"":l)+"\n"+o.escape(null==(l="<z-input>")?"":l)+"</z-code>"}},"completion","补全功能"),a.section.call({block:function(){t=t+'<z-input :ui="typeUI" :theme="typeTheme" active-verify label="手机" :min="2" :max="11" name="手机" placeholder="例如: 13111111111" helper-text="限制只能输入2-10位以内" verified-type="mobile" :header-span="4" ref="verifyInput"></z-input><z-btn class="z-css-m-l" :ui="typeUI" :theme="typeTheme" @click.native="clickVerifyInput">点击验证是否为手机</z-btn><z-code :theme="typeTheme">'+o.escape(null==(l="<z-input")?"":l)+'\n    :min="2"\n    :max="10"\n    error-message="邮箱"\n    placeholder="限制只能输入2-10位以内"\n    verifedType="email"\n    '+o.escape(null==(l='ref="verifyInput"></z-input>')?"":l)+"</z-code>"}},"verify","验证功能"),a.section.call({block:function(){t=t+'<z-input :ui="typeUI" :theme="typeTheme" :min="2" :max="10" error-message="邮箱" placeholder="限制只能输入2-10位以内" verified-type="email" :header-span="4"><div slot="header"><z-menu :ui="typeUI" :theme="typeTheme" :init-opt="testOpt" style="width:40px;"></z-menu></div></z-input><z-btn class="z-css-m-l" :ui="typeUI" :theme="typeTheme">点击验证是否为邮箱</z-btn><z-code :theme="typeTheme">'+o.escape(null==(l="<z-input")?"":l)+'\n    :min="2"\n    :max="10"\n    error-message="邮箱"\n    placeholder="限制只能输入2-10位以内"\n    verifedType="mobile"\n    '+o.escape(null==(l='ref="verifyInput"></z-input>')?"":l)+"</z-code>"}},"append","添加附加项"),a.section.call({block:function(){t+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>hidden</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>设置为隐藏域</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>initVal</z-table-col><z-table-col>All</z-table-col><z-table-col>——</z-table-col><z-table-col>设置当前输入框的值</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>number</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>输入框的数字指定为 nmuber 类型</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>placeholder</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>占位符</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>param</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>查询参数名</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>readOnly</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>是否为只读状态</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>required</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>是否为必填，默认否</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>row</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>textarea 的行数, 默认为 4</z-table-col></z-table-row><z-table-row slot="9"><z-table-col>textLengthTip</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>显示当前输入的长度的提示</z-table-col></z-table-row><z-table-row slot="10"><z-table-col>type</z-table-col><z-table-col>String</z-table-col><z-table-col>(*input | textarea)</z-table-col><z-table-col>输入类型( text | textarea )</z-table-col></z-table-row><z-table-row slot="11"><z-table-col>theme</z-table-col><z-table-col>String</z-table-col><z-table-col>(default | *primary)</z-table-col><z-table-col>主题</z-table-col></z-table-row><z-table-row slot="12"><z-table-col>errorMessage</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>input 为空和格式不对的错误信息</z-table-col></z-table-row><z-table-row slot="13"><z-table-col>errorTipType</z-table-col><z-table-col>String</z-table-col><z-table-col>( bubble | *tip )</z-table-col><z-table-col>弹出错误提示的类型（ bubble | tip ）</z-table-col></z-table-row><z-table-row slot="14"><z-table-col>formatMessage</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>格式错误的提示信息</z-table-col></z-table-row><z-table-row slot="15"><z-table-col>min</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>input，textarea 可输入最小长度（数字）</z-table-col></z-table-row><z-table-row slot="16"><z-table-col>max</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>input，textarea 可输入最大长度（数字）</z-table-col></z-table-row><z-table-row slot="17"><z-table-col>regex</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>验证值的正则</z-table-col></z-table-row><z-table-row slot="18"><z-table-col>verifedType</z-table-col><z-table-col>String</z-table-col><z-table-col>(email | phone | password | url | tel)</z-table-col><z-table-col>验证值的类型</z-table-col></z-table-row><z-table-row slot="19"><z-table-col>completion</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>是否启用自动搜索补全功能</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),a.section.call({block:function(){t+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>change</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li><li>value - 输入框的值</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>focus</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li></ul></z-table-col></z-table-row><z-table-row slot="3"><z-table-col>blur</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li></ul></z-table-col></z-table-row><z-table-row slot="4"><z-table-col>keyup</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li></ul></z-table-col></z-table-row></z-table>'}},"events","events 组件事件"),t+="</article></div>"}}});