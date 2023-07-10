(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function y(){}function Ie(n,e){for(const t in e)n[t]=e[t];return n}function Oe(n){return n()}function Se(){return Object.create(null)}function D(n){n.forEach(Oe)}function He(n){return typeof n=="function"}function E(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function De(n){return Object.keys(n).length===0}function Ge(n,...e){if(n==null)return y;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function v(n,e,t){n.$$.on_destroy.push(Ge(e,t))}function fe(n){return n??""}function L(n,e,t){return n.set(t),e}function a(n,e){n.appendChild(e)}function j(n,e,t){n.insertBefore(e,t||null)}function C(n){n.parentNode&&n.parentNode.removeChild(n)}function ze(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function p(n){return document.createElement(n)}function N(n){return document.createTextNode(n)}function h(){return N(" ")}function xe(){return N("")}function P(n,e,t,o){return n.addEventListener(e,t,o),()=>n.removeEventListener(e,t,o)}function Ue(n){return function(e){return e.preventDefault(),n.call(this,e)}}function m(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ke(n){return Array.from(n.childNodes)}function z(n,e){e=""+e,n.data!==e&&(n.data=e)}function I(n,e){n.value=e??""}let se;function oe(n){se=n}function Ye(){if(!se)throw new Error("Function called outside component initialization");return se}function Fe(n){Ye().$$.on_mount.push(n)}const X=[],de=[];let te=[];const Le=[],Ze=Promise.resolve();let ve=!1;function Qe(){ve||(ve=!0,Ze.then(We))}function $e(n){te.push(n)}const ye=new Set;let Q=0;function We(){if(Q!==0)return;const n=se;do{try{for(;Q<X.length;){const e=X[Q];Q++,oe(e),Ve(e.$$)}}catch(e){throw X.length=0,Q=0,e}for(oe(null),X.length=0,Q=0;de.length;)de.pop()();for(let e=0;e<te.length;e+=1){const t=te[e];ye.has(t)||(ye.add(t),t())}te.length=0}while(X.length);for(;Le.length;)Le.pop()();ve=!1,ye.clear(),oe(n)}function Ve(n){if(n.fragment!==null){n.update(),D(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach($e)}}function Xe(n){const e=[],t=[];te.forEach(o=>n.indexOf(o)===-1?e.push(o):t.push(o)),t.forEach(o=>o()),te=e}const me=new Set;let G;function _e(){G={r:0,c:[],p:G}}function he(){G.r||D(G.c),G=G.p}function b(n,e){n&&n.i&&(me.delete(n),n.i(e))}function w(n,e,t,o){if(n&&n.o){if(me.has(n))return;me.add(n),G.c.push(()=>{me.delete(n),o&&(t&&n.d(1),o())}),n.o(e)}else o&&o()}function et(n,e){const t={},o={},r={$$scope:1};let s=n.length;for(;s--;){const i=n[s],c=e[s];if(c){for(const l in i)l in c||(o[l]=1);for(const l in c)r[l]||(t[l]=c[l],r[l]=1);n[s]=c}else for(const l in i)r[l]=1}for(const i in o)i in t||(t[i]=void 0);return t}function tt(n){return typeof n=="object"&&n!==null?n:{}}function B(n){n&&n.c()}function A(n,e,t,o){const{fragment:r,after_update:s}=n.$$;r&&r.m(e,t),o||$e(()=>{const i=n.$$.on_mount.map(Oe).filter(He);n.$$.on_destroy?n.$$.on_destroy.push(...i):D(i),n.$$.on_mount=[]}),s.forEach($e)}function M(n,e){const t=n.$$;t.fragment!==null&&(Xe(t.after_update),D(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function nt(n,e){n.$$.dirty[0]===-1&&(X.push(n),Qe(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function J(n,e,t,o,r,s,i,c=[-1]){const l=se;oe(n);const u=n.$$={fragment:null,ctx:[],props:s,update:y,not_equal:r,bound:Se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Se(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};i&&i(u.root);let f=!1;if(u.ctx=t?t(n,e.props||{},(d,g,..._)=>{const $=_.length?_[0]:g;return u.ctx&&r(u.ctx[d],u.ctx[d]=$)&&(!u.skip_bound&&u.bound[d]&&u.bound[d]($),f&&nt(n,d)),g}):[],u.update(),f=!0,D(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){const d=Ke(e.target);u.fragment&&u.fragment.l(d),d.forEach(C)}else u.fragment&&u.fragment.c();e.intro&&b(n.$$.fragment),A(n,e.target,e.anchor,e.customElement),We()}oe(l)}class O{$destroy(){M(this,1),this.$destroy=y}$on(e,t){if(!He(t))return y;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!De(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ot(n){let e,t,o,r;return{c(){e=p("div"),t=p("h1"),o=N(n[1]),m(t,"class","svelte-1aoblqe"),m(e,"class",r="flex justify-center content-center Box "+n[0]+" svelte-1aoblqe")},m(s,i){j(s,e,i),a(e,t),a(t,o)},p(s,[i]){i&2&&z(o,s[1]),i&1&&r!==(r="flex justify-center content-center Box "+s[0]+" svelte-1aoblqe")&&m(e,"class",r)},i:y,o:y,d(s){s&&C(e)}}}function st(n,e,t){let{color:o,letter:r}=e;return n.$$set=s=>{"color"in s&&t(0,o=s.color),"letter"in s&&t(1,r=s.letter)},[o,r]}class ae extends O{constructor(e){super(),J(this,e,st,ot,E,{color:0,letter:1})}}function rt(n){let e,t,o,r,s,i,c,l,u,f;return o=new ae({props:{letter:"W",color:"Blue"}}),s=new ae({props:{letter:"S",color:"Red"}}),c=new ae({props:{letter:"C",color:"Blue"}}),u=new ae({props:{letter:"R",color:"Red"}}),{c(){e=p("nav"),t=p("a"),B(o.$$.fragment),r=h(),B(s.$$.fragment),i=h(),B(c.$$.fragment),l=h(),B(u.$$.fragment),m(t,"class","mx-auto md:mx-0 flex px-1 py-3 w-max"),m(t,"href",n[0]),m(e,"class","Navbar svelte-jwpo53")},m(d,g){j(d,e,g),a(e,t),A(o,t,null),a(t,r),A(s,t,null),a(t,i),A(c,t,null),a(t,l),A(u,t,null),f=!0},p:y,i(d){f||(b(o.$$.fragment,d),b(s.$$.fragment,d),b(c.$$.fragment,d),b(u.$$.fragment,d),f=!0)},o(d){w(o.$$.fragment,d),w(s.$$.fragment,d),w(c.$$.fragment,d),w(u.$$.fragment,d),f=!1},d(d){d&&C(e),M(o),M(s),M(c),M(u)}}}function lt(n){return[window.location.origin+window.location.pathname]}class it extends O{constructor(e){super(),J(this,e,lt,rt,E,{})}}const V=[];function K(n,e=y){let t;const o=new Set;function r(c){if(E(n,c)&&(n=c,t)){const l=!V.length;for(const u of o)u[1](),V.push(u,n);if(l){for(let u=0;u<V.length;u+=2)V[u][0](V[u+1]);V.length=0}}}function s(c){r(c(n))}function i(c,l=y){const u=[c,l];return o.add(u),o.size===1&&(t=e(r)||y),c(n),()=>{o.delete(u),o.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:i}}const ge=K(""),pe=K(""),ke=K(!1),F=K([]),U=K(!1),ee=K(null),re=K(null);function ct(n){return/^[a-zA-Z0-9]{3,16}$/.test(n)}function Ne(n){if(/^\d{4}$/.test(n)){let e=parseInt(n,10);if(e>=0&&e<=9999)return!0}}function we(n,e){return n.length>0&&e.length>0?`Join Room ${n} as ${e}`:n.length>0?`Join Room ${n}`:e.length>0?`Join Room as ${e}`:"Join Room"}function ut(n){let e,t,o,r,s,i,c,l,u,f,d,g,_,$;return{c(){e=p("div"),t=p("form"),o=p("h1"),o.textContent="Join or Create a Room",r=h(),s=p("input"),i=h(),c=p("div"),l=p("input"),u=h(),f=p("button"),f.textContent="Generate New Room",d=h(),g=p("input"),m(o,"id","header"),m(o,"class","mb-3 svelte-44sw79"),m(s,"class","form-control bottom svelte-44sw79"),m(s,"type","text"),m(s,"id","name"),m(s,"size","64"),s.autofocus=!0,m(s,"autocomplete","off"),m(s,"placeholder","Name"),m(l,"class","form-control bottom svelte-44sw79"),m(l,"type","text"),m(l,"id","room"),m(l,"size","64"),m(l,"autocomplete","off"),m(l,"placeholder","Room"),m(f,"type","button"),m(f,"class","btn btn-lg btn-outline top-btn svelte-44sw79"),m(f,"id","generateRoom"),m(c,"id","wrapper"),m(c,"class","svelte-44sw79"),m(g,"class","btn btn-lg btn-outline btm-btn form-control svelte-44sw79"),m(g,"type","submit"),m(g,"id","joinRoom"),m(t,"id","roomForm"),m(t,"class","form-signin svelte-44sw79"),m(e,"id","joiner"),m(e,"class","svelte-44sw79")},m(T,q){j(T,e,q),a(e,t),a(t,o),a(t,r),a(t,s),I(s,n[1]),a(t,i),a(t,c),a(c,l),I(l,n[0]),a(c,u),a(c,f),n[9](f),a(t,d),a(t,g),I(g,n[2]),s.focus(),_||($=[P(s,"input",n[7]),P(s,"input",n[5]),P(l,"input",n[8]),P(l,"input",n[5]),P(f,"click",n[4]),P(g,"input",n[10]),P(t,"submit",Ue(n[6]))],_=!0)},p(T,[q]){q&2&&s.value!==T[1]&&I(s,T[1]),q&1&&l.value!==T[0]&&I(l,T[0]),q&4&&I(g,T[2])},i:y,o:y,d(T){T&&C(e),n[9](null),_=!1,D($)}}}function ft(n,e,t){let o,r,s;v(n,ke,x=>t(11,o=x)),v(n,pe,x=>t(12,r=x)),v(n,ge,x=>t(13,s=x));let c=new URLSearchParams(window.location.search).get("room"),l="",u="",f="Join Room",d;Fe(()=>{c!==null&&Ne(c)&&(t(0,l=c),t(2,f=we(l,u)),t(3,d.disabled=!0,d))});function g(){fetch(window.location.origin+"/generateRoom").then(x=>x.text()).then(x=>{t(0,l=x),t(2,f=we(x,u)),t(3,d.disabled=!0,d)})}function _(x){let H=x.target;H.id==="name"?t(1,u=H.value.replace(/[^a-zA-Z0-9]/g,"").substring(0,13)):H.id==="room"&&t(0,l=H.value.replace(/\D/g,"").substring(0,4)),t(2,f=we(l,u))}function $(){if(!u&&!l)return alert("Please enter a name and room number."),!1;if(u){if(!l)return alert("Please enter a room number."),!1}else return alert("Please enter a name."),!1;if(ct(u)){if(!Ne(l))return alert("Room must be a 4 digit number 0000-9999"),!1}else return alert("Name must be 3-16 characters long and may only consist of letters and numbers."),!1;return L(ge,s=u,s),L(pe,r=l,r),L(ke,o=!0,o),!0}function T(){u=this.value,t(1,u)}function q(){l=this.value,t(0,l)}function le(x){de[x?"unshift":"push"](()=>{d=x,t(3,d)})}function Y(){f=this.value,t(2,f)}return[l,u,f,d,g,_,$,T,q,le,Y]}class at extends O{constructor(e){super(),J(this,e,ft,ut,E,{})}}function mt(n){let e,t,o,r,s,i,c,l,u,f,d;return{c(){e=p("div"),t=p("div"),o=p("div"),r=p("b"),s=N(n[0]),i=h(),c=p("span"),l=N(n[2]),u=h(),f=p("span"),d=N(n[1]),m(c,"class","ToGrey svelte-xmpfuc"),m(o,"class","flex justify-between w-full"),m(f,"class","FmtWord svelte-xmpfuc"),m(t,"class","w-1/2 m-4 LeftMessage text-opacity-100 svelte-xmpfuc"),m(e,"class","flex flex-col justify-between item-start")},m(g,_){j(g,e,_),a(e,t),a(t,o),a(o,r),a(r,s),a(o,i),a(o,c),a(c,l),a(t,u),a(t,f),a(f,d)},p(g,_){_&1&&z(s,g[0]),_&4&&z(l,g[2]),_&2&&z(d,g[1])},d(g){g&&C(e)}}}function dt(n){let e,t,o,r,s,i,c,l,u,f,d;return{c(){e=p("div"),t=p("div"),o=p("div"),r=p("b"),s=N(n[0]),i=h(),c=p("span"),l=N(n[2]),u=h(),f=p("span"),d=N(n[1]),m(c,"class","ToGrey svelte-xmpfuc"),m(o,"class","flex justify-between w-full"),m(f,"class","FmtWord svelte-xmpfuc"),m(t,"class","w-1/2 m-4 RightMessage text-opacity-100 svelte-xmpfuc"),m(e,"class","flex flex-col justify-between items-end")},m(g,_){j(g,e,_),a(e,t),a(t,o),a(o,r),a(r,s),a(o,i),a(o,c),a(c,l),a(t,u),a(t,f),a(f,d)},p(g,_){_&1&&z(s,g[0]),_&4&&z(l,g[2]),_&2&&z(d,g[1])},d(g){g&&C(e)}}}function gt(n){let e;function t(s,i){return s[3]?dt:mt}let o=t(n),r=o(n);return{c(){r.c(),e=xe()},m(s,i){r.m(s,i),j(s,e,i)},p(s,[i]){o===(o=t(s))&&r?r.p(s,i):(r.d(1),r=o(s),r&&(r.c(),r.m(e.parentNode,e)))},i:y,o:y,d(s){r.d(s),s&&C(e)}}}function pt(n,e,t){let{name:o,message:r,time:s,fromClient:i}=e;return n.$$set=c=>{"name"in c&&t(0,o=c.name),"message"in c&&t(1,r=c.message),"time"in c&&t(2,s=c.time),"fromClient"in c&&t(3,i=c.fromClient)},[o,r,s,i]}class _t extends O{constructor(e){super(),J(this,e,pt,gt,E,{name:0,message:1,time:2,fromClient:3})}}function ht(n){let e,t,o;return{c(){e=p("div"),t=p("b"),o=N(n[0]),m(t,"class","Announcement svelte-14y7aog"),m(e,"class","flex justify-center")},m(r,s){j(r,e,s),a(e,t),a(t,o)},p(r,[s]){s&1&&z(o,r[0])},i:y,o:y,d(r){r&&C(e)}}}function bt(n,e,t){let{message:o}=e;return n.$$set=r=>{"message"in r&&t(0,o=r.message)},[o]}class yt extends O{constructor(e){super(),J(this,e,bt,ht,E,{message:0})}}function Be(n,e,t){const o=n.slice();return o[5]=e[t],o}function wt(n){let e,t;return e=new yt({props:{message:n[5].data.message}}),{c(){B(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},p(o,r){const s={};r&2&&(s.message=o[5].data.message),e.$set(s)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){w(e.$$.fragment,o),t=!1},d(o){M(e,o)}}}function vt(n){let e,t;const o=[n[5].data];let r={};for(let s=0;s<o.length;s+=1)r=Ie(r,o[s]);return e=new _t({props:r}),{c(){B(e.$$.fragment)},m(s,i){A(e,s,i),t=!0},p(s,i){const c=i&2?et(o,[tt(s[5].data)]):{};e.$set(c)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function Pe(n){let e,t,o,r;const s=[vt,wt],i=[];function c(l,u){return l[5].type==="message"?0:1}return e=c(n),t=i[e]=s[e](n),{c(){t.c(),o=xe()},m(l,u){i[e].m(l,u),j(l,o,u),r=!0},p(l,u){let f=e;e=c(l),e===f?i[e].p(l,u):(_e(),w(i[f],1,1,()=>{i[f]=null}),he(),t=i[e],t?t.p(l,u):(t=i[e]=s[e](l),t.c()),b(t,1),t.m(o.parentNode,o))},i(l){r||(b(t),r=!0)},o(l){w(t),r=!1},d(l){i[e].d(l),l&&C(o)}}}function $t(n){let e,t,o,r,s=n[1],i=[];for(let l=0;l<s.length;l+=1)i[l]=Pe(Be(n,s,l));const c=l=>w(i[l],1,1,()=>{i[l]=null});return{c(){e=p("div");for(let l=0;l<i.length;l+=1)i[l].c();m(e,"class","p-3 Log svelte-aocl5y"),m(e,"id","message-log")},m(l,u){j(l,e,u);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(e,null);n[3](e),t=!0,o||(r=P(e,"scroll",n[2]),o=!0)},p(l,[u]){if(u&2){s=l[1];let f;for(f=0;f<s.length;f+=1){const d=Be(l,s,f);i[f]?(i[f].p(d,u),b(i[f],1)):(i[f]=Pe(d),i[f].c(),b(i[f],1),i[f].m(e,null))}for(_e(),f=s.length;f<i.length;f+=1)c(f);he()}},i(l){if(!t){for(let u=0;u<s.length;u+=1)b(i[u]);t=!0}},o(l){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)w(i[u]);t=!1},d(l){l&&C(e),ze(i,l),n[3](null),o=!1,r()}}}function kt(n,e,t){let o,r,s;v(n,U,l=>t(4,o=l)),v(n,re,l=>t(0,r=l)),v(n,F,l=>t(1,s=l));function i(){let l=r.scrollTop>=r.scrollHeight-r.clientHeight-10;o&&l&&L(U,o=!1,o)}function c(l){de[l?"unshift":"push"](()=>{r=l,re.set(r)})}return[r,s,i,c]}class xt extends O{constructor(e){super(),J(this,e,kt,$t,E,{})}}function Ct(n){let e,t,o,r;return{c(){e=p("div"),t=p("b"),t.textContent="New Message...",m(t,"class","Alert hover:cursor-pointer svelte-1ynzicq"),m(e,"class","flex justify-center mt-[-40px]")},m(s,i){j(s,e,i),a(e,t),o||(r=[P(t,"click",n[0]),P(e,"scroll",n[0])],o=!0)},p:y,i:y,o:y,d(s){s&&C(e),o=!1,D(r)}}}function Rt(n,e,t){let o,r;v(n,U,i=>t(1,o=i)),v(n,re,i=>t(2,r=i));function s(){r.scrollTo(0,r.scrollHeight),L(U,o=!1,o)}return[s]}class jt extends O{constructor(e){super(),J(this,e,Rt,Ct,E,{})}}function Tt(n){let e,t,o,r,s,i,c;return{c(){e=p("div"),t=p("div"),o=p("textarea"),r=h(),s=p("button"),s.textContent="Send",m(o,"class","TextArea svelte-jup3e6"),m(o,"rows","1"),m(o,"placeholder","Type a message..."),o.autofocus=!0,m(s,"class","Button svelte-jup3e6"),m(t,"class","MessageBox svelte-jup3e6"),m(e,"class","ChatContainer svelte-jup3e6")},m(l,u){j(l,e,u),a(e,t),a(t,o),I(o,n[0]),a(t,r),a(t,s),o.focus(),i||(c=[P(o,"input",n[3]),P(o,"keydown",n[2]),P(s,"click",n[1])],i=!0)},p(l,[u]){u&1&&I(o,l[0])},i:y,o:y,d(l){l&&C(e),i=!1,D(c)}}}function At(n,e,t){let o,r,s,i;v(n,re,g=>t(5,o=g)),v(n,F,g=>t(6,r=g)),v(n,ge,g=>t(7,s=g)),v(n,ee,g=>t(8,i=g));let c=0,l="";function u(){if(!i||l.replace(/^]s+/,"").length===0||c>=3){if(c>=3){let $={type:"announcement",data:{name:"server",type:"cooldown",message:"You are on cooldown try again in 5 seconds."}};L(F,r=[...r,$],r),setTimeout(()=>{o.scrollTo(0,o.scrollHeight)},0)}return!1}c++,setTimeout(()=>{c--},5e3),i.send(l);let _={type:"message",data:{name:s,time:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),message:l,fromClient:!0}};return L(F,r=[...r,_],r),t(0,l=""),setTimeout(()=>{o.scrollTo(0,o.scrollHeight)},0),!0}function f(g){g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),u())}function d(){l=this.value,t(0,l)}return[l,u,f,d]}class Mt extends O{constructor(e){super(),J(this,e,At,Tt,E,{})}}function Ee(n){let e,t;return e=new jt({}),{c(){B(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){w(e.$$.fragment,o),t=!1},d(o){M(e,o)}}}function St(n){let e,t,o,r,s,i;t=new xt({});let c=n[0]&&Ee();return s=new Mt({}),{c(){e=p("div"),B(t.$$.fragment),o=h(),c&&c.c(),r=h(),B(s.$$.fragment),m(e,"class","col-span-3 relative")},m(l,u){j(l,e,u),A(t,e,null),a(e,o),c&&c.m(e,null),a(e,r),A(s,e,null),i=!0},p(l,[u]){l[0]?c?u&1&&b(c,1):(c=Ee(),c.c(),b(c,1),c.m(e,r)):c&&(_e(),w(c,1,1,()=>{c=null}),he())},i(l){i||(b(t.$$.fragment,l),b(c),b(s.$$.fragment,l),i=!0)},o(l){w(t.$$.fragment,l),w(c),w(s.$$.fragment,l),i=!1},d(l){l&&C(e),M(t),c&&c.d(),M(s)}}}function Lt(n,e,t){let o;return v(n,U,r=>t(0,o=r)),[o]}class Nt extends O{constructor(e){super(),J(this,e,Lt,St,E,{})}}function qe(n,e,t){const o=n.slice();return o[10]=e[t],o}function Je(n){let e,t=n[10]+"",o,r;return{c(){e=p("p"),o=N(t),r=h(),m(e,"class","Participant svelte-isfngi")},m(s,i){j(s,e,i),a(e,o),a(e,r)},p(s,i){i&2&&t!==(t=s[10]+"")&&z(o,t)},d(s){s&&C(e)}}}function Bt(n){let e,t,o,r,s,i,c,l,u,f,d,g,_,$,T,q,le,Y,x,H,Ce,Re,ie,ce,je,ne,Te,ue,be,Ae,Z=n[1],S=[];for(let k=0;k<Z.length;k+=1)S[k]=Je(qe(n,Z,k));return{c(){e=p("div"),t=p("h3"),t.textContent="Room Information",o=h(),r=p("hr"),s=h(),i=p("p"),c=p("b"),c.textContent="Room Number: ",l=N(n[4]),u=h(),f=p("p"),d=p("b"),d.textContent="Room Count: ",g=N(n[0]),_=h(),$=p("p"),$.innerHTML="<b>Room Participants:</b>",T=h(),q=p("div");for(let k=0;k<S.length;k+=1)S[k].c();le=h(),Y=p("p"),Y.innerHTML="<b>Invite Link:</b>",x=h(),H=p("p"),Ce=N(n[5]),Re=h(),ie=p("i"),je=h(),ne=p("b"),Te=N("Copied!"),m(t,"class","text-center font-semibold text-3xl my-4"),m(r,"class","mb-4 border-gray-400"),m(i,"class","svelte-isfngi"),m(f,"class","svelte-isfngi"),m($,"class","svelte-isfngi"),m(q,"class","Participants svelte-isfngi"),m(Y,"class","mt-3 mb-1 svelte-isfngi"),m(ie,"class",ce=fe(n[2])+" svelte-isfngi"),m(H,"class","mb-0 Link svelte-isfngi"),m(ne,"class",ue=fe(n[3])+" svelte-isfngi"),m(e,"class","col-span-1 SidePanel svelte-isfngi")},m(k,W){j(k,e,W),a(e,t),a(e,o),a(e,r),a(e,s),a(e,i),a(i,c),a(i,l),a(e,u),a(e,f),a(f,d),a(f,g),a(e,_),a(e,$),a(e,T),a(e,q);for(let R=0;R<S.length;R+=1)S[R]&&S[R].m(q,null);a(e,le),a(e,Y),a(e,x),a(e,H),a(H,Ce),a(H,Re),a(H,ie),a(e,je),a(e,ne),a(ne,Te),be||(Ae=P(H,"click",n[6]),be=!0)},p(k,[W]){if(W&16&&z(l,k[4]),W&1&&z(g,k[0]),W&2){Z=k[1];let R;for(R=0;R<Z.length;R+=1){const Me=qe(k,Z,R);S[R]?S[R].p(Me,W):(S[R]=Je(Me),S[R].c(),S[R].m(q,null))}for(;R<S.length;R+=1)S[R].d(1);S.length=Z.length}W&4&&ce!==(ce=fe(k[2])+" svelte-isfngi")&&m(ie,"class",ce),W&8&&ue!==(ue=fe(k[3])+" svelte-isfngi")&&m(ne,"class",ue)},i:y,o:y,d(k){k&&C(e),ze(S,k),be=!1,Ae()}}}function Pt(n,e,t){let o,r;v(n,pe,_=>t(4,o=_)),v(n,F,_=>t(7,r=_));let s=0,i=[],c="fa-regular fa-clipboard Clipboard",l="hidden",u=window.location.host+`/?room=${o}`;function f(){fetch(window.location.origin+`/info/${o}`).then(_=>_.json()).then(_=>{_.error!=="true"&&(t(0,s=_.roomCount),t(1,i=_.participants))}).catch(_=>console.log(_))}function d(_){if(r.length===1&&r[0].data.type==="join"){f();return}let $=r[r.length-1];if($!==void 0&&$.type==="announcement"){if($.data.type==="join")t(0,s+=1),t(1,i=[...i,$.data.name]);else if($.data.type==="leave"){t(0,s-=1);const T=i.indexOf($.data.name);i.splice(T,1),t(1,i)}}}function g(){navigator.clipboard.writeText(window.location.origin+"/?room="+o).then(()=>{t(2,c="fa-solid fa-check Clipboard"),t(3,l="ps-2"),setTimeout(()=>{t(2,c="fa-regular fa-clipboard Clipboard"),t(3,l="hidden")},1e3)}).catch()}return n.$$.update=()=>{n.$$.dirty&128&&d()},[s,i,c,l,o,u,g,r]}class Et extends O{constructor(e){super(),J(this,e,Pt,Bt,E,{})}}function qt(n){let e,t,o,r,s;return t=new Nt({}),r=new Et({}),{c(){e=p("div"),B(t.$$.fragment),o=h(),B(r.$$.fragment),m(e,"class","grid grid-cols-4 gap-5 Room svelte-47q47q")},m(i,c){j(i,e,c),A(t,e,null),a(e,o),A(r,e,null),s=!0},p:y,i(i){s||(b(t.$$.fragment,i),b(r.$$.fragment,i),s=!0)},o(i){w(t.$$.fragment,i),w(r.$$.fragment,i),s=!1},d(i){i&&C(e),M(t),M(r)}}}function Jt(n,e,t){let o,r,s,i,c,l;v(n,F,f=>t(0,o=f)),v(n,ee,f=>t(1,r=f)),v(n,U,f=>t(2,s=f)),v(n,re,f=>t(3,i=f)),v(n,pe,f=>t(4,c=f)),v(n,ge,f=>t(5,l=f));function u(){if(window.WebSocket)L(ee,r=new WebSocket(`wss://${window.location.host}/ws/${l}/${c}`),r),L(ee,r.onmessage=function(f){let d=JSON.parse(f.data);d.type==="message"&&(d.data.time=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),d.data.fromClient=!1);let g=i.scrollHeight===i.scrollTop+i.clientHeight;L(F,o=[...o,d],o),setTimeout(()=>{g?i.scrollTo(0,i.scrollHeight):(console.log("we made it here"),L(U,s=!0,s))},0)},r),L(ee,r.onclose=function(){let f={type:"announcement",data:{type:"close",message:"Connection closed"}};L(F,o=[...o,f],o),L(ee,r=null,r)},r);else{let f={type:"announcement",data:{type:"close",message:"Your browser does not support WebSockets."}};L(F,o=[...o,f],o)}}return Fe(()=>{u()}),[]}class Ot extends O{constructor(e){super(),J(this,e,Jt,qt,E,{})}}function Ht(n){let e,t;return e=new Ot({}),{c(){B(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){w(e.$$.fragment,o),t=!1},d(o){M(e,o)}}}function zt(n){let e,t;return e=new at({}),{c(){B(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){w(e.$$.fragment,o),t=!1},d(o){M(e,o)}}}function Ft(n){let e,t,o,r;const s=[zt,Ht],i=[];function c(l,u){return l[0]?1:0}return e=c(n),t=i[e]=s[e](n),{c(){t.c(),o=xe()},m(l,u){i[e].m(l,u),j(l,o,u),r=!0},p(l,[u]){let f=e;e=c(l),e!==f&&(_e(),w(i[f],1,1,()=>{i[f]=null}),he(),t=i[e],t||(t=i[e]=s[e](l),t.c()),b(t,1),t.m(o.parentNode,o))},i(l){r||(b(t),r=!0)},o(l){w(t),r=!1},d(l){i[e].d(l),l&&C(o)}}}function Wt(n,e,t){let o;return v(n,ke,r=>t(0,o=r)),[o]}class It extends O{constructor(e){super(),J(this,e,Wt,Ft,E,{})}}function Dt(n){let e,t,o,r;return e=new it({}),o=new It({}),{c(){B(e.$$.fragment),t=h(),B(o.$$.fragment)},m(s,i){A(e,s,i),j(s,t,i),A(o,s,i),r=!0},p:y,i(s){r||(b(e.$$.fragment,s),b(o.$$.fragment,s),r=!0)},o(s){w(e.$$.fragment,s),w(o.$$.fragment,s),r=!1},d(s){M(e,s),s&&C(t),M(o,s)}}}class Gt extends O{constructor(e){super(),J(this,e,null,Dt,E,{})}}new Gt({target:document.getElementById("app")});