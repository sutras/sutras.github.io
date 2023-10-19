import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Tabbar标签栏">Tabbar 标签栏<a class="doc-anchor" href="#Tabbar标签栏">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>固定在页面底部的导航栏，用于切换不同的页面。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabbar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>activeKey</code> 和 <code>onChange</code> 使其变为受控组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabbar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>activeKey<span class="token punctuation">,</span> setActiveKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar</span></span> <span class="token attr-name">activeKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>activeKey<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setActiveKey<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span>
        <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'house-door-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        首页
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span> <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'cart-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        购物车
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span> <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'chat-dots-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        消息
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span> <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'person-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        我的
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义图标">自定义图标<a class="doc-anchor" href="#自定义图标">#</a></h3>
<p>使用 <code>iconProps</code> 属性设置图标。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabbar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span>
        <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>active<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
          family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> active <span class="token operator">?</span> <span class="token string">'house-door-fill'</span> <span class="token operator">:</span> <span class="token string">'house-door'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        首页
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span>
        <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>active<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
          family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> active <span class="token operator">?</span> <span class="token string">'cart-fill'</span> <span class="token operator">:</span> <span class="token string">'cart'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        购物车
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span>
        <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>active<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
          family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> active <span class="token operator">?</span> <span class="token string">'chat-dots-fill'</span> <span class="token operator">:</span> <span class="token string">'chat-dots'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        消息
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span>
        <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>active<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
          family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> active <span class="token operator">?</span> <span class="token string">'person-fill'</span> <span class="token operator">:</span> <span class="token string">'person'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        我的
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>使用 <code>color</code> 属性设置未选中标签的颜色。
使用 <code>activeColor</code> 属性设置选中标签的颜色。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabbar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">activeColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomato<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span>
        <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'house-door-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        首页
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span> <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'cart-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        购物车
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span> <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'chat-dots-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        消息
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span> <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'person-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        我的
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="徽标">徽标<a class="doc-anchor" href="#徽标">#</a></h3>
<p>使用 <code>badge</code> 属性设置徽标。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabbar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span>
        <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'house-door-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        首页
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span> <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'cart-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        购物车
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span>
        <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'chat-dots-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">badge</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> value<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        消息
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabbar.Item</span></span>
        <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'person-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">badge</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> isDot<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">'tomato'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        我的
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabbar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="TabbarProps">TabbarProps<a class="doc-anchor" href="#TabbarProps">#</a></h3>
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
<td>activeKey</td>
<td>当前选中标签的 <code>key</code> 或索引值</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>defaultActiveKey</td>
<td>默认选中标签的 <code>key</code> 或索引值</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>切换标签时触发</td>
<td>(key: number | string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>未选中标签的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>activeColor</td>
<td>选中标签的颜色</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="TabbarItemProps">TabbarItemProps<a class="doc-anchor" href="#TabbarItemProps">#</a></h3>
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
<td>key</td>
<td>对应 <code>activeKey</code></td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>React.ReactNode | ((active: boolean) =&gt; React.ReactNode)</td>
<td>-</td>
</tr>
<tr>
<td>iconProps</td>
<td>自定义图标</td>
<td>IconProps | ((active: boolean) =&gt; IconProps)</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>未选中标签的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>activeColor</td>
<td>选中标签的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>badge</td>
<td>添加徽标</td>
<td>BadgeProps</td>
<td>-</td>
</tr>
<tr>
<td>onClick</td>
<td>点击时触发</td>
<td>(event: ITouchEvent) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-tabbar-height</span></span><span class="token punctuation">:</span> 50px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabbar-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabbar-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-tabbar-item-ative-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabbar-item-icon-margin-bottom</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabbar-item-icon-font-size</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabbar-item-text-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-sm</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-tabbar-bg-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabbar-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
