import{r as g,a as L}from"./index-093297df.js";import{u as O,e as T,f as _,g as b,m as j}from"./index-c0b255c8.js";function q(e,t){const f=g.useMemo(e,t),m=g.useRef(f);return g.useEffect(()=>{m.current=f}),m}const J=()=>new Date(new Date().getFullYear()-10,0,1,0,0,0),K=()=>new Date(new Date().getFullYear()+10,11,31,23,59,59),x={y:[0,4,0,0,e=>e.getFullYear(),(e,t)=>e.setFullYear(t)],M:[1,2,1,12,e=>e.getMonth()+1,(e,t)=>e.setMonth(t-1)],d:[2,2,1,31,e=>e.getDate(),(e,t)=>e.setDate(t)],h:[3,2,0,23,e=>e.getHours(),(e,t)=>e.setHours(t)],m:[4,2,0,59,e=>e.getMinutes(),(e,t)=>e.setMinutes(t)],s:[5,2,0,59,e=>e.getSeconds(),(e,t)=>e.setSeconds(t)]};function w(e,t,f){const m=[t.getFullYear()],R=e?3:2;let y=!0,M=x.y[4];return I.slice(1).forEach((i,p)=>{const l=x[i];let a=l[R];e&&i==="d"&&(a=b(f.getFullYear(),f.getMonth()+1)),y=y&&m[p]===M(f),m[p+1]=y?l[4](t):a,M=l[4]}),m}function N(e,t,f){let m=!0,R=!0,y=x.y[4];I.slice(1).forEach((M,i)=>{const p=x[M];let l=p[2],a=p[3];M==="d"&&(a=b(e[0],e[1]));const D=p[4];(m=m&&y(t)===e[i])&&(l=D(t)),(R=R&&y(f)===e[i])&&(a=D(f)),e[i+1]=j(e[i+1],l,a),y=D})}const I=["y","M","d","h","m","s"],W=e=>{const{type:t="yMdhm",min:f,max:m,value:R,filter:y,formatter:M,onChange:i,...p}=e,l=g.useMemo(()=>Array.isArray(t)?t:t.split(""),[t]),a=g.useMemo(()=>f||J(),[f]),D=g.useMemo(()=>{const u=m||K();return u<a?new Date(a):u},[m]),h=q(()=>{const u=R||new Date;return u<a?a:u>D?D:u},[R]),V=g.useRef({}),A=g.useRef({}),k=(u,d,n,r)=>{let c=Array(u).fill(0).map((o,s)=>({value:s+d}));return y&&(c=c.filter((o,s)=>y(r,o.value,h.current,s))),c.forEach(o=>{o.zerofill=o.label=String(o.value).padStart(n,"0")}),M&&c.forEach((o,s)=>{o.label=M(r,o,h.current,s)}),c},E=g.useRef([]),C=g.useRef([]),Y=u=>{E.current=w(!1,a,h.current),C.current=w(!0,D,h.current);const d=n=>{const r=x[n],c=r[0];return k(C.current[c]-E.current[c]+1,E.current[c],r[1],n)};return u.map(n=>A.current[n]=d(n))},[S,G]=g.useState(()=>Y(l)),P=O(()=>l.map((u,d)=>{const n=x[u];return S[d].findIndex(r=>r.value===n[4](h.current))})),z=()=>{const u=w(!1,a,h.current),d=w(!0,D,h.current);return I.filter((n,r)=>u[r]!==E.current[r]||d[r]!==C.current[r])},B=T((u,d)=>{const n=I.map(c=>{const o=x[c];for(let s=0,v=l.length;s<v;s++)if(l[s]===c&&d[s])return d[s].value;return o[4](h.current)});N(n,a,D),n[1]--,h.current=new Date(...n);const r=z();if(r.length){const c=Y(r),o=l.map(s=>{for(let v=0,F=r.length;v<F;v++)if(r[v]===s)return c[v];return A.current[s]});G(o),n[1]++,V.current.setIndexesForcibly(l.map((s,v)=>{const F=n[x[s][0]];return o[v].findIndex(H=>H.value===F)}))}else i==null||i(new Date(h.current))});return L(_,{...p,columns:S,defaultIndex:P.current,onChange:B,ref:V})};export{W as D};
