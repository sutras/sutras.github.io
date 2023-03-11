import{j as h,a as s,r as u,F as l,R as t}from"./index-b9ddf759.js";import{u as w,D as c}from"./index-cef2ca44.js";import{c as v}from"./index-2e4736b8.js";import{N as T}from"./index-4f48ed9a.js";import"./index.es-5a450476.js";const r=n=>{const{className:a,style:E,children:R,value:q,defaultValue:H,onChange:G,length:i=6,type:B="border",gap:d,plainText:b,focused:J,defaultFocused:O,onFocused:Q,onClick:k,native:D,...V}=n,[o,I]=w(n,{defaultValue:""}),[g,m]=w(n,{defaultValuePropName:"defaultFocused",valuePropName:"focused",trigger:"onFocused",defaultValue:!1}),P=e=>{k==null||k(e)},S=e=>{I((e.target.value??e.detail.value).slice(0,i))},j=()=>{m(!0)},N=()=>{m(!1)},A=v("s-password-input",`s-password-input-${B}`,{"s-password-input-gapless":d===0},a),z={...E,gap:d};return h("div",{...V,className:A,onClick:P,style:z,children:[Array(i).fill(0).map((e,p)=>h("div",{className:v("s-password-input-item",{"s-password-input-item-active":g&&(p===o.length||p===o.length-1&&p===i-1)}),children:[p<o.length&&(b?s("div",{className:"s-password-input-plaintext",children:o[p]}):s("div",{className:"s-password-input-ciphertext"})),g&&p===o.length&&s("div",{className:"s-password-input-cursor"})]},p)),D&&s("input",{className:"s-password-input-input",value:o,onChange:S,onFocus:j,onBlur:N})]})};function y(){const[n,a]=u.useState("");return s(l,{children:s(T,{onChange:a,maxLength:6,focusedProp:"focused",children:s(r,{value:n})})})}const _={doc:`<h3>结合数字键盘使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> PasswordInput<span class="token punctuation">,</span> NumberKeyboard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberKeyboard</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span> <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span> <span class="token attr-name">focusedProp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>focused<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NumberKeyboard</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function f(){const[n,a]=u.useState("");return s(l,{children:s(r,{value:n,onChange:a,native:!0})})}const $={doc:`<h3>结合原生键盘使用</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> PasswordInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span> <span class="token attr-name">native</span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function F(){const[n,a]=u.useState("");return s(l,{children:s(r,{value:n,onChange:a,native:!0,type:"underline"})})}const K={doc:`<h3>下划线类型</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> PasswordInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordInput</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span>
        <span class="token attr-name">native</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>underline<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function C(){const[n,a]=u.useState("");return s(l,{children:s(r,{value:n,onChange:a,native:!0,gap:0})})}const L={doc:`<h3>间距</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> PasswordInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span> <span class="token attr-name">native</span> <span class="token attr-name">gap</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function x(){const[n,a]=u.useState("");return s(l,{children:s(r,{value:n,onChange:a,native:!0,plainText:!0})})}const M={doc:`<h3>明文显示</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> PasswordInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span> <span class="token attr-name">native</span> <span class="token attr-name">plainText</span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};y.doc=_;f.doc=$;F.doc=K;C.doc=L;x.doc=M;function ss(){return t.createElement("div",{className:"doc-content"},t.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="passwordinput-mi-ma-shu-ru-kuang">PasswordInput 密码输入框<a class="doc-anchor" href="#passwordinput-mi-ma-shu-ru-kuang">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>用于输入密码、验证码等场景可结合数字键盘组件或原生键盘使用。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> PasswordInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),t.createElement("section",{className:"doc-section"},t.createElement(c,null,y),t.createElement(c,null,f),t.createElement(c,null,F),t.createElement(c,null,C),t.createElement(c,null,x)),t.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="passwordinputprops">PasswordInputProps<a class="doc-anchor" href="#passwordinputprops">#</a></h3>
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
<td>密码输入框值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>defaultValue</td>
<td>密码输入框默认值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>密码输入框值改变时触发</td>
<td>(value: string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>length</td>
<td>密码长度</td>
<td>number</td>
<td>6</td>
</tr>
<tr>
<td>type</td>
<td>密码输入框类型</td>
<td>'border' | 'underline'</td>
<td>'border'</td>
</tr>
<tr>
<td>gap</td>
<td>密码输入框项间距</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>plainText</td>
<td>是否明文显示</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>native</td>
<td>是否使用原生键盘</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>focused</td>
<td>是否获取焦点</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultFocused</td>
<td>是否默认焦点</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onFocused</td>
<td>获取/失去焦点时触发</td>
<td>(focused: boolean) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onClick</td>
<td>点击密码输入框时触发</td>
<td>(event: React.MouseEvent) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-password-input-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-password-input-active-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-password-input-height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
  <span class="token property">--s-password-input-ciphertext-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

  <span class="token property">--s-password-input-plaintext-font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>

  <span class="token property">--s-password-input-cursor-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">--s-password-input-cursor-height</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
  <span class="token property">--s-password-input-cursor-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{ss as default};
