import{R as s}from"./index-69dd4e27.js";import{u as n}from"./useCodeTool-595109b3.js";function p(){return n(),s.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Pressable可按压的">Pressable 可按压的<a class="doc-anchor" href="#Pressable可按压的">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>检测子组件的按压情况，通常用于为子组件添加点击时状态。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Pressable <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>可以根据接收到的 <code>pressed</code> 状态添加类名或进行其他的操作。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Pressable <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pressable</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> pressed <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
              display<span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
              justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
              alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
              width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
              height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
              color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
              backgroundColor<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">&#123;</span>pressed <span class="token operator">?</span> <span class="token string">'pressed!'</span> <span class="token operator">:</span> <span class="token string">'unpressed!'</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Pressable</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="禁用">禁用<a class="doc-anchor" href="#禁用">#</a></h3>
<p>禁用状态下 <code>pressed</code> 将始终为 <code>false</code>。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Pressable<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Switch <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>disabled<span class="token punctuation">,</span> setDisabled<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setDisabled<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pressable</span></span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> pressed <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span>
              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
                display<span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
                justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
                alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
                width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
                backgroundColor<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span>
              <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">&#123;</span>pressed <span class="token operator">?</span> <span class="token string">'pressed!'</span> <span class="token operator">:</span> <span class="token string">'unpressed!'</span><span class="token punctuation">&#125;</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Pressable</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="PressableProps">PressableProps<a class="doc-anchor" href="#PressableProps">#</a></h3>
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
<td>disabled</td>
<td>是否禁用按压检测</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>children</td>
<td>返回接收按压状态的子元素组件的函数</td>
<td>((state: &#123; pressed: boolean &#125;) =&gt; React.ReactElement)</td>
<td>-</td>
</tr>
<tr>
<td>onTouchStart</td>
<td>返回的子元素在触发 <code>onTouchStart</code> 时调用，RN 端用 <code>GestureDetector</code> 模拟实现</td>
<td>(event: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onTouchMove</td>
<td>返回的子元素在触发 <code>onTouchMove</code> 时调用，RN 端用 <code>GestureDetector</code> 模拟实现</td>
<td>(event: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onTouchEnd</td>
<td>返回的子元素在触发 <code>onTouchEnd</code> 时调用，RN 端用 <code>GestureDetector</code> 模拟实现</td>
<td>(event: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onTouchCancel</td>
<td>返回的子元素在触发 <code>onTouchCancel</code> 时调用，RN 端用 <code>GestureDetector</code> 模拟实现</td>
<td>(event: any) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div>`}})}export{p as default};
