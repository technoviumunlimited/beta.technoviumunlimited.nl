import{h as t,D as e,C as r,j as s,p as a}from"./entry.af5ee48a.js";const l={__name:"logout",setup(n){return t(async()=>{try{const o=await e();console.log("Logout user:",o),r("/login")}catch(o){console.error(o),state.errors.push(o)}}),(o,c)=>(a(),s("div",null," Logging out... "))}};export{l as default};
