import{R as a}from"./index-69dd4e27.js";import{u as s}from"./useCodeTool-595109b3.js";function p(){return s(),a.createElement("div",{className:"doc-content",dangerouslySetInnerHTML:{__html:`<h1 id="Stepper步进器">Stepper 步进器<a class="doc-anchor" href="#Stepper步进器">#</a></h1>
<div class="doc-card"><h3 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h3>
<p>通过键盘或按钮输入或改变数值。</p>
</div><div class="doc-card"><h3 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Stepper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<div class="doc-card"><h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>value</code> 和 <code>onChange</code> 使其变为受控组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Stepper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数量<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>count<span class="token punctuation">&#125;</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>setCount<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="最大最小值">最大最小值<a class="doc-anchor" href="#最大最小值">#</a></h3>
<p>使用 <code>min</code> 和 <code>max</code> 属性限制可以输入的最大最小值。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Stepper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数量<span class="token punctuation">"</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">5</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="步长">步长<a class="doc-anchor" href="#步长">#</a></h3>
<p>使用 <code>step</code> 属性设置点击增加或减少按钮时变化的值。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Stepper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数量<span class="token punctuation">"</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">5</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="精度">精度<a class="doc-anchor" href="#精度">#</a></h3>
<p>使用 <code>precision</code> 属性设置数值的精度，即保留的小数位数，底层通过 <code>toFixed</code> 实现，因此需要设置大于等于 0 的整数。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Stepper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数量<span class="token punctuation">"</span></span> <span class="token attr-name">precision</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">2</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><div class="doc-card"><h3 id="只读和禁用">只读和禁用<a class="doc-anchor" href="#只读和禁用">#</a></h3>
<p>只读或禁用时无法输入。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Space<span class="token punctuation">,</span> Stepper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数量<span class="token punctuation">"</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">5</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">readOnly</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数量<span class="token punctuation">"</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token number">5</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<div class="doc-card"><h3 id="StepperProps">StepperProps<a class="doc-anchor" href="#StepperProps">#</a></h3>
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
<td>当前输入值</td>
<td>number</td>
<td>string</td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认值</td>
<td>number</td>
<td>string</td>
</tr>
<tr>
<td>onChange</td>
<td>数值改变时触发</td>
<td>(value: number | null) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
<td>number</td>
<td>Number.MIN_SAFE_INTEGER</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
<td>number</td>
<td>Number.MAX_SAFE_INTEGER</td>
</tr>
<tr>
<td>valueOnClear</td>
<td>当输入框被清空时显示的值</td>
<td>number | null | 'min' | 'max'</td>
<td>null</td>
</tr>
<tr>
<td>step</td>
<td>点击按钮时增加或减少的数值</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>precision</td>
<td>数值精度，即允许的小数位数</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>inputStyle</td>
<td>输入框样式</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>inputType</td>
<td>输入框类型</td>
<td>'number' | 'digit' | 'text'</td>
<td>'number'</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位符</td>
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
<td>readOnly</td>
<td>只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>press</td>
<td>是否可以通过长按增加/减少按钮改变数值</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>pressTime</td>
<td>触发长按事件的时间，单位毫秒</td>
<td>boolean</td>
<td>350</td>
</tr>
<tr>
<td>interval</td>
<td>长按改变数值的时间间隔，单位毫秒</td>
<td>number</td>
<td>150</td>
</tr>
<tr>
<td>onBlur</td>
<td>输入框获取焦点时触发</td>
<td>(event: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onFocus</td>
<td>输入框失去焦点时触发</td>
<td>(event: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>输入框和按钮尺寸</td>
<td>number</td>
<td>36</td>
</tr>
</tbody>
</table></div>
</div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<div class="doc-card"><h3 id="SCSS变量">SCSS 变量<a class="doc-anchor" href="#SCSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$sar-stepper-height</span></span><span class="token punctuation">:</span> 36px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-stepper-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-secondary-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-stepper-input-gap</span></span><span class="token punctuation">:</span> 4px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-stepper-input-width</span></span><span class="token punctuation">:</span> 50px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-stepper-input-padding-x</span></span><span class="token punctuation">:</span> 5px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sar-stepper-button-width</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-stepper-height</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-stepper-button-font-size</span></span><span class="token punctuation">:</span> 18px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-stepper-button-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-rounded-sm</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-stepper-button-active-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-active-deep-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// 暗黑模式</span>
<span class="token property"><span class="token variable">$sar-stepper-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-secondary-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sar-stepper-button-active-dark-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$sar-dark-active-deep-bg-color</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div>
</div>`}})}export{p as default};
