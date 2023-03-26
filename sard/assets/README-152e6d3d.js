import{c as P,j as e,a as s,r as B,F as o,R as n}from"./index-be529937.js";import{D as c}from"./Demo-af4ebbee.js";import{S as D}from"./index-ba4a254e.js";import"./index.es-58ca08bc.js";const b=(a,t)=>{const p=Math.PI*2*t;return a/100*p+" "+p};function u(a){const{className:t,style:p,children:h,percent:y=0,color:f,trackColor:C,size:i,thickness:l=4,...F}=a,r=50-l/2,E=P("s-progress-circle",t),v={width:i,height:i,...p},w={stroke:C,strokeWidth:l,r},x={stroke:f,strokeDasharray:b(y,r),strokeWidth:l,r};return e("div",{...F,className:E,style:v,children:[e("svg",{viewBox:"0 0 100 100",className:"s-progress-circle-graph",children:[s("circle",{cx:"50",cy:"50",fill:"none",className:"s-progress-circle-track",style:w}),s("circle",{cx:"50",cy:"50",fill:"none",className:"s-progress-circle-trail",style:x})]}),h]})}function k(){const[a,t]=B.useState(50);return e(o,{children:[s(D,{value:a,max:100,min:0,onChange:t,style:{marginBottom:10}}),e(u,{percent:a,children:[a,"%"]})]})}const j={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressCircle<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>percent<span class="token punctuation">,</span> setPercent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span>
        <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setPercent<span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressCircle</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span><span class="token plain-text">%</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ProgressCircle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function d(){return s(o,{children:s(u,{percent:50,thickness:10,children:"50%"})})}const A={doc:`<h3>粗细</h3>
<p>相对于当前圆环尺寸的百分比</p>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressCircle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressCircle</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">thickness</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        50%
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ProgressCircle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function g(){return s(o,{children:s(u,{percent:50,trackColor:"fuchsia",color:"orange",children:"50%"})})}const S={doc:`<h3>颜色</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressCircle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressCircle</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">trackColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fuchsia<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        50%
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ProgressCircle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function m(){return s(o,{children:s(u,{percent:50,size:"150px",children:"50%"})})}const N={doc:`<h3>尺寸</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressCircle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressCircle</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        50%
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ProgressCircle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};k.doc=j;d.doc=A;g.doc=S;m.doc=N;function q(){return n.createElement("div",{className:"doc-content"},n.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="progresscircle-huan-xing-jin-du-tiao">ProgressCircle 环形进度条<a class="doc-anchor" href="#progresscircle-huan-xing-jin-du-tiao">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>以环形的方式展示当前进度。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressCircle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),n.createElement("section",{className:"doc-section"},n.createElement(c,null,k),n.createElement(c,null,d),n.createElement(c,null,g),n.createElement(c,null,m)),n.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="progresscircleprops">ProgressCircleProps<a class="doc-anchor" href="#progresscircleprops">#</a></h3>
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
<td>children</td>
<td>用于放置进度信息</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>percent</td>
<td>当前进度</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>color</td>
<td>进度条进度部分颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>trackColor</td>
<td>进度条轨道颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>圆环尺寸</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>thickness</td>
<td>进度条粗细，相对于当前圆环尺寸的百分比</td>
<td>string | number</td>
<td>4</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-progress-circle-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">--s-progress-circle-track-stroke</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-progress-circle-trail-stroke</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-progress-circle-trail-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-duration-slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{q as default};
