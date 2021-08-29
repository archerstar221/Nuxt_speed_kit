__NUXT_JSONP__("/directives/v-font", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn){return {data:[{document:{slug:q,description:"",title:q,position:"002000200000",category:"Directives",solutions:["don't use WebFonts that have to be loaded","use another optimized font","reduce the number of used fonts","embed the fonts via Base64"],toc:[{id:as,depth:M,text:at},{id:ab,depth:M,text:X},{id:au,depth:M,text:B},{id:N,depth:O,text:N},{id:av,depth:M,text:aw},{id:ax,depth:O,text:ay},{id:az,depth:O,text:aA},{id:aB,depth:M,text:aC},{id:aD,depth:O,text:aE},{id:aF,depth:O,text:aG}],body:{type:"root",children:[{type:b,tag:m,props:{className:[P,Q]},children:[{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Fonts are the great mystery on the Internet. For more complex designs it is not uncommon that more than 6 font files have to be loaded. It would be desirable if there were many more variable fonts, but the reality is usually different. Often, developers are forced to register tens of fonts with different font styles. So it can happen that the website needs a total of 12 font files, which have to be loaded initially to achieve the right visual result on the whole page."}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"This is really a performance problem. If you look for solutions, you like to hear"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:"list",props:{":items":"solutions",type:aH},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:m,props:{className:[P,Q]},children:[{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"In the internet you can find some articles about font loading. But most of them are more than 3 years old. So not much new has happened on that front. A nice and recommendable list of different strategies can be found at "},{type:b,tag:r,props:{href:"https:\u002F\u002Fgithub.com\u002Fzachleat\u002Fweb-font-loading-recipes",rel:[ac,ad,ae],target:af},children:[{type:a,value:"web-font-loading-recipes"}]},{type:a,value:" or\n"},{type:b,tag:r,props:{href:"https:\u002F\u002Fwww.zachleat.com\u002Fweb\u002Fcomprehensive-webfonts\u002F",rel:[ac,ad,ae],target:af},children:[{type:a,value:"comprehensive-webfonts"}]},{type:a,value:". From this it can be deduced that there is still no universal solution to the problem. However, it is possible to approach the issue very efficiently by using a preload strategy and setting classes accordingly. However, this does not make the handling of the fonts any easier. On the one hand, the preloads have to be defined per page and on the other hand, the CSS in the respective component has to be activated with the corresponding font declaration per class on demand. This is manageable for smaller projects in a 1 person team. But if several people are working in parallel, it can quickly become a horror trip. This will inevitably lead to the fact that the approach will not be accepted by the team in the long run and the optimization will be optimized out of the project in the long run."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ag,props:{type:aH},children:[{type:a,value:"\nA few words about Google Fonts: If possible, the FontFaces should always be included directly as Woff\u002FWoff2 files via inline style. The loading mechanism via external CSS file, as it is the case with Google Fonts, creates an additional network roundtrip, which delays the loading of the actual font files.\n"}]},{type:a,value:f},{type:b,tag:m,props:{className:[P,Q]},children:[{type:a,value:f},{type:b,tag:R,props:{id:as},children:[{type:b,tag:r,props:{href:"#solution"},children:[{type:a,value:at}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"The strategy mentioned above makes sense, but is hardly implementable with the current tools. For this reason, we are introducing Directive "},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:", which takes care of the outlined behavior in a fully automated way and thus represents a truly relevant solution even on larger projects."}]},{type:a,value:f},{type:b,tag:R,props:{id:ab},children:[{type:b,tag:r,props:{href:"#usage"},children:[{type:a,value:X}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"The directive "},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:" is used to integrate the fonts defined in the "},{type:b,tag:A,props:{to:"\u002Foptions#fonts"},children:[{type:a,value:"module options"}]},{type:a,value:" into the website."}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"To do this, the respective font must be retrieved via the "},{type:b,tag:g,props:{},children:[{type:a,value:B}]},{type:a,value:" method contained in the component scope (e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"this"}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Fonts are specified by "},{type:b,tag:g,props:{},children:[{type:a,value:aI}]},{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:aJ}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:aK}]},{type:a,value:" and can be limited to elements and viewports via the options ("},{type:b,tag:g,props:{},children:[{type:a,value:ai}]},{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:aj}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Normally the directive activates the fonts only when the viewport is reached.\nIt is recommended to use the property "},{type:b,tag:g,props:{},children:[{type:a,value:"critical"}]},{type:a,value:" for components that are already initially contained in the viewport."}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"With critical component the fonts are preloaded and are initially active.\nMore information on critical components can be found "},{type:b,tag:A,props:{to:"\u002Fusage#critical-prop-for-critical-components"},children:[{type:a,value:aL}]},{type:a,value:aM}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"For multiple fonts, a list ("},{type:b,tag:g,props:{},children:[{type:a,value:"Array"}]},{type:a,value:") can be passed."}]},{type:a,value:f},{type:b,tag:m,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,I]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u003C!-- single definition --\u003E"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aN}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u003C!-- multiple definitions --\u003E"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aN}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"[\n  $getFont(…),\n  $getFont(…)\n]"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ag,props:{type:aP},children:[{type:a,value:"\nCurrently the use of \n"},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:"\n on components or in combination with \n"},{type:b,tag:g,props:{},children:[{type:a,value:"v-html\u002Fv-text"}]},{type:a,value:"\n directives is not possible. Caused is a bug in the Vue SSR, directive is not applied.\n"},{type:b,tag:T,props:{},children:[]},{type:a,value:f},{type:b,tag:T,props:{},children:[]},{type:a,value:"\nRead more in the Issue: \n"},{type:b,tag:r,props:{href:"https:\u002F\u002Fgithub.com\u002Fvuejs\u002Fvue\u002Fissues\u002F10733",rel:[ac,ad,ae],target:af},children:[{type:a,value:"vue-server-renderer: directive not applied to imported component"}]},{type:a,value:"\n.\n"},{type:b,tag:T,props:{},children:[]},{type:a,value:f},{type:b,tag:T,props:{},children:[]},{type:a,value:"\nAs long as this error exists, you can look \n"},{type:b,tag:A,props:{to:"\u002Fdirectives\u002Fv-font#workarounds"},children:[{type:b,tag:U,props:{},children:[{type:a,value:aL}]}]},{type:a,value:"\n for workarounds.\n\n"}]},{type:a,value:f},{type:b,tag:m,props:{className:[P,Q]},children:[{type:a,value:f},{type:b,tag:R,props:{id:au},children:[{type:b,tag:r,props:{href:"#getfont"},children:[{type:b,tag:g,props:{},children:[{type:a,value:B}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:B}]},{type:a,value:" is included as a plugin and can be accessed via any component scope."}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Is used in the "},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:" directive and creates the relevant font definition."}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:aQ,props:{},children:[{type:b,tag:aR,props:{},children:[{type:b,tag:F,props:{},children:[{type:b,tag:y,props:{},children:[{type:a,value:aS}]},{type:b,tag:y,props:{},children:[{type:a,value:aT}]},{type:b,tag:y,props:{},children:[{type:a,value:aU}]},{type:b,tag:y,props:{},children:[{type:a,value:aV}]},{type:b,tag:y,props:{},children:[{type:a,value:aW}]}]}]},{type:b,tag:aX,props:{},children:[{type:b,tag:F,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aI}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:V}]}]},{type:b,tag:j,props:{},children:[{type:a,value:"yes"}]},{type:b,tag:j,props:{},children:[{type:a,value:"Font-Family e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"Custom Font"}]}]},{type:b,tag:j,props:{},children:[]}]},{type:b,tag:F,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aJ}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:V}]},{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:"Number"}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"Font-Style e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:ak}]},{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:"italic"}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:al}]}]}]},{type:b,tag:F,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aK}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:V}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"Font-Weight e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:al}]},{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:ak}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ak}]}]}]},{type:b,tag:F,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:N}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Object"}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"Media & Selector Options "},{type:b,tag:A,props:{to:"\u002Fdirectives\u002Fv-font#options"},children:[{type:a,value:"see more"}]}]},{type:b,tag:j,props:{},children:[]}]}]}]},{type:a,value:f},{type:b,tag:W,props:{id:N},children:[{type:b,tag:r,props:{href:"#options"},children:[{type:a,value:N}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Each definition can be modified in its behaviour via the options.\nWith the property "},{type:b,tag:g,props:{},children:[{type:a,value:ai}]},{type:a,value:", the call of the font definition can be made dependent on the viewport."},{type:b,tag:T,props:{},children:[]},{type:a,value:"\nThe property "},{type:b,tag:g,props:{},children:[{type:a,value:aj}]},{type:a,value:" can be used to limit the font to elements (e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:c}]},{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:".class"}]},{type:a,value:ah}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:aQ,props:{},children:[{type:b,tag:aR,props:{},children:[{type:b,tag:F,props:{},children:[{type:b,tag:y,props:{},children:[{type:a,value:aS}]},{type:b,tag:y,props:{},children:[{type:a,value:aT}]},{type:b,tag:y,props:{},children:[{type:a,value:aU}]},{type:b,tag:y,props:{},children:[{type:a,value:aV}]},{type:b,tag:y,props:{},children:[{type:a,value:aW}]}]}]},{type:b,tag:aX,props:{},children:[{type:b,tag:F,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ai}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:V}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"CSS Media Query e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"(min-width: 768px)"}]}]},{type:b,tag:j,props:{},children:[]}]},{type:b,tag:F,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aj}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:V}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"CSS Selector e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"element, .elm, .elm:before"}]}]},{type:b,tag:j,props:{},children:[]}]}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ag,props:{type:aP},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"link"}]},{type:a,value:"\n Tag is not supported orientation media query. e.g. \n"},{type:b,tag:g,props:{},children:[{type:a,value:"(orientation: portrait)"}]},{type:a,value:"\n.\nThis has an effect on prefetches and preloads.\n\n"}]},{type:a,value:f},{type:b,tag:m,props:{className:[P,Q]},children:[{type:a,value:f},{type:b,tag:m,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,aY]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:"\n  media"},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n  selector"},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'element, .elm, .elm:before'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:R,props:{id:av},children:[{type:b,tag:r,props:{href:"#examples"},children:[{type:a,value:aw}]}]},{type:a,value:f},{type:b,tag:W,props:{id:ax},children:[{type:b,tag:r,props:{href:"#basic-usage"},children:[{type:a,value:ay}]}]},{type:a,value:f},{type:b,tag:m,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,I]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aZ}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"$getFont("},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:a_}]},{type:a,value:"Font Family"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:a_}]},{type:a,value:", 700)"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:"Headline"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:aZ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:W,props:{id:az},children:[{type:b,tag:r,props:{href:"#advanced-usage"},children:[{type:a,value:aA}]}]},{type:a,value:f},{type:b,tag:m,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,aY]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:"\n  \n  "},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002F Font wird auf alles angewendet"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'Font Family A'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002F Font wird auf `b` und `strong` Tags angwendet"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:bb}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002F Font erscheint erst ab Viewport `\u003E768px`"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:am}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002F Font wird auf `b` und `strong` Tags angwendet und erscheint erst ab Viewport `\u003E768px`"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:am}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:R,props:{id:aB},children:[{type:b,tag:r,props:{href:"#workarounds"},children:[{type:a,value:aC}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Workarounds are used to work around a bug in the Vue SSR, read more in "},{type:b,tag:A,props:{to:"\u002Fdirectives\u002Fv-font#usage"},children:[{type:a,value:X}]},{type:a,value:aM}]},{type:a,value:f},{type:b,tag:W,props:{id:aD},children:[{type:b,tag:r,props:{href:"#use-component"},children:[{type:a,value:aE}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{style:bd},children:[{type:a,value:be}]}]}]},{type:a,value:f},{type:b,tag:m,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,I]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:A}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bf}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bg},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:bh},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{style:bi},children:[{type:a,value:bj}]}]}]},{type:a,value:f},{type:b,tag:m,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,I]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:A}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bf}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bg},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:c}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:bh},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:c}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:W,props:{id:aF},children:[{type:b,tag:r,props:{href:"#use-v-htmlv-text"},children:[{type:a,value:aG}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{style:bd},children:[{type:a,value:be}]}]}]},{type:a,value:f},{type:b,tag:m,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,I]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bk}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bl},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bm}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{style:bi},children:[{type:a,value:bj}]}]}]},{type:a,value:f},{type:b,tag:m,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,I]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bk}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,e,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bl},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bm}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f}]}]},dir:"\u002Fen\u002Fdirectives",path:"\u002Fen\u002Fdirectives\u002Fv-font",extension:".md",createdAt:bn,updatedAt:bn,to:"\u002Fdirectives\u002Fv-font",language:"en",draft:false},prev:{slug:ab,title:X,to:"\u002Fusage"},next:{slug:"speedkit-layer",title:"SpeedkitLayer",to:"\u002Fcomponents\u002Fspeedkit-layer"}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n","code","tag"," ","td","\"","\u003E","div","p","\u003C",",","v-font","a","string","attr-name","attr-value","attr-equals","=","\n  ","th","\u003C\u002F","nuxt-link","$getFont","nuxt-content-highlight","pre","line-numbers","tr","template",", ","language-html","comment","operator",":",2,"options",3,"prose","dark:prose-dark","h2","$getFont(…)","br","strong","String","h3","Usage","{","}","function","(",")","usage","nofollow","noopener","noreferrer","_blank","alert",").","media","selector","normal","400","'(min-width: 768px)'","\n\n  ","'Font Family B'","number","'normal'","\n    ","solution","Solution","getfont","examples","Examples","basic-usage","Basic Usage","advanced-usage","Advanced Usage","workarounds","Workarounds","use-component","Use component","use-v-htmlv-text","Use v-html\u002Fv-text","info","family","weight","style","here",".","node","\n\n","danger","table","thead","Key","Type","Requried","Description","Default","tbody","language-js","h1","'","700"," selector","'b, strong'"," media","color: red;","Bad","to","\u002F","Back","color: green;","Good","v-html","…","\u002F\u003E","2021-08-29T23:34:38.890Z")));