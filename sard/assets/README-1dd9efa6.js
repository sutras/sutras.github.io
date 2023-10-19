import{R as s}from"./index-0f27af66.js";import{u as a}from"./useCodeTool-1da9412e.js";function p(){return a(),s.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Toast轻提示">Toast 轻提示<a class="doc-anchor" href="#Toast轻提示">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>在页面中间弹出黑色半透明提示，表示提示、结果、加载中状态。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>同 <code>Dialog</code> 组件，命令式使用 <code>Toast</code> 组件需要先放置代理组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>文本提示<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'文本提示'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>很长的文本<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>
            <span class="token string">'春山暖日和风，阑干楼阁帘栊，杨柳秋千院中。啼莺舞燕，小桥流水飞红。'</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>成功提示<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'成功'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>失败提示<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'失败'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>加载中提示<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">'加载中'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏提示<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义图标">自定义图标<a class="doc-anchor" href="#自定义图标">#</a></h3>
<p>通过 <code>iconProps</code> 选项可以自定义图标。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      &lt;List.Item
        linkable
        title="图标提示框"
        onClick=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'笑一笑'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
            iconProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
              family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'emoji-smile'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      />
      &lt;List.Item
        linkable
        title="图片提示框"
        onClick=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
            iconProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
              name<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/images/pic1.jpg'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      />
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义位置">自定义位置<a class="doc-anchor" href="#自定义位置">#</a></h3>
<p><code>Toast</code> 默认渲染在屏幕正中位置，通过 <code>placement</code> 属性可以控制 <code>Toast</code> 展示的位置。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>顶部位置<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'顶部位置'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
            placement<span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>底部位置<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'底部位置'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
            placement<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="加载中的背景">加载中的背景<a class="doc-anchor" href="#加载中的背景">#</a></h3>
<p>默认显示加载类型 <code>Toast</code> 不会显示遮罩背景，设置 <code>mask: true</code> 会显示黑色遮罩， 设置 <code>transparent: true</code> 会让背景变透明。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示背景<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">'加载中'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
            mask<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            Toast<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>透明背景<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">'加载中'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
            mask<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            transparent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            Toast<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="ToastProps">ToastProps<a class="doc-anchor" href="#ToastProps">#</a></h3>
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
<td>提示框类型</td>
<td>'text' | 'loading' | 'success' | 'fail' | 'custom'</td>
<td>'text'</td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>iconProps</td>
<td>自定义图标</td>
<td>IconProps</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>展示时长(ms)，值为 0 时，<code>toast</code> 不会消失</td>
<td>number</td>
<td>1500</td>
</tr>
<tr>
<td>onTimeout</td>
<td>到隐藏时间时触发</td>
<td>(visible: false) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>visible</td>
<td>是否可见</td>
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
<td>提示框垂直方向放置的位置，默认垂直居中</td>
<td>'top' | 'bottom'</td>
<td>-</td>
</tr>
<tr>
<td>loadingProps</td>
<td><code>loading</code> 类型图标的 <code>props</code></td>
<td>LoadingProps</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="Toast类方法">Toast 类方法<a class="doc-anchor" href="#Toast类方法">#</a></h3>
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
<td>显示提示</td>
<td>ToastShow</td>
</tr>
<tr>
<td>success</td>
<td>显示成功类型提示</td>
<td>ToastShow</td>
</tr>
<tr>
<td>fail</td>
<td>显示失败类型提示</td>
<td>ToastShow</td>
</tr>
<tr>
<td>loading</td>
<td>显示加载类型提示</td>
<td>ToastShow</td>
</tr>
<tr>
<td>hide</td>
<td>隐藏指定 <code>id</code> 的命令式提示</td>
<td>(id = 'toast') =&gt; void</td>
</tr>
<tr>
<td>hideAll</td>
<td>隐藏所有命令式提示</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="ToastShow">ToastShow<a class="doc-anchor" href="#ToastShow">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">ToastShow</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">(</span>options<span class="token operator">:</span> ToastOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token punctuation">(</span>title<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> ToastOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="ToastOptions">ToastOptions<a class="doc-anchor" href="#ToastOptions">#</a></h3>
<p><code>ToastOptions</code> 继承 <code>ToastProps</code>，并有以下额外属性：</p>
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
<td>'toast'</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="ToastAgentProps">ToastAgentProps<a class="doc-anchor" href="#ToastAgentProps">#</a></h3>
<p><code>ToastAgentProps</code> 继承 <code>ToastProps</code>，并有以下额外属性：</p>
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
<td>'toast'</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-toast-z-index</span></span><span class="token punctuation">:</span> 1180 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-toast-top</span></span><span class="token punctuation">:</span> 20% <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-bottom</span></span><span class="token punctuation">:</span> 20% <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-toast-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-width</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-toast-font-size</span> <span class="token operator">*</span> 9 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-not-text-min-height</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-toast-width</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-padding-x</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-toast-font-size</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-padding-y</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-toast-font-size</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-mask-illegible</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-toast-text-max-width</span></span><span class="token punctuation">:</span> 80% <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-text-padding-y</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-toast-icon-margin-bottom</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-icon-size</span></span><span class="token punctuation">:</span> 36px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-toast-title-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-toast-font-size</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-toast-title-line-height</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-toast-title-font-size</span> <span class="token operator">*</span> <span class="token variable">$sar-leading-normal</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
