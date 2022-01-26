import{u as j,a as z,b as T,c as I,_ as N,d as V}from"./app.c498e34d.js";import{o as t,h as s,j as e,z as A,r as p,i as F,w as L,q as o,x as _,D as r,G as b,F as U,l as W,m as E,L as P,Z as R,t as q,_ as G,$ as H,a0 as J,T as Y}from"./vendor.4297d40e.js";const Z={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},K=e("g",{fill:"currentColor"},[e("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"})],-1),O=[K];function Q(m,d){return t(),s("svg",Z,O)}var X={name:"bi-three-dots",render:Q},ee="/uping/assets/metamask.86c31dd9.svg",te="/uping/assets/WalletConnect.a23d2c74.svg";const oe={class:"grid grid-cols-2 mx-auto"},se=e("div",{class:"logo label-text text-left bangers text-border text-2xl"},[e("span",{class:"text-error"},"bet"),e("span",{class:"text-success"},"better.xyz")],-1),ne={class:"text-right"},ae={class:"flex justify-end"},re=e("div",{class:"hidden sm:inline-flex rounded-3xl btn btn-primary text-primary border-none bg-black bg-opacity-5 rounded-2xl mr-3"}," Polygon ",-1),le={key:1,class:"dropdown dropdown-end hidden sm:block"},ce={tabindex:"0",class:"btn btn-primary bg-white bg-opacity-80 border-none btn-outline rounded-2xl"},de={class:"dropdown dropdown-end ml-3"},ie={tabindex:"0",class:"btn btn-primary bg-white bg-opacity-80 border-none btn-outline rounded-2xl"},_e={tabindex:"0",class:"p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-2 text-primary"},ue={href:"#"},pe=e("a",{href:"#"},"\u9000\u51FA",-1),be=[pe],me=R('<li class="border-b border-solid border-gray-200 py-2"><a href="#">Twitter</a></li><li class="border-b border-solid border-gray-200 py-2"><a href="#">Contract</a></li><li><a href="#">\u7B80\u4F53\u4E2D\u6587</a></li>',3),he={class:"px-10 overflow-hidden text-center rounded-2xl"},xe=["src"],ve=e("p",{class:"text-2xl"},"MetaMask",-1),ge=["src"],fe=e("p",{class:"text-2xl"},"WalletConnect",-1),we={class:"grid grid-cols-2 gap-4 p-10"},ye={setup(m){const{t:d}=A(),n=p(!1),l=p(!1),u=j(),f=z(),w=T(),c=I(),y=p(c.walletType),k=F("subAddress");L(()=>{c.walletType=y.value});function h(){n.value=!0}function C(){f.login(),n.value=!1}function S(){n.value=!1,l.value=!0}function M(v){w.login(q(v)),l.value=!1}function x(){c.logout()}return(v,i)=>{const $=X,B=G,g=H,D=J;return t(),s("div",oe,[se,e("div",ne,[e("div",ae,[re,o(c).userChain.address?(t(),s("div",le,[e("div",ce,_(o(k)(o(c).userChain.address)),1),e("ul",{tabindex:"0",class:"p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-2 text-primary"},[e("li",null,[e("a",{onClick:x},"\u9000\u51FA")])])])):(t(),s("div",{key:0,class:"hidden sm:block rounded-3xl btn btn-primary btn-outline w-48 rounded-2xl",onClick:h},_(o(d)("button.connect_wallet")),1)),e("div",de,[e("div",ie,[r($)]),e("ul",_e,[o(c).userChain.address?(t(),s("li",{key:1,onClick:x,class:"block sm:hidden border-b border-solid border-gray-200 py-2"},be)):(t(),s("li",{key:0,onClick:h,class:"block sm:hidden border-b border-solid border-gray-200 py-2"},[e("a",ue,_(o(d)("button.connect_wallet")),1)])),me])])])]),r(g,{show:n.value,"onUpdate:show":i[0]||(i[0]=a=>n.value=a)},{default:b(()=>[e("ul",he,[e("li",{class:"px-24 py-8 cursor-pointer",onClick:C},[e("img",{class:"w-20 mx-auto mb-5",src:o(ee),alt:""},null,8,xe),ve]),r(B),e("li",{class:"px-24 py-8 cursor-pointer",onClick:S},[e("img",{class:"w-20 mx-auto mb-5",src:o(te),alt:""},null,8,ge),fe])])]),_:1},8,["show"]),r(g,{show:l.value,"onUpdate:show":i[1]||(i[1]=a=>l.value=a)},{default:b(()=>[e("div",we,[(t(!0),s(U,null,W(o(u).chains,a=>(t(),E(D,{key:a.chainId,text:"",outline:"",type:"primary",onClick:$e=>M(a)},{default:b(()=>[P(_(a.name),1)]),_:2},1032,["onClick"]))),128))])]),_:1},8,["show"])])}}},ke={},Ce={class:"sm:px-4 text-gray-700"},Se={class:"px-10 sm:px-4 text-center text-gray-700"};function Me(m,d){const n=ye,l=Y("router-view"),u=V;return t(),s("main",Ce,[r(n,{class:"p-10"}),e("div",Se,[r(l)]),r(u)])}var je=N(ke,[["render",Me]]);export{je as default};
