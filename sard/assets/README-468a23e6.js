import{R as s}from"./index-69dd4e27.js";import{u as a}from"./useCodeTool-595109b3.js";function p(){return a(),s.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Tabs标签页">Tabs 标签页<a class="doc-anchor" href="#Tabs标签页">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>选项卡切换组件。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>activeKey</code> 和 <code>onChange</code> 使其变为受控组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>activeKey<span class="token punctuation">,</span> setActiveKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">activeKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>activeKey<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setActiveKey<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="可滚动标签栏">可滚动标签栏<a class="doc-anchor" href="#可滚动标签栏">#</a></h3>
<p>设置 <code>scrollable</code> 后标签不再平分空间，并且可以实现水平滚动。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">scrollable</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>i<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">标签</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="禁用标签">禁用标签<a class="doc-anchor" href="#禁用标签">#</a></h3>
<p>禁用的标签无法点击。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>i<span class="token punctuation">&#125;</span></span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>i <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">标签</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义线条">自定义线条<a class="doc-anchor" href="#自定义线条">#</a></h3>
<p>使用 <code>lineStyle</code> 属性设置线条样式，使用 <code>line</code> 属性可以定义线条内容。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon<span class="token punctuation">,</span> Tabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span>
      <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">lineStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
        height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        backgroundColor<span class="token operator">:</span> <span class="token string">'transparent'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">line</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>smile-line<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">20</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomato<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义标签">自定义标签<a class="doc-anchor" href="#自定义标签">#</a></h3>
<p>使用 <code>showLine</code>、<code>activeStyle</code>、<code>activeClass</code>、<code>inactiveStyle</code>、<code>inactiveClass</code> 等属性可以实现胶囊标签和卡片标签。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Badge<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Tabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">gap</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">30</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          标签2
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">5</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginLeft<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          标签3
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">isDot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginLeft<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span>
        <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
          backgroundColor<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
          borderRadius<span class="token operator">:</span> <span class="token number">9999</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">scrollable</span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> height<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>i<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">标签</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>
                i <span class="token operator">+</span> <span class="token number">1</span>
              <span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span>
        <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
          backgroundColor<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
                  height<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
                  borderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                  borderColor<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span>
                  borderStyle<span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
                  borderLeftWidth<span class="token operator">:</span> i <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                  borderTopLeftRadius<span class="token operator">:</span> i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">6</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  borderBottomLeftRadius<span class="token operator">:</span> i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">6</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  borderTopRightRadius<span class="token operator">:</span> i <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token number">6</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  borderBottomRightRadius<span class="token operator">:</span> i <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token number">6</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span>
                <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
                <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>i<span class="token punctuation">&#125;</span></span>
              <span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">标签</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="搭配Swiper使用">搭配 Swiper 使用<a class="doc-anchor" href="#搭配Swiper使用">#</a></h3>
<p><code>Tabs</code> 组件并不提供面板的功能，可以搭配 <code>Swiper</code> 或其他组件一起使用。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Swiper<span class="token punctuation">,</span> Tabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">import</span> <span class="token string">'../index.scss'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>swipeActiveKey<span class="token punctuation">,</span> setSwipeActiveKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs</span></span> <span class="token attr-name">activeKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>swipeActiveKey<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setSwipeActiveKey<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">标签3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs.Tab</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tabs</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper</span></span>
        <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">300</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token function">Number</span><span class="token punctuation">(</span>swipeActiveKey<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          <span class="token function">setSwipeActiveKey</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-tab-pane<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">内容1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-tab-pane<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">内容2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-tab-pane<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">内容3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="TabsProps">TabsProps<a class="doc-anchor" href="#TabsProps">#</a></h3>
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
<td>默认选中的标签的 <code>key</code></td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>activeKey</td>
<td>当前选中的标签的 <code>key</code></td>
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
<td>scrollable</td>
<td>是否可滚动</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>activeStyle</td>
<td>选中的标签的样式</td>
<td>React.CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>activeClass</td>
<td>选中的标签的类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>inactiveStyle</td>
<td>未选中的标签的样式</td>
<td>React.CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>inactiveClass</td>
<td>未选中的标签的类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>showLine</td>
<td>是否显示线条</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>line</td>
<td>线条插槽</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>lineStyle</td>
<td>线条样式</td>
<td>React.CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>lineClass</td>
<td>线条类名</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="TabsTabProps">TabsTabProps<a class="doc-anchor" href="#TabsTabProps">#</a></h3>
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
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>children</td>
<td>自定义标签内容</td>
<td>React.ReactNode | ((active: boolean) =&gt; React.ReactNode)</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-tabs-tab-height</span></span><span class="token punctuation">:</span> 44px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabs-tab-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabs-tab-line-height</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tabs-tab-font-size</span> <span class="token operator">*</span> <span class="token variable">$sar-leading-snug</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabs-tab-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabs-tab-active-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-tabs-tab-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-tabs-line-width</span></span><span class="token punctuation">:</span> 40px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabs-line-height</span></span><span class="token punctuation">:</span> 3px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabs-line-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-tabs-tab-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-tabs-tab-active-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-emphasis-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
