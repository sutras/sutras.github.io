import{r as l,j as u,F as U,a as r}from"./index-093297df.js";import{c as C}from"./index-2e4736b8.js";import{i as I,e as A,s as W,t as Y,B as T,I as j}from"./index-c0b255c8.js";const ie=d=>{const{className:F,children:K,title:N,cancelText:L="取消",cancelProps:R,confirmText:_="完成",confirmProps:B,value:Z,defaultValue:$,onKeyClick:m,onChange:ee,onDelete:b,visible:re,defaultVisible:ae,onVisible:se,onClose:a,onCancel:f,onConfirm:p,extraKey:t,random:v,maxLength:M=Number.MAX_SAFE_INTEGER,popupProps:S={},hideType:y="click",triggerProp:x="onClick",focusedProp:V,...G}=d,{placement:X="bottom",mask:q=!1,lockScroll:w=!1,...z}=S,[h,P]=I(d,{defaultValue:""}),g=e=>{h.length>=M||(P(h+e),m==null||m(e))},D=()=>{P(h.slice(0,-1)),b==null||b()},[i,o]=I(d,{defaultValuePropName:"defaultVisible",valuePropName:"visible",trigger:"onVisible",defaultValue:!1}),k=l.useRef(null),H=A(()=>{o(!1),f==null||f(!1),a==null||a(!1)}),J=A(()=>{o(!1),p==null||p(!1),a==null||a(!1)});l.useEffect(()=>{if(!i)return;const e=s=>{k.current&&(k.current.contains(s.target)||o(!1))};return document.addEventListener(y,e,!0),()=>{document.removeEventListener(y,e,!0)}},[y,i]);const O=l.useMemo(()=>{const e=Array(10).fill(0).map((s,c)=>(c+1)%10);return v&&W(e,!0),e},[v]),Q=C("s-number-keyboard",{"s-number-keyboard-has-extra":t!=null},F);let n;try{n=l.Children.only(K)}catch{}return u(U,{children:[n&&(()=>{const e={...n.props,[x]:(...s)=>{var c,E;o(!0),(E=(c=n.props)[x])==null||E.call(c,...s)}};return V&&(e[V]=i),l.cloneElement(n,e)})(),r(Y,{...z,visible:i,placement:X,mask:q,lockScroll:w,children:u("div",{...G,className:Q,ref:k,children:[u("div",{className:"s-number-keyboard-header",children:[r(T,{className:"s-number-keyboard-cancel s-number-keyboard-button",type:"pale-text",theme:"secondary",...R,onClick:H,children:L??r(j,{prefix:"si",name:"keyboard-hide",className:"s-number-keyboard-hide"})}),N&&r("div",{className:"s-number-keyboard-title",children:N}),r(T,{className:"s-number-keyboard-confirm s-number-keyboard-button",type:"pale-text",theme:"primary",...B,onClick:J,children:_})]}),u("div",{className:"s-number-keyboard-body",children:[O.map((e,s)=>r("div",{className:C("s-number-keyboard-key",{"s-number-keyboard-key-lastnum":s===9}),onClick:()=>g(e+""),children:e},e)),t&&r("div",{className:"s-number-keyboard-key",onClick:()=>g(t+""),children:t}),r("div",{className:"s-number-keyboard-key",onClick:D,children:r(j,{prefix:"si",name:"backspace"})})]})]})})]})};export{ie as N};