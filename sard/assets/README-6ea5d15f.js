import{a,a7 as n,j as u,F as k,r as o,R as e}from"./index-ba304632.js";import{D as l}from"./Demo-5a7b5c0e.js";import{S as g}from"./index-b3aad3b6.js";import"./index.es-526e18cf.js";function y(){const s={width:"160px",height:"160px",backgroundColor:"var(--s-secondary-bg)"},t={width:"100px",height:"100px",backgroundColor:"rgba(var(--s-warning-rgb),.3)"};return a(n.Area,{style:s,children:a(n.View,{style:t})})}const f={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Movable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> areaStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'var(--s-secondary-bg)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> viewStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(var(--s-warning-rgb),.3)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function v(){const s={display:"inline-flex",width:"160px",height:"160px",margin:"20px",backgroundColor:"var(--s-secondary-bg)"},t={width:"100px",height:"100px",backgroundColor:"rgba(var(--s-warning-rgb),.3)"};return u(k,{children:[a(n.Area,{style:s,children:a(n.View,{style:{...t,width:"200px"}})}),a(n.Area,{style:s,children:a(n.View,{style:{...t,height:"200px"}})}),a(n.Area,{style:s,children:a(n.View,{style:{...t,width:"200px",height:"200px"}})})]})}const E={doc:`<h3>movable-view 大于 movable-area</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Movable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> areaStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'inline-flex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'20px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'var(--s-secondary-bg)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> viewStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(var(--s-warning-rgb),.3)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>viewStyle<span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>viewStyle<span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>viewStyle<span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function m(){const s={display:"inline-flex",width:"160px",height:"160px",margin:"20px",backgroundColor:"var(--s-secondary-bg)"},t={display:"flex",justifyContent:"center",alignItems:"center",width:"100px",height:"100px",backgroundColor:"rgba(var(--s-warning-rgb),.3)"};return u(k,{children:[a(n.Area,{style:s,children:a(n.View,{style:t,direction:"all",children:"all"})}),a(n.Area,{style:s,children:a(n.View,{style:t,direction:"horizontal",children:"horizontal"})}),a(n.Area,{style:s,children:a(n.View,{style:t,direction:"vertical",children:"vertical"})}),a(n.Area,{style:s,children:a(n.View,{style:t,direction:"none",children:"none"})})]})}const F={doc:`<h3>方向</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Movable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> areaStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'inline-flex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'20px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'var(--s-secondary-bg)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> viewStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(var(--s-warning-rgb),.3)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>all<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          all
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          horizontal
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          vertical
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          none
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function h(){const s={display:"inline-flex",width:"160px",height:"160px",margin:"20px",backgroundColor:"var(--s-secondary-bg)"},t={display:"flex",justifyContent:"center",alignItems:"center",width:"100px",height:"100px",backgroundColor:"rgba(var(--s-warning-rgb),.3)"};return u(k,{children:[a(n.Area,{style:s,children:a(n.View,{style:t,lockDirection:!0,direction:"horizontal",children:"horizontal"})}),a(n.Area,{style:s,children:a(n.View,{style:t,lockDirection:!0,direction:"vertical",children:"vertical"})})]})}const A={doc:`<h3>锁定方向</h3>
<p>将初次手指触摸后移动方向固定，即初始判断为某个方向后，后面无论如何滑动，都不会触发另一方向，直到下一次滑动开始；
仅在设定水平或垂直方向的情况下有效。</p>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Movable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> areaStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'inline-flex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'20px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'var(--s-secondary-bg)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> viewStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(var(--s-warning-rgb),.3)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span> <span class="token attr-name">lockDirection</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          horizontal
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span> <span class="token attr-name">lockDirection</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          vertical
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function b(){const[s,t]=o.useState(10),[p,c]=o.useState(300),r={display:"inline-flex",width:"160px",height:"160px",margin:"20px",backgroundColor:"var(--s-secondary-bg)"},i={width:"100px",height:"100px",backgroundColor:"rgba(var(--s-warning-rgb),.3)"};return u(k,{children:[u("div",{children:[a("label",{children:"设置阻尼系数："}),a(g,{value:s,onChange:d=>t(d||0)})]}),u("div",{style:{marginTop:10},children:[a("label",{children:"设置回弹时间："}),a(g,{value:p,onChange:d=>c(d||0)})]}),a(n.Area,{style:r,children:a(n.View,{style:i,outOfBounds:!0,damping:s,reboundDuration:p})}),a(n.Area,{style:r,children:a(n.View,{style:{...i,width:"200px"},outOfBounds:!0,damping:s,reboundDuration:p})}),a(n.Area,{style:r,children:a(n.View,{style:{...i,height:"200px"},outOfBounds:!0,damping:s,reboundDuration:p})}),a(n.Area,{style:r,children:a(n.View,{style:{...i,width:"200px",height:"200px"},outOfBounds:!0,damping:s,reboundDuration:p})})]})}const D={doc:`<h3>超出边界</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Movable<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>damping<span class="token punctuation">,</span> setDamping<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>reboundDuration<span class="token punctuation">,</span> setreboundDuration<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> areaStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'inline-flex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'160px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'20px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'var(--s-secondary-bg)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> viewStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(var(--s-warning-rgb),.3)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">设置阻尼系数：</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>damping<span class="token punctuation">}</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setDamping</span><span class="token punctuation">(</span>value <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">设置回弹时间：</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reboundDuration<span class="token punctuation">}</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setreboundDuration</span><span class="token punctuation">(</span>value <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span>
          <span class="token attr-name">outOfBounds</span>
          <span class="token attr-name">damping</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>damping<span class="token punctuation">}</span></span>
          <span class="token attr-name">reboundDuration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reboundDuration<span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>viewStyle<span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">outOfBounds</span>
          <span class="token attr-name">damping</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>damping<span class="token punctuation">}</span></span>
          <span class="token attr-name">reboundDuration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reboundDuration<span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>viewStyle<span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">outOfBounds</span>
          <span class="token attr-name">damping</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>damping<span class="token punctuation">}</span></span>
          <span class="token attr-name">reboundDuration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reboundDuration<span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>viewStyle<span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">outOfBounds</span>
          <span class="token attr-name">damping</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>damping<span class="token punctuation">}</span></span>
          <span class="token attr-name">reboundDuration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reboundDuration<span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function w(){const s={width:"100%",height:"320px",backgroundColor:"var(--s-secondary-bg)"},t={width:"100px",height:"100px",backgroundColor:"rgba(var(--s-warning-rgb),.3)"},p=o.useRef(),c=o.useCallback(()=>{p.current.updateAreaRect()},[]);return o.useEffect(()=>(window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[]),a(n.Area,{style:s,ref:p,children:a(n.View,{style:t,inertia:!0,outOfBounds:!0})})}const S={doc:`<h3>惯性</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Movable<span class="token punctuation">,</span> MovableAreaRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> areaStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'320px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'var(--s-secondary-bg)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> viewStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(var(--s-warning-rgb),.3)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> areaRef <span class="token operator">=</span> useRef<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MovableAreaRef</span></span><span class="token punctuation">></span></span><span class="token plain-text">()

  const handler = useCallback(() => </span><span class="token punctuation">{</span>
    areaRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">updateAreaRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token plain-text">, [])

  useEffect(() => </span><span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token plain-text">, [])

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaRef<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span> <span class="token attr-name">inertia</span> <span class="token attr-name">outOfBounds</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function x(){const s={width:"100%",height:"320px",backgroundColor:"var(--s-secondary-bg)"},t={width:"100px",height:"100px",backgroundColor:"rgba(var(--s-warning-rgb),.3)"},p=o.useRef(),c=o.useCallback(()=>{p.current.updateAreaRect()},[]);return o.useEffect(()=>(window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[]),a(n.Area,{style:s,ref:p,children:a(n.View,{style:t,scale:!0,outOfBounds:!0,maxScale:4})})}const C={doc:`<h3>缩放</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Movable<span class="token punctuation">,</span> MovableAreaRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> areaStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'320px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'var(--s-secondary-bg)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> viewStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(var(--s-warning-rgb),.3)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> areaRef <span class="token operator">=</span> useRef<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MovableAreaRef</span></span><span class="token punctuation">></span></span><span class="token plain-text">()

  const handler = useCallback(() => </span><span class="token punctuation">{</span>
    areaRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">updateAreaRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token plain-text">, [])

  useEffect(() => </span><span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token plain-text">, [])

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.Area</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaStyle<span class="token punctuation">}</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaRef<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Movable.View</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>viewStyle<span class="token punctuation">}</span></span>
        <span class="token attr-name">scale</span>
        <span class="token attr-name">outOfBounds</span>
        <span class="token attr-name">maxScale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Movable.Area</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};y.doc=f;v.doc=E;m.doc=F;h.doc=A;b.doc=D;w.doc=S;x.doc=C;function R(){return e.createElement("div",{className:"doc-content"},e.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="movable-ke-yi-dong-de-shi-tu">Movable 可移动的视图<a class="doc-anchor" href="#movable-ke-yi-dong-de-shi-tu">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>定义元素的拖拽逻辑。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Movable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),e.createElement("section",{className:"doc-section"},e.createElement(l,null,y),e.createElement(l,null,v),e.createElement(l,null,m),e.createElement(l,null,h),e.createElement(l,null,b),e.createElement(l,null,w),e.createElement(l,null,x)),e.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="movablearea-fang-fa">MovableArea 方法<a class="doc-anchor" href="#movablearea-fang-fa">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>updateAreaRect</td>
<td>更新可拖动区域的边界</td>
<td>(rect?: BoundingRect) =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="movableviewprops">MovableViewProps<a class="doc-anchor" href="#movableviewprops">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>defaultX</td>
<td>默认 x 坐标</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>defaultY</td>
<td>默认 y 坐标</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>direction</td>
<td>允许滑动的方向</td>
<td>'all' | 'vertical' | 'horizontal' | 'none'</td>
<td>'all'</td>
</tr>
<tr>
<td>inertia</td>
<td>是否允许惯性滑动</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>maxSpeed</td>
<td>惯性滑动最大速度</td>
<td>number</td>
<td>4</td>
</tr>
<tr>
<td>inertiaDuration</td>
<td>惯性滑动动画持续的时间，单位 ms</td>
<td>number</td>
<td>300</td>
</tr>
<tr>
<td>inertiaTime</td>
<td>惯性滑动时间，会与速度相乘得到最终滑动的距离，单位 ms</td>
<td>number</td>
<td>200</td>
</tr>
<tr>
<td>outOfBounds</td>
<td>是否允许超出边界，超出后会回弹到边界</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>damping</td>
<td>超出边界的阻尼系数</td>
<td>number</td>
<td>5</td>
</tr>
<tr>
<td>reboundDuration</td>
<td>回弹动画持续的时间</td>
<td>number</td>
<td>200</td>
</tr>
<tr>
<td>touchable</td>
<td>是否允许滑动</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>lockDirection</td>
<td>是否锁定方向</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>scale</td>
<td>是否允许缩放</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>minScale</td>
<td>最小缩放倍数</td>
<td>number</td>
<td>0.5</td>
</tr>
<tr>
<td>maxScale</td>
<td>最大缩放倍数</td>
<td>number</td>
<td>5</td>
</tr>
<tr>
<td>onChange</td>
<td>发生位移或缩放时触发</td>
<td>(x: number, y: number, scale: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onWillChange</td>
<td>位移或缩放开始和结束时触发，用于设置 <code>css</code> 的 <code>will-change</code></td>
<td>(willChange: 'auto' | 'transform') =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onPanStart</td>
<td>滑动开始时触发</td>
<td>(event: StrikePanEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onPanMove</td>
<td>滑动过程中触发</td>
<td>(event: StrikePanEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onPanEnd</td>
<td>滑动结束时触发</td>
<td>(event: StrikePanEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onMoveEnd</td>
<td>移动结束时触发，包括惯性或非惯性滑动</td>
<td>(x: number, y: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onPinchStart</td>
<td>缩放开始时触发</td>
<td>(event: StrikePinchEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onPinchMove</td>
<td>缩放过程中触发</td>
<td>(event: StrikePinchEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onPinchEnd</td>
<td>缩放结束时触发</td>
<td>(event: StrikePinchEvent) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="movableview-fang-fa">MovableView 方法<a class="doc-anchor" href="#movableview-fang-fa">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>updateViewRect</td>
<td>更新可拖动视图的位置和尺寸</td>
<td>(rect?: BoundingRect) =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="boundingrect">BoundingRect<a class="doc-anchor" href="#boundingrect">#</a></h3>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">BoundingRect</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
  width<span class="token operator">:</span> <span class="token builtin">number</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss">
</code></pre>
</div>`}}))}export{R as default};
