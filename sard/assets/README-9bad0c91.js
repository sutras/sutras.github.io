import{c as o,a as s,F as p,j as C,R as n}from"./index-be529937.js";import{D as t}from"./Demo-af4ebbee.js";import"./index.es-58ca08bc.js";const a=k=>{const{className:i,style:d,children:g,percent:h=0,color:m,trackColor:y,striped:f,animated:b,thickness:E,...w}=k,x=o("s-progress-bar",{"s-progress-bar-striped":f,"s-progress-bar-animated":b},i),B={backgroundColor:y,height:E,...d},v=o("s-progress-bar-trail"),F={width:`${h}%`,backgroundColor:m};return s("div",{...w,className:x,style:B,children:s("div",{className:v,style:F,children:g})})};function c(){return s(p,{children:s(a,{percent:50})})}const D={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressBar</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function e(){return s(p,{children:s(a,{percent:50,thickness:"20px"})})}const P={doc:`<h3>粗细</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressBar</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">thickness</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20px<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function u(){return s(p,{children:s(a,{percent:50,trackColor:"fuchsia",color:"orange"})})}const A={doc:`<h3>颜色</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressBar</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">trackColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fuchsia<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function l(){return C(p,{children:[s(a,{percent:50,striped:!0,thickness:"10px"}),s("br",{}),s(a,{percent:50,striped:!0,thickness:"10px",animated:!0})]})}const j={doc:`<h3>条纹进度条</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressBar</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">striped</span> <span class="token attr-name">thickness</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10px<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressBar</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">striped</span> <span class="token attr-name">thickness</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10px<span class="token punctuation">"</span></span> <span class="token attr-name">animated</span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function r(){return s(p,{children:s(a,{percent:50,thickness:"16px",children:"50%"})})}const N={doc:`<h3>插槽</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProgressBar</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">thickness</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>16px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        50%
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ProgressBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};c.doc=D;e.doc=P;u.doc=A;l.doc=j;r.doc=N;function $(){return n.createElement("div",{className:"doc-content"},n.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="progressbar-tiao-xing-jin-du-tiao">ProgressBar 条形进度条<a class="doc-anchor" href="#progressbar-tiao-xing-jin-du-tiao">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>以横条的方式展示当前进度。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> ProgressBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),n.createElement("section",{className:"doc-section"},n.createElement(t,null,c),n.createElement(t,null,e),n.createElement(t,null,u),n.createElement(t,null,l),n.createElement(t,null,r)),n.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="progressbarprops">ProgressBarProps<a class="doc-anchor" href="#progressbarprops">#</a></h3>
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
<td>striped</td>
<td>是否显示条纹</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>animated</td>
<td>是否开启条纹动画</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>thickness</td>
<td>进度条粗细</td>
<td>string | number</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-progress-bar-height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">--s-progress-bar-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-rounded-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-progress-bar-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-progress-bar-trail-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-progress-bar-trail-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-progress-bar-trail-font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">--s-progress-bar-trail-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-duration-slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-progress-bar-trail-striped-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{$ as default};
