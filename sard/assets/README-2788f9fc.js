import{R as s}from"./index-0f27af66.js";import{u as n}from"./useCodeTool-1da9412e.js";function p(){return n(),s.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Popup弹出层">Popup 弹出层<a class="doc-anchor" href="#Popup弹出层">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>所有可弹出组件的底层组件，可自定义弹出方向和内容。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Popup <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>visible</code> 控制显隐。
使用 <code>effect</code> 控制显隐效果。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Popup<span class="token punctuation">,</span> PopupProps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">import</span> <span class="token string">'../index.scss'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>effect<span class="token punctuation">,</span> setEffect<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>PopupProps<span class="token punctuation">[</span><span class="token string">'effect'</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'zoom'</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token punctuation">(</span>effect<span class="token operator">:</span> PopupProps<span class="token punctuation">[</span><span class="token string">'effect'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token function">setEffect</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleMaskClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>顶部划出<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'slide-top'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>右边划出<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'slide-right'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>底部划出<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'slide-bottom'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>左边划出<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'slide-left'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>缩放<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'zoom'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>淡入淡出<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'fade'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span> <span class="token attr-name">effect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>effect<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onMaskClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleMaskClick<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-popup-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">Popup</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="PopupProps">PopupProps<a class="doc-anchor" href="#PopupProps">#</a></h3>
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
<td>visible</td>
<td>是否可见</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>timeout</td>
<td>显隐动画时长，单位 ms</td>
<td>TransitionTimeout</td>
<td>300</td>
</tr>
<tr>
<td>effect</td>
<td>显隐效果</td>
<td>'slide-top' | 'slide-right' | 'slide-bottom' | 'slide-left' | 'zoom' | 'fade'</td>
<td>-</td>
</tr>
<tr>
<td>contentClass</td>
<td><code>content</code> 元素类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>contentStyle</td>
<td><code>content</code> 元素样式</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>zIndex</td>
<td>弹出层的层级</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>mask</td>
<td>是否显示遮罩</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>transparent</td>
<td>透明遮罩</td>
<td>boolean</td>
<td>false</td>
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
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>onMaskClick</td>
<td>点击遮罩时触发</td>
<td>(event: ITouchEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onEnter</td>
<td>准备显示弹出层时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onEntering</td>
<td>开始显示弹出层时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onEntered</td>
<td>完全显示弹出层时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onExit</td>
<td>准备隐藏弹出层时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onExiting</td>
<td>开始隐藏弹出层时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onExited</td>
<td>完全隐藏弹出层时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>catchMove</td>
<td>阻止滚动事件冒泡到页面</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onlyPopup</td>
<td>是否仅渲染弹出层，默认在 <code>RN</code> 端会被 <code>Modal</code> 包裹</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="TransitionTimeout">TransitionTimeout<a class="doc-anchor" href="#TransitionTimeout">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">type</span> <span class="token class-name">TransitionTimeout</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token builtin">number</span>
  <span class="token operator">|</span> <span class="token punctuation">&#123;</span>
      enter<span class="token operator">:</span> <span class="token builtin">number</span>
      exit<span class="token operator">:</span> <span class="token builtin">number</span>
      appear<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-popup-z-index</span></span><span class="token punctuation">:</span> 1100 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
