import{r as n,p as Ve,s as N,t as J,y as K,z as Q,A as U,c as ge,a as C,j as pe,x as W,G as $}from"./index-be529937.js";const ee="vertical",te="horizontal",ye=w=>{const{className:se,value:Ne,defaultValue:Se,min:r=0,max:f=100,step:T=1,range:u=!1,vertical:a=!1,disabled:h=!1,readOnly:R=!1,pieceColor:ne="",trackColor:re="",trackSize:x="",thumbColor:ae="",thumbSize:A="",startThumb:D,endThumb:E,onAfterChange:S,onChange:ke,...ce}=w,[oe,O]=n.useState(!1),j=n.useRef(),z=n.useRef(0),M=n.useRef(0),I=n.useRef(0),_=n.useRef(0),m=n.useRef(!1),[V,L]=Ve(w,{initialValue:()=>u?[r,r]:r});let c,o;Array.isArray(V)?(c=V[0],o=V[1]):(c=r,o=V);const B=n.useRef({start:c,end:o}),d=n.useRef({start:c,end:o}),k=n.useRef({start:0,end:0}),[G,le]=n.useMemo(()=>{const e=f-r,t=(c-r)/e,s=(o-r)/e;return Object.assign(k.current,{start:t,end:s}),[t,s]},[c,o,r,f]),v=N(({x:e,y:t})=>{if(h||R)return;Object.assign(B.current,d.current);const s=j.current.getBoundingClientRect(),l=z.current=a?s.height:s.width,g=a?s.top:s.left,b=M.current=a?t:e,{start:i,end:p}=k.current,P=b-g;if(u){const be=Math.abs(P-i*l),Ce=Math.abs(P-p*l);m.current=be<Ce}I.current=P/l,_.current=m.current?i:p,O(!0)}),H=e=>{e=W($(e,T/(f-r)),0,1);let{start:t,end:s}=k.current;u?m.current?e>=s?(t=s,s=e,m.current=!1):t=e:e<t?(s=t,t=e,m.current=!0):s=e:s=e;const l=f-r,g=p=>W($(p*l+r,T),r,f),b=g(t),i=g(s);(d.current.start!==b||d.current.end!==i)&&(Object.assign(d.current,{start:b,end:i}),L(u?[b,i]:i))},X=N(({x:e,y:t})=>{if(h||R)return;const l=((a?t:e)-M.current)/z.current+_.current;H(l)}),y=N(()=>{if(h||R)return;O(!1);const{start:e,end:t}=B.current;(d.current.start!==e||d.current.end!==t)&&(S==null||S(u?[e,t]:t))}),Y=n.useRef(),Z=n.useRef();J(Y,e=>{e.on(K,v),e.on(Q,X),e.on(U,y)},{pan:!0,lockDirection:!1},{direction:a?ee:te}),J(Z,e=>{e.on(K,v),e.on(Q,X),e.on(U,y)},{pan:!0,lockDirection:!1},{direction:a?ee:te});const ie=N(e=>{if(h||R)return;const{clientX:t,clientY:s}=e;v({x:t,y:s}),H(I.current),y()}),ue={width:a?x:"",height:a?"":x,backgroundColor:re},de=G*100+"%",fe=(le-G)*100+"%",he={[a?"top":"left"]:de,[a?"height":"width"]:fe,backgroundColor:ne},Re={width:A,height:A,backgroundColor:ae},me=ge("s-slider",{"s-slider-is-down":oe,"s-slider-vertical":a,"s-slider-disabled":h,"s-slider-readonly":R},se),q=()=>C("div",{className:"s-slider-thumb",style:Re}),F=e=>e.stopPropagation();return C("div",{...ce,className:me,children:C("div",{ref:j,className:"s-slider-track",style:ue,onClick:ie,children:pe("div",{className:"s-slider-track-piece",style:he,children:[u&&C("div",{ref:Y,className:"s-slider-thumb-container s-slider-thumb-container-start",onClick:F,children:D?D(c):q()}),C("div",{ref:Z,className:"s-slider-thumb-container s-slider-thumb-container-end",onClick:F,children:E?E(o):q()})]})})})};export{ye as S};