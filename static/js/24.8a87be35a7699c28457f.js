webpackJsonp([24],{539:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(580)),r=i(n(560));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"PageCompForm",template:(0,o.default)(),mixins:[r.default],methods:{submit:function(){var e=this;this.$refs.submit.openLoading(),this.$refs.formArea.verify()?console.log(this.$refs.formArea.queryOpt):console.warn("verify error!"),setTimeout(function(){e.$refs.submit.closeLoading()},5e3)}}}},560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(129)),r=s(n(92)),i=n(186);function s(e){return e&&e.__esModule?e:{default:e}}for(var a=[],c=0;c<33;c++)a.push({text:"test-"+c,name:"name-"+c,size:"size-"+c,en:"en-"+c,value:c});t.default={store:o.default,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return a},appContent:function(){return this.$store.getters[r.default.appContent.get]},compStage:function(){return this.$store.getters[r.default.compStage.get]},typeUI:function(){return this.$store.getters[r.default.typeUI.get]},typeTheme:function(){return this.$store.getters[r.default.typeTheme.get]},deviceSize:function(){return this.$store.getters[r.default.deviceSize]}},mounted:function(){var e=this;this._initComp();var t=function(){var t=document.querySelector(".z-css-device-size"),n="";t&&(n=getComputedStyle(t,":after").getPropertyValue("content"),e.$store.dispatch(r.default.deviceSize,n))};window.addEventListener("resize",(0,i.throttle)(t)),t()}}},580:function(e,t,n){var o=n(93);e.exports=function(e){var t,n="",r={};return r.section=t=function(e,r){var i=this&&this.block;this&&this.attributes,n=n+'<section><router-link class="anchor-title"'+o.attr("id",e,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(t=r)?"":t)+"</span></router-link>",i?i&&i():n+="<p>暂无内容</p>",n+="</section>"},n+='<div><article class="example-article">',r.section.call({block:function(){n=n+'<z-form slot="1" ref="formArea"><z-row><z-col :span="6">test2:</z-col><z-col :span="6"><z-select name="名字" :ui="typeUI" :theme="typeTheme" :option="testOpt" param="name"></z-select></z-col></z-row><z-row><z-col :span="6">name:</z-col><z-col :span="6"><z-input name="性别" required value="2" param="sex"></z-input></z-col></z-row><z-row><z-col :span="6"><z-btn ref="submit" @click="submit">提交</z-btn></z-col></z-row></z-form><z-code :theme="typeTheme">'+o.escape(null==(t="<z-btn>")?"":t)+"\n  提交\n"+o.escape(null==(t="</z-btn>")?"":t)+"</z-code>"}},"start","开始使用"),n+="</article></div>"}}});