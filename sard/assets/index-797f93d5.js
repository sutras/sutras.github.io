import{r,a as V,j as Ct}from"./index-b9ddf759.js";import{c as kt}from"./index-2e4736b8.js";import{m as g,o as v,f as N,g as $,j as tt,k as et,l as st}from"./index-cef2ca44.js";const nt="vertical",rt="horizontal",yt=at=>{const{className:ct,value:i,defaultValue:O,min:n=0,max:c=100,step:h=1,range:o=!1,vertical:a=!1,disabled:m=!1,readOnly:R=!1,pieceColor:ot="",trackColor:lt="",trackSize:x="",thumbColor:it="",thumbSize:D="",startThumb:z,endThumb:A,onAfterChange:P,onChange:w,...ut}=at,[dt,M]=r.useState(!1),I=r.useRef(),_=r.useRef(0),L=r.useRef(0),B=r.useRef(0),H=r.useRef(0),b=r.useRef(!1),X=t=>()=>g(v((o?i??O??[n,n]:[n,i??O??n])[t],h),n,c),[p,Y]=r.useState(X(0)),[S,Z]=r.useState(X(1)),q=r.useRef({start:p,end:S}),u=r.useRef({start:p,end:S}),y=r.useRef({start:0,end:0});r.useEffect(()=>{if(i===void 0)return;let[t,e]=o?i:[n,i];t=g(v(t,h),n,c),e=g(v(e,h),n,c),Object.assign(u.current,{start:t,end:e}),Y(t),Z(e)},[i,o,n,c]);const[F,ft]=r.useMemo(()=>{const t=c-n,e=(p-n)/t,s=(S-n)/t;return Object.assign(y.current,{start:e,end:s}),[e,s]},[p,S,n,c]),E=N(({x:t,y:e})=>{if(m||R)return;Object.assign(q.current,u.current);const s=I.current.getBoundingClientRect(),d=_.current=a?s.height:s.width,C=a?s.top:s.left,f=L.current=a?e:t,{start:l,end:k}=y.current,j=f-C;if(o){const gt=Math.abs(j-l*d),vt=Math.abs(j-k*d);b.current=gt<vt}B.current=j/d,H.current=b.current?l:k,M(!0)}),G=t=>{t=g(v(t,h/(c-n)),0,1);let{start:e,end:s}=y.current;o?b.current?t>=s?(e=s,s=t,b.current=!1):e=t:t<e?(s=e,e=t,b.current=!0):s=t:s=t;const d=c-n,C=k=>g(v(k*d+n,h),n,c),f=C(e),l=C(s);(u.current.start!==f||u.current.end!==l)&&(Object.assign(u.current,{start:f,end:l}),i===void 0&&(Y(f),Z(l)),w==null||w(o?[f,l]:l))},J=N(({x:t,y:e})=>{if(m||R)return;const d=((a?e:t)-L.current)/_.current+H.current;G(d)}),T=N(()=>{if(m||R)return;M(!1);const{start:t,end:e}=q.current;(u.current.start!==t||u.current.end!==e)&&(P==null||P(o?[t,e]:e))}),K=r.useRef(),Q=r.useRef();$(K,t=>{t.on(tt,E),t.on(et,J),t.on(st,T)},{pan:!0,lockDirection:!1},{direction:a?nt:rt}),$(Q,t=>{t.on(tt,E),t.on(et,J),t.on(st,T)},{pan:!0,lockDirection:!1},{direction:a?nt:rt});const ht=N(t=>{if(m||R)return;const{clientX:e,clientY:s}=t;E({x:e,y:s}),G(B.current),T()}),mt={width:a?x:"",height:a?"":x,backgroundColor:lt},Rt=F*100+"%",bt=(ft-F)*100+"%",pt={[a?"top":"left"]:Rt,[a?"height":"width"]:bt,backgroundColor:ot},St={width:D,height:D,backgroundColor:it},Vt=kt("s-slider",{"s-slider-is-down":dt,"s-slider-vertical":a,"s-slider-disabled":m,"s-slider-readonly":R},ct),U=()=>V("div",{className:"s-slider-thumb",style:St}),W=t=>t.stopPropagation();return V("div",{...ut,className:Vt,children:V("div",{ref:I,className:"s-slider-track",style:mt,onClick:ht,children:Ct("div",{className:"s-slider-track-piece",style:pt,children:[o&&V("div",{ref:K,className:"s-slider-thumb-container s-slider-thumb-container-start",onClick:W,children:z?z(p):U()}),V("div",{ref:Q,className:"s-slider-thumb-container s-slider-thumb-container-end",onClick:W,children:A?A(S):U()})]})})})};export{yt as S};
