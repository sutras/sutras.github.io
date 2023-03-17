import{i as H,p as L,c as r,a as n,F as c,j as f,w as O,_ as G,r as J,I as g,R as p}from"./index-ba304632.js";import{D as u}from"./Demo-5a7b5c0e.js";import"./index.es-526e18cf.js";const l=o=>{const[i]=H("pagination"),{className:x,total:B=0,pageSize:F=10,current:Y,defaultCurrent:Z,pageCount:A,pageItemCount:P=5,hideOnSinglePage:S=!1,type:m="multi",ellipsis:j,prev:z,next:N,page:h,onChange:nn,...D}=o,e=(A??Math.ceil(B/F))||1,[a,I]=L(o,{defaultValuePropName:"defaultCurrent",valuePropName:"current",defaultValue:1,transform(s){return O(s,1,e)}}),[y,R]=G(a,e,P),_=()=>{a>1&&k(a-1)},q=()=>{a<e&&k(a+1)},M=s=>{k(s)},k=s=>{s!==a&&I(s)},T=()=>{const s=R-y+1;return Array(s).fill(0).map((an,d)=>{const t=d+y;return n("div",{"data-page":t,className:r("s-pagination-item",{"s-pagination-item-current":a===t}),onClick:()=>M(t),children:j&&(d===0&&t!==1||d===s-1&&t!==e)?"...":h?h(t,a===t):t},t)})},$=()=>f("div",{className:"s-pagination-ratio",children:[a,"/",e]}),V=r("s-pagination","s-pagination-"+m,x);return n(c,{children:(!S||e>1)&&f("div",{...D,className:V,children:[n("div",{className:r("s-pagination-item s-pagination-prev",{"s-pagination-item-disabled":a===1}),onClick:_,children:z??i("previous")}),m==="simple"?$():T(),n("div",{className:r("s-pagination-item s-pagination-next",{"s-pagination-item-disabled":a===e}),onClick:q,children:N??i("next")})]})})};function v(){return n(c,{children:n(l,{total:100,pageSize:10})})}const K={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span> <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function b(){const[o,i]=J.useState(1);return n(c,{children:n(l,{total:100,pageSize:10,current:o,onChange:i})})}const Q={doc:`<h3>受控的</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span>
        <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setCurrent<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function E(){return n(c,{children:n(l,{total:100,pageSize:10,ellipsis:!0})})}const U={doc:`<h3>显示省略号</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span> <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">ellipsis</span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function C(){return n(c,{children:n(l,{total:43,pageSize:10,type:"simple"})})}const W={doc:`<h3>简单分页</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">43</span><span class="token punctuation">}</span></span> <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>simple<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function w(){return n(c,{children:n(l,{total:100,pageSize:10,prev:n(g,{name:"bi-chevron-double-left"}),next:n(g,{name:"bi-chevron-double-right"}),page:o=>o===2?n(g,{name:"bi-cup-hot"}):o})})}const X={doc:`<h3>自定义</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap-icons/font/bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span>
        <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">prev</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-chevron-double-left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">next</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-chevron-double-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">page</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>page <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-cup-hot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span> <span class="token operator">:</span> page<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};v.doc=K;b.doc=Q;E.doc=U;C.doc=W;w.doc=X;function on(){return p.createElement("div",{className:"doc-content"},p.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="pagination-fen-ye">Pagination 分页<a class="doc-anchor" href="#pagination-fen-ye">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>用于分割长列表，每次加载一页数据。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),p.createElement("section",{className:"doc-section"},p.createElement(u,null,v),p.createElement(u,null,b),p.createElement(u,null,E),p.createElement(u,null,C),p.createElement(u,null,w)),p.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="paginationprops">PaginationProps<a class="doc-anchor" href="#paginationprops">#</a></h3>
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
<td>total</td>
<td>总记录数</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>pageSize</td>
<td>每页记录数</td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>current</td>
<td>当前页码</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>defaultCurrent</td>
<td>默认页码</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>pageCount</td>
<td>总页数，默认自动计算</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>pageItemCount</td>
<td>显示的页码个数</td>
<td>number</td>
<td>5</td>
</tr>
<tr>
<td>hideOnSinglePage</td>
<td>只有一页时是否隐藏分页</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>分页类型</td>
<td>'simple' | 'multi'</td>
<td>'multi'</td>
</tr>
<tr>
<td>ellipsis</td>
<td>是否显示省略号</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>prev</td>
<td>自定义上一页按钮内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>next</td>
<td>自定义下一页按钮内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>page</td>
<td>自定义页码</td>
<td>(page: number) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>页码改变时触发</td>
<td>(page: number) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-pagination-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-pagination-item-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">--s-pagination-item-min-width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">--s-pagination-item-padding-x</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">--s-pagination-item-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-pagination-item-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-pagination-item-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-pagination-item-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-active-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-pagination-item-current-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-pagination-item-current-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-pagination-item-current-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-pagination-ratio-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">--s-pagination-ratio-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-pagination-ratio-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{on as default};
