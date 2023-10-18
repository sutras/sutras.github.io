import{R as a}from"./index-69dd4e27.js";import{u as s}from"./useCodeTool-595109b3.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="NoticeBar公告栏">NoticeBar 公告栏<a class="doc-anchor" href="#NoticeBar公告栏">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>用于循环播放展示一组消息通知。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>公告栏的内容长度溢出时会自动开启滚动播放。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是一条公告！</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        这是一条很长很长很长很长很长很长很长很长很长很长的公告！
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="强制滚动">强制滚动<a class="doc-anchor" href="#强制滚动">#</a></h3>
<p>无论公告栏内容多少都会滚动。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">scrollable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>always<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是一条公告！</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">scrollable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>always<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        这是一条很长很长很长很长很长很长很长很长很长很长的公告！
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="强制不滚动">强制不滚动<a class="doc-anchor" href="#强制不滚动">#</a></h3>
<p>无论公告栏内容多少都不会滚动。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">scrollable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>never<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">这是一条公告！</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">scrollable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>never<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        这是一条很长很长很长很长很长很长很长很长很长很长的公告！
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="多行展示">多行展示<a class="doc-anchor" href="#多行展示">#</a></h3>
<p>默认文本不换行，设置 <code>wrap</code> 可以使其换行。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span><span class="token plain-text">
      这是一条很长很长很长很长很长很长很长很长很长很长的公告！
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义左边图标">自定义左边图标<a class="doc-anchor" href="#自定义左边图标">#</a></h3>
<p>可以自定义左边的图标、或者隐藏图标。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span>
        <span class="token attr-name">leftIconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'bell'</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        这是一条很长很长很长很长很长很长很长很长很长很长的公告！
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">hideLeftIcon</span><span class="token punctuation">></span></span><span class="token plain-text">
        这是一条很长很长很长很长很长很长很长很长很长很长的公告！
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">leftIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>消息: <span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        这是一条很长很长很长很长很长很长很长很长很长很长的公告！
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="可关闭的">可关闭的<a class="doc-anchor" href="#可关闭的">#</a></h3>
<p>设置 <code>closable</code> 属性可以在右边显示关闭按钮。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      这是一条很长很长很长很长很长很长很长很长很长很长的公告！
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="可链接的">可链接的<a class="doc-anchor" href="#可链接的">#</a></h3>
<p>设置 <code>linkable</code> 属性可以有右边显示箭头。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      这是一条很长很长很长很长很长很长很长很长很长很长的公告！
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义右边图标">自定义右边图标<a class="doc-anchor" href="#自定义右边图标">#</a></h3>
<p>设置 <code>rightIcon</code> 或 <code>rightIconProps</code> 可以修改右边的关闭按钮图标或者箭头图标。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span>
      <span class="token attr-name">closable</span>
      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">rightIconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">'x-circle-fill'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      这是一条很长很长很长很长很长很长很长很长很长很长的公告！
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义样式">自定义样式<a class="doc-anchor" href="#自定义样式">#</a></h3>
<p>通过 <code>color</code> 属性设置文本颜色，通过 <code>background</code> 属性设置背景色。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomato<span class="token punctuation">"</span></span> <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      这是一条很长很长很长很长很长很长很长很长很长很长的公告！
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="垂直滚动">垂直滚动<a class="doc-anchor" href="#垂直滚动">#</a></h3>
<p>搭配 <code>NoticeBar</code> 和 <code>Swipe</code> 组件，可以实现垂直滚动的效果。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NoticeBar<span class="token punctuation">,</span> Swiper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NoticeBar</span></span> <span class="token attr-name">vertical</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper</span></span>
        <span class="token attr-name">autoplay</span>
        <span class="token attr-name">vertical</span>
        <span class="token attr-name">interval</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1500</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">circular</span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
          height<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Swiper.Item</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>i<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span>
                  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
                    display<span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
                    width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
                    height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
                    flexDirection<span class="token operator">:</span> <span class="token string">'column'</span><span class="token punctuation">,</span>
                    justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
                    alignItems<span class="token operator">:</span> <span class="token string">'flex-start'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
                <span class="token punctuation">></span></span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> color<span class="token operator">:</span> <span class="token string">'black'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>
                    i <span class="token operator">+</span> <span class="token number">1</span>
                  <span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">. 这是一条公告！</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper.Item</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Swiper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NoticeBar</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="NoticeBarProps">NoticeBarProps<a class="doc-anchor" href="#NoticeBarProps">#</a></h3>
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
<td>color</td>
<td>自定义颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>自定义背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>hideLeftIcon</td>
<td>隐藏左边图标</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>leftIcon</td>
<td>自定义左边图标</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>leftIconProps</td>
<td>自定义左边图标的 <code>Props</code></td>
<td>IconProps</td>
<td>-</td>
</tr>
<tr>
<td>rightIcon</td>
<td>自定义右边图标</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>rightIconProps</td>
<td>自定义右边图标的 <code>Props</code></td>
<td>IconProps</td>
<td>-</td>
</tr>
<tr>
<td>delay</td>
<td>动画延迟时间 (s)</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>speed</td>
<td>滚动速率 (px/s)</td>
<td>number</td>
<td>50</td>
</tr>
<tr>
<td>scrollable</td>
<td>是否开启滚动播放，内容长度溢出时默认开启</td>
<td>boolean | 'auto'</td>
<td>'auto'</td>
</tr>
<tr>
<td>wrap</td>
<td>是否开启文本换行</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>closable</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onClose</td>
<td>点击关闭按钮时触发</td>
<td>(event: ITouchEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>linkable</td>
<td>是否展示右侧箭头</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onClick</td>
<td>点击公告栏时触发</td>
<td>(event: ITouchEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>visible</td>
<td>是否显示公告栏</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>defaultVisible</td>
<td>默认是否显示公告栏</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>onVisible</td>
<td>公告栏显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>vertical</td>
<td>搭配 <code>Swipe</code> 组件实现垂直滚动</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-notice-bar-min-height</span></span><span class="token punctuation">:</span> 40px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notice-bar-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notice-bar-padding-y</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notice-bar-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notice-bar-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-orange</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notice-bar-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-orange-100</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-notice-bar-wrap-line-height</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-notice-bar-font-size</span> <span class="token operator">*</span> <span class="token variable">$sar-leading-snug</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-notice-bar-left-icon-size</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notice-bar-left-icon-gap</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notice-bar-right-icon-gap</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
