import{r as i,j as b,k as e,s as d,v as n,l as c,x as u,y as h,z as p,A as v,B as x,C as g,p as f}from"./entry.50d340e2.js";const _={class:"w-full max-w-md mx-auto p-6"},w={class:"mt-12 md:mt-24 bg-bgsecondary border border-gray-200 rounded-xl shadow-sm"},y={class:"p-4 sm:p-7"},k=e("div",{class:"text-center"},[e("h1",{class:"block text-2xl font-bold text-normal"},"Sign in"),e("p",{class:"mt-2 text-sm text-light"},[h(" Don't have an account yet? "),e("a",{class:"text-blue-600 decoration-2 hover:underline font-medium",href:"/register"}," Sign up here ")])],-1),z={class:"mt-5"},A={class:"grid gap-y-4"},B=e("label",{for:"email",class:"block text-sm mb-2"},"Email address",-1),E={class:"relative"},C=e("div",{class:"hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"},[e("svg",{class:"h-5 w-5 text-red-500",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true"},[e("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})])],-1),M=e("p",{class:"hidden text-xs text-red-600 mt-2",id:"email-error"},"Please include a valid email address so we can get back to you",-1),S=e("div",{class:"flex justify-between items-center"},[e("label",{for:"password",class:"block text-sm mb-2"},"Password")],-1),V={class:"relative"},N=e("div",{class:"hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"},[e("svg",{class:"h-5 w-5 text-red-500",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true"},[e("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})])],-1),P=e("p",{class:"hidden text-xs text-red-600 mt-2",id:"password-error"},"8+ characters required",-1),j=p('<div class="flex items-center"><div class="flex"><input id="exampleCheck1" name="remember-me" type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500"></div><div class="ml-3"><label for="remember-me" class="text-sm">Remember me</label></div></div>',1),T={__name:"login",setup(q){const a=i(""),o=i(""),s=i("error");console.log(s.value);const m=()=>{v(x(),a.value,o.value).then(t=>{console.log(t),console.log("Successfully loggedin"),g("/")}).catch(t=>{switch(console.log(t.code),t.code){case"auth/invalid-email":s.value="Invalid email",console.log(s.value);break;case"auth/user-not-found":s.value="No account with that email address";break;case"auth/wrong-password":s.value="Incorrect password";break;default:s.value="Email or password was incorrect";break}})};return(t,l)=>(f(),b("main",_,[e("div",w,[e("div",y,[k,e("div",z,[e("div",A,[e("div",null,[B,e("div",E,[d(e("input",{id:"email",name:"email",class:"py-3 px-4 block w-full border-gray-200 rounded-md text-sm border focus:border-blue-500 focus:ring-blue-500",required:"","aria-describedby":"email-error","onUpdate:modelValue":l[0]||(l[0]=r=>u(a)?a.value=r:null),type:"email",placeholder:"Enter email",autocomplete:"false"},null,512),[[n,c(a)]]),C]),M]),e("div",null,[S,e("div",V,[d(e("input",{"onUpdate:modelValue":l[1]||(l[1]=r=>u(o)?o.value=r:null),type:"password",id:"password",placeholder:"*************",class:"py-3 px-4 block w-full border-gray-200 rounded-md text-sm border focus:border-blue-500 focus:ring-blue-500",required:"","aria-describedby":"password-error"},null,512),[[n,c(o)]]),N]),P]),j,e("button",{onClick:m,type:"submit",class:"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"},"Sign in")])])])])]))}};export{T as default};