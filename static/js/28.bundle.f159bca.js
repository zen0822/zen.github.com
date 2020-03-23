(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{507:function(t,e,n){"use strict";n.d(e,"g",(function(){return u})),n.d(e,"f",(function(){return g})),n.d(e,"e",(function(){return b})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return f}));for(var l=n(63),o=n(7),a=n(163),c=n(15),r=Object(l.b)(),i=[],s=0;s<33;s++)i.push({text:"test-"+s,name:"name-"+s,size:"size-"+s,en:"en-"+s,value:s});var z=Object(c.e)("VUE2DO"),b=Object(c.e)(i),p=(Object(l.a)(o.appContent.get),Object(l.a)(o.compStage.get)),u=(Object(l.a)(o.deviceSize.get),Object(l.a)(o.typeUI.get)),g=Object(l.a)(o.typeTheme.get),d=function(t){var e=t.currentTarget;p.scrollTop=e.offsetTop},h=function(t,e){return t.path+"#"+e},f=function(){var t=function(){var t=document.querySelector(".z-css-device-size"),e="";t&&(e=getComputedStyle(t,":after").getPropertyValue("content"),r.dispatch(o.deviceSize,e))};window.addEventListener("resize",Object(a.a)(t,100)),t()},m={store:r,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return z},testOpt:function(){return i},appContent:function(){return this.$store.getters[o.appContent.get]},compStage:function(){return this.$store.getters[o.compStage.get]},typeUI:function(){return this.$store.getters[o.typeUI.get]},typeTheme:function(){return this.$store.getters[o.typeTheme.get]},deviceSize:function(){return this.$store.getters[o.deviceSize]}},mounted:function(){var t=this;this._initComp();var e=function(){var e=document.querySelector(".z-css-device-size"),n="";e&&(n=getComputedStyle(e,":after").getPropertyValue("content"),t.$store.dispatch(o.deviceSize,n))};window.addEventListener("resize",Object(a.a)(e,100)),e()}};e.b=m},550:function(t,e,n){},551:function(t,e){t.exports='<div class="component-page">\n  <article class="example-article">\n    <section>\n      <router-link\n          class="anchor-title"\n          tag="h1"\n          :to="anchorLink(\'basic\')">\n        <span @click="goAnchor">基本用法</span>\n      </router-link>\n\n      <p class="section-description">默认是点击数字的分页形式</p>\n\n      <z-page :data="{\n        length: 24,\n        size: 5,\n        total: 5,\n        current: 2\n      }"></z-page>\n\n      <z-code v-pre>&ltz-page :data="{\n  length: 24,\n  size: 5,\n  total: 5,\n  current: 2\n}">&lt/z-page&gt</z-code>\n    </section>\n    <section>\n      <router-link\n          class="anchor-title"\n          tag="h1"\n          :to="anchorLink(\'more\')">\n        <span @click="goAnchor">加载更多的分页形式</span>\n      </router-link>\n\n      <z-page auto :data="pageData" type="more"></z-page>\n\n      <z-code v-pre>&ltz-page auto :data="pageData" type="more"&gt&lt/z-page&gt</z-code>\n    </section>\n    <section>\n      <router-link\n          class="anchor-title"\n          tag="h1"\n          :to="anchorLink(\'auto\')">\n        <span @click="goAnchor">自动计算分页数据</span>\n      </router-link>\n\n      <z-page auto :data="{\n        length: 24,\n        size: 5\n      }"></z-page>\n\n      <z-code v-pre>&ltz-page auto :data="{\n  length: 24,\n  size: 5\n}"&gt&lt/z-page&gt</z-code>\n    </section>\n\n    <section>\n      <router-link\n          class="anchor-title"\n          tag="h1"\n          :list="false"\n          :to="anchorLink(\'props\')">\n        <span @click="goAnchor">props 数据类型</span>\n      </router-link>\n\n      <z-table\n          border="row"\n          auto\n          :pageSize="10">\n        <template slot="thead" v-for="item in [\'名字\', \'类型\', \'可选值\', \'说明\']">\n          <z-table-col>{{ item }}</z-table-col>\n        </template>\n\n        <z-table-row slot="1">\n          <z-table-col>auto</z-table-col>\n          <z-table-col>Boolean</z-table-col>\n          <z-table-col>(*false | true)</z-table-col>\n          <z-table-col>分页的显示状态</z-table-col>\n        </z-table-row>\n        <z-table-row slot="2">\n          <z-table-col>display</z-table-col>\n          <z-table-col>Boolean</z-table-col>\n          <z-table-col>(*false | true)</z-table-col>\n          <z-table-col>分页的显示状态</z-table-col>\n        </z-table-row>\n        <z-table-row slot="3">\n          <z-table-col>data</z-table-col>\n          <z-table-col>Object</z-table-col>\n          <z-table-col>——</z-table-col>\n          <z-table-col>\n            <p>分页数据</p>\n            <ul>\n              <li>length：一共有几条数据</li>\n              <li>total：一共有多少页</li>\n              <li>size：每页几条数据</li>\n              <li>current：当前的页码</li>\n            </ul>\n          </z-table-col>\n        </z-table-row>\n        <z-table-row slot="4">\n          <z-table-col>onePageDisplay</z-table-col>\n          <z-table-col>布尔值</z-table-col>\n          <z-table-col>(*false | true)</z-table-col>\n          <z-table-col>分页总页数为 1 时是否显示</z-table-col>\n        </z-table-row>\n        <z-table-row slot="5">\n          <z-table-col>size</z-table-col>\n          <z-table-col>Boolean</z-table-col>\n          <z-table-col>（s | *m | l）</z-table-col>\n          <z-table-col>分页外观尺寸大小</z-table-col>\n        </z-table-row>\n        <z-table-row slot="6">\n          <z-table-col>type</z-table-col>\n          <z-table-col>Boolean</z-table-col>\n          <z-table-col>（more | *num）</z-table-col>\n          <z-table-col>\n            <p>分页类型</p>\n            <ul>\n              <li>more：加载更多</li>\n              <li>num：数字标注（默认）</li>\n            </ul>\n          </z-table-col>\n        </z-table-row>\n        <z-table-row slot="7">\n          <z-table-col>loadMoreText</z-table-col>\n          <z-table-col>String</z-table-col>\n          <z-table-col>——</z-table-col>\n          <z-table-col>\n            加载更多的提示文字\n          </z-table-col>\n        </z-table-row>\n      </z-table>\n    </section>\n\n    <section>\n      <router-link\n          class="anchor-title"\n          tag="h1"\n          :list="false"\n          :to="anchorLink(\'events\')">\n        <span @click="goAnchor">events 事件</span>\n      </router-link>\n\n      <z-table\n          border="row"\n          auto\n          :pageSize="10">\n        <template slot="thead" v-for="item in [\'名字\', \'返回值类型\', \'说明\']">\n          <z-table-col>{{ item }}</z-table-col>\n        </template>\n\n        <z-table-row slot="1">\n          <z-table-col>switch</z-table-col>\n          <z-table-col>Number</z-table-col>\n          <z-table-col>切换页码触发的事件</z-table-col>\n        </z-table-row>\n      </z-table>\n    </section>\n\n    <section>\n      <router-link\n          class="anchor-title"\n          tag="h1"\n          :list="false"\n          :to="anchorLink(\'slots\')">\n        <span @click="goAnchor">slots 内容分发</span>\n      </router-link>\n\n      <z-table\n          border="row"\n          auto\n          :pageSize="10">\n        <template slot="thead" v-for="item in [\'名字\', \'返回值类型\', \'说明\']">\n          <z-table-col>{{ item }}</z-table-col>\n        </template>\n\n        <z-table-row slot="1">\n          <z-table-col>loadMore</z-table-col>\n          <z-table-col>分页类型为加载更多时的，在按钮处的内容分发</z-table-col>\n        </z-table-row>\n      </z-table>\n    </section>\n  </article>\n</div>'},596:function(t,e,n){"use strict";n.r(e);n(550);var l=n(551),o=n.n(l),a=n(507);e.default={name:"PageCompPage",template:o.a,mixins:[a.b],data:function(){return{pageData:{length:24,size:5}}}}}}]);
//# sourceMappingURL=28.bundle.f159bca.js.map