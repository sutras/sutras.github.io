import{a,k as n,r as e,j as o,F as l,I as x,R as s}from"./index-be529937.js";import{D as p}from"./Demo-af4ebbee.js";import"./index.es-58ca08bc.js";function u(){return a(n,{children:"复选框"})}const b={doc:`<h3>基础用法</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">复选框</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>`};function k(){const[t,c]=e.useState(!1);return a(n,{checked:t,onChange:c,children:t?"已选中":"未选中"})}const y={doc:`<h3>受控</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checked<span class="token punctuation">,</span> setChecked<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checked<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setChecked<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>checked <span class="token operator">?</span> <span class="token string">'已选中'</span> <span class="token operator">:</span> <span class="token string">'未选中'</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function i(){return o(l,{children:[a(n,{disabled:!0,checked:!0,style:{marginRight:10},children:"复选框"}),a(n,{disabled:!0,children:"复选框"})]})}const C={doc:`<h3>禁用状态</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">checked</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginRight</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        复选框
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">复选框</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function r(){const[t,c]=e.useState(["apple"]);return o(l,{children:[o("div",{children:[o(n.Group,{value:t,onChange:c,children:[a(n,{value:"apple",children:"苹果"}),a(n,{value:"banana",children:"香蕉"})]}),JSON.stringify(t)]}),o("div",{style:{marginTop:20},children:[a("div",{children:"垂直："}),o(n.Group,{vertical:!0,value:t,onChange:c,children:[a(n,{value:"apple",children:"苹果"}),a(n,{value:"banana",children:"香蕉"})]})]})]})}const f={doc:`<h3>复选框组</h3>
<p>复选框组用于收集选中状态的复选框值</p>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'apple'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">苹果</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banana<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">香蕉</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">垂直：</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox.Group</span></span> <span class="token attr-name">vertical</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">苹果</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banana<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">香蕉</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function d(){return a(n,{size:"2em",children:"复选框"})}const v={doc:`<h3>图标大小</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2em<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">复选框</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>`};function h(){return a(n,{checkedColor:"orange",defaultChecked:!0,children:"复选框"})}const w={doc:`<h3>自定义颜色</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checkedColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orange<span class="token punctuation">"</span></span> <span class="token attr-name">defaultChecked</span><span class="token punctuation">></span></span><span class="token plain-text">
      复选框
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function g(){return a(n,{type:"circle",children:"复选框"})}const E={doc:`<h3>图标类型</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">复选框</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>`};function m(){return a(n,{icon:t=>a(x,{name:t?"bi-patch-check-fill":"bi-patch-check"}),children:"复选框"})}const F={doc:`<h3>自定义图标</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap-icons/font/bootstrap-icons.css'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span>
      <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">checked</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checked <span class="token operator">?</span> <span class="token string">'bi-patch-check-fill'</span> <span class="token operator">:</span> <span class="token string">'bi-patch-check'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Icon</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      复选框
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};u.doc=b;k.doc=y;i.doc=C;r.doc=f;d.doc=v;h.doc=w;g.doc=E;m.doc=F;function A(){return s.createElement("div",{className:"doc-content"},s.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="checkbox-fu-xuan-kuang">Checkbox 复选框<a class="doc-anchor" href="#checkbox-fu-xuan-kuang">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p>在一组可选项中进行任意选择。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),s.createElement("section",{className:"doc-section"},s.createElement(p,null,u),s.createElement(p,null,k),s.createElement(p,null,i),s.createElement(p,null,r),s.createElement(p,null,d),s.createElement(p,null,h),s.createElement(p,null,g),s.createElement(p,null,m)),s.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="checkboxprops">CheckboxProps<a class="doc-anchor" href="#checkboxprops">#</a></h3>
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
<td>label 内容</td>
<td>React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>checked</td>
<td>指定当前是否选中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultChecked</td>
<td>默认是否选中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkedColor</td>
<td>选中时图标的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>(checked: boolean) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>onClick</td>
<td>点击时触发</td>
<td>onClick?: (event: React.MouseEvent) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>变化时触发</td>
<td>(checked: boolean, value: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>图标的尺寸</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>图标类型</td>
<td>'square' | 'circle'</td>
<td>'square'</td>
</tr>
<tr>
<td>value</td>
<td>被 <code>CheckboxGroup</code> 的 <code>value</code> 包含时表示选中状态</td>
<td>any</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="checkboxgroupprops">CheckboxGroupProps<a class="doc-anchor" href="#checkboxgroupprops">#</a></h3>
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
<td>指定选中的选项</td>
<td>any[]</td>
<td>[]</td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认选中的选项</td>
<td>any[]</td>
<td>[]</td>
</tr>
<tr>
<td>onChange</td>
<td>变化时触发</td>
<td>(value: any[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkedColor</td>
<td>选中时图标的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>(checked: boolean) =&gt; React.ReactNode</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>图标的尺寸</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>图标类型</td>
<td>'square' | 'circle'</td>
<td>'square'</td>
</tr>
<tr>
<td>vertical</td>
<td>是否垂直排列</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="css-bian-liang">CSS 变量<a class="doc-anchor" href="#css-bian-liang">#</a></h3>
<pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--s-checkbox-icon-font-size</span><span class="token punctuation">:</span> 1.25em<span class="token punctuation">;</span>
  <span class="token property">--s-checkbox-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-quaternary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-checkbox-icon-checked-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--s-checkbox-icon-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--s-checkbox-label-margin-left</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>

  <span class="token property">--s-checkbox-margin-left</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">--s-checkbox-margin-top</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>`}}))}export{A as default};
