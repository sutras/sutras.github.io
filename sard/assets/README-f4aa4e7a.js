import{a as n,F as r,f as P,j as i,P as p,h as g,r as f,R as l}from"./index-ba304632.js";import{D as k}from"./Demo-5a7b5c0e.js";import{C as d,a as h}from"./area-a5fea70b.js";import"./index.es-526e18cf.js";function b(){return n(r,{children:n(d,{options:h,fieldNames:{label:"name",value:"code"},onChange:(s,t)=>{P.show(t.map(c=>c.name).join("/")),console.log(s,t)}})})}const A={doc:`<h3>基础使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> area <span class="token keyword">from</span> <span class="token string">'../../../../assets/area.json'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> otpions</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>otpions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> otpions<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>area<span class="token punctuation">}</span></span>
        <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'code'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function v(){return n(r,{children:i(p,{title:"请选择省市区",children:[n(p.Outlet,{children:({value:a,triggerArgs:[,s=[]],setVisible:t,setValue:c})=>n(g,{readOnly:!0,placeholder:"请选择省市区",value:(a==null?void 0:a.length)&&s.map(o=>o.name).join("/")||"",clearable:!0,onClear:()=>c([]),onClick:()=>t(!0)})}),n(p.Target,{children:n(d,{options:h,fieldNames:{label:"name",value:"code"},onChange:(...a)=>console.log("change",...a),onSelect:(...a)=>console.log("select",...a)})})]})})}const O={doc:`<h3>配合弹出框使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader<span class="token punctuation">,</span> Popout<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> area <span class="token keyword">from</span> <span class="token string">'../../../../assets/area.json'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> <span class="token literal-property property">triggerArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> setVisible<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">readOnly</span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                <span class="token punctuation">(</span>value<span class="token operator">?.</span>length <span class="token operator">&amp;&amp;</span>
                  options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token string">''</span>
              <span class="token punctuation">}</span></span>
              <span class="token attr-name">clearable</span>
              <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
            <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>area<span class="token punctuation">}</span></span>
            <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'code'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function x(){return n(r,{children:i(p,{title:"请选择省市区",children:[n(p.Outlet,{children:({value:a,triggerArgs:[,s=[]],setVisible:t,setValue:c})=>n(g,{readOnly:!0,placeholder:"请选择省市区",value:(a==null?void 0:a.length)&&s.map(o=>o.name).join("/")||"",clearable:!0,onClear:()=>c([]),onClick:()=>t(!0)})}),n(p.Target,{children:n(d,{options:h,fieldNames:{label:"name",value:"code"},tabsProps:{swipeable:!0}})})]})})}const F={doc:`<h3>可滑动的</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader<span class="token punctuation">,</span> Popout<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> area <span class="token keyword">from</span> <span class="token string">'../../../../assets/area.json'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> <span class="token literal-property property">triggerArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> setVisible<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">readOnly</span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                <span class="token punctuation">(</span>value<span class="token operator">?.</span>length <span class="token operator">&amp;&amp;</span>
                  options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token string">''</span>
              <span class="token punctuation">}</span></span>
              <span class="token attr-name">clearable</span>
              <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
            <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>area<span class="token punctuation">}</span></span>
            <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'code'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">tabsProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">swipeable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function C(){const[a,s]=f.useState(!1),[t,c]=f.useState(Array(10).fill(0).map((e,u)=>({label:"label"+u,value:u,children:[]}))),o=(e,u)=>{u<2&&e.children.length===0&&(s(!0),setTimeout(()=>{e.children=Array(10).fill(0).map((y,m)=>({label:e.label+"-label"+m,value:e.value+"-"+m,children:u<1?[]:null})),c(t.slice()),s(!1)},500))};return n(r,{children:i(p,{title:"请选择",children:[n(p.Outlet,{children:({value:e,triggerArgs:[,u=[]],setVisible:y,setValue:m})=>n(g,{readOnly:!0,placeholder:"请选择",value:(e==null?void 0:e.length)&&u.map(E=>E.label).join("/")||"",clearable:!0,onClear:()=>m([]),onClick:()=>y(!0)})}),n(p.Target,{children:n(d,{loading:a,options:t,onSelect:o})})]})})}const T={doc:`<h3>异步加载</h3>
<p>通过监听 <code>onSelect</code> 事件，获取当前选中的选项，将异步获取的数据作为 <code>children</code> 属性值，
再把组件的 <code>options</code> 更新一下，使组件重新渲染。</p>
<p>如果选项的 <code>children</code> 是需要用户点击时再通过接口获取的，
此选项的 <code>children</code> 需初始化为空数组。</p>
<p>在请求接口的过程中，给组件添加 <code>loading</code> 属性让其显示一个加载效果。</p>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader<span class="token punctuation">,</span> Popout<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>options<span class="token punctuation">,</span> setOptions<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>
    <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'label'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> i<span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">option<span class="token punctuation">,</span> columnIndex</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>columnIndex <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> option<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        option<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> option<span class="token punctuation">.</span>label <span class="token operator">+</span> <span class="token string">'-label'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> option<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'-'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
              <span class="token literal-property property">children</span><span class="token operator">:</span> columnIndex <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token function">setOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> <span class="token literal-property property">triggerArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> setVisible<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">readOnly</span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                <span class="token punctuation">(</span>value<span class="token operator">?.</span>length <span class="token operator">&amp;&amp;</span>
                  options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token string">''</span>
              <span class="token punctuation">}</span></span>
              <span class="token attr-name">clearable</span>
              <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
            <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span>
            <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
            <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSelect<span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function w(){return n(r,{children:i(p,{title:"请选择省市区",children:[n(p.Outlet,{children:({value:a,triggerArgs:[,s=[]],setVisible:t,setValue:c})=>n(g,{readOnly:!0,placeholder:"请选择省市区",value:(a==null?void 0:a.length)&&s.map(o=>o.name).join("/")||"",clearable:!0,onClear:()=>c([]),onClick:()=>t(!0)})}),n(p.Target,{children:n(d,{options:h,fieldNames:{label:"name",value:"code"},optionTop:a=>i("div",{style:{padding:"8px var(--s-cascader-option-padding-x)",backgroundColor:"rgba(var(--s-warning-rgb), 0.1)",color:"var(--s-warning-text)"},children:["当前为第",a+1,"级"]})})})]})})}const D={doc:`<h3>自定义选项上方内容</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader<span class="token punctuation">,</span> Popout<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> area <span class="token keyword">from</span> <span class="token string">'../../../../assets/area.json'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> <span class="token literal-property property">triggerArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> setVisible<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">readOnly</span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                <span class="token punctuation">(</span>value<span class="token operator">?.</span>length <span class="token operator">&amp;&amp;</span>
                  options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token string">''</span>
              <span class="token punctuation">}</span></span>
              <span class="token attr-name">clearable</span>
              <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
            <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>area<span class="token punctuation">}</span></span>
            <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'code'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">optionTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">columnIndex</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'8px var(--s-cascader-option-padding-x)'</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(var(--s-warning-rgb), 0.1)'</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'var(--s-warning-text)'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span><span class="token plain-text">
                当前为第</span><span class="token punctuation">{</span>columnIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token plain-text">级
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function j(){const a=Array(10).fill(0).map((s,t)=>({label:`label${t}`,value:`${t}`,disabled:t<3,children:Array(10).fill(0).map((c,o)=>({label:`label${t}-label${o}`,value:`${t}-${o}`,disabled:o<3}))}));return n(r,{children:i(p,{title:"请选择省市区",children:[n(p.Outlet,{children:({value:s,triggerArgs:[,t=[]],setVisible:c,setValue:o})=>n(g,{readOnly:!0,placeholder:"请选择省市区",value:(s==null?void 0:s.length)&&t.map(e=>e.label).join("/")||"",clearable:!0,onClear:()=>o([]),onClick:()=>c(!0)})}),n(p.Target,{children:n(d,{options:a,onChange:(...s)=>console.log("change",...s),onSelect:(...s)=>console.log("select",...s)})})]})})}const N={doc:`<h3>禁选选项</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader<span class="token punctuation">,</span> Popout<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">label</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">label</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-label</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
              <span class="token literal-property property">disabled</span><span class="token operator">:</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> <span class="token literal-property property">triggerArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> setVisible<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">readOnly</span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择省市区<span class="token punctuation">"</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                <span class="token punctuation">(</span>value<span class="token operator">?.</span>length <span class="token operator">&amp;&amp;</span>
                  options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token string">''</span>
              <span class="token punctuation">}</span></span>
              <span class="token attr-name">clearable</span>
              <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Outlet</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
            <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout.Target</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popout</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};b.doc=A;v.doc=O;x.doc=F;C.doc=T;w.doc=D;j.doc=N;function $(){return l.createElement("div",{className:"doc-content"},l.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="cascader-ji-lian-xuan-ze">Cascader 级联选择<a class="doc-anchor" href="#cascader-ji-lian-xuan-ze">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>用于在多层级数据中进行选择，常用于省市区、组织架构选择。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),l.createElement("section",{className:"doc-section"},l.createElement(k,null,b),l.createElement(k,null,v),l.createElement(k,null,x),l.createElement(k,null,C),l.createElement(k,null,w),l.createElement(k,null,j)),l.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="cascaderprops">CascaderProps<a class="doc-anchor" href="#cascaderprops">#</a></h3>
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
<td>any[]</td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认的选中项</td>
<td>any[]</td>
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
<td>tabsProps</td>
<td><code>Tabs</code> 组件 <code>props</code></td>
<td>TabsProps</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>选择完成后时触发</td>
<td>(value: any[], selectedOptions: CascaderOption[]) =&gt; void</td>
<td>-</td>
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
<td>(option: CascaderOption, selected: boolean) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>loading</td>
<td>加载状态展示</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="cascaderoption">CascaderOption<a class="doc-anchor" href="#cascaderoption">#</a></h3>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CascaderOption</span> <span class="token punctuation">{</span>
  label<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  children<span class="token operator">?</span><span class="token operator">:</span> CascaderOption<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
</div><div class="doc-card"><h3 id="cascaderfieldnames">CascaderFieldNames<a class="doc-anchor" href="#cascaderfieldnames">#</a></h3>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">CascaderFieldNames</span> <span class="token punctuation">{</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre>
</div><div class="doc-card"><h3 id="defaultfieldnames">defaultFieldNames<a class="doc-anchor" href="#defaultfieldnames">#</a></h3>
<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> defaultFieldNames<span class="token operator">:</span> CascaderFieldNames <span class="token operator">=</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token string">'label'</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
  disabled<span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token string">'children'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-cascader-selected-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-cascader-options-height</span><span class="token punctuation">:</span> 320px<span class="token punctuation">;</span>

  <span class="token property">--s-cascader-option-padding-y</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">--s-cascader-option-padding-x</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">--s-cascader-option-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-cascader-option-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-leading-normal<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-cascader-option-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-cascader-loading-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-text-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-cascader-loading-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-mask-white-legible<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-cascader-loading-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[data-s-theme='dark'] </span><span class="token punctuation">{</span>
  <span class="token property">--s-cascader-loading-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-mask-legible<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{$ as default};
