(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{504:function(t,e){},507:function(t,e,o){"use strict";o.d(e,"g",(function(){return f})),o.d(e,"f",(function(){return p})),o.d(e,"e",(function(){return b})),o.d(e,"c",(function(){return d})),o.d(e,"a",(function(){return m})),o.d(e,"d",(function(){return h}));for(var l=o(63),n=o(7),a=o(163),r=o(15),c=Object(l.b)(),i=[],s=0;s<33;s++)i.push({text:"test-"+s,name:"name-"+s,size:"size-"+s,en:"en-"+s,value:s});var u=Object(r.e)("VUE2DO"),b=Object(r.e)(i),z=(Object(l.a)(n.appContent.get),Object(l.a)(n.compStage.get)),f=(Object(l.a)(n.deviceSize.get),Object(l.a)(n.typeUI.get)),p=Object(l.a)(n.typeTheme.get),d=function(t){var e=t.currentTarget;z.scrollTop=e.offsetTop},m=function(t,e){return t.path+"#"+e},h=function(){var t=function(){var t=document.querySelector(".z-css-device-size"),e="";t&&(e=getComputedStyle(t,":after").getPropertyValue("content"),c.dispatch(n.deviceSize,e))};window.addEventListener("resize",Object(a.a)(t,100)),t()},v={store:c,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return u},testOpt:function(){return i},appContent:function(){return this.$store.getters[n.appContent.get]},compStage:function(){return this.$store.getters[n.compStage.get]},typeUI:function(){return this.$store.getters[n.typeUI.get]},typeTheme:function(){return this.$store.getters[n.typeTheme.get]},deviceSize:function(){return this.$store.getters[n.deviceSize]}},mounted:function(){var t=this;this._initComp();var e=function(){var e=document.querySelector(".z-css-device-size"),o="";e&&(o=getComputedStyle(e,":after").getPropertyValue("content"),t.$store.dispatch(n.deviceSize,o))};window.addEventListener("resize",Object(a.a)(e,100)),e()}};e.b=v},567:function(t,e,o){},568:function(t,e,o){var l=o(503);t.exports=function(t){var e,o="",n={};return n.section=e=function(t,n){var a=this&&this.block;this&&this.attributes;o=o+'<section><router-link class="anchor-title"'+l.attr("id",t,!0,!0)+' tag="h1"'+l.attr(":to",'anchorLink("'+t+'")',!0,!0)+'><span @click="goAnchor">'+l.escape(null==(e=n)?"":e)+"</span></router-link>",a?a&&a():o+="<p>暂无内容</p>",o+="</section>"},o+='<div class="component-transition"><router-view></router-view><article class="example-article">',n.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>display</z-table-col><z-table-col>boolean</z-table-col><z-table-col>*false | true</z-table-col><z-table-col>默认一开始是隐藏（进来之前的状态）</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>speed</z-table-col><z-table-col>string</z-table-col><z-table-col>slow | *normal | fast</z-table-col><z-table-col>过渡的速度</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>sync</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>*false | true</z-table-col><z-table-col>调用多次动画时，动画与动画之间是否时同步</z-table-col></z-table-row></z-table>'}},"transitionProps","公共的 props"),n.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>beforeEnter</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>进来过渡之前</p><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>enter</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>进来过渡期间</p><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>afterEnter</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>进来过渡完成</p><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row></z-table>'}},"transitionProps","公共的 event"),o+="</article></div>"}},604:function(t,e,o){"use strict";o.r(e);o(567);var l=o(568),n=o.n(l),a=o(507);e.default={name:"PageCompMotion",template:n()(),mixins:[a.b],data:function(){return{testName:"test"}},methods:{zoomIn:function(){this.$refs.zoom.enter()},zoomOut:function(){this.$refs.zoom.leave()},slideIn:function(){this.$refs.slide.enter()},slideOut:function(){this.$refs.slide.leave()},fadeIn:function(){this.$refs.fade.enter()},fadeOut:function(){this.$refs.fade.leave()},unfold:function(){this.$refs.fold.enter()},fold:function(){this.$refs.fold.leave()},rip:function(){this.$refs.rip.enter()}}}}}]);
//# sourceMappingURL=8.bundle.f159bca.js.map