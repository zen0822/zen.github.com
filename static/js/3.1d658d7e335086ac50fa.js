(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{489:function(e,t,n){"use strict";n.d(t,"g",function(){return p}),n.d(t,"f",function(){return f}),n.d(t,"e",function(){return m}),n.d(t,"c",function(){return d}),n.d(t,"a",function(){return h}),n.d(t,"d",function(){return v});for(var o=n(88),r=n(10),c=n(139),a=n(26),s=Object(o.c)(),i=[],u=0;u<33;u++)i.push({text:"test-"+u,name:"name-"+u,size:"size-"+u,en:"en-"+u,value:u});Object(a.e)("VUE2DO");var m=Object(a.e)(i),l=(Object(o.b)(r.appContent.get),Object(o.b)(r.compStage.get)),p=(Object(o.b)(r.deviceSize.get),Object(o.b)(r.typeUI.get)),f=Object(o.b)(r.typeTheme.get),d=function(e){var t=e.currentTarget;l.scrollTop=t.offsetTop},h=function(e,t){return e.path+"#"+t},v=function(){function e(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),s.dispatch(r.deviceSize,t))}window.addEventListener("resize",Object(c.a)(e,100)),e()},g={store:s,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return i},appContent:function(){return this.$store.getters[r.appContent.get]},compStage:function(){return this.$store.getters[r.compStage.get]},typeUI:function(){return this.$store.getters[r.typeUI.get]},typeTheme:function(){return this.$store.getters[r.typeTheme.get]},deviceSize:function(){return this.$store.getters[r.deviceSize]}},mounted:function(){var n=this;this._initComp();function e(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),n.$store.dispatch(r.deviceSize,t))}window.addEventListener("resize",Object(c.a)(e,100)),e()}};t.b=g},491:function(e,t,n){"use strict";n(201),n(202),n(45),n(203),n(204),e.exports={cssLoader:function(e,t,n){return function(){}}}},504:function(e,t,n){},505:function(e,t,n){n(104);e.exports=function(e){var t="";return t+='<div class="p-component"><z-row :gap="30" align="start"><z-col class="p-component-menu" :style="componentStyle"><z-nav type="vertical" title="组件导航" trigger="show" spread-all :init-opt="menuOpt" :ui="typeUI" :theme="typeTheme"></z-nav></z-col><z-col class="p-component-stage" :style="componentStyle" ref="compStage"><transition name="z-fade" v-on:after-enter="afterEnter"><div><z-row class="z-css-m-b-double p-component-menu-container" justify="justify"><z-col><span class="z-css-vertical-middle">UI:</span><z-select class="p-component-menu-select" :value="typeUI" ref="ui" menuWidth="100%"><z-select-ele value="bootstrap">Bootstrap4</z-select-ele><z-select-ele value="material">Material</z-select-ele></z-select></z-col><z-col><span class="z-css-vertical-middle">Theme:</span><z-select class="p-component-menu-select" :value="typeTheme" ref="theme" menuWidth="100%"><z-select-ele value="primary">Primary</z-select-ele><z-select-ele value="danger">Danger</z-select-ele><z-select-ele value="success">Success</z-select-ele><z-select-ele value="warning">Warning</z-select-ele><z-select-ele value="orange">Orange</z-select-ele><z-select-ele value="grey">Grey</z-select-ele><z-select-ele value="light">Light</z-select-ele><z-select-ele value="dark">Dark</z-select-ele><z-select-ele value="white">White</z-select-ele><z-select-ele value="black">Black</z-select-ele></z-select></z-col></z-row><router-view></router-view></div></transition></z-col></z-row></div>'}},506:function(e){e.exports=JSON.parse('[{"name":"开始使用","route":"/component/start"},{"name":"表单控件","sub":[{"name":"按钮组件","route":"/component/btn"},{"name":"选择组件","route":"/component/check"},{"name":"下拉选择组件","route":"/component/select"},{"name":"输入组件","route":"/component/input"},{"name":"表单组件","route":"/component/form"},{"name":"上传组件","route":"/component/upload"}]},{"name":"弹窗","sub":[{"name":"确认弹窗","route":"/component/modal#confirm"},{"name":"消息弹窗","route":"/component/modal#alert"}]},{"name":"提示","sub":[{"name":"泡泡提示","route":"/component/tip#bubble"},{"name":"弹窗提示","route":"/component/tip#alert"},{"name":"底部提示","route":"/component/tip#toast"}]},{"name":"数据展示","sub":[{"name":"表格数据","route":"/component/table"},{"name":"列表数据","route":"/component/list"},{"name":"图像组件","route":"/component/img"}]},{"name":"样式与布局","sub":[{"name":"布局组件","route":"/component/grid"},{"name":"图标组件","route":"/component/icon"}]},{"name":"分页控件","sub":[{"name":"加载更多","route":"/component/pager#more"},{"name":"页码跳转","route":"/component/pager#page-num"}]},{"name":"进度与加载","sub":[{"name":"加载组件","route":"/component/loading"}]},{"name":"过渡动画","sub":[{"name":"放大缩小","route":"/component/motion/zoom"},{"name":"淡入淡出","route":"/component/motion/fade"},{"name":"折叠展开","route":"/component/motion/fold"},{"name":"滑来滑去","route":"/component/motion/slide"},{"name":"涟漪效果","route":"/component/motion/rip"}]},{"name":"其他组件","sub":[{"name":"滚动条","route":"/component/scroller"},{"name":"选项卡","route":"/component/tab"},{"name":"弹出","route":"/component/pop"},{"name":"省略","route":"/component/omit"},{"name":"菜单","route":"/component/menu"},{"name":"拍照","route":"/component/capture"}]}]')},563:function(e,t,n){"use strict";n.r(t);n(504);var o=n(505),r=n.n(o),c=n(506),a=n(489),s=n(10),i=n(491);t.default={name:"PageComponent",template:r()(),mixins:[a.b],beforeRouteEnter:function(t,e,n){n(function(e){e.$nextTick(function(){e.goAnchor(t.hash.replace("#",""))})})},data:function(){return{menuOpt:c,testName:"test",dropMenuOpt:[],classifyOpt:{recent:[{value:1,text:"test1"}],hot:[{value:1,text:"test1"},{value:2,text:"test2"},{value:3,text:"test3"}]},initVal:[]}},computed:{componentStyle:function(){return this.appContent&&"xs"!==this.deviceSize?{height:this.appContent.offsetHeight+"px"}:{height:""}}},methods:{optProcessor:function(e){return e.unshift({value:-1,text:"optProcessor"}),e},clickIcon:function(){},submit:function(){this.$refs.submit.openLoading(),this.$refs.formArea.verify(),Object(i.alert)("提交的数据：".concat(this.$refs.formArea.queryOpt))},next:function(){this.$refs.shift.rotate()},goAnchor:function(e){if(!e)return!1;var t=document.getElementById(e);t&&(this.compStage.scrollTop=t.offsetTop)},afterEnter:function(){return this.goAnchor(this.$route.hash.replace("#",""))}},created:function(){for(var e=0;e<33;e++)this.dropMenuOpt.push({text:"test-"+e,name:"name-"+e,size:"size-"+e,en:"en-"+e,value:e})},beforeMount:function(){var e=window.localStorage.getItem("".concat(this.varPrefix,"_THEME")),t=window.localStorage.getItem("".concat(this.varPrefix,"_UI"));e?this.$store.dispatch(s.typeTheme.add,e):(this.$store.dispatch(s.typeTheme.add,"primary"),window.localStorage.setItem("".concat(this.varPrefix,"_THEME"),"primary")),t?this.$store.dispatch(s.typeUI.add,t):(this.$store.dispatch(s.typeUI.add,"material"),window.localStorage.setItem("".concat(this.varPrefix,"_UI"),"material"))},mounted:function(){var n=this;this.$refs.theme.$on("change",function(e){var t=e.value;n.$store.dispatch(s.typeTheme.add,t),window.localStorage.setItem("".concat(n.varPrefix,"_THEME"),t)}),this.$refs.ui.$on("change",function(e){var t=e.value;n.$store.dispatch(s.typeUI.add,t),window.localStorage.setItem("".concat(n.varPrefix,"_UI"),t)}),setTimeout(function(){n.dropMenuOpt=n.dropMenuOpt.concat([{value:4,text:"test4"},{value:5,text:"test5"},{value:6,text:"test6"}]),n.initVal=["2","4"]},3e3),this.$nextTick(function(){n.$store.dispatch(s.compStage.add,n.$refs.compStage)})}}}}]);