webpackJsonp([14],{545:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),t(589);var o=c(t(590)),a=c(t(560));function c(e){return e&&e.__esModule?e:{default:e}}l.default={name:"PageCompTable",template:(0,o.default)(),mixins:[a.default],data:function(){return{testName:"test"}}}},560:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=b(t(133)),a=b(t(93)),c=t(184);function b(e){return e&&e.__esModule?e:{default:e}}for(var z=[],n=0;n<33;n++)z.push({text:"test-"+n,name:"name-"+n,size:"size-"+n,en:"en-"+n,value:n});l.default={store:o.default,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var l=e.currentTarget;this.compStage.scrollTop=l.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return z},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]},deviceSize:function(){return this.$store.getters[a.default.deviceSize]}},mounted:function(){var e=this;this._initComp();var l=function(){var l=document.querySelector(".z-css-device-size"),t="";l&&(t=getComputedStyle(l,":after").getPropertyValue("content"),e.$store.dispatch(a.default.deviceSize,t))};window.addEventListener("resize",(0,c.throttle)(l)),l()}}},589:function(e,l){},590:function(e,l,t){var o=t(94);e.exports=function(e){var l,t="",a={};return a.section=l=function(e,a){var c=this&&this.block;this&&this.attributes,t=t+'<section><router-link class="anchor-title"'+o.attr("id",e,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(l=a)?"":l)+"</span></router-link>",c?c&&c():t+="<p>暂无内容</p>",t+="</section>"},t+='<div><article class="example-article">',a.section.call({block:function(){t=t+'<z-table :ui="typeUI" :theme="typeTheme"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>display</z-table-col><z-table-col>布尔值</z-table-col><z-table-col>true</z-table-col><z-table-col>分页的显示状态</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>display2</z-table-col><z-table-col>布</z-table-col><z-table-col>false</z-table-col><z-table-col>分页的显示状态</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>display3</z-table-col><z-table-col>布尔值</z-table-col><z-table-col>true</z-table-col><z-table-col>撒旦发</z-table-col></z-table-row></z-table><z-code :theme="typeTheme" v-pre>'+o.escape(null==(l='<z-table ui="bootstrap">')?"":l)+"\n  "+o.escape(null==(l="<")?"":l)+"template slot=\"thead\" v-for=\"item in ['名字', '类型', '可选值', '说明']\""+o.escape(null==(l=">")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>{{ item }}</z-table-col>")?"":l)+"\n  "+o.escape(null==(l="</template>")?"":l)+"\n  "+o.escape(null==(l='<z-table-row slot="1">')?"":l)+"\n    "+o.escape(null==(l="<z-table-col>display</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>布尔值</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>true</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>分页的显示状态</z-table-col>")?"":l)+"\n  "+o.escape(null==(l="</z-table-row>")?"":l)+"\n  "+o.escape(null==(l='<z-table-row slot="2">')?"":l)+"\n    "+o.escape(null==(l="<z-table-col>display2</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>布尔值</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>false</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col></z-table-col>")?"":l)+"\n  "+o.escape(null==(l="</z-table-row>")?"":l)+"\n  "+o.escape(null==(l='<z-table-row slot="3">')?"":l)+"\n    "+o.escape(null==(l="<z-table-col>display3</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>布尔值</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>true</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>显示</z-table-col>")?"":l)+"\n  "+o.escape(null==(l="</z-table-row>")?"":l)+"\n"+o.escape(null==(l="</z-table>")?"":l)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){t=t+'<z-table auto list pager :page-size="11" :thead="[&quot;test&quot;, &quot;name&quot;, &quot;en&quot;]" :tbody="testOpt"><template slot="thead"><z-table-col max-width="30%">test</z-table-col><z-table-col>name</z-table-col><z-table-col max-width="100px">en</z-table-col></template><template slot="tbody" slot-scope="props"><z-table-col>{{ props.item.text }}</z-table-col><z-table-col>{{ props.item.name }}</z-table-col><z-table-col>{{ props.item.en }}</z-table-col></template></z-table><z-code v-pre>'+o.escape(null==(l="<z-table")?"":l)+"\n    auto\n    list\n    pager\n    :pageSize=\"10\"\n    :thead=\"['test', 'name', 'en']\"\n    "+o.escape(null==(l=':tbody="testOpt">')?"":l)+"\n  "+o.escape(null==(l='<template slot="thead">')?"":l)+"\n    "+o.escape(null==(l='<z-table-col max-width="30%">test</z-table-col>')?"":l)+"\n    "+o.escape(null==(l="<z-table-col>name</z-table-col>")?"":l)+"\n    "+o.escape(null==(l='<z-table-col max-width="100px">en</z-table-col>')?"":l)+"\n  "+o.escape(null==(l="</template>")?"":l)+"\n  "+o.escape(null==(l='<template slot="tbody" slot-scope="props">')?"":l)+"\n    "+o.escape(null==(l="<z-table-col>{{ props.item.text }}</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>{{ props.item.name }}</z-table-col>")?"":l)+"\n    "+o.escape(null==(l="<z-table-col>{{ props.item.en }}</z-table-col>")?"":l)+"\n  "+o.escape(null==(l="</template>")?"":l)+"\n"+o.escape(null==(l="</z-table>")?"":l)+"</z-code>"}},"list","展示列表化的表格数据"),a.section.call({block:function(){t+='<z-table scrollerAutoHide border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>auto</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>根据传入的列表数据生成分页数据</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>border</z-table-col><z-table-col>String</z-table-col><z-table-col>(*none | all | row | col)</z-table-col><z-table-col><p>表格的边界线的类型，</p>\n（none：默认是不要边界线，all：横竖都要，row：只要行与行之间要，col：只要列与列之间要）</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>page</z-table-col><z-table-col>Object</z-table-col><z-table-col>——</z-table-col><z-table-col><p>分页数据（没传的话，默认将传的列表数据（item）作为分页数据）</p><ul><li>current - 当前页码</li><li>total - 总共页码</li><li>length - 数据总长度</li><li>size - 每页展示的数据长度</li></ul></z-table-col></z-table-row><z-table-row slot="4"><z-table-col>pager</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>启动分页功能</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>list</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>默认是不以列表化的表格数据</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>thead</z-table-col><z-table-col>Array</z-table-col><z-table-col>——</z-table-col><z-table-col>表头标题数据</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>tbody</z-table-col><z-table-col>Array</z-table-col><z-table-col>——</z-table-col><z-table-col>列表标题数据</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>pageSize</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>将列表数据（item）分为每页多少条数据, 默认为 5。</z-table-col></z-table-row><z-table-row slot="9"><z-table-col>scrollerAutoHide</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>启动滚动条自动隐藏</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),a.section.call({block:function(){t+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>switchPage</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>换页触发事件, 返回值说明：</p><ul><li>currentPage: 当前页码</li><li>emitter: 派送事件的 viewModel</li></ul></z-table-col></z-table-row></z-table>'}},"events","events 事件"),t+="</article></div>"}}});