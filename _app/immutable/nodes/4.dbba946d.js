import{s as w,n as N,r as A,o as M,f as I,b as x}from"../chunks/scheduler.26069417.js";import{S as V,i as B,g as h,s as H,h as v,j as T,c as S,f as m,x as z,k as _,a as O,y as g,A as y}from"../chunks/index.20e3a006.js";import{w as R}from"../chunks/index.1b0f0f41.js";function j(e){let s,r,t,l,i,a,d,o,c,E,u,k="<div></div>",b,D;return{c(){s=h("div"),r=h("br"),t=H(),l=h("div"),i=h("div"),a=h("div"),d=H(),o=h("div"),c=h("textarea"),E=H(),u=h("div"),u.innerHTML=k,this.h()},l(p){s=v(p,"DIV",{class:!0});var f=T(s);r=v(f,"BR",{}),t=S(f),l=v(f,"DIV",{class:!0});var n=T(l);i=v(n,"DIV",{class:!0});var L=T(i);a=v(L,"DIV",{class:!0}),T(a).forEach(m),L.forEach(m),d=S(n),o=v(n,"DIV",{class:!0});var C=T(o);c=v(C,"TEXTAREA",{class:!0}),T(c).forEach(m),C.forEach(m),n.forEach(m),E=S(f),u=v(f,"DIV",{class:!0,"data-svelte-h":!0}),z(u)!=="svelte-1n0xdc3"&&(u.innerHTML=k),f.forEach(m),this.h()},h(){_(a,"class","editable svelte-1b18fsy"),_(i,"class","svelte-1b18fsy"),_(c,"class","styles svelte-1b18fsy"),_(o,"class","svelte-1b18fsy"),_(l,"class","grid gap svelte-1b18fsy"),_(u,"class","transformed"),_(s,"class","col gap fill-w svelte-1b18fsy")},m(p,f){O(p,s,f),g(s,r),g(s,t),g(s,l),g(l,i),g(i,a),e[7](a),g(l,d),g(l,o),g(o,c),e[8](c),g(s,E),g(s,u),e[9](u),b||(D=[y(a,"click",e[4]),y(a,"focusin",e[5]),y(a,"focusout",e[6]),y(a,"keydown",q),y(c,"input",e[3]),y(c,"keydown",X)],b=!0)},p:N,i:N,o:N,d(p){p&&m(s),e[7](null),e[8](null),e[9](null),b=!1,A(D)}}}function X(e){if(e.key==="Tab"){e.preventDefault();let s=e.currentTarget.selectionStart,r=e.currentTarget.selectionEnd;e.currentTarget.value=e.currentTarget.value.substring(0,s)+"  "+e.currentTarget.value.substring(r),e.currentTarget.selectionStart=e.currentTarget.selectionEnd=s+2}}function q(e){e.key==="Enter"&&(e.preventDefault(),P(e.currentTarget))}function P(e){var r;const s=(r=document.getSelection())==null?void 0:r.getRangeAt(0);if(s){const t=document.createElement("br");let{startContainer:l,endContainer:i,startOffset:a,endOffset:d}=s;switch(i===e&&(l=e.childNodes[a],i=e.childNodes[d]),i.nodeType){case Node.ELEMENT_NODE:i.insertAdjacentElement("afterend",t);break;case Node.TEXT_NODE:s.insertNode(t);break;default:console.log("error (insertLineBreak): neither");return}const o=t.nextSibling;o?(s.setStart(o,0),s.setEnd(o,0)):console.log("error (insertLineBreak): next container does not exist")}}function F(e,s,r){let t,l,i=`<div class="grid">
  <div class="h">Heading 1</div>
  <div class="h">Heading 2</div>
  <div class="h">Heading 3</div>
  <div>Data 1</div>
  <div>Data 2</div>
  <div>Data 3</div>
</div>
`,a=R(""),d,o=`.grid {
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
`;function c(){a.set(d.value)}function E(){t.toggleAttribute("contenteditable",!0),t.focus()}function u(){t.classList.add("focused"),r(0,t.innerHTML="",t),r(0,t.innerText=i,t)}function k(){i=(t.innerText??"").replace(/[^\S\n\r]{2,}/g," "),r(0,t.innerText="",t),r(0,t.innerHTML=i,t),t.classList.remove("focused"),t.toggleAttribute("contenteditable",!1),b()}function b(){l.replaceChildren(t.cloneNode(!0))}M(()=>{r(0,t.innerHTML=i,t),r(2,d.value=o,d),c(),b();const n=document.createElement("style");(document.head||document.getElementsByTagName("head")[0]).appendChild(n),n.appendChild(document.createTextNode(`.transformed {${I(a)}}`)),a.subscribe(C=>{n.firstChild&&n.replaceChild(document.createTextNode(`.transformed {${C}}`),n.firstChild)})});function D(n){x[n?"unshift":"push"](()=>{t=n,r(0,t)})}function p(n){x[n?"unshift":"push"](()=>{d=n,r(2,d)})}function f(n){x[n?"unshift":"push"](()=>{l=n,r(1,l)})}return[t,l,d,c,E,u,k,D,p,f]}class Q extends V{constructor(s){super(),B(this,s,F,j,w,{})}}export{Q as component};
