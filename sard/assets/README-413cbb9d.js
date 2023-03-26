import{r as k,j as r,F as p,a as s,B as o,V as e,R as n}from"./index-be529937.js";import{D as t}from"./Demo-af4ebbee.js";import"./index.es-58ca08bc.js";function u(){const[a,c]=k.useState(!1);return r(p,{children:[s(o,{onClick:()=>c(!0),children:"图片预览"}),s(e,{visible:a,onVisible:c,images:[new URL("/sard/pic1.jpg",self.location).href,new URL("/sard/pic2.jpg",self.location).href,new URL("/sard/pic3.jpg",self.location).href]})]})}const d={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePreview<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">图片预览</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ImagePreview</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
        <span class="token attr-name">images</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic1.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
          <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic2.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
          <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic3.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function l(){return s(p,{children:s(o,{onClick:()=>{e.show({images:[new URL("/sard/pic1.jpg",self.location).href,new URL("/sard/pic2.jpg",self.location).href,new URL("/sard/pic3.jpg",self.location).href]})},children:"图片预览"})})}const g={doc:`<h3>命令式</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePreview<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    ImagePreview<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic1.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic2.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic3.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">图片预览</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function i(){return s(p,{children:s(o,{onClick:()=>{e.show({images:[new URL("/sard/pic1.jpg",self.location).href,new URL("/sard/pic2.jpg",self.location).href,new URL("/sard/pic3.jpg",self.location).href],defaultIndex:2})},children:"图片预览"})})}const h={doc:`<h3>默认下标</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePreview<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    ImagePreview<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic1.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic2.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic3.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">defaultIndex</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">图片预览</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};u.doc=d;l.doc=g;i.doc=h;function f(){return n.createElement("div",{className:"doc-content"},n.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="imagepreview-tu-pian-yu-lan">ImagePreview 图片预览<a class="doc-anchor" href="#imagepreview-tu-pian-yu-lan">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>图片放大预览，支持多张图片滑动切换。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePreview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),n.createElement("section",{className:"doc-section"},n.createElement(t,null,u),n.createElement(t,null,l),n.createElement(t,null,i)),n.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="imagepreviewprops">ImagePreviewProps<a class="doc-anchor" href="#imagepreviewprops">#</a></h3>
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
<td>images</td>
<td>图片地址列表</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>defaultIndex</td>
<td>默认展示的图片的下标</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>visible</td>
<td>是否可见</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>defaultVisible</td>
<td>是否默认可见</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>onVisible</td>
<td>显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>popupProps</td>
<td><code>Popup</code> 组件的 <code>props</code></td>
<td>PopupProps</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="imagepreviewref">ImagePreviewRef<a class="doc-anchor" href="#imagepreviewref">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>show</td>
<td>显示图片预览</td>
<td>(props: ImagePreviewOptions) =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="imagepreviewoptions">ImagePreviewOptions<a class="doc-anchor" href="#imagepreviewoptions">#</a></h3>
<p><code>ImagePreviewOptions</code> 继承 <code>ImagePreviewProps</code>，并有以下额外属性：</p>
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
<td>id</td>
<td>代理组件的 id，用于命令式操作指定代理；默认会动态生成一个代理，隐藏时会进行销毁</td>
<td>string</td>
<td>'imagePreview'</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="imagepreviewagentprops">ImagePreviewAgentProps<a class="doc-anchor" href="#imagepreviewagentprops">#</a></h3>
<p><code>ImagePreviewAgentProps</code> 继承 <code>ImagePreviewProps</code>，并有以下额外属性：</p>
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
<td>id</td>
<td>组件 id</td>
<td>string</td>
<td>'imagePreview'</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-image-preview-header-padding-y</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">--s-image-preview-header-padding-x</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">--s-image-preview-header-text-shadow</span><span class="token punctuation">:</span> 1px 1px 3px <span class="token function">var</span><span class="token punctuation">(</span>--s-black<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-image-preview-header-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-image-preview-header-opacity</span><span class="token punctuation">:</span> 0.85<span class="token punctuation">;</span>
  <span class="token property">--s-image-preview-header-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-image-preview-counter-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-image-preview-close-padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">--s-image-preview-close-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-image-preview-mask-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-mask-illegible<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{f as default};
