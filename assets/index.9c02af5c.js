var me=Object.defineProperty,ve=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var le=(d,h,m)=>h in d?me(d,h,{enumerable:!0,configurable:!0,writable:!0,value:m}):d[h]=m,se=(d,h)=>{for(var m in h||(h={}))ge.call(h,m)&&le(d,m,h[m]);if(re)for(var m of re(h))be.call(h,m)&&le(d,m,h[m]);return d},ie=(d,h)=>ve(d,ye(h));import{E as we,R as ke,c as Ce,e as Se,a as _e,g as Oe,i as je,b as Pe,d as Te,f as Ve,h as Ne,m as Re,o as Ee,p as Be,r as De,j as xe,k as K,s as Ae,l as Fe,n as Me,q as Ue,t as He,u as Ie,v as ze,w as $e,x as oe,y as qe,z as Le,A as Ke,B as Ge,C as Qe,D as We,F as Ye,G as Je,H as Ze,I as Xe,K as et,S as tt,J as at,T as ot,L as nt,M as rt,N as lt,O as st,P as it,Q as ce,U as $,V as Y,W as J,X as ue,Y as ct,Z as ut,_ as dt,$ as pt,a0 as ft,a1 as G,a2 as p,a3 as ht,a4 as de,a5 as mt,a6 as vt,a7 as yt,a8 as gt,a9 as bt,aa as wt,ab as kt,ac as Ct,ad as St,ae as _t,af as Ot,ag as jt,ah as Pt,ai as Tt,aj as Vt,ak as Nt,al as Rt,am as Et,an as Bt,ao as Dt,ap as xt,aq as At,ar as Ft,as as pe,at as Mt,au as Ut,av as Ht,aw as It,ax as zt,ay as F,az as $t,aA as qt,aB as Lt,aC as Kt,aD as Gt,aE as Qt,aF as Wt,aG as T,aH as Yt,aI as Jt,aJ as Zt,aK as Xt,aL as ea,aM as ta,aN as aa,aO as oa,aP as na,aQ as ra,aR as la,aS as sa,aT as ia,aU as ca,aV as ua,aW as da,aX as pa,aY as fa,aZ as ha,a_ as ma,a$ as va,b0 as ya,b1 as v,b2 as ga,b3 as ba,b4 as wa,b5 as ka,b6 as Ca,b7 as Sa,b8 as _a,b9 as Oa,ba as ja,bb as Pa,bc as Ta,bd as Va,be as Na,bf as Ra,bg as Ea,bh as Ba,bi as Da,bj as xa,bk as Aa,bl as Fa,bm as Ma,bn as Ua,bo as Ha,bp as Ia}from"./index.f71168aa.js";const za=()=>{};var $a=Object.freeze(Object.defineProperty({__proto__:null,compile:za,EffectScope:we,ReactiveEffect:ke,customRef:Ce,effect:Se,effectScope:_e,getCurrentScope:Oe,isProxy:je,isReactive:Pe,isReadonly:Te,isRef:Ve,isShallow:Ne,markRaw:Re,onScopeDispose:Ee,proxyRefs:Be,reactive:De,readonly:xe,ref:K,shallowReactive:Ae,shallowReadonly:Fe,shallowRef:Me,stop:Ue,toRaw:He,toRef:Ie,toRefs:ze,triggerRef:$e,unref:oe,camelize:qe,capitalize:Le,normalizeClass:Ke,normalizeProps:Ge,normalizeStyle:Qe,toDisplayString:We,toHandlerKey:Ye,BaseTransition:Je,Comment:Ze,Fragment:Xe,KeepAlive:et,Static:tt,Suspense:at,Teleport:ot,Text:nt,callWithAsyncErrorHandling:rt,callWithErrorHandling:lt,cloneVNode:st,compatUtils:it,computed:ce,createBlock:$,createCommentVNode:Y,createElementBlock:J,createElementVNode:ue,createHydrationRenderer:ct,createPropsRestProxy:ut,createRenderer:dt,createSlots:pt,createStaticVNode:ft,createTextVNode:G,createVNode:p,defineAsyncComponent:ht,defineComponent:de,defineEmits:mt,defineExpose:vt,defineProps:yt,get devtools(){return gt},getCurrentInstance:bt,getTransitionRawChildren:wt,guardReactiveProps:kt,h:Ct,handleError:St,initCustomFormatter:_t,inject:Ot,isMemoSame:jt,isRuntimeOnly:Pt,isVNode:Tt,mergeDefaults:Vt,mergeProps:Nt,nextTick:Rt,onActivated:Et,onBeforeMount:Bt,onBeforeUnmount:Dt,onBeforeUpdate:xt,onDeactivated:At,onErrorCaptured:Ft,onMounted:pe,onRenderTracked:Mt,onRenderTriggered:Ut,onServerPrefetch:Ht,onUnmounted:It,onUpdated:zt,openBlock:F,popScopeId:$t,provide:qt,pushScopeId:Lt,queuePostFlushCb:Kt,registerRuntimeCompiler:Gt,renderList:Qt,renderSlot:Wt,resolveComponent:T,resolveDirective:Yt,resolveDynamicComponent:Jt,resolveFilter:Zt,resolveTransitionHooks:Xt,setBlockTracking:ea,setDevtoolsHook:ta,setTransitionHooks:aa,ssrContextKey:oa,ssrUtils:na,toHandlers:ra,transformVNodeArgs:la,useAttrs:sa,useSSRContext:ia,useSlots:ca,useTransitionState:ua,version:da,warn:pa,watch:fa,watchEffect:ha,watchPostEffect:ma,watchSyncEffect:va,withAsyncContext:ya,withCtx:v,withDefaults:ga,withDirectives:ba,withMemo:wa,withScopeId:ka,Transition:Ca,TransitionGroup:Sa,VueElement:_a,createApp:Oa,createSSRApp:ja,defineCustomElement:Pa,defineSSRCustomElement:Ta,hydrate:Va,initDirectivesForSSR:Na,render:Ra,useCssModule:Ea,useCssVars:Ba,vModelCheckbox:Da,vModelDynamic:xa,vModelRadio:Aa,vModelSelect:Fa,vModelText:Ma,vShow:Ua,withKeys:Ha,withModifiers:Ia},Symbol.toStringTag,{value:"Module"})),qa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function La(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}function Ka(d){if(d.__esModule)return d;var h=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(d).forEach(function(m){var M=Object.getOwnPropertyDescriptor(d,m);Object.defineProperty(h,m,M.get?M:{enumerable:!0,get:function(){return d[m]}})}),h}var fe={exports:{}},Ga=Ka($a);(function(d,h){(function(m,M){d.exports=M(Ga)})(qa,function(m){return function(){var M={789:function(o){o.exports=m}},U={};function b(o){var c=U[o];if(c!==void 0)return c.exports;var V=U[o]={exports:{}};return M[o](V,V.exports,b),V.exports}b.d=function(o,c){for(var V in c)b.o(c,V)&&!b.o(o,V)&&Object.defineProperty(o,V,{enumerable:!0,get:c[V]})},b.o=function(o,c){return Object.prototype.hasOwnProperty.call(o,c)},b.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var B={};return function(){b.r(B),b.d(B,{default:function(){return ae}});var o=b(789);function c(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function V(e,a){if(e){if(typeof e=="string")return c(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,a):void 0}}function Q(e,a){return function(t){if(Array.isArray(t))return t}(e)||function(t,n){var s=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var k,g,_=[],C=!0,r=!1;try{for(s=s.call(t);!(C=(k=s.next()).done)&&(_.push(k.value),!n||_.length!==n);C=!0);}catch(l){r=!0,g=l}finally{try{C||s.return==null||s.return()}finally{if(r)throw g}}return _}}(e,a)||V(e,a)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Z(e){return function(a){if(Array.isArray(a))return c(a)}(e)||function(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}(e)||V(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function w(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var u=(0,o.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,a=this.onClick;return(0,o.createVNode)("span",{class:"vjs-tree__brackets",onClick:a},[e])}}),R=(0,o.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,a){var t=a.emit;return{uiType:(0,o.computed)(function(){return e.isMultiple?"checkbox":"radio"}),model:(0,o.computed)({get:function(){return e.checked},set:function(n){return t("update:modelValue",n)}})}},render:function(){var e=this.uiType,a=this.model,t=this.$emit;return(0,o.createVNode)("label",{class:["vjs-check-controller",a?"is-checked":""],onClick:function(n){return n.stopPropagation()}},[(0,o.createVNode)("span",{class:"vjs-check-controller__inner is-".concat(e)},null),(0,o.createVNode)("input",{checked:a,class:"vjs-check-controller__original is-".concat(e),type:e,onChange:function(){return t("change",a)}},null)])}});function D(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,n)}return t}function I(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?D(Object(t),!0).forEach(function(n){w(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function q(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function E(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"root",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=arguments.length>3?arguments[3]:void 0,s=n||{},k=s.key,g=s.index,_=s.type,C=_===void 0?"content":_,r=s.showComma,l=r!==void 0&&r,i=s.length,f=i===void 0?1:i,y=q(e);if(y==="array"){var O=e.map(function(S,P,A){return E(S,"".concat(a,"[").concat(P,"]"),t+1,{index:P,showComma:P!==A.length-1,length:f,type:C})}).reduce(function(S,P){return S.concat(P)},[]);return[E("[",a,t,{showComma:!1,key:k,length:e.length,type:"arrayStart"})[0]].concat(O,E("]",a,t,{showComma:l,length:e.length,type:"arrayEnd"})[0])}if(y==="object"){var N=Object.keys(e),H=N.map(function(S,P,A){return E(e[S],S.includes(".")?"".concat(a,'["').concat(S,'"]'):"".concat(a,".").concat(S),t+1,{key:S,showComma:P!==A.length-1,length:f,type:C})}).reduce(function(S,P){return S.concat(P)},[]);return[E("{",a,t,{showComma:!1,key:k,index:g,length:N.length,type:"objectStart"})[0]].concat(H,E("}",a,t,{showComma:l,length:N.length,type:"objectEnd"})[0])}var L=Object.entries({content:e,level:t,key:k,index:g,path:a,showComma:l,length:f,type:C}).reduce(function(S,P){var A=Q(P,2),he=A[0],ne=A[1];return ne!==void 0?I(I({},S),{},w({},he,ne)):S},{});return[L]}function z(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,n)}return t}function x(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?z(Object(t),!0).forEach(function(n){w(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var X={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},customValueFormatter:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},pathSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0}},ee=(0,o.defineComponent)({name:"TreeNode",props:x(x({},X),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,onTreeNodeClick:{type:Function},onBracketsClick:{type:Function},onSelectedChange:{type:Function}}),setup:function(e,a){var t=a.emit,n=(0,o.computed)(function(){return q(e.node.content)}),s=(0,o.computed)(function(){return"vjs-value vjs-value__".concat(n.value)}),k=(0,o.computed)(function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key}),g=(0,o.computed)(function(){return e.selectableType==="multiple"}),_=(0,o.computed)(function(){return e.selectableType==="single"}),C=(0,o.computed)(function(){return e.pathSelectable(e.node.path,e.node.content)&&(g.value||_.value)}),r=function(i){var f=i+"";return n.value==="string"&&(f='"'.concat(f,'"')),f},l=e.customValueFormatter?function(i){var f;return(f=e.customValueFormatter)===null||f===void 0?void 0:f.call(e,i,e.node.key,e.node.path,r(i))}:null;return{state:(0,o.reactive)({valueClass:s,prettyKey:k,isMultiple:g,selectable:C}),defaultFormatter:r,customFormatter:l,onBracketsClickHandler:function(){e.collapsedOnClickBrackets&&t("brackets-click",!e.collapsed,e.node.path)},onCheckedChange:function(){t("selected-change",e.node)},onNodeClick:function(){t("tree-node-click",e.node),C.value&&e.selectOnClickNode&&t("selected-change",e.node)}}},render:function(){var e=this.state,a=this.node,t=this.showSelectController,n=this.highlightSelectedNode,s=this.checked,k=this.showLength,g=this.collapsed,_=this.showLine,C=this.defaultFormatter,r=this.customFormatter,l=this.onNodeClick,i=this.onCheckedChange,f=this.onBracketsClickHandler;return(0,o.createVNode)("div",{class:{"vjs-tree__node":!0,"has-selector":t,"is-highlight":n&&s},onClick:l},[t&&e.selectable&&a.type!=="objectEnd"&&a.type!=="arrayEnd"&&(0,o.createVNode)(R,{isMultiple:e.isMultiple,checked:s,onChange:i},null),Array.from(Array(a.level)).map(function(y,O){return(0,o.createVNode)("div",{key:O,class:{"vjs-tree__indent":!0,"has-line":_}},null)}),a.key&&(0,o.createVNode)("span",{class:"vjs-key"},["".concat(e.prettyKey,": ")]),(0,o.createVNode)("span",null,[a.type!=="content"?(0,o.createVNode)(u,{data:a.content,onClick:f},null):r?(0,o.createVNode)("span",{class:e.valueClass,innerHTML:r(a.content)},null):(0,o.createVNode)("span",{class:e.valueClass},[C(a.content)]),a.showComma&&(0,o.createVNode)("span",null,[","]),k&&g&&(0,o.createVNode)("span",{class:"vjs-comment"},[(0,o.createTextVNode)(" // "),a.length,(0,o.createTextVNode)(" items ")])])])}});function W(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,n)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?W(Object(t),!0).forEach(function(n){w(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var te=(0,o.defineComponent)({name:"Tree",props:j(j({},X),{},{data:{type:Object,default:null},deep:{type:Number,default:1/0},deepCollapseChildren:{type:Boolean,default:!1},collapsePath:{type:RegExp,default:null},path:{type:String,default:"root"},virtual:{type:Boolean,default:!1},virtualLines:{type:Number,default:10},itemHeight:{type:Number,default:20},modelValue:{type:[String,Array],default:function(){return""}}}),emits:["click","change","update:modelValue"],setup:function(e,a){var t=a.emit,n=(0,o.ref)(),s=(0,o.reactive)({translateY:0,visibleData:null,hiddenPaths:E(e.data,e.path).reduce(function(r,l){var i=e.deepCollapseChildren?l.level>=e.deep:l.level===e.deep,f=i||e.collapsePath&&e.collapsePath.test(l.path);return l.type!=="objectStart"&&l.type!=="arrayStart"||!i&&!f?r:j(j({},r),{},w({},l.path,1))},{})}),k=(0,o.computed)(function(){var r=null;return E(e.data,e.path).reduce(function(l,i,f){var y=j(j({},i),{},{id:f}),O=s.hiddenPaths[y.path];if(r&&r.path===y.path){var N=r.type==="objectStart",H=j(j(j({},r),y),{},{content:N?"{...}":"[...]",type:N?"objectCollapsed":"arrayCollapsed"});return r=null,l.concat(H)}return O&&!r?(r=y,l):r?l:l.concat(y)},[])}),g=(0,o.computed)(function(){var r=e.modelValue;return r&&e.selectableType==="multiple"&&Array.isArray(r)?r:[r]}),_=(0,o.computed)(function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}),C=function(r){if(e.virtual){var l=n.value,i=e.virtualLines,f=l&&l.scrollTop||0,y=Math.floor(f/e.itemHeight),O=y<0?0:y+i>r.length?r.length-i:y;O<0&&(O=0);var N=O+i;s.translateY=O*e.itemHeight,s.visibleData=r.filter(function(H,L){return L>=O&&L<N})}else s.visibleData=r};return(0,o.watchEffect)(function(){_.value&&function(r){throw new Error("[VueJSONPretty] ".concat(r))}(_.value)}),(0,o.watchEffect)(function(){k.value&&C(k.value)}),{tree:n,state:s,flatData:k,selectedPaths:g,onTreeScroll:function(){C(k.value)},onSelectedChange:function(r){var l=r.path,i=e.selectableType;if(i==="multiple"){var f=g.value.findIndex(function(H){return H===l}),y=Z(g.value);f!==-1?y.splice(f,1):y.push(l),t("update:modelValue",y),t("change",y,Z(g.value))}else if(i==="single"&&g.value[0]!==l){var O=Q(g.value,1)[0],N=l;t("update:modelValue",N),t("change",N,O)}},onTreeNodeClick:function(r){var l=r.content,i=r.path;t("click",i,l)},onBracketsClick:function(r,l){if(r)s.hiddenPaths=j(j({},s.hiddenPaths),{},w({},l,1));else{var i=j({},s.hiddenPaths);delete i[l],s.hiddenPaths=i}}}},render:function(){var e=this.virtual,a=this.itemHeight,t=this.customValueFormatter,n=this.showDoubleQuotes,s=this.showLength,k=this.showLine,g=this.showSelectController,_=this.selectOnClickNode,C=this.pathSelectable,r=this.highlightSelectedNode,l=this.collapsedOnClickBrackets,i=this.state,f=this.flatData,y=this.selectedPaths,O=this.selectableType,N=this.onTreeNodeClick,H=this.onBracketsClick,L=this.onSelectedChange,S=this.onTreeScroll,P=i.visibleData&&i.visibleData.map(function(A){return(0,o.createVNode)(ee,{key:A.id,node:A,collapsed:!!i.hiddenPaths[A.path],"custom-value-formatter":t,"show-double-quotes":n,"show-length":s,"collapsed-on-click-brackets":l,checked:y.includes(A.path),"selectable-type":O,"show-line":k,"show-select-controller":g,"select-on-click-node":_,"path-selectable":C,"highlight-selected-node":r,onTreeNodeClick:N,onBracketsClick:H,onSelectedChange:L},null)});return(0,o.createVNode)("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e},onScroll:S},[e?(0,o.createVNode)("div",{style:{height:"".concat(f.length*a,"px")}},[(0,o.createVNode)("div",{style:{transform:"translateY(".concat(i.translateY,"px)")}},[P])]):P])}}),ae=(0,o.defineComponent)(te)}(),B}()})})(fe);var Qa=La(fe.exports);const Wa={name:"DataTree",props:{data:{type:Object,default:()=>null}},setup(d){return(h,m)=>(F(),J("div",null,[p(oe(Qa),{class:"json-container","deep-collapse-children":!0,deep:3,path:"res",data:d.data,onClick:h.handleClick},null,8,["data","onClick"])]))}};const Ya={class:"outer-container"},Ja={class:"request-body-form"},Za={key:1},Xa=G(" Auth Token "),eo=G(" figma\u6388\u6743 "),to=G("\u83B7\u53D6\u6570\u636E"),ao=G("\u91CD\u65B0\u6388\u6743"),oo=G("\u5982\u4F55\u83B7\u53D6"),no=["src"],so=de({name:"index",setup(d){const h=w=>Object.keys(w).map(u=>`${encodeURIComponent(u)}=${encodeURIComponent(w[u])}`).join("&"),m="https://pengyyyyy.github.io/figma-api-live/#/figma",M=K(),U=K(!1),b=K(localStorage.getItem("figmaAuthToken"));pe(async()=>{const w=window.location.search.substring(1).split("&"),u=Object.create(null);for(let R=0;R<w.length;R++){const D=w[R].split("=");D[0]&&(u[D[0]]=D[1]?D[1]:"")}if(u.code&&!b.value){const{state:R,code:D}=u;if(localStorage.getItem("figmaAuthState")!==R)return;U.value=!0;const q=await fetch(`https://service-kyuf6ars-1257200260.gz.apigw.tencentcs.com/release/figma/auth?${h({code:D,redirectUri:m})}`);U.value=!1;const E=await q.json();b.value=E.data.access_token,localStorage.setItem("figmaAuthToken",b.value)}});const B=K(1),o=ce(()=>({token:[{required:B.value!==1,message:"\u8BF7\u8F93\u5165AccessToken"}],fileUrl:[{required:!0,message:"\u8BF7\u8F93\u5165fileUrl"}],ids:[{required:!0,message:"\u8BF7\u8F93\u5165"}]})),c=K({token:"",fileUrl:"",depth:0,havePath:!1,isNodes:!1,ids:""}),V=async({validateResult:w})=>{if(w!==!0)return;U.value=!0;const R=await(await fetch(`https://service-kyuf6ars-1257200260.gz.apigw.tencentcs.com/release/figma/file?${h(ie(se({},c.value),{authToken:b.value,type:B.value===1?"authToken":"personalToken"}))}`)).json();U.value=!1,M.value=R.data},Q=(w="")=>{w==="reAuth"&&(localStorage.removeItem("figmaAuthToken"),b.value="");const u=`${Date.now()}`;localStorage.setItem("figmaAuthState",u),window.location.href=`https://www.figma.com/oauth?client_id=Hn8ZQBrB9AOZaGqPTRZ1w9&redirect_uri=${encodeURIComponent(m)}&scope=file_read&state=${u}&response_type=code`},Z=()=>{window.open("https://www.figma.com/developers/api#access-tokens")};return(w,u)=>{const R=T("t-tab-panel"),D=T("t-tabs"),I=T("t-input"),q=T("t-tag"),E=T("t-tooltip"),z=T("t-button"),x=T("t-form-item"),X=T("t-input-number"),ee=T("t-switch"),W=T("t-col"),j=T("t-row"),te=T("t-form"),ae=T("t-loading");return F(),J("div",Ya,[ue("div",Ja,[p(D,{modelValue:B.value,"onUpdate:modelValue":u[0]||(u[0]=e=>B.value=e)},{default:v(()=>[p(R,{value:1,label:"Auth"}),p(R,{value:2,label:"AccessToken"})]),_:1},8,["modelValue"]),p(te,{ref:"form",class:"panel-inner",data:c.value,rules:oe(o),"label-width":"90px",colon:!0,onSubmit:V},{default:v(()=>{var e,a;return[p(x,{label:"Token",name:"token"},{default:v(()=>[B.value===2?(F(),$(I,{key:0,modelValue:c.value.token,"onUpdate:modelValue":u[1]||(u[1]=t=>c.value.token=t),placeholder:"\u8BF7\u8F93\u5165 Access Tokens"},null,8,["modelValue"])):(F(),J("span",Za,[b.value?(F(),$(E,{key:0,content:b.value,placement:"right","overlay-style":{width:"250px"},"show-arrow":""},{default:v(()=>[p(q,{theme:"primary",variant:"light"},{default:v(()=>[Xa]),_:1})]),_:1},8,["content"])):(F(),$(z,{key:1,theme:"primary",type:"button",loading:U.value,onClick:Q},{default:v(()=>[eo]),_:1},8,["loading"]))]))]),_:1}),p(x,{label:"\u6587\u4EF6\u94FE\u63A5",name:"fileUrl"},{default:v(()=>[p(I,{modelValue:c.value.fileUrl,"onUpdate:modelValue":u[2]||(u[2]=t=>c.value.fileUrl=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),p(x,{label:"\u6570\u636E\u5C42\u7EA7",name:"depth"},{default:v(()=>[p(X,{modelValue:c.value.depth,"onUpdate:modelValue":u[3]||(u[3]=t=>c.value.depth=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),p(x,{"label-width":0},{default:v(()=>[p(j,{gutter:16,style:{width:"100%"}},{default:v(()=>[p(W,{span:6},{default:v(()=>[p(x,{label:"\u83B7\u53D6path",name:"havePath"},{default:v(()=>[p(ee,{modelValue:c.value.havePath,"onUpdate:modelValue":u[4]||(u[4]=t=>c.value.havePath=t),size:"large",label:["\u5F00","\u5173"]},null,8,["modelValue"])]),_:1})]),_:1}),p(W,{span:6},{default:v(()=>[p(x,{label:"\u53EA\u83B7\u53D6\u8282\u70B9",name:"isNodes"},{default:v(()=>[p(ee,{modelValue:c.value.isNodes,"onUpdate:modelValue":u[5]||(u[5]=t=>c.value.isNodes=t),size:"large",label:["\u5F00","\u5173"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),c.value.isNodes?(F(),$(x,{key:0,label:"\u8FC7\u6EE4\u8282\u70B9",name:"ids"},{default:v(()=>[p(I,{modelValue:c.value.ids,"onUpdate:modelValue":u[6]||(u[6]=t=>c.value.ids=t),placeholder:"\u59820:3,0:1"},null,8,["modelValue"])]),_:1})):Y("",!0),p(x,{style:{"padding-top":"8px"}},{default:v(()=>[p(z,{theme:"primary",type:"submit"},{default:v(()=>[to]),_:1}),B.value===1?(F(),$(z,{key:0,theme:"warning",variant:"outline",type:"button",onClick:u[7]||(u[7]=t=>Q("reAuth"))},{default:v(()=>[ao]),_:1})):Y("",!0),B.value===2?(F(),$(z,{key:1,theme:"warning",variant:"outline",type:"button",onClick:Z},{default:v(()=>[oo]),_:1})):Y("",!0)]),_:1}),((e=c.value)==null?void 0:e.fileUrl)&&((a=M.value)==null?void 0:a.thumbnailUrl)?(F(),J("iframe",{key:1,class:"figma-preview-container",src:`https://www.figma.com/embed?embed_host=share&url=${c.value.fileUrl} `,allowfullscreen:""},null,8,no)):Y("",!0)]}),_:1},8,["data","rules"])]),p(ae,{size:"small",loading:U.value,"show-overlay":""},{default:v(()=>[p(Wa,{data:M.value},null,8,["data"])]),_:1},8,["loading"])])}}});export{so as default};
