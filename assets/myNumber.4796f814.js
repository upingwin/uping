import{u as C,a as L,b as j,m as R,_ as U}from"./app.73096b81.js";import{z as l,A as B,E as T,G as V,r as f,H as h,o as i,i as r,k as o,l as a,v as m,j as _,w as x,F as H,t as P,n as z,P as A,B as E,R as $,M as F}from"./vendor.aca40889.js";var v={};const W={class:"required w-full"},Z={key:0},q={class:"text-center py-5 text-primary text-xl"},G={class:"px-10 sm:px-10 pb-28 h-screen w-full sm:w-auto overflow-y-auto"},I={class:"text-xsl"},J={class:"opacity-50 mt-2"},K={class:"text-5xl font-aoboshi"},O={key:0},Q={key:1},X={key:1},Y=a("div",{class:"w-full sm:w-box"},null,-1),tt=[Y],st={key:1,class:"text-center mt-36 px-16"},et=a("p",{class:"text-gray-400"}," No Data ",-1),ot=a("p",{class:"text-gray-400 mt-2"}," Please Connect Wallet ",-1),at=["src"],nt=a("p",{class:"ml-5"}," MetaMask ",-1),it={setup(rt){l.extend(B),l.extend(T),l.extend(V),l.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"1 min",ss:"1 min",m:"1 min",mm:"%d mins",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});const y=f(!1),g=f(!1),b=C(),w=L(),n=j(),k=f(!1);f(!1),h("subAddress");const d=h("wei2int");function D(s){return l().subtract(l.utc().unix()-s,"second").fromNow()}function S(s,t=3){return String(s).length>t?s:(Array(t).join(0)+s).slice(-t)}function M(s){const t=s[1]&&d(s[3])==="0.0";return{"text-gray-300":t,"text-white":s[1]&&!t,"text-primary":!s[1]&&!t}}function N(s,t=!1){const p=s[1]&&d(s[3])==="0.0";let u="fff";if(!p){const c=E.from(s[8]).toNumber();c>0&&(u=w.color[c%30])}return{background:`#${u}`}}return(s,t)=>{const p=$,u=F,c=U;return i(),r("div",W,[o(b).userChain.address?(i(),r("div",Z,[a("div",q," My Numbers "+m(o(n).myDataStatus.myNumbers),1),a("div",G,[_(u,{modelValue:s.isMyRefresh,"onUpdate:modelValue":t[2]||(t[2]=e=>s.isMyRefresh=e),class:"w-full mb-24",onRefresh:o(n).refreshHistory},{default:x(()=>[_(p,{loading:o(n).myDataStatus.loading,"onUpdate:loading":t[0]||(t[0]=e=>o(n).myDataStatus.loading=e),"loading-text":"Loading...","finished-text":"No Data","error-text":"Error",finished:o(n).myDataStatus.finished,onLoad:t[1]||(t[1]=e=>o(n).getUserHistoryList())},{default:x(()=>[o(n).history.length?(i(!0),r(H,{key:0},P(o(n).history,e=>(i(),r("div",{key:e,class:z([M(e),"flex justify-between items-center rounded-xl w-full sm:w-box h-box px-5 mb-5"]),style:A(N(e,!0))},[a("div",null,[a("h3",I,m(e[1]?"Winings "+o(d)(e[3]):"Pending"),1),a("p",J,m(D(o(d)(e[4],0))),1)]),a("div",K,[e[7]?(i(),r("span",O,m(S(e[2])),1)):(i(),r("span",Q," ??? "))])],6))),128)):(i(),r("div",X,tt))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue","onRefresh"])])])):(i(),r("div",st,[et,ot,a("div",{class:"hidden sm:block btn w-72 btn-lg btn-primary bg-opacity-10 border-none text-primary hover:text-white mt-10",onClick:t[3]||(t[3]=()=>{y.value=!0,k.value=!1})},[a("img",{src:o(R),width:"26",alt:"metaMask"},null,8,at),nt])])),_(c,{loginDialog:y.value,"onUpdate:loginDialog":t[4]||(t[4]=e=>y.value=e),walletDialog:g.value,"onUpdate:walletDialog":t[5]||(t[5]=e=>g.value=e)},null,8,["loginDialog","walletDialog"])])}}};typeof v=="function"&&v(it);export{it as default};
