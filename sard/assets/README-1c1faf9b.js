import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Search搜索">Search 搜索<a class="doc-anchor" href="#Search搜索">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>用于搜索场景的输入框组件。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Search <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>value</code> 和 <code>onChange</code> 使其变为受控组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Search <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入关键词<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="搜索按钮">搜索按钮<a class="doc-anchor" href="#搜索按钮">#</a></h3>
<p>使用 <code>search</code> 属性可以添加右侧的按钮，在按钮点击时触发 <code>onSearch</code> 事件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Search<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入关键词<span class="token punctuation">"</span></span> <span class="token attr-name">search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>搜索<span class="token punctuation">"</span></span> <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>Toast<span class="token punctuation">.</span>show<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="取消按钮">取消按钮<a class="doc-anchor" href="#取消按钮">#</a></h3>
<p>使用 <code>cancel</code> 属性可以添加右侧的按钮，在按钮点击时触发 <code>onCancel</code> 事件，并在点击按钮后清空输入框。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Search<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入关键词<span class="token punctuation">"</span></span>
      <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
      <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'取消'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="形状">形状<a class="doc-anchor" href="#形状">#</a></h3>
<p>设置 <code>shape=&quot;round&quot;</code> 可以将输入框变为圆形。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Search <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入关键词<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="对齐">对齐<a class="doc-anchor" href="#对齐">#</a></h3>
<p>设置 <code>align=&quot;center&quot;</code> 可以将输入内容居中。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Search <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入关键词<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="背景色">背景色<a class="doc-anchor" href="#背景色">#</a></h3>
<p>通过 <code>background</code> 属性可以设置搜索框外部的背景色。
通过 <code>inputBackground</code> 属性可以设置搜索框内部的背景色。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Search <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入关键词<span class="token punctuation">"</span></span>
      <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomato<span class="token punctuation">"</span></span>
      <span class="token attr-name">inputBackground</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span>
      <span class="token attr-name">inputColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#000<span class="token punctuation">"</span></span>
      <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="只读和禁用">只读和禁用<a class="doc-anchor" href="#只读和禁用">#</a></h3>
<p>只读或禁用后不可输入。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Search<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>只读<span class="token punctuation">"</span></span> <span class="token attr-name">readOnly</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>禁用<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="插槽">插槽<a class="doc-anchor" href="#插槽">#</a></h3>
<p>通过 <code>prepend</code>、<code>append</code>、<code>inputPrepend</code>、<code>inputAppend</code> 属性可以自定义内容。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Search<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入关键词<span class="token punctuation">"</span></span>
        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span>
        <span class="token attr-name">prepend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
            <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginRight<span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
              family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'upc-scan'</span><span class="token punctuation">,</span>
              size<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">inputPrepend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>
            <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
            <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
              name<span class="token operator">:</span> <span class="token string">'caret-down'</span><span class="token punctuation">,</span>
              size<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">inputAppend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>
            <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
            <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
              family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'camera'</span><span class="token punctuation">,</span>
              size<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入关键词<span class="token punctuation">"</span></span>
        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span>
        <span class="token attr-name">prepend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
            <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginRight<span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
              name<span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
              size<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">append</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
            <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginLeft<span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
              family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'list-task'</span><span class="token punctuation">,</span>
              size<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="SearchProps">SearchProps<a class="doc-anchor" href="#SearchProps">#</a></h3>
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
<td>value</td>
<td>输入框值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>输入框默认值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>输入框值变化时触发</td>
<td>(value: string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位符内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>shape</td>
<td>输入框形状</td>
<td>'round' | 'square'</td>
<td>'square'</td>
</tr>
<tr>
<td>background</td>
<td>搜索框外部的背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>inputBackground</td>
<td>搜索框内部的背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readOnly</td>
<td>只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>输入框文字对齐</td>
<td>'left' | 'center' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>cancel</td>
<td>定义取消按钮</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>onCancel</td>
<td>点击取消按钮时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>search</td>
<td>定义搜索按钮</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>onSearch</td>
<td>点击搜索按钮时触发</td>
<td>(value: string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>prepend</td>
<td>搜索框前置插槽</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>append</td>
<td>搜索框后置插槽</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>inputPrepend</td>
<td>输入框前置插槽</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>inputAppend</td>
<td>输入框后置插槽</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-search-padding-x</span></span><span class="token punctuation">:</span> 12px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-search-padding-y</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-search-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-search-input-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-body-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-search-input-disabled-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-disabled-shallow-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-search-icon-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-quaternary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-search-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-search-input-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-body-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-search-input-disabled-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-disabled-shallow-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-search-icon-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-quaternary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
