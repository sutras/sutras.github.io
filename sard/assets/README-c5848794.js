import{r as e,j as i,F as r,a as n,R as a}from"./index-093297df.js";import{B as k,Z as C,h as c,_ as m,D as l}from"./index-c0b255c8.js";import"./index-2e4736b8.js";import"./index.es-471f4c94.js";const d=300,h={transition:`opacity ${d}ms ease-in-out`,opacity:0},y={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function F(){const[p,o]=e.useState(!0);return i(r,{children:[n(k,{onClick:()=>{o(s=>!s)},children:"Toggle"}),n(C,{in:p,timeout:d,children:s=>n("div",{"data-status":s,style:{...h,...y[s]},children:"这是一个淡入淡出的过渡"})})]})}const B={doc:`<h3>Transition</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Transition<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> duration <span class="token operator">=</span> <span class="token number">300</span>

<span class="token keyword">const</span> defaultStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">opacity </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>duration<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms ease-in-out</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> transitionStyles <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entering</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entered</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exiting</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exited</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>inProp<span class="token punctuation">,</span> setInProp<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setInProp</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">inProp</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>inProp<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Toggle</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Transition</span></span> <span class="token attr-name">in</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inProp<span class="token punctuation">}</span></span> <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>duration<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
            <span class="token attr-name">data-status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>state<span class="token punctuation">}</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token operator">...</span>defaultStyle<span class="token punctuation">,</span>
              <span class="token operator">...</span>transitionStyles<span class="token punctuation">[</span>state<span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            这是一个淡入淡出的过渡
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Transition</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};function E(){const[p,o]=e.useState(!0),[u,s]=e.useState("fade"),g=()=>{o(t=>!t)};return i(r,{children:[n(c.Group,{value:u,onChange:s,vertical:!0,children:["fade","slide-top","slide-right","slide-bottom","slide-left","zoom","collapse"].map(t=>n(c,{value:t,children:t},t))}),n("br",{}),n("br",{}),n(k,{onClick:g,children:"Toggle Visible"}),n("br",{}),n("br",{}),n(m,{in:p,type:u,timeout:300,children:n("section",{style:{width:100,height:100,background:"orange"}})})]})}const D={doc:`<h3>CSSTransition</h3>
`,code:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CSSTransition<span class="token punctuation">,</span> CSSTransitionProps<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>type<span class="token punctuation">,</span> setType<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>CSSTransitionProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'fade'</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">visible</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>visible<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setType<span class="token punctuation">}</span></span> <span class="token attr-name">vertical</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token string">'fade'</span><span class="token punctuation">,</span>
          <span class="token string">'slide-top'</span><span class="token punctuation">,</span>
          <span class="token string">'slide-right'</span><span class="token punctuation">,</span>
          <span class="token string">'slide-bottom'</span><span class="token punctuation">,</span>
          <span class="token string">'slide-left'</span><span class="token punctuation">,</span>
          <span class="token string">'zoom'</span><span class="token punctuation">,</span>
          <span class="token string">'collapse'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">{</span>type<span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Toggle Visible</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CSSTransition</span></span> <span class="token attr-name">in</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span> <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'orange'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CSSTransition</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>`};F.doc=B;E.doc=D;function x(){return a.createElement("div",{className:"doc-content"},a.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h1 id="transition-guo-du">Transition 过渡<a class="doc-anchor" href="#transition-guo-du">#</a></h1>
<div class="doc-card"><h3 id="jie-shao">介绍<a class="doc-anchor" href="#jie-shao">#</a></h3>
<p><code>Transition</code> 组件允许您使用简单的声明式 API 描述随时间从一个组件状态到另一个组件状态的转换。最常用的是动画化组件的安装和卸载，但也可以用来描述原地转换状态。</p>
<p><code>Transition</code> 是一个平台无关的基础组件。如果你在 CSS 中使用过渡效果，你可能会想要使用 <code>CSSTransition</code>。它继承了 <code>Transition</code> 的所有功能，但包含了更好地使用 CSS 过渡所需的额外功能。</p>
<p>默认情况下，<code>Transition</code> 组件不会改变它渲染的组件的行为，它只跟踪组件的“进入”和“退出”状态。</p>
</div><div class="doc-card"><h3 id="yin-ru">引入<a class="doc-anchor" href="#yin-ru">#</a></h3>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Transition<span class="token punctuation">,</span> CSSTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre>
</div><h2 id="dai-ma-yan-shi">代码演示<a class="doc-anchor" href="#dai-ma-yan-shi">#</a></h2>
`}}),a.createElement("section",{className:"doc-section"},a.createElement(l,null,F),a.createElement(l,null,E)),a.createElement("section",{className:"doc-section",dangerouslySetInnerHTML:{__html:`<h2 id="api">API<a class="doc-anchor" href="#api">#</a></h2>
<div class="doc-card"><h3 id="transitionprops">TransitionProps<a class="doc-anchor" href="#transitionprops">#</a></h3>
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
<td>in</td>
<td>触发进入或退出状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>children</td>
<td>可以为一个接受状态的函数，或者为 React 元素</td>
<td>ReactElement| ((status: Status, props: { [p: string]: any }) =&gt; ReactElement | null)</td>
<td>-</td>
</tr>
<tr>
<td>mountOnEnter</td>
<td>默认情况下，子组件会和父组件一起立即挂载。设置此值可以在首次 <code>in</code> 时才挂载</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>unmountOnExit</td>
<td>默认情况下，子组件在达到 <code>exited</code> 状态后保持挂载。设置此值可以在组件退出后卸载</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>appear</td>
<td>默认情况下，子组件在第一次挂载时不会执行进入状态的转换，无论 <code>in</code> 的值是多少。如果你想要这种行为，将 <code>appear</code> 和 <code>in</code> 都设置为 <code>true</code></td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>enter</td>
<td>启用或禁用进入的过渡</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>exit</td>
<td>启用或禁用退出的过渡</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>timeout</td>
<td>过渡的持续时间，单位为毫秒</td>
<td>number | { enter?: number; exit?: number; appear?: number }</td>
<td>-</td>
</tr>
<tr>
<td>onEnter</td>
<td>在进入 <code>entering</code> 状态之前触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onEntering</td>
<td>在进入 <code>entering</code> 状态之后触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onEntered</td>
<td>在进入 <code>entered</code> 状态之后触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onExit</td>
<td>在进入 <code>exiting</code> 状态之前触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onExiting</td>
<td>在进入 <code>exiting</code> 状态之后触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onExited</td>
<td>在进入 <code>exited</code> 状态之后触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
</div><div class="doc-card"><h3 id="csstransitionprops">CSSTransitionProps<a class="doc-anchor" href="#csstransitionprops">#</a></h3>
<p><code>CSSTransitionProps</code> 继承 <code>TransitionProps</code>，并拥有以下额外属性：</p>
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
<td>name</td>
<td>类名前缀。如果 <code>name=&quot;fade&quot;</code> ，在不同阶段合并的类名为：<code>fade-enter, fade-entering, fade-entered, fade-exit, fade-exiting, fade-exited</code></td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>用来使用内置的动画效果；<code>name</code> 属性优先级较高</td>
<td>'fade' | 'slide-top' | 'slide-right' | 'slide-bottom' | 'slide-left' | 'zoom' | 'collapse'</td>
<td>'fade'</td>
</tr>
</tbody>
</table></div>
</div><h2 id="zhu-ti-ding-zhi">主题定制<a class="doc-anchor" href="#zhu-ti-ding-zhi">#</a></h2>
<div class="doc-card"><h3 id="scss">SCSS<a class="doc-anchor" href="#scss">#</a></h3>
<pre class="language-scss"><code class="language-scss">
</code></pre>
</div>`}}))}export{x as default};
