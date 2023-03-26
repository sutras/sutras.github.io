import{r as l,j as p,F as k,a as n,B as v,P as t,f as g,h as m,C as d,M as r,i as P,D as w,o as D,R as c}from"./index-be529937.js";import{D as u}from"./Demo-af4ebbee.js";import{a as B}from"./area-bc21e994.js";import"./index.es-58ca08bc.js";function C(){const[a,s]=l.useState(!1);return p(k,{children:[n(v,{onClick:()=>s(!0),children:"显示弹出框"}),p(t,{visible:a,title:"标题",onClose:s,onConfirm:()=>g.show("确定"),onCancel:()=>g.show("取消"),children:[n("div",{children:"弹出框内容"}),n("div",{children:"弹出框内容"}),n("div",{children:"弹出框内容"})]})]})}const A={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Popout<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">显示弹出框</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
        <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'确定'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'取消'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function E(){const[a,s]=l.useState(!1);return p(k,{children:[n(v,{onClick:()=>s(!0),children:"显示弹出框"}),p(t,{visible:a,title:"标题",type:"compact",onClose:s,onConfirm:()=>g.show("确定"),onCancel:()=>g.show("取消"),children:[n("div",{children:"弹出框内容"}),n("div",{children:"弹出框内容"}),n("div",{children:"弹出框内容"})]})]})}const j={doc:`<h3>紧凑类型</h3>
<p>通过将 <code>type</code> 设为 <code>compact</code> 可以将确定/取消按钮放到标题两侧，以便节省空间。</p>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Popout<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">显示弹出框</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>compact<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
        <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'确定'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">'取消'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">弹出框内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function f(){const[a,s]=l.useState(!1),[o,e]=l.useState(),[h,i]=l.useState("");return p(k,{children:[n(m,{readOnly:!0,placeholder:"请选择日期",value:h,onChange:i,clearable:!0,onClear:i,onClick:()=>s(!0)}),n(t,{title:"请选择日期",visible:a,onClose:s,onConfirm:()=>i(o.toLocaleDateString()),children:n(d,{value:o,onChange:e})})]})}const V={doc:`<h3>结合日期组件</h3>
<p>弹出框内部可以放置任何内容。</p>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Popout<span class="token punctuation">,</span> Calendar<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>date<span class="token punctuation">,</span> setDate<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Date</span></span><span class="token punctuation">></span></span><span class="token plain-text">()
  const [value, setValue] = useState('')

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
        <span class="token attr-name">readOnly</span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span>
        <span class="token attr-name">clearable</span>
        <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setVisible<span class="token punctuation">}</span></span>
        <span class="token attr-name">onConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>date<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setDate<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function b(){return n(k,{children:p(t,{title:"请选择出生日期",children:[n(t.Outlet,{children:({value:a,setValue:s,setVisible:o})=>n(m,{readOnly:!0,placeholder:"请选择日期",value:(a==null?void 0:a.toLocaleDateString())||"",clearable:!0,onClear:()=>s(),onClick:()=>o(!0)})}),n(t.Target,{children:n(d,{})})]})})}const O={doc:`<h3>简化操作</h3>
<p>使用 <code>PopoutOutlet</code> 输出值，使用 <code>PopoutTarget</code> 连接目标组件，
以便减少控制显隐、中间值等状态和回调的声明；
并且将输出组件和目标组件结合在 <code>Popout</code> 组件下，为搭配 <code>Form</code> 组件一起使用提供了便利。</p>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Popout<span class="token punctuation">,</span> Calendar<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择出生日期<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setValue<span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">readOnly</span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token operator">?.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">clearable</span>
              <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function y(){const[a,s]=l.useState(new Date);return n(k,{children:p(t,{title:"请选择出生日期",value:a,onChange:e=>{s(e)},children:[n(t.Outlet,{children:({value:e,setValue:h,setVisible:i})=>n(m,{readOnly:!0,placeholder:"请选择日期",value:(e==null?void 0:e.toLocaleDateString())||"",clearable:!0,onClear:()=>h(),onClick:()=>i(!0)})}),n(t.Target,{children:n(d,{})})]})})}const T={doc:`<h3>受控的弹出框</h3>
<p>弹出框代理了目标组件的值及变化的回调，可以设置初始值，或将其变为受控组件。</p>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Popout<span class="token punctuation">,</span> Calendar<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Date</span></span><span class="token punctuation">></span></span><span class="token plain-text">(new Date())

  const handleChange = (value: Date) => </span><span class="token punctuation">{</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token plain-text">

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择出生日期<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setValue<span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">readOnly</span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token operator">?.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">clearable</span>
              <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}</span>`};function x(){return n(k,{children:p(t,{title:"请选择出生日期",fast:!0,showConfirm:!1,children:[n(t.Outlet,{children:({value:a,setValue:s,setVisible:o})=>n(m,{readOnly:!0,placeholder:"请选择日期",value:(a==null?void 0:a.toLocaleDateString())||"",clearable:!0,onClear:()=>s(),onClick:()=>o(!0)})}),n(t.Target,{children:n(d,{})})]})})}const S={doc:`<h3>快捷确认</h3>
<p>添加 <code>fast</code> 属性可以在组件触发回调时快速确定，此时可以将确定按钮隐藏。</p>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Popout<span class="token punctuation">,</span> Calendar<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择出生日期<span class="token punctuation">"</span></span> <span class="token attr-name">fast</span> <span class="token attr-name">showConfirm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setValue<span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">readOnly</span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token operator">?.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">clearable</span>
              <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function F(){return p(r.Group,{children:[p(t,{title:"日历",children:[n(t.Outlet,{children:({value:a,setVisible:s})=>n(r,{onClick:()=>s(!0),value:a==null?void 0:a.toLocaleDateString(),title:"日历",isLink:!0})}),n(t.Target,{children:n(d,{})})]}),p(t,{title:"级联选择",children:[n(t.Outlet,{children:({triggerArgs:[,a=[]],setVisible:s})=>n(r,{onClick:()=>s(!0),value:a.map(o=>o.name).join("/"),title:"级联选择",isLink:!0})}),n(t.Target,{children:n(P,{options:B,fieldNames:{label:"name",value:"code"}})})]}),p(t,{title:"日期时间",children:[n(t.Outlet,{children:({value:a,setVisible:s})=>n(r,{onClick:()=>s(!0),value:a==null?void 0:a.toLocaleString(),title:"日期时间",isLink:!0})}),n(t.Target,{children:n(w,{})})]}),p(t,{title:"选择器",children:[n(t.Outlet,{children:({value:a,triggerArgs:[,s=[]],setVisible:o})=>n(r,{onClick:()=>o(!0),value:(a==null?void 0:a.length)&&s.map(e=>e.label),title:"选择器",isLink:!0})}),n(t.Target,{children:n(D,{columns:[Array(10).fill(0).map((a,s)=>({label:`label${s}`,value:s}))]})})]})]})}const L={doc:`<h3>结合 Cell 组件使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Popout<span class="token punctuation">,</span> Calendar<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Picker<span class="token punctuation">,</span> DatetimePicker<span class="token punctuation">,</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> area <span class="token keyword">from</span> <span class="token string">'../../../../assets/area.json'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日历<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token operator">?.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日历<span class="token punctuation">"</span></span>
              <span class="token attr-name">isLink</span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calendar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>级联选择<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">triggerArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>级联选择<span class="token punctuation">"</span></span>
              <span class="token attr-name">isLink</span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
            <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>area<span class="token punctuation">}</span></span>
            <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'code'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日期时间<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token operator">?.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日期时间<span class="token punctuation">"</span></span>
              <span class="token attr-name">isLink</span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatetimePicker</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择器<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> <span class="token literal-property property">triggerArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> setVisible <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                value<span class="token operator">?.</span>length <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">option</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
              <span class="token punctuation">}</span></span>
              <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择器<span class="token punctuation">"</span></span>
              <span class="token attr-name">isLink</span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span>
            <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">label</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> i <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};C.doc=A;E.doc=j;f.doc=V;b.doc=O;y.doc=T;x.doc=S;F.doc=L;function $(){return c.createElement("div",{className:"doc-content"},c.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="popout-tan-chu-kuang">Popout 弹出框<a class="doc-anchor" href="#popout-tan-chu-kuang">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>底部弹出框，可以控制组件的展示与交互，可作为 <code>Picker</code> 等组件的弹出框容器。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Popout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),c.createElement("section",{className:"doc-section"},c.createElement(u,null,C),c.createElement(u,null,E),c.createElement(u,null,f),c.createElement(u,null,b),c.createElement(u,null,y),c.createElement(u,null,x),c.createElement(u,null,F)),c.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="popoutprops">PopoutProps<a class="doc-anchor" href="#popoutprops">#</a></h3>
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
<td>弹出框标题</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>visible</td>
<td>是否显示弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>defaultVisible</td>
<td>默认是否显示弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>onVisible</td>
<td>弹出框显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>showCancel</td>
<td>是否显示取消按钮，适用 <code>loose</code> 类型</td>
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
<td>是否显示确定按钮，适用 <code>loose</code> 类型</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>confirmText</td>
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
<td>showClose</td>
<td>是否显示关闭按钮，适用 <code>loose</code> 类型</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>type</td>
<td>弹出框按钮排版方式</td>
<td>'compact' | 'loose'</td>
<td>'loose'</td>
</tr>
<tr>
<td>fast</td>
<td>快捷选择，在目标组件触发改变事件时自动选择，通常需要隐藏确定按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onClose</td>
<td>点击确定、取消、关闭按钮时触发</td>
<td>(visible: false) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onCancel</td>
<td>点击取消按钮时触发</td>
<td>(visible: false) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onConfirm</td>
<td>点击确定按钮时触发</td>
<td>(visible: false) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>popupProps</td>
<td><code>Popup</code> 组件的 <code>props</code></td>
<td>PopupProps</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>目标组件的当前值</td>
<td>any</td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>目标组件的默认值</td>
<td>any</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>目标组件值改变时触发</td>
<td>(value: any) =&gt; void</td>
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
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="popoutbridgeprops">PopoutBridgeProps<a class="doc-anchor" href="#popoutbridgeprops">#</a></h3>
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
<td>valuePropName</td>
<td>目标组件值的属性名</td>
<td>string</td>
<td>'value'</td>
</tr>
<tr>
<td>trigger</td>
<td>目标组件值改变事件的属性名</td>
<td>string</td>
<td>'onChange'</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="popoutoutletprops">PopoutOutletProps<a class="doc-anchor" href="#popoutoutletprops">#</a></h3>
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
<td>目标组件值的属性名</td>
<td>(params: PopoutOutletCallbackParams) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="popoutoutletcallbackparams">PopoutOutletCallbackParams<a class="doc-anchor" href="#popoutoutletcallbackparams">#</a></h3>
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
<td>弹出框组件的当前值</td>
<td>any</td>
</tr>
<tr>
<td>triggerArgs</td>
<td>目标组件值改变事件回调的参数列表，通常用于展示 <code>label</code> 文案</td>
<td>any[]</td>
</tr>
<tr>
<td>setValue</td>
<td>设置弹出框组件和目标组件的当前值</td>
<td>(value?: any) =&gt; void</td>
</tr>
<tr>
<td>setVisible</td>
<td>设置弹出框的显隐</td>
<td>(visible: boolean) =&gt; void</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-popout-border-top-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-rounded-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-popout-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-popout-close-padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">--s-popout-close-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-popout-close-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-secondary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-popout-header-compact-height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token property">--s-popout-header-loose-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
  <span class="token property">--s-popout-header-loose-padding-x</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>
    <span class="token function">var</span><span class="token punctuation">(</span>--s-popout-close-padding<span class="token punctuation">)</span> <span class="token operator">*</span> 2 <span class="token operator">+</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-popout-close-font-size<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-popout-title-max-width</span><span class="token punctuation">:</span> 65%<span class="token punctuation">;</span>
  <span class="token property">--s-popout-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-popout-title-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-emphasis-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-popout-footer-gap-y</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">--s-popout-footer-gap-x</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

  <span class="token property">--s-popout-button-gap</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{$ as default};
