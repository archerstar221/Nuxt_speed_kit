(window.webpackJsonp=window.webpackJsonp||[]).push([[5,15],{125:function(e,t,n){"use strict";(function(e){var r=n(15),o=n(131),c=n(9),l=n(126),m=n(132),d=n(10);const h=new m.a;function f({type:e}){return e===Object(l.a)("webp")}t.a={props:{sources:{type:Array,default:()=>[]},preload:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head(){let data={};if(this.preload.length&&(this.isCritical||this.visible)){const source=this.getPreloadSource();h.getPromise(Object(d.a)(source.srcset),((t,n)=>{Object(o.b)()?data={link:[Object(c.b)(source,this.crossorigin,t)]}:function({srcset:t,sizes:n},r,c=(()=>{})){if(Object(o.a)()){const img=new e.Image;img.sizes=n,img.srcset=t,img.crossorigin=r,img.onload=c}else c()}(source,this.crossorigin,t)})).then((e=>this.onPreload(e)))}return data},watch:{sources(){this.imageSources.length||(this.imageSources=this.sources)}},mounted(){Object(r.a)(this.$el,(e=>{this.visible=!0,this.$emit("enter",e)}))},destroyed(){Object(r.b)(this.$el)},methods:{onPreload(t){this.style.backgroundImage=`url(${this.$refs.image.currentSrc})`,this.imageSources=this.preload,this.inProgress=!1,this.$emit("load"),e.requestAnimationFrame((()=>{!function(t,n){"objectFitImages"in e&&e.objectFitImages(n);"picturefill"in e&&e.picturefill({elements:t})}(this.$el,this.$refs.image)}))},getPreloadSource(){const e=function(e){return e.filter((source=>!f(source)||f(source)&&o.c))}(this.preload),t=Array.from(new Set(e.map((({type:e})=>e)))).shift(),{srcset:n,sizes:r}=e.filter((source=>source.type===t)).reduce(((e,source)=>(e.srcset.push(source.srcset),e.sizes.push(source.sizes),e)),{srcset:[],sizes:[]});return{srcset:n.join(", "),sizes:r.join(", "),type:t}}}}}).call(this,n(6))},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const r={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(e){return r[String(e)]}},127:function(e,t,n){var content=n(134);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(5).default)("32d47245",content,!0,{sourceMap:!1})},128:function(e,t,n){var content=n(136);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(5).default)("3bcf2470",content,!0,{sourceMap:!1})},131:function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n(13);const o=function(){const t=e.document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}();function c(){if(Object(r.a)())return!1;{const t=e.document.createElement("link").relList;return function(element,t){let n={};e.document&&(n=e.document.createElement(element));if(t in n)return!0;return!1}("link","imageSrcset")&&!!(t&&t.supports&&t.supports("preload"))}}function l(){return"HTMLPictureElement"in e}}).call(this,n(6))},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(19);class o{constructor(){this.map=new Map}getPromise(e,t){if(!this.map.has(e)){const n=new r.a;this.map.set(e,n.promise),t(n.resolve,n.reject)}return this.map.get(e)}}},133:function(e,t,n){"use strict";n(127)},134:function(e,t,n){var r=n(4)(!1);r.push([e.i,"picture[data-v-fb5c2d90]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-fb5c2d90]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-fb5c2d90]{filter:blur(10px);transform:scale(1.1)}",""]),e.exports=r},135:function(e,t,n){"use strict";n(128)},136:function(e,t,n){var r=n(4)(!1);r.push([e.i,".nuxt-speedkit__noscript[data-v-7b49c021]{display:block;height:inherit}",""]),e.exports=r},139:function(e,t,n){"use strict";var r=n(125).a,o=(n(133),n(2)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("picture",{style:e.style},[e._l(e.imageSources,(function(source,e){return n("source",{key:e,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),e._v(" "),n("img",{ref:"image",class:{"in-progress":e.inProgress},attrs:{loading:"lazy",alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],2)}),[],!1,null,"fb5c2d90",null);t.a=component.exports},140:function(e,t,n){"use strict";n(135);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this,t=e.$createElement;e._self._c;return e._t("default")},staticRenderFns:[]}})}),[],!1,null,"7b49c021",null);t.a=component.exports},141:function(e,t,n){var content=n(148);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(5).default)("546f0ade",content,!0,{sourceMap:!1})},145:function(e,t,n){"use strict";function r(e,t){const{media:n,breakpoint:r}=t.min,{width:o}=t.max;return{size:t,media:n,breakpoint:r,width:o,url:e}}function o(e){const t=Array.from(e).sort(((a,b)=>a.width>b.width?1:-1)),n=t.shift();return{min:n,max:t.pop()||n}}function c(e){return e.sort(((a,b)=>a.width<b.width?1:-1))}var l=n(126),m=n(9),d=n(139),h=n(140);function f(){f=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,o){var c=new RegExp(e,r);return t.set(c,o||t.get(e)),x(c,n.prototype)}function r(e,n){var g=t.get(n);return Object.keys(g).reduce((function(t,n){return t[n]=e[g[n]],t}),Object.create(null))}return v(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=r(n,this)),n},n.prototype[Symbol.replace]=function(n,o){if("string"==typeof o){var c=t.get(this);return e[Symbol.replace].call(this,n,o.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+c[t]})))}if("function"==typeof o){var l=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(r(e,l)),o.apply(this,e)}))}return e[Symbol.replace].call(this,n,o)},f.apply(this,arguments)}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,p){return(x=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e})(e,p)}var _={components:{CustomPicture:d.a,CustomNoScript:h.a},props:{sources:{type:Array,default:()=>[]},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{placeholders:[],resolvedSources:this.getSources()}},async fetch(){this.placeholders=await this.fetchMeta()},head:()=>({noscript:[Object(m.c)(".nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}),computed:{hasSlot(){return this.$slots.caption}},watch:{async sources(){this.placeholders=await this.fetchMeta()}},methods:{async fetchMeta(){return e=this.sources,t=({src:e,sizes:t})=>Promise.all([this.$img(e,{width:30}),this.$img.sizes(e,t)]),Promise.all(e.map((async source=>{const[{url:e},n]=await t(source);return r(e,o(n))}))).then(c);var e,t},getSources(){return(e=this.sources,Array.from(new Set(["webp"].concat(e.map((source=>function(e){const t=e.match(f(/\.(png|jpe?g)/i,{ext:1}));return t&&t.groups.ext}(source.src)||"jpg"))).map((e=>"jpeg"===e?"jpg":e))))).map((e=>this.sources.map((source=>[source])).map((([{src:t,sizes:n}],r)=>{const o=this.$img.sizes(t,n,{format:e}),c=o.sort(((a,b)=>a.width>b.width?-1:1));return{media:r<this.sources.length-1&&`(min-width: ${o[o.length-1].width}px)`,srcset:c.map((({width:e,url:t})=>e?`${t} ${e}w`:t)).join(", "),sizes:c.map((({width:e,media:t})=>t?`${t} ${e}px`:`${e}px`)).join(", "),type:Object(l.a)(o[0].format)}})))).flat();var e}}},y=(n(147),n(2)),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{staticClass:"nuxt-speedkit__experimental__speedkit-picture"},[n("custom-no-script",[n("custom-picture",{attrs:{sources:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],1),e._v(" "),n("custom-picture",e._g({attrs:{sources:e.placeholders,preload:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}},e.$listeners)),e._v(" "),e.hasSlot?n("figcaption",[e._t("caption")],2):e._e()],1)}),[],!1,null,"386e2f9d",null);t.a=component.exports},147:function(e,t,n){"use strict";n(141)},148:function(e,t,n){var r=n(4)(!1);r.push([e.i,".nuxt-speedkit__experimental__speedkit-picture[data-v-386e2f9d]{width:100%;height:inherit;margin:0}",""]),e.exports=r},149:function(e,t,n){var content=n(166);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(5).default)("e7d5ea6e",content,!0,{sourceMap:!1})},165:function(e,t,n){"use strict";n(149)},166:function(e,t,n){var r=n(4)(!1);r.push([e.i,".component-stage[data-v-19b3fba1]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-19b3fba1]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-19b3fba1]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-19b3fba1]{font-size:40px;line-height:80px}}.component-stage h1[data-v-19b3fba1]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-19b3fba1]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}",""]),e.exports=r},174:function(e,t,n){var content=n(185);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(5).default)("8efc1b38",content,!0,{sourceMap:!1})},183:function(e,t,n){"use strict";n.r(t);var r={components:{SpeedkitPicture:n(145).a},props:{picture:{type:Object,default:()=>({})},headline:{type:String,default:()=>"Headline"},claim:{type:String,default:()=>"Claim"}}},o=(n(165),n(2)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-stage"},[e.picture?n("speedkit-picture",e._b({},"speedkit-picture",e.picture,!1)):e._e(),e._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),e.$getFont("Merriweather",300,"italic",{selector:".claim"})],expression:"[\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $getFont('Merriweather', 300, 'italic', {selector: '.claim'})\n    ]"}]},[n("span",{staticClass:"headline"},[e._v(e._s(e.headline))]),e._v(" "),n("span",{staticClass:"claim"},[e._v(e._s(e.claim))])])],1)}),[],!1,null,"19b3fba1",null);t.default=component.exports},184:function(e,t,n){"use strict";n(174)},185:function(e,t,n){var r=n(4)(!1);r.push([e.i,".page-experimentel-index[data-v-5c1fb0ca]{padding:0 0 1.5625em}.page-experimentel-index>*[data-v-5c1fb0ca]{margin:1.5625em 0}.page-experimentel-index[data-v-5c1fb0ca]>:first-child{margin-top:0}",""]),e.exports=r},296:function(e,t,n){"use strict";n.r(t);var r={asyncData:()=>({contentA:"<p>This is a basic test with single font variant.</p>",stage:{critical:!0,headline:"nuxt-speedkit",claim:"powered by Grabarz & Partner",picture:{sources:[{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/landscape.jpg",sizes:"1024:1024,1280:1280,1680:1680,1920:1920"},{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/portrait.jpg",sizes:"768:768"},{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/landscape.jpg",sizes:"576:576"},{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/portrait.jpg",sizes:"414"}]}},youtubePlayer:{id:"cLKvbhfVBUU"},textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-2/jpg/1920.jpg",sizes:"576:576,768:768,1024:1024,1200:1280,1600:1680,1900:1920"},{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-2/jpg/1920.jpg",sizes:"414"}]}},imageTextB:{alignRight:!0,text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-3/jpg/1920.jpg",sizes:"576:576,768:768,1024:1024,1200:1280,1600:1680,1900:1920"},{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-3/jpg/1920.jpg",sizes:"414"}]}},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"}}),speedkitComponents:{ComponentStage:()=>Promise.resolve().then(n.bind(null,183)),ComponentTextA:()=>n.e(1).then(n.bind(null,299)),ComponentTextImage:()=>n.e(18).then(n.bind(null,300)),ComponentTextB:()=>n.e(2).then(n.bind(null,301)),ComponentSpeedkitYoutube:()=>Promise.all([n.e(0),n.e(20)]).then(n.bind(null,172))}},o=(n(184),n(2)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-experimentel-index"},[n("component-stage",e._b({},"component-stage",e.stage,!1)),e._v(" "),n("component-text-a",e._b({},"component-text-a",e.textA,!1)),e._v(" "),n("component-text-image",e._b({},"component-text-image",e.imageTextA,!1)),e._v(" "),n("ComponentSpeedkitYoutube",e._b({},"ComponentSpeedkitYoutube",e.youtubePlayer,!1)),e._v(" "),n("component-text-a",e._b({},"component-text-a",e.textA,!1)),e._v(" "),n("component-text-image",e._b({},"component-text-image",e.imageTextB,!1)),e._v(" "),n("component-text-b",e._b({},"component-text-b",e.textB,!1))],1)}),[],!1,null,"5c1fb0ca",null);t.default=component.exports}}]);