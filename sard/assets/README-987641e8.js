import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Calendar日历">Calendar 日历<a class="doc-anchor" href="#Calendar日历">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>以日历的方式展示日期，可以进行单选、多选、范围选择等操作。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Calendar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>日期组件通常配合 <code>PopoutInput</code> 组件一起使用，可以控制弹出框的显隐以及格式化输出当前值。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Calendar<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>Date<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置为当前日期<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清空<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setValue<span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="类型">类型<a class="doc-anchor" href="#类型">#</a></h3>
<p>日历组件可以选择单个值、多个值以及进行范围选择。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Calendar<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择单个日期<span class="token punctuation">"</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'选择单个日期'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择多个日期<span class="token punctuation">"</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
            placeholder<span class="token operator">:</span> <span class="token string">'选择多个日期'</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">'textarea'</span><span class="token punctuation">,</span>
            autoHeight<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择范围<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'选择范围'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义日期范围">自定义日期范围<a class="doc-anchor" href="#自定义日期范围">#</a></h3>
<p>可以使用 <code>min</code> 和 <code>max</code> 属性限制可以选择的日期的范围。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Calendar<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择日期'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="最多选择天数">最多选择天数<a class="doc-anchor" href="#最多选择天数">#</a></h3>
<p>在多个值和范围选择中，使用 <code>maxDays</code> 属性可以限制最多可选的天数。
超出允许选择的天数后会调用 <code>overMaxDays</code> 属性配置的函数。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Calendar<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span> <span class="token attr-name">bodyStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flex<span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择多个日期<span class="token punctuation">"</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'选择多个日期'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
            <span class="token attr-name">maxDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">3</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">overMaxDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'最多选择3天'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择范围<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'选择范围'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span>
            <span class="token attr-name">maxDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">3</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">overMaxDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'最多选择3天'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="禁用日期">禁用日期<a class="doc-anchor" href="#禁用日期">#</a></h3>
<p><code>disabledDate</code> 属性配置的函数接收一个日期对象，如果此函数返回真则禁用这个日期。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Calendar<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// 禁用周末</span>
  <span class="token keyword">const</span> <span class="token function-variable function">disabledDate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token operator">:</span> Date<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">0|6</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择日期'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token attr-name">disabledDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabledDate<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义起始周">自定义起始周<a class="doc-anchor" href="#自定义起始周">#</a></h3>
<p>默认一周从星期天开始，使用 <code>weekStartsOn</code> 属性可以配置一周从任意星期开始。
0 表示从周日开始，1 表示从周一开始。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Calendar<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择日期'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token attr-name">weekStartsOn</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="格式化日期">格式化日期<a class="doc-anchor" href="#格式化日期">#</a></h3>
<p><code>formatter</code> 属性可以配置一个接收 <code>CalendarDay</code> 类型的对象，通过此对象可以自定义当前日期展示的内容和样式。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Text <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Calendar<span class="token punctuation">,</span> CalendarDay<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>day<span class="token operator">:</span> CalendarDay<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> year <span class="token operator">=</span> day<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> month <span class="token operator">=</span> day<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">const</span> date <span class="token operator">=</span> day<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> week <span class="token operator">=</span> day<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>month <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>date <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        day<span class="token punctuation">.</span>bottom <span class="token operator">=</span> <span class="token string">'劳动节'</span>
      <span class="token punctuation">&#125;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>date <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        day<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> color<span class="token operator">:</span> <span class="token string">'tomato'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">休</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">&#125;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>date <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        day<span class="token punctuation">.</span>bottom <span class="token operator">=</span> <span class="token string">'青年节'</span>
      <span class="token punctuation">&#125;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>week <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> weekOnFirstDay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span> month <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> secondSunday <span class="token operator">=</span> <span class="token number">15</span> <span class="token operator">-</span> <span class="token punctuation">(</span>weekOnFirstDay <span class="token operator">||</span> <span class="token number">7</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>secondSunday <span class="token operator">===</span> date<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          day<span class="token punctuation">.</span>bottom <span class="token operator">=</span> <span class="token string">'母亲节'</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>day<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'start'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      day<span class="token punctuation">.</span>bottom <span class="token operator">=</span> <span class="token string">'入店'</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>day<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'end'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      day<span class="token punctuation">.</span>bottom <span class="token operator">=</span> <span class="token string">'离店'</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>week <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> week <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      day<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        fontWeight<span class="token operator">:</span> <span class="token string">'bold'</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择日期'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span>
            <span class="token attr-name">defaultCurrentDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>formatter<span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="CalendarProps">CalendarProps<a class="doc-anchor" href="#CalendarProps">#</a></h3>
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
<td>日历类型</td>
<td>CalendarType</td>
<td>'single'</td>
</tr>
<tr>
<td>value</td>
<td>选中的日期，单选时为当个日期，多选时为日期数组，范围时为两个日期数组</td>
<td>Date | Date[]</td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认选中的日期</td>
<td>Date | Date[]</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>选择的日期改变时触发</td>
<td>(value: Date | Date[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>min</td>
<td>可选择的最小日期</td>
<td>Date</td>
<td>前十年</td>
</tr>
<tr>
<td>max</td>
<td>可选择的最大日期</td>
<td>Date</td>
<td>后十年</td>
</tr>
<tr>
<td>defaultCurrentDate</td>
<td>当前展示月份的日期</td>
<td>Date</td>
<td>-</td>
</tr>
<tr>
<td>disabledDate</td>
<td>指定禁选日期，返回 <code>true</code> 表示禁选</td>
<td>(date: Date) =&gt; boolean</td>
<td>-</td>
</tr>
<tr>
<td>maxDays</td>
<td>最多可选天数，用于多选和范围</td>
<td>number</td>
<td>Number.MAX_SAFE_INTEGER</td>
</tr>
<tr>
<td>overMaxDays</td>
<td>超出最多可选天数时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>weekStartsOn</td>
<td>指定一周以周几开始，<code>0</code> 表示周日，<code>1-6</code> 分别表示周一至周六</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>formatter</td>
<td>通过修改 <code>CalendarDay</code> 对象属性值，来自定义日期的文案和样式</td>
<td>(day: CalendarDay) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>allowSameDay</td>
<td>范围选择中，是否允许起始和结束为同一天</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>withPopout</td>
<td>是否配合弹出框一起使用。组件内部仅把要渲染的元素放在弹出框可在弹出框隐藏时保留组件的状态。</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>popoutProps</td>
<td><code>Popout</code> 组件的 <code>props</code></td>
<td>PopoutProps</td>
<td>-</td>
</tr>
<tr>
<td>outletFormatter</td>
<td>配合 <code>PopoutInput</code> 使用时自定义格式化输出要展示的数据</td>
<td>(type: CalendarType, value?: Date | Date[] | null) =&gt; string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="CalendarType">CalendarType<a class="doc-anchor" href="#CalendarType">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">CalendarType</span> <span class="token operator">=</span> <span class="token string">'single'</span> <span class="token operator">|</span> <span class="token string">'multiple'</span> <span class="token operator">|</span> <span class="token string">'range'</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="CalendarDay">CalendarDay<a class="doc-anchor" href="#CalendarDay">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>date</td>
<td>当前月份中每日对应的日期对象</td>
<td>Date</td>
</tr>
<tr>
<td>type</td>
<td>日期类型，每个类型对应的含义如下</td>
<td>'same' | 'start' | 'middle' | 'end' | 'disabled' | 'selected' | 'normal'</td>
</tr>
<tr>
<td>top</td>
<td>额外的上方信息</td>
<td>React.ReactNode</td>
</tr>
<tr>
<td>text</td>
<td>中间显示的文字</td>
<td>React.ReactNode</td>
</tr>
<tr>
<td>bottom</td>
<td>额外的下方信息</td>
<td>React.ReactNode</td>
</tr>
<tr>
<td>className</td>
<td>类名</td>
<td>string</td>
</tr>
<tr>
<td>style</td>
<td>样式</td>
<td>React.CSSProperties</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="CalendarDaytype">CalendarDay['type']<a class="doc-anchor" href="#CalendarDaytype">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>same</td>
<td>表示起始和结束日期位于同一天</td>
</tr>
<tr>
<td>start</td>
<td>表示起始日期</td>
</tr>
<tr>
<td>middle</td>
<td>表示位于起始和结束日期之间</td>
</tr>
<tr>
<td>end</td>
<td>表示结束日期</td>
</tr>
<tr>
<td>disabled</td>
<td>被禁用的日期</td>
</tr>
<tr>
<td>selected</td>
<td>单选或多选时选中的日期</td>
</tr>
<tr>
<td>normal</td>
<td>正常状态日期</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="Calendar类方法">Calendar 类方法<a class="doc-anchor" href="#Calendar类方法">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>outletFormatter</td>
<td>根据 <code>props</code> 和当前值获取要展示的预备数据，并将其格式化输出</td>
<td>(props: CalendarProps, value?: Date | Date[] | null | undefined) =&gt; string</td>
</tr>
<tr>
<td>defaultOutletFormatter</td>
<td>默认的格式化要展示的预备数据的函数</td>
<td>(labels: (string | number)[]) =&gt; string</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-calendar-header-margin-bottom</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-current-month-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-calendar-week-item-height</span></span><span class="token punctuation">:</span> 32px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-week-item-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-calendar-month-body-row-gap</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-calendar-day-height</span></span><span class="token punctuation">:</span> 48px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-day-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-day-selected-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-day-selected-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-day-selected-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-day-middle-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-day-middle-bg-color</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$sar-blue-100</span><span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-day-disabled-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-disabled-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-calendar-info-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-xs</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-info-line-height</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-calendar-info-font-size</span> <span class="token operator">*</span>
  <span class="token variable">$sar-leading-tight</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-top-gap</span></span><span class="token punctuation">:</span> 2px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-bottom-gap</span></span><span class="token punctuation">:</span> 2px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-calendar-mark-font-size</span></span><span class="token punctuation">:</span> 160px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-mark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-deemphasis-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-mark-opacity</span></span><span class="token punctuation">:</span> 0.2 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-calendar-day-middle-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$sar-blue-100</span><span class="token punctuation">,</span> 0.05<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-day-disabled-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-disabled-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-calendar-mark-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-deemphasis-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
