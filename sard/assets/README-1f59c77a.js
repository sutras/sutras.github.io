import{R as n}from"./index-69dd4e27.js";import{u as s}from"./useCodeTool-595109b3.js";function p(){return s(),n.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="IndexBar索引栏">IndexBar 索引栏<a class="doc-anchor" href="#IndexBar索引栏">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>用于列表分类展示和索引定位。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> IndexBar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>点击索引栏时，会自动跳转到对应的锚点位置。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useRef <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> IndexBar<span class="token punctuation">,</span> IndexBarRef <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> indexList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'A'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'安徽省'</span><span class="token punctuation">,</span> <span class="token string">'澳门特别行政区'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'B'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'北京市'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'C'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'重庆市'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'F'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'福建省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'G'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'甘肃省'</span><span class="token punctuation">,</span> <span class="token string">'广东省'</span><span class="token punctuation">,</span> <span class="token string">'广西壮族自治区'</span><span class="token punctuation">,</span> <span class="token string">'贵州省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'H'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'海南省'</span><span class="token punctuation">,</span> <span class="token string">'河北省'</span><span class="token punctuation">,</span> <span class="token string">'河南省'</span><span class="token punctuation">,</span> <span class="token string">'黑龙江省'</span><span class="token punctuation">,</span> <span class="token string">'湖北省'</span><span class="token punctuation">,</span> <span class="token string">'湖南省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'J'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'吉林省'</span><span class="token punctuation">,</span> <span class="token string">'江苏省'</span><span class="token punctuation">,</span> <span class="token string">'江西省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'L'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'辽宁省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'N'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'内蒙古自治区'</span><span class="token punctuation">,</span> <span class="token string">'宁夏回族自治区'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'Q'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'青海省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'S'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'山东省'</span><span class="token punctuation">,</span> <span class="token string">'山西省'</span><span class="token punctuation">,</span> <span class="token string">'陕西省'</span><span class="token punctuation">,</span> <span class="token string">'上海市'</span><span class="token punctuation">,</span> <span class="token string">'四川省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'T'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'台湾省'</span><span class="token punctuation">,</span> <span class="token string">'天津市'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'X'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'西藏自治区'</span><span class="token punctuation">,</span> <span class="token string">'香港特别行政区'</span><span class="token punctuation">,</span> <span class="token string">'新疆维吾尔自治区'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'Y'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'云南省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      anchor<span class="token operator">:</span> <span class="token string">'Z'</span><span class="token punctuation">,</span>
      provinces<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'浙江省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

  <span class="token keyword">const</span> indexBarRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>IndexBarRef<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IndexBar</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>indexBarRef<span class="token punctuation">&#125;</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> height<span class="token operator">:</span> <span class="token number">320</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span>indexList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IndexBar.Item</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>anchor<span class="token punctuation">&#125;</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>anchor<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>provinces<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>province<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>province<span class="token punctuation">&#125;</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>province<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
              <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">IndexBar.Item</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">IndexBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginTop<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollTo G<span class="token punctuation">"</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> indexBarRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token string">'G'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="IndexBarProps">IndexBarProps<a class="doc-anchor" href="#IndexBarProps">#</a></h3>
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
<td>defaultActiveKey</td>
<td>初始化时当前索引项的 <code>key</code></td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>当前索引项变化时触发</td>
<td>(key: number | string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>initialScroll</td>
<td>是否在初始化时定位当前索引项</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>anchorClass</td>
<td>索引项锚点元素的类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>anchorStyle</td>
<td>索引项锚点元素的样式</td>
<td>React.CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>threshold</td>
<td>滚动监听节流阈值</td>
<td>number</td>
<td>150</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="IndexBarRef">IndexBarRef<a class="doc-anchor" href="#IndexBarRef">#</a></h3>
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
<td>scrollTo</td>
<td>定位到指定 <code>key</code> 的索引项</td>
<td>(key: number | string) =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="IndexBarItemProps">IndexBarItemProps<a class="doc-anchor" href="#IndexBarItemProps">#</a></h3>
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
<td>索引项的标题</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>key</td>
<td>对应 <code>activeKey</code></td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>anchorClass</td>
<td>索引项锚点元素的类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>anchorStyle</td>
<td>索引项锚点元素的样式</td>
<td>React.CSSProperties</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-index-bar-anchor-padding</span></span><span class="token punctuation">:</span> 0 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-anchor-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-anchor-line-height</span></span><span class="token punctuation">:</span> 32px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-anchor-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-anchor-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-body-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-index-bar-nav-wrapper-right</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-index-bar-nav-padding</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-nav-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-body-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-index-bar-nav-item-font-size</span></span><span class="token punctuation">:</span> 12px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-nav-item-size</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-nav-item-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-body-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-nav-item-active-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-nav-item-active-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-index-bar-hint-width</span></span><span class="token punctuation">:</span> 50px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-hint-height</span></span><span class="token punctuation">:</span> 50px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-hint-right</span></span><span class="token punctuation">:</span> 36px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-hint-border-radius</span></span><span class="token punctuation">:</span> 100px 100px 0 100px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-hint-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-mask</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-index-bar-hint-text-font-size</span></span><span class="token punctuation">:</span> 24px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-hint-text-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-index-bar-anchor-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-anchor-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-body-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-nav-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-body-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-index-bar-nav-item-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-body-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
