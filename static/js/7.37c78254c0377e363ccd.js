webpackJsonp([7],{542:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(582);var n=i(o(583)),a=i(o(559));function i(t){return t&&t.__esModule?t:{default:t}}e.default={name:"PageCompOmit",template:(0,n.default)(),mixins:[a.default],data:function(){return{testName:"test"}}}},559:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(o(184)),a=i(o(132));function i(t){return t&&t.__esModule?t:{default:t}}for(var u=[],l=0;l<33;l++)u.push({text:"test-"+l,name:"name-"+l,size:"size-"+l,en:"en-"+l,value:l});e.default={store:n.default,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return u},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]}},mounted:function(){this._initComp()}}},582:function(t,e){},583:function(t,e,o){var n=o(92);t.exports=function(t){var e,o="",a={};return a.section=e=function(t,a){var i=this&&this.block;this&&this.attributes,o=o+'<section><router-link class="anchor-title"'+n.attr("id",t,!0,!0)+' tag="h1"'+n.attr(":to",'anchorLink("'+t+'")',!0,!0)+'><span @click="goAnchor">'+n.escape(null==(e=a)?"":e)+"</span></router-link>",i?i&&i():o+="<p>暂无内容</p>",o+="</section>"},o+='<div><article class="example-article">',a.section.call({block:function(){o=o+'<z-omit :line="4" :style="{width: &quot;300px&quot;}">在中国，404 错误有了更多延伸的意义，它可能是网页不存在，\n可能是因为内容非法，也可能是因为内容创作者主动删去。不过，\n无论中外，最起码都形成了一个共识：\n「网络技术，由人类创造，受人类控制，并非完全可靠。」</z-omit><z-code>'+n.escape(null==(e="<")?"":e)+'z-omit :line="4" :style="{width: \'300px\'}"'+n.escape(null==(e=">")?"":e)+"\n  在中国，404 错误有了更多延伸的意义，它可能是网页不存在，\n  可能是因为内容非法，也可能是因为内容创作者主动删去。不过，\n  无论中外，最起码都形成了一个共识：\n  「网络技术，由人类创造，受人类控制，并非完全可靠。」\n"+n.escape(null==(e="</z-omit>")?"":e)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="(item, index) in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col :max-width="index === 3 ? &quot;23px&quot; : &quot;&quot;">{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>line</z-table-col><z-table-col>Number</z-table-col><z-table-col>-</z-table-col><z-table-col>多行省略规定的行数，默认是 1 行</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),o+="</article></div>"}}});