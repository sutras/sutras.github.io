import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Pagination分页">Pagination 分页<a class="doc-anchor" href="#Pagination分页">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>用于分割长列表，每次加载一页数据。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Pagination <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>设置 <code>total</code> 属性后便会渲染出页码。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Pagination <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">100</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>current<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setCurrent<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="显示省略号">显示省略号<a class="doc-anchor" href="#显示省略号">#</a></h3>
<p>默认点击省略号会向前或向后 5 页。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Pagination <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">100</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">ellipsis</span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="简单分页">简单分页<a class="doc-anchor" href="#简单分页">#</a></h3>
<p>简单分页不显示页码按钮。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Pagination <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">43</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>simple<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义">自定义<a class="doc-anchor" href="#自定义">#</a></h3>
<p>自定义页码按钮或前后按钮内容。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon<span class="token punctuation">,</span> Pagination <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span>
      <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">100</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">prev</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">next</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">page</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=></span>
        page <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>emoji-smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token operator">:</span> page
      <span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="PaginationProps">PaginationProps<a class="doc-anchor" href="#PaginationProps">#</a></h3>
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
<td>onChange</td>
<td>页码改变时触发</td>
<td>(page: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>pageCount</td>
<td>总页数，默认自动计算</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>pageButtonCount</td>
<td>显示的页码按钮个数</td>
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
<td>multiCount</td>
<td>点击省略号跳转的页数</td>
<td>number</td>
<td>5</td>
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
<td>自定义页码按钮内容</td>
<td>(page: number) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-pagination-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-pagination-item-height</span></span><span class="token punctuation">:</span> 40px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-pagination-item-min-width</span></span><span class="token punctuation">:</span> 40px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-pagination-item-padding-x</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-pagination-item-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-pagination-item-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-pagination-item-active-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-active-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-pagination-item-current-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-pagination-item-current-border-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-pagination-item-current-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-pagination-ratio-height</span></span><span class="token punctuation">:</span> 40px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-pagination-ratio-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-pagination-item-active-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-active-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
