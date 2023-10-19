import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function u(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Loading加载">Loading 加载<a class="doc-anchor" href="#Loading加载">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>表示处理中的状态。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Loading <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>显示一个不停旋转的圆。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Loading <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="加载尺寸">加载尺寸<a class="doc-anchor" href="#加载尺寸">#</a></h3>
<p>使用 <code>size</code> 属性设置任意大小的尺寸。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Loading <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">36</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>使用 <code>color</code> 属性设置任意颜色。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Loading <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomato<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="LoadingProps">LoadingProps<a class="doc-anchor" href="#LoadingProps">#</a></h3>
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
<td>name</td>
<td>加载类型名称</td>
<td>'loading'</td>
<td>'loading'</td>
</tr>
<tr>
<td>color</td>
<td>加载颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>图标尺寸</td>
<td>number</td>
<td>20</td>
</tr>
<tr>
<td>duration</td>
<td>旋转一圈的时间，单位毫秒</td>
<td>number</td>
<td>800</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-loading-duration</span></span><span class="token punctuation">:</span> 1s <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{u as default};
