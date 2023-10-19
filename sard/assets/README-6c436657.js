import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="NumberKeyboard数字键盘">NumberKeyboard 数字键盘<a class="doc-anchor" href="#NumberKeyboard数字键盘">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>虚拟数字键盘，用于输入支付密码或验证码等场景。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NumberKeyboard <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="默认键盘">默认键盘<a class="doc-anchor" href="#默认键盘">#</a></h3>
<p>展示 0-9 的数字按键和删除按键。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NumberKeyboard<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span>
      <span class="token attr-name">onInput</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>Toast<span class="token punctuation">.</span>show<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onDelete</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Delete'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="小数点键盘">小数点键盘<a class="doc-anchor" href="#小数点键盘">#</a></h3>
<p>使用 <code>extraKey</code> 属性配置额外键为小数点。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NumberKeyboard<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span>
      <span class="token attr-name">extraKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.<span class="token punctuation">"</span></span>
      <span class="token attr-name">onInput</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>Toast<span class="token punctuation">.</span>show<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onDelete</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Delete'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="身份证键盘">身份证键盘<a class="doc-anchor" href="#身份证键盘">#</a></h3>
<p>身份证号码除了 0-9 外，还由 X 组成。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NumberKeyboard<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span>
      <span class="token attr-name">extraKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X<span class="token punctuation">"</span></span>
      <span class="token attr-name">onInput</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>Toast<span class="token punctuation">.</span>show<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onDelete</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Delete'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="随机数字键盘">随机数字键盘<a class="doc-anchor" href="#随机数字键盘">#</a></h3>
<p>设置 <code>random</code> 属性可以打乱数字。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NumberKeyboard<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span>
      <span class="token attr-name">random</span>
      <span class="token attr-name">onInput</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>Toast<span class="token punctuation">.</span>show<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onDelete</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'Delete'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="配合密码输入框使用">配合密码输入框使用<a class="doc-anchor" href="#配合密码输入框使用">#</a></h3>
<p><code>NumberKeyboard</code> 搭配 <code>PasswordInput</code> 适用于安全等级较高的场景。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NumberKeyboard<span class="token punctuation">,</span> PasswordInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> padding<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordInput</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>underline<span class="token punctuation">"</span></span>
          <span class="token attr-name">plainText</span>
          <span class="token attr-name">custom</span>
          <span class="token attr-name">focused</span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span>
        <span class="token attr-name">onInput</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>value <span class="token operator">+</span> key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onDelete</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="NumberKeyboardProps">NumberKeyboardProps<a class="doc-anchor" href="#NumberKeyboardProps">#</a></h3>
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
<td>onInput</td>
<td>可输入按键点击时触发</td>
<td>(key: string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onDelete</td>
<td>点击删除按钮时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>extraKey</td>
<td>自定义额外键的值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>random</td>
<td>是否打乱按键</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-number-keyboard-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-gray-200</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-number-keyboard-body-padding-x</span></span><span class="token punctuation">:</span> 6px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-body-padding-y</span></span><span class="token punctuation">:</span> 6px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-number-keyboard-key-gap</span></span><span class="token punctuation">:</span> 6px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-key-height</span></span><span class="token punctuation">:</span> 48px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-key-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-key-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-2xl</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-key-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-body-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-key-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-key-active-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-gray-200</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-gray-800</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-key-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-key-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-gray-700</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-number-keyboard-key-active-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-gray-600</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
