import{u as h,e as _,f as g,r as x,h as w,j as o,k as e,l as t,m as b,t as m,F as v,n as y,p as r,q as u}from"./entry.0dcd307e.js";import{u as k}from"./fetch.f6d5c469.js";const F={class:"container mx-auto mt-12 md:mt-24"},M={class:"flex flex-row gap-8 flex-wrap"},B={class:"flex-1 w-fit basis-2/3 bg-bgsecondary rounded-lg shadow-md flex flex-col overflow-hidden h-fit"},C={class:"w-full aspect-w-16 aspect-h-9"},L=["src"],N=e("div",{class:"h-16 flex flex-row"},[e("div",{class:"w-24 bg-primary"}),e("div",{class:"w-24 bg-primary",style:{"clip-path":"polygon(0 0, 0% 100%, 100% 100%)"}})],-1),S=e("i",{class:"fa-solid fa-expand px-6"},null,-1),T=[S],j={class:"flex-1 basis-96 bg-bgsecondary rounded-lg shadow-md flex flex-col gap-3 p-8"},E={class:"font-black text-3xl"},H=e("div",{class:"flex flex-row items-center gap-5 font-black text-light text-lg"},null,-1),I=["innerHTML"],R={__name:"[id]",async setup(V){let a,d;const n=h(),{data:l,error:W,pending:q,refresh:z}=([a,d]=_(()=>k("https://api.technoviumunlimited.nl/v1/games/"+n.params.id,"$NX1gtFW3Zi")),a=await a,d(),a);console.log(l);const p=g({results:{},errors:[],loading:!0}),i=x(null);w(async()=>{try{i.value="https://api.technoviumunlimited.nl/embeddedgames/"+n.params.id}catch(s){console.error(s),p.errors.push(s)}});const f=()=>{const s=document.getElementById("game");s&&s.contentWindow.postMessage("SetFullscreen","https://api.technoviumunlimited.nl/embeddedgames/"+n.params.id)};return(s,A)=>(r(),o("div",F,[e("div",M,[e("div",B,[e("div",C,[t(i)?(r(),o("iframe",{key:0,class:"w-full h-full",id:"game",src:t(i),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,L)):b("",!0)]),e("div",{class:"w-full flex justify-between items-center text-3xl"},[N,e("button",{onClick:f},T)])]),e("div",j,[e("h1",E,m(t(l).game[0].name),1),H,(r(!0),o(v,null,y(t(l).game[0].category,c=>(r(),o("div",{class:"flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base",style:u({color:c.color})},[e("div",{class:"h-2 w-2",style:u({backgroundColor:c.color})},null,4),e("div",null,m(c.name),1)],4))),256)),e("div",{class:"text-light whitespace-break-spaces",innerHTML:t(l).game[0].description},null,8,I)])])]))}};export{R as default};
