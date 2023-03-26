import{r as e,j as c,F as p,a as s,B as l,m as u,I as h,h as r,R as t}from"./index-be529937.js";import{D as o}from"./Demo-af4ebbee.js";import"./index.es-58ca08bc.js";function d(){const[a,n]=e.useState(!1);return c(p,{children:[s(l,{onClick:()=>n(!0),children:"弹出键盘"}),s(u,{visible:a,onVisible:n})]})}const E={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberKeyboard<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出键盘</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span> <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function b(){const[a,n]=e.useState(!1);return c(p,{children:[s(l,{onClick:()=>n(!0),children:"弹出键盘"}),s(u,{extraKey:".",visible:a,onVisible:n})]})}const D={doc:`<h3>小数点</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberKeyboard<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出键盘</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span> <span class="token attr-name">extraKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.<span class="token punctuation">"</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span> <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function g(){const[a,n]=e.useState(!1);return c(p,{children:[s(l,{onClick:()=>n(!0),children:"弹出键盘"}),s(u,{extraKey:"X",visible:a,onVisible:n})]})}const w={doc:`<h3>身份证</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberKeyboard<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出键盘</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span> <span class="token attr-name">extraKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X<span class="token punctuation">"</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span> <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function m(){const[a,n]=e.useState(!1);return c(p,{children:[s(l,{onClick:()=>n(!0),children:"弹出键盘"}),s(u,{title:c(p,{children:[s(h,{name:"bi-shield-lock-fill"}),s("span",{style:{marginLeft:5,verticalAlign:"middle"},children:"安全键盘"})]}),visible:a,onVisible:n})]})}const B={doc:`<h3>标题</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberKeyboard<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap-icons/font/bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出键盘</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span>
        <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-shield-lock-fill<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">verticalAlign</span><span class="token operator">:</span> <span class="token string">'middle'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              安全键盘
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function y(){const[a,n]=e.useState(!1);return c(p,{children:[s(l,{onClick:()=>n(!0),children:"弹出键盘"}),s(u,{random:!0,visible:a,onVisible:n})]})}const F={doc:`<h3>随机数字</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberKeyboard<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">弹出键盘</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span> <span class="token attr-name">random</span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span> <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function v(){const[a,n]=e.useState(!1),[i,k]=e.useState("");return c(p,{children:[s(r,{readOnly:!0,placeholder:"请输入验证码",focused:a,value:i,clearable:!0,onClear:k,onClick:()=>n(!0)}),s(u,{value:i,onChange:k,maxLength:6,visible:a,onVisible:n})]})}const x={doc:`<h3>双向绑定</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberKeyboard<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
        <span class="token attr-name">readOnly</span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入验证码<span class="token punctuation">"</span></span>
        <span class="token attr-name">focused</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
        <span class="token attr-name">clearable</span>
        <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span>
        <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">onVisible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function f(){return s(p,{children:s(u,{maxLength:6,children:({value:a,setValue:n,visible:i,setVisible:k})=>s(r,{readOnly:!0,placeholder:"请输入验证码",focused:i,value:a,clearable:!0,onClear:n,onClick:()=>k(!0)})})})}const C={doc:`<h3>简化双向绑定</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberKeyboard<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span> <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setValue<span class="token punctuation">,</span> visible<span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
            <span class="token attr-name">readOnly</span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入验证码<span class="token punctuation">"</span></span>
            <span class="token attr-name">focused</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
            <span class="token attr-name">clearable</span>
            <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span>
            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NumberKeyboard</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};d.doc=E;b.doc=D;g.doc=w;m.doc=B;y.doc=F;v.doc=x;f.doc=C;function A(){return t.createElement("div",{className:"doc-content"},t.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="numberkeyboard-shu-zi-jian-pan">NumberKeyboard 数字键盘<a class="doc-anchor" href="#numberkeyboard-shu-zi-jian-pan">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>虚拟数字键盘，用于输入支付密码等场景。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> NumberKeyboard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),t.createElement("section",{className:"doc-section"},t.createElement(o,null,d),t.createElement(o,null,b),t.createElement(o,null,g),t.createElement(o,null,m),t.createElement(o,null,y),t.createElement(o,null,v),t.createElement(o,null,f)),t.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="numberkeyboardprops">NumberKeyboardProps<a class="doc-anchor" href="#numberkeyboardprops">#</a></h3>
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
<td>函数，返回与键盘组件交互的子组件</td>
<td>(params: NumberKeyboardCallbackParams) =&gt; ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>键盘输入值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>键盘默认输入值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>键盘输入值改变时触发</td>
<td>(value: string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>visible</td>
<td>键盘是否显示</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultVisible</td>
<td>键盘默认是否显示</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onVisible</td>
<td>键盘显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
<td>false</td>
</tr>
<tr>
<td>title</td>
<td>键盘标题</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>cancelText</td>
<td>取消按钮内容</td>
<td>React.ReactNode</td>
<td>'取消'</td>
</tr>
<tr>
<td>cancelProps</td>
<td>取消按钮 props</td>
<td>ButtonProps</td>
<td>-</td>
</tr>
<tr>
<td>onCancel</td>
<td>点击取消按钮时触发</td>
<td>(visible: false) =&gt; void</td>
<td>false</td>
</tr>
<tr>
<td>confirmText</td>
<td>确定按钮内容</td>
<td>React.ReactNode</td>
<td>'完成'</td>
</tr>
<tr>
<td>confirmProps</td>
<td>确定按钮 props</td>
<td>ButtonProps</td>
<td>-</td>
</tr>
<tr>
<td>onConfirm</td>
<td>点击确定按钮时触发</td>
<td>(visible: false) =&gt; void</td>
<td>false</td>
</tr>
<tr>
<td>onKeyClick</td>
<td>按键点击时触发</td>
<td>(key: string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onDelete</td>
<td>点击删除按钮时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onClose</td>
<td>键盘隐藏时触发</td>
<td>(visible: false) =&gt; void</td>
<td>false</td>
</tr>
<tr>
<td>extraKey</td>
<td>自定义额外键的值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>random</td>
<td>是否打乱按键</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>maxLength</td>
<td>最大输入长度</td>
<td>number</td>
<td>Number.MAX_SAFE_INTEGER</td>
</tr>
<tr>
<td>hideType</td>
<td>文档接受的事件类型以隐藏键盘</td>
<td>string</td>
<td>'click'</td>
</tr>
<tr>
<td>popupProps</td>
<td><code>Popup</code> 组件的 <code>props</code></td>
<td>PopupProps</td>
<td>-</td>
</tr>
<tr>
<td>topOffset</td>
<td>键盘弹起时，子元素距离页面顶部的最小距离，单位 <code>px</code></td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>bottomOffset</td>
<td>键盘弹起时，子元素距离键盘顶部的最小距离，单位 <code>px</code></td>
<td>number</td>
<td>10</td>
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
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="numberkeyboardcallbackparams">NumberKeyboardCallbackParams<a class="doc-anchor" href="#numberkeyboardcallbackparams">#</a></h3>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">NumberKeyboardCallbackParams</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function-variable function">setValue</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  visible<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token function-variable function">setVisible</span><span class="token operator">:</span> <span class="token punctuation">(</span>visible<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre>
</div><div class="doc-card"><h3 id="numberkeyboardref">NumberKeyboardRef<a class="doc-anchor" href="#numberkeyboardref">#</a></h3>
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
<td>scrollNearTop</td>
<td>滚动页面使指定元素位于键盘顶部</td>
<td>(element: HTMLElement) =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-number-keyboard-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-300<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-number-keyboard-header-height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-title-font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

  <span class="token property">--s-number-keyboard-hide-font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>

  <span class="token property">--s-number-keyboard-body-padding-x</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-body-padding-y</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>

  <span class="token property">--s-number-keyboard-key-gap</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-key-height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-key-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-rounded-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-key-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-key-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-key-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-key-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-200<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[data-s-theme='dark'] </span><span class="token punctuation">{</span>
  <span class="token property">--s-number-keyboard-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-700<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-key-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-key-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-600<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-number-keyboard-key-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-gray-500<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{A as default};
