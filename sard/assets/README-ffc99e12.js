import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function t(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Card卡片">Card 卡片<a class="doc-anchor" href="#Card卡片">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>以矩形的形式呈现相关信息或内容，包含标题、内容和相关元素。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Card <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>展示带标题和内容的卡片。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Card <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>朝天子·咏喇叭<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      喇叭，唢呐，曲儿小腔儿大。官船来往乱如麻，全仗你抬声价。
      军听了军愁，民听了民怕。哪里去辨甚么真共假？
      眼见的吹翻了这家，吹伤了那家，只吹的水尽鹅飞罢！
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>设置 <code>extra</code> 属性可以在标题右边放置额外内容。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Card <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>朝天子·咏喇叭<span class="token punctuation">"</span></span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>王磐〔明代〕<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      喇叭，唢呐，曲儿小腔儿大。官船来往乱如麻，全仗你抬声价。
      军听了军愁，民听了民怕。哪里去辨甚么真共假？
      眼见的吹翻了这家，吹伤了那家，只吹的水尽鹅飞罢！
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="只有主体">只有主体<a class="doc-anchor" href="#只有主体">#</a></h3>
<p>如果不设置标题和额外内容，则不会渲染头部。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Card <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      喇叭，唢呐，曲儿小腔儿大。官船来往乱如麻，全仗你抬声价。
      军听了军愁，民听了民怕。哪里去辨甚么真共假？
      眼见的吹翻了这家，吹伤了那家，只吹的水尽鹅飞罢！
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="底部">底部<a class="doc-anchor" href="#底部">#</a></h3>
<p>可以设置 <code>footer</code> 属性在主体下面放置内容。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Card <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>朝天子·咏喇叭<span class="token punctuation">"</span></span>
      <span class="token attr-name">footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>王磐（约1470年～1530年）称为南曲之冠。明代散曲作家、画家，亦通医学。<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      喇叭，唢呐，曲儿小腔儿大。官船来往乱如麻，全仗你抬声价。
      军听了军愁，民听了民怕。哪里去辨甚么真共假？
      眼见的吹翻了这家，吹伤了那家，只吹的水尽鹅飞罢！
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="CardProps">CardProps<a class="doc-anchor" href="#CardProps">#</a></h3>
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
<td>title</td>
<td>头部左边内容</td>
<td>ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>extra</td>
<td>头部右边内容</td>
<td>ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>children</td>
<td>主体内容</td>
<td>ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>底部内容</td>
<td>ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>headerStyle</td>
<td>头部样式</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>headerClass</td>
<td>头部类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>bodyStyle</td>
<td>主体样式</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>bodyClass</td>
<td>主体类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>footerStyle</td>
<td>底部样式</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>footerClass</td>
<td>底部类名</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-card-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-card-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-card-header-padding-y</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-card-header-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-card-title-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-card-title-line-height</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-card-title-font-size</span> <span class="token operator">*</span> <span class="token variable">$sar-leading-normal</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-card-body-padding-y</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-card-body-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-card-footer-padding-y</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-card-footer-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-card-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{t as default};
