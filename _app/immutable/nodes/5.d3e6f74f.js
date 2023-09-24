import{s as A,n as L,r as z,o as B,f as R,b as I}from"../chunks/scheduler.26069417.js";import{S as j,i as q,g as f,s as w,h as g,j as y,c as x,x as V,f as T,k as m,a as P,y as d,A as E}from"../chunks/index.20e3a006.js";import{w as X}from"../chunks/index.1b0f0f41.js";function F(e){let t,i,s,a,u='<div class="row center svelte-bmuvu1">Default</div> <div class="svelte-bmuvu1"></div> <div class="row center svelte-bmuvu1">Styled</div>',b,r,h,l,D,p,o,C,c,k='<div class="svelte-bmuvu1"></div>',n,S;return{c(){t=f("div"),i=f("br"),s=w(),a=f("div"),a.innerHTML=u,b=w(),r=f("div"),h=f("div"),l=f("div"),D=w(),p=f("div"),o=f("textarea"),C=w(),c=f("div"),c.innerHTML=k,this.h()},l(_){t=g(_,"DIV",{class:!0});var v=y(t);i=g(v,"BR",{class:!0}),s=x(v),a=g(v,"DIV",{class:!0,"data-svelte-h":!0}),V(a)!=="svelte-1t4i7me"&&(a.innerHTML=u),b=x(v),r=g(v,"DIV",{class:!0});var H=y(r);h=g(H,"DIV",{class:!0});var M=y(h);l=g(M,"DIV",{class:!0}),y(l).forEach(T),M.forEach(T),D=x(H),p=g(H,"DIV",{class:!0});var N=y(p);o=g(N,"TEXTAREA",{class:!0}),y(o).forEach(T),N.forEach(T),H.forEach(T),C=x(v),c=g(v,"DIV",{class:!0,"data-svelte-h":!0}),V(c)!=="svelte-1n0xdc3"&&(c.innerHTML=k),v.forEach(T),this.h()},h(){m(i,"class","svelte-bmuvu1"),m(a,"class","grid3 gap svelte-bmuvu1"),m(l,"class","editable svelte-bmuvu1"),m(h,"class","svelte-bmuvu1"),m(o,"class","styles svelte-bmuvu1"),m(p,"class","svelte-bmuvu1"),m(r,"class","grid2 gap svelte-bmuvu1"),m(c,"class","transformed svelte-bmuvu1"),m(t,"class","col gap fill-w svelte-bmuvu1")},m(_,v){P(_,t,v),d(t,i),d(t,s),d(t,a),d(t,b),d(t,r),d(r,h),d(h,l),e[6](l),d(r,D),d(r,p),d(p,o),e[7](o),d(t,C),d(t,c),e[8](c),n||(S=[E(l,"click",e[4]),E(l,"focusin",e[5]),E(l,"focusout",J),E(l,"keydown",K),E(o,"input",e[3]),E(o,"keydown",G)],n=!0)},p:L,i:L,o:L,d(_){_&&T(t),e[6](null),e[7](null),e[8](null),n=!1,z(S)}}}function G(e){if(e.key==="Tab"){e.preventDefault();let t=e.currentTarget.selectionStart,i=e.currentTarget.selectionEnd;e.currentTarget.value=e.currentTarget.value.substring(0,t)+"  "+e.currentTarget.value.substring(i),e.currentTarget.selectionStart=e.currentTarget.selectionEnd=t+2}}function J(){}function K(e){e.key==="Enter"&&(e.preventDefault(),O())}function O(){var t;const e=(t=document.getSelection())==null?void 0:t.getRangeAt(0);if(e){const{startContainer:i,endContainer:s}=e;console.log(i,s);const a=document.createTextNode(`
\r`);e.insertNode(a);let u=a.nextSibling;u===null&&(u=a.nextSibling),u!==null&&(e.setStart(u,0),e.setEnd(u,0))}}function Q(e,t,i){let s,a,u=`<div class="grid">
  <div class="h">Heading 1</div>
  <div class="h">Heading 2</div>
  <div class="h">Heading 3</div>
  <div>Data 1</div>
  <div>Data 2</div>
  <div>Data 3</div>
</div>
`,b=X(""),r,h=`.grid {
  --size: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--size);
  margin: var(--size);
}
.grid > div {
  padding: 4px;
  outline: var(--size) solid lightgray;
}
.grid > .h {
  font-weight: 800;
}
`;function l(){b.set(r.value)}function D(){s.toggleAttribute("contenteditable",!0),s.focus()}function p(){s.classList.add("focused"),i(0,s.innerHTML="",s),i(0,s.innerText=u,s)}function o(){a.replaceChildren(s.cloneNode(!0))}B(()=>{i(0,s.innerHTML=u,s),i(2,r.value=h,r),l(),o();const n=document.createElement("style");(document.head||document.getElementsByTagName("head")[0]).appendChild(n),n.appendChild(document.createTextNode(`.transformed {${R(b)}}`)),b.subscribe(_=>{n.firstChild&&n.replaceChild(document.createTextNode(`.transformed {${_}}`),n.firstChild)})});function C(n){I[n?"unshift":"push"](()=>{s=n,i(0,s)})}function c(n){I[n?"unshift":"push"](()=>{r=n,i(2,r)})}function k(n){I[n?"unshift":"push"](()=>{a=n,i(1,a)})}return[s,a,r,l,D,p,C,c,k]}class Z extends j{constructor(t){super(),q(this,t,Q,F,A,{})}}export{Z as component};
