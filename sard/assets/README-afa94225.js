import{R as a}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Dialog对话框">Dialog 对话框<a class="doc-anchor" href="#Dialog对话框">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>提示或接收用户的确认。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Dialog <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>因为小程序和 <code>RN</code> 不能动态往页面插入节点，因此在通过命令式展示前，需要在页面上放置可选<code>id</code>属性的代理组件。</p>
<p>为了在 <code>RN</code> 实现类似于固定定位的效果，需要在 <code>app.tsx</code> 文件放置代理组件。</p>
<h4 id="apptsx文件">app.tsx 文件<a class="doc-anchor" href="#apptsx文件">#</a></h4>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> children <span class="token punctuation">&#125;</span><span class="token operator">:</span> PropsWithChildren<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span>children<span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TARO_ENV</span> <span class="token operator">===</span> <span class="token string">'rn'</span> <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog.Agent</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<p><code>H5</code> 和小程序则需要在页面放置代理组件。</p>
<h4 id="页面文件">页面文件<a class="doc-anchor" href="#页面文件">#</a></h4>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TARO_ENV</span> <span class="token operator">!==</span> <span class="token string">'rn'</span> <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog.Agent</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span><span class="token string">'页面内容。。。'</span><span class="token punctuation">&#125;</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<p>为了避免在每个页面都放置代理组件，可以编写一个页面容器组件，所有页面内容都放置在这个组件里面。
这样只需要在页面容器组件放置一次代理组件即可。</p>
<p>然后就可以调用<code>Dialog</code>下的方法进行展示了。（这些方法可以传递可选的和对应的代理组件一样的<code>id</code>，这样可以同时展示多个。）</p>
<p>下面演示 <code>Dialog</code> 的使用：</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Dialog <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示提示框<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            title<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'此功能暂时无法使用'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示确定框<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            title<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'确定删除？'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>无标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            message<span class="token operator">:</span>
              <span class="token string">'孤村落日残霞，轻烟老树寒鸦，一点飞鸿影下。青山绿水，白草红叶黄花。'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="不使用代理">不使用代理<a class="doc-anchor" href="#不使用代理">#</a></h3>
<p>也可以不通过命令式，而是通过声明组件的方式使用。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Dialog <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
          <span class="token attr-name">linkable</span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示提示框<span class="token punctuation">"</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>山坡羊·潼关怀古<span class="token punctuation">"</span></span>
        <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>峰峦如聚，波涛如怒，山河表里潼关路。望西都，意踌躇。<span class="token punctuation">"</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="异步关闭">异步关闭<a class="doc-anchor" href="#异步关闭">#</a></h3>
<p><code>onConfirm</code> 或 <code>onCancel</code>如果是返回一个 <code>Promise</code> 对象的函数，只有在 <code>fulfilled</code> 状态时才会隐藏，期间按钮会显式加载状态。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Dialog <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      &lt;List.Item
        linkable
        title="确定按钮异步关闭"
        onClick=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            title<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'点击确定按钮会在一秒钟后关闭'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">onConfirm</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
              <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
              <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      />

      &lt;List.Item
        linkable
        title="取消按钮异步关闭"
        onClick=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            title<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'点击取消按钮会在一秒钟后关闭'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
              <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
              <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      />
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="圆角按钮">圆角按钮<a class="doc-anchor" href="#圆角按钮">#</a></h3>
<p><code>buttonType</code> 属性值为 <code>round</code> 可以将底部按钮显示为圆角的形式。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Dialog <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示提示框<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            title<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'此功能暂时无法使用'</span><span class="token punctuation">,</span>
            buttonType<span class="token operator">:</span> <span class="token string">'round'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示确定框<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            title<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'确定删除？'</span><span class="token punctuation">,</span>
            buttonType<span class="token operator">:</span> <span class="token string">'round'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="有头部的">有头部的<a class="doc-anchor" href="#有头部的">#</a></h3>
<p>配置 <code>headed</code> 属性让对话框显示头部，此时的对话框更像一个模态框。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Dialog <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示提示框<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            title<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'此功能暂时无法使用'</span><span class="token punctuation">,</span>
            buttonType<span class="token operator">:</span> <span class="token string">'round'</span><span class="token punctuation">,</span>
            headed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示确定框<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            title<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">'确定删除？'</span><span class="token punctuation">,</span>
            buttonType<span class="token operator">:</span> <span class="token string">'round'</span><span class="token punctuation">,</span>
            headed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示提示框-无标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            message<span class="token operator">:</span> <span class="token string">'此功能暂时无法使用'</span><span class="token punctuation">,</span>
            buttonType<span class="token operator">:</span> <span class="token string">'round'</span><span class="token punctuation">,</span>
            headed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span>
        <span class="token attr-name">linkable</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示确定框-无标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          Dialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            message<span class="token operator">:</span> <span class="token string">'确定删除？'</span><span class="token punctuation">,</span>
            buttonType<span class="token operator">:</span> <span class="token string">'round'</span><span class="token punctuation">,</span>
            headed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义内容">自定义内容<a class="doc-anchor" href="#自定义内容">#</a></h3>
<p>对话框里面可以放置任何内容，例如以模态的方式展示一个表单，通常要配合 <code>headed</code> 属性一起使用。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> List<span class="token punctuation">,</span> Dialog<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> form<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
      form<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">linkable</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>登录表单<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">headed</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>登录<span class="token punctuation">"</span></span>
        <span class="token attr-name">showCancel</span>
        <span class="token attr-name">buttonType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span>
        <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleConfirm<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> paddingTop<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> paddingBottom<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dialog</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="DialogProps">DialogProps<a class="doc-anchor" href="#DialogProps">#</a></h3>
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
<td>标题</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>文本内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>header</td>
<td>自定义头部</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>自定义底部（按钮部分）</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>headed</td>
<td>是否显示带头部类型</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>buttonType</td>
<td>按钮类型</td>
<td>'round' | 'text'</td>
<td>'text'</td>
</tr>
<tr>
<td>showCancel</td>
<td>是否显示取消按钮</td>
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
<td>是否显示确定按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>cancelText</td>
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
<td>maskClosable</td>
<td>点击遮罩是否关闭</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onConfirm</td>
<td>点击确认按钮时触发，如果返回<code>Promise</code>对象则会在<code>fulfilled</code>状态时关闭，期间会显示加载状态</td>
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
<td>onClose</td>
<td>点击关闭按钮或遮罩（如果允许点击遮罩关闭）时触发，如果返回<code>Promise</code>对象则会在<code>fulfilled</code>状态时关闭，期间会显示加载状态</td>
<td>() =&gt; void | Promise<unknown></td>
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
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="Dialog类方法">Dialog 类方法<a class="doc-anchor" href="#Dialog类方法">#</a></h3>
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
<td>显示对话框</td>
<td>DialogShow</td>
</tr>
<tr>
<td>alert</td>
<td>显示警告框</td>
<td>DialogShow</td>
</tr>
<tr>
<td>confirm</td>
<td>显示确认框</td>
<td>DialogShow</td>
</tr>
<tr>
<td>hide</td>
<td>隐藏指定 <code>id</code> 的命令式对话框</td>
<td>(id = 'dialog') =&gt; void</td>
</tr>
<tr>
<td>hideAll</td>
<td>隐藏所有命令式对话框</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="DialogShow">DialogShow<a class="doc-anchor" href="#DialogShow">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">DialogShow</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">(</span>options<span class="token operator">:</span> ToastOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token punctuation">(</span>title<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> ToastOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="DialogOptions">DialogOptions<a class="doc-anchor" href="#DialogOptions">#</a></h3>
<p><code>DialogOptions</code> 继承 <code>DialogProps</code>，并有以下额外属性：</p>
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
<td>'dialog'</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="DialogAgentProps">DialogAgentProps<a class="doc-anchor" href="#DialogAgentProps">#</a></h3>
<p><code>DialogAgentProps</code> 继承 <code>DialogProps</code>，并有以下额外属性：</p>
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
<td>'dialog'</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-dialog-z-index</span></span><span class="token punctuation">:</span> 1110 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-dialog-width</span></span><span class="token punctuation">:</span> 320px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-max-width</span></span><span class="token punctuation">:</span> 90% <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded-xl</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-dialog-header-padding-y</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-header-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-dialog-title-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-title-padding-y</span></span><span class="token punctuation">:</span> 24px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-title-headless-message-padding-bottom</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-title-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-headed-title-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-dialog-close-padding</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-close-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-lg</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-dialog-message-padding-y</span></span><span class="token punctuation">:</span> 24px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-message-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-message-less-padding-top</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-message-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-message-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-dialog-round-button-footer-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-round-button-footer-padding-y</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-round-button-button-gap</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-dialog-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-emphasis-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-dialog-message-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
