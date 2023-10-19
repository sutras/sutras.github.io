import{R as s}from"./index-0f27af66.js";import{u as a}from"./useCodeTool-1da9412e.js";function p(){return a(),s.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Popout弹出框">Popout 弹出框<a class="doc-anchor" href="#Popout弹出框">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>底部弹出框，可以控制组件的展示与交互，可作为 <code>Picker</code> 等组件的弹出框容器。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Popout <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>visible</code> 和 <code>onVisible</code> 控制显隐。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Popout<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible2<span class="token punctuation">,</span> setVisible2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>默认弹出框<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示取消按钮<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible2</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'确定'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'取消'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> paddingLeft<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> paddingRight<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span>
        <span class="token attr-name">showCancel</span>
        <span class="token attr-name">showClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible2<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible2<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'确定'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'取消'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> paddingLeft<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> paddingRight<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="紧凑类型">紧凑类型<a class="doc-anchor" href="#紧凑类型">#</a></h3>
<p>通过将 <code>type</code> 设为 <code>compact</code> 可以将确定/取消按钮放到标题两侧，以便节省空间。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Popout<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示弹出框<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>compact<span class="token punctuation">"</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'确定'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'取消'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> paddingLeft<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> paddingRight<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> paddingBottom<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="结合日期组件">结合日期组件<a class="doc-anchor" href="#结合日期组件">#</a></h3>
<p>弹出框可以放置任何内容。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Calendar<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Popout <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示弹出框<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="PopoutProps">PopoutProps<a class="doc-anchor" href="#PopoutProps">#</a></h3>
<p><code>PopoutProps</code> 继承 <code>PopupProps</code> 并拥有以下属性：</p>
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
<td>弹出框标题</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>showCancel</td>
<td>是否显示取消按钮，适用 <code>loose</code> 类型</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>cancelText</td>
<td>取消按钮文案</td>
<td>React.ReactNode</td>
<td>'取消'</td>
</tr>
<tr>
<td>cancelProps</td>
<td>取消按钮组件的 <code>props</code></td>
<td>ButtonProps</td>
<td>-</td>
</tr>
<tr>
<td>showConfirm</td>
<td>是否显示确定按钮，适用 <code>loose</code> 类型</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>confirmText</td>
<td>确定按钮文案</td>
<td>React.ReactNode</td>
<td>'确定'</td>
</tr>
<tr>
<td>confirmProps</td>
<td>确定按钮组件的 <code>props</code></td>
<td>ButtonProps</td>
<td>-</td>
</tr>
<tr>
<td>showClose</td>
<td>是否显示关闭按钮，适用 <code>loose</code> 类型</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showFooter</td>
<td>是否显示底部按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>type</td>
<td>弹出框按钮排版方式</td>
<td>'compact' | 'loose'</td>
<td>'loose'</td>
</tr>
<tr>
<td>visible</td>
<td>是否显示弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>defaultVisible</td>
<td>默认是否显示弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>onVisible</td>
<td>弹出框显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>maskClosable</td>
<td>点击遮罩是否关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>onClose</td>
<td>点击关闭按钮或遮罩时触发，如果返回<code>Promise</code>对象则会在<code>fulfilled</code>状态时关闭，期间会显示加载状态</td>
<td>() =&gt; void | Promise<unknown></td>
<td>-</td>
</tr>
<tr>
<td>onCancel</td>
<td>点击取消按钮时触发，如果返回<code>Promise</code>对象则会在<code>fulfilled</code>状态时关闭，期间会显示加载状态</td>
<td>() =&gt; void | Promise<unknown></td>
<td>-</td>
</tr>
<tr>
<td>onConfirm</td>
<td>点击确认按钮时触发，如果返回<code>Promise</code>对象则会在<code>fulfilled</code>状态时关闭，期间会显示加载状态</td>
<td>() =&gt; void | Promise<unknown></td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-popout-z-index</span></span><span class="token punctuation">:</span> 1100 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-popout-border-top-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded-xl</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-popout-close-padding</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-close-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-close-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-popout-header-compact-height</span></span><span class="token punctuation">:</span> 44px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-header-loose-height</span></span><span class="token punctuation">:</span> 44px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-header-loose-padding-x</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-popout-close-padding</span> <span class="token operator">*</span> 2 <span class="token operator">+</span>
  <span class="token variable">$sar-popout-close-font-size</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-popout-title-max-width</span></span><span class="token punctuation">:</span> 65% <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-title-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-title-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-popout-button-wrap-min-width</span></span><span class="token punctuation">:</span> 80px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-popout-footer-gap-y</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-footer-gap-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-popout-button-gap</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-popout-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-close-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-popout-title-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-emphasis-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
