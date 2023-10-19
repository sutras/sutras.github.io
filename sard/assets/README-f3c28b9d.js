import{R as s}from"./index-0f27af66.js";import{u as a}from"./useCodeTool-1da9412e.js";function p(){return a(),s.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="DatetimePicker日期时间选择器">DatetimePicker 日期时间选择器<a class="doc-anchor" href="#DatetimePicker日期时间选择器">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>用于选择日期时间。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> DatetimePicker <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>日期时间选择器通常配合 <code>PopoutInput</code> 组件一起使用，可以控制弹出框的显隐以及格式化输出当前值。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> DatetimePicker<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>Date<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置为当前时间<span class="token punctuation">"</span></span>
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
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yMd<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="类型">类型<a class="doc-anchor" href="#类型">#</a></h3>
<p>可以使用 <code>yMdhms</code>（年月日时分秒）进行任意组合。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> DatetimePicker<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日期<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'日期'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yMd<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>时间<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'时间'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hms<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日期时间<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'日期时间'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Mdh<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义日期时间范围">自定义日期时间范围<a class="doc-anchor" href="#自定义日期时间范围">#</a></h3>
<p>可以使用 <code>min</code> 和 <code>max</code> 属性限制可以选择的日期时间的范围。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> DatetimePicker<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日期<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'日期'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yMd<span class="token punctuation">"</span></span>
            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2003</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>时间<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'时间'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hms<span class="token punctuation">"</span></span>
            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="过滤器">过滤器<a class="doc-anchor" href="#过滤器">#</a></h3>
<p>可以使用 <code>filter</code> 属性来仅展示想要的内容。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> DatetimeLetter<span class="token punctuation">,</span> DatetimePicker<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> <span class="token function-variable function">filter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>letter<span class="token operator">:</span> DatetimeLetter<span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>letter <span class="token operator">===</span> <span class="token string">'m'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> value <span class="token operator">%</span> <span class="token number">15</span> <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>“分钟”取15的倍数：<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hm<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>filter<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="格式化">格式化<a class="doc-anchor" href="#格式化">#</a></h3>
<p>可以使用 <code>formatter</code> 属性格式化展示的内容。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
  List<span class="token punctuation">,</span>
  DatetimeColumnOption<span class="token punctuation">,</span>
  DatetimeLetter<span class="token punctuation">,</span>
  DatetimePicker<span class="token punctuation">,</span>
  PopoutInput<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> monthAbbreviations <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">'Jan'</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">'Feb'</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">'Mar'</span><span class="token punctuation">,</span>
  <span class="token number">3</span><span class="token operator">:</span> <span class="token string">'Apr'</span><span class="token punctuation">,</span>
  <span class="token number">4</span><span class="token operator">:</span> <span class="token string">'May'</span><span class="token punctuation">,</span>
  <span class="token number">5</span><span class="token operator">:</span> <span class="token string">'Jun'</span><span class="token punctuation">,</span>
  <span class="token number">6</span><span class="token operator">:</span> <span class="token string">'Jul'</span><span class="token punctuation">,</span>
  <span class="token number">7</span><span class="token operator">:</span> <span class="token string">'Aug'</span><span class="token punctuation">,</span>
  <span class="token number">8</span><span class="token operator">:</span> <span class="token string">'Sep'</span><span class="token punctuation">,</span>
  <span class="token number">9</span><span class="token operator">:</span> <span class="token string">'Oct'</span><span class="token punctuation">,</span>
  <span class="token number">10</span><span class="token operator">:</span> <span class="token string">'Nov'</span><span class="token punctuation">,</span>
  <span class="token number">11</span><span class="token operator">:</span> <span class="token string">'Dec'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">getEnglishDateRepresentation</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> suffix <span class="token operator">=</span> <span class="token string">'th'</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>day <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> day <span class="token operator">===</span> <span class="token number">21</span> <span class="token operator">||</span> day <span class="token operator">===</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    suffix <span class="token operator">=</span> <span class="token string">'st'</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>day <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">||</span> day <span class="token operator">===</span> <span class="token number">22</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    suffix <span class="token operator">=</span> <span class="token string">'nd'</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>day <span class="token operator">===</span> <span class="token number">3</span> <span class="token operator">||</span> day <span class="token operator">===</span> <span class="token number">23</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    suffix <span class="token operator">=</span> <span class="token string">'rd'</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> day <span class="token operator">+</span> suffix
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>letter<span class="token operator">:</span> DatetimeLetter<span class="token punctuation">,</span> option<span class="token operator">:</span> DatetimeColumnOption<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>letter <span class="token operator">===</span> <span class="token string">'M'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> monthAbbreviations<span class="token punctuation">[</span>option<span class="token punctuation">.</span>value <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>letter <span class="token operator">===</span> <span class="token string">'d'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token function">getEnglishDateRepresentation</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>letter <span class="token operator">===</span> <span class="token string">'y'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> option<span class="token punctuation">.</span>zerofill
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Mdy<span class="token punctuation">"</span></span> <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>formatter<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="DatetimePickerProps">DatetimePickerProps<a class="doc-anchor" href="#DatetimePickerProps">#</a></h3>
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
<td>设置每一列要展示的数据类型，每个字母对应一列</td>
<td>string</td>
<td>'yMd'</td>
</tr>
<tr>
<td>min</td>
<td>可选的最小日期</td>
<td>Date</td>
<td>十年前</td>
</tr>
<tr>
<td>max</td>
<td>可选的最大日期</td>
<td>Date</td>
<td>十年后</td>
</tr>
<tr>
<td>value</td>
<td>当前选中的日期</td>
<td>Date</td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认选中的日期</td>
<td>Date</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>选择的日期改变时触发</td>
<td>(value: Date) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>filter</td>
<td>选项的过滤函数</td>
<td>(letter: DatetimeLetter, value: number, date: Date, index: number) =&gt; boolean</td>
<td>-</td>
</tr>
<tr>
<td>formatter</td>
<td>选项的格式化函数</td>
<td>(letter: DatetimeLetter, option: DatetimeColumnOption, date: Date, index: number) =&gt; boolean</td>
<td>-</td>
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
<td>(props: DatetimePickerProps, value?: Date) =&gt; string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="DatetimeLetter">DatetimeLetter<a class="doc-anchor" href="#DatetimeLetter">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">DatetimeLetter</span> <span class="token operator">=</span> <span class="token string">'y'</span> <span class="token operator">|</span> <span class="token string">'M'</span> <span class="token operator">|</span> <span class="token string">'d'</span> <span class="token operator">|</span> <span class="token string">'h'</span> <span class="token operator">|</span> <span class="token string">'m'</span> <span class="token operator">|</span> <span class="token string">'s'</span>
</code></pre></div>
<p>上面每个字母分别代表“年月日时分秒”。</p>
</div><div class="doc-card"><h3 id="DatetimeColumnOption">DatetimeColumnOption<a class="doc-anchor" href="#DatetimeColumnOption">#</a></h3>
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
<td>value</td>
<td>选项值</td>
<td>number</td>
</tr>
<tr>
<td>label</td>
<td>展示的文本，默认中文会在值的后面加上“年月日时分秒”</td>
<td>string | number | boolean</td>
</tr>
<tr>
<td>zerofill</td>
<td>填充前置 0 后的选项值字符串，可在格式化时使用</td>
<td>string</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="DatetimePickerRef">DatetimePickerRef<a class="doc-anchor" href="#DatetimePickerRef">#</a></h3>
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
<td>getValueForcibly</td>
<td>获取当前值</td>
<td>() =&gt; Date</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="DatetimePicker类方法">DatetimePicker 类方法<a class="doc-anchor" href="#DatetimePicker类方法">#</a></h3>
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
<td>(props: DatetimePickerProps, value?: Date) =&gt; string</td>
</tr>
<tr>
<td>defaultOutletFormatter</td>
<td>默认的格式化要展示的预备数据的函数</td>
<td>(type: string, date?: Date) =&gt; string</td>
</tr>
</tbody>
</table></div>
</div>`}})}export{p as default};
