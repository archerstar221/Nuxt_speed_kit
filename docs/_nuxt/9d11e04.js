(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{248:function(e,t,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("15b16601",content,!0,{sourceMap:!1})},268:function(e,t,n){"use strict";n(248)},269:function(e,t,n){var o=n(46)((function(i){return i[1]}));o.push([e.i,".codesandbox[data-v-715f84a5], .codesandbox iframe[data-v-715f84a5]{\n  height:16rem;\n  width:100%;\n  overflow:hidden;\n  border-radius:0.375rem\n}\n.codesandbox[data-v-715f84a5],.codesandbox iframe[data-v-715f84a5]{\n  height:650px\n}",""]),e.exports=o},294:function(e,t,n){"use strict";n.r(t);var o={props:{src:{type:String,required:!0}},data:function(){return{isIntersecting:!1}},mounted:function(){var e=this;window.IntersectionObserver?(this.__observer=new window.IntersectionObserver((function(t){t.forEach((function(t){var n=t.intersectionRatio;t.target;n>0&&(e.isIntersecting=!0,e.__observer.disconnect(),delete e.__observer)}))})),this.__observer.observe(this.$el)):this.isIntersecting=!0},beforeDestroy:function(){this.__observer&&(this.__observer.disconnect(),delete this.__observer)}},r=(n(268),n(2)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"codesandbox w-full mb-6 mx-auto bg-black text-white text-3xl text-center flex items-center justify-center overflow-hidden rounded-md"},[e.isIntersecting&&e.src?n("iframe",{staticClass:"w-full overflow-hidden",attrs:{src:e.src,title:"CodeSandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}):n("span",[e._v("Loading CodeSandbox...")])])}),[],!1,null,"715f84a5",null);t.default=component.exports}}]);