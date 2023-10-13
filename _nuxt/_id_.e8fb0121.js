import{u as T}from"./vue.f36acd1f.a990244a.js";import{N,a5 as U,a6 as z,T as C,a7 as B,a8 as G,a9 as A,aa as V,X as H,M as _,L as Y,r as D,h as J,R as X,_ as Q,p as y,j as w,k as v,G as P,F as Z,n as K,q as E,t as $,u as ee,e as te,l as S,m as ie}from"./entry.5bf9a94f.js";import{u as se}from"./fetch.584ced26.js";async function ne(e,t){return await oe(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function oe(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>s(n),i.src=e})}function L(e){return t=>t?e[t]||t:e.missingValue}function re({formatter:e,keyMap:t,joinWith:s="/",valueMap:i}={}){e||(e=(o,r)=>`${o}=${r}`),t&&typeof t!="function"&&(t=L(t));const n=i||{};return Object.keys(n).forEach(o=>{typeof n[o]!="function"&&(n[o]=L(n[o]))}),(o={})=>Object.entries(o).filter(([a,c])=>typeof c<"u").map(([a,c])=>{const l=n[a];return typeof l=="function"&&(c=l(o[a])),a=typeof t=="function"?t(a):a,e(a,c)}).join(s)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function ae(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const s of e.split(" ")){const i=parseInt(s.replace("x",""));i&&t.add(i)}return Array.from(t)}function de(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ce(e){const t={};if(typeof e=="string")for(const s of e.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function le(e){const t={options:e},s=(n,o={})=>k(t,n,o),i=(n,o={},r={})=>s(n,{...r,modifiers:B(o,r.modifiers||{})}).url;for(const n in e.presets)i[n]=(o,r,a)=>i(o,r,{...e.presets[n],...a});return i.options=e,i.getImage=s,i.getMeta=(n,o)=>ue(t,n,o),i.getSizes=(n,o)=>he(t,n,o),t.$img=i,i}async function ue(e,t,s){const i=k(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await ne(e,i.url)}function k(e,t,s){var l,u;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=fe(e,s.provider||e.options.provider),o=ge(e,s.preset);if(t=N(t)?t:U(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=z(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&N(t)){const m=C(t).host;if(!e.options.domains.find(b=>b===m))return{url:t}}const r=B(s,o,n);r.modifiers={...r.modifiers};const a=r.modifiers.format;(l=r.modifiers)!=null&&l.width&&(r.modifiers.width=h(r.modifiers.width)),(u=r.modifiers)!=null&&u.height&&(r.modifiers.height=h(r.modifiers.height));const c=i.getImage(t,r,e);return c.format=c.format||a||"",c}function fe(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function ge(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function he(e,t,s){var g,I,j,M,W;const i=h((g=s.modifiers)==null?void 0:g.width),n=h((I=s.modifiers)==null?void 0:I.height),o=ce(s.sizes),r=(j=s.densities)!=null&&j.trim()?ae(s.densities.trim()):e.options.densities;de(r);const a=i&&n?n/i:0,c=[],l=[];if(Object.keys(o).length>=1){for(const f in o){const p=q(f,String(o[f]),n,a,e);if(p!==void 0){c.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const x of r)l.push({width:p._cWidth*x,src:O(e,t,s,p,x)})}}me(c)}else for(const f of r){const p=Object.keys(o)[0];let x=q(p,String(o[p]),n,a,e);x===void 0&&(x={size:"",screenMaxWidth:0,_cWidth:(M=s.modifiers)==null?void 0:M.width,_cHeight:(W=s.modifiers)==null?void 0:W.height}),l.push({width:f,src:O(e,t,s,x,f)})}pe(l);const u=l[l.length-1],m=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,b=m?"w":"x",d=l.map(f=>`${f.src} ${f.width}${b}`).join(", ");return{sizes:m,srcset:d,src:u==null?void 0:u.src}}function q(e,t,s,i,n){const o=n.options.screens&&n.options.screens[e]||parseInt(e),r=t.endsWith("vw");if(!r&&/^\d+$/.test(t)&&(t=t+"px"),!r&&!t.endsWith("px"))return;let a=parseInt(t);if(!o||!a)return;r&&(a=Math.round(a/100*o));const c=i?Math.round(a*i):s;return{size:t,screenMaxWidth:o,_cWidth:a,_cHeight:c}}function O(e,t,s,i,n){return e.$img(t,{...s.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},s)}function me(e){var s;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((s=e[i+1])==null?void 0:s.media)||""}function pe(e){e.sort((s,i)=>s.width-i.width);let t=null;for(let s=e.length-1;s>=0;s--){const i=e[s];i.width===t&&e.splice(s,1),t=i.width}}const ve=re({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>A(e)+"_"+A(t)}),_e=(e,{modifiers:t={},baseURL:s}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=ve(t)||"_";return s||(s=z(i.options.nuxt.baseURL,"/_ipx")),{url:z(s,n,G(e))}},ye=!0,we=!0,xe=Object.freeze(Object.defineProperty({__proto__:null,getImage:_e,supportsAlias:we,validateDomains:ye},Symbol.toStringTag,{value:"Module"})),R={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:["cdn.discordapp.com"],alias:{"/discord":"https://cdn.discordapp.com"},densities:[1,2],format:["webp"]};R.providers={ipxStatic:{provider:xe,defaults:void 0}};const F=()=>{const e=V(),t=H();return t.$img||t._img||(t._img=le({...R,nuxt:{baseURL:e.app.baseURL}}))},be={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Se=e=>{const t=_(()=>({provider:e.provider,preset:e.preset})),s=_(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=F(),n=_(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:n}},$e={...be,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ze=Y({name:"NuxtImg",props:$e,emits:["load","error"],setup:(e,t)=>{const s=F(),i=Se(e),n=D(!1),o=_(()=>s.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),r=_(()=>{const d={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(d.sizes=o.value.sizes,d.srcset=o.value.srcset),d}),a=_(()=>{let d=e.placeholder;if(d===""&&(d=!0),!d||n.value)return!1;if(typeof d=="string")return d;const g=Array.isArray(d)?d:typeof d=="number"?[d,d]:[10,10];return s(e.src,{...i.modifiers.value,width:g[0],height:g[1],quality:g[2]||50,blur:g[3]||3},i.options.value)}),c=_(()=>e.sizes?o.value.src:s(e.src,i.modifiers.value,i.options.value)),l=_(()=>a.value?a.value:c.value);if(e.preload){const d=Object.values(o.value).every(g=>g);T({link:[{rel:"preload",as:"image",nonce:e.nonce,...d?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:l.value}}]})}const u=D(),b=H().isHydrating;return J(()=>{if(a.value){const d=new Image;d.src=c.value,e.sizes&&(d.sizes=o.value.sizes||"",d.srcset=o.value.srcset),d.onload=g=>{n.value=!0,t.emit("load",g)};return}u.value&&(u.value.complete&&b&&(u.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),u.value.onload=d=>{t.emit("load",d)},u.value.onerror=d=>{t.emit("error",d)})}),()=>X("img",{ref:u,src:l.value,...r.value,...t.attrs})}}),Ie={props:{data:{type:Object,required:!0}},methods:{formatDate(e){const t=new Date(e*1e3),s=t.getDate(),i=t.toLocaleString("default",{month:"long"}),n=t.getFullYear();return`${s} ${i}, ${n}`}}},je={class:"bg-bgsecondary flex flex-col rounded-lg overflow-hidden shadow-lg"},Me={class:"w-full bg-slate-200 pb-[56.25%] lg:pb-[37.5%] aspect-w-16 aspect-h-9 lg:aspect-h-6 relative"},We={class:"flex flex-col gap-5 p-8 md:p-12"},Ne={class:"flex flex-col gap-1"},Ae={class:"text-xl md:text-3xl font-bold"},De={class:"text-light"},Ee=["innerHTML"];function Le(e,t,s,i,n,o){const r=ze;return y(),w("div",je,[v("div",Me,[P(r,{class:"w-full absolute object-cover left-0 top-0 h-full contain",src:s.data._thumb[0],loading:"lazy"},null,8,["src"])]),v("div",We,[v("div",Ne,[(y(!0),w(Z,null,K(s.data.category,a=>(y(),w("div",{class:"flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base",style:E({color:a.color})},[v("div",{class:"h-2 w-2",style:E({backgroundColor:a.color})},null,4),v("div",null,$(a.name),1)],4))),256)),v("h1",Ae,$(s.data.title),1),v("div",De,"Geplaatst op "+$(o.formatDate(s.data.date._seconds)),1)]),v("p",{class:"text-sm lg:text-base text-light whitespace-break-spaces",innerHTML:s.data.description},null,8,Ee)])])}const qe=Q(Ie,[["render",Le]]),Oe={class:"container mx-auto mt-12 md:mt-24"},Be={key:0},He={key:1},Pe={key:2},Te={__name:"[id]",async setup(e){let t,s;const i=ee(),{data:n,error:o,pending:r,refresh:a}=([t,s]=te(()=>se("https://api.technoviumunlimited.nl/v1/blogs/"+i.params.id,"$BdYxHU9nwS")),t=await t,s(),t);return(c,l)=>{const u=qe;return y(),w("div",Oe,[S(r)?(y(),w("span",Be,"Loading...")):S(n)?(y(),w("div",He,[P(u,{data:S(n).blog[0]},null,8,["data"])])):S(o)?(y(),w("span",Pe,"Error: "+$(S(o)),1)):ie("",!0)])}}};export{Te as default};
