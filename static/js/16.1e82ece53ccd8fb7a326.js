webpackJsonp([16],{546:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l(590);var o=c(l(591)),a=c(l(559));function c(e){return e&&e.__esModule?e:{default:e}}t.default={name:"PageCompList",template:(0,o.default)(),mixins:[a.default],data:function(){return{testName:"test"}}}},559:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(l(133)),a=r(l(93)),c=l(184);function r(e){return e&&e.__esModule?e:{default:e}}for(var i=[],n=0;n<33;n++)i.push({text:"test-"+n,name:"name-"+n,size:"size-"+n,en:"en-"+n,value:n});t.default={store:o.default,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return i},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]},deviceSize:function(){return this.$store.getters[a.default.deviceSize]}},mounted:function(){var e=this;this._initComp();var t=function(){var t=document.querySelector(".z-css-device-size"),l="";t&&(l=getComputedStyle(t,":after").getPropertyValue("content"),e.$store.dispatch(a.default.deviceSize,l))};window.addEventListener("resize",(0,c.throttle)(t)),t()}}},590:function(e,t){},591:function(e,t,l){var o=l(94);e.exports=function(e){var t,l="",a={};return a.section=t=function(e,a){var c=this&&this.block;this&&this.attributes,l=l+'<section><router-link class="anchor-title"'+o.attr("id",e,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(t=a)?"":t)+"</span></router-link>",c?c&&c():l+="<p>暂无内容</p>",l+="</section>"},l+='<div class="component-list"><article class="example-article">',a.section.call({block:function(){l=l+'<z-list class="z-css-m-t" :ui="typeUI" :theme="typeTheme" auto :page-size="7" page-type="more" page-trigger="click" pager ref="list" style="height:133px;" :item="testOpt"><template slot-scope="props"><div>{{ props.item.text }}asdfkj 打发士大夫 asdfasdi</div></template></z-list><z-code :theme="typeTheme" v-pre>'+o.escape(null==(t="<z-list")?"":t)+'\n    auto\n    class="z-css-m-t"\n    :page-size="7"\n    page-type="more"\n    page-trigger="click"\n    pager\n    ref="list"\n    :item="testOpt"'+o.escape(null==(t=">")?"":t)+"\n  "+o.escape(null==(t='<template slot-scope="props">')?"":t)+"\n    "+o.escape(null==(t="<div>")?"":t)+"\n      "+o.escape(null==(t="{{ props.item.text }}asdfkj 打发士大夫 asdfasdi  sdf 士大夫 asdf dafdf打发士大夫asdsf sadf")?"":t)+"\n    "+o.escape(null==(t="</div>")?"":t)+"\n  "+o.escape(null==(t="</template>")?"":t)+"\n"+o.escape(null==(t="</z-list>")?"":t)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){l+='<z-table border="row" auto :pageSize="10"><template slot="thead"><z-table-col th>名字</z-table-col><z-table-col th omit>类型</z-table-col><z-table-col th omit>可选值</z-table-col><z-table-col th width="40%">说明</z-table-col></template><z-table-row slot="1"><z-table-col>auto</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>根据传入的列表数据生成分页数据</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>item</z-table-col><z-table-col>Array</z-table-col><z-table-col>——</z-table-col><z-table-col>列表数据</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>page</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col><p>分页数据（没传的话，默认将传的列表数据（item）作为分页数据）</p><ul><li>total: 总共得页数</li><li>length: 列表条数</li><li>size: 每页得数据数</li><li>current: 当前页码</li></ul></z-table-col></z-table-row><z-table-row slot="4"><z-table-col>pager</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>启动分页功能</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>pageSize</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>将列表数据（item）分为每页多少条数据，默认 5 条</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>pageType</z-table-col><z-table-col>String</z-table-col><z-table-col>( *num | more )</z-table-col><z-table-col>列表分页类型（加载更多：more | 数字标注（默认）：num）</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>pageTrigger</z-table-col><z-table-col>String</z-table-col><z-table-col>( *scroll | click )</z-table-col><z-table-col>加载更多的触发模式（滚动到底部自动触发（默认）：scroll | 点击：click）</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>autoHideScroller</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>是否自动隐藏滚动条</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),a.section.call({block:function(){l+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>switchPage</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>换页触发事件, 返回值说明：</p><ul><li>currentPage: 当前页码</li><li>emitter: 派送事件的 viewModel</li></ul></z-table-col></z-table-row></z-table>'}},"events","events 事件"),l+="</article></div>"}}});