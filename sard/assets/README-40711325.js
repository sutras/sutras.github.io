import{R as a}from"./index-69dd4e27.js";import{u as s}from"./useCodeTool-595109b3.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Cascader级联选择">Cascader 级联选择<a class="doc-anchor" href="#Cascader级联选择">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>用于在多层级数据中进行选择，常用于省市区、组织架构选择。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Cascader <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>级联选择组件通常配合 <code>PopoutInput</code> 组件一起使用，可以控制弹出框的显隐以及格式化输出当前值。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Cascader<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getRegionData <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'region-data'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> regionData <span class="token operator">=</span> <span class="token function">getRegionData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置为：广东省/广州市/白云区<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token number">440111</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清空<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setValue<span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
            <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>regionData<span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'code'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="异步加载">异步加载<a class="doc-anchor" href="#异步加载">#</a></h3>
<p>通过监听 <code>onSelect</code> 事件，获取当前选中的选项，将异步获取的数据作为 <code>children</code> 属性值， 再把组件的 <code>options</code> 更新一下，使组件重新渲染。如果选项的 <code>children</code> 是需要用户点击时再通过接口获取的， 此选项的 <code>children</code> 需初始化为空数组。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Cascader<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>options<span class="token punctuation">,</span> setOptions<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>
    <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
          label<span class="token operator">:</span> <span class="token string">'label'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
          value<span class="token operator">:</span> i<span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>option<span class="token punctuation">,</span> columnIndex<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>columnIndex <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> option<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        option<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
              label<span class="token operator">:</span> option<span class="token punctuation">.</span>label <span class="token operator">+</span> <span class="token string">'-label'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
              value<span class="token operator">:</span> option<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'-'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
              children<span class="token operator">:</span> columnIndex <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

        <span class="token function">setOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>options<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSelect<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义面板上方内容">自定义面板上方内容<a class="doc-anchor" href="#自定义面板上方内容">#</a></h3>
<p>使用 <code>optionTop</code> 属性可以在面板顶部展示当前面板的一些信息。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Cascader<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getRegionData <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'region-data'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>

<span class="token keyword">const</span> regionData <span class="token operator">=</span> <span class="token function">getRegionData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
            <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>regionData<span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'code'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">optionTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>columnIndex<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
                  paddingTop<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
                  paddingBottom<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
                  paddingLeft<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
                  paddingRight<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
                  backgroundColor<span class="token operator">:</span> <span class="token string">'#f5f5f5'</span><span class="token punctuation">,</span>
                <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
              <span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> color<span class="token operator">:</span> <span class="token string">'tomato'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                  当前为第</span><span class="token punctuation">&#123;</span>columnIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token plain-text">级
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="禁选选项">禁选选项<a class="doc-anchor" href="#禁选选项">#</a></h3>
<p>禁用的选项不可点击。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Cascader<span class="token punctuation">,</span> List<span class="token punctuation">,</span> PopoutInput <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> disabledOptions <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">label</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>i<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>i<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      disabled<span class="token operator">:</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
            label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">label</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>i<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">-label</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>j<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>i<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>j<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            disabled<span class="token operator">:</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabledOptions<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="CascaderProps">CascaderProps<a class="doc-anchor" href="#CascaderProps">#</a></h3>
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
<td>指定选中项</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认的选中项</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>选择完成后时触发</td>
<td>(value: string | number, selectedOptions: CascaderOption[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>options</td>
<td>可选项数据源</td>
<td>CascaderOption[]</td>
<td>[]</td>
</tr>
<tr>
<td>fieldNames</td>
<td>自定义 <code>options</code> 中 <code>label</code>, <code>value</code>, <code>children</code> 等字段</td>
<td>CascaderFieldNames</td>
<td>defaultFieldNames</td>
</tr>
<tr>
<td>placeholder</td>
<td>未选中时的提示文案</td>
<td>React.ReactNode</td>
<td>'请选择'</td>
</tr>
<tr>
<td>onSelect</td>
<td>选择后时触发</td>
<td>(option: CascaderOption, columnIndex: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>labelRender</td>
<td>自定义可选项渲染</td>
<td>(option: CascaderOption, selected: boolean | null) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>optionTop</td>
<td>自定义面板上方内容</td>
<td>React.ReactNode | ((tabIndex: number) =&gt; React.ReactNode)</td>
<td>-</td>
</tr>
<tr>
<td>optionBottom</td>
<td>自定义面板下方内容</td>
<td>React.ReactNode | ((tabIndex: number) =&gt; React.ReactNode)</td>
<td>-</td>
</tr>
<tr>
<td>withPopout</td>
<td>是否配合弹出框一起使用。组件内部只把要渲染的元素放在弹出框而不是整个日历组件可在弹出框隐藏时保留日历组件的状态。</td>
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
<td>(labels: string[]) =&gt; string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="CascaderOption">CascaderOption<a class="doc-anchor" href="#CascaderOption">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">CascaderOption</span> <span class="token punctuation">&#123;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  children<span class="token operator">?</span><span class="token operator">:</span> CascaderOption<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="CascaderFieldNames">CascaderFieldNames<a class="doc-anchor" href="#CascaderFieldNames">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">CascaderFieldNames</span> <span class="token punctuation">&#123;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="defaultFieldNames">defaultFieldNames<a class="doc-anchor" href="#defaultFieldNames">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> defaultFieldNames<span class="token operator">:</span> CascaderFieldNames <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  label<span class="token operator">:</span> <span class="token string">'label'</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
  disabled<span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token string">'children'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="Cascader类方法">Cascader 类方法<a class="doc-anchor" href="#Cascader类方法">#</a></h3>
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
<td>(props: CascaderProps, value: string | number) =&gt; string</td>
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
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-cascader-selected-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-primary</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-cascader-options-height</span></span><span class="token punctuation">:</span> 320px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-cascader-option-padding-y</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-cascader-option-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-cascader-option-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-cascader-option-line-height</span></span><span class="token punctuation">:</span> 24px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-cascader-option-active-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-active-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-cascader-loading-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-cascader-loading-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-cascader-option-active-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-active-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-cascader-loading-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-cascader-loading-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
