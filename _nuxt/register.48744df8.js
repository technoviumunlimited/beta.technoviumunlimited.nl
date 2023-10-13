import{r as a,j as m,k as e,s as i,v as d,l as n,x as c,y as h,E as p,B as b,C as x,p as f}from"./entry.1f11a814.js";const g={class:"w-full max-w-md mx-auto p-6"},v={class:"mt-12 md:mt-24 bg-bgsecondary border border-gray-200 rounded-xl shadow-sm"},_={class:"p-4 sm:p-7"},w=e("div",{class:"text-center"},[e("h1",{class:"block text-2xl font-bold text-normal"},"Sign up"),e("p",{class:"mt-2 text-sm text-light"},[h(" Already have an account? "),e("a",{class:"text-blue-600 decoration-2 hover:underline font-medium",href:"/register"}," Sign in here ")])],-1),y={class:"mt-5"},k={class:"grid gap-y-4"},A=e("label",{for:"email",class:"block text-sm mb-2"},"Email address",-1),z={class:"relative"},B=e("div",{class:"hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"},[e("svg",{class:"h-5 w-5 text-red-500",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true"},[e("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})])],-1),E=e("p",{class:"hidden text-xs text-red-600 mt-2",id:"email-error"},"Please include a valid email address so we can get back to you",-1),M=e("div",{class:"flex justify-between items-center"},[e("label",{for:"password",class:"block text-sm mb-2"},"Password")],-1),C={class:"relative"},P=e("div",{class:"hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"},[e("svg",{class:"h-5 w-5 text-red-500",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true"},[e("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})])],-1),S=e("p",{class:"hidden text-xs text-red-600 mt-2",id:"password-error"},"8+ characters required",-1),q={__name:"register",setup(V){const t=a(""),o=a(""),u=()=>{p(b(),t.value,o.value).then(s=>{console.log(s),console.log("Successfully registered"),x("/")}).catch(s=>{console.log(s.code),alert(s.message)})};return(s,r)=>(f(),m("main",g,[e("div",v,[e("div",_,[w,e("div",y,[e("form",null,[e("div",k,[e("div",null,[A,e("div",z,[i(e("input",{id:"email",name:"email",class:"py-3 px-4 block w-full border-gray-200 rounded-md text-sm border focus:border-blue-500 focus:ring-blue-500",required:"","aria-describedby":"email-error","onUpdate:modelValue":r[0]||(r[0]=l=>c(t)?t.value=l:null),type:"email",placeholder:"Enter email",autocomplete:"false"},null,512),[[d,n(t)]]),B]),E]),e("div",null,[M,e("div",C,[i(e("input",{"onUpdate:modelValue":r[1]||(r[1]=l=>c(o)?o.value=l:null),type:"password",id:"password",placeholder:"*************",class:"py-3 px-4 block w-full border-gray-200 rounded-md text-sm border focus:border-blue-500 focus:ring-blue-500",required:"","aria-describedby":"password-error"},null,512),[[d,n(o)]]),P]),S]),e("button",{onClick:u,type:"submit",class:"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"},"Sign in")])])])])])]))}};export{q as default};
