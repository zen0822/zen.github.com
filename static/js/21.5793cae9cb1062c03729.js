(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{489:function(t,e,n){"use strict";n.d(e,"g",function(){return b}),n.d(e,"f",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return f}),n.d(e,"d",function(){return m});for(var o=n(88),i=n(10),c=n(139),r=n(26),s=Object(o.c)(),u=[],a=0;a<33;a++)u.push({text:"test-"+a,name:"name-"+a,size:"size-"+a,en:"en-"+a,value:a});Object(r.e)("VUE2DO");var p=Object(r.e)(u),l=(Object(o.b)(i.appContent.get),Object(o.b)(i.compStage.get)),b=(Object(o.b)(i.deviceSize.get),Object(o.b)(i.typeUI.get)),h=Object(o.b)(i.typeTheme.get),d=function(t){var e=t.currentTarget;l.scrollTop=e.offsetTop},f=function(t,e){return t.path+"#"+e},m=function(){function t(){var t=document.querySelector(".z-css-device-size"),e="";t&&(e=getComputedStyle(t,":after").getPropertyValue("content"),s.dispatch(i.deviceSize,e))}window.addEventListener("resize",Object(c.a)(t,100)),t()},g={store:s,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return u},appContent:function(){return this.$store.getters[i.appContent.get]},compStage:function(){return this.$store.getters[i.compStage.get]},typeUI:function(){return this.$store.getters[i.typeUI.get]},typeTheme:function(){return this.$store.getters[i.typeTheme.get]},deviceSize:function(){return this.$store.getters[i.deviceSize]}},mounted:function(){var n=this;this._initComp();function t(){var t=document.querySelector(".z-css-device-size"),e="";t&&(e=getComputedStyle(t,":after").getPropertyValue("content"),n.$store.dispatch(i.deviceSize,e))}window.addEventListener("resize",Object(c.a)(t,100)),t()}};e.b=g},529:function(t,e,n){},530:function(t,e,n){var c=n(104);t.exports=function(t){var o,i="",e={};return e.section=o=function(t,e){var n=this&&this.block;this&&this.attributes;i=i+'<section><router-link class="anchor-title"'+c.attr("id",t,!0,!0)+' tag="h1"'+c.attr(":to",'anchorLink("'+t+'")',!0,!0)+'><span @click="goAnchor">'+c.escape(null==(o=e)?"":o)+"</span></router-link>",n?n&&n():i+="<p>暂无内容</p>",i+="</section>"},i+='<div class="component-pop"><article class="example-article">',e.section.call({block:function(){i=i+'<z-btn :ui="typeUI" :theme="typeTheme" @click="tip">提示</z-btn><z-code :theme="typeTheme">'+c.escape(null==(o='import { tip } from "vue2do"')?"":o)+"\n\n"+c.escape(null==(o='<z-btn @click="tip">')?"":o)+"\n  提示\n"+c.escape(null==(o="</z-btn>")?"":o)+"</z-code>"}},"start","弹窗"),e.section.call({block:function(){i=i+'<z-btn :ui="typeUI" :theme="typeTheme" @click="toast">toast</z-btn><z-code :theme="typeTheme">'+c.escape(null==(o='import { toast } from "vue2do"')?"":o)+"\n\n"+c.escape(null==(o='<z-btn @click="toast">')?"":o)+"\n  toast\n"+c.escape(null==(o="</z-btn>")?"":o)+"</z-code>"}},"start","底部弹出提示（toast）"),e.section.call({block:function(){i=i+'<z-btn :ui="typeUI" :theme="typeTheme" @click="showTooltip" @blur="hideTooltip" ref="bubbleBtn">泡泡提示</z-btn><z-bubble :ui="typeUI" :theme="typeTheme" ref="bubble" fixed :target="bubbleTarget"><p>泡泡提示</p></z-bubble><z-code type="js" :theme="typeTheme">...\n  showTooltip({\n    event\n  }) {\n    this.tooltip = tooltip({\n      message: \'tooltip\',\n      target: event.currentTarget\n    })\n  },\n\n  hideTooltip() {\n    this.tooltip.hide && this.tooltip.hide()\n  }\n...</z-code><z-code type="html" :theme="typeTheme">'+c.escape(null==(o='<z-btn @click="showTooltip" @blur="hideTooltip">')?"":o)+"\n  泡泡提示\n"+c.escape(null==(o="</z-btn>")?"":o)+"</z-code>"}},"bubble","泡泡提示"),i+="</article></div>"}},577:function(t,e,n){"use strict";n.r(e);var o,i=n(16),c=n.n(i),r=n(24),s=n.n(r),u=(n(529),n(530)),a=n.n(u),p=n(489),l=n(21),b=n(105),h=n(140);e.default={name:"PageCompTip",template:a()(),mixins:[p.b],data:function(){return this.tooltip={},{testName:"test",bubbleTarget:this.$refs.bubbleTarget}},methods:{tip:function(){Object(l.a)("验证码校验啊速度放缓i吧 345")},toast:function(){Object(b.a)("底部弹出提示信息！")},showTooltip:function(t){var e=t.event;this.tooltip=Object(h.a)({message:"tooltip",target:e.currentTarget})},bubble:(o=s()(c.a.mark(function t(e){var n,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.event,o=n.currentTarget,n.stopPropagation(),this.$refs.bubble.show(o);case 4:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)}),hideTooltip:function(){this.$refs.bubble.hide(),this.tooltip.hide&&this.tooltip.hide()}}}}}]);