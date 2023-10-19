import{R as n}from"./index-0f27af66.js";import{u as s}from"./useCodeTool-1da9412e.js";function p(){return s(),n.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="CountDown倒计时">CountDown 倒计时<a class="doc-anchor" href="#CountDown倒计时">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>倒计时的展示 ，以便告知用户在一定时间后可以进行某些操作。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CountDown <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>time</code> 属性配置倒计时总时长（单位毫秒）。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CountDown <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span> <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义格式">自定义格式<a class="doc-anchor" href="#自定义格式">#</a></h3>
<p>默认格式为 <code>HH:mm:ss</code> ，也可以使用 <code>format</code> 自定义人任意想要的格式。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CountDown <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span> <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HH 时 mm 分 ss 秒<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="毫秒级别的渲染">毫秒级别的渲染<a class="doc-anchor" href="#毫秒级别的渲染">#</a></h3>
<p>默认每隔一秒渲染一次，使用 <code>interval</code> 属性可以配置任意时间间隔。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CountDown <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span>
      <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HH 时 mm 分 ss 秒 SSS 毫秒<span class="token punctuation">"</span></span>
      <span class="token attr-name">interval</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">103</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义样式">自定义样式<a class="doc-anchor" href="#自定义样式">#</a></h3>
<p>如果不想只限定以文本格式输出，<code>CountDown</code> 组件的 <code>children</code> 属性可以是一个函数，
此函数接收 <code>CountDownCurrentTime</code> 对象作为参数，并将其返回值作为输出。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CountDown<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Tag <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span> <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">interval</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">93</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">&#123;</span><span class="token function">String</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>hours<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">&#123;</span><span class="token function">String</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>minutes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">&#123;</span><span class="token function">String</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>seconds<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CountDown</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="手动控制">手动控制<a class="doc-anchor" href="#手动控制">#</a></h3>
<p>当倒计时结束时便会停止，通过组件提供的命令式句柄可以控制倒计时的开始、暂停或进行重置。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useRef <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CountDown<span class="token punctuation">,</span> CountDownRef<span class="token punctuation">,</span> Mesh<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>CountDownRef<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">3</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh.Item</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'play-circle'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>开始<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh.Item</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'pause-circle'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>暂停<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mesh.Item</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> family<span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'arrow-clockwise'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>重置<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mesh</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span>
        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>ref<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ss:SSS<span class="token punctuation">"</span></span>
        <span class="token attr-name">interval</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">60</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">autoStart</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="验证码倒计时">验证码倒计时<a class="doc-anchor" href="#验证码倒计时">#</a></h3>
<p>下面代码演示了获取验证码需求中倒计时配合按钮的使用。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> CountDown<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>disabled<span class="token punctuation">,</span> setDisabled<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">sendCaptcha</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token function">sendCaptcha</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'已发送验证码'</span><span class="token punctuation">)</span>
        <span class="token function">setDisabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入验证码<span class="token punctuation">"</span></span>
      <span class="token attr-name">append</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
          <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>loading<span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleClick<span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> minWidth<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span>disabled <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountDown</span></span>
              <span class="token attr-name">time</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">8</span><span class="token punctuation">&#125;</span></span>
              <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>重发验证码(s)<span class="token punctuation">"</span></span>
              <span class="token attr-name">onFinish</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setDisabled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span> <span class="token operator">:</span> loading <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token string">'正在发送'</span>
          <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
            <span class="token string">'发送验证码'</span>
          <span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="CountDownProps">CountDownProps<a class="doc-anchor" href="#CountDownProps">#</a></h3>
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
<td>children</td>
<td>自定义渲染函数</td>
<td>(time: CountDownCurrentTime) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>time</td>
<td>倒计时总时长，单位毫秒</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>autoStart</td>
<td>是否自动开始倒计时</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>format</td>
<td>时间格式</td>
<td>string</td>
<td>'HH:mm:ss'</td>
</tr>
<tr>
<td>interval</td>
<td>倒计时时间改变间隔</td>
<td>number</td>
<td>1000</td>
</tr>
<tr>
<td>onChange</td>
<td>倒计时变化时触发</td>
<td>(time: CountDownCurrentTime) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onFinish</td>
<td>倒计时结束时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="CountDownRef">CountDownRef<a class="doc-anchor" href="#CountDownRef">#</a></h3>
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
<td>start</td>
<td>开始倒计时</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>pause</td>
<td>暂停倒计时</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>reset</td>
<td>重置倒计时</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="CountDownCurrentTime类型">CountDownCurrentTime 类型<a class="doc-anchor" href="#CountDownCurrentTime类型">#</a></h3>
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
<td>milliseconds</td>
<td>剩余毫秒</td>
<td>number</td>
</tr>
<tr>
<td>seconds</td>
<td>剩余秒数</td>
<td>number</td>
</tr>
<tr>
<td>minutes</td>
<td>剩余分钟</td>
<td>number</td>
</tr>
<tr>
<td>hours</td>
<td>剩余小时</td>
<td>number</td>
</tr>
<tr>
<td>days</td>
<td>剩余天数</td>
<td>number</td>
</tr>
<tr>
<td>total</td>
<td>剩余总时间（单位毫秒）</td>
<td>number</td>
</tr>
</tbody>
</table></div>
</div>`}})}export{p as default};
