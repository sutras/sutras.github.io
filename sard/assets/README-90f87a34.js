import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Notify通知">Notify 通知<a class="doc-anchor" href="#Notify通知">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>在页面顶部展示消息通知。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>同 <code>Dialog</code> 组件，命令式使用 <code>Notify</code> 组件需要先放置代理组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示通知<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="类型">类型<a class="doc-anchor" href="#类型">#</a></h3>
<p>支持 <code>primary、success、warning、error</code> 四种通知类型，默认为 <code>primary</code></p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>成功通知<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>警告通知<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>错误通知<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>通过 <code>color</code> 属性设置文本颜色，通过 <code>background</code> 属性设置背景色。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示通知<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
            background<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义时长">自定义时长<a class="doc-anchor" href="#自定义时长">#</a></h3>
<p><code>duration</code> 设为 0 后会一直显示。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示不会消失的通知<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
            duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义位置">自定义位置<a class="doc-anchor" href="#自定义位置">#</a></h3>
<p>通知允许在屏幕上边或下边展示。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>在底部显示通知<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
            placement<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="NotifyProps">NotifyProps<a class="doc-anchor" href="#NotifyProps">#</a></h3>
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
<td>type</td>
<td>加载类型</td>
<td>'primary' | 'success' | 'warning' | 'error'</td>
<td>'primary'</td>
</tr>
<tr>
<td>message</td>
<td>通知内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>展示时长(ms)，值为 0 时，通知不会消失</td>
<td>number</td>
<td>3000</td>
</tr>
<tr>
<td>color</td>
<td>字体颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>onTimeout</td>
<td>到时间关闭时触发</td>
<td>(visible: false) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>visible</td>
<td>是否显示通知</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>defaultVisible</td>
<td>默认是否可见</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>onVisible</td>
<td>显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>placement</td>
<td>通知放置的位置</td>
<td>'top' | 'bottom'</td>
<td>'top'</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="Notify类方法">Notify 类方法<a class="doc-anchor" href="#Notify类方法">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>show</td>
<td>显示通知</td>
<td>NotifyShow</td>
</tr>
<tr>
<td>success</td>
<td>显示成功类型通知</td>
<td>NotifyShow</td>
</tr>
<tr>
<td>warning</td>
<td>显示警告类型通知</td>
<td>NotifyShow</td>
</tr>
<tr>
<td>error</td>
<td>显示错误类型通知</td>
<td>NotifyShow</td>
</tr>
<tr>
<td>hide</td>
<td>隐藏指定 <code>id</code> 的命令式通知</td>
<td>(id = 'notify') =&gt; void</td>
</tr>
<tr>
<td>hideAll</td>
<td>隐藏所有命令式通知</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="NotifyShow">NotifyShow<a class="doc-anchor" href="#NotifyShow">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">NotifyShow</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">(</span>options<span class="token operator">:</span> NotifyOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token punctuation">(</span>message<span class="token operator">:</span> ReactNode<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> NotifyOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="NotifyOptions">NotifyOptions<a class="doc-anchor" href="#NotifyOptions">#</a></h3>
<p><code>NotifyOptions</code> 继承 <code>NotifyProps</code>，并有以下额外属性：</p>
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
<td>id</td>
<td>代理组件的 id，用于命令式操作指定代理；默认会动态生成一个代理，隐藏时会进行销毁</td>
<td>string</td>
<td>'notify'</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="NotifyAgentProps">NotifyAgentProps<a class="doc-anchor" href="#NotifyAgentProps">#</a></h3>
<p><code>NotifyAgentProps</code> 继承 <code>NotifyProps</code>，并有以下额外属性：</p>
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
<td>id</td>
<td>组件 id</td>
<td>string</td>
<td>'notify'</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-notify-z-index</span></span><span class="token punctuation">:</span> 1190 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-notify-width</span></span><span class="token punctuation">:</span> 90% <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notify-safe-area-min-height</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notify-paddding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notify-paddding-y</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notify-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notify-box-shadow</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-shadow-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notify-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-notify-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
