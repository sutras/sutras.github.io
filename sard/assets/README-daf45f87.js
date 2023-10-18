import{R as s}from"./index-69dd4e27.js";import{u as a}from"./useCodeTool-595109b3.js";function p(){return a(),s.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="ShareSheet分享面板">ShareSheet 分享面板<a class="doc-anchor" href="#ShareSheet分享面板">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>从底部向上弹出分享菜单。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ShareSheet <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>itemList</code> 属性配置分享选项。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> ShareSheet<span class="token punctuation">,</span> ShareSheetItemProps<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> itemList<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">'wechat-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">'alipay-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'Twitter'</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">'#1d9bf0'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">'twitter-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'Facebook'</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">'#1877f2'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">'facebook-circle-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示分享面板<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>itemList<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSelect<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="多行">多行<a class="doc-anchor" href="#多行">#</a></h3>
<p><code>itemList</code> 属性值可以是二维数组以便渲染多行。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> ShareSheet<span class="token punctuation">,</span> ShareSheetItemProps<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> itemList <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./Basic'</span>

<span class="token keyword">const</span> itemList2<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  itemList<span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      name<span class="token operator">:</span> <span class="token string">'Spotify'</span><span class="token punctuation">,</span>
      color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      background<span class="token operator">:</span> <span class="token string">'#1ed760'</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'spotify-fill'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      name<span class="token operator">:</span> <span class="token string">'Skype'</span><span class="token punctuation">,</span>
      color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      background<span class="token operator">:</span> <span class="token string">'#0b64a4'</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'skype-fill'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      name<span class="token operator">:</span> <span class="token string">'Youtube'</span><span class="token punctuation">,</span>
      color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      background<span class="token operator">:</span> <span class="token string">'#ff0000'</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'youtube-fill'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      name<span class="token operator">:</span> <span class="token string">'Paypal'</span><span class="token punctuation">,</span>
      color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      background<span class="token operator">:</span> <span class="token string">'#0070ba'</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'paypal-fill'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      name<span class="token operator">:</span> <span class="token string">'Whatsapp'</span><span class="token punctuation">,</span>
      color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      background<span class="token operator">:</span> <span class="token string">'#128c7e'</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'whatsapp-fill'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      name<span class="token operator">:</span> <span class="token string">'Telegram'</span><span class="token punctuation">,</span>
      color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      background<span class="token operator">:</span> <span class="token string">'#0088cc'</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'telegram-fill'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      name<span class="token operator">:</span> <span class="token string">'Snapchat'</span><span class="token punctuation">,</span>
      color<span class="token operator">:</span> <span class="token string">'#000'</span><span class="token punctuation">,</span>
      background<span class="token operator">:</span> <span class="token string">'#fffc00'</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'snapchat-fill'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示分享面板<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>itemList2<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSelect<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="标题和描述">标题和描述<a class="doc-anchor" href="#标题和描述">#</a></h3>
<p>使用 <code>title</code> 和 <code>description</code> 配置标题和描述。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> ShareSheet<span class="token punctuation">,</span> ShareSheetItemProps<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> itemList <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./Basic'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示分享面板<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>itemList<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分享到<span class="token punctuation">"</span></span>
        <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>这是描述<span class="token punctuation">"</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSelect<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="图片类型图标">图片类型图标<a class="doc-anchor" href="#图片类型图标">#</a></h3>
<p><code>icon</code> 属性可以是图片路径。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> ShareSheet<span class="token punctuation">,</span> ShareSheetItemProps<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> itemList<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'Sard'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/images/pic1.jpg'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">'wechat-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示分享面板<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>itemList<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSelect<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="禁用">禁用<a class="doc-anchor" href="#禁用">#</a></h3>
<p>禁用的选项不可点击。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> ShareSheet<span class="token punctuation">,</span> ShareSheetItemProps<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> itemList<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">'wechat-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">'alipay-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示分享面板<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">itemList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>itemList<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSelect<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="手动声明项目组件">手动声明项目组件<a class="doc-anchor" href="#手动声明项目组件">#</a></h3>
<p>除了使用 <code>itemList</code> 属性，还可以使用 <code>ShareSheet.Row</code> 和 <code>ShareSheet.Item</code> 组件显式声明组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> ShareSheet<span class="token punctuation">,</span> ShareSheetItemProps<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> ShareSheetItemProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示分享面板<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet</span></span>
        <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSelect<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet.Row</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet.Item</span></span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Wechat<span class="token punctuation">"</span></span>
            <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span>
            <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#0bc15f<span class="token punctuation">"</span></span>
            <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
              family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'wechat-fill'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ShareSheet.Item</span></span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Alipay<span class="token punctuation">"</span></span>
            <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span>
            <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1677ff<span class="token punctuation">"</span></span>
            <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
              family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'alipay-fill'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ShareSheet.Row</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ShareSheet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="ShareSheetProps">ShareSheetProps<a class="doc-anchor" href="#ShareSheetProps">#</a></h3>
<p><code>ShareSheetProps</code> 继承 <code>PopupProps</code> 并拥有以下属性：</p>
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
<td>itemList</td>
<td>面板选项列表</td>
<td>ShareSheetItemProps[] | ShareSheetItemProps[][]</td>
<td>[]</td>
</tr>
<tr>
<td>title</td>
<td>面板标题</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>面板描述</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>cancel</td>
<td>取消按钮内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>onSelect</td>
<td>点击选项时触发，禁用状态下不会触发</td>
<td>(itemProps: ShareSheetItemProps) =&gt; void | Promise<any></td>
<td>-</td>
</tr>
<tr>
<td>onCancel</td>
<td>点击取消按钮时触发</td>
<td>() =&gt; void | Promise<any></td>
<td>-</td>
</tr>
<tr>
<td>onClose</td>
<td>点击遮罩时触发</td>
<td>() =&gt; void | Promise<any></td>
<td>-</td>
</tr>
<tr>
<td>maskClosable</td>
<td>点击遮罩后是否关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>visible</td>
<td>面板是否可见</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>defaultVisible</td>
<td>面板是否默认可见</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>onVisible</td>
<td>面板显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="ShareSheetRowProps">ShareSheetRowProps<a class="doc-anchor" href="#ShareSheetRowProps">#</a></h3>
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
<td>itemList</td>
<td>面板选项列表</td>
<td>ShareSheetItemProps[]</td>
<td>[]</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="ShareSheetItemProps">ShareSheetItemProps<a class="doc-anchor" href="#ShareSheetItemProps">#</a></h3>
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
<td>名称</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>标签</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>字体颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>背景颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标，可以时图片路径，或者 <code>Icon</code> 组件的 <code>props</code></td>
<td>IconProps | string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onClick</td>
<td>点击时调用</td>
<td>(event: ITouchEvent) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-share-sheet-z-index</span></span><span class="token punctuation">:</span> 1100 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded-xl</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-header-padding</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-title-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-description-margin-top</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-description-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-description-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-row-padding-y</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-row-padding-x</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-item-active-opacity</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-active-opacity</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-icon-wrapper-size</span></span><span class="token punctuation">:</span> 48px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-icon-wrapper-margin-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-icon-wrapper-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded-full</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-icon-font-size</span></span><span class="token punctuation">:</span> 24px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-icon-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-icon-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-secondary-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-name-margin-top</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-name-padding-x</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-name-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-name-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-label-margin-top</span></span><span class="token punctuation">:</span> 0 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-label-padding-x</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-label-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-sm</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-label-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-gap-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-gray-100</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-gap-height</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-share-sheet-cancel-min-height</span></span><span class="token punctuation">:</span> 48px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-cancel-padding</span></span><span class="token punctuation">:</span> 8px 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-cancel-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-cancel-active-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-active-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-share-sheet-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-description-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-icon-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-icon-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-secondary-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-name-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-label-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-gap-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-gray-900</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-share-sheet-cancel-active-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-active-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
