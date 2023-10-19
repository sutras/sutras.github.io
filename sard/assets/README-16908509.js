import{R as n}from"./index-0f27af66.js";import{u as a}from"./useCodeTool-1da9412e.js";function p(){return a(),n.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Form表单">Form 表单<a class="doc-anchor" href="#Form表单">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>用于数据采集，由各种类型的表单域组成，可对数据进行校验、清除、重置、提交等操作。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Form <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="AntDemo">Ant Demo<a class="doc-anchor" href="#AntDemo">#</a></h3>
<h4 id="基本使用">基本使用<a class="doc-anchor" href="#基本使用">#</a></h4>
<p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> FooterBar<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> remember<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input your username!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input your password!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remember<span class="token punctuation">"</span></span> <span class="token attr-name">valuePropName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">Remember me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'基本使用'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="表单方法调用">表单方法调用<a class="doc-anchor" href="#表单方法调用">#</a></h4>
<p>通过 Form.useForm 对表单数据域进行交互。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> FooterBar<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Radio<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onFill</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    form<span class="token punctuation">.</span><span class="token function">setValues</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      note<span class="token operator">:</span> <span class="token string">'Hello world!'</span><span class="token punctuation">,</span>
      gender<span class="token operator">:</span> <span class="token string">'other'</span><span class="token punctuation">,</span>
      customizeGender<span class="token operator">:</span> <span class="token string">'customizeGender'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onGenderChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">case</span> <span class="token string">'male'</span><span class="token operator">:</span>
        form<span class="token punctuation">.</span><span class="token function">setValues</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> note<span class="token operator">:</span> <span class="token string">'Hi, man!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'female'</span><span class="token operator">:</span>
        form<span class="token punctuation">.</span><span class="token function">setValues</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> note<span class="token operator">:</span> <span class="token string">'Hi, lady!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'other'</span><span class="token operator">:</span>
        form<span class="token punctuation">.</span><span class="token function">setValues</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> note<span class="token operator">:</span> <span class="token string">'Hi there!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">labelWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">80</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>note<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Note<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Note<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Gender<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onGenderChange<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">male</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">female</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>other<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">other</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">watch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">'gender'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">unstyled</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> getValue <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">return</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'gender'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'other'</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
              <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customizeGender<span class="token punctuation">"</span></span>
              <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Customize Gender<span class="token punctuation">"</span></span>
              <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Customize Gender<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Reset
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onFill<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Fill form
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'表单方法调用'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="表单布局">表单布局<a class="doc-anchor" href="#表单布局">#</a></h4>
<p>表单有水平和垂直布局。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
  Button<span class="token punctuation">,</span>
  FooterBar<span class="token punctuation">,</span>
  Form<span class="token punctuation">,</span>
  FormFieldProps<span class="token punctuation">,</span>
  Input<span class="token punctuation">,</span>
  Radio<span class="token punctuation">,</span>
  Space<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>formLayout<span class="token punctuation">,</span> setFormLayout<span class="token punctuation">]</span> <span class="token operator">=</span>
    <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>FormFieldProps<span class="token punctuation">[</span><span class="token string">'layout'</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'horizontal'</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onFormLayoutChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>layout<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setFormLayout</span><span class="token punctuation">(</span>layout<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> layout<span class="token operator">:</span> formLayout <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">layout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>formLayout<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Form Layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>formLayout<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onFormLayoutChange<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Horizontal</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Vertical</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Field A<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fieldA<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input placeholder<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Field B<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fieldB<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input placeholder<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'表单布局'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="表单只读和禁用">表单只读和禁用<a class="doc-anchor" href="#表单只读和禁用">#</a></h4>
<p>每个内置表单组件都有只读和禁用两种状态。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
  Button<span class="token punctuation">,</span>
  Calendar<span class="token punctuation">,</span>
  Cascader<span class="token punctuation">,</span>
  Checkbox<span class="token punctuation">,</span>
  DatetimePicker<span class="token punctuation">,</span>
  Form<span class="token punctuation">,</span>
  Input<span class="token punctuation">,</span>
  PasswordInput<span class="token punctuation">,</span>
  Picker<span class="token punctuation">,</span>
  PopoutInput<span class="token punctuation">,</span>
  Radio<span class="token punctuation">,</span>
  Rate<span class="token punctuation">,</span>
  Slider<span class="token punctuation">,</span>
  Space<span class="token punctuation">,</span>
  Stepper<span class="token punctuation">,</span>
  Switch<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
  Upload<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getRegionData <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'region-data'</span>

<span class="token keyword">import</span> DemoScrollView <span class="token keyword">from</span> <span class="token string">'../DemoScrollView'</span>

<span class="token keyword">const</span> regionData <span class="token operator">=</span> <span class="token function">getRegionData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> filledData <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    username<span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token string">'root123456'</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">'root@email.com'</span><span class="token punctuation">,</span>
    phone<span class="token operator">:</span> <span class="token string">'13800000000'</span><span class="token punctuation">,</span>
    captcha<span class="token operator">:</span> <span class="token string">'123456'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'管理员'</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">'male'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    idNumber<span class="token operator">:</span> <span class="token string">'000000000000000000'</span><span class="token punctuation">,</span>
    nativePlace<span class="token operator">:</span> <span class="token number">440111</span><span class="token punctuation">,</span>
    address<span class="token operator">:</span> <span class="token string">'广东省广州市xxx xxx xxx 16号'</span><span class="token punctuation">,</span>
    birthday<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    married<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    education<span class="token operator">:</span> <span class="token string">'初中'</span><span class="token punctuation">,</span>
    avatar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        url<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/images/pic1.jpg'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    hobbies<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token string">'h2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    pressure<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    happiness<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    travelDate<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleValidate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    form
      <span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'验证通过'</span><span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'验证失败'</span><span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>disabled<span class="token punctuation">,</span> setDisabled<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>readOnly<span class="token punctuation">,</span> setReadOnly<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DemoScrollView</span></span>
      <span class="token attr-name">footer</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            提交
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> form<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            重置
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> form<span class="token punctuation">.</span><span class="token function">setValues</span><span class="token punctuation">(</span>filledData<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            数据填充
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleValidate<span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            验证
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
        <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">readOnly</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>readOnly<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">starPosition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span>
        <span class="token attr-name">labelWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">100</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span>
          <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> paddingLeft<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> paddingBottom<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setDisabled<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> 禁用
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>readOnly<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setReadOnly<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> 只读
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入用户名<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span> min<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span>
              <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
              <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">'必须包含字母和数字'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码长度为6-12个字符<span class="token punctuation">"</span></span>
          <span class="token attr-name">validateFirst</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>邮箱<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'email'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入邮箱<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>手机号<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>phone<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> pattern<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^13d&#123;9&#125;$</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入手机号<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>验证码<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>captcha<span class="token punctuation">"</span></span>
          <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
          <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> len<span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordInput</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>underline<span class="token punctuation">"</span></span> <span class="token attr-name">plainText</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>姓名<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入姓名<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>性别<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'请选择$&#123;label&#125;'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">男</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">女</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>年龄<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">150</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">precision</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>身份证号<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>idNumber<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">readOnly</span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入身份证号<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>籍贯<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nativePlace<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span>
            <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span><span class="token punctuation">,</span> clearable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
              <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>regionData<span class="token punctuation">&#125;</span></span>
              <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'code'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>现住址<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">clearable</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入现住址<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>出生日期<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择出生日期<span class="token punctuation">"</span></span>
            <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span>
              <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yMd<span class="token punctuation">"</span></span>
              <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1900</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
              <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否已婚<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>married<span class="token punctuation">"</span></span>
          <span class="token attr-name">initialValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">valuePropName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>学历<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>education<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择学历<span class="token punctuation">"</span></span>
            <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span>
              <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">'小学'</span><span class="token punctuation">,</span> <span class="token string">'初中'</span><span class="token punctuation">,</span> <span class="token string">'高中'</span><span class="token punctuation">,</span> <span class="token string">'专科'</span><span class="token punctuation">,</span> <span class="token string">'本科'</span><span class="token punctuation">,</span> <span class="token string">'研究生'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>头像<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span>
          <span class="token attr-name">valuePropName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fileList<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>兴趣爱好<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobbies<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">运动</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">读书</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">旅行</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">购物</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>工作压力程度<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pressure<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Slider</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>幸福度<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>happiness<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Rate</span></span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">clearable</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下次旅游时间<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>travelDate<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
            <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DemoScrollView</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'表单只读和禁用'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="字段监听Hooks">字段监听 Hooks<a class="doc-anchor" href="#字段监听Hooks">#</a></h4>
<p><code>useWatch</code> 允许你监听字段变化，同时仅当该字段变化时重新渲染。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Stepper<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> nameValue <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useWatch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> form<span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
      <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
        <span class="token attr-name">initialValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>abc123<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name (Watch to trigger rerender)<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Age (Not Watch)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">Name Value: </span><span class="token punctuation">&#123;</span>nameValue<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'字段监听 Hooks'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="仅校验">仅校验<a class="doc-anchor" href="#仅校验">#</a></h4>
<p>通过 <code>validate</code> 的 <code>validateOnly</code> 可以动态调整提交按钮的 <code>disabled</code> 状态。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> FooterBar<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> FormStore<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> <span class="token function-variable function">SubmitButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span> form <span class="token punctuation">&#125;</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> form<span class="token operator">:</span> FormStore <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>submittable<span class="token punctuation">,</span> setSubmittable<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token comment">// Watch all values</span>
  <span class="token keyword">const</span> values <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useWatch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> form<span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    form<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> validateOnly<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token function">setSubmittable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token function">setSubmittable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>values<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token operator">!</span>submittable<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Submit
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Age<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SubmitButton</span></span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Reset
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'仅校验'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="字段路径前缀">字段路径前缀<a class="doc-anchor" href="#字段路径前缀">#</a></h4>
<p>在某些场景，你希望统一设置一些字段的前缀。你可以通过 <code>Form.Map</code> 组件实现该效果。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Toast<span class="token punctuation">,</span> FooterBar <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Map</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Map</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>firstName<span class="token punctuation">"</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>First Name<span class="token punctuation">"</span></span>
            <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lastName<span class="token punctuation">"</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Last Name<span class="token punctuation">"</span></span>
            <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Map</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Map</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'字段路径前缀'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="动态增减表单项">动态增减表单项<a class="doc-anchor" href="#动态增减表单项">#</a></h4>
<p>动态增加、减少表单项。add 方法参数可用于设置初始值。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> FooterBar<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      &lt;Form.List
        name="names"
        rules=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
          <span class="token punctuation">&#123;</span>
            <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span>names<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>names <span class="token operator">||</span> names<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                <span class="token keyword">return</span> <span class="token string">'At least 2 passengers'</span>
              <span class="token punctuation">&#125;</span>
              <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      >
        </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>fields<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> add<span class="token punctuation">,</span> remove <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> errors <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">&#123;</span>fields<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>field<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
                  <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>field<span class="token punctuation">.</span>key<span class="token punctuation">&#125;</span></span>
                  <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>field<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span></span>
                  <span class="token attr-name">validateTrigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">'onChange'</span><span class="token punctuation">,</span> <span class="token string">'onBlur'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
                  <span class="token attr-name">label</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>index <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">'Passengers'</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">&#125;</span></span>
                  <span class="token attr-name">required</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">&#125;</span></span>
                  <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
                    <span class="token punctuation">&#123;</span>
                      required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      whitespace<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      message<span class="token operator">:</span>
                        <span class="token string">"Please input passenger's name or delete this field."</span><span class="token punctuation">,</span>
                    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
                <span class="token punctuation">></span></span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
                    <span class="token attr-name">inlaid</span>
                    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>passenger name<span class="token punctuation">"</span></span>
                    <span class="token attr-name">append</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
                      fields<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
                          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span>
                          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
                          <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">'close'</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token number">14</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
                          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">remove</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
                        <span class="token punctuation">/></span></span>
                      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
                    <span class="token punctuation">&#125;</span></span>
                  <span class="token punctuation">/></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">

            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> Add field
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
                <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span>
                <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
                <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                  <span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'headding'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginTop<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
              <span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> Add field at head
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">

              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.ErrorList</span></span> <span class="token attr-name">errors</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>errors<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'动态增减表单项'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="动态增减嵌套字段">动态增减嵌套字段<a class="doc-anchor" href="#动态增减嵌套字段">#</a></h4>
<p><code>Form.List</code> 组件里面嵌套 <code>Form.Map</code> 组件可以实现该效果。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Col<span class="token punctuation">,</span> FooterBar<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.List</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>users<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>fields<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> add<span class="token punctuation">,</span> remove <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">&#123;</span>fields<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> key<span class="token punctuation">,</span> name <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Map</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>name<span class="token punctuation">&#125;</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>key<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span></span> <span class="token attr-name">gap</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
                        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>first<span class="token punctuation">"</span></span>
                        <span class="token attr-name">inlaid</span>
                        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
                          <span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Missing first name'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
                      <span class="token punctuation">></span></span><span class="token plain-text">
                        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>First Name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
                      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">

                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
                        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>last<span class="token punctuation">"</span></span>
                        <span class="token attr-name">inlaid</span>
                        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
                          <span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Missing last name'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
                      <span class="token punctuation">></span></span><span class="token plain-text">
                        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Last Name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
                      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">

                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span>
                        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span>
                        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">16</span><span class="token punctuation">&#125;</span></span>
                        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">remove</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
                      <span class="token punctuation">/></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Row</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Map</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
                Add field
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.List</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'动态增减嵌套字段'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="复杂的动态增减表单项">复杂的动态增减表单项<a class="doc-anchor" href="#复杂的动态增减表单项">#</a></h4>
<p>多个 <code>Form.List</code> 嵌套的使用场景。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useEffect <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Card<span class="token punctuation">,</span> Col<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">import</span> DemoScrollView <span class="token keyword">from</span> <span class="token string">'../DemoScrollView'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> values <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useWatch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> form<span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>values<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>values<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">labelWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">50</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.List</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>fields<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> add<span class="token punctuation">,</span> remove <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DemoScrollView</span></span>
            <span class="token attr-name">footer</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
                  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
                  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span>
                  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
                <span class="token punctuation">></span></span><span class="token plain-text">
                  + Add Item
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                  Submit
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">&#123;</span>fields<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
                <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>field<span class="token punctuation">.</span>key<span class="token punctuation">&#125;</span></span>
                <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>field<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">&#125;</span></span>
                <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
                    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span>
                    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>
                    <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">'close'</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
                    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">remove</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
                  <span class="token punctuation">/></span></span>
                <span class="token punctuation">&#125;</span></span>
                <span class="token attr-name">bodyStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> padding<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
                  borderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                  borderStyle<span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
                  borderColor<span class="token operator">:</span> <span class="token string">'#e3e3e3'</span><span class="token punctuation">,</span>
                  marginLeft<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
                  marginRight<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
                  marginBottom<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
              <span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Map</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>field<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
                    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span>
                    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
                    <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Missing  Name'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
                  <span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.List</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>subFields<span class="token punctuation">,</span> subOpt<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                        </span><span class="token punctuation">&#123;</span>subFields<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>subField<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Map</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>subField<span class="token punctuation">.</span>key<span class="token punctuation">&#125;</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>subField<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
                              <span class="token attr-name">label</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>index <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">'List'</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">&#125;</span></span>
                              <span class="token attr-name">required</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">&#125;</span></span>
                            <span class="token punctuation">></span></span><span class="token plain-text">
                              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span></span> <span class="token attr-name">gap</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
                                    <span class="token attr-name">inlaid</span>
                                    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>first<span class="token punctuation">"</span></span>
                                    <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
                                      <span class="token punctuation">&#123;</span>
                                        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                        message<span class="token operator">:</span> <span class="token string">'Missing First'</span><span class="token punctuation">,</span>
                                      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                                    <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
                                  <span class="token punctuation">></span></span><span class="token plain-text">
                                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>first<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token punctuation">/></span></span><span class="token plain-text">
                                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">

                                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
                                    <span class="token attr-name">inlaid</span>
                                    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>second<span class="token punctuation">"</span></span>
                                    <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
                                      <span class="token punctuation">&#123;</span>
                                        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                        message<span class="token operator">:</span> <span class="token string">'Missing Second'</span><span class="token punctuation">,</span>
                                      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                                    <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
                                  <span class="token punctuation">></span></span><span class="token plain-text">
                                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>second<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token punctuation">/></span></span><span class="token plain-text">
                                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">

                                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
                                  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale<span class="token punctuation">"</span></span>
                                  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>
                                  <span class="token attr-name">round</span>
                                  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginTop<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
                                  <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">'minus'</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token number">14</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
                                  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> subOpt<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>subField<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
                                <span class="token punctuation">/></span></span><span class="token plain-text">
                              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Row</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Map</span></span><span class="token punctuation">></span></span>
                        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">

                        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span> <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
                            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span>
                            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
                            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> subOpt<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
                          <span class="token punctuation">></span></span><span class="token plain-text">
                            + Add Sub Item
                          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
                    <span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Map</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DemoScrollView</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'复杂的动态增减表单项'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="嵌套结构与校验信息">嵌套结构与校验信息<a class="doc-anchor" href="#嵌套结构与校验信息">#</a></h4>
<p><code>Form.List</code>、 <code>Form.Map</code> 组件支持嵌套数据结构。通过 <code>validateMessages</code> 或 <code>message</code> 自定义校验信息模板。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> FooterBar<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Stepper<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> validateMessages <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  required<span class="token operator">:</span> <span class="token string">'$&#123;label&#125; is required!'</span><span class="token punctuation">,</span>
  types<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    email<span class="token operator">:</span> <span class="token string">'$&#123;label&#125; is not a valid email!'</span><span class="token punctuation">,</span>
    <span class="token builtin">number</span><span class="token operator">:</span> <span class="token string">'$&#123;label&#125; is not a valid number!'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token builtin">number</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    range<span class="token operator">:</span> <span class="token string">'$&#123;label&#125; must be between $&#123;min&#125; and $&#123;max&#125;'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">validateMessages</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>validateMessages<span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Map</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> type<span class="token operator">:</span> <span class="token string">'email'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Age<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> type<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token number">99</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>website<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Website<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>introduction<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Introduction<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Map</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'嵌套结构与校验信息'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="复杂一点的控件">复杂一点的控件<a class="doc-anchor" href="#复杂一点的控件">#</a></h4>
<p>这里演示 <code>Form.Field</code> 内有多个元素的使用方式。<code>Form.Field</code> 只会对它的直接子元素绑定表单功能。如果控件前后还有一些文案或样式装点，或者一个表单项内有多个控件，你可以使用内嵌的 <code>Form.Field</code> 完成。你可以给 <code>Form.Field</code> 自定义 <code>style</code> 进行内联布局，或者添加 <code>unstyled</code> 作为纯粹的无样式绑定组件。</p>
<p>可以给 <code>Form.Field</code> 添加 <code>inlaid</code> 属性去掉默认的内边距以及下划线以便可以更好嵌套在 <code>Form.Field</code> 中。</p>
<p>单纯去掉下划线可以配置 <code>underline</code> 属性。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Col<span class="token punctuation">,</span> FooterBar<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">labelWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">80</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span></span> <span class="token attr-name">gap</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
              <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
              <span class="token attr-name">inlaid</span>
              <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Username is required'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please input<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> color<span class="token operator">:</span> <span class="token string">'tomato'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">Need Help?</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Row</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Address<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Map</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span></span> <span class="token attr-name">gap</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
                <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>province<span class="token punctuation">"</span></span>
                <span class="token attr-name">inlaid</span>
                <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Province is required'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
              <span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input province<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
                <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>street<span class="token punctuation">"</span></span>
                <span class="token attr-name">inlaid</span>
                <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Street is required'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
              <span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input street<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Row</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Map</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>BirthDate<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span></span> <span class="token attr-name">gap</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input birth year<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>month<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input birth month<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Row</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'复杂一点的控件'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="自定义表单控件">自定义表单控件<a class="doc-anchor" href="#自定义表单控件">#</a></h4>
<p>自定义或第三方的表单控件，也可以与 <code>Form</code> 组件一起使用。只要该组件遵循以下的约定：</p>
<ul>
<li>提供受控属性 <code>value</code> 或其它与 <code>valuePropName</code> 的值同名的属性。</li>
<li>提供 <code>onChange</code> 事件或 <code>trigger</code> 的值同名的事件。</li>
</ul>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
  Button<span class="token punctuation">,</span>
  Col<span class="token punctuation">,</span>
  FooterBar<span class="token punctuation">,</span>
  Form<span class="token punctuation">,</span>
  Picker<span class="token punctuation">,</span>
  PopoutInput<span class="token punctuation">,</span>
  Row<span class="token punctuation">,</span>
  Stepper<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">type</span> <span class="token class-name">Currency</span> <span class="token operator">=</span> <span class="token string">'rmb'</span> <span class="token operator">|</span> <span class="token string">'dollar'</span>

<span class="token keyword">interface</span> <span class="token class-name">PriceValue</span> <span class="token punctuation">&#123;</span>
  <span class="token builtin">number</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  currency<span class="token operator">?</span><span class="token operator">:</span> Currency
<span class="token punctuation">&#125;</span>

<span class="token keyword">interface</span> <span class="token class-name">PriceInputProps</span> <span class="token punctuation">&#123;</span>
  value<span class="token operator">?</span><span class="token operator">:</span> PriceValue
  onChange<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> PriceValue<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> PriceInput<span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>PriceInputProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span> value <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> onChange <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>currency<span class="token punctuation">,</span> setCurrency<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>Currency<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'rmb'</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">triggerChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>changedValue<span class="token operator">:</span> PriceValue<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    onChange<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token builtin">number</span><span class="token punctuation">,</span> currency<span class="token punctuation">,</span> <span class="token operator">...</span>value<span class="token punctuation">,</span> <span class="token operator">...</span>changedValue <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onNumberChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> newNumber <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>n <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">'number'</span> <span class="token keyword">in</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token function">setNumber</span><span class="token punctuation">(</span>newNumber<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
    <span class="token function">triggerChange</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token builtin">number</span><span class="token operator">:</span> newNumber <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCurrencyChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newCurrency<span class="token operator">:</span> Currency<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">'currency'</span> <span class="token keyword">in</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token function">setCurrency</span><span class="token punctuation">(</span>newCurrency<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
    <span class="token function">triggerChange</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> currency<span class="token operator">:</span> newCurrency <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span></span> <span class="token attr-name">gap</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token builtin">number</span> <span class="token operator">||</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onNumberChange<span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
          <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>value<span class="token punctuation">.</span>currency <span class="token operator">||</span> currency<span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onCurrencyChange<span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span>
            <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
              <span class="token punctuation">&#123;</span>
                label<span class="token operator">:</span> <span class="token string">'RMB'</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token string">'rmb'</span><span class="token punctuation">,</span>
              <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
              <span class="token punctuation">&#123;</span>
                label<span class="token operator">:</span> <span class="token string">'Dollar'</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token string">'dollar'</span><span class="token punctuation">,</span>
              <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Row</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
        price<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token builtin">number</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          currency<span class="token operator">:</span> <span class="token string">'rmb'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">labelWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">40</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">labelValign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      &lt;Form.Field
        name="price"
        label="Price"
        rules=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
          <span class="token punctuation">&#123;</span>
            <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token builtin">number</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token builtin">number</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
              <span class="token punctuation">&#125;</span>
              <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'Price must be greater than zero!'</span><span class="token punctuation">)</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      >
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PriceInput</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'自定义表单控件'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="多表单联动">多表单联动<a class="doc-anchor" href="#多表单联动">#</a></h4>
<p>使用 <code>setValues</code> 可以设置获取的其他表单验证成功后的表单数据。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
  Avatar<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  Dialog<span class="token punctuation">,</span>
  FooterBar<span class="token punctuation">,</span>
  Form<span class="token punctuation">,</span>
  Input<span class="token punctuation">,</span>
  Space<span class="token punctuation">,</span>
  Stepper<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">interface</span> <span class="token class-name">UserType</span> <span class="token punctuation">&#123;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">interface</span> <span class="token class-name">ModalFormProps</span> <span class="token punctuation">&#123;</span>
  visible<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token function-variable function">onVisible</span><span class="token operator">:</span> <span class="token punctuation">(</span>visible<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> ModalForm<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>ModalFormProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  visible<span class="token punctuation">,</span>
  onVisible<span class="token punctuation">,</span>
  onSuccess<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> form<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      form<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">onSuccess</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Basic Drawer<span class="token punctuation">"</span></span>
      <span class="token attr-name">headed</span>
      <span class="token attr-name">buttonType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span>
      <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onVisible<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onConfirm<span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> paddingTop<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> paddingBottom<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User Name<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User Age<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dialog</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">showUserModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleModalFormSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> users <span class="token operator">=</span> form<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    form<span class="token punctuation">.</span><span class="token function">setValues</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      users<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>users<span class="token punctuation">,</span> values<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
        <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">labelWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">94</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>group<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Group Name<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User List<span class="token punctuation">"</span></span> <span class="token attr-name">watch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">'users'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> getValue <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">const</span> users<span class="token operator">:</span> UserType<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token keyword">return</span> users<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token punctuation">&#123;</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>index<span class="token punctuation">&#125;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">32</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">iconProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> size<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
                    </span><span class="token punctuation">&#123;</span>user<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span><span class="token plain-text"> - </span><span class="token punctuation">&#123;</span>user<span class="token punctuation">.</span>age<span class="token punctuation">&#125;</span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">No user yet.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            Submit
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span>
            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>showUserModal<span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            Add User
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ModalForm</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleModalFormSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'多表单联动'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="登录栏">登录栏<a class="doc-anchor" href="#登录栏">#</a></h4>
<p>下面代码实现了需要输入帐号密码才允许提交的简单登录栏。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input your username!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
          <span class="token attr-name">prepend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input your password!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
          <span class="token attr-name">prepend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">const</span> <span class="token punctuation">[</span>disabled<span class="token punctuation">,</span> setDisabled<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

          <span class="token keyword">const</span> values <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useWatch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

          <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            form
              <span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> validateOnly<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setDisabled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setDisabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>values<span class="token punctuation">]</span><span class="token punctuation">)</span>

          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              Log in
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'登录栏'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="复杂一点的登录栏">复杂一点的登录栏<a class="doc-anchor" href="#复杂一点的登录栏">#</a></h4>
<p>下面代码实现了一个表单内容稍微多一点的登录栏。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
      <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> remember<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input your Username!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
          <span class="token attr-name">prepend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input your Password!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
          <span class="token attr-name">prepend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>between<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remember<span class="token punctuation">"</span></span> <span class="token attr-name">valuePropName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span> <span class="token attr-name">unstyled</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">Remember me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> color<span class="token operator">:</span> <span class="token string">'tomato'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">Forgot password</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Log in</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            Or
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> color<span class="token operator">:</span> <span class="token string">'tomato'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">register now!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'复杂一点的登录栏'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="注册新用户">注册新用户<a class="doc-anchor" href="#注册新用户">#</a></h4>
<p>用户填写必须的信息以注册新用户。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
  Button<span class="token punctuation">,</span>
  Cascader<span class="token punctuation">,</span>
  Checkbox<span class="token punctuation">,</span>
  Form<span class="token punctuation">,</span>
  Input<span class="token punctuation">,</span>
  Stepper<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
  Picker<span class="token punctuation">,</span>
  CascaderProps<span class="token punctuation">,</span>
  PopoutInput<span class="token punctuation">,</span>
  Space<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> DemoScrollView <span class="token keyword">from</span> <span class="token string">'../DemoScrollView'</span>

<span class="token keyword">const</span> residences<span class="token operator">:</span> CascaderProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    value<span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        value<span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">&#123;</span>
            value<span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    value<span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        value<span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">&#123;</span>
            value<span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> prefixSelector <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prefix<span class="token punctuation">"</span></span> <span class="token attr-name">unstyled</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span>
          <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'+86'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'86'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'+87'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'87'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>

  <span class="token keyword">const</span> suffixSelector <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>suffix<span class="token punctuation">"</span></span> <span class="token attr-name">unstyled</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span>
        <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
          placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span><span class="token punctuation">,</span>
          style<span class="token operator">:</span> <span class="token punctuation">&#123;</span> textAlign<span class="token operator">:</span> <span class="token string">'right'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span>
          <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'$'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'USD'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'¥'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'CNY'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DemoScrollView</span></span>
      <span class="token attr-name">footer</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Register
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
        <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
          residence<span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
          prefix<span class="token operator">:</span> <span class="token string">'86'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>E-mail<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span>
              type<span class="token operator">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">'The input is not valid E-mail!'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span>
              required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">'Please input your E-mail!'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span>
              required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">'Please input your password!'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        &lt;Form.Field
          name="confirm"
          label="Confirm Password"
          watch=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">'password'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span><span class="token plain-text">
          rules=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span>
              required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">'Please confirm your password!'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span><span class="token punctuation">&#123;</span> getValue <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
              <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value <span class="token operator">||</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span> <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                  <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">&#125;</span>
                <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>
                  <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'The new password that you entered do not match!'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span>
              <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span><span class="token plain-text">
        >
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nickname<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Nickname<span class="token punctuation">"</span></span>
          <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>What do you want others to call you?<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span>
              required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">'Please input your nickname!'</span><span class="token punctuation">,</span>
              whitespace<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>residence<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Habitual Residence<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span>
              required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">'Please select your habitual residence!'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>residences<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>phone<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Phone Number<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input your phone number!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
            <span class="token attr-name">inlaid</span>
            <span class="token attr-name">prepend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> width<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span>prefixSelector<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#125;</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Donation<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">gap</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
              <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>donation<span class="token punctuation">"</span></span>
              <span class="token attr-name">inlaid</span>
              <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
                <span class="token punctuation">&#123;</span>
                  required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                  message<span class="token operator">:</span> <span class="token string">'Please input donation amount!'</span><span class="token punctuation">,</span>
                <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> width<span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span> marginTop<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span>suffixSelector<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>website<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Website<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input website!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>intro<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Intro<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input Intro'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">showCount</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Gender<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please select gender!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span>
              <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
                <span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'Male'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'male'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                <span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'Female'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'female'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                <span class="token punctuation">&#123;</span> label<span class="token operator">:</span> <span class="token string">'Other'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'other'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Captcha<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>captcha<span class="token punctuation">"</span></span>
          <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>We must make sure that your are a human.<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span>
              required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">'Please input the captcha you got!'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
            <span class="token attr-name">inlaid</span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span>
            <span class="token attr-name">append</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Get captcha</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>agreement<span class="token punctuation">"</span></span>
          <span class="token attr-name">valuePropName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span>
          <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span>
              <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span>
                value
                  <span class="token operator">?</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                  <span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'Should accept agreement'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            I have read the
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> marginLeft<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">'tomato'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">agreement</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DemoScrollView</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'注册新用户'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="弹出层中的新建表单">弹出层中的新建表单<a class="doc-anchor" href="#弹出层中的新建表单">#</a></h4>
<p>当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 <code>Dialog</code> 弹出一个表单，用户填写必要信息后创建新的项。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Dialog<span class="token punctuation">,</span> Radio<span class="token punctuation">,</span> Toast<span class="token punctuation">,</span> Space <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">interface</span> <span class="token class-name">Values</span> <span class="token punctuation">&#123;</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  modifier<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">interface</span> <span class="token class-name">CollectionCreateFormProps</span> <span class="token punctuation">&#123;</span>
  visible<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token function-variable function">onCreate</span><span class="token operator">:</span> <span class="token punctuation">(</span>values<span class="token operator">:</span> Values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  <span class="token function-variable function">onVisible</span><span class="token operator">:</span> <span class="token punctuation">(</span>visible<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> CollectionCreateForm<span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>CollectionCreateFormProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  visible<span class="token punctuation">,</span>
  onCreate<span class="token punctuation">,</span>
  onVisible<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>
      <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">headed</span>
      <span class="token attr-name">buttonType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Create a new collection<span class="token punctuation">"</span></span>
      <span class="token attr-name">confirmText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Create<span class="token punctuation">"</span></span>
      <span class="token attr-name">showCancel</span>
      <span class="token attr-name">cancelText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span>
      <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onVisible<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> form
          <span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            form<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">onCreate</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Validate Failed:'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span>
            <span class="token keyword">throw</span> info
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>
        <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
        <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> modifier<span class="token operator">:</span> <span class="token string">'public'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> paddingTop<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> paddingBottom<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span>
              required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">'Please input the title of collection!'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
          <span class="token attr-name">underline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modifier<span class="token punctuation">"</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>collection-create-form_last-form-item<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>public<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Public</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>private<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Private</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dialog</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCreate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received values of form: '</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> padding<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          New Collection
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CollectionCreateForm</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>visible<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onCreate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onCreate<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setVisible<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'弹出层中的新建表单'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="时间类控件">时间类控件<a class="doc-anchor" href="#时间类控件">#</a></h4>
<p>时间类组件的 <code>value</code> 类型为 <code>Date</code> 对象，所以在提交服务器前需要预处理。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
  Button<span class="token punctuation">,</span>
  DatetimePicker<span class="token punctuation">,</span>
  FooterBar<span class="token punctuation">,</span>
  Form<span class="token punctuation">,</span>
  PopoutInput<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
  formatDate<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  rules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span> type<span class="token operator">:</span> <span class="token string">'object'</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">,</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please select time!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onFinish</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> formattedValues <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token operator">...</span>values<span class="token punctuation">,</span>
    <span class="token string-property property">'date-picker'</span><span class="token operator">:</span> <span class="token function">formatDate</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token string">'date-picker'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">'month-picker'</span><span class="token operator">:</span> <span class="token function">formatDate</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token string">'month-picker'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">'time-picker'</span><span class="token operator">:</span> <span class="token function">formatDate</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token string">'time-picker'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'HH:mm:ss'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'处理后的表单值: '</span><span class="token punctuation">,</span> formattedValues<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token function">onFinish</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleSuccess<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleFail<span class="token punctuation">&#125;</span></span> <span class="token attr-name">labelWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">100</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date-picker<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DatePicker<span class="token punctuation">"</span></span> <span class="token spread"><span class="token punctuation">&#123;</span><span class="token operator">...</span>config<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yMd<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>month-picker<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MonthPicker<span class="token punctuation">"</span></span> <span class="token spread"><span class="token punctuation">&#123;</span><span class="token operator">...</span>config<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yM<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>time-picker<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TimePicker<span class="token punctuation">"</span></span> <span class="token spread"><span class="token punctuation">&#123;</span><span class="token operator">...</span>config<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoutInput</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span> <span class="token attr-name">inputProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> placeholder<span class="token operator">:</span> <span class="token string">'请选择'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hms<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PopoutInput</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">formType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Submit
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'时间类控件'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="自行处理表单数据">自行处理表单数据<a class="doc-anchor" href="#自行处理表单数据">#</a></h4>
<p><code>Form</code> 具有自动收集数据并校验的功能，但如果您不需要这个功能，或者默认的行为无法满足业务需求，可以选择自行处理数据。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Form<span class="token punctuation">,</span> Stepper<span class="token punctuation">,</span> ValidateStatus <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> validatePrimeNumber <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token builtin">number</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  validateStatus<span class="token operator">:</span> ValidateStatus
  errorMsg<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">&#125;</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">===</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      validateStatus<span class="token operator">:</span> <span class="token string">'passed'</span><span class="token punctuation">,</span>
      errorMsg<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    validateStatus<span class="token operator">:</span> <span class="token string">'failed'</span><span class="token punctuation">,</span>
    errorMsg<span class="token operator">:</span> <span class="token string">'The prime between 8 and 12 is 11!'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> tips <span class="token operator">=</span>
  <span class="token string">'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">&#123;</span>
    value<span class="token operator">:</span> <span class="token builtin">number</span>
    validateStatus<span class="token operator">?</span><span class="token operator">:</span> ValidateStatus
    errorMsg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token punctuation">&#125;</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> value<span class="token operator">:</span> <span class="token number">11</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onNumberChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token operator">...</span><span class="token function">validatePrimeNumber</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
      value<span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">labelWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">100</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prime between 8 &amp; 12<span class="token punctuation">"</span></span>
        <span class="token attr-name">validateStatus</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token builtin">number</span><span class="token punctuation">.</span>validateStatus<span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">feedback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token builtin">number</span><span class="token punctuation">.</span>errorMsg <span class="token operator">||</span> tips<span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span>
          <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">8</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">12</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token builtin">number</span><span class="token punctuation">.</span>value<span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onNumberChange<span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'自行处理表单数据'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="自定义校验">自定义校验<a class="doc-anchor" href="#自定义校验">#</a></h4>
<p>我们提供了 <code>validateStatus</code>、 <code>feedback</code> 等属性，你可以不通过 <code>Form</code> 自己定义校验的时机和内容。</p>
<ul>
<li><code>validateStatus</code>: 校验状态，可选 <code>'passed', 'failed', 'unvalidated'</code>。</li>
<li><code>feedback</code>: 设置校验文案。</li>
</ul>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Form<span class="token punctuation">,</span> Input <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Unvalidated<span class="token punctuation">"</span></span>
        <span class="token attr-name">validateStatus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>unvalidated<span class="token punctuation">"</span></span>
        <span class="token attr-name">feedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Unvalidated feedback content<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Unvalidated<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Passed<span class="token punctuation">"</span></span>
        <span class="token attr-name">validateStatus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>passed<span class="token punctuation">"</span></span>
        <span class="token attr-name">feedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Passed feedback content<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Passed<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Failed<span class="token punctuation">"</span></span>
        <span class="token attr-name">validateStatus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>failed<span class="token punctuation">"</span></span>
        <span class="token attr-name">feedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Failed feedback content<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Failed<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'自定义校验'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
<h4 id="动态校验规则">动态校验规则<a class="doc-anchor" href="#动态校验规则">#</a></h4>
<p>根据不同情况执行不同的校验规则。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> FooterBar<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkNick<span class="token punctuation">,</span> setCheckNick<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    form<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'nickname'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">void</span> <span class="token number">0</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>checkNick<span class="token punctuation">,</span> form<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token keyword">await</span> form<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>form<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input your name'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please input your name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nickname<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Nickname<span class="token punctuation">"</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> required<span class="token operator">:</span> checkNick<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">'Please input your nickname'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please input your nickname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>checkNick<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setCheckNick<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Nickname is required
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FooterBar</span></span> <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> flexGrow<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>onCheck<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Check
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FooterBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

App<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'动态校验规则'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="FormProps">FormProps<a class="doc-anchor" href="#FormProps">#</a></h3>
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
<td>initialValues</td>
<td>表单默认值，只有初始化以及重置时生效</td>
<td>Record&lt;string, any&gt;</td>
<td>-</td>
</tr>
<tr>
<td>form</td>
<td>经 <code>Form.useForm()</code> 创建的 form 控制实例，不提供时会自动创建</td>
<td>FormStore</td>
<td>-</td>
</tr>
<tr>
<td>layout</td>
<td>设置表单项的布局</td>
<td>'horizontal' | 'vertical'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>labelWidth</td>
<td>设置标签宽度</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>labelAlign</td>
<td>设置标签水平对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>labelValign</td>
<td>设置标签垂直对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>starPosition</td>
<td>设置必填星号在标签的位置</td>
<td>'left' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用表单组件</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readOnly</td>
<td>使表单组件只读</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>scrollToFirstError</td>
<td>提交失败自动滚动到第一个错误字段</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>scrollIntoViewOptions</td>
<td>当 <code>scrollToFirstError</code> 为真时用于自定义滚动，建议使用 <code>useMemo</code> 记忆化处理</td>
<td>ScrollIntoViewOptions</td>
<td>-</td>
</tr>
<tr>
<td>validateMessages</td>
<td>验证提示模板</td>
<td>ValidateMessages</td>
<td>-</td>
</tr>
<tr>
<td>validateTrigger</td>
<td>触发规则校验的时机</td>
<td>string | string[]</td>
<td>'onChange'</td>
</tr>
<tr>
<td>validateFirst</td>
<td>是否在某一项校验不通过时停止校验</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onSuccess</td>
<td>提交成功时触发</td>
<td>(values: Record&lt;string, any&gt;) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onFail</td>
<td>提交失败时触发</td>
<td>(errors: ErrorInfo[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onReset</td>
<td>重置时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="ErrorInfo">ErrorInfo<a class="doc-anchor" href="#ErrorInfo">#</a></h3>
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
<td>errorFields</td>
<td>验证错误的字段信息</td>
<td>FieldErrors[]</td>
<td>-</td>
</tr>
<tr>
<td>values</td>
<td>表单值</td>
<td>Record&lt;string, any&gt;</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="FieldErrors">FieldErrors<a class="doc-anchor" href="#FieldErrors">#</a></h3>
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
<td>errors</td>
<td>错误信息列表</td>
<td>string[]</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>字段路径名</td>
<td>NodeName[]</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="FormFieldProps">FormFieldProps<a class="doc-anchor" href="#FormFieldProps">#</a></h3>
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
<td>layout</td>
<td>设置表单项的布局</td>
<td>'horizontal' | 'vertical'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>label</td>
<td>标签名</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>labelWidth</td>
<td>设置标签宽度</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>labelAlign</td>
<td>设置标签水平对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>labelValign</td>
<td>设置标签垂直对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>starPosition</td>
<td>设置必填星号在标签的位置</td>
<td>'left' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>required</td>
<td>必填样式设置。如不设置，则会根据校验规则自动生成</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>hidden</td>
<td>是否隐藏字段（依然会收集和校验字段）</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>unstyled</td>
<td>是否无样式，仅处理行为</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>underline</td>
<td>是否显示字段底部边框</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>inlaid</td>
<td>设置为嵌入样式，会去掉内边距</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>表单项的名称，用于校验、或设置、获取值等操作</td>
<td>NodeName</td>
<td>-</td>
</tr>
<tr>
<td>valuePropName</td>
<td>子组件值的属性</td>
<td>string</td>
<td>'value'</td>
</tr>
<tr>
<td>trigger</td>
<td>子组件值改变时的回调名</td>
<td>string</td>
<td>'onChange'</td>
</tr>
<tr>
<td>initialValue</td>
<td>子组件初始值，<code>Form</code> 的 <code>initialValues </code> 优先级较高</td>
<td>any</td>
<td>-</td>
</tr>
<tr>
<td>getValueFromTrigger</td>
<td>设置如何从值改变的回调中提取字段值</td>
<td>(...args: any[]) =&gt; any</td>
<td>(value) =&gt; value</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用表单组件</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readOnly</td>
<td>只读表单组件</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>rules</td>
<td>校验规则</td>
<td>Rule[]</td>
<td>-</td>
</tr>
<tr>
<td>validateFirst</td>
<td>是否在某一规则校验不通过时停止校验</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>validateTrigger</td>
<td>触发规则校验的时机</td>
<td>string | string[]</td>
<td>'onChange'</td>
</tr>
<tr>
<td>validateStatus</td>
<td>自定义验证状态</td>
<td>ValidateStatus</td>
<td>-</td>
</tr>
<tr>
<td>feedback</td>
<td>自定义反馈信息，不设置则根据规则自动生成</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>extra</td>
<td>自定义额外信息</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>watch</td>
<td>监听指定字段值的变化，重新渲染组件</td>
<td>NamePath[]</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="NodeName">NodeName<a class="doc-anchor" href="#NodeName">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">NodeName</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="NamePath">NamePath<a class="doc-anchor" href="#NamePath">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">NamePath</span> <span class="token operator">=</span> NodeName <span class="token operator">|</span> NodeName<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="ValidateStatus">ValidateStatus<a class="doc-anchor" href="#ValidateStatus">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ValidateStatus</span> <span class="token operator">=</span> <span class="token string">'passed'</span> <span class="token operator">|</span> <span class="token string">'failed'</span> <span class="token operator">|</span> <span class="token string">'unvalidated'</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="Rule">Rule<a class="doc-anchor" href="#Rule">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">Rule</span> <span class="token operator">=</span> RuleConfig <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>form<span class="token operator">:</span> FormStore<span class="token punctuation">)</span> <span class="token operator">=></span> RuleConfig<span class="token punctuation">)</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="RuleConfig">RuleConfig<a class="doc-anchor" href="#RuleConfig">#</a></h3>
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
<td>validator</td>
<td>通过函数来自定义验证</td>
<td>(value: any, rule: Rule) =&gt; Promise&lt;void&gt; | boolean | string</td>
<td>-</td>
</tr>
<tr>
<td>pattern</td>
<td>通过正则来进行校验</td>
<td>RegExp</td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>校验失败的反馈文案</td>
<td>string | (() =&gt; string)</td>
<td>-</td>
</tr>
<tr>
<td>trigger</td>
<td>触发校验的时机</td>
<td>'onBlur' | 'onChange' | 'onSubmit' | ('onBlur' | 'onChange' | 'onSubmit')[]</td>
<td>-</td>
</tr>
<tr>
<td>transform</td>
<td>将值转换后再进行校验</td>
<td>(value: any, rule: Rule) =&gt; any</td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>是否为必选字段，当值为空值时 <code>'', [], false, undefined, null</code>，校验不通过</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>使用内置的校验规则</td>
<td>ValidatorType</td>
<td>'string'</td>
</tr>
<tr>
<td>enum</td>
<td>是否匹配枚举中的值（需要将 type 设置为 enum）</td>
<td>any[]</td>
<td>-</td>
</tr>
<tr>
<td>len</td>
<td>当 <code>type</code> 为字符串（字符串长度）、数值（等于数值）、数组（数组长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>min</td>
<td>当 <code>type</code> 为字符串（字符串最小长度）、数值（最小值）、数组（数组最小长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>max</td>
<td>当 <code>type</code> 为字符串（字符串最大长度）、数值（最大值）、数组（数组最大长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>whitespace</td>
<td><code>type</code> 为 <code>'string'</code> 时，如果字段仅包含空格则校验不通过</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h4 id="RuleConfigvalidator说明">RuleConfig['validator']说明<a class="doc-anchor" href="#RuleConfigvalidator说明">#</a></h4>
<p>如何函数返回 <code>true</code>，或者返回 <code>fulfilled</code> 状态的 <code>Promise</code> 表示验证通过；返回 <code>false</code> 或 <code>rejected</code> 状态的 <code>Promise</code> 表示验证失败。当返回字符串或返回的 <code>Promise</code> 的 <code>catch</code> 函数参数为字符串时，此字符串会替换 <code>message</code>。</p>
</div><div class="doc-card"><h3 id="ValidatorType">ValidatorType<a class="doc-anchor" href="#ValidatorType">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>string</td>
<td>必须为字符串</td>
</tr>
<tr>
<td>number</td>
<td>必须为数值</td>
</tr>
<tr>
<td>boolean</td>
<td>必须为布尔值</td>
</tr>
<tr>
<td>function</td>
<td>必须为函数</td>
</tr>
<tr>
<td>regexp</td>
<td>必须为 <code>RegExp</code> 类型，或者作为 <code>RegExp()</code> 参数被实例化不会报错的字符串</td>
</tr>
<tr>
<td>integer</td>
<td>必须为数值，且为整数</td>
</tr>
<tr>
<td>float</td>
<td>必须为数值，且为小数</td>
</tr>
<tr>
<td>array</td>
<td>必须为数组</td>
</tr>
<tr>
<td>object</td>
<td>必须为对象，且不为数组和 <code>null</code></td>
</tr>
<tr>
<td>enum</td>
<td>必须存在于 <code>enum</code> 中</td>
</tr>
<tr>
<td>date</td>
<td>必须为 <code>Date</code> 类型</td>
</tr>
<tr>
<td>url</td>
<td>必须为 <code>url</code></td>
</tr>
<tr>
<td>hex</td>
<td>必须为 <code>hex</code></td>
</tr>
<tr>
<td>email</td>
<td>必须为邮件</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="ValidateMessages">ValidateMessages<a class="doc-anchor" href="#ValidateMessages">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">ValidateMessages</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  required<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">enum</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  whitespace<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  date<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    format<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    parse<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    invalid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">&#125;</span>
  types<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">string</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token keyword">function</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    array<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    object<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token builtin">number</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    date<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token builtin">boolean</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    integer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    float<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    regexp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    hex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">&#125;</span>
  <span class="token builtin">string</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    len<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    min<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    range<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">&#125;</span>
  <span class="token builtin">number</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    len<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    min<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    range<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">&#125;</span>
  array<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    len<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    min<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    range<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">&#125;</span>
  pattern<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    mismatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="ScrollIntoViewOptions">ScrollIntoViewOptions<a class="doc-anchor" href="#ScrollIntoViewOptions">#</a></h3>
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
<td>behavior</td>
<td>定义滚动是立即的还是平滑的动画</td>
<td>'smooth' | 'instant'</td>
<td>'instant'</td>
</tr>
<tr>
<td>block</td>
<td>定义垂直方向的对齐</td>
<td>'start' | 'center' | 'end' | 'nearest'</td>
<td>'start'</td>
</tr>
<tr>
<td>offsetTop</td>
<td>元素距离页面顶部的距离</td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>offsetBottom</td>
<td>元素距离页面底部的距离</td>
<td>number</td>
<td>0</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="FormListProps">FormListProps<a class="doc-anchor" href="#FormListProps">#</a></h3>
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
<td>列表节点内容</td>
<td>(fields: FormListField[], operation: FormListOperations, meta: FormListMeta) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>列表节点的名称，用于校验、或设置、获取值等操作</td>
<td>NodeName</td>
<td>-</td>
</tr>
<tr>
<td>initialValue</td>
<td>列表节点初始值，<code>Form</code> 的 <code>initialValues </code> 优先级较高</td>
<td>any[]</td>
<td>-</td>
</tr>
<tr>
<td>rules</td>
<td>校验规则</td>
<td>Rule[]</td>
<td>-</td>
</tr>
<tr>
<td>validateFirst</td>
<td>是否在某一规则校验不通过时停止校验</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>validateTrigger</td>
<td>触发规则校验的时机</td>
<td>string | string[]</td>
<td>'onChange'</td>
</tr>
<tr>
<td>validateStatus</td>
<td>自定义验证状态</td>
<td>ValidateStatus</td>
<td>-</td>
</tr>
<tr>
<td>watch</td>
<td>监听指定字段值的变化，重新渲染组件</td>
<td>NamePath[]</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="FormListField">FormListField<a class="doc-anchor" href="#FormListField">#</a></h3>
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
<td>key</td>
<td>列表项的唯一<code>key</code></td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>列表项的名称</td>
<td>number</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="FormListOperations">FormListOperations<a class="doc-anchor" href="#FormListOperations">#</a></h3>
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
<td>add</td>
<td>新增表单项</td>
<td>(defaultValue?: any, insertIndex?: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>move</td>
<td>移动表单项</td>
<td>(from: number, to: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>remove</td>
<td>删除表单项</td>
<td>(index: number | number[]) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="FormListMeta">FormListMeta<a class="doc-anchor" href="#FormListMeta">#</a></h3>
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
<td>errors</td>
<td>错误信息列表</td>
<td>string[]</td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>是否必须</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>validateStatus</td>
<td>验证状态</td>
<td>ValidateStatus</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="FormMapProps">FormMapProps<a class="doc-anchor" href="#FormMapProps">#</a></h3>
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
<td>映射节点内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>映射节点的名称，用于校验、或设置、获取值等操作</td>
<td>NodeName</td>
<td>-</td>
</tr>
<tr>
<td>initialValue</td>
<td>映射节点初始值，<code>Form</code> 的 <code>initialValues </code> 优先级较高</td>
<td>Record&lt;string, any&gt;</td>
<td>-</td>
</tr>
<tr>
<td>rules</td>
<td>校验规则</td>
<td>Rule[]</td>
<td>-</td>
</tr>
<tr>
<td>validateFirst</td>
<td>是否在某一规则校验不通过时停止校验</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>validateTrigger</td>
<td>触发规则校验的时机</td>
<td>string | string[]</td>
<td>'onChange'</td>
</tr>
<tr>
<td>validateStatus</td>
<td>自定义验证状态</td>
<td>ValidateStatus</td>
<td>-</td>
</tr>
<tr>
<td>watch</td>
<td>监听指定字段值的变化，重新渲染组件</td>
<td>NamePath[]</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="FormStore">FormStore<a class="doc-anchor" href="#FormStore">#</a></h3>
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
<td>getError</td>
<td>获取某个节点的错误信息</td>
<td>(name: NamePath) =&gt; string[]</td>
<td>-</td>
</tr>
<tr>
<td>getErrors</td>
<td>返回所有或一组节点的错误信息</td>
<td>(name?: NamePath[]) =&gt; FieldErrors[]</td>
<td>-</td>
</tr>
<tr>
<td>getValue</td>
<td>获取某个节点的值</td>
<td>(name: NamePath) =&gt; any</td>
<td>-</td>
</tr>
<tr>
<td>getValues</td>
<td>获取所有或一组节点对应的值</td>
<td>(name?: NamePath[]) =&gt; any</td>
<td>-</td>
</tr>
<tr>
<td>scrollToField</td>
<td>滚动到指定字段位置</td>
<td>(name: NamePath, options?: ScrollIntoViewOptions) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>setNodeData</td>
<td>设置一组字段状态</td>
<td>(data: NodeData[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>setValues</td>
<td>设置表单的值</td>
<td>(values: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>setValue</td>
<td>设置指定节点的值</td>
<td>(name: NamePath, value: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>validate</td>
<td>验证指定的字段，不传递字段名则验证所有字段</td>
<td>(name?: NamePath[] | ValidateOptions, options?: ValidateOptions) =&gt; Promise&lt;any&gt;</td>
<td>-</td>
</tr>
<tr>
<td>submit</td>
<td>提交表单，与点击 submit 按钮效果相同</td>
<td>() =&gt; Promise&lt;void&gt;</td>
<td>-</td>
</tr>
<tr>
<td>reset</td>
<td>重置一组节点到初始值</td>
<td>(name?: NamePath[]) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="useForm">useForm<a class="doc-anchor" href="#useForm">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">useForm</span><span class="token punctuation">(</span>form<span class="token operator">?</span><span class="token operator">:</span> FormStore<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span>FormStore<span class="token punctuation">]</span>
</code></pre></div>
<p>创建 <code>FormStore</code> 实例，用于管理所有数据状态。</p>
</div><div class="doc-card"><h3 id="useWatch">useWatch<a class="doc-anchor" href="#useWatch">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">useWatch</span><span class="token punctuation">(</span>name<span class="token operator">:</span> NamePath <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> form<span class="token operator">?</span><span class="token operator">:</span> FormStore<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span>
</code></pre></div>
<p>用于直接获取 form 中字段对应的值。</p>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-form-field-padding-x</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-padding-y</span></span><span class="token punctuation">:</span> 10px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-base</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-line-height</span></span><span class="token punctuation">:</span> 24px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-form-field-label-width</span></span><span class="token punctuation">:</span> 88px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-label-margin-right</span></span><span class="token punctuation">:</span> 12px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-label-margin-bottom</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-form-field-star-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-danger</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-star-gap</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-form-field-feedback-margin-top</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-sm</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-line-height</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-form-field-feedback-font-size</span> <span class="token operator">*</span>
  <span class="token variable">$sar-leading-tight</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-failed-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-danger</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-passed-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-unvalidated-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-form-field-extra-margin-top</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-extra-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-sm</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-extra-line-height</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-form-field-extra-font-size</span> <span class="token operator">*</span>
  <span class="token variable">$sar-leading-tight</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-extra-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-failed-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-danger</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-passed-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-feedback-unvalidated-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-form-field-extra-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-tertiary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
