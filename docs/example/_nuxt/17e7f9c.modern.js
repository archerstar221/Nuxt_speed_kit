(window.webpackJsonp=window.webpackJsonp||[]).push([[7,20],{125:function(t,e,r){"use strict";(function(t){var n=r(15),o=r(131),c=r(9),l=r(126),d=r(132),f=r(10);const h=new d.a;function m({type:t}){return t===Object(l.a)("webp")}e.a={props:{sources:{type:Array,default:()=>[]},preload:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head(){let data={};if(this.preload.length&&(this.isCritical||this.visible)){const source=this.getPreloadSource();h.getPromise(Object(f.a)(source.srcset),((e,r)=>{Object(o.b)()?data={link:[Object(c.b)(source,this.crossorigin,e)]}:function({srcset:e,sizes:r},n,c=(()=>{})){if(Object(o.a)()){const img=new t.Image;img.sizes=r,img.srcset=e,img.crossorigin=n,img.onload=c}else c()}(source,this.crossorigin,e)})).then((t=>this.onPreload(t)))}return data},watch:{sources(){this.imageSources.length||(this.imageSources=this.sources)}},mounted(){Object(n.a)(this.$el,(t=>{this.visible=!0,this.$emit("enter",t)}))},destroyed(){Object(n.b)(this.$el)},methods:{onPreload(e){this.style.backgroundImage=`url(${this.$refs.image.currentSrc})`,this.imageSources=this.preload,this.inProgress=!1,this.$emit("load"),t.requestAnimationFrame((()=>{!function(e,r){"objectFitImages"in t&&t.objectFitImages(r);"picturefill"in t&&t.picturefill({elements:e})}(this.$el,this.$refs.image)}))},getPreloadSource(){const t=function(t){return t.filter((source=>!m(source)||m(source)&&o.c))}(this.preload),e=Array.from(new Set(t.map((({type:t})=>t)))).shift(),{srcset:r,sizes:n}=t.filter((source=>source.type===e)).reduce(((t,source)=>(t.srcset.push(source.srcset),t.sizes.push(source.sizes),t)),{srcset:[],sizes:[]});return{srcset:r.join(", "),sizes:n.join(", "),type:e}}}}}).call(this,r(6))},126:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));const n={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(t){return n[String(t)]}},127:function(t,e,r){var content=r(134);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("32d47245",content,!0,{sourceMap:!1})},128:function(t,e,r){var content=r(136);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("3bcf2470",content,!0,{sourceMap:!1})},129:function(t,e,r){var content=r(138);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("24e5387e",content,!0,{sourceMap:!1})},130:function(t,e,r){"use strict";r(137);var n=r(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"preview-container"},[r("div",{staticClass:"preview-container__preview"},[t._t("default")],2),t._v(" "),r("div",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[t._t("title",(function(){return[r("p",[t._v("Preview Info")])]}))],2)])}),[],!1,null,"338932a0",null);e.a=component.exports},131:function(t,e,r){"use strict";(function(t){r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return l}));var n=r(13);const o=function(){const e=t.document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")}();function c(){if(Object(n.a)())return!1;{const e=t.document.createElement("link").relList;return function(element,e){let r={};t.document&&(r=t.document.createElement(element));if(e in r)return!0;return!1}("link","imageSrcset")&&!!(e&&e.supports&&e.supports("preload"))}}function l(){return"HTMLPictureElement"in t}}).call(this,r(6))},132:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(19);class o{constructor(){this.map=new Map}getPromise(t,e){if(!this.map.has(t)){const r=new n.a;this.map.set(t,r.promise),e(r.resolve,r.reject)}return this.map.get(t)}}},133:function(t,e,r){"use strict";r(127)},134:function(t,e,r){var n=r(4)(!1);n.push([t.i,"picture[data-v-fb5c2d90]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-fb5c2d90]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-fb5c2d90]{filter:blur(10px);transform:scale(1.1)}",""]),t.exports=n},135:function(t,e,r){"use strict";r(128)},136:function(t,e,r){var n=r(4)(!1);n.push([t.i,".nuxt-speedkit__noscript[data-v-7b49c021]{display:block;height:inherit}",""]),t.exports=n},137:function(t,e,r){"use strict";r(129)},138:function(t,e,r){var n=r(4)(!1);n.push([t.i,".preview-container[data-v-338932a0]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-338932a0]:first-child{margin-top:0}.preview-container[data-v-338932a0]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-338932a0]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-338932a0]{flex-direction:row}}.preview-container>div[data-v-338932a0]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;overflow:hidden}@media (orientation:landscape){.preview-container>div[data-v-338932a0]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-338932a0]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-338932a0]{font-size:2em}.preview-container .preview-container__info p[data-v-338932a0]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-338932a0]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-338932a0]{font-size:1.125em;--bg-opacity:1;background-color:rgba(0,0,0,.4)}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-338932a0]{background-color:hsla(0,0%,100%,.4)}}.preview-container .preview-container__preview>article[data-v-338932a0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-align:center}.preview-container .preview-container__preview>div[data-v-338932a0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-338932a0]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-338932a0]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-338932a0]{position:relative;width:100%;height:100%}",""]),t.exports=n},139:function(t,e,r){"use strict";var n=r(125).a,o=(r(133),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{style:t.style},[t._l(t.imageSources,(function(source,t){return r("source",{key:t,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),t._v(" "),r("img",{ref:"image",class:{"in-progress":t.inProgress},attrs:{loading:"lazy",alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],2)}),[],!1,null,"fb5c2d90",null);e.a=component.exports},140:function(t,e,r){"use strict";r(135);var n=r(2),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"7b49c021",null);e.a=component.exports},141:function(t,e,r){var content=r(148);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("546f0ade",content,!0,{sourceMap:!1})},145:function(t,e,r){"use strict";function n(t,e){const{media:r,breakpoint:n}=e.min,{width:o}=e.max;return{size:e,media:r,breakpoint:n,width:o,url:t}}function o(t){const e=Array.from(t).sort(((a,b)=>a.width>b.width?1:-1)),r=e.shift();return{min:r,max:e.pop()||r}}function c(t){return t.sort(((a,b)=>a.width<b.width?1:-1))}var l=r(126),d=r(9),f=r(139),h=r(140);function m(){m=function(t,e){return new r(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function r(t,n,o){var c=new RegExp(t,n);return e.set(c,o||e.get(t)),y(c,r.prototype)}function n(t,r){var g=e.get(r);return Object.keys(g).reduce((function(e,r){return e[r]=t[g[r]],e}),Object.create(null))}return v(r,RegExp),r.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=n(r,this)),r},r.prototype[Symbol.replace]=function(r,o){if("string"==typeof o){var c=e.get(this);return t[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+c[e]})))}if("function"==typeof o){var l=this;return t[Symbol.replace].call(this,r,(function(){var t=arguments;return"object"!=typeof t[t.length-1]&&(t=[].slice.call(t)).push(n(t,l)),o.apply(this,t)}))}return t[Symbol.replace].call(this,r,o)},m.apply(this,arguments)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,p){return(y=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}var _={components:{CustomPicture:f.a,CustomNoScript:h.a},props:{sources:{type:Array,default:()=>[]},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{placeholders:[],resolvedSources:this.getSources()}},async fetch(){this.placeholders=await this.fetchMeta()},head:()=>({noscript:[Object(d.c)(".nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}),computed:{hasSlot(){return this.$slots.caption}},watch:{async sources(){this.placeholders=await this.fetchMeta()}},methods:{async fetchMeta(){return t=this.sources,e=({src:t,sizes:e})=>Promise.all([this.$img(t,{width:30}),this.$img.sizes(t,e)]),Promise.all(t.map((async source=>{const[{url:t},r]=await e(source);return n(t,o(r))}))).then(c);var t,e},getSources(){return(t=this.sources,Array.from(new Set(["webp"].concat(t.map((source=>function(t){const e=t.match(m(/\.(png|jpe?g)/i,{ext:1}));return e&&e.groups.ext}(source.src)||"jpg"))).map((t=>"jpeg"===t?"jpg":t))))).map((t=>this.sources.map((source=>[source])).map((([{src:e,sizes:r}],n)=>{const o=this.$img.sizes(e,r,{format:t}),c=o.sort(((a,b)=>a.width>b.width?-1:1));return{media:n<this.sources.length-1&&`(min-width: ${o[o.length-1].width}px)`,srcset:c.map((({width:t,url:e})=>t?`${e} ${t}w`:e)).join(", "),sizes:c.map((({width:t,media:e})=>e?`${e} ${t}px`:`${t}px`)).join(", "),type:Object(l.a)(o[0].format)}})))).flat();var t}}},w=(r(147),r(2)),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"nuxt-speedkit__experimental__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),r("custom-picture",t._g({attrs:{sources:t.placeholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"386e2f9d",null);e.a=component.exports},147:function(t,e,r){"use strict";r(141)},148:function(t,e,r){var n=r(4)(!1);n.push([t.i,".nuxt-speedkit__experimental__speedkit-picture[data-v-386e2f9d]{width:100%;height:inherit;margin:0}",""]),t.exports=n},150:function(t,e,r){var content=r(168);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("c37ac90e",content,!0,{sourceMap:!1})},167:function(t,e,r){"use strict";r(150)},168:function(t,e,r){var n=r(4)(!1);n.push([t.i,'.nuxt-speedkit__speedkit-youtube[data-v-646c3b78]{position:relative;width:100%;overflow:hidden}.nuxt-speedkit__speedkit-youtube[data-v-646c3b78] iframe{position:absolute;top:0;width:100%;height:100%}.nuxt-speedkit__speedkit-youtube .poster[data-v-646c3b78]{position:relative;display:block;width:100%;padding:0;cursor:pointer;background:transparent;border:none;border-radius:0;outline:none;transition:opacity .2s ease-in;-webkit-appearance:none;-moz-appearance:none;appearance:none}.nuxt-speedkit__speedkit-youtube .poster .icon[data-v-646c3b78]{position:absolute;top:50%;left:50%;width:68px;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .poster .icon path[data-v-646c3b78]:first-child{fill:#212121;fill-opacity:.8;transition:fill .1s cubic-bezier(.4,0,1,1),fill-opacity .1s cubic-bezier(.4,0,1,1)}.nuxt-speedkit__speedkit-youtube .poster:hover path[data-v-646c3b78]:first-child{fill:red;fill-opacity:1;transition:fill .1s cubic-bezier(0,0,.2,1),fill-opacity .1s cubic-bezier(0,0,.2,1)}.nuxt-speedkit__speedkit-youtube svg[data-v-646c3b78]{transition:opacity .2s linear,transform .2s linear}.nuxt-speedkit__speedkit-youtube.js--playing .poster[data-v-646c3b78]{pointer-events:none;opacity:0}.nuxt-speedkit__speedkit-youtube .spinner[data-v-646c3b78]{position:absolute;top:50%;left:50%;z-index:18;width:48px;pointer-events:none;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .spinner[data-v-646c3b78]:before{display:block;padding-top:100%;content:""}.nuxt-speedkit__speedkit-youtube .spinner .spinner-container[data-v-646c3b78]{position:absolute;top:50%;left:50%;width:100%;padding-bottom:100%;margin-top:-50%;margin-left:-50%;pointer-events:none;-webkit-animation:spinner-linspin-data-v-646c3b78 1568.23529647ms linear infinite;animation:spinner-linspin-data-v-646c3b78 1568.23529647ms linear infinite}.nuxt-speedkit__speedkit-youtube .spinner .spinner-rotator[data-v-646c3b78]{position:absolute;width:100%;height:100%;-webkit-animation:spinner-easespin-data-v-646c3b78 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-easespin-data-v-646c3b78 5332ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left[data-v-646c3b78]{position:absolute;top:0;right:49%;bottom:0;left:0;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right[data-v-646c3b78]{position:absolute;top:0;right:0;bottom:0;left:49%;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-circle[data-v-646c3b78]{position:absolute;box-sizing:border-box;width:200%;height:100%;border:4px solid #b81c22;border-bottom-color:transparent;border-radius:50%}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left .spinner-circle[data-v-646c3b78]{border-right-color:transparent;-webkit-animation:spinner-left-spin-data-v-646c3b78 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-left-spin-data-v-646c3b78 1333ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right .spinner-circle[data-v-646c3b78]{left:-100%;border-left-color:transparent;-webkit-animation:spinner-right-spin-data-v-646c3b78 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-right-spin-data-v-646c3b78 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes rotate-data-v-646c3b78{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes rotate-data-v-646c3b78{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes spinner-linspin-data-v-646c3b78{to{transform:rotate(1turn)}}@keyframes spinner-linspin-data-v-646c3b78{to{transform:rotate(1turn)}}@-webkit-keyframes spinner-easespin-data-v-646c3b78{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes spinner-easespin-data-v-646c3b78{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes spinner-left-spin-data-v-646c3b78{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes spinner-left-spin-data-v-646c3b78{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes spinner-right-spin-data-v-646c3b78{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes spinner-right-spin-data-v-646c3b78{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}',""]),t.exports=n},172:function(t,e,r){"use strict";r.r(e);var n=r(154),o=r.n(n),c=r(19),l=r(146),d=r(145),f={components:{IntersectionObserver:l.a,SpeedkitPicture:d.a},props:{id:{type:String,required:!0},autoplay:{type:Boolean,default:!1},sizes:{type:String,default:null},host:{type:String,default:"https://www.youtube-nocookie.com"},config:{type:Object,default:()=>({playsinline:1,modestbranding:1})}},data:()=>({playing:!1,loading:!1,player:null,playerReady:new c.a,deferred:new c.a}),computed:{sources(){return[{src:`https://img.youtube.com/vi/${this.id}/maxresdefault.jpg`,sizes:this.sizes}]}},mounted(){this.playerReady.promise.then((()=>{this.$emit("ready")}))},methods:{async onClick(){this.deferred.resolve(),await this.play()},async onEnter(){this.$emit("enter"),this.deferred.resolve(),this.autoplay&&await this.play()},async play(){this.loading=!0,this.$emit("loading"),await this.playerReady.promise,this.player.playVideo()},async onLoad(){await this.deferred.promise,this.loadPlayer()},loadPlayer(){this.player=o()(this.$refs.youtube,{host:this.host,videoId:this.id,playerVars:this.config}),this.player.on("ready",(()=>{this.playerReady.resolve()})),this.player.on("stateChange",(t=>{1===t.data&&(this.loading=!1,this.playing=!0,this.$emit("playing"))}))}}},h=(r(167),r(2)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("intersection-observer",{attrs:{threshold:[1],"track-visibility":"",delay:350},on:{enter:t.onEnter}},[r("div",{staticClass:"nuxt-speedkit__speedkit-youtube",class:{"js--playing":t.playing,"js--loading":t.loading}},[r("div",{ref:"youtube",attrs:{loading:"lazy"}}),t._v(" "),r("button",{staticClass:"poster",attrs:{"aria-label":"Play"},on:{click:t.onClick}},[r("speedkit-picture",{attrs:{sources:t.sources},on:{load:t.onLoad}}),t._v(" "),t.loading||t.playing?t._e():r("span",{staticClass:"icon"},[r("svg",{attrs:{version:"1.1",viewBox:"0 0 68 48"}},[r("path",{attrs:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}}),r("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])]),t._v(" "),t.loading?r("div",{staticClass:"spinner"},[r("div",{staticClass:"spinner-container"},[r("div",{staticClass:"spinner-rotator"},[r("div",{staticClass:"spinner-left"},[r("div",{staticClass:"spinner-circle"})]),t._v(" "),r("div",{staticClass:"spinner-right"},[r("div",{staticClass:"spinner-circle"})])])])]):t._e()],1)])])}),[],!1,null,"646c3b78",null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);var n=r(172),o=r(130),c={components:{SpeedkitYoutube:n.default,OrganismPreviewContainer:o.a},data:()=>({youtube:{id:"cLKvbhfVBUU"}})},l=r(2),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("organism-preview-container",{scopedSlots:t._u([{key:"default",fn:function(){return[r("div",[r("speedkit-youtube",t._b({},"speedkit-youtube",t.youtube,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[r("p",[t._v("Critical"),r("br"),t._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,f={components:{SpeedkitYoutube:n.default,OrganismPreviewContainer:o.a},data:()=>({youtube:{id:"cLKvbhfVBUU"}})},h={components:{Critical:d,Lazy:Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("organism-preview-container",{scopedSlots:t._u([{key:"default",fn:function(){return[r("div",[r("speedkit-youtube",t._b({},"speedkit-youtube",t.youtube,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[r("p",[t._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},m=Object(l.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("critical",{attrs:{critical:""}}),t._v(" "),r("lazy")],1)}),[],!1,null,null,null);e.default=m.exports}}]);