import{a as n,F as e,U as c,r as l,j as r,f as g,I as m,B as D,R as t}from"./index-be529937.js";import{D as u}from"./Demo-af4ebbee.js";import"./index.es-58ca08bc.js";function f(){return n(e,{children:n(c,{})})}const U={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function y(){const[p,s]=l.useState([]);return n(e,{children:n(c,{fileList:p,onChange:s,afterRead:a=>{a.status="uploading",a.message="正在上传",s(o=>[...o]),setTimeout(()=>{a.status="done",s(o=>[...o])},1500)}})})}const A={doc:`<h3>受控</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload<span class="token punctuation">,</span> UploadFileItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAfterRead</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fileItem</span><span class="token operator">:</span> UploadFileItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'uploading'</span>
    fileItem<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">'正在上传'</span>
    <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'done'</span>
      <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span> <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setList<span class="token punctuation">}</span></span> <span class="token attr-name">afterRead</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleAfterRead<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`},d=new URL("/sard/pic1.jpg",self.location).href;function h(){const[p,s]=l.useState(()=>[{url:d},{url:d,status:"uploading",message:"正在上传"},{url:d,status:"failed",message:"上传失败"}]);return n(e,{children:n(c,{fileList:p,onChange:s,afterRead:a=>{a.status="uploading",a.message="正在上传",s(o=>[...o]),setTimeout(()=>{a.status="failed",a.message="上传失败",s(o=>[...o])},1500)}})})}const L={doc:`<h3>上传状态</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload<span class="token punctuation">,</span> UploadFileItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">const</span> logoHref <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic1.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> logoHref<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> logoHref<span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'uploading'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'正在上传'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> logoHref<span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'failed'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'上传失败'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAfterRead</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fileItem</span><span class="token operator">:</span> UploadFileItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'uploading'</span>
    fileItem<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">'正在上传'</span>
    <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'failed'</span>
      fileItem<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">'上传失败'</span>
      <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span> <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setList<span class="token punctuation">}</span></span> <span class="token attr-name">afterRead</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleAfterRead<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function F(){const[p,s]=l.useState([]);return n(e,{children:n(c,{fileList:p,onChange:s,afterRead:a=>{a.status="uploading",a.message="正在上传",s(o=>[...o]),setTimeout(()=>{a.status="done",s(o=>[...o])},1500)},maxCount:1})})}const R={doc:`<h3>限定上传数量</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload<span class="token punctuation">,</span> UploadFileItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAfterRead</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fileItem</span><span class="token operator">:</span> UploadFileItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'uploading'</span>
    fileItem<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">'正在上传'</span>
    <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      fileItem<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'done'</span>
      <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
        <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setList<span class="token punctuation">}</span></span>
        <span class="token attr-name">afterRead</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleAfterRead<span class="token punctuation">}</span></span>
        <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function w(){const[p,s]=l.useState([]),i=k=>{console.log(k),g.show("文件大小不能超过12KB")},[a,o]=l.useState([]),C=k=>k.type.indexOf("image")===0&&k.size>12*1024?(g.show("图片大小不能超过12KB"),!0):!1;return r(e,{children:[n(c,{fileList:p,onChange:s,maxSize:12*1024,overSize:i}),n("div",{style:{marginTop:20,marginBottom:10},children:"只对图片文件大小进行限定："}),n(c,{accept:"*/*",fileList:a,onChange:o,maxSize:C})]})}const S={doc:`<h3>限定上传大小</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload<span class="token punctuation">,</span> UploadFileItem<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleOverSize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fileItem</span><span class="token operator">:</span> UploadFileItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fileItem<span class="token punctuation">)</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'文件大小不能超过12KB'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>list2<span class="token punctuation">,</span> setList2<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleMaxSize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">file</span><span class="token operator">:</span> File</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'image'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> file<span class="token punctuation">.</span>size <span class="token operator">></span> <span class="token number">12</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'图片大小不能超过12KB'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
        <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setList<span class="token punctuation">}</span></span>
        <span class="token attr-name">maxSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">overSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleOverSize<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        只对图片文件大小进行限定：
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
        <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*/*<span class="token punctuation">"</span></span>
        <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list2<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setList2<span class="token punctuation">}</span></span>
        <span class="token attr-name">maxSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleMaxSize<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function v(){const[p,s]=l.useState([]);return r(e,{children:[n("div",{children:"请上传图片："}),n(c,{fileList:p,onChange:s,beforeRead:a=>a.type.indexOf("image")!==0?(g.show("只能上传图片"),!1):!0})]})}const I={doc:`<h3>上传前置处理</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload<span class="token punctuation">,</span> UploadFileItem<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleBeforeRead</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">file</span><span class="token operator">:</span> File</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'image'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'只能上传图片'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">请上传图片：</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
        <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setList<span class="token punctuation">}</span></span>
        <span class="token attr-name">beforeRead</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleBeforeRead<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function E(){return n(e,{children:n(c,{fileList:[{url:new URL("/sard/pic1.jpg",self.location).href}],disabled:!0})})}const j={doc:`<h3>禁用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
        <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic1.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">disabled</span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function b(){return n(e,{children:n(c,{fileList:[{url:new URL("/sard/pic1.jpg",self.location).href}],readOnly:!0})})}const z={doc:`<h3>只读</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
        <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../../../../public/pic1.jpg'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">readOnly</span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function x(){const[p,s]=l.useState([]);return n(e,{children:n(c,{fileList:p,onChange:s,select:r(e,{children:[n(m,{style:{fontSize:20},name:"bi-camera"}),n("div",{style:{fontSize:12,marginTop:5},children:"上传图片"})]})})})}const T={doc:`<h3>自定义选区样式</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload<span class="token punctuation">,</span> UploadFileItem<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap-icons/font/bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>
        <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setList<span class="token punctuation">}</span></span>
        <span class="token attr-name">select</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-camera<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">上传图片</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function B(){const[p,s]=l.useState([]);return n(e,{children:n(c,{fileList:p,onChange:s,children:r(D,{children:[n(m,{name:"bi-upload"}),n("span",{style:{marginLeft:5},children:"文件上传"})]})})})}const P={doc:`<h3>自定义上传样式</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload<span class="token punctuation">,</span> UploadFileItem<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap-icons/font/bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UploadFileItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span> <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setList<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-upload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">文件上传</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Upload</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};f.doc=U;y.doc=A;h.doc=L;F.doc=R;w.doc=S;v.doc=I;E.doc=j;b.doc=z;x.doc=T;B.doc=P;function _(){return t.createElement("div",{className:"doc-content"},t.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="upload-shang-chuan">Upload 上传<a class="doc-anchor" href="#upload-shang-chuan">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>控制文件的上传及状态展示。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),t.createElement("section",{className:"doc-section"},t.createElement(u,null,f),t.createElement(u,null,y),t.createElement(u,null,h),t.createElement(u,null,F),t.createElement(u,null,w),t.createElement(u,null,v),t.createElement(u,null,E),t.createElement(u,null,b),t.createElement(u,null,x),t.createElement(u,null,B)),t.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="uploadprops">UploadProps<a class="doc-anchor" href="#uploadprops">#</a></h3>
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
<td>string</td>
<td>'image/*'</td>
</tr>
<tr>
<td>multiple</td>
<td>是否开启图片多选，部分安卓机型不支持</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>capture</td>
<td>使用哪个设备捕获一个可选的新文件</td>
<td>boolean | 'user' | 'environment'</td>
<td>-</td>
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
<td>(previewProps: UploadProps['multiple'] extends true ? UploadFileItem[] : UploadFileItem) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>select</td>
<td>自定义选择区的内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>resultType</td>
<td>文件读取结果类型</td>
<td>'file' | 'dataUrl' | 'text'</td>
<td>'dataUrl'</td>
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
<td>文件读取前的回调函数，返回 false 可终止文件读取，支持返回 Promise</td>
<td>(file: File) =&gt; boolean | Promise<File></td>
<td>-</td>
</tr>
<tr>
<td>afterRead</td>
<td>文件读取完成后的回调函数</td>
<td>(previewProps: UploadProps['multiple'] extends true ? UploadFileItem[] : UploadFileItem) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>上传文件改变时触发</td>
<td>(previewPropsList: UploadFileItem[]) =&gt; void</td>
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
<td>文件删除前的回调函数，返回 false 可终止文件读取，支持返回 Promise</td>
<td>(...args: any[]) =&gt; boolean | Promise<void></td>
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
</div><div class="doc-card"><h3 id="uploadfileitem">UploadFileItem<a class="doc-anchor" href="#uploadfileitem">#</a></h3>
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
<td>className</td>
<td>类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>style</td>
<td>样式</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>file</td>
<td>用户选择的文件</td>
<td>File</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>要展示的文件名，如果不指定且指定了 <code>file</code>，则获取 <code>file</code> 的 <code>name</code></td>
<td>React.ReactNode</td>
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
<td>默认会从 <code>file</code>, <code>url</code>, <code>content</code> 中判断是否为图片，如果这些信息中都不能获取图片信息，则需要手动指定为图片类型</td>
<td>boolean</td>
<td>-</td>
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
<td>content</td>
<td>可以不指定 <code>url</code> 而是指定图片的 <code>Data URL</code></td>
<td>Data URL</td>
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
<td>文件删除前的回调函数，会覆盖 <code>UploadProps['beforeRemove']</code></td>
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
</div><div class="doc-card"><h3 id="uploadstatus">UploadStatus<a class="doc-anchor" href="#uploadstatus">#</a></h3>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">UploadStatus</span> <span class="token operator">=</span> <span class="token string">'pending'</span> <span class="token operator">|</span> <span class="token string">'uploading'</span> <span class="token operator">|</span> <span class="token string">'failed'</span> <span class="token operator">|</span> <span class="token string">'done'</span>
</code></pre>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-upload-preview-width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-gap</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-upload-preview-file-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-file-icon-font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-file-name-margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-file-name-padding-x</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-file-name-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-upload-preview-status-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-status-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-mask-illegible<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-status-icon-font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-status-message-margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-status-message-padding-x</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-status-message-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-upload-preview-close-top</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-close-right</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-close-width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-close-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-close-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-close-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-upload-preview-close-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-mask-illegible<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-upload-select-width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-select-height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-select-font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">--s-upload-select-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-secondary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-upload-select-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-upload-select-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-upload-select-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-upload-input-wrapper-margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[data-s-theme='dark'] </span><span class="token punctuation">{</span>
  <span class="token property">--s-upload-select-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{_ as default};
