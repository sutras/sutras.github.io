import{R as n}from"./index-69dd4e27.js";import{u as s}from"./useCodeTool-595109b3.js";function p(){return s(),n.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Popover气泡弹出框">Popover 气泡弹出框<a class="doc-anchor" href="#Popover气泡弹出框">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>弹出式的气泡菜单。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Popover <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>在 <code>reference</code> 触发 <code>onClick</code> 事件时会显示气泡弹出框。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Popover<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popover</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项1'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项2'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项3'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">reference</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">基础使用</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> text <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="暗黑模式">暗黑模式<a class="doc-anchor" href="#暗黑模式">#</a></h3>
<p>设置 <code>theme=&quot;dark&quot;</code> 会显示为暗黑模式。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Popover<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popover</span></span>
      <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项1'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项2'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项3'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">reference</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">自定义颜色</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> text <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="展示图标">展示图标<a class="doc-anchor" href="#展示图标">#</a></h3>
<p>通过 <code>options</code> 属性的<code>iconProps</code> 属性配置在左边展示的图标。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Popover<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popover</span></span>
      <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项1'</span><span class="token punctuation">,</span>
          iconProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'upc-scan'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项2'</span><span class="token punctuation">,</span>
          iconProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'camera'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项3'</span><span class="token punctuation">,</span>
          iconProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'bell'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">reference</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">展示图标</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> text <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="禁用选项">禁用选项<a class="doc-anchor" href="#禁用选项">#</a></h3>
<p>禁用的选项无法点击。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Popover<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popover</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项1'</span><span class="token punctuation">,</span>
          disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项2'</span><span class="token punctuation">,</span>
          disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项3'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">reference</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">禁用选项</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> text <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="水平排列">水平排列<a class="doc-anchor" href="#水平排列">#</a></h3>
<p>配置 <code>direction=&quot;horizontal&quot;</code> 可以水平排列菜单。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Popover<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popover</span></span>
      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项1'</span><span class="token punctuation">,</span>
          iconProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'upc-scan'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项2'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          text<span class="token operator">:</span> <span class="token string">'选项3'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">reference</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">水平排列</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> text <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义内容">自定义内容<a class="doc-anchor" href="#自定义内容">#</a></h3>
<p>弹出框可以放置任何内容，而不仅仅是菜单。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Mesh<span class="token punctuation">,</span> Popover<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popover</span></span>
      <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>
      <span class="token attr-name">reference</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">自定义内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> width<span class="token operator">:</span> <span class="token number">280</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh.Item</span></span>
              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>index<span class="token punctuation">&#125;</span></span>
              <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">选项</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">&#125;</span></span>
              <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">'image'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">选项</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
                <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
              <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mesh</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popover</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="弹出位置">弹出位置<a class="doc-anchor" href="#弹出位置">#</a></h3>
<p>气泡弹出框会尽量在视窗中匹配各个位置以便可以完整展示，默认从底部展示</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Mesh<span class="token punctuation">,</span> Popover<span class="token punctuation">,</span> PopoverPlacement <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>currentPlacement<span class="token punctuation">,</span> setPlacement<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>PopoverPlacement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'bottom'</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handlePlacement</span> <span class="token operator">=</span> <span class="token punctuation">(</span>placement<span class="token operator">:</span> PopoverPlacement<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setPlacement</span><span class="token punctuation">(</span>placement<span class="token punctuation">)</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">renderPlacementButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span>placement<span class="token operator">:</span> PopoverPlacement<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh.Item</span></span>
        <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>placement<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handlePlacement</span><span class="token punctuation">(</span>placement<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
          fontWeight<span class="token operator">:</span> placement <span class="token operator">===</span> currentPlacement <span class="token operator">?</span> <span class="token string">'bold'</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span>placement
          <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">=></span> word<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mesh.Item</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popover</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">placement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>currentPlacement<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
          <span class="token punctuation">&#123;</span>
            text<span class="token operator">:</span> <span class="token string">'选项1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#123;</span>
            text<span class="token operator">:</span> <span class="token string">'选项2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#123;</span>
            text<span class="token operator">:</span> <span class="token string">'选项3'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">reference</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
              width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
              height<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
              marginTop<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
              marginBottom<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
              marginLeft<span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
              marginRight<span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
              backgroundColor<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginLeft<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> marginRight<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">3</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">clickable</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'top-start'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'top'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'top-end'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mesh</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
          display<span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
          flexDirection<span class="token operator">:</span> <span class="token string">'row'</span><span class="token punctuation">,</span>
          justifyContent<span class="token operator">:</span> <span class="token string">'space-between'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> width<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'left-start'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'left'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'left-end'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mesh</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> width<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'right-start'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'right'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'right-end'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mesh</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginLeft<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> marginRight<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">3</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">clickable</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'bottom-start'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'bottom'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token function">renderPlacementButton</span><span class="token punctuation">(</span><span class="token string">'bottom-end'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mesh</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="PopoverProps">PopoverProps<a class="doc-anchor" href="#PopoverProps">#</a></h3>
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
<td>options</td>
<td>菜单选项列表</td>
<td>PopoverOption[]</td>
<td>[]</td>
</tr>
<tr>
<td>reference</td>
<td>触发气泡弹出框显示的元素</td>
<td>React.ReactElement</td>
<td>-</td>
</tr>
<tr>
<td>refGap</td>
<td>气泡弹出框与<code>reference</code>元素的间距</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>viewportGap</td>
<td>气泡弹出框距与视窗的间距</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>placement</td>
<td>弹出位置</td>
<td>PopoverPlacement</td>
<td>'bottom'</td>
</tr>
<tr>
<td>direction</td>
<td>菜单选项排列方向</td>
<td>'vertical' | 'horizontal'</td>
<td>'vertical'</td>
</tr>
<tr>
<td>theme</td>
<td>主题风格</td>
<td>'dark' | 'light'</td>
<td>'light'</td>
</tr>
<tr>
<td>zIndex</td>
<td>弹出框层级</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>onSelect</td>
<td>点击选项时触发</td>
<td>(option: PopoverOption) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>visible</td>
<td>是否显示气泡弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>defaultVisible</td>
<td>默认是否显示气泡弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>onVisible</td>
<td>气泡弹出框显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>气泡弹出框显隐持续的时间</td>
<td>number</td>
<td>250</td>
</tr>
<tr>
<td>mask</td>
<td>是否显示遮罩</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>transparent</td>
<td>遮罩是否透明</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>maskClass</td>
<td>遮罩类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>maskStyle</td>
<td>遮罩样式</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>onMaskClick</td>
<td>点击遮罩触发</td>
<td>(event: ITouchEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onEnter</td>
<td>准备显示时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onEntering</td>
<td>开始显示时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onEntered</td>
<td>完全显示时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onExit</td>
<td>准备隐藏时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onExiting</td>
<td>开始隐藏时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onExited</td>
<td>完全隐藏时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="PopoverOption">PopoverOption<a class="doc-anchor" href="#PopoverOption">#</a></h3>
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
<td>text</td>
<td>选项文本</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用选项</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>iconProps</td>
<td>选项左侧的图标</td>
<td>IconProps</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="PopoverPlacement">PopoverPlacement<a class="doc-anchor" href="#PopoverPlacement">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">type</span> <span class="token class-name">PopoverPlacement</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">'top'</span>
  <span class="token operator">|</span> <span class="token string">'top-start'</span>
  <span class="token operator">|</span> <span class="token string">'top-end'</span>
  <span class="token operator">|</span> <span class="token string">'right'</span>
  <span class="token operator">|</span> <span class="token string">'right-start'</span>
  <span class="token operator">|</span> <span class="token string">'right-end'</span>
  <span class="token operator">|</span> <span class="token string">'bottom'</span>
  <span class="token operator">|</span> <span class="token string">'bottom-start'</span>
  <span class="token operator">|</span> <span class="token string">'bottom-end'</span>
  <span class="token operator">|</span> <span class="token string">'left'</span>
  <span class="token operator">|</span> <span class="token string">'left-start'</span>
  <span class="token operator">|</span> <span class="token string">'left-end'</span>
</code></pre></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-popover-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popover-box-shadow</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-shadow-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popover-min-width</span></span><span class="token punctuation">:</span> 120px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popover-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-popover-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-gray-800</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popover-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-popover-arrow-size</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
