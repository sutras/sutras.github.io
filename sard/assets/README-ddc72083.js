import{R as a}from"./index-69dd4e27.js";import{u as s}from"./useCodeTool-595109b3.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Upload上传">Upload 上传<a class="doc-anchor" href="#Upload上传">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>控制文件的上传及状态展示。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Upload <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>选择文件后通过 <code>afterRead</code> 将文件上传到服务器。期间通过 <code>UploadFileItem['status']</code> 和 <code>UploadFileItem['message']</code> 修改上传的状态。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Upload<span class="token punctuation">,</span> UploadFileItem <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">uploadFile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAfterRead</span> <span class="token operator">=</span> <span class="token punctuation">(</span>fileItem<span class="token operator">:</span> UploadFileItem<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'uploading'</span>
    fileItem<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">'正在上传'</span>
    <span class="token function">setFileList</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fileList<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>fileList<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'done'</span>
        <span class="token function">setFileList</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fileList<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>fileList<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'failed'</span>
        <span class="token function">setFileList</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fileList<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>fileList<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>fileList<span class="token punctuation">,</span> setFileList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
      <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>fileList<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setFileList<span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">afterRead</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleAfterRead<span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="上传视频">上传视频<a class="doc-anchor" href="#上传视频">#</a></h3>
<p>默认只能选择图片，可以设置 <code>accept=&quot;video&quot;</code> 来选择上传视频。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Upload <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
      <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultFileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
          url<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/video/video1.mp4'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          url<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/video/video1.mp4'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
          url<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/video/video1.mp4'</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="限定上传数量">限定上传数量<a class="doc-anchor" href="#限定上传数量">#</a></h3>
<p>通过 <code>maxCount</code> 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏选择区域。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Upload <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">3</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="多选">多选<a class="doc-anchor" href="#多选">#</a></h3>
<p>默认一次只能选择一张图片，设置 <code>multiple</code> 允许图片多选。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Upload <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span> <span class="token attr-name">multiple</span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">6</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="上传前置处理">上传前置处理<a class="doc-anchor" href="#上传前置处理">#</a></h3>
<p>通过传入 <code>beforeRead</code> 函数可以在上传前进行校验和处理，返回 <code>true</code> 表示校验通过，返回 <code>false</code> 表示校验失败。支持返回 <code>Promise</code> 对 <code>file</code> 对象进行自定义处理。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Toast<span class="token punctuation">,</span> Upload <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
      <span class="token attr-name">beforeRead</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'这里可以阻止文件选择'</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">&#125;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="限定上传大小">限定上传大小<a class="doc-anchor" href="#限定上传大小">#</a></h3>
<p>通过 <code>maxSize</code> 属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过 <code>overSize</code> 事件获取。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Toast<span class="token punctuation">,</span> Upload <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
      <span class="token attr-name">maxSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">1</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">&#125;</span></span>
      <span class="token attr-name">overSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span>fileItem<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fileItem<span class="token punctuation">)</span>
        Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'文件大小不能超过1KB'</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="上传状态">上传状态<a class="doc-anchor" href="#上传状态">#</a></h3>
<p>通过 <code>status</code> 属性可以标识上传状态，<code>uploading</code> 表示上传中，<code>failed</code> 表示上传失败，<code>done</code> 表示上传完成。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Upload<span class="token punctuation">,</span> UploadFileItem <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleAfterRead</span> <span class="token operator">=</span> <span class="token punctuation">(</span>fileItem<span class="token operator">:</span> UploadFileItem<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fileItem<span class="token punctuation">)</span>
    fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'uploading'</span>
    fileItem<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">'正在上传'</span>
    <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'done'</span>
      <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      url<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/images/pic1.jpg'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      url<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/images/pic2.jpg'</span><span class="token punctuation">,</span>
      status<span class="token operator">:</span> <span class="token string">'uploading'</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> <span class="token string">'正在上传'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      url<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/images/pic3.jpg'</span><span class="token punctuation">,</span>
      status<span class="token operator">:</span> <span class="token string">'failed'</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> <span class="token string">'上传失败'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span> <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>list<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setList<span class="token punctuation">&#125;</span></span> <span class="token attr-name">afterRead</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleAfterRead<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="只读和禁用">只读和禁用<a class="doc-anchor" href="#只读和禁用">#</a></h3>
<p>只读或禁用会隐藏选择区域。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Space<span class="token punctuation">,</span> Upload <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
        <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
          <span class="token punctuation">&#123;</span>
            url<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/images/pic1.jpg'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">readOnly</span>
      <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
        <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
          <span class="token punctuation">&#123;</span>
            url<span class="token operator">:</span> <span class="token string">'https://unpkg.com/@sard/assets@1.2.0/images/pic1.jpg'</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
        <span class="token attr-name">disabled</span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="自定义选区样式">自定义选区样式<a class="doc-anchor" href="#自定义选区样式">#</a></h3>
<p>使用 <code>select</code> 属性自定义选区内容。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> View <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@tarojs/components'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon<span class="token punctuation">,</span> Upload <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
      <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">20</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>camera<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> marginTop<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">上传图片</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">&#125;</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="UploadProps">UploadProps<a class="doc-anchor" href="#UploadProps">#</a></h3>
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
<td>accept</td>
<td>允许上传的文件类型</td>
<td>'image' | 'video'</td>
<td>'image'</td>
</tr>
<tr>
<td>multiple</td>
<td>是否开启图片多选</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>sourceType</td>
<td>文件选择来源</td>
<td>('album' | 'camera')[]</td>
<td>['album', 'camera']</td>
</tr>
<tr>
<td>sizeType</td>
<td>所选的图片的尺寸</td>
<td>('original' | 'compressed')[]</td>
<td>['original', 'compressed']</td>
</tr>
<tr>
<td>maxDuration</td>
<td>拍摄视频最长拍摄时间，单位秒</td>
<td>number</td>
<td>60</td>
</tr>
<tr>
<td>camera</td>
<td>默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效</td>
<td>'back' | 'front'</td>
<td>'back'</td>
</tr>
<tr>
<td>fileList</td>
<td>已上传的文件列表</td>
<td>UploadFileItem[]</td>
<td>-</td>
</tr>
<tr>
<td>defaultFileList</td>
<td>默认已上传的文件列表</td>
<td>UploadFileItem[]</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>上传文件改变时触发</td>
<td>(fileItemList: UploadFileItem[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>maxCount</td>
<td>文件上传数量限制</td>
<td>number</td>
<td>Number.MAX_SAFE_INTEGER</td>
</tr>
<tr>
<td>maxSize</td>
<td>文件大小限制，单位为 <code>byte</code></td>
<td>number | ((file: File) =&gt; boolean)</td>
<td>Number.MAX_SAFE_INTEGER</td>
</tr>
<tr>
<td>overSize</td>
<td>文件大小超过限制时触发</td>
<td>(fileItem: UploadFileItem | UploadFileItem[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>select</td>
<td>自定义选择区的内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用文件上传</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readOnly</td>
<td>是否将上传区域设置为只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>beforeRead</td>
<td>文件读取前的回调，返回 false 可终止文件读取，支持返回 Promise</td>
<td>(file: File) =&gt; boolean | Promise<File></td>
<td>-</td>
</tr>
<tr>
<td>afterRead</td>
<td>文件读取完成后的回调</td>
<td>(fileItem: UploadFileItem | UploadFileItem[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>removable</td>
<td>是否可删除</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>remove</td>
<td>自定义删除按钮</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>beforeRemove</td>
<td>文件删除前的回调，返回 false 可终止文件读取，支持返回 Promise</td>
<td>(...args: any[]) =&gt; boolean | Promise<void></td>
<td>-</td>
</tr>
<tr>
<td>onRemove</td>
<td>删除文件预览时触发</td>
<td>(index: number) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>mode</td>
<td>图片裁剪、缩放的模式</td>
<td>ImageProps['mode']</td>
<td>'aspectFill'</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="UploadRef">UploadRef<a class="doc-anchor" href="#UploadRef">#</a></h3>
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
<td>select</td>
<td>选择文件</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="UploadFileItem">UploadFileItem<a class="doc-anchor" href="#UploadFileItem">#</a></h3>
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
<td>file</td>
<td>用户选择的文件</td>
<td>UploadFile</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>图片和视频之外的文件要展示的文件名，如果不指定且有 <code>file</code>，则获取 <code>file</code> 的文件名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>url</td>
<td>图片的 <code>url</code></td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>isImage</td>
<td>当无法从 <code>url</code> 中判断为图片时，可以显式指定为图片，以便可以对图片进行预览</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>isVideo</td>
<td>当无法从 <code>url</code> 中判断为视频时，可以显式指定为视频，以便可以对视频进行预览</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>status</td>
<td>指定预览图片的状态</td>
<td>UploadStatus</td>
<td>'pending'</td>
</tr>
<tr>
<td>message</td>
<td>展示预览图片在 <code>uploading</code>, <code>failed</code> 等状态下的说明文本</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>removable</td>
<td>是否可删除，会覆盖 <code>UploadProps['removable']</code></td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>remove</td>
<td>自定义删除按钮，会覆盖 <code>UploadProps['remove']</code></td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>beforeRemove</td>
<td>文件删除前的回调，会覆盖 <code>UploadProps['beforeRemove']</code></td>
<td>(index: number) =&gt; boolean | Promise<void></td>
<td>-</td>
</tr>
<tr>
<td>onRemove</td>
<td>删除文件预览时触发</td>
<td>(index: number) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="UploadStatus">UploadStatus<a class="doc-anchor" href="#UploadStatus">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">UploadStatus</span> <span class="token operator">=</span> <span class="token string">'pending'</span> <span class="token operator">|</span> <span class="token string">'uploading'</span> <span class="token operator">|</span> <span class="token string">'failed'</span> <span class="token operator">|</span> <span class="token string">'done'</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="UploadFile">UploadFile<a class="doc-anchor" href="#UploadFile">#</a></h3>
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
<td>文件类型</td>
<td>'image' | 'video'</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>文件大小，单位字节</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>path</td>
<td>本地临时文件路径</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>选定视频的时间长度</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>width</td>
<td>返回选定视频的宽度</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>height</td>
<td>返回选定视频的高度</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>originalFileObj</td>
<td>原始的浏览器 <code>File</code> 对象，仅 H5 支持</td>
<td>File</td>
<td>null</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-upload-preview-width</span></span><span class="token punctuation">:</span> 88px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-preview-height</span></span><span class="token punctuation">:</span> 88px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-preview-gap</span></span><span class="token punctuation">:</span> 8px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-preview-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-preview-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-secondary-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-preview-video-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-black</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-upload-file-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-body-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-file-icon-font-size</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-file-name-margin-top</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-file-name-padding-x</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-file-name-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-sm</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-upload-status-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-status-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-mask-illegible</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-status-icon-font-size</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-status-message-margin-top</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-status-message-padding-x</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-status-message-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-sm</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-upload-close-top</span></span><span class="token punctuation">:</span> 2px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-close-right</span></span><span class="token punctuation">:</span> 2px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-close-width</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-close-height</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-close-font-size</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-text-sm</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-close-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-white</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-close-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-mask-illegible</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-upload-select-width</span></span><span class="token punctuation">:</span> 88px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-select-height</span></span><span class="token punctuation">:</span> 88px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-select-font-size</span></span><span class="token punctuation">:</span> 24px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-select-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-select-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-select-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-secondary-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-select-active-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-active-deep-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-upload-video-play-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-mask-legible</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-video-play-color</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>white<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-upload-loading-size</span></span><span class="token punctuation">:</span> 20px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-upload-preview-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-secondary-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-file-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-body-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-select-dark-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-secondary-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-select-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-secondary-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-upload-select-active-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-active-deep-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
