import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Checkbox复选框">Checkbox 复选框<a class="doc-anchor" href="#Checkbox复选框">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>在一组可选项中进行任意选择。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Checkbox <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>checked</code> 和 <code>onChange</code> 属性使其变成受控组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Checkbox <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checked<span class="token punctuation">,</span> setChecked<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>checked<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setChecked<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span>checked <span class="token operator">?</span> <span class="token string">'已选中'</span> <span class="token operator">:</span> <span class="token string">'未选中'</span><span class="token punctuation">&#125;</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="禁用">禁用<a class="doc-anchor" href="#禁用">#</a></h3>
<p>禁用后不可点击。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Checkbox<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">checked</span><span class="token punctuation">></span></span><span class="token plain-text">
        复选框
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">复选框</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="图标大小">图标大小<a class="doc-anchor" href="#图标大小">#</a></h3>
<p>使用 <code>size</code> 属性配置图标大小。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Checkbox <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">24</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">复选框</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>使用 <code>checkedColor</code> 属性配置选中时的图标颜色。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Checkbox <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checkedColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomato<span class="token punctuation">"</span></span> <span class="token attr-name">defaultChecked</span><span class="token punctuation">></span></span><span class="token plain-text">
      复选框
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="图标类型">图标类型<a class="doc-anchor" href="#图标类型">#</a></h3>
<p>配置 <code>type</code> 属性为 <code>circle</code> 可以使图标变为圆形。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Checkbox <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">复选框</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义图标">自定义图标<a class="doc-anchor" href="#自定义图标">#</a></h3>
<p>如果内置的图标不满足需求，可以使用 <code>icon</code> 属性配置为任意的图标。
<code>icon</code> 属性值为接受当前选中状态的函数。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Checkbox<span class="token punctuation">,</span> Icon <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span>
      <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span>
          <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
          <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">20</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>checked <span class="token operator">?</span> <span class="token string">'tomato'</span> <span class="token operator">:</span> <span class="token string">'#bbb'</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>checked <span class="token operator">?</span> <span class="token string">'heart-fill'</span> <span class="token operator">:</span> <span class="token string">'heart'</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      复选框
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="复选框组">复选框组<a class="doc-anchor" href="#复选框组">#</a></h3>
<p>复选框组用于收集选中状态的复选框的值。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Checkbox<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'option2'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setValue<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">选项1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">选项2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">选项3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox.Group</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义组件">自定义组件<a class="doc-anchor" href="#自定义组件">#</a></h3>
<p><code>Checkbox</code> 的 <code>children</code> 属性可以是一个接收“是否选中状态”和“切换选中函数”参数的函数，用于随心所欲地定制选框组件。</p>
<p><code>Checkbox</code> 组件通过 <code>useContext</code> 消费复选框上下文的值，一旦有消费，则其嵌套的复选框无法再次消费。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Checkbox <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'option2'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setValue<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
          <span class="token punctuation">&#123;</span> value<span class="token operator">:</span> <span class="token string">'option1'</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'选项1'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#123;</span> value<span class="token operator">:</span> <span class="token string">'option2'</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'选项2'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#123;</span> value<span class="token operator">:</span> <span class="token string">'option3'</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'选项3'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>value<span class="token punctuation">&#125;</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>value<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>checked<span class="token punctuation">,</span> toggle<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
                    <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>checked<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span></span>
                    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span>
                    <span class="token attr-name">clickable</span>
                    <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>label<span class="token punctuation">&#125;</span></span>
                  <span class="token punctuation">/></span></span>
                <span class="token punctuation">)</span>
              <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox.Group</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="完全自定义组件">完全自定义组件<a class="doc-anchor" href="#完全自定义组件">#</a></h3>
<p>内置的<code>Checkbox</code>组件在内部是基于<code>useSelect</code>和<code>useSelectGroup</code>钩子以及<code>SelectContext</code>上下文对象实现的，并添加默认的结构和样式。也许你也需要定制自己的<code>Checkbox</code>。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ReactNode<span class="token punctuation">,</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> SelectContext<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> useSelect<span class="token punctuation">,</span> useSelectGroup <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">interface</span> <span class="token class-name">CustomCheckboxGroupProps</span> <span class="token punctuation">&#123;</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  onChange<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ReactNode
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">CustomCheckboxGroup</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> CustomCheckboxGroupProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> value<span class="token punctuation">,</span> defaultValue<span class="token punctuation">,</span> onChange<span class="token punctuation">,</span> children <span class="token punctuation">&#125;</span> <span class="token operator">=</span> props

  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">useSelectGroup</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    value<span class="token punctuation">,</span>
    defaultValue<span class="token punctuation">,</span>
    trigger<span class="token operator">:</span> onChange<span class="token punctuation">,</span>
    <span class="token function-variable function">initialValue</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SelectContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>context<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span>children<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SelectContext.Provider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">interface</span> <span class="token class-name">CustomCheckboxProps</span> <span class="token punctuation">&#123;</span>
  checked<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  defaultChecked<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  onChange<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>checked<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ReactNode
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">CustomCheckbox</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> CustomCheckboxProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> checked<span class="token punctuation">,</span> defaultChecked<span class="token punctuation">,</span> children<span class="token punctuation">,</span> value<span class="token punctuation">,</span> onChange <span class="token punctuation">&#125;</span> <span class="token operator">=</span> props

  <span class="token keyword">const</span> <span class="token punctuation">[</span>isChecked<span class="token punctuation">,</span> toggle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSelect</span><span class="token punctuation">(</span>
    <span class="token string">'multiple'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      value<span class="token operator">:</span> checked<span class="token punctuation">,</span>
      defaultValue<span class="token operator">:</span> defaultChecked<span class="token punctuation">,</span>
      trigger<span class="token operator">:</span> onChange<span class="token punctuation">,</span>
      initialValue<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
      <span class="token attr-name">clickable</span>
      <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>children<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>isChecked <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomato<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'option2'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CustomCheckboxGroup</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setValue<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CustomCheckbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">选项1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CustomCheckbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CustomCheckbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">选项2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CustomCheckbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CustomCheckbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">选项3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CustomCheckbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CustomCheckboxGroup</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="CheckboxProps">CheckboxProps<a class="doc-anchor" href="#CheckboxProps">#</a></h3>
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
<td>checked</td>
<td>指定当前是否选中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultChecked</td>
<td>默认是否选中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>value</td>
<td>复选框的值，配合复选框组一起使用</td>
<td>any</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>选中状态变化时触发</td>
<td>(checked: boolean, value: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readOnly</td>
<td>只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>图标的尺寸</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>图标类型</td>
<td>'square' | 'circle'</td>
<td>'square'</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>(checked: boolean) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>checkedColor</td>
<td>选中时图标的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>children</td>
<td>label 内容</td>
<td>React.ReactNode |((checked: boolean, toggle: () =&gt; void) =&gt; React.ReactNode)</td>
<td>-</td>
</tr>
<tr>
<td>onClick</td>
<td>点击时触发</td>
<td>onClick?: (event: ITouchEvent) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="CheckboxGroupProps">CheckboxGroupProps<a class="doc-anchor" href="#CheckboxGroupProps">#</a></h3>
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
<td>value</td>
<td>指定选中的选项</td>
<td>any[]</td>
<td>[]</td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认选中的选项</td>
<td>any[]</td>
<td>[]</td>
</tr>
<tr>
<td>onChange</td>
<td>选中状态变化时触发</td>
<td>(value: any[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readOnly</td>
<td>只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>图标的尺寸</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>图标类型</td>
<td>'square' | 'circle'</td>
<td>'square'</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>(checked: boolean) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>checkedColor</td>
<td>选中时图标的颜色</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-checkbox-icon-font-size</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-checkbox-icon-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-quaternary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-checkbox-icon-checked-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-checkbox-icon-transition-duration</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-duration</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-checkbox-label-margin-left</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-checkbox-margin-left</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-checkbox-margin-top</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-checkbox-icon-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-quaternary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-checkbox-icon-checked-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
