"use strict";(self["webpackChunktechnovium_unlimited"]=self["webpackChunktechnovium_unlimited"]||[]).push([[429],{5429:function(e,a,l){l.r(a),l.d(a,{default:function(){return y}});l(7658);var o=l(3396),c=l(9242),s=l(7139),n=l(4870),t=l(1588),r=l(2483);const u={class:"form-wrapper"},i={class:"container"},d={class:"row justify-content-center"},p={class:"col-sm-5"},v={class:"form-div text-center"},m=(0,o._)("h2",null,"Login",-1),h=(0,o._)("p",null,"Enter your account details below",-1),_={class:"form-group mt-5"},f=(0,o._)("div",{class:"form-group form-check-label"},[(0,o._)("label",{for:"tarms-check"},[(0,o._)("input",{class:"d-none",type:"checkbox",id:"tarms-check",checked:""}),(0,o._)("span",{class:"checkbox"}),(0,o._)("p",null,"Keep me signed in ")])],-1),k=(0,o._)("p",{class:"sign-up-text"},[(0,o.Uk)("No account? You can "),(0,o._)("a",{href:"/register"},"create"),(0,o.Uk)(" one.")],-1),w={key:0};var g={__name:"LoginView",setup(e){const a=(0,n.iH)(""),l=(0,n.iH)(""),g=(0,r.tv)(),b=(0,n.iH)(),y=()=>{(0,t.e5)((0,t.v0)(),a.value,l.value).then((e=>{console.log(e),console.log("Successfully loggedin"),g.push("/account")})).catch((e=>{switch(console.log(e.code),e.code){case"auth/invalid-email":b.value="Invalid email";break;case"auth/user-not-found":b.value="No account with that email address";break;case"auth/wrong-password":b.value="Incorrect password";break;default:b.value="Email or password was incorrect";break}}))};return(e,n)=>((0,o.wg)(),(0,o.iD)("section",u,[(0,o._)("div",i,[(0,o._)("div",d,[(0,o._)("div",p,[(0,o._)("div",v,[m,h,(0,o._)("div",_,[(0,o.wy)((0,o._)("input",{class:"form-control",type:"email","onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),placeholder:"Email address"},null,512),[[c.nr,a.value]]),(0,o.wy)((0,o._)("input",{class:"form-control",type:"password","onUpdate:modelValue":n[1]||(n[1]=e=>l.value=e),placeholder:"Password"},null,512),[[c.nr,l.value]])]),f,(0,o._)("div",{class:"form-group button-block text-center"},[(0,o._)("button",{class:"form-btn",onClick:y},"Login"),k]),b.value?((0,o.wg)(),(0,o.iD)("div",w,(0,s.zw)(b.value),1)):(0,o.kq)("",!0)])])])])]))}};const b=g;var y=b}}]);
//# sourceMappingURL=429.0b37f880.js.map